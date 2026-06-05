function clean(value) {
  return String(value || "").trim();
}

function normalizeSupabaseUrl(rawUrl) {
  return clean(rawUrl)
    .replace(/\/rest\/v1.*$/i, "")
    .replace(/\/+$/g, "");
}

function normalizeTableName(rawTable) {
  return clean(rawTable || "leads")
    .replace(/^\/+/g, "")
    .replace(/\/+$/g, "");
}

async function sendTelegram({ name, phone, format, message, page }) {
  const token = clean(process.env.TELEGRAM_BOT_TOKEN);
  const chatId = clean(process.env.TELEGRAM_CHAT_ID);

  if (!token || !chatId) {
    return { sent: false, error: "TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is empty" };
  }

  const text = [
    "Новая заявка с сайта «Адвокат Алиева»",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    format ? `Формат: ${format}` : "",
    message ? `Сообщение: ${message}` : "",
    page ? `Страница: ${page}` : ""
  ].filter(Boolean).join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text
    })
  });

  if (!telegramResponse.ok) {
    return { sent: false, error: await telegramResponse.text() };
  }

  return { sent: true, error: "" };
}

async function saveSupabase({ name, phone, format, message, page, userAgent }) {
  const supabaseUrl = normalizeSupabaseUrl(process.env.SUPABASE_URL);
  const supabaseServiceKey = clean(process.env.SUPABASE_SERVICE_ROLE_KEY);
  const supabaseTable = normalizeTableName(process.env.SUPABASE_TABLE || "leads");

  if (!supabaseUrl || !supabaseServiceKey) {
    return { saved: false, error: "SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is empty" };
  }

  const lead = {
    name,
    phone,
    format,
    message,
    page,
    source: "website",
    user_agent: userAgent || "",
    status: "new"
  };

  const endpoint = `${supabaseUrl}/rest/v1/${supabaseTable}`;

  const supabaseResponse = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseServiceKey,
      "Authorization": `Bearer ${supabaseServiceKey}`,
      "Prefer": "return=minimal"
    },
    body: JSON.stringify(lead)
  });

  if (!supabaseResponse.ok) {
    return { saved: false, error: await supabaseResponse.text() };
  }

  return { saved: true, error: "" };
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = request.body || {};

    const name = clean(body.name);
    const phone = clean(body.phone);
    const format = clean(body.format);
    const message = clean(body.message);
    const page = clean(body.page || request.headers.referer);

    if (!name || !phone) {
      return response.status(400).json({ error: "Name and phone are required" });
    }

    // Главное: Telegram отправляется первым и не зависит от Supabase.
    let telegram = { sent: false, error: "" };
    try {
      telegram = await sendTelegram({ name, phone, format, message, page });
    } catch (error) {
      telegram = { sent: false, error: error.message };
    }

    let supabase = { saved: false, error: "" };
    try {
      supabase = await saveSupabase({
        name,
        phone,
        format,
        message,
        page,
        userAgent: request.headers["user-agent"] || ""
      });
    } catch (error) {
      supabase = { saved: false, error: error.message };
    }

    return response.status(200).json({
      ok: true,
      telegramSent: telegram.sent,
      telegramError: telegram.error || undefined,
      supabaseSaved: supabase.saved,
      supabaseError: supabase.error || undefined
    });
  } catch (error) {
    return response.status(500).json({
      error: "Server error",
      details: error.message
    });
  }
}
