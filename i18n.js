// i18n.js — Thai / English translations

const STRINGS = {
  th: {
    locale: 'th-TH',
    // Login
    'login.subtitle': 'บันทึกรายรับ-รายจ่ายส่วนตัว\nข้อมูลของคุณ เห็นแค่คุณคนเดียว',
    'login.google':   'เข้าสู่ระบบด้วย Google',
    'login.note':     'ข้อมูลทั้งหมดเก็บในบัญชี Google ของคุณ\nไม่มีค่าใช้จ่าย · ปลอดภัย · ใช้ได้ทุกอุปกรณ์',
    // Sync
    'sync.online':   'ออนไลน์',
    'sync.offline':  'ออฟไลน์',
    'sync.syncing':  'กำลังซิงค์...',
    // Nav
    'nav.dashboard':    'ภาพรวม',
    'nav.transactions': 'รายการทั้งหมด',
    'nav.analytics':    'หมวดหมู่',
    'nav.trends':       'แนวโน้ม',
    // Page titles
    'page.dashboard':    'ภาพรวม',
    'page.transactions': 'รายการทั้งหมด',
    'page.analytics':    'วิเคราะห์ตามหมวดหมู่',
    'page.trends':       'แนวโน้มรายวัน',
    // Sidebar
    'sidebar.upgrade':   '⭐ อัปเกรดเป็น Pro',
    'sidebar.signout':   'ออกจากระบบ',
    // Top bar
    'topbar.add': '+ เพิ่มรายการ',
    'topbar.add.text': 'เพิ่มรายการ',
    // Dashboard
    'dash.balance':          'ยอดคงเหลือ',
    'dash.income':           'รายรับ',
    'dash.expense':          'รายจ่าย',
    'dash.expenseRatio':     'สัดส่วนรายจ่าย',
    'dash.recent':           'รายการล่าสุด',
    'dash.seeAll':           'ดูทั้งหมด →',
    'dash.empty':            'ยังไม่มีรายการ\nกด "เพิ่มรายการ" เพื่อเริ่มต้น',
    'dash.balance.positive': '↑ คุณมีเงินเหลือ',
    'dash.balance.negative': '↓ รายจ่ายเกินรายรับ',
    'dash.balance.zero':     'รายรับเท่ากับรายจ่าย',
    'dash.ratio.income':     'รายรับ',
    'dash.ratio.expense':    'รายจ่าย',
    // Transactions view
    'tx.title':          'รายการทั้งหมด',
    'tx.viewList':       '☰ รายการ',
    'tx.viewSplit':      '⊞ แยก',
    'tx.rangeAll':       'ทั้งหมด',
    'tx.rangeCycle':     'รอบบิล',
    'tx.filterAllTypes': 'ทุกประเภท',
    'tx.filterIncome':   'รายรับ',
    'tx.filterExpense':  'รายจ่าย',
    'tx.filterAllCats':  'ทุกหมวดหมู่',
    'tx.noResults':      'ไม่มีรายการที่ตรงกับเงื่อนไข',
    'tx.noItems':        'ไม่มีรายการ',
    // Scale / Split
    'tx.scale.income':   'รายรับ',
    'tx.scale.expense':  'รายจ่าย',
    'tx.scale.noItems':  'ยังไม่มีรายการ',
    'tx.scale.equal':    'เท่ากันพอดี',
    'tx.split.income':        '💰 รายรับ',
    'tx.split.expense':       '💸 รายจ่าย',
    'tx.split.emptyIncome':   'ยังไม่มีรายรับ',
    'tx.split.emptyExpense':  'ยังไม่มีรายจ่าย',
    // Trends
    'trends.titleFull':    'แนวโน้มรายวัน ({start} – {end})',
    'trends.freeNotice':   '📊 Free plan ดูย้อนหลังได้สูงสุด 30 วัน — ',
    'trends.upgradeBtn':   'อัปเกรดเป็น Pro ↗',
    'trends.chart.income':  'รายรับ',
    'trends.chart.expense': 'รายจ่าย',
    // Analytics
    'analytics.expenseTitle': 'รายจ่ายแยกตามหมวดหมู่',
    'analytics.incomeTitle':  'รายรับแยกตามหมวดหมู่',
    'analytics.noData':       'ยังไม่มีข้อมูล',
    // Add/Edit Modal
    'modal.addTitle':         'เพิ่มรายการใหม่',
    'modal.editTitle':        'แก้ไขรายการ',
    'modal.scan':             '📸 สแกนสลิป / แนบรูปภาพ',
    'modal.prepareImg':       'กำลังเตรียมรูปภาพ...',
    'modal.analyzing':        'กำลังวิเคราะห์...',
    'modal.scanning':         'กำลังสแกน...',
    'modal.type.income':      '↑ รายรับ',
    'modal.type.expense':     '↓ รายจ่าย',
    'modal.amountLabel':      'จำนวนเงิน (฿)',
    'modal.amountPlaceholder':'0.00',
    'modal.descLabel':        'รายละเอียด',
    'modal.descPlaceholder':  'เช่น ค่าอาหารกลางวัน',
    'modal.catLabel':         'หมวดหมู่',
    'modal.dateLabel':        'วันและเวลา',
    'modal.continueLabel':    'บันทึกและเพิ่มรายการต่อไป',
    'modal.addBtn':           'เพิ่มรายการ',
    'modal.editBtn':          'บันทึกการแก้ไข',
    // Delete Modal
    'delete.title':   'ยืนยันการลบ',
    'delete.confirm': 'คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?',
    'delete.cancel':  'ยกเลิก',
    'delete.delete':  'ลบ',
    // Settings Modal
    'settings.title':       'ตั้งค่าระบบ',
    'settings.cutoffLabel': 'วันที่ตัดรอบบิลรายเดือน (1–31)',
    'settings.cutoffHelp':  'ตัวอย่าง: ตั้งเป็นวันที่ 25 → รอบนับตั้งแต่ 25 ของเดือนก่อน ถึง 24 ของเดือนนี้',
    'settings.langLabel':   'ภาษา / Language',
    'settings.save':        'บันทึกการตั้งค่า',
    'settings.changelog':   '🆕 ประวัติอัปเดต',
    'settings.clearData':   '🗑️ ล้างข้อมูลทั้งหมด',
    'settings.signout':     '🚪 ออกจากระบบ',
    // Upgrade Modal
    'upgrade.title':       '⭐ อัปเกรดเป็น Pro',
    'upgrade.free':        'Free',
    'upgrade.freePrice':   'ฟรี',
    'upgrade.recommended': 'แนะนำ',
    'upgrade.pro':         'Pro',
    'upgrade.proPrice':    '79 ฿/เดือน',
    'upgrade.pay':         'ชำระเงิน 79 ฿/เดือน',
    'upgrade.note':        'ยกเลิกได้ทุกเมื่อ · ชำระผ่านบัตรเครดิต / PromptPay',
    // Bottom Nav
    'bnav.dashboard':    'ภาพรวม',
    'bnav.transactions': 'รายการ',
    'bnav.analytics':    'หมวดหมู่',
    'bnav.trends':       'แนวโน้ม',
    // Changelog
    'changelog.title': 'ประวัติอัปเดต',
    'cl.new':     'ใหม่',
    'cl.fix':     'แก้ไข',
    'cl.improve': 'ปรับปรุง',
    // Loading
    'loading.default':  'กำลังโหลด...',
    'loading.signingIn':'กำลังเข้าสู่ระบบ...',
    'loading.payment':  'กำลังประมวลผลการชำระเงิน...',
    'loading.deleting': 'กำลังลบ...',
    'loading.clearing': 'กำลังล้างข้อมูล...',
    // Toasts
    'toast.signInError':   'เข้าสู่ระบบไม่สำเร็จ: ',
    'toast.saved':         '✅ บันทึกแล้ว',
    'toast.editSaved':     '✅ บันทึกการแก้ไขแล้ว',
    'toast.deleted':       '🗑️ ลบรายการแล้ว',
    'toast.deleteError':   '❌ ลบไม่สำเร็จ: ',
    'toast.fieldRequired': 'กรุณากรอกข้อมูลให้ครบถ้วน',
    'toast.scanSuccess':   '✅ สแกนสำเร็จโดย Gemini 2.5 Flash',
    'toast.scanNoAmount':  '⚠️ AI ไม่พบยอดเงินในสลิปนี้',
    'toast.scanError':     '⚠️ สแกนไม่ได้: {msg} — รูปยังแนบอยู่',
    'toast.paymentSoon':   'ระบบชำระเงินกำลังเปิดใช้งาน เร็วๆ นี้',
    'toast.paymentSuccess':'🎉 อัปเกรดเป็น Pro สำเร็จ!',
    'toast.paymentFail':   '❌ ชำระเงินไม่สำเร็จ: ',
    'toast.settingsSaved': 'บันทึกตั้งค่าแล้ว ✅',
    'toast.settingsLocal': 'บันทึกในเครื่องแล้ว (ซิงค์ไม่ได้)',
    'toast.clearAll':      '🗑️ ล้างข้อมูลทั้งหมดแล้ว',
    'toast.clearNone':     'ไม่มีข้อมูลให้ล้าง',
    'toast.langChanged':   '🌐 เปลี่ยนภาษาแล้ว',
    'toast.cutoffError':   'กรุณากรอกวันที่ระหว่าง 1-31',
    // Confirm dialogs
    'confirm.clearAll': 'ต้องการล้างข้อมูลทั้งหมดหรือไม่?',
    // Scan info
    'scan.pro':           'Pro — สแกนสลิปได้ไม่จำกัด ⭐',
    'scan.free.left':     'Free — เหลือ {left}/{total} ครั้งวันนี้',
    'scan.free.exhausted':'หมดแล้ววันนี้ — อัปเกรด Pro เพื่อสแกนต่อ',
    'scan.limit.upgrade': 'ใช้ครบ {total} ครั้งสแกนฟรีวันนี้แล้ว\nอัปเกรดเป็น Pro เพื่อสแกนไม่จำกัด',
    // Slip tooltip
    'slip.viewSlip': 'ดูสลิป ↗',
    'slip.viewBtn':  'ดูสลิป',
    // Categories
    'cat.salary':      'เงินเดือน',
    'cat.freelance':   'ฟรีแลนซ์',
    'cat.investment':  'การลงทุน',
    'cat.gift':        'ของขวัญ/โบนัส',
    'cat.other_in':    'รายรับอื่นๆ',
    'cat.food':        'อาหาร',
    'cat.transport':   'เดินทาง',
    'cat.shopping':    'ช้อปปิ้ง',
    'cat.utilities':   'ค่าสาธารณูปโภค',
    'cat.health':      'สุขภาพ',
    'cat.entertainment':'บันเทิง',
    'cat.education':   'การศึกษา',
    'cat.rent':        'ค่าเช่า/บ้าน',
    'cat.other_ex':    'รายจ่ายอื่นๆ',
    // Dev
    'dev.switchFree': '🔧 Dev: Pro → สลับ Free',
    'dev.switchPro':  '🔧 Dev: Free → สลับ Pro',
    'dev.toasted':    '🔧 Dev: สลับเป็น ',
  },

  en: {
    locale: 'en-US',
    // Login
    'login.subtitle': 'Track your personal income & expenses.\nYour data, visible only to you.',
    'login.google':   'Sign in with Google',
    'login.note':     'All data stored in your Google account.\nFree · Secure · All devices',
    // Sync
    'sync.online':   'Online',
    'sync.offline':  'Offline',
    'sync.syncing':  'Syncing...',
    // Nav
    'nav.dashboard':    'Overview',
    'nav.transactions': 'Transactions',
    'nav.analytics':    'Categories',
    'nav.trends':       'Trends',
    // Page titles
    'page.dashboard':    'Overview',
    'page.transactions': 'All Transactions',
    'page.analytics':    'Category Analysis',
    'page.trends':       'Daily Trends',
    // Sidebar
    'sidebar.upgrade':   '⭐ Upgrade to Pro',
    'sidebar.signout':   'Sign Out',
    // Top bar
    'topbar.add': '+ Add',
    'topbar.add.text': 'Add',
    // Dashboard
    'dash.balance':          'Balance',
    'dash.income':           'Income',
    'dash.expense':          'Expenses',
    'dash.expenseRatio':     'Expense Ratio',
    'dash.recent':           'Recent Transactions',
    'dash.seeAll':           'See all →',
    'dash.empty':            'No transactions yet.\nPress "Add" to get started.',
    'dash.balance.positive': '↑ You have money left over',
    'dash.balance.negative': '↓ Expenses exceed income',
    'dash.balance.zero':     'Income equals expenses',
    'dash.ratio.income':     'Income',
    'dash.ratio.expense':    'Expense',
    // Transactions view
    'tx.title':          'All Transactions',
    'tx.viewList':       '☰ List',
    'tx.viewSplit':      '⊞ Split',
    'tx.rangeAll':       'All',
    'tx.rangeCycle':     'Cycle',
    'tx.filterAllTypes': 'All Types',
    'tx.filterIncome':   'Income',
    'tx.filterExpense':  'Expense',
    'tx.filterAllCats':  'All Categories',
    'tx.noResults':      'No matching transactions',
    'tx.noItems':        'No transactions',
    // Scale / Split
    'tx.scale.income':  'Income',
    'tx.scale.expense': 'Expenses',
    'tx.scale.noItems': 'No transactions yet',
    'tx.scale.equal':   'Perfectly balanced',
    'tx.split.income':       '💰 Income',
    'tx.split.expense':      '💸 Expenses',
    'tx.split.emptyIncome':  'No income yet',
    'tx.split.emptyExpense': 'No expenses yet',
    // Trends
    'trends.titleFull':    'Daily Trend ({start} – {end})',
    'trends.freeNotice':   '📊 Free plan: view up to 30 days — ',
    'trends.upgradeBtn':   'Upgrade to Pro ↗',
    'trends.chart.income':  'Income',
    'trends.chart.expense': 'Expenses',
    // Analytics
    'analytics.expenseTitle': 'Expenses by Category',
    'analytics.incomeTitle':  'Income by Category',
    'analytics.noData':       'No data yet',
    // Add/Edit Modal
    'modal.addTitle':          'Add New Transaction',
    'modal.editTitle':         'Edit Transaction',
    'modal.scan':              '📸 Scan Slip / Attach Image',
    'modal.prepareImg':        'Preparing image...',
    'modal.analyzing':         'Analyzing...',
    'modal.scanning':          'Scanning...',
    'modal.type.income':       '↑ Income',
    'modal.type.expense':      '↓ Expense',
    'modal.amountLabel':       'Amount (฿)',
    'modal.amountPlaceholder': '0.00',
    'modal.descLabel':         'Description',
    'modal.descPlaceholder':   'e.g. Lunch',
    'modal.catLabel':          'Category',
    'modal.dateLabel':         'Date & Time',
    'modal.continueLabel':     'Save and add another',
    'modal.addBtn':            'Add Transaction',
    'modal.editBtn':           'Save Changes',
    // Delete Modal
    'delete.title':   'Confirm Delete',
    'delete.confirm': 'Are you sure you want to delete this transaction?',
    'delete.cancel':  'Cancel',
    'delete.delete':  'Delete',
    // Settings Modal
    'settings.title':       'Settings',
    'settings.cutoffLabel': 'Monthly Billing Cutoff Day (1–31)',
    'settings.cutoffHelp':  'Example: Set to 25 → cycle runs from the 25th of last month to the 24th of this month',
    'settings.langLabel':   'Language / ภาษา',
    'settings.save':        'Save Settings',
    'settings.changelog':   '🆕 Update History',
    'settings.clearData':   '🗑️ Clear All Data',
    'settings.signout':     '🚪 Sign Out',
    // Upgrade Modal
    'upgrade.title':       '⭐ Upgrade to Pro',
    'upgrade.free':        'Free',
    'upgrade.freePrice':   'Free',
    'upgrade.recommended': 'Recommended',
    'upgrade.pro':         'Pro',
    'upgrade.proPrice':    '฿79/month',
    'upgrade.pay':         'Pay ฿79/month',
    'upgrade.note':        'Cancel anytime · Pay by credit card / PromptPay',
    // Bottom Nav
    'bnav.dashboard':    'Overview',
    'bnav.transactions': 'Transactions',
    'bnav.analytics':    'Categories',
    'bnav.trends':       'Trends',
    // Changelog
    'changelog.title': 'Update History',
    'cl.new':     'New',
    'cl.fix':     'Fix',
    'cl.improve': 'Improve',
    // Loading
    'loading.default':   'Loading...',
    'loading.signingIn': 'Signing in...',
    'loading.payment':   'Processing payment...',
    'loading.deleting':  'Deleting...',
    'loading.clearing':  'Clearing data...',
    // Toasts
    'toast.signInError':   'Sign-in failed: ',
    'toast.saved':         '✅ Saved',
    'toast.editSaved':     '✅ Changes saved',
    'toast.deleted':       '🗑️ Transaction deleted',
    'toast.deleteError':   '❌ Delete failed: ',
    'toast.fieldRequired': 'Please fill in all fields',
    'toast.scanSuccess':   '✅ Scanned by Gemini 2.5 Flash',
    'toast.scanNoAmount':  '⚠️ AI did not find an amount in this slip',
    'toast.scanError':     '⚠️ Scan failed: {msg} — image still attached',
    'toast.paymentSoon':   'Payment system coming soon',
    'toast.paymentSuccess':'🎉 Upgraded to Pro successfully!',
    'toast.paymentFail':   '❌ Payment failed: ',
    'toast.settingsSaved': 'Settings saved ✅',
    'toast.settingsLocal': 'Saved locally (sync failed)',
    'toast.clearAll':      '🗑️ All data cleared',
    'toast.clearNone':     'No data to clear',
    'toast.langChanged':   '🌐 Language changed',
    'toast.cutoffError':   'Please enter a day between 1 and 31',
    // Confirm dialogs
    'confirm.clearAll': 'Clear all transaction data?',
    // Scan info
    'scan.pro':           'Pro — Unlimited slip scans ⭐',
    'scan.free.left':     'Free — {left}/{total} scans remaining today',
    'scan.free.exhausted':'No scans left today — upgrade to Pro',
    'scan.limit.upgrade': 'Used all {total} free scans today.\nUpgrade to Pro for unlimited scanning.',
    // Slip
    'slip.viewSlip': 'View slip ↗',
    'slip.viewBtn':  'View slip',
    // Categories
    'cat.salary':       'Salary',
    'cat.freelance':    'Freelance',
    'cat.investment':   'Investment',
    'cat.gift':         'Gift/Bonus',
    'cat.other_in':     'Other Income',
    'cat.food':         'Food',
    'cat.transport':    'Transport',
    'cat.shopping':     'Shopping',
    'cat.utilities':    'Utilities',
    'cat.health':       'Health',
    'cat.entertainment':'Entertainment',
    'cat.education':    'Education',
    'cat.rent':         'Rent/Home',
    'cat.other_ex':     'Other Expense',
    // Dev
    'dev.switchFree': '🔧 Dev: Pro → Switch Free',
    'dev.switchPro':  '🔧 Dev: Free → Switch Pro',
    'dev.toasted':    '🔧 Dev: Switched to ',
  },
};

// ── Language detection & persistence ───────────────────────────────────────
let _lang = (() => {
  const saved = localStorage.getItem('mf_lang');
  if (saved === 'th' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('th') ? 'th' : 'en';
})();

export function getLanguage()  { return _lang; }

export function setLanguage(lang) {
  if (lang !== 'th' && lang !== 'en') return;
  _lang = lang;
  localStorage.setItem('mf_lang', lang);
}

/** Translate key, optionally substitute {var} placeholders */
export function t(key, vars) {
  let str = STRINGS[_lang]?.[key] ?? STRINGS.th[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replaceAll(`{${k}}`, v);
    }
  }
  return str;
}

/** Current locale string (e.g. 'th-TH' or 'en-US') */
export function dateLocale() { return t('locale'); }

/**
 * Apply translations to all [data-i18n] elements in the DOM.
 * - data-i18n="key"         → el.textContent
 * - data-i18n-html="key"    → el.innerHTML  (newlines → <br>)
 * - data-i18n-ph="key"      → el.placeholder
 */
export function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml).replace(/\n/g, '<br>');
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  // Keep language select in sync
  const langSel = document.getElementById('select-language');
  if (langSel) langSel.value = _lang;
}
