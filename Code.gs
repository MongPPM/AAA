// ============================================================
//  MoneyFlow — Google Apps Script Backend
//  วางโค้ดนี้ใน Google Apps Script แล้ว Deploy เป็น Web App
// ============================================================

// ---- Web App Interface ----
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

function addTransaction(tx) {
  const sheet = getSheet();
  tx.createdAt = tx.createdAt || new Date().toISOString();
  sheet.appendRow([
    tx.id, tx.type, tx.amount, tx.description,
    tx.category, tx.date, tx.createdAt, tx.imageUrl || ''
  ]);
  return tx;
}

function updateTransaction(tx) {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(tx.id)) {
      sheet.getRange(i + 1, 1, 1, HEADERS.length).setValues([[
        tx.id, tx.type, tx.amount, tx.description,
        tx.category, tx.date, tx.createdAt || data[i][6], tx.imageUrl !== undefined ? tx.imageUrl : (data[i][7] || '')
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
