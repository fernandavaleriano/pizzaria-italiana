const twilio = require('twilio');

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { phone, code } = req.body;
    const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    );

    try {
        const result = await client.verify.v2
            .services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks.create({ to: phone, code });
        
        if (result.status === 'approved') {
            res.status(200).json({ success: true });
        } else {
            res.status(400).json({ error: 'Código incorreto' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}