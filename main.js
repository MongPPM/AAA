import { auth, db, googleProvider } from './firebase.js';
import { APP_VERSION, CHANGELOG } from './version.js';
import { t, setLanguage, getLanguage, applyI18n, dateLocale } from './i18n.js';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  onSnapshot, getDoc, setDoc, query, orderBy, writeBatch, getDocs,
} from 'firebase/firestore';

// ========================
// Data & Configuration
// ========================
const CATEGORIES = {
  income: [
    { id: 'salary',     emoji: '💼' },
    { id: 'freelance',  emoji: '💻' },
    { id: 'investment', emoji: '📈' },
    { id: 'gift',       emoji: '🎁' },
    { id: 'other_in',   emoji: '💰' },
  ],
  expense: [
    { id: 'food',          emoji: '🍜' },
    { id: 'transport',     emoji: '🚗' },
    { id: 'shopping',      emoji: '🛍️' },
    { id: 'utilities',     emoji: '💡' },
    { id: 'health',        emoji: '🏥' },
    { id: 'entertainment', emoji: '🎮' },
    { id: 'education',     emoji: '📚' },
    { id: 'rent',          emoji: '🏠' },
    { id: 'other_ex',      emoji: '📦' },
  ],
};
// Category label helper (locale-aware)
function catLabel(id) { return t(`cat.${id}`) || id; }

const CAT_COLORS = {
  income:  ['#22c55e','#16a34a','#86efac','#4ade80','#bbf7d0'],
  expense: ['#f43f5e','#e11d48','#fb7185','#f97316','#fb923c','#fbbf24','#a855f7','#8b5cf6','#6366f1'],
};

const CAT_MAP = new Map(
  [...CATEGORIES.income, ...CATEGORIES.expense].map(c => [c.id, c])
);
function getCatEntry(id) {
  const c = CAT_MAP.get(id);
  if (!c) return { label: id, emoji: '📌' };
  return { ...c, label: catLabel(id) };
}

// Omise publishable key (public — safe to expose in frontend)
// ⚠️ TODO: Replace with your actual key from https://dashboard.omise.co → Keys
const OMISE_PUBLIC_KEY = 'pkey_test_YOUR_OMISE_PUBLIC_KEY';
const FREE_SCAN_LIMIT = 5; // per day

// Dev/admin accounts — can toggle Free/Pro for testing
const DEV_EMAILS = ['nunmongss@gmail.com'];
let devPlanOverride = localStorage.getItem('mf_dev_plan') || 'pro';

// ========================
// State
// ========================
let transactions = JSON.parse(localStorage.getItem('mf_cache_tx') || '[]');
let currentType  = 'income';
let pendingDeleteId = null;
let editingId    = null;
let currentView  = 'dashboard';
let cutoffDay    = parseInt(localStorage.getItem('mf_cutoff_day')) || 1;
let txViewMode   = 'list';  // 'list' | 'split'
let txRangeMode  = 'cycle'; // 'all' | 'cycle'
let txSearch     = '';      // search query
let pendingImageData     = null;
let pendingImageMime     = null;
let pendingImageStored   = null; // compressed base64 for saving
let dailyChartInstance = null;

// Budget & notifications state
let budgets = {};         // { catId: number }
let budgetSettings = { enabled: true, notifyNear: true, notifyOver: true, nearThreshold: 80, notifyMode: 'always' };
let budgetAlerted = {};   // { `${catId}_${cycleStart}_{near|over}`: true }

// Recurring state
let recurringItems = [];
let recurringShownToday = new Set(); // toast shown this session
let unsubscribeRecurring = null;
let editingRecurringId = null;
let pendingRecurringId = null; // recurring source when adding from quick-fill

// Savings Goal & Monthly Chart
let savingsGoal = null;
let monthlyChartInstance = null;

// Auth & plan state
let currentUser      = null;
let userPlan         = 'free'; // 'free' | 'pro'
let scanCount        = 0;
let scanDate         = ''; // YYYY-MM-DD daily tracking
let unsubscribeSnap  = null;

// ========================
// Firestore Helpers
// ========================
const txCol        = () => collection(db, 'users', currentUser.uid, 'transactions');
const metaRef      = () => doc(db, 'users', currentUser.uid);
const recurringCol = () => collection(db, 'users', currentUser.uid, 'recurring');

// ========================
// Auth State Driver
// ========================

// Optimistic UI: if cache exists, show app immediately while auth verifies
const hasCache = transactions.length > 0;
if (hasCache) {
  showApp();
  setSyncStatus('syncing');
  renderAll();
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user;
    showApp();
    updateUserProfile();
    updateDevToggleUI(); // always run — hides button for non-dev, shows for dev
    setSyncStatus('syncing');
    if (transactions.length > 0) renderAll();
    loadUserMeta();
    setupRealtimeListener();
  } else {
    currentUser = null;
    if (unsubscribeSnap) { unsubscribeSnap(); unsubscribeSnap = null; }
    if (unsubscribeRecurring) { unsubscribeRecurring(); unsubscribeRecurring = null; }
    transactions = [];
    recurringItems = [];
    budgets = {};
    userPlan = 'free';
    // Always hide dev toggle on logout
    const devBtn = document.getElementById('btn-dev-toggle');
    if (devBtn) devBtn.style.display = 'none';
    showLoginScreen();
  }
});

function showLoginScreen() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app-wrapper').style.display  = 'none';
  hideLoading();
}

function showApp() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-wrapper').style.display  = '';
}

async function handleSignIn() {
  try {
    showLoading(t('loading.signingIn'));
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    hideLoading();
    showToast(t('toast.signInError') + err.message, 'error');
  }
}

async function handleSignOut() {
  if (unsubscribeSnap) { unsubscribeSnap(); unsubscribeSnap = null; }
  await signOut(auth);
  localStorage.removeItem('mf_cache_tx');
}

function updateUserProfile() {
  if (!currentUser) return;
  const avatar = document.getElementById('user-avatar');
  const name   = document.getElementById('user-name');
  if (avatar) avatar.src = currentUser.photoURL || '';
  if (name)   name.textContent = currentUser.displayName || currentUser.email || '';
  // Mobile top bar
  const mAvatar = document.getElementById('mobile-avatar');
  const mName   = document.getElementById('mobile-user-name');
  if (mAvatar) mAvatar.src = currentUser.photoURL || '';
  if (mName)   mName.textContent = currentUser.displayName || currentUser.email || '';
}

// ========================
// Firestore: Real-time Listener
// ========================
function setupRealtimeListener() {
  if (unsubscribeSnap) unsubscribeSnap();
  const q = query(txCol(), orderBy('date', 'desc'));
  setSyncStatus('syncing');
  unsubscribeSnap = onSnapshot(q, (snapshot) => {
    transactions = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    cleanupOldImages();
    saveLocalCache();
    renderAll();
    setSyncStatus('online');
    hideLoading();
  }, (err) => {
    console.error('[Firestore] snapshot error:', err);
    setSyncStatus('offline');
    hideLoading();
    showToast('⚠️ Firestore error: ' + err.message, 'error', 8000);
  });

  // Setup recurring listener
  if (unsubscribeRecurring) unsubscribeRecurring();
  unsubscribeRecurring = onSnapshot(recurringCol(), (snap) => {
    recurringItems = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    renderRecurringList();
    checkRecurringDue();
  });
}

// Pro: delete imageData older than 90 days (passive cleanup on each load)
function cleanupOldImages() {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 90);
  transactions.forEach(t => {
    if (t.imageData && new Date(t.createdAt) < cutoff) {
      t.imageData = '';
      fsUpdate(t.id, { imageData: '' }).catch(() => {});
    }
  });
}

// ========================
// Firestore: Meta (settings + plan)
// ========================
async function loadUserMeta() {
  try {
    const snap = await getDoc(metaRef());
    if (snap.exists()) {
      const data = snap.data();
      if (data.cutoff_day) {
        cutoffDay = parseInt(data.cutoff_day) || 1;
        localStorage.setItem('mf_cutoff_day', cutoffDay);
      }
      // Always load scan data (dev accounts too)
      scanCount = data.scan_count || 0;
      scanDate  = data.scan_date  || '';
      // Dev accounts use local override for plan, others use Firestore
      userPlan = DEV_EMAILS.includes(currentUser?.email)
        ? devPlanOverride
        : (data.plan || 'free');
      // Load budgets
      budgets = data.budgets || {};
      // Load budgetSettings
      budgetSettings = Object.assign(
        { enabled: true, notifyNear: true, notifyOver: true, nearThreshold: 80, notifyMode: 'always' },
        data.budgetSettings || {}
      );
      // Load savings goal
      savingsGoal = data.savingsGoal || null;
    } else if (DEV_EMAILS.includes(currentUser?.email)) {
      userPlan = devPlanOverride;
    }
    updatePlanUI();
    syncBudgetSettingsUI();
    if (DEV_EMAILS.includes(currentUser?.email)) updateDevToggleUI();
  } catch (err) {
    console.error('loadUserMeta error:', err);
  }
}

async function fsSaveMeta(data) {
  await setDoc(metaRef(), data, { merge: true });
}

function updatePlanUI() {
  const badge = document.getElementById('plan-badge');
  if (badge) {
    badge.textContent = userPlan === 'pro' ? '⭐ Pro' : 'Free';
    badge.className   = 'plan-badge ' + userPlan;
  }
  // Mobile plan badge + updates button
  const mobileBadge = document.getElementById('mobile-plan-badge');
  if (mobileBadge) {
    mobileBadge.textContent = userPlan === 'pro' ? '⭐ Pro' : 'Free';
    mobileBadge.className   = 'plan-badge mobile-plan-badge ' + userPlan;
  }
  const mUpdatesBtn = document.getElementById('mobile-btn-updates');
  if (mUpdatesBtn) mUpdatesBtn.style.display = userPlan === 'pro' ? 'none' : '';
  // Hide upgrade button if already Pro
  const upgradeBtn = document.getElementById('btn-upgrade');
  if (upgradeBtn) upgradeBtn.style.display = userPlan === 'pro' ? 'none' : '';

  // Update scan count info
  const scanInfo = document.getElementById('scan-info');
  if (scanInfo) {
    if (userPlan === 'pro') {
      scanInfo.textContent = t('scan.pro');
      scanInfo.className = 'scan-info-row pro';
    } else {
      const today = new Date().toLocaleDateString('sv'); // YYYY-MM-DD local
      const used  = scanDate === today ? scanCount : 0;
      const left  = FREE_SCAN_LIMIT - used;
      scanInfo.textContent = left > 0
        ? t('scan.free.left', { left, total: FREE_SCAN_LIMIT })
        : t('scan.free.exhausted');
      const cls = left <= 0 ? 'exhausted' : left === 1 ? 'danger' : left <= 3 ? 'warning' : '';
      scanInfo.className = `scan-info-row${cls ? ' ' + cls : ''}`;
    }
  }
  // Pro-only UI elements
  const pdfBtn = document.getElementById('btn-export-pdf');
  if (pdfBtn) pdfBtn.style.display = userPlan === 'pro' ? '' : 'none';
}

// ========================
// Firestore: CRUD
// ========================
async function fsAdd(txData) {
  setSyncStatus('syncing');
  await addDoc(txCol(), txData);
}

async function fsUpdate(id, txData) {
  setSyncStatus('syncing');
  await updateDoc(doc(txCol(), id), txData);
}

async function fsDelete(id) {
  setSyncStatus('syncing');
  await deleteDoc(doc(txCol(), id));
}

// ========================
// Scan Limit Check
// ========================
async function checkAndIncrementScan() {
  if (userPlan === 'pro') return true;

  const today = new Date().toLocaleDateString('sv'); // YYYY-MM-DD local
  const snap  = await getDoc(metaRef());
  const meta  = snap.exists() ? snap.data() : {};

  const sameDay = meta.scan_date === today;
  const count   = sameDay ? (meta.scan_count || 0) : 0;

  if (count >= FREE_SCAN_LIMIT) {
    openUpgradeModal(t('scan.limit.upgrade', { total: FREE_SCAN_LIMIT }));
    return false;
  }

  const newCount = count + 1;
  await fsSaveMeta({ scan_count: newCount, scan_date: today });
  scanCount = newCount;
  scanDate  = today;
  updatePlanUI();
  return true;
}

// ========================
// Loading Overlay
// ========================
function showLoading(msg) {
  if (msg === undefined) msg = t('loading.default');
  document.getElementById('loading-text').textContent = msg;
  document.getElementById('loading-overlay').classList.add('active');
}
function hideLoading() {
  document.getElementById('loading-overlay').classList.remove('active');
}

// ========================
// Sync Badge
// ========================
function setSyncStatus(status) {
  const badge = document.getElementById('sync-badge');
  const label = document.getElementById('sync-label');
  badge.className = 'sync-badge ' + status;
  label.textContent = t(`sync.${status}`) || status;
}

// ========================
// Local Cache
// ========================
function saveLocalCache() {
  localStorage.setItem('mf_cache_tx', JSON.stringify(transactions));
}

// ========================
// Utilities
// ========================
function formatCurrency(amount) {
  return '฿' + Number(amount).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const loc = dateLocale();
  return d.toLocaleDateString(loc, { year: 'numeric', month: 'short', day: 'numeric' })
    + ' · ' + d.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' });
}
function getCategoryInfo(type, catId) {
  return getCatEntry(catId);
}
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
function escapeHtml(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(str));
  return d.innerHTML;
}

// ========================
// Totals & Cycle Helper
// ========================
function clampedDate(year, month, day) {
  const lastDay = new Date(year, month + 1, 0).getDate();
  return new Date(year, month, Math.min(day, lastDay));
}

function getCycleRange() {
  const now = new Date();
  const yr = now.getFullYear(), mo = now.getMonth();
  let start = clampedDate(yr, mo, cutoffDay);
  if (now.getDate() < cutoffDay) {
    const prevMo = mo === 0 ? 11 : mo - 1;
    const prevYr = mo === 0 ? yr - 1 : yr;
    start = clampedDate(prevYr, prevMo, cutoffDay);
  }
  const end = new Date(start);
  end.setMonth(end.getMonth() + 1);
  return { start, end };
}

function isInCurrentCycle(dateStr) {
  if (!dateStr) return false;
  const txDate = new Date(dateStr);
  if (isNaN(txDate.getTime())) return false;
  const { start, end } = getCycleRange();
  return txDate >= start && txDate < end;
}

function getTotals() {
  let income = 0, expense = 0;
  const { start, end } = getCycleRange();
  transactions.forEach(t => {
    if (!t.date) return;
    const d = new Date(t.date);
    if (isNaN(d.getTime()) || d < start || d >= end) return;
    if (t.type === 'income') income += Number(t.amount);
    else expense += Number(t.amount);
  });
  const round2 = n => Math.round(n * 100) / 100;
  return { income: round2(income), expense: round2(expense), balance: round2(income - expense) };
}

// ========================
// Toast
// ========================
let toastTimer;
function showToast(msg, type = 'success', duration = 3500) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.className = 'toast'; }, duration);
}

// ========================
// Navigation
// ========================
function setView(view) {
  currentView = view;
  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.bottom-nav-item').forEach(el => el.classList.remove('active'));
  const el = document.getElementById(`view-${view}`);
  if (el) el.classList.add('active');
  const navEl = document.getElementById(`nav-${view}`);
  if (navEl) navEl.classList.add('active');
  document.querySelectorAll(`.bottom-nav-item[data-view="${view}"]`).forEach(el => el.classList.add('active'));
  document.getElementById('page-title').textContent = t(`page.${view}`) || view;
  renderAll();
  if (window.innerWidth <= 900) document.getElementById('sidebar').classList.remove('open');
}

// ========================
// Category Selects
// ========================
function populateCategorySelect(type) {
  const select = document.getElementById('input-category');
  select.innerHTML = '';
  CATEGORIES[type].forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = `${cat.emoji} ${catLabel(cat.id)}`;
    select.appendChild(opt);
  });
}
function populateFilterCategory() {
  const select = document.getElementById('filter-category');
  select.innerHTML = `<option value="all">${t('tx.filterAllCats')}</option>`;
  [...CATEGORIES.income, ...CATEGORIES.expense].forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = `${cat.emoji} ${catLabel(cat.id)}`;
    select.appendChild(opt);
  });
}

// ========================
// Render Dashboard
// ========================
function renderDashboard() {
  const { income, expense, balance } = getTotals();
  document.getElementById('total-balance').textContent = formatCurrency(balance);
  document.getElementById('total-income').textContent  = formatCurrency(income);
  document.getElementById('total-expense').textContent = formatCurrency(expense);

  // Ratio = expense as % of income (how much of income was spent)
  const expenseRatio = income > 0 ? Math.min((expense / income) * 100, 100) : (expense > 0 ? 100 : 0);
  const savedRatio   = Math.max(0, 100 - expenseRatio);
  document.getElementById('ratio-fill').style.width = expenseRatio + '%';
  document.getElementById('ratio-income-label').textContent  = `${t('dash.ratio.income')} ${savedRatio.toFixed(0)}%`;
  document.getElementById('ratio-expense-label').textContent = `${t('dash.ratio.expense')} ${expenseRatio.toFixed(0)}%`;

  const balanceTrend = document.getElementById('balance-trend');
  if (balance > 0) balanceTrend.textContent = t('dash.balance.positive');
  else if (balance < 0) balanceTrend.textContent = t('dash.balance.negative');
  else balanceTrend.textContent = t('dash.balance.zero');

  const isMobile = window.innerWidth <= 900;
  const recent = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, isMobile ? 3 : 5);
  renderTransactionList('recent-list', recent, 'empty-recent');
  renderSavingsGoal();
}

// ========================
// Render Transaction List (dashboard)
// ========================
function renderTransactionList(listId, items, emptyId) {
  const container = document.getElementById(listId);
  container.innerHTML = '';
  if (items.length === 0) {
    const emptyTemplate = document.getElementById(emptyId);
    if (emptyTemplate) container.appendChild(emptyTemplate.cloneNode(true));
    return;
  }
  items.forEach(tx => {
    const cat = getCategoryInfo(tx.type, tx.category);
    const hasImage = !!tx.imageData;
    const div = document.createElement('div');
    div.className = 'transaction-item';
    div.innerHTML = `
      <div class="tx-emoji">${cat.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${escapeHtml(tx.description)}
          ${hasImage ? `<button class="tx-image-btn" data-id="${tx.id}" title="ดูสลิป">📷</button>` : ''}
        </div>
        <div class="tx-meta">${cat.label} · ${formatDate(tx.date)}</div>
      </div>
      <div class="tx-amount ${tx.type}">
        ${tx.type === 'income' ? '+' : '-'}${formatCurrency(tx.amount)}
      </div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${tx.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${tx.id}" title="ลบ">🗑️</button>
      </div>`;
    container.appendChild(div);
  });
  container.querySelectorAll('.tx-btn-edit').forEach(btn => btn.addEventListener('click', () => openEditModal(btn.dataset.id)));
  container.querySelectorAll('.tx-btn-delete').forEach(btn => btn.addEventListener('click', () => openDeleteModal(btn.dataset.id)));
  container.querySelectorAll('.tx-image-btn').forEach(btn => btn.addEventListener('click', () => openSlipLightbox(btn.dataset.id)));
}

function openSlipLightbox(txId) {
  const tx = transactions.find(t => t.id === txId);
  if (!tx?.imageData) return;
  const lb = document.getElementById('slip-lightbox');
  document.getElementById('slip-lightbox-img').src = tx.imageData;
  lb.classList.add('active');
}

// ========================
// Render All Transactions
// ========================
function setTxViewMode(mode) {
  txViewMode = mode;
  const isSplit = mode === 'split';
  document.getElementById('tx-list-view').style.display  = isSplit ? 'none' : '';
  document.getElementById('tx-split-view').style.display = isSplit ? '' : 'none';
  document.getElementById('filter-type').style.display   = isSplit ? 'none' : '';
  document.getElementById('btn-view-list').classList.toggle('active', !isSplit);
  document.getElementById('btn-view-split').classList.toggle('active', isSplit);
  renderAllTransactions();
}

function updateBalanceScale(incomeList, expenseList) {
  const beam      = document.getElementById('scale-beam');
  const panLeft   = document.getElementById('scale-pan-left');
  const panRight  = document.getElementById('scale-pan-right');
  const verdict   = document.getElementById('scale-verdict');
  const incomeEl  = document.getElementById('scale-income-total');
  const expenseEl = document.getElementById('scale-expense-total');
  if (!beam) return;

  const inc   = incomeList.reduce((s, t) => s + Number(t.amount), 0);
  const exp   = expenseList.reduce((s, t) => s + Number(t.amount), 0);
  const total = inc + exp;

  if (total === 0) {
    // No data → play idle animation
    beam.classList.add('idle');
    panLeft.classList.add('idle-left');
    panRight.classList.add('idle-right');
    beam.style.transform     = '';
    panLeft.style.transform  = '';
    panRight.style.transform = '';
  } else {
    // Has data → stop animation, apply real tilt
    beam.classList.remove('idle');
    panLeft.classList.remove('idle-left');
    panRight.classList.remove('idle-right');
    // Tilt: expense heavier → clockwise (+), income heavier → counter-clockwise (-)
    const angle = ((exp - inc) / total) * 22;
    beam.style.transform     = `rotate(${angle}deg)`;
    // Counter-rotate pans so they stay level
    panLeft.style.transform  = `rotate(${-angle}deg)`;
    panRight.style.transform = `rotate(${-angle}deg)`;
  }

  panLeft.classList.toggle('heavy',  inc > exp);
  panRight.classList.toggle('heavy', exp > inc);

  if (incomeEl)  incomeEl.textContent  = formatCurrency(inc);
  if (expenseEl) expenseEl.textContent = formatCurrency(exp);

  if (verdict) {
    const diff = Math.abs(inc - exp);
    if (total === 0)    { verdict.textContent = t('tx.scale.noItems'); verdict.className = 'scale-verdict'; }
    else if (inc > exp) { verdict.textContent = `+${formatCurrency(diff)}`; verdict.className = 'scale-verdict positive'; }
    else if (exp > inc) { verdict.textContent = `-${formatCurrency(diff)}`; verdict.className = 'scale-verdict negative'; }
    else                { verdict.textContent = t('tx.scale.equal'); verdict.className = 'scale-verdict'; }
  }
}

function setTxRangeMode(mode) {
  txRangeMode = mode;
  document.getElementById('btn-range-all').classList.toggle('active',   mode === 'all');
  document.getElementById('btn-range-cycle').classList.toggle('active', mode === 'cycle');
  renderAllTransactions();
}

function applyRangeFilter(list) {
  if (txRangeMode !== 'cycle') return list;
  return list.filter(t => isInCurrentCycle(t.date));
}

function applySearchFilter(list) {
  const q = txSearch.trim().toLowerCase();
  if (!q) return list;
  return list.filter(t => {
    const cat = getCategoryInfo(t.type, t.category);
    return (
      (t.description || '').toLowerCase().includes(q) ||
      String(t.amount).includes(q) ||
      (cat.label || '').toLowerCase().includes(q)
    );
  });
}

function renderAllTransactions() {
  const filterCat = document.getElementById('filter-category').value;
  if (txViewMode === 'split') {
    let income  = applyRangeFilter(transactions.filter(t => t.type === 'income')).sort((a, b) => new Date(b.date) - new Date(a.date));
    let expense = applyRangeFilter(transactions.filter(t => t.type === 'expense')).sort((a, b) => new Date(b.date) - new Date(a.date));
    if (filterCat !== 'all') { income = income.filter(t => t.category === filterCat); expense = expense.filter(t => t.category === filterCat); }
    income  = applySearchFilter(income);
    expense = applySearchFilter(expense);
    updateBalanceScale(income, expense);
    renderTimelineList('split-income-list',  income,  'empty-split-income');
    renderTimelineList('split-expense-list', expense, 'empty-split-expense');
  } else {
    const filterType = document.getElementById('filter-type').value;
    let filtered = applyRangeFilter([...transactions]).sort((a, b) => new Date(b.date) - new Date(a.date));
    if (filterType !== 'all') filtered = filtered.filter(t => t.type === filterType);
    if (filterCat  !== 'all') filtered = filtered.filter(t => t.category === filterCat);
    filtered = applySearchFilter(filtered);
    renderTimelineList('all-list', filtered, 'empty-all');
  }
}

function renderTimelineList(listId, items, emptyId) {
  const container = document.getElementById(listId);
  if (!container) return;
  container.innerHTML = '';
  if (items.length === 0) {
    const emptyTemplate = document.getElementById(emptyId);
    if (emptyTemplate) container.appendChild(emptyTemplate.cloneNode(true));
    else container.innerHTML = `<div class="empty-state"><div class="empty-icon">📋</div><p>${t('tx.noItems')}</p></div>`;
    return;
  }
  let lastDay = null;
  items.forEach(tx => {
    const day = tx.date ? tx.date.slice(0, 10) : '';
    if (day !== lastDay) {
      lastDay = day;
      const hdr = document.createElement('div');
      hdr.className = 'timeline-date-header';
      const d = new Date(day + 'T00:00:00');
      hdr.textContent = isNaN(d) ? day : d.toLocaleDateString(dateLocale(), { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
      container.appendChild(hdr);
    }
    const cat = getCategoryInfo(tx.type, tx.category);
    const div = document.createElement('div');
    div.className = 'transaction-item';
    const hasImage = !!tx.imageData;
    const showSlip = userPlan === 'pro' && hasImage;
    div.innerHTML = `
      <div class="tx-emoji">${cat.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${escapeHtml(tx.description)}
          ${hasImage ? `<button class="tx-image-btn" data-id="${tx.id}" title="${t('slip.viewBtn')}">📷</button>` : ''}
        </div>
        <div class="tx-meta">${cat.label} · ${formatDate(tx.date)}</div>
        ${showSlip ? `<button class="tx-slip-link" data-id="${tx.id}"><img src="${tx.imageData}" alt="slip" class="tx-slip-thumb" loading="lazy">${t('slip.viewSlip')}</button>` : ''}
      </div>
      <div class="tx-amount ${tx.type}">${tx.type === 'income' ? '+' : '-'}${formatCurrency(tx.amount)}</div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${tx.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${tx.id}" title="ลบ">🗑️</button>
      </div>`;
    container.appendChild(div);
  });
  container.querySelectorAll('.tx-btn-edit').forEach(btn => btn.addEventListener('click', () => openEditModal(btn.dataset.id)));
  container.querySelectorAll('.tx-btn-delete').forEach(btn => btn.addEventListener('click', () => openDeleteModal(btn.dataset.id)));
  container.querySelectorAll('.tx-image-btn, .tx-slip-link').forEach(btn => btn.addEventListener('click', () => openSlipLightbox(btn.dataset.id)));
}

// ========================
// Render Analytics
// ========================
function renderAnalytics() {
  renderCategoryBreakdown('expense', 'category-breakdown');
  renderCategoryBreakdown('income',  'income-breakdown');
}

function renderDailyChart() {
  const ctx = document.getElementById('dailyTrendChart');
  if (!ctx) return;

  let start, end;
  const noticeEl = document.getElementById('trends-free-notice');
  const titleEl  = document.getElementById('trends-title');
  const today = new Date(); today.setHours(23, 59, 59, 999);
  const cycle = getCycleRange();
  // Last day of billing period = cycle.end - 1 day (cycle.end is exclusive)
  const cycleLastDay = new Date(cycle.end); cycleLastDay.setDate(cycleLastDay.getDate() - 1);
  const loc = dateLocale();
  const startLabel = cycle.start.toLocaleDateString(loc, { day: 'numeric', month: 'short' });
  const endLabel   = cycleLastDay.toLocaleDateString(loc, { day: 'numeric', month: 'short' });

  if (userPlan === 'pro') {
    start = cycle.start;
    end   = cycle.end > today ? today : cycle.end; // cap at today — no empty bars
    if (noticeEl) noticeEl.style.display = 'none';
    if (titleEl) titleEl.textContent = t('trends.titleFull', { start: startLabel, end: endLabel });
  } else {
    end = new Date(today);
    const thirtyAgo = new Date(today); thirtyAgo.setDate(thirtyAgo.getDate() - 29); thirtyAgo.setHours(0, 0, 0, 0);
    start = cycle.start >= thirtyAgo ? cycle.start : thirtyAgo;
    if (noticeEl) noticeEl.style.display = '';
    if (titleEl) titleEl.textContent = t('trends.titleFull', { start: startLabel, end: endLabel });
  }

  const labels = [], incomeData = [], expenseData = [];

  const dateIndex = new Map();
  transactions.forEach(t => {
    const day = t.date ? t.date.slice(0, 10) : null;
    if (!day) return;
    if (!dateIndex.has(day)) dateIndex.set(day, { income: 0, expense: 0 });
    const entry = dateIndex.get(day);
    if (t.type === 'income') entry.income += Number(t.amount);
    else entry.expense += Number(t.amount);
  });

  const cursor = new Date(start);
  while (cursor < end) {
    const dateStr = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`;
    labels.push(cursor.toLocaleDateString(dateLocale(), { day: 'numeric', month: 'short' }));
    const entry = dateIndex.get(dateStr) || { income: 0, expense: 0 };
    incomeData.push(entry.income);
    expenseData.push(entry.expense);
    cursor.setDate(cursor.getDate() + 1);
  }

  if (dailyChartInstance) {
    if (dailyChartInstance.data.labels.length !== labels.length) {
      dailyChartInstance.destroy();
      dailyChartInstance = null;
    } else {
      dailyChartInstance.data.labels = labels;
      dailyChartInstance.data.datasets[0].data = incomeData;
      dailyChartInstance.data.datasets[1].data = expenseData;
      dailyChartInstance.update('none');
      return;
    }
  }

  dailyChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: t('trends.chart.income'),  data: incomeData,  backgroundColor: '#16A34A', borderRadius: 6 },
        { label: t('trends.chart.expense'), data: expenseData, backgroundColor: '#EF4444', borderRadius: 6 },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, labels: { color: '#64748B', font: { family: 'Noto Sans Thai', size: 12 } } },
        tooltip: { mode: 'index', intersect: false },
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#64748B', font: { size: 11 } } },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { color: '#64748B', font: { size: 11 }, callback: val => '฿' + val.toLocaleString() },
        },
      },
    },
  });
}

// ========================
// Spending Insights
// ========================
function renderSpendingInsights() {
  const container = document.getElementById('spending-insights-content');
  if (!container) return;

  const { start, end } = getCycleRange();
  const now = new Date();
  const cycleTx = transactions.filter(tx => isInCurrentCycle(tx.date));
  const cycleExpenses = cycleTx.filter(tx => tx.type === 'expense');
  const cycleIncome   = cycleTx.filter(tx => tx.type === 'income');
  const totalExpense  = cycleExpenses.reduce((s, tx) => s + Number(tx.amount), 0);
  const totalIncome   = cycleIncome.reduce((s, tx) => s + Number(tx.amount), 0);

  if (cycleTx.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">💡</div><p>ยังไม่มีข้อมูลในรอบบิลนี้</p></div>`;
    return;
  }

  // Days elapsed in current cycle
  const cycleStart = start;
  const daysElapsed = Math.max(1, Math.floor((Math.min(now, end) - cycleStart) / 86400000) + 1);
  const avgDaily = totalExpense / daysElapsed;

  // Top spending category
  const catTotals = {};
  cycleExpenses.forEach(tx => { catTotals[tx.category] = (catTotals[tx.category] || 0) + Number(tx.amount); });
  const topCatEntry = Object.entries(catTotals).sort((a, b) => b[1] - a[1])[0];
  let topCatHtml = '—';
  if (topCatEntry) {
    const cat = getCategoryInfo('expense', topCatEntry[0]);
    topCatHtml = `${cat.emoji} ${cat.label}: ${formatCurrency(topCatEntry[1])}`;
  }

  // Savings rate
  let savingsHtml = 'ไม่มีรายรับ';
  if (totalIncome > 0) {
    const rate = ((totalIncome - totalExpense) / totalIncome * 100).toFixed(1);
    savingsHtml = `${rate}%`;
  }

  // Budget status
  const overBudgetCats = Object.entries(budgets).filter(([catId, limit]) => {
    if (!limit) return false;
    const spent = catTotals[catId] || 0;
    return spent >= limit;
  });

  // Previous cycle comparison
  const prevEnd = new Date(cycleStart);
  const prevStart = new Date(cycleStart);
  prevStart.setMonth(prevStart.getMonth() - 1);
  const prevExpense = transactions
    .filter(tx => tx.type === 'expense' && tx.date)
    .filter(tx => { const d = new Date(tx.date); return d >= prevStart && d < prevEnd; })
    .reduce((s, tx) => s + Number(tx.amount), 0);

  let comparisonHtml = '';
  if (prevExpense > 0) {
    const diff = totalExpense - prevExpense;
    const pct  = Math.abs(diff / prevExpense * 100).toFixed(1);
    const cls  = diff < 0 ? 'less' : 'more';
    const msg  = diff < 0
      ? `ใช้จ่ายน้อยกว่ารอบที่แล้ว <span class="comparison-value">${pct}%</span>! 🎉`
      : `ใช้จ่ายมากกว่ารอบที่แล้ว <span class="comparison-value">${pct}%</span>`;
    comparisonHtml = `<div class="insight-comparison ${cls}">📊 ${msg}</div>`;
  }

  const budgetStatusHtml = Object.keys(budgets).length > 0
    ? (overBudgetCats.length > 0
        ? `<span style="color:var(--red)">${overBudgetCats.length} หมวดเกิน Budget</span>`
        : `<span style="color:var(--green)">ทุกหมวดอยู่ในงบ ✓</span>`)
    : 'ยังไม่ได้ตั้ง Budget';

  container.innerHTML = `
    <div class="insights-grid">
      <div class="insight-card">
        <div class="insight-card-label">📅 เฉลี่ยต่อวัน</div>
        <div class="insight-card-value">${formatCurrency(avgDaily)}</div>
        <div class="insight-card-sub">(${daysElapsed} วันที่ผ่านมา)</div>
      </div>
      <div class="insight-card">
        <div class="insight-card-label">🏆 หมวดใช้จ่ายสูงสุด</div>
        <div class="insight-card-value" style="font-size:14px;">${topCatHtml}</div>
      </div>
      <div class="insight-card ${totalIncome > 0 ? (totalIncome > totalExpense ? 'positive' : 'negative') : ''}">
        <div class="insight-card-label">💚 อัตราออม</div>
        <div class="insight-card-value">${savingsHtml}</div>
      </div>
      <div class="insight-card">
        <div class="insight-card-label">💰 Budget</div>
        <div class="insight-card-value" style="font-size:13px;">${budgetStatusHtml}</div>
      </div>
    </div>
    ${comparisonHtml}`;
}

function renderCategoryBreakdown(type, containerId) {
  const container = document.getElementById(containerId);
  const txList = transactions.filter(tx => tx.type === type && isInCurrentCycle(tx.date));
  if (txList.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${type === 'expense' ? '📊' : '💵'}</div><p>${t('analytics.noData')}</p></div>`;
    return;
  }
  const totals = {};
  txList.forEach(tx => { totals[tx.category] = (totals[tx.category] || 0) + Number(tx.amount); });
  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const maxVal  = sorted[0][1];
  const colors  = CAT_COLORS[type];
  container.innerHTML = '';
  sorted.forEach(([catId, amount], idx) => {
    const cat = getCategoryInfo(type, catId);
    const pct = ((amount / maxVal) * 100).toFixed(1);
    const div = document.createElement('div');
    div.className = 'cat-item';
    const budget = (type === 'expense') ? (budgets[catId] || 0) : 0;
    let budgetHtml = '';
    if (budget > 0) {
      const ratio = amount / budget;
      const pctBudget = Math.min(ratio * 100, 100).toFixed(1);
      const cls = ratio >= 1 ? 'over' : ratio >= 0.7 ? 'warn' : 'ok';
      const overAmt = amount > budget ? amount - budget : 0;
      budgetHtml = `
        <div class="budget-progress-wrap">
          <div class="budget-bar-track"><div class="budget-bar-fill ${cls}" style="width:${pctBudget}%"></div></div>
          <div class="budget-bar-text">
            <span>${formatCurrency(amount)} / ${formatCurrency(budget)}</span>
            ${overAmt > 0 ? `<span class="over-label">เกิน ${formatCurrency(overAmt)}</span>` : ''}
          </div>
        </div>`;
    }
    div.innerHTML = `
      <div class="cat-emoji">${cat.emoji}</div>
      <div class="cat-info">
        <div class="cat-name">${cat.label}</div>
        <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${pct}%;background:${colors[idx % colors.length]};"></div></div>
        ${budgetHtml}
      </div>
      <div class="cat-amount" style="color:${colors[idx % colors.length]}">${formatCurrency(amount)}</div>`;
    container.appendChild(div);
  });
}

// ========================
// Render All
// ========================
function renderAll() {
  if      (currentView === 'dashboard')    renderDashboard();
  else if (currentView === 'transactions') renderAllTransactions();
  else if (currentView === 'analytics')    { renderAnalytics(); renderRecurringList(); }
  else if (currentView === 'trends')       { renderDailyChart(); renderSpendingInsights(); renderMonthlyChart(); }
}

// ========================
// Savings Goal
// ========================
function renderSavingsGoal() {
  const card = document.getElementById('savings-goal-card');
  if (!card) return;
  if (userPlan !== 'pro') { card.style.display = 'none'; return; }
  card.style.display = '';
  const content = document.getElementById('savings-goal-content');
  if (!savingsGoal || !savingsGoal.targetAmount) {
    content.innerHTML = `<p class="form-help" style="text-align:center;padding:12px">ยังไม่ได้ตั้งเป้าหมาย กด "ตั้งค่า ✏️" เพื่อเริ่ม</p>`;
    return;
  }
  const totalIncome  = transactions.filter(t => t.type === 'income').reduce((s, t) => s + Number(t.amount), 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + Number(t.amount), 0);
  const currentSavings = Math.max(0, totalIncome - totalExpense);
  const pct = Math.min(100, (currentSavings / savingsGoal.targetAmount) * 100);
  const color = pct >= 100 ? '#16a34a' : pct >= 60 ? '#d97706' : 'var(--indigo)';
  const deadlineText = savingsGoal.deadline ? ` · ภายใน ${savingsGoal.deadline}` : '';
  content.innerHTML = `
    <div class="savings-goal-info">
      <span>${escapeHtml(savingsGoal.name || 'เป้าหมายการออม')}</span>
      <span>${formatCurrency(currentSavings)} / ${formatCurrency(savingsGoal.targetAmount)}${deadlineText}</span>
    </div>
    <div class="savings-goal-track">
      <div class="savings-goal-fill" style="width:${pct.toFixed(1)}%;background:${color}"></div>
    </div>
    <div class="savings-goal-pct" style="color:${color}">${pct >= 100 ? '🎉 บรรลุเป้าหมายแล้ว!' : pct.toFixed(1) + '%'}</div>`;
}

// ========================
// Monthly Comparison Chart (Pro)
// ========================
function renderMonthlyChart() {
  const card = document.getElementById('monthly-compare-card');
  if (!card) return;
  if (userPlan !== 'pro') { card.style.display = 'none'; return; }
  card.style.display = '';
  const months = parseInt(document.getElementById('monthly-range-select')?.value || '6');
  const labels = [], incomeData = [], expenseData = [];
  const now = new Date();
  for (let i = months - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    labels.push(d.toLocaleDateString(dateLocale(), { month: 'short', year: '2-digit' }));
    const monthTx = transactions.filter(tx => tx.date && tx.date.startsWith(monthStr));
    incomeData.push(monthTx.filter(tx => tx.type === 'income').reduce((s, tx) => s + Number(tx.amount), 0));
    expenseData.push(monthTx.filter(tx => tx.type === 'expense').reduce((s, tx) => s + Number(tx.amount), 0));
  }
  const ctx = document.getElementById('monthlyCompareChart');
  if (!ctx) return;
  if (monthlyChartInstance) { monthlyChartInstance.destroy(); monthlyChartInstance = null; }
  monthlyChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'รายรับ',  data: incomeData,  backgroundColor: '#16A34A', borderRadius: 4 },
        { label: 'รายจ่าย', data: expenseData, backgroundColor: '#EF4444', borderRadius: 4 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#64748B', font: { family: 'Noto Sans Thai', size: 12 } } },
        tooltip: { mode: 'index', intersect: false },
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#64748B', font: { size: 11 } } },
        y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#64748B', font: { size: 11 }, callback: val => '฿' + val.toLocaleString() } },
      },
    },
  });
}

// ========================
// Export PDF (Pro)
// ========================
function exportPDF() {
  if (userPlan !== 'pro') { openUpgradeModal('Export PDF'); return; }
  const today = new Date();
  const cycle = getCycleRange();
  const loc   = dateLocale();
  const cycleTx = transactions.filter(t => isInCurrentCycle(t.date));
  const income  = cycleTx.filter(t => t.type === 'income').reduce((s, t) => s + Number(t.amount), 0);
  const expense = cycleTx.filter(t => t.type === 'expense').reduce((s, t) => s + Number(t.amount), 0);

  document.getElementById('pdf-date-range').textContent =
    `${cycle.start.toLocaleDateString(loc, { day: 'numeric', month: 'long', year: 'numeric' })} — ${today.toLocaleDateString(loc, { day: 'numeric', month: 'long', year: 'numeric' })}`;

  document.getElementById('pdf-summary').innerHTML = `
    <div class="pdf-card"><div class="pdf-card-label">รายรับ</div><div class="pdf-card-val income">+${formatCurrency(income)}</div></div>
    <div class="pdf-card"><div class="pdf-card-label">รายจ่าย</div><div class="pdf-card-val expense">-${formatCurrency(expense)}</div></div>
    <div class="pdf-card"><div class="pdf-card-label">คงเหลือ</div><div class="pdf-card-val">${formatCurrency(income - expense)}</div></div>`;

  const catTotals = {};
  cycleTx.filter(t => t.type === 'expense').forEach(t => { catTotals[t.category] = (catTotals[t.category] || 0) + Number(t.amount); });
  document.getElementById('pdf-categories').innerHTML = Object.entries(catTotals).sort((a, b) => b[1] - a[1])
    .map(([catId, amt]) => {
      const cat = getCategoryInfo('expense', catId);
      return `<div class="pdf-cat-row"><span>${cat.emoji} ${cat.label}</span><span>${formatCurrency(amt)}</span></div>`;
    }).join('') || '<p>ไม่มีรายจ่าย</p>';

  const sorted = [...cycleTx].sort((a, b) => new Date(b.date) - new Date(a.date));
  const rows = sorted.map(tx => {
    const cat = getCategoryInfo(tx.type, tx.category);
    const d = new Date(tx.date);
    return `<tr>
      <td>${isNaN(d) ? tx.date : d.toLocaleDateString(loc, { day: 'numeric', month: 'short' })}</td>
      <td>${cat.emoji} ${cat.label}</td>
      <td>${escapeHtml(tx.description)}</td>
      <td class="${tx.type}">${tx.type === 'income' ? '+' : '-'}${formatCurrency(tx.amount)}</td>
    </tr>`;
  }).join('');
  document.getElementById('pdf-transactions').innerHTML =
    `<thead><tr><th>วันที่</th><th>หมวดหมู่</th><th>รายละเอียด</th><th>จำนวนเงิน</th></tr></thead><tbody>${rows}</tbody>`;

  const report = document.getElementById('pdf-report');
  report.style.display = 'block';
  closeModal('settings-modal-overlay');
  setTimeout(() => { window.print(); setTimeout(() => { report.style.display = 'none'; }, 500); }, 300);
}

// ========================
// Budget Modal
// ========================
function openBudgetModal() {
  const container = document.getElementById('budget-form-rows');
  container.innerHTML = '';
  CATEGORIES.expense.forEach(cat => {
    const label = catLabel(cat.id);
    const val   = budgets[cat.id] || '';
    const row   = document.createElement('div');
    row.className = 'budget-row';
    row.innerHTML = `
      <div class="budget-row-emoji">${cat.emoji}</div>
      <div class="budget-row-label">${label}</div>
      <input type="number" min="0" step="1" placeholder="ไม่จำกัด"
             data-cat="${cat.id}" value="${val}" />`;
    container.appendChild(row);
  });
  openModal('budget-modal-overlay');
}

async function saveBudget() {
  const inputs = document.querySelectorAll('#budget-form-rows input[data-cat]');
  const newBudgets = {};
  inputs.forEach(inp => {
    const val = parseFloat(inp.value);
    if (inp.value.trim() !== '' && !isNaN(val) && val > 0) {
      newBudgets[inp.dataset.cat] = val;
    }
  });
  budgets = newBudgets;
  try {
    await fsSaveMeta({ budgets: newBudgets });
    showToast('💰 บันทึก Budget สำเร็จ', 'success');
    closeModal('budget-modal-overlay');
    renderAll();
  } catch (err) {
    showToast('❌ ' + err.message, 'error');
  }
}

// ========================
// Budget Alert
// ========================
function checkBudgetAlert(catId) {
  if (!budgetSettings.enabled) return;
  const budget = budgets[catId];
  if (!budget) return;

  const { start } = getCycleRange();
  const cycleKey  = start.toISOString().slice(0, 10);

  const spent = transactions
    .filter(tx => tx.type === 'expense' && tx.category === catId && isInCurrentCycle(tx.date))
    .reduce((s, tx) => s + Number(tx.amount), 0);

  const cat = getCategoryInfo('expense', catId);
  const nearKey = `${catId}_${cycleKey}_near`;
  const overKey = `${catId}_${cycleKey}_over`;

  if (spent >= budget && budgetSettings.notifyOver) {
    if (budgetSettings.notifyMode === 'once' && budgetAlerted[overKey]) return;
    budgetAlerted[overKey] = true;
    showToast(`⚠️ ${cat.emoji}${cat.label} เกิน Budget แล้ว! (${formatCurrency(spent)} / ${formatCurrency(budget)})`, 'error', 5000);
  } else if (spent >= budget * (budgetSettings.nearThreshold / 100) && budgetSettings.notifyNear) {
    if (budgetSettings.notifyMode === 'once' && budgetAlerted[nearKey]) return;
    budgetAlerted[nearKey] = true;
    showToast(`🔔 ${cat.emoji}${cat.label} ใกล้เกิน Budget (${formatCurrency(spent)} / ${formatCurrency(budget)})`, 'warning', 4000);
  }
}

// ========================
// Budget Notification Settings UI
// ========================
function syncBudgetSettingsUI() {
  const masterEl   = document.getElementById('toggle-budget-notify');
  const subEl      = document.getElementById('budget-notify-sub');
  const nearEl     = document.getElementById('toggle-notify-near');
  const overEl     = document.getElementById('toggle-notify-over');
  const modeOnce   = document.getElementById('notify-mode-once');
  const modeAlways = document.getElementById('notify-mode-always');
  if (!masterEl) return;
  masterEl.checked = !!budgetSettings.enabled;
  if (subEl) subEl.style.display = budgetSettings.enabled ? '' : 'none';
  if (nearEl) nearEl.checked = !!budgetSettings.notifyNear;
  if (overEl) overEl.checked = !!budgetSettings.notifyOver;
  if (modeOnce)   modeOnce.checked   = budgetSettings.notifyMode === 'once';
  if (modeAlways) modeAlways.checked = budgetSettings.notifyMode !== 'once';
}

async function saveBudgetSettings() {
  try {
    await fsSaveMeta({ budgetSettings });
  } catch (err) {
    console.error('saveBudgetSettings error:', err);
  }
}

// ========================
// Export CSV
// ========================
function exportCSV() {
  const now = new Date();
  const days = userPlan === 'pro' ? 365 : 30;
  const cutoffMs = now.getTime() - days * 86400000;
  const filtered = transactions.filter(tx => {
    if (!tx.date) return false;
    return new Date(tx.date).getTime() >= cutoffMs;
  }).sort((a, b) => new Date(a.date) - new Date(b.date));

  const BOM = '﻿';
  const header = 'วันที่,ประเภท,หมวดหมู่,รายละเอียด,จำนวนเงิน';
  const rows = filtered.map(tx => {
    const cat  = getCategoryInfo(tx.type, tx.category);
    const type = tx.type === 'income' ? 'รายรับ' : 'รายจ่าย';
    const date = new Date(tx.date).toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
    const desc = `"${(tx.description || '').replace(/"/g, '""')}"`;
    return [date, type, cat.label, desc, tx.amount].join(',');
  });

  const csv  = BOM + [header, ...rows].join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href     = url;
  link.download = 'moneyflow_export.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(`📥 Export สำเร็จ (${filtered.length} รายการ)`, 'success');
}

// ========================
// Recurring Transactions
// ========================
function populateRecurringCategorySelect() {
  const select = document.getElementById('recurring-category');
  if (!select) return;
  select.innerHTML = '';
  CATEGORIES.expense.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = `${cat.emoji} ${catLabel(cat.id)}`;
    select.appendChild(opt);
  });
}

function openAddRecurringModal() {
  editingRecurringId = null;
  document.getElementById('recurring-modal-title').textContent = '🔄 เพิ่มรายการประจำ';
  document.getElementById('recurring-form').reset();
  document.getElementById('recurring-edit-id').value = '';
  populateRecurringCategorySelect();
  openModal('recurring-modal-overlay');
}

function openEditRecurringModal(item) {
  editingRecurringId = item.id;
  document.getElementById('recurring-modal-title').textContent = '✏️ แก้ไขรายการประจำ';
  document.getElementById('recurring-edit-id').value = item.id;
  document.getElementById('recurring-desc').value         = item.description || '';
  document.getElementById('recurring-amount').value       = item.amount || '';
  document.getElementById('recurring-day').value          = item.dayOfMonth || '';
  document.getElementById('recurring-installments').value = item.installments || '';
  document.getElementById('recurring-note').value         = item.note || '';
  populateRecurringCategorySelect();
  setTimeout(() => { document.getElementById('recurring-category').value = item.category; }, 0);
  openModal('recurring-modal-overlay');
}

async function handleRecurringFormSubmit(e) {
  e.preventDefault();
  const description  = document.getElementById('recurring-desc').value.trim();
  const amount       = parseFloat(document.getElementById('recurring-amount').value);
  const category     = document.getElementById('recurring-category').value;
  const dayOfMonth   = parseInt(document.getElementById('recurring-day').value);
  const instVal      = document.getElementById('recurring-installments').value.trim();
  const installments = instVal ? parseInt(instVal) : null;
  const note         = document.getElementById('recurring-note').value.trim();

  if (!description || !amount || !category || !dayOfMonth) {
    showToast('กรุณากรอกข้อมูลให้ครบ', 'error'); return;
  }

  const data = { description, amount, category, type: 'expense', dayOfMonth, installments, note,
    active: true, paidCount: 0, lastPaidDate: '', createdAt: new Date().toISOString() };

  try {
    if (editingRecurringId) {
      const { createdAt, paidCount, lastPaidDate, ...updateData } = data;
      await updateDoc(doc(recurringCol(), editingRecurringId), updateData);
      showToast('✅ แก้ไขรายการประจำสำเร็จ', 'success');
    } else {
      await addDoc(recurringCol(), data);
      showToast('✅ เพิ่มรายการประจำสำเร็จ', 'success');
    }
    closeModal('recurring-modal-overlay');
  } catch (err) {
    showToast('❌ ' + err.message, 'error');
  }
}

async function markRecurringPaid(item) {
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const dateISO  = today.toISOString().slice(0, 16);
  try {
    // Add actual transaction
    await fsAdd({
      type: 'expense', amount: item.amount, description: item.description,
      category: item.category, date: dateISO, createdAt: today.toISOString(), imageData: '',
    });
    // Update recurring
    await updateDoc(doc(recurringCol(), item.id), {
      paidCount: (item.paidCount || 0) + 1,
      lastPaidDate: todayStr,
    });
    showToast(`✅ บันทึก "${item.description}" สำเร็จ`, 'success');
  } catch (err) {
    showToast('❌ ' + err.message, 'error');
  }
}

async function deleteRecurring(id) {
  if (!confirm('ลบรายการประจำนี้?')) return;
  try {
    await deleteDoc(doc(recurringCol(), id));
    showToast('🗑️ ลบรายการประจำสำเร็จ', 'success');
  } catch (err) {
    showToast('❌ ' + err.message, 'error');
  }
}

function getRecurringStatus(item) {
  const today     = new Date();
  const todayDay  = today.getDate();
  const thisMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  const isDone    = item.installments && (item.paidCount || 0) >= item.installments;
  const paidThisMonth = item.lastPaidDate && item.lastPaidDate.startsWith(thisMonth);
  const neverPaid = !(item.paidCount || 0) && !item.lastPaidDate;

  if (isDone)        return { key: 'done', label: '✅ ครบทุกงวดแล้ว',  canPay: false };
  if (paidThisMonth) return { key: 'paid', label: '✅ จ่ายแล้วเดือนนี้', canPay: false };

  const daysUntil = item.dayOfMonth - todayDay;

  // Brand-new item (never paid) and due date already passed this month
  // → treat as starting next month, don't show as overdue
  if (neverPaid && daysUntil < 0) {
    const nextDate   = new Date(today.getFullYear(), today.getMonth() + 1, item.dayOfMonth);
    const daysToNext = Math.ceil((nextDate - today) / 86400000);
    const nextMonth  = String(today.getMonth() + 2).padStart(2, '0');
    return { key: 'pending', label: `⏳ ครั้งแรก วันที่ ${item.dayOfMonth}/${nextMonth} (อีก ${daysToNext} วัน)`, canPay: false };
  }

  if (daysUntil < 0)   return { key: 'overdue', label: '🔴 เลยกำหนดแล้ว ยังไม่ได้จ่าย', canPay: true };
  if (daysUntil === 0) return { key: 'overdue', label: '🔴 ถึงกำหนดวันนี้!',             canPay: true };
  if (daysUntil <= 3)  return { key: 'soon',    label: `🟡 อีก ${daysUntil} วัน`,         canPay: true };
  return { key: 'pending', label: `⏳ อีก ${daysUntil} วัน`, canPay: false };
}

function renderRecurringList() {
  const container = document.getElementById('recurring-list');
  if (!container) return;
  if (recurringItems.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔄</div><p>ยังไม่มีรายการประจำ<br><small style="color:var(--text-3)">กด "+ เพิ่มรายการประจำ" เพื่อเริ่ม</small></p></div>`;
    return;
  }
  container.innerHTML = '';
  // Sort: overdue/soon first
  const sortOrder = { overdue: 0, soon: 1, pending: 2, paid: 3, done: 4 };
  const sorted = [...recurringItems].sort((a, b) => {
    const sa = getRecurringStatus(a).key, sb = getRecurringStatus(b).key;
    return (sortOrder[sa] ?? 5) - (sortOrder[sb] ?? 5);
  });
  sorted.forEach(item => {
    const cat    = getCategoryInfo('expense', item.category);
    const status = getRecurringStatus(item);
    const remaining = item.installments ? item.installments - (item.paidCount || 0) : null;
    const remText   = remaining !== null ? `${remaining} งวดคงเหลือ` : '∞';
    const div = document.createElement('div');
    div.className = `recurring-item${status.key === 'overdue' ? ' rec-overdue' : status.key === 'soon' ? ' rec-soon' : ''}`;
    div.innerHTML = `
      <div class="tx-emoji">${cat.emoji}</div>
      <div class="recurring-item-info">
        <div class="recurring-item-title">${escapeHtml(item.description)} <strong>${formatCurrency(item.amount)}</strong></div>
        <div class="recurring-item-meta">ทุกวันที่ ${item.dayOfMonth} · ${remText}${item.note ? ' · ' + escapeHtml(item.note) : ''}</div>
        <span class="rec-status ${status.key}">${status.label}</span>
      </div>
      <div class="recurring-item-actions">
        ${status.canPay ? `<button class="btn-add-from-recurring" data-id="${item.id}" title="เพิ่มเป็นรายจ่าย">💸 เพิ่มรายจ่าย</button>` : ''}
        <button class="tx-btn tx-btn-edit" data-id="${item.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${item.id}" title="ลบ">🗑️</button>
      </div>`;
    container.appendChild(div);

    div.querySelectorAll('.btn-add-from-recurring').forEach(btn =>
      btn.addEventListener('click', () => {
        const rec = recurringItems.find(r => r.id === btn.dataset.id);
        if (!rec) return;
        openAddModal();
        setTimeout(() => prefillFromRecurring(rec), 60);
      }));
    div.querySelectorAll('.tx-btn-edit').forEach(btn =>
      btn.addEventListener('click', () => {
        const rec = recurringItems.find(r => r.id === btn.dataset.id);
        if (rec) openEditRecurringModal(rec);
      }));
    div.querySelectorAll('.tx-btn-delete').forEach(btn =>
      btn.addEventListener('click', () => deleteRecurring(btn.dataset.id)));
  });
}

function prefillFromRecurring(item) {
  pendingRecurringId = item.id;
  setTransactionType('expense');
  setTimeout(() => {
    document.getElementById('input-amount').value      = item.amount;
    document.getElementById('input-description').value = item.description;
    setTimeout(() => { document.getElementById('input-category').value = item.category; }, 30);
  }, 30);
  // Mark selected chip in banner
  document.querySelectorAll('.recurring-chip').forEach(c => c.classList.remove('selected'));
  const chip = document.querySelector(`.recurring-chip[data-id="${item.id}"]`);
  if (chip) chip.classList.add('selected');
}

function checkRecurringDue() {
  const today = new Date();
  const todayDay = today.getDate();
  const thisMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  recurringItems.forEach(item => {
    if (!item.active) return;
    const isDone = item.installments && (item.paidCount || 0) >= item.installments;
    if (isDone) return;
    const paidThisMonth = item.lastPaidDate && item.lastPaidDate.startsWith(thisMonth);
    if (paidThisMonth) return;
    if (item.dayOfMonth <= todayDay && !recurringShownToday.has(item.id)) {
      recurringShownToday.add(item.id);
      setTimeout(() => {
        showToast(`🔔 ${item.description} ครบกำหนดชำระวันนี้!`, 'warning', 5000);
      }, 1000 + recurringShownToday.size * 1500);
    }
  });
}

// ========================
// Modal: Add / Edit
// ========================
function openAddModal() {
  editingId = null;
  pendingRecurringId = null;
  document.getElementById('modal-title').textContent  = t('modal.addTitle');
  document.getElementById('submit-label').textContent = t('modal.addBtn');
  document.getElementById('transaction-form').reset();
  document.getElementById('edit-id').value = '';
  const now = new Date();
  document.getElementById('input-date').value = new Date(now - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  clearPendingImage();
  setTransactionType('income');
  // Show due recurring items banner
  renderRecurringDueBanner();
  openModal('modal-overlay');
}

function renderRecurringDueBanner() {
  // Remove old banner
  const old = document.getElementById('recurring-due-banner');
  if (old) old.remove();
  if (!recurringItems.length) return;
  // Items due today or overdue (not paid this month, not done)
  const today = new Date();
  const dueItems = recurringItems.filter(item => {
    const s = getRecurringStatus(item);
    return s.canPay && (s.key === 'overdue' || s.key === 'soon');
  });
  if (!dueItems.length) return;
  const banner = document.createElement('div');
  banner.id = 'recurring-due-banner';
  banner.className = 'recurring-due-banner';
  banner.innerHTML = `<div class="recurring-due-title">🔔 รายการประจำที่ถึงกำหนด</div><div class="recurring-chips">${
    dueItems.map(item => {
      const cat = getCategoryInfo('expense', item.category);
      const s   = getRecurringStatus(item);
      return `<button class="recurring-chip" data-id="${item.id}">${cat.emoji} ${escapeHtml(item.description)} ${formatCurrency(item.amount)} <span class="chip-status ${s.key}">${s.label}</span></button>`;
    }).join('')
  }</div>`;
  // Insert before scan-section in modal
  const scanSection = document.querySelector('#modal-overlay .scan-section');
  if (scanSection) scanSection.before(banner);
  banner.querySelectorAll('.recurring-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const rec = recurringItems.find(r => r.id === chip.dataset.id);
      if (rec) prefillFromRecurring(rec);
    });
  });
}

function openEditModal(id) {
  const tx = transactions.find(t => t.id === id);
  if (!tx) return;
  editingId = id;
  document.getElementById('modal-title').textContent  = t('modal.editTitle');
  document.getElementById('submit-label').textContent = t('modal.editBtn');
  document.getElementById('edit-id').value            = id;
  document.getElementById('input-amount').value       = tx.amount;
  document.getElementById('input-description').value  = tx.description;
  document.getElementById('input-date').value         = tx.date;
  clearPendingImage();
  setTransactionType(tx.type);
  setTimeout(() => { document.getElementById('input-category').value = tx.category; }, 0);
  openModal('modal-overlay');
}

function setTransactionType(type) {
  currentType = type;
  document.getElementById('type-income').classList.toggle('active', type === 'income');
  document.getElementById('type-expense').classList.toggle('active', type === 'expense');
  populateCategorySelect(type);
}

function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ========================
// Modal: Delete
// ========================
function openDeleteModal(id) {
  pendingDeleteId = id;
  openModal('delete-overlay');
}

// ========================
// Modal: Upgrade
// ========================
function openUpgradeModal(reason = '') {
  document.getElementById('upgrade-reason').textContent = reason;
  openModal('upgrade-modal-overlay');
}

// ========================
// Form Submit
// ========================
async function handleFormSubmit(e) {
  e.preventDefault();
  const amount      = parseFloat(document.getElementById('input-amount').value);
  const description = document.getElementById('input-description').value.trim();
  const category    = document.getElementById('input-category').value;
  const date        = document.getElementById('input-date').value;

  if (!amount || amount <= 0 || !description || !category || !date) {
    showToast(t('toast.fieldRequired'), 'error'); return;
  }

  const wasEditing = !!editingId;
  const isContinue = document.getElementById('check-continue').checked;
  const submitBtn  = document.getElementById('btn-submit');
  submitBtn.disabled = true;

  try {
    const txData = {
      type: currentType, amount, description, category, date,
      createdAt: new Date().toISOString(),
      imageData: (userPlan === 'pro' && pendingImageStored) ? pendingImageStored : '',
    };

    if (wasEditing) {
      await fsUpdate(editingId, txData);
      editingId = null;
      showToast(t('toast.editSaved'));
      closeModal('modal-overlay');
      if (txData.type === 'expense') setTimeout(() => checkBudgetAlert(txData.category), 500);
    } else {
      await fsAdd(txData);
      // If added from recurring quick-fill → mark recurring as paid
      if (pendingRecurringId) {
        const rec = recurringItems.find(r => r.id === pendingRecurringId);
        if (rec) {
          const todayStr = new Date().toLocaleDateString('sv');
          updateDoc(doc(recurringCol(), rec.id), {
            paidCount: (rec.paidCount || 0) + 1,
            lastPaidDate: todayStr,
          }).catch(() => {});
        }
        pendingRecurringId = null;
      }
      showToast(t('toast.saved'));
      if (txData.type === 'expense') setTimeout(() => checkBudgetAlert(txData.category), 500);
      if (isContinue) {
        document.getElementById('input-amount').value = '';
        document.getElementById('input-description').value = '';
        clearPendingImage();
        const now = new Date();
        document.getElementById('input-date').value = new Date(now - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
        document.getElementById('input-amount').focus();
      } else {
        closeModal('modal-overlay');
      }
    }
  } catch (err) {
    showToast('❌ ' + err.message, 'error');
  } finally {
    submitBtn.disabled = false;
  }
}

// ========================
// Current Date
// ========================
function updateCurrentDate() {
  document.getElementById('current-date').textContent = new Date().toLocaleDateString(dateLocale(), {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
  });
}

// ========================
// Slip Scanning (Gemini 2.5 Flash via Vercel)
// ========================
function clearPendingImage() {
  pendingImageData   = null;
  pendingImageMime   = null;
  pendingImageStored = null;
  const previewContainer = document.getElementById('image-preview-container');
  const previewImg       = document.getElementById('image-preview');
  previewImg.src = '';
  previewContainer.style.display = 'none';
  document.getElementById('input-slip').value = '';
}

function compressImage(base64, mime, maxPx = 800, quality = 0.72) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let { width: w, height: h } = img;
      if (w > maxPx || h > maxPx) {
        if (w > h) { h = Math.round(h * maxPx / w); w = maxPx; }
        else       { w = Math.round(w * maxPx / h); h = maxPx; }
      }
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => resolve(`data:${mime};base64,${base64}`);
    img.src = `data:${mime};base64,${base64}`;
  });
}

async function handleSlipScan(e) {
  const file = e.target.files[0];
  if (!file) return;

  const progressEl = document.getElementById('scan-progress');
  const barEl      = progressEl.querySelector('.progress-bar');
  const textEl     = progressEl.querySelector('.progress-text');

  progressEl.classList.add('active');
  textEl.textContent = t('modal.prepareImg');
  barEl.style.setProperty('--progress', '10%');

  try {
    // Check scan limit before processing
    const canScan = await checkAndIncrementScan();
    if (!canScan) {
      progressEl.classList.remove('active');
      document.getElementById('input-slip').value = '';
      return;
    }

    const base64Data = await fileToBase64(file);
    const mimeType   = file.type || 'image/jpeg';

    pendingImageData = base64Data;
    pendingImageMime = mimeType;
    // Pro: compress to viewable quality; Free: no storage
    pendingImageStored = userPlan === 'pro'
      ? await compressImage(base64Data, mimeType, 1200, 0.82)
      : null;

    const previewContainer = document.getElementById('image-preview-container');
    const previewImg       = document.getElementById('image-preview');
    previewImg.src = `data:${mimeType};base64,${base64Data}`; // always show preview locally
    previewContainer.style.display = 'block';

    textEl.textContent = t('modal.analyzing');
    barEl.style.setProperty('--progress', '40%');

    const scanRes = await fetch('/api/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ base64Data, mimeType }),
    });
    if (!scanRes.ok) {
      const errData = await scanRes.json().catch(() => ({}));
      throw new Error(errData.error || `Server Error ${scanRes.status}`);
    }
    const data = await scanRes.json();
    barEl.style.setProperty('--progress', '90%');

    if (data.amount) {
      document.getElementById('input-amount').value = data.amount;
      if (data.description) document.getElementById('input-description').value = data.description;
      showToast(t('toast.scanSuccess'));
    } else {
      showToast(t('toast.scanNoAmount'), 'error');
    }

    setTransactionType('expense');
    barEl.style.setProperty('--progress', '100%');
  } catch (err) {
    console.error('Scan error:', err);
    showToast(t('toast.scanError', { msg: err.message }), 'error', 6000);
  } finally {
    // Always reset the file input so selecting the same file again triggers change event
    document.getElementById('input-slip').value = '';
    setTimeout(() => progressEl.classList.remove('active'), 500);
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload  = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
  });
}

// ========================
// Dev Plan Toggle
// ========================
function updateDevToggleUI() {
  const btn = document.getElementById('btn-dev-toggle');
  if (!btn) return;
  const isDev = DEV_EMAILS.includes(currentUser?.email);
  btn.style.display = isDev ? '' : 'none';
  btn.textContent = userPlan === 'pro' ? t('dev.switchFree') : t('dev.switchPro');
}

function handleDevToggle() {
  if (!DEV_EMAILS.includes(currentUser?.email)) return;
  devPlanOverride = userPlan === 'pro' ? 'free' : 'pro';
  localStorage.setItem('mf_dev_plan', devPlanOverride);
  userPlan = devPlanOverride;
  updatePlanUI();
  updateDevToggleUI();
  showToast(t('dev.toasted') + (userPlan === 'pro' ? 'Pro ⭐' : 'Free'));
}

// ========================
// Payment (Omise)
// ========================
async function handleUpgradePayment() {
  // Check if Omise is configured
  if (OMISE_PUBLIC_KEY.includes('YOUR_OMISE')) {
    showToast(t('toast.paymentSoon'), 'error', 4000);
    return;
  }

  // Load Omise.js dynamically
  if (!window.OmiseCard) {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.omise.co/omise.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  window.OmiseCard.configure({ publicKey: OMISE_PUBLIC_KEY });
  window.OmiseCard.open({
    frameLabel:  'MoneyFlow Pro',
    submitLabel: t('upgrade.pay'),
    currency:    'THB',
    amount:      7900,
    onCreateTokenSuccess: async (token) => {
      try {
        showLoading(t('loading.payment'));
        closeModal('upgrade-modal-overlay');

        const res = await fetch('/api/payment-create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, uid: currentUser.uid, email: currentUser.email }),
        });
        const result = await res.json();

        if (result.success) {
          userPlan = 'pro';
          await fsSaveMeta({ plan: 'pro', pro_until: result.pro_until });
          updatePlanUI();
          showToast(t('toast.paymentSuccess'), 'success', 5000);
        } else {
          showToast(t('toast.paymentFail') + (result.error || ''), 'error');
        }
      } catch (err) {
        showToast('❌ ' + err.message, 'error');
      } finally {
        hideLoading();
      }
    },
    onFormClosed: () => {},
  });
}

// ========================
// Init
// ========================
function openChangelog() {
  const body = document.getElementById('changelog-body');
  const typeIcon = { new: '✨', fix: '🐛', improve: '⚡' };
  const loc = dateLocale();
  body.innerHTML = CHANGELOG.map(v => `
    <div class="cl-version">
      <div class="cl-version-header">
        <span class="cl-version-num">v${v.version}</span>
        <span class="cl-version-label">${v.label}</span>
        <span class="cl-version-date">${new Date(v.date).toLocaleDateString(loc, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
      </div>
      <ul class="cl-list">
        ${v.changes.map(c => `
          <li class="cl-item cl-${c.type}">
            <span class="cl-icon">${typeIcon[c.type] || '•'}</span>
            <span class="cl-tag ${c.type}">${t(`cl.${c.type}`) || c.type}</span>
            <span class="cl-text">${c.text}</span>
          </li>`).join('')}
      </ul>
    </div>`).join('');
  document.getElementById('changelog-overlay').classList.add('open');
  // Close settings if open
  closeModal('settings-modal-overlay');
}

function init() {
  // Apply translations first (uses saved/detected language)
  applyI18n();
  updateCurrentDate();
  populateCategorySelect('income');
  populateFilterCategory();
  const verEl = document.getElementById('app-version');
  if (verEl) verEl.textContent = 'v' + APP_VERSION;

  // Login screen
  document.getElementById('btn-google-signin').addEventListener('click', handleSignIn);

  // Navigation
  document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(btn => btn.addEventListener('click', () => {
    setView(btn.dataset.view);
    document.getElementById('sidebar').classList.remove('open');
  }));
  document.getElementById('see-all-btn').addEventListener('click', () => setView('transactions'));

  // Mobile sidebar
  document.getElementById('menu-toggle').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const toggle  = document.getElementById('menu-toggle');
    if (window.innerWidth <= 900 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== toggle) {
      sidebar.classList.remove('open');
    }
  });

  // Header buttons (desktop) + FAB (mobile)
  document.getElementById('btn-open-modal').addEventListener('click', openAddModal);
  document.getElementById('mobile-fab')?.addEventListener('click', openAddModal);

  // Type toggle
  document.getElementById('type-income').addEventListener('click',  () => setTransactionType('income'));
  document.getElementById('type-expense').addEventListener('click', () => setTransactionType('expense'));

  // Modal close
  document.getElementById('modal-close').addEventListener('click',    () => closeModal('modal-overlay'));
  document.getElementById('modal-overlay').addEventListener('click',  e => { if (e.target === e.currentTarget) closeModal('modal-overlay'); });

  // Form submit
  document.getElementById('transaction-form').addEventListener('submit', handleFormSubmit);

  // Delete
  document.getElementById('delete-confirm').addEventListener('click', async () => {
    if (!pendingDeleteId) return;
    const id = pendingDeleteId;
    pendingDeleteId = null;
    closeModal('delete-overlay');
    try {
      showLoading(t('loading.deleting'));
      await fsDelete(id);
      showToast(t('toast.deleted'));
    } catch (err) {
      showToast(t('toast.deleteError') + err.message, 'error');
    } finally {
      hideLoading();
    }
  });
  document.getElementById('delete-cancel').addEventListener('click',   () => closeModal('delete-overlay'));
  document.getElementById('delete-cancel-x').addEventListener('click', () => closeModal('delete-overlay'));
  document.getElementById('delete-overlay').addEventListener('click',  e => { if (e.target === e.currentTarget) closeModal('delete-overlay'); });

  // Clear all (now inside settings modal)
  document.getElementById('btn-clear-all').addEventListener('click', async () => {
    if (transactions.length === 0) { showToast(t('toast.clearNone'), 'error'); return; }
    if (!confirm(t('confirm.clearAll'))) return;
    closeModal('settings-modal-overlay');
    try {
      showLoading(t('loading.clearing'));
      const batch = writeBatch(db);
      transactions.forEach(tx => batch.delete(doc(txCol(), tx.id)));
      await batch.commit();
      showToast(t('toast.clearAll'));
    } catch (err) {
      showToast('❌ ' + err.message, 'error');
    } finally {
      hideLoading();
    }
  });

  // Filters
  document.getElementById('filter-type').addEventListener('change', renderAllTransactions);
  document.getElementById('filter-category').addEventListener('change', renderAllTransactions);
  document.getElementById('tx-search').addEventListener('input', e => {
    txSearch = e.target.value;
    renderAllTransactions();
  });

  // Image preview removal
  document.getElementById('btn-remove-image').addEventListener('click', clearPendingImage);

  // Settings
  document.getElementById('btn-open-settings').addEventListener('click', () => {
    document.getElementById('input-cutoff-day').value = cutoffDay;
    document.getElementById('select-language').value   = getLanguage();
    openModal('settings-modal-overlay');
  });
  document.getElementById('settings-modal-close').addEventListener('click', () => closeModal('settings-modal-overlay'));
  document.getElementById('settings-modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal('settings-modal-overlay');
  });
  document.getElementById('btn-save-settings').addEventListener('click', async () => {
    const day  = parseInt(document.getElementById('input-cutoff-day').value);
    const lang = document.getElementById('select-language').value;
    if (day < 1 || day > 31 || isNaN(day)) {
      showToast(t('toast.cutoffError'), 'error'); return;
    }
    // Apply language change first
    const langChanged = lang !== getLanguage();
    if (langChanged) {
      setLanguage(lang);
      applyI18n();
      // Refresh dynamic UI that uses t()
      updateCurrentDate();
      populateCategorySelect(currentType);
      populateFilterCategory();
      setSyncStatus(document.getElementById('sync-badge').className.replace('sync-badge ', '').trim() || 'offline');
    }
    // Save cutoff day
    cutoffDay = day;
    localStorage.setItem('mf_cutoff_day', cutoffDay);
    try {
      await fsSaveMeta({ cutoff_day: day });
      showToast(t('toast.settingsSaved'));
    } catch {
      showToast(t('toast.settingsLocal'), 'error');
    }
    closeModal('settings-modal-overlay');
    renderAll();
  });

  // Upgrade modal
  document.getElementById('btn-upgrade').addEventListener('click', () => openUpgradeModal());
  document.getElementById('btn-trends-upgrade')?.addEventListener('click', () => openUpgradeModal(t('trends.upgradeBtn')));
  document.getElementById('upgrade-modal-close').addEventListener('click', () => closeModal('upgrade-modal-overlay'));
  document.getElementById('upgrade-modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal('upgrade-modal-overlay');
  });
  document.getElementById('btn-pay-omise').addEventListener('click', handleUpgradePayment);

  // Transaction view mode toggle
  document.getElementById('btn-view-list')?.addEventListener('click',   () => setTxViewMode('list'));
  document.getElementById('btn-view-split')?.addEventListener('click',  () => setTxViewMode('split'));
  document.getElementById('btn-range-all')?.addEventListener('click',   () => setTxRangeMode('all'));
  document.getElementById('btn-range-cycle')?.addEventListener('click', () => setTxRangeMode('cycle'));

  // Dev toggle (hidden for non-dev users)
  const devToggleBtn = document.getElementById('btn-dev-toggle');
  if (devToggleBtn) devToggleBtn.addEventListener('click', handleDevToggle);

  // Sign out (sidebar + settings modal sign-out button for mobile)
  document.getElementById('btn-signout').addEventListener('click', handleSignOut);
  document.getElementById('btn-signout-settings')?.addEventListener('click', handleSignOut);

  // Mobile top bar buttons
  document.getElementById('mobile-btn-updates')?.addEventListener('click', openChangelog);
  document.getElementById('mobile-btn-settings')?.addEventListener('click', () => {
    document.getElementById('input-cutoff-day').value = cutoffDay;
    document.getElementById('select-language').value   = getLanguage();
    openModal('settings-modal-overlay');
  });

  // Changelog (button is now inside settings modal)
  document.getElementById('btn-changelog').addEventListener('click', openChangelog);
  document.getElementById('changelog-close').addEventListener('click', () => closeModal('changelog-overlay'));
  document.getElementById('changelog-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('changelog-overlay');
  });

  // Slip lightbox close
  const closeLightbox = () => document.getElementById('slip-lightbox').classList.remove('active');
  document.getElementById('slip-lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('slip-lightbox-backdrop').addEventListener('click', closeLightbox);

  // Slip Scan
  document.getElementById('btn-scan').addEventListener('click', () => document.getElementById('input-slip').click());
  document.getElementById('input-slip').addEventListener('change', handleSlipScan);

  // Budget modal
  document.getElementById('btn-open-budget')?.addEventListener('click', openBudgetModal);
  document.getElementById('budget-modal-close')?.addEventListener('click', () => closeModal('budget-modal-overlay'));
  document.getElementById('budget-modal-overlay')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal('budget-modal-overlay'); });
  document.getElementById('btn-save-budget')?.addEventListener('click', saveBudget);
  document.getElementById('btn-cancel-budget')?.addEventListener('click', () => closeModal('budget-modal-overlay'));

  // Recurring modal
  document.getElementById('btn-add-recurring')?.addEventListener('click', openAddRecurringModal);
  document.getElementById('recurring-modal-close')?.addEventListener('click', () => closeModal('recurring-modal-overlay'));
  document.getElementById('recurring-modal-overlay')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal('recurring-modal-overlay'); });
  document.getElementById('recurring-form')?.addEventListener('submit', handleRecurringFormSubmit);
  document.getElementById('btn-cancel-recurring')?.addEventListener('click', () => closeModal('recurring-modal-overlay'));

  // Export CSV + PDF
  document.getElementById('btn-export-csv')?.addEventListener('click', exportCSV);
  document.getElementById('btn-export-pdf')?.addEventListener('click', exportPDF);

  // Monthly comparison chart range
  document.getElementById('monthly-range-select')?.addEventListener('change', renderMonthlyChart);

  // Savings Goal modal
  document.getElementById('btn-edit-savings-goal')?.addEventListener('click', () => {
    if (savingsGoal) {
      document.getElementById('savings-goal-name').value     = savingsGoal.name || '';
      document.getElementById('savings-goal-amount').value   = savingsGoal.targetAmount || '';
      document.getElementById('savings-goal-deadline').value = savingsGoal.deadline || '';
    } else {
      document.getElementById('savings-goal-name').value     = '';
      document.getElementById('savings-goal-amount').value   = '';
      document.getElementById('savings-goal-deadline').value = '';
    }
    openModal('savings-goal-modal-overlay');
  });
  document.getElementById('savings-goal-modal-close')?.addEventListener('click', () => closeModal('savings-goal-modal-overlay'));
  document.getElementById('savings-goal-modal-overlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal('savings-goal-modal-overlay');
  });
  document.getElementById('btn-save-savings-goal')?.addEventListener('click', async () => {
    const name     = document.getElementById('savings-goal-name').value.trim();
    const amount   = parseFloat(document.getElementById('savings-goal-amount').value);
    const deadline = document.getElementById('savings-goal-deadline').value;
    if (!amount || amount <= 0) { showToast('กรุณาใส่จำนวนเงินเป้าหมาย', 'error'); return; }
    savingsGoal = { name, targetAmount: amount, deadline };
    await fsSaveMeta({ savingsGoal });
    closeModal('savings-goal-modal-overlay');
    renderSavingsGoal();
    showToast('🎯 บันทึกเป้าหมายสำเร็จ');
  });
  document.getElementById('btn-clear-savings-goal')?.addEventListener('click', async () => {
    if (!confirm('ลบเป้าหมายการออม?')) return;
    savingsGoal = null;
    await fsSaveMeta({ savingsGoal: null });
    closeModal('savings-goal-modal-overlay');
    renderSavingsGoal();
    showToast('ลบเป้าหมายแล้ว', 'warning');
  });

  // Budget notification toggles — auto-save on change
  const toggleBudgetNotify = document.getElementById('toggle-budget-notify');
  const budgetNotifySub    = document.getElementById('budget-notify-sub');
  toggleBudgetNotify?.addEventListener('change', () => {
    budgetSettings.enabled = toggleBudgetNotify.checked;
    if (budgetNotifySub) budgetNotifySub.style.display = budgetSettings.enabled ? '' : 'none';
    saveBudgetSettings();
  });
  document.getElementById('toggle-notify-near')?.addEventListener('change', e => {
    budgetSettings.notifyNear = e.target.checked;
    saveBudgetSettings();
  });
  document.getElementById('toggle-notify-over')?.addEventListener('change', e => {
    budgetSettings.notifyOver = e.target.checked;
    saveBudgetSettings();
  });
  document.getElementById('notify-mode-once')?.addEventListener('change', e => {
    if (e.target.checked) { budgetSettings.notifyMode = 'once'; saveBudgetSettings(); }
  });
  document.getElementById('notify-mode-always')?.addEventListener('change', e => {
    if (e.target.checked) { budgetSettings.notifyMode = 'always'; saveBudgetSettings(); }
  });

  // Render from local cache immediately (before Firebase responds)
  if (transactions.length > 0) renderAll();
}

init();
