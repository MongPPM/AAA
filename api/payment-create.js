// Omise charge creation endpoint
// ต้องตั้งค่า environment variables ใน Vercel:
//   OMISE_SECRET_KEY  — จาก https://dashboard.omise.co → Keys
//   FIREBASE_SERVICE_ACCOUNT — JSON string ของ service account key จาก Firebase Console

import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getAdminDb() {
  if (!getApps().length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
    initializeApp({ credential: cert(serviceAccount) });
  }
  return getFirestore();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const omiseSecretKey = process.env.OMISE_SECRET_KEY;
  if (!omiseSecretKey) {
    return res.status(500).json({ error: 'OMISE_SECRET_KEY ยังไม่ได้ตั้งค่าใน Vercel Environment Variables' });
  }
  if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
    return res.status(500).json({ error: 'FIREBASE_SERVICE_ACCOUNT ยังไม่ได้ตั้งค่าใน Vercel Environment Variables' });
  }

  const { token, uid, email } = req.body;
  if (!token || !uid) return res.status(400).json({ error: 'ข้อมูลไม่ครบ (token, uid)' });

  try {
    // Create Omise charge via REST API (no npm SDK needed)
    const auth = Buffer.from(omiseSecretKey + ':').toString('base64');
    const chargeRes = await fetch('https://api.omise.co/charges', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        amount:      '7900', // 79 THB in satang (1 THB = 100 satang)
        currency:    'thb',
        card:        token,
        description: `MoneyFlow Pro - 1 เดือน (uid: ${uid})`,
      }),
    });

    const charge = await chargeRes.json();

    if (charge.status !== 'successful') {
      return res.status(400).json({
        error: charge.failure_message || charge.failure_code || 'ชำระเงินไม่สำเร็จ',
      });
    }

    // Update Firestore: set plan to 'pro' with expiry
    const proUntil = new Date();
    proUntil.setMonth(proUntil.getMonth() + 1);
    const proUntilISO = proUntil.toISOString();

    const db = getAdminDb();
    await db.doc(`users/${uid}/meta`).set(
      { plan: 'pro', pro_until: proUntilISO, last_charge_id: charge.id },
      { merge: true }
    );

    return res.json({ success: true, pro_until: proUntilISO, charge_id: charge.id });
  } catch (err) {
    console.error('payment-create error:', err);
    return res.status(500).json({ error: err.message });
  }
}
