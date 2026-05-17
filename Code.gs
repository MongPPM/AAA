// ============================================================
//  MoneyFlow — Google Apps Script Backend
//  วางโค้ดนี้ใน Google Apps Script แล้ว Deploy เป็น Web App
// ============================================================

// Gemini API key — set via File > Project Properties > Script Properties
// Key name: GEMINI_API_KEY  (more secure than hardcoding)
function getGeminiKey() {
  return PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY') || '';
}

// ---- Web App Interface & API ----
function doGet(e) {
  // If no action parameter, serve the HTML UI
  if (!e.parameter.action) {
    return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('MoneyFlow — รายรับรายจ่าย')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  
  // If there is an action (API call), return transaction data
  try {
    const transactions = getAllTransactions();
    return jsonResponse({ success: true, data: transactions });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

const SHEET_NAME = 'Transactions';
const HEADERS = ['id', 'type', 'amount', 'description', 'category', 'date', 'createdAt', 'imageUrl'];



// ---- POST: add / update / delete / clearAll ----
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const { action, transaction } = body;
    let result;

    if (action === 'add') {
      result = addTransaction(transaction);
    } else if (action === 'update') {
      result = updateTransaction(transaction);
    } else if (action === 'delete') {
      result = deleteTransaction(transaction.id);
    } else if (action === 'clearAll') {
      result = clearAllTransactions();
    } else if (action === 'uploadImage') {
      result = uploadImage(body.base64Data, body.filename, body.mimeType);
    } else if (action === 'scanSlip') {
      result = scanSlipWithGemini(body.base64Data, body.mimeType);
    } else if (action === 'saveSetting') {
      result = saveSetting(body.key, body.value);
    } else if (action === 'getSettings') {
      result = getSettings();
    } else {
      throw new Error('Unknown action: ' + action);
    }

    return jsonResponse({ success: true, data: result });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

// ---- Helpers ----
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    // Style header row
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setBackground('#1a73e8');
    headerRange.setFontColor('#ffffff');
    headerRange.setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getAllTransactions() {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  const headers = data[0];
  return data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i]; });
    obj.amount = parseFloat(obj.amount) || 0;
    return obj;
  });
}

const VALID_TYPES = ['income', 'expense'];
const VALID_CATEGORIES = [
  'salary','freelance','investment','gift','other_in',
  'food','transport','shopping','utilities','health',
  'entertainment','education','rent','other_ex'
];

function validateTransaction(tx) {
  if (!tx || typeof tx !== 'object') throw new Error('ข้อมูลไม่ถูกต้อง');
  const amount = parseFloat(tx.amount);
  if (!amount || amount <= 0) throw new Error('จำนวนเงินต้องมากกว่า 0');
  if (!tx.description || String(tx.description).trim() === '') throw new Error('กรุณาระบุรายละเอียด');
  if (!VALID_TYPES.includes(tx.type)) throw new Error('ประเภทรายการไม่ถูกต้อง');
  if (!VALID_CATEGORIES.includes(tx.category)) throw new Error('หมวดหมู่ไม่ถูกต้อง');
  if (!tx.date) throw new Error('กรุณาระบุวันที่');
}

function addTransaction(tx) {
  validateTransaction(tx);
  const sheet = getSheet();
  tx.createdAt = tx.createdAt || new Date().toISOString();
  sheet.appendRow([
    tx.id, tx.type, parseFloat(tx.amount), String(tx.description).trim(),
    tx.category, tx.date, tx.createdAt, tx.imageUrl || ''
  ]);
  return tx;
}

function updateTransaction(tx) {
  validateTransaction(tx);
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(tx.id)) {
      sheet.getRange(i + 1, 1, 1, HEADERS.length).setValues([[
        tx.id, tx.type, parseFloat(tx.amount), String(tx.description).trim(),
        tx.category, tx.date, tx.createdAt || data[i][6],
        (tx.imageUrl != null && tx.imageUrl !== '') ? tx.imageUrl : (data[i][7] || '')
      ]]);
      return tx;
    }
  }
  throw new Error('Transaction not found: ' + tx.id);
}

function deleteTransaction(id) {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.deleteRow(i + 1);
      return { id };
    }
  }
  throw new Error('Transaction not found: ' + id);
}

function clearAllTransactions() {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.deleteRows(2, lastRow - 1);
  }
  return { cleared: true };
}

// ---- Gemini Slip Scan (server-side — API key never exposed to browser) ----
function scanSlipWithGemini(base64Data, mimeType) {
  const apiKey = getGeminiKey();
  if (!apiKey) throw new Error('GEMINI_API_KEY ยังไม่ได้ตั้งค่าใน Script Properties');

  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + apiKey;
  const payload = {
    contents: [{
      parts: [
        { text: 'Extract transaction details from this Thai bank slip image. Return ONLY JSON format: {"amount": 123.45, "description": "Name of recipient"}. If amount not found, return {"amount": null, "description": ""}. Focus on the total transfer amount.' },
        { inline_data: { mime_type: mimeType || 'image/jpeg', data: base64Data } }
      ]
    }]
  };

  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const code = response.getResponseCode();
  if (code !== 200) {
    const err = JSON.parse(response.getContentText());
    throw new Error(err.error?.message || 'Gemini API Error ' + code);
  }

  const result = JSON.parse(response.getContentText());
  const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!aiText) throw new Error('AI ส่งข้อมูลกลับมาผิดรูปแบบ');

  const jsonMatch = aiText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('AI ไม่พบ JSON ในคำตอบ');

  return JSON.parse(jsonMatch[0]);
}

// ---- Settings (cutoff day) synced via Script Properties ----
function saveSetting(key, value) {
  if (!key || typeof key !== 'string') throw new Error('Invalid setting key');
  PropertiesService.getUserProperties().setProperty('mf_setting_' + key, String(value));
  return { key, value };
}

function getSettings() {
  const props = PropertiesService.getUserProperties().getProperties();
  const settings = {};
  Object.keys(props).forEach(k => {
    if (k.startsWith('mf_setting_')) {
      settings[k.replace('mf_setting_', '')] = props[k];
    }
  });
  return settings;
}

function uploadImage(base64Data, filename, mimeType) {
  try {
    const folderName = 'MoneyFlow_Images';
    let folder;
    const folders = DriveApp.getFoldersByName(folderName);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
      folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    }
    
    const blob = Utilities.newBlob(Utilities.base64Decode(base64Data), mimeType || 'image/jpeg', filename || ('img_' + new Date().getTime() + '.jpg'));
    const file = folder.createFile(blob);
    
    return { url: 'https://drive.google.com/uc?export=view&id=' + file.getId() };
  } catch (e) {
    throw new Error('Upload failed: ' + e.message);
  }
}
