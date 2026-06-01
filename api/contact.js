export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const { name = '', phone = '', service = '', details = '' } = req.body || {}

    if (!name || !phone) {
      return res.status(400).json({ ok: false, error: 'Name and phone are required' })
    }

    const text = [
      'Новая заявка с сайта ALIEVA LAW',
      '',
      `Имя: ${name}`,
      `Контакт: ${phone}`,
      `Услуга: ${service}`,
      `Описание: ${details || 'не указано'}`,
      '',
      `Дата: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`,
    ].join('\n')

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (token && chatId) {
      const tgResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      })

      if (!tgResponse.ok) {
        return res.status(502).json({ ok: false, error: 'Telegram delivery failed' })
      }
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Server error' })
  }
}
