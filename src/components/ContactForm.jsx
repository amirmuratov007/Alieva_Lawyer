export default function ContactForm({ dark = false }) {
  return (
    <form
      className={`grid gap-4 ${dark ? 'text-white' : 'text-slate-950'}`}
      onSubmit={(event) => {
        event.preventDefault()
        alert('Заявка отправлена. Подключите CRM или Telegram-бота на следующем этапе.')
      }}
    >
      <input
        required
        placeholder="Ваше имя"
        className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-slate-950 outline-none focus:border-blue-500"
      />
      <input
        required
        placeholder="Телефон"
        className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-slate-950 outline-none focus:border-blue-500"
      />
      <textarea
        placeholder="Кратко опишите ситуацию"
        rows="4"
        className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-slate-950 outline-none focus:border-blue-500"
      />
      <button className="rounded-2xl bg-blue-600 px-8 py-5 text-lg font-semibold text-white transition hover:bg-blue-700">
        Получить консультацию
      </button>
      <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  )
}
