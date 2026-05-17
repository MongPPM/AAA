export const APP_VERSION = '1.0.0';

// Changelog — บันทึกการเปลี่ยนแปลงทุก version
// รูปแบบ: MAJOR.MINOR.PATCH
//   PATCH (1.0.x) — แก้ bug, ปรับ UI เล็กน้อย
//   MAJOR (x.0.0) — อัปเดตระบบใหญ่

export const CHANGELOG = [
  {
    version: '1.0.0',
    date: '2026-05-17',
    changes: [
      'ย้ายจาก Google Sheets ไปใช้ Firebase Firestore',
      'เพิ่ม Google Sign-in (ข้อมูลแยกต่อ user)',
      'UI ใหม่ทั้งหมด — light theme, clean layout',
      'สแกนสลิปด้วย Gemini 2.5 Flash AI',
      'จำกัดสแกนฟรี 10 ครั้ง/เดือน',
      'ระบบ Pro plan (พร้อม Omise payment)',
      'แนวโน้มรายวันตามรอบบิลที่ตั้งไว้',
    ],
  },
];
