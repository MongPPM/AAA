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

// Flat lookup Map — built once, O(1) per call instead of array spread + find
const CAT_MAP = new Map(
  [...CATEGORIES.income, ...CATEGORIES.expense].map(c => [c.id, c])
);

// ========================
// State
// ========================
let transactions = JSON.parse(localStorage.getItem('mf_cache_tx') || '[]');
let currentType  = 'income';
let pendingDeleteId = null;
let editingId    = null;
let currentView  = 'dashboard';
const DEFAULT_API_URL = 'https://script.google.com/macros/s/AKfycbyNgQU1KtcgV2wVWcGslNGkq6_o3IjjzSCs9Jy0SSAsOxeP6xqEoXldWf4EJD5GdB_k/exec';
let apiUrl = DEFAULT_API_URL;
let cutoffDay = parseInt(localStorage.getItem('mf_cutoff_day')) || 1;
let pendingImageData = null;
let pendingImageMime = null;
let pendingImageName = null;
let dailyChartInstance = null;

function saveLocalCache() {
  localStorage.setItem('mf_cache_tx', JSON.stringify(transactions));
}

// ========================
// API Layer
// ========================
async function apiFetch(action, transaction = null) {
  if (!apiUrl) throw new Error('ยังไม่ได้ตั้งค่า Google Apps Script URL');

  if (action === 'getAll') {
    const res = await fetch(apiUrl, { method: 'GET' });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || 'เกิดข้อผิดพลาด');
    return data.data;
  } else {
    // POST with text/plain to avoid CORS preflight
    // uploadImage / scanSlip / saveSetting send their fields at the top level;
    // everything else nests data under "transaction" for the backend router.
    let payload = { action };
    if (['uploadImage', 'scanSlip', 'saveSetting'].includes(action)) {
      payload = { ...payload, ...transaction };
    } else {
      payload.transaction = transaction;
    }
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || 'เกิดข้อผิดพลาด');
    return data.data;
  }
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
  // status: 'online' | 'offline' | 'syncing'
  const badge = document.getElementById('sync-badge');
  const label = document.getElementById('sync-label');
  badge.className = 'sync-badge ' + status;
  const labels = { online: 'ออนไลน์', offline: 'ออฟไลน์', syncing: 'กำลังซิงค์...' };
  label.textContent = labels[status] || status;
}

// ========================
// Load transactions from API
// ========================
async function loadTransactions() {
  if (!apiUrl) { setSyncStatus('offline'); return; }
  
  // 1. Render from cache immediately if available
  if (transactions.length > 0) {
    renderAll();
  }

  try {
    setSyncStatus('syncing');
    // Don't show full loading overlay if we already have data (silent sync)
    if (transactions.length === 0) showLoading('กำลังโหลดข้อมูล...');
    
    const [freshData, settings] = await Promise.all([
      apiFetch('getAll'),
      apiFetch('getSettings').catch(() => ({}))
    ]);
    transactions = freshData;
    saveLocalCache();
    // Apply synced settings (server wins over localStorage)
    if (settings.cutoff_day) {
      cutoffDay = parseInt(settings.cutoff_day) || cutoffDay;
      localStorage.setItem('mf_cutoff_day', cutoffDay);
    }
    setSyncStatus('online');
  } catch (err) {
    console.error(err);
    setSyncStatus('offline');
    if (transactions.length === 0) showToast('⚠️ โหลดข้อมูลไม่สำเร็จ: ' + err.message, 'error');
  } finally {
    hideLoading();
    renderAll();
  }
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
  const datePart = d.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
  const timePart = d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
  return `${datePart} · ${timePart}`;
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
  const el = document.getElementById(`view-${view}`);
  if (el) el.classList.add('active');
  const navEl = document.getElementById(`nav-${view}`);
  if (navEl) navEl.classList.add('active');
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
        <button class="tx-btn tx-btn-edit" data-id="${tx.id}" title="แก้ไข">✏️</button>
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
  renderCategoryBreakdown('income', 'income-breakdown');
}

function renderDailyChart() {
  const ctx = document.getElementById('dailyTrendChart');
  if (!ctx) return;

  // Calculate last 30 days
  const labels = [];
  const incomeData = [];
  const expenseData = [];
  
  const now = new Date();

  // Build date index once O(n) instead of filtering 30 times O(30n)
  const dateIndex = new Map();
  transactions.forEach(t => {
    const day = t.date ? t.date.slice(0, 10) : null;
    if (!day) return;
    if (!dateIndex.has(day)) dateIndex.set(day, { income: 0, expense: 0 });
    const entry = dateIndex.get(day);
    if (t.type === 'income') entry.income += Number(t.amount);
    else entry.expense += Number(t.amount);
  });

  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    labels.push(d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' }));
    const entry = dateIndex.get(dateStr) || { income: 0, expense: 0 };
    incomeData.push(entry.income);
    expenseData.push(entry.expense);
  }

  if (dailyChartInstance) {
    dailyChartInstance.data.labels = labels;
    dailyChartInstance.data.datasets[0].data = incomeData;
    dailyChartInstance.data.datasets[1].data = expenseData;
    dailyChartInstance.update('none');
    return;
  }

  dailyChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'รายรับ',
          data: incomeData,
          backgroundColor: '#22c55e',
          borderRadius: 4,
        },
        {
          label: 'รายจ่าย',
          data: expenseData,
          backgroundColor: '#f43f5e',
          borderRadius: 4,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: { color: '#94a3b8', font: { family: 'Inter' } }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#94a3b8' }
        },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: {
            color: '#94a3b8',
            callback: (val) => '฿' + val.toLocaleString()
          }
        }
      }
    }
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
  const maxVal = sorted[0][1];
  const colors = CAT_COLORS[type];
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
  if (currentView === 'dashboard')     renderDashboard();
  else if (currentView === 'transactions') renderAllTransactions();
  else if (currentView === 'analytics')    renderAnalytics();
  else if (currentView === 'trends')       renderDailyChart();
}

// ========================
// Modal: Add/Edit
// ========================
function openAddModal() {
  editingId = null;
  document.getElementById('modal-title').textContent  = 'เพิ่มรายการใหม่';
  document.getElementById('submit-label').textContent = 'เพิ่มรายการ';
  document.getElementById('transaction-form').reset();
  document.getElementById('edit-id').value  = '';
  
  // Set current local date and time
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  const localISOTime = (new Date(now - offset)).toISOString().slice(0, 16);
  document.getElementById('input-date').value = localISOTime;
  
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
  if (tx.imageUrl) {
    const previewContainer = document.getElementById('image-preview-container');
    const previewImg = document.getElementById('image-preview');
    previewImg.src = tx.imageUrl;
    previewContainer.style.display = 'block';
  }
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

  const isContinue = document.getElementById('check-continue').checked;
  const submitBtn = document.getElementById('btn-submit');
  
  submitBtn.disabled = true;
  let uploadedUrl = null;

  try {
    if (pendingImageData) {
      showLoading('กำลังอัปโหลดรูปภาพ...');
      const res = await apiFetch('uploadImage', { 
        base64Data: pendingImageData, 
        filename: pendingImageName, 
        mimeType: pendingImageMime 
      });
      uploadedUrl = res.url;
    }

    // Optimistic UI Update & Prepare Tx
    let tempTx;
    if (editingId) {
      const oldTx = transactions.find(t => t.id === editingId);
      tempTx = { 
        id: editingId, type: currentType, amount, description, category, date, 
        createdAt: new Date().toISOString(),
        imageUrl: uploadedUrl || (oldTx ? oldTx.imageUrl : '')
      };
      const idx = transactions.findIndex(t => t.id === editingId);
      if (idx !== -1) transactions[idx] = tempTx;
      showToast('✅ บันทึกการแก้ไขแล้ว (กำลังซิงค์...)');
    } else {
      tempTx = { 
        id: generateId(), type: currentType, amount, description, category, date, 
        createdAt: new Date().toISOString(),
        imageUrl: uploadedUrl || ''
      };
      transactions.unshift(tempTx);
      showToast('✅ บันทึกแล้ว (กำลังซิงค์...)');
    }

    if (!editingId && isContinue) {
      document.getElementById('input-amount').value = '';
      document.getElementById('input-description').value = '';
      document.getElementById('input-amount').focus();
      const now = new Date();
      const offset = now.getTimezoneOffset() * 60000;
      document.getElementById('input-date').value = (new Date(now - offset)).toISOString().slice(0, 16);
      clearPendingImage();
    } else {
      closeModal('modal-overlay');
    }

    renderAll();
    saveLocalCache();

    // Background API Call
    setSyncStatus('syncing');
    if (editingId) {
      await apiFetch('update', tempTx);
    } else {
      await apiFetch('add', tempTx);
    }
    setSyncStatus('online');
  } catch (err) {
    showToast('❌ ข้อผิดพลาด: ' + err.message, 'error');
    setSyncStatus('offline');
    loadTransactions(); // rollback
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
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
  });
}

// ========================
// Slip Scanning (Gemini 2.5 Flash AI)
// ========================
function clearPendingImage() {
  pendingImageData = null;
  pendingImageMime = null;
  pendingImageName = null;
  const previewContainer = document.getElementById('image-preview-container');
  const previewImg = document.getElementById('image-preview');
  previewImg.src = '';
  previewContainer.style.display = 'none';
  document.getElementById('input-slip').value = '';
}

async function handleSlipScan(e) {
  const file = e.target.files[0];
  if (!file) return;

  const progressEl = document.getElementById('scan-progress');
  const barEl = progressEl.querySelector('.progress-bar');
  const textEl = progressEl.querySelector('.progress-text');
  
  progressEl.classList.add('active');
  textEl.textContent = 'กำลังเตรียมรูปภาพ...';
  barEl.style.setProperty('--progress', '10%');

  try {
    const base64Data = await fileToBase64(file);
    const mimeType = file.type || 'image/jpeg';
    
    // Set pending image
    pendingImageData = base64Data;
    pendingImageMime = mimeType;
    pendingImageName = file.name || 'image.jpg';
    
    const previewContainer = document.getElementById('image-preview-container');
    const previewImg = document.getElementById('image-preview');
    previewImg.src = `data:${mimeType};base64,${base64Data}`;
    previewContainer.style.display = 'block';

    textEl.textContent = 'Gemini 2.5 AI กำลังวิเคราะห์สลิป...';
    barEl.style.setProperty('--progress', '40%');

    // Call Vercel serverless function — API key lives in Vercel env vars, never in browser
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
      if (data.description) {
        document.getElementById('input-description').value = data.description;
      }
      showToast('✅ สแกนสำเร็จโดย Gemini 2.5 Flash');
    } else {
      showToast('⚠️ AI ไม่พบยอดเงินในสลิปนี้', 'error');
    }

    setTransactionType('expense');
    barEl.style.setProperty('--progress', '100%');
    
  } catch (err) {
    console.error('Gemini scan error:', err);
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
    reader.onerror = error => reject(error);
  });
}

// ========================
// Init
// ========================
function init() {
  updateCurrentDate();
  populateCategorySelect('income');
  populateFilterCategory();

  // Navigation
  document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
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

  // Buttons
  document.getElementById('btn-open-modal').addEventListener('click', openAddModal);
  document.getElementById('btn-sync').addEventListener('click', loadTransactions);

  // Type toggle
  document.getElementById('type-income').addEventListener('click',  () => setTransactionType('income'));
  document.getElementById('type-expense').addEventListener('click', () => setTransactionType('expense'));

  // Modal close
  document.getElementById('modal-close').addEventListener('click', () => closeModal('modal-overlay'));
  document.getElementById('modal-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal('modal-overlay'); });

  // Form submit
  document.getElementById('transaction-form').addEventListener('submit', handleFormSubmit);

  // Delete
  document.getElementById('delete-confirm').addEventListener('click', async () => {
    if (!pendingDeleteId) return;
    
    // Optimistic Delete
    const originalTx = [...transactions];
    transactions = transactions.filter(t => t.id !== pendingDeleteId);
    renderAll();
    saveLocalCache();
    closeModal('delete-overlay');
    showToast('🗑️ ลบรายการแล้ว (กำลังซิงค์...)');

    try {
      setSyncStatus('syncing');
      await apiFetch('delete', { id: pendingDeleteId });
      setSyncStatus('online');
    } catch (err) {
      showToast('❌ ลบไม่สำเร็จใน Cloud: ' + err.message, 'error');
      setSyncStatus('offline');
      // Rollback
      transactions = originalTx;
      renderAll();
      saveLocalCache();
    } finally {
      pendingDeleteId = null;
    }
  });
  document.getElementById('delete-cancel').addEventListener('click',   () => closeModal('delete-overlay'));
  document.getElementById('delete-cancel-x').addEventListener('click', () => closeModal('delete-overlay'));
  document.getElementById('delete-overlay').addEventListener('click',  e => { if (e.target === e.currentTarget) closeModal('delete-overlay'); });

  // Clear all
  document.getElementById('btn-clear-all').addEventListener('click', async () => {
    if (transactions.length === 0) { showToast('ไม่มีข้อมูลให้ล้าง', 'error'); return; }
    if (!confirm('ต้องการล้างข้อมูลทั้งหมดใน Google Sheets หรือไม่?')) return;
    try {
      showLoading('กำลังล้างข้อมูล...');
      await apiFetch('clearAll');
      transactions = [];
      saveLocalCache();
      renderAll();
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
    const savedKey = localStorage.getItem('mf_gemini_key') || '';
    document.getElementById('input-gemini-key').value = savedKey ? '••••••••' : '';
    openModal('settings-modal-overlay');
  });
  document.getElementById('settings-modal-close').addEventListener('click', () => closeModal('settings-modal-overlay'));
  document.getElementById('settings-modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal('settings-modal-overlay');
  });
  document.getElementById('btn-save-settings').addEventListener('click', () => {
    const day = parseInt(document.getElementById('input-cutoff-day').value);
    if (day >= 1 && day <= 31) {
      cutoffDay = day;
      localStorage.setItem('mf_cutoff_day', cutoffDay);
      // Save Gemini key only if user typed a new one (not the masked placeholder)
      const keyInput = document.getElementById('input-gemini-key').value.trim();
      if (keyInput && !keyInput.startsWith('•')) {
        localStorage.setItem('mf_gemini_key', keyInput);
      }
      closeModal('settings-modal-overlay');
      renderAll();
      apiFetch('saveSetting', { key: 'cutoff_day', value: cutoffDay })
        .then(() => showToast('บันทึกตั้งค่าแล้ว (ซิงค์แล้ว)'))
        .catch(() => showToast('บันทึกตั้งค่าในเครื่องแล้ว (ซิงค์ไม่ได้)', 'error'));
    } else {
      showToast('กรุณากรอกวันที่ระหว่าง 1-31', 'error');
    }
  });

  // Slip Scan
  document.getElementById('btn-scan').addEventListener('click', () => document.getElementById('input-slip').click());
  document.getElementById('input-slip').addEventListener('change', handleSlipScan);


  // Initial load — always try to load since we have a default URL
  setView('dashboard');
  loadTransactions();
}

init();
