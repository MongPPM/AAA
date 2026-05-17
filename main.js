import { auth, db, googleProvider } from './firebase.js';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  onSnapshot, getDoc, setDoc, query, orderBy, writeBatch,
} from 'firebase/firestore';

// ========================
// Data & Configuration
// ========================
const CATEGORIES = {
  income: [
    { id: 'salary',     label: 'เงินเดือน',         emoji: '💼' },
    { id: 'freelance',  label: 'ฟรีแลนซ์',          emoji: '💻' },
    { id: 'investment', label: 'การลงทุน',           emoji: '📈' },
    { id: 'gift',       label: 'ของขวัญ/โบนัส',     emoji: '🎁' },
    { id: 'other_in',   label: 'รายรับอื่นๆ',       emoji: '💰' },
  ],
  expense: [
    { id: 'food',          label: 'อาหาร',              emoji: '🍜' },
    { id: 'transport',     label: 'เดินทาง',            emoji: '🚗' },
    { id: 'shopping',      label: 'ช้อปปิ้ง',           emoji: '🛍️' },
    { id: 'utilities',     label: 'ค่าสาธารณูปโภค',    emoji: '💡' },
    { id: 'health',        label: 'สุขภาพ',             emoji: '🏥' },
    { id: 'entertainment', label: 'บันเทิง',            emoji: '🎮' },
    { id: 'education',     label: 'การศึกษา',           emoji: '📚' },
    { id: 'rent',          label: 'ค่าเช่า/บ้าน',      emoji: '🏠' },
    { id: 'other_ex',      label: 'รายจ่ายอื่นๆ',      emoji: '📦' },
  ],
};

const CAT_COLORS = {
  income:  ['#22c55e','#16a34a','#86efac','#4ade80','#bbf7d0'],
  expense: ['#f43f5e','#e11d48','#fb7185','#f97316','#fb923c','#fbbf24','#a855f7','#8b5cf6','#6366f1'],
};

const CAT_MAP = new Map(
  [...CATEGORIES.income, ...CATEGORIES.expense].map(c => [c.id, c])
);

// Omise publishable key (public — safe to expose in frontend)
// ⚠️ TODO: Replace with your actual key from https://dashboard.omise.co → Keys
const OMISE_PUBLIC_KEY = 'pkey_test_YOUR_OMISE_PUBLIC_KEY';
const FREE_SCAN_LIMIT = 10;

// ========================
// State
// ========================
let transactions = JSON.parse(localStorage.getItem('mf_cache_tx') || '[]');
let currentType  = 'income';
let pendingDeleteId = null;
let editingId    = null;
let currentView  = 'dashboard';
let cutoffDay    = parseInt(localStorage.getItem('mf_cutoff_day')) || 1;
let pendingImageData = null;
let pendingImageMime = null;
let dailyChartInstance = null;

// Auth & plan state
let currentUser      = null;
let userPlan         = 'free'; // 'free' | 'pro'
let scanCount        = 0;
let scanMonth        = '';
let unsubscribeSnap  = null;

// ========================
// Firestore Helpers
// ========================
const txCol   = () => collection(db, 'users', currentUser.uid, 'transactions');
const metaRef = () => doc(db, 'users', currentUser.uid, 'meta');

// ========================
// Auth State Driver
// ========================
onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    showApp();
    showLoading('กำลังโหลดข้อมูล...');
    await loadUserMeta();
    setupRealtimeListener();
    updateUserProfile();
  } else {
    currentUser = null;
    if (unsubscribeSnap) { unsubscribeSnap(); unsubscribeSnap = null; }
    transactions = [];
    userPlan = 'free';
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
    showLoading('กำลังเข้าสู่ระบบ...');
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    hideLoading();
    showToast('เข้าสู่ระบบไม่สำเร็จ: ' + err.message, 'error');
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
    saveLocalCache();
    renderAll();
    setSyncStatus('online');
    hideLoading();
  }, (err) => {
    console.error('Firestore snapshot error:', err);
    setSyncStatus('offline');
    hideLoading();
    if (transactions.length === 0) showToast('⚠️ โหลดข้อมูลไม่สำเร็จ', 'error');
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
      userPlan  = data.plan || 'free';
      scanCount = data.scan_count || 0;
      scanMonth = data.scan_month || '';
    }
    updatePlanUI();
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
  // Hide upgrade button if already Pro
  const upgradeBtn = document.getElementById('btn-upgrade');
  if (upgradeBtn) upgradeBtn.style.display = userPlan === 'pro' ? 'none' : '';

  // Update scan count info
  const scanInfo = document.getElementById('scan-info');
  if (scanInfo) {
    if (userPlan === 'pro') {
      scanInfo.textContent = 'สแกนสลิปได้ไม่จำกัด ⭐';
    } else {
      const currentMonth = new Date().toISOString().slice(0, 7);
      const used = scanMonth === currentMonth ? scanCount : 0;
      scanInfo.textContent = `สแกนฟรีเหลือ ${FREE_SCAN_LIMIT - used}/${FREE_SCAN_LIMIT} ครั้งเดือนนี้`;
    }
  }
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

  const currentMonth = new Date().toISOString().slice(0, 7);
  // Fetch fresh count from Firestore to prevent race conditions
  const snap = await getDoc(metaRef());
  const meta = snap.exists() ? snap.data() : {};

  const sameMonth = meta.scan_month === currentMonth;
  const count = sameMonth ? (meta.scan_count || 0) : 0;

  if (count >= FREE_SCAN_LIMIT) {
    openUpgradeModal('คุณใช้ครบ ' + FREE_SCAN_LIMIT + ' ครั้งสแกนฟรีแล้ว\nอัปเกรดเป็น Pro เพื่อสแกนไม่จำกัด');
    return false;
  }

  const newCount = count + 1;
  await fsSaveMeta({ scan_count: newCount, scan_month: currentMonth });
  scanCount = newCount;
  scanMonth = currentMonth;
  updatePlanUI();
  return true;
}

// ========================
// Loading Overlay
// ========================
function showLoading(msg = 'กำลังโหลด...') {
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
  const labels = { online: 'ออนไลน์', offline: 'ออฟไลน์', syncing: 'กำลังซิงค์...' };
  label.textContent = labels[status] || status;
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
  return d.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })
    + ' · ' + d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
}
function getCategoryInfo(type, catId) {
  return CAT_MAP.get(catId) || { label: catId, emoji: '📌' };
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
  const titles = { dashboard: 'ภาพรวม', transactions: 'รายการทั้งหมด', analytics: 'วิเคราะห์ตามหมวดหมู่', trends: 'แนวโน้มรายวัน' };
  document.getElementById('page-title').textContent = titles[view] || '';
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
    opt.textContent = `${cat.emoji} ${cat.label}`;
    select.appendChild(opt);
  });
}
function populateFilterCategory() {
  const select = document.getElementById('filter-category');
  select.innerHTML = '<option value="all">ทุกหมวดหมู่</option>';
  [...CATEGORIES.income, ...CATEGORIES.expense].forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = `${cat.emoji} ${cat.label}`;
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

  const total = income + expense;
  const expenseRatio = total > 0 ? (expense / total) * 100 : 0;
  document.getElementById('ratio-fill').style.width = expenseRatio + '%';
  document.getElementById('ratio-income-label').textContent  = `รายรับ ${(100 - expenseRatio).toFixed(0)}%`;
  document.getElementById('ratio-expense-label').textContent = `รายจ่าย ${expenseRatio.toFixed(0)}%`;

  const balanceTrend = document.getElementById('balance-trend');
  if (balance > 0) balanceTrend.textContent = '↑ คุณมีเงินเหลือ';
  else if (balance < 0) balanceTrend.textContent = '↓ รายจ่ายเกินรายรับ';
  else balanceTrend.textContent = 'รายรับเท่ากับรายจ่าย';

  const recent = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  renderTransactionList('recent-list', recent, 'empty-recent');
}

// ========================
// Render Transaction List
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
    const div = document.createElement('div');
    div.className = 'transaction-item';
    div.innerHTML = `
      <div class="tx-emoji">${cat.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${escapeHtml(tx.description)}
          ${tx.imageUrl && tx.imageUrl.startsWith('https://') ? `<a href="${escapeHtml(tx.imageUrl)}" target="_blank" rel="noopener noreferrer" class="tx-image-link" title="ดูรูปภาพ">🖼️</a>` : ''}
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
}

// ========================
// Render All Transactions
// ========================
function renderAllTransactions() {
  const filterType = document.getElementById('filter-type').value;
  const filterCat  = document.getElementById('filter-category').value;
  let filtered = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
  if (filterType !== 'all') filtered = filtered.filter(t => t.type === filterType);
  if (filterCat  !== 'all') filtered = filtered.filter(t => t.category === filterCat);
  renderTransactionList('all-list', filtered, 'empty-all');
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

  const { start, end } = getCycleRange();
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
    labels.push(cursor.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' }));
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
        { label: 'รายรับ',  data: incomeData,  backgroundColor: '#16A34A', borderRadius: 6 },
        { label: 'รายจ่าย', data: expenseData, backgroundColor: '#EF4444', borderRadius: 6 },
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

function renderCategoryBreakdown(type, containerId) {
  const container = document.getElementById(containerId);
  const txList = transactions.filter(t => t.type === type && isInCurrentCycle(t.date));
  if (txList.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${type === 'expense' ? '📊' : '💵'}</div><p>ยังไม่มีข้อมูล</p></div>`;
    return;
  }
  const totals = {};
  txList.forEach(t => { totals[t.category] = (totals[t.category] || 0) + Number(t.amount); });
  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const maxVal  = sorted[0][1];
  const colors  = CAT_COLORS[type];
  container.innerHTML = '';
  sorted.forEach(([catId, amount], idx) => {
    const cat = getCategoryInfo(type, catId);
    const pct = ((amount / maxVal) * 100).toFixed(1);
    const div = document.createElement('div');
    div.className = 'cat-item';
    div.innerHTML = `
      <div class="cat-emoji">${cat.emoji}</div>
      <div class="cat-info">
        <div class="cat-name">${cat.label}</div>
        <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${pct}%;background:${colors[idx % colors.length]};"></div></div>
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
  else if (currentView === 'analytics')    renderAnalytics();
  else if (currentView === 'trends')       renderDailyChart();
}

// ========================
// Modal: Add / Edit
// ========================
function openAddModal() {
  editingId = null;
  document.getElementById('modal-title').textContent  = 'เพิ่มรายการใหม่';
  document.getElementById('submit-label').textContent = 'เพิ่มรายการ';
  document.getElementById('transaction-form').reset();
  document.getElementById('edit-id').value = '';
  const now = new Date();
  document.getElementById('input-date').value = new Date(now - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  clearPendingImage();
  setTransactionType('income');
  openModal('modal-overlay');
}

function openEditModal(id) {
  const tx = transactions.find(t => t.id === id);
  if (!tx) return;
  editingId = id;
  document.getElementById('modal-title').textContent  = 'แก้ไขรายการ';
  document.getElementById('submit-label').textContent = 'บันทึกการแก้ไข';
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
    showToast('กรุณากรอกข้อมูลให้ครบถ้วน', 'error'); return;
  }

  const wasEditing  = !!editingId;
  const isContinue  = document.getElementById('check-continue').checked;
  const submitBtn   = document.getElementById('btn-submit');
  submitBtn.disabled = true;
  showLoading('กำลังบันทึก...');

  try {
    const txData = {
      type: currentType, amount, description, category, date,
      createdAt: new Date().toISOString(),
      imageUrl: '',
    };

    if (wasEditing) {
      await fsUpdate(editingId, txData);
      showToast('✅ บันทึกการแก้ไขแล้ว');
      editingId = null;
    } else {
      await fsAdd(txData);
      showToast('✅ บันทึกแล้ว');
    }

    if (wasEditing || !isContinue) {
      closeModal('modal-overlay');
    } else {
      document.getElementById('input-amount').value = '';
      document.getElementById('input-description').value = '';
      clearPendingImage();
      const now = new Date();
      document.getElementById('input-date').value = new Date(now - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
      document.getElementById('input-amount').focus();
    }
  } catch (err) {
    showToast('❌ ' + err.message, 'error');
  } finally {
    submitBtn.disabled = false;
    hideLoading();
  }
}

// ========================
// Current Date
// ========================
function updateCurrentDate() {
  document.getElementById('current-date').textContent = new Date().toLocaleDateString('th-TH', {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
  });
}

// ========================
// Slip Scanning (Gemini 2.5 Flash via Vercel)
// ========================
function clearPendingImage() {
  pendingImageData = null;
  pendingImageMime = null;
  const previewContainer = document.getElementById('image-preview-container');
  const previewImg       = document.getElementById('image-preview');
  previewImg.src = '';
  previewContainer.style.display = 'none';
  document.getElementById('input-slip').value = '';
}

async function handleSlipScan(e) {
  const file = e.target.files[0];
  if (!file) return;

  const progressEl = document.getElementById('scan-progress');
  const barEl      = progressEl.querySelector('.progress-bar');
  const textEl     = progressEl.querySelector('.progress-text');

  progressEl.classList.add('active');
  textEl.textContent = 'กำลังเตรียมรูปภาพ...';
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

    const previewContainer = document.getElementById('image-preview-container');
    const previewImg       = document.getElementById('image-preview');
    previewImg.src = `data:${mimeType};base64,${base64Data}`;
    previewContainer.style.display = 'block';

    textEl.textContent = 'Gemini 2.5 AI กำลังวิเคราะห์สลิป...';
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
      showToast('✅ สแกนสำเร็จโดย Gemini 2.5 Flash');
    } else {
      showToast('⚠️ AI ไม่พบยอดเงินในสลิปนี้', 'error');
    }

    setTransactionType('expense');
    barEl.style.setProperty('--progress', '100%');
  } catch (err) {
    console.error('Scan error:', err);
    showToast('⚠️ สแกนไม่ได้: ' + err.message + ' — รูปยังแนบอยู่', 'error', 6000);
  } finally {
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
// Payment (Omise)
// ========================
async function handleUpgradePayment() {
  // Check if Omise is configured
  if (OMISE_PUBLIC_KEY.includes('YOUR_OMISE')) {
    showToast('ระบบชำระเงินกำลังเปิดใช้งาน เร็วๆ นี้', 'error', 4000);
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
    submitLabel: 'ชำระเงิน 79 ฿/เดือน',
    currency:    'THB',
    amount:      7900,
    onCreateTokenSuccess: async (token) => {
      try {
        showLoading('กำลังประมวลผลการชำระเงิน...');
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
          showToast('🎉 อัปเกรดเป็น Pro สำเร็จ!', 'success', 5000);
        } else {
          showToast('❌ ชำระเงินไม่สำเร็จ: ' + (result.error || 'ลองใหม่อีกครั้ง'), 'error');
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
function init() {
  updateCurrentDate();
  populateCategorySelect('income');
  populateFilterCategory();

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

  // Header buttons
  document.getElementById('btn-open-modal').addEventListener('click', openAddModal);

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
      showLoading('กำลังลบ...');
      await fsDelete(id);
      showToast('🗑️ ลบรายการแล้ว');
    } catch (err) {
      showToast('❌ ลบไม่สำเร็จ: ' + err.message, 'error');
    } finally {
      hideLoading();
    }
  });
  document.getElementById('delete-cancel').addEventListener('click',   () => closeModal('delete-overlay'));
  document.getElementById('delete-cancel-x').addEventListener('click', () => closeModal('delete-overlay'));
  document.getElementById('delete-overlay').addEventListener('click',  e => { if (e.target === e.currentTarget) closeModal('delete-overlay'); });

  // Clear all
  document.getElementById('btn-clear-all').addEventListener('click', async () => {
    if (transactions.length === 0) { showToast('ไม่มีข้อมูลให้ล้าง', 'error'); return; }
    if (!confirm('ต้องการล้างข้อมูลทั้งหมดหรือไม่?')) return;
    try {
      showLoading('กำลังล้างข้อมูล...');
      const batch = writeBatch(db);
      transactions.forEach(tx => batch.delete(doc(txCol(), tx.id)));
      await batch.commit();
      showToast('🗑️ ล้างข้อมูลทั้งหมดแล้ว');
    } catch (err) {
      showToast('❌ ' + err.message, 'error');
    } finally {
      hideLoading();
    }
  });

  // Filters
  document.getElementById('filter-type').addEventListener('change', renderAllTransactions);
  document.getElementById('filter-category').addEventListener('change', renderAllTransactions);

  // Image preview removal
  document.getElementById('btn-remove-image').addEventListener('click', clearPendingImage);

  // Settings
  document.getElementById('btn-open-settings').addEventListener('click', () => {
    document.getElementById('input-cutoff-day').value = cutoffDay;
    openModal('settings-modal-overlay');
  });
  document.getElementById('settings-modal-close').addEventListener('click', () => closeModal('settings-modal-overlay'));
  document.getElementById('settings-modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal('settings-modal-overlay');
  });
  document.getElementById('btn-save-settings').addEventListener('click', async () => {
    const day = parseInt(document.getElementById('input-cutoff-day').value);
    if (day >= 1 && day <= 31) {
      cutoffDay = day;
      localStorage.setItem('mf_cutoff_day', cutoffDay);
      try {
        await fsSaveMeta({ cutoff_day: day });
        showToast('บันทึกตั้งค่าแล้ว ✅');
      } catch {
        showToast('บันทึกในเครื่องแล้ว (ซิงค์ไม่ได้)', 'error');
      }
      closeModal('settings-modal-overlay');
      renderAll();
    } else {
      showToast('กรุณากรอกวันที่ระหว่าง 1-31', 'error');
    }
  });

  // Upgrade modal
  document.getElementById('btn-upgrade').addEventListener('click', () => openUpgradeModal());
  document.getElementById('upgrade-modal-close').addEventListener('click', () => closeModal('upgrade-modal-overlay'));
  document.getElementById('upgrade-modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal('upgrade-modal-overlay');
  });
  document.getElementById('btn-pay-omise').addEventListener('click', handleUpgradePayment);

  // Sign out
  document.getElementById('btn-signout').addEventListener('click', handleSignOut);

  // Slip Scan
  document.getElementById('btn-scan').addEventListener('click', () => document.getElementById('input-slip').click());
  document.getElementById('input-slip').addEventListener('change', handleSlipScan);

  // Render from local cache immediately (before Firebase responds)
  if (transactions.length > 0) renderAll();
}

init();
