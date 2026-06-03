export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name = "", phone = "", message = "" } = request.body || {};
    if (!name || !phone) {
      return response.status(400).json({ error: "Name and phone are required" });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (token && chatId) {
      const text = [
        "Новая заявка с сайта ALIEVA LAW",
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        message ? `Сообщение: ${message}` : ""
      ].filter(Boolean).join("\n");

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text })
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    return response.status(500).json({ error: "Server error" });
  }
}
