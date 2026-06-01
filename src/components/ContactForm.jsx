import { useState } from 'react'

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('request_failed')

      setStatus('success')
      setMessage('Заявка отправлена. С вами свяжутся в ближайшее время.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage('Заявка сохранена на сайте. Для срочной связи напишите в WhatsApp или Telegram.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`rounded-[32px] bg-white p-6 lg:p-8 shadow-premium border border-slate-200 ${compact ? '' : 'max-w-xl'}`}>
      <div className="text-2xl font-bold text-slate-950">Получить консультацию</div>
      <p className="mt-3 text-slate-600">Опишите ситуацию. Контакт уйдет адвокату через сайт.</p>

      <div className="mt-6 grid gap-4">
        <input name="name" required placeholder="Ваше имя" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500" />
        <input name="phone" required placeholder="Телефон или мессенджер" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500" />
        <select name="service" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500 bg-white">
          <option>Уголовная защита</option>
          <option>Защита бизнеса</option>
          <option>Арбитражный спор</option>
          <option>Семейное дело</option>
          <option>Налоговый спор</option>
          <option>Срочная помощь</option>
        </select>
        <textarea name="details" rows="4" placeholder="Коротко опишите ситуацию" className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500 resize-none" />
        <button disabled={status === 'loading'} className="rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-6 py-4 font-semibold transition">
          {status === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
        </button>
      </div>

      {message ? <div className={`mt-4 text-sm ${status === 'success' ? 'text-green-700' : 'text-slate-600'}`}>{message}</div> : null}
    </form>
  )
}
