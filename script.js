async function sendLead(form, statusEl) {
  const data = Object.fromEntries(new FormData(form).entries());
  data.page = window.location.pathname;
  statusEl.textContent = "Отправляем заявку...";
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error("send error");
    statusEl.textContent = "Заявка отправлена. Мы свяжемся с вами.";
    form.reset();
  } catch (error) {
    statusEl.textContent = "Заявка сохранена. Можно также позвонить или написать в мессенджер.";
  }
}
document.querySelectorAll(".form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const statusEl = document.getElementById(form.getAttribute("data-status") || "formStatus");
    sendLead(form, statusEl);
  });
});
