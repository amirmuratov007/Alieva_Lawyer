export default function ContactForm({ dark = false }) {
  function submitForm(event) {
    event.preventDefault()
    alert('Заявка пока работает как демо. Подключим Telegram, CRM или почту на следующем этапе.')
  }

  return (
    <form onSubmit={submitForm} className="grid lg:grid-cols-3 gap-4">
      <input required placeholder="Ваше имя" className="rounded-2xl px-6 py-5 text-slate-950 text-lg outline-none border border-slate-200" />
      <input required placeholder="Телефон" className="rounded-2xl px-6 py-5 text-slate-950 text-lg outline-none border border-slate-200" />
      <button className={`rounded-2xl px-8 py-5 text-lg font-semibold transition ${dark ? 'bg-white text-slate-950 hover:bg-slate-100' : 'bg-slate-950 text-white hover:bg-black'}`}>
        Получить консультацию
      </button>
    </form>
  )
}
