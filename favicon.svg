export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const body = req.body || {}
  const name = body.name || 'Не указано'
  const phone = body.phone || 'Не указано'
  const message = body.message || 'Без сообщения'

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (token && chatId) {
    const text = `Новая заявка с сайта ALIEVA LAW\n\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text })
      })
    } catch (error) {
      return res.status(200).json({ ok: true, telegram: false })
    }
  }

  return res.status(200).json({ ok: true })
}
