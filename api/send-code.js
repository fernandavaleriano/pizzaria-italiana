module.exports = async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { phone } = req.body;

    const twilio = require('twilio');
    const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    );

    try {
        await client.verify.v2
            .services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({ to: phone, channel: 'sms' });
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}