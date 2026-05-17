// Omise webhook endpoint — รับ event จาก Omise และอัปเดต Firestore อัตโนมัติ
// ตั้งค่า webhook URL ใน Omise Dashboard → Webhooks: https://your-app.vercel.app/api/payment-webhook
// ต้องตั้งค่า environment variables ใน Vercel:
//   OMISE_WEBHOOK_SECRET     — จาก Omise Dashboard → Webhooks (ถ้ามี)
//   FIREBASE_SERVICE_ACCOUNT — JSON string ของ service account key

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

  try {
    const event = req.body;

    // Handle charge.complete event (successful charge)
    if (event.key === 'charge.complete' && event.data?.status === 'successful') {
      const charge      = event.data;
      const description = charge.description || '';

      // Extract uid from description (format: "MoneyFlow Pro - 1 เดือน (uid: xxx)")
      const uidMatch = description.match(/uid:\s*([^\)]+)\)/);
      if (!uidMatch) {
        console.warn('webhook: cannot extract uid from charge description:', description);
        return res.json({ received: true });
      }

      const uid      = uidMatch[1].trim();
      const proUntil = new Date();
      proUntil.setMonth(proUntil.getMonth() + 1);

      const db = getAdminDb();
      await db.doc(`users/${uid}/meta`).set(
        { plan: 'pro', pro_until: proUntil.toISOString(), last_charge_id: charge.id },
        { merge: true }
      );

      console.log(`webhook: upgraded uid=${uid} to Pro until ${proUntil.toISOString()}`);
    }

    // Handle charge.complete with failed status — downgrade if expired
    if (event.key === 'charge.complete' && event.data?.status === 'failed') {
      console.log('webhook: charge failed, no action needed');
    }

    return res.json({ received: true });
  } catch (err) {
    console.error('payment-webhook error:', err);
    // Always return 200 to Omise so they don't retry
    return res.status(200).json({ received: true, error: err.message });
  }
}
