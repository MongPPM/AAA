export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY ยังไม่ได้ตั้งค่าใน Vercel Environment Variables' });
  }

  const { base64Data, mimeType } = req.body;
  if (!base64Data) return res.status(400).json({ error: 'ไม่มีข้อมูลรูปภาพ' });

  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [
          { text: 'Extract transaction details from this Thai bank slip image. Return ONLY JSON: {"amount": 123.45, "description": "recipient name", "datetime": "YYYY-MM-DDTHH:mm"}. Rules: (1) amount = total transfer amount as number. (2) description = recipient name or merchant (short). (3) datetime = transaction date+time printed on slip in ISO 8601 local-time format (no timezone suffix). If year shown is Thai Buddhist Era (BE, e.g. 2568) subtract 543 to get CE (2025). If date/time not visible return null for datetime. If no amount found return {"amount": null, "description": "", "datetime": null}.' },
          { inline_data: { mime_type: mimeType || 'image/jpeg', data: base64Data } }
        ]}]
      })
    }
  );

  if (!geminiRes.ok) {
    const err = await geminiRes.json().catch(() => ({}));
    return res.status(geminiRes.status).json({ error: err.error?.message || `Gemini API Error ${geminiRes.status}` });
  }

  const result = await geminiRes.json();
  const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!aiText) return res.status(500).json({ error: 'AI ส่งข้อมูลกลับมาผิดรูปแบบ' });

  const jsonMatch = aiText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return res.status(500).json({ error: 'AI ไม่พบ JSON ในคำตอบ' });

  return res.json(JSON.parse(jsonMatch[0]));
}
