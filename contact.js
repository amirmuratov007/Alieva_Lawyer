function normalizeSupabaseUrl(rawUrl) {
  if (!rawUrl) return "";
  return String(rawUrl)
    .trim()
    .replace(/\/rest\/v1\/?$/i, "")
    .replace(/\/+$/g, "");
}

function normalizeTableName(rawTable) {
  return String(rawTable || "leads")
    .trim()
    .replace(/^\/+/g, "")
    .replace(/\/+$/g, "");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = request.body || {};
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const format = String(body.format || "").trim();
    const message = String(body.message || "").trim();
    const page = String(body.page || request.headers.referer || "").trim();

    if (!name || !phone) {
      return response.status(400).json({ error: "Name and phone are required" });
    }

    const lead = {
      name,
      phone,
      format,
      message,
      page,
      source: "website",
      user_agent: request.headers["user-agent"] || "",
      status: "new"
    };

    const supabaseUrl = normalizeSupabaseUrl(process.env.SUPABASE_URL);
    const supabaseServiceKey = String(process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
    const supabaseTable = normalizeTableName(process.env.SUPABASE_TABLE || "leads");

    let supabaseSaved = false;
    let supabaseError = "";

    if (supabaseUrl && supabaseServiceKey) {
      const endpoint = `${supabaseUrl}/rest/v1/${encodeURIComponent(supabaseTable)}`;

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

      if (supabaseResponse.ok) {
        supabaseSaved = true;
      } else {
        supabaseError = await supabaseResponse.text();
      }
    }

    const token = String(process.env.TELEGRAM_BOT_TOKEN || "").trim();
    const chatId = String(process.env.TELEGRAM_CHAT_ID || "").trim();

    let telegramSent = false;
    let telegramError = "";

    if (token && chatId) {
      const text = [
        "Новая заявка с сайта «Адвокат Алиева»",
        "",
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        format ? `Формат: ${format}` : "",
        message ? `Сообщение: ${message}` : "",
        page ? `Страница: ${page}` : "",
        "",
        supabaseSaved
          ? "Supabase: сохранено"
          : (supabaseError ? `Supabase: ошибка ${supabaseError}` : "Supabase: не настроен")
      ].filter(Boolean).join("\n");

      const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text
        })
      });

      if (telegramResponse.ok) {
        telegramSent = true;
      } else {
        telegramError = await telegramResponse.text();
      }
    }

    return response.status(200).json({
      ok: true,
      supabaseSaved,
      telegramSent,
      supabaseError: supabaseError || undefined,
      telegramError: telegramError || undefined
    });
  } catch (error) {
    return response.status(500).json({
      error: "Server error",
      details: error.message
    });
  }
}
