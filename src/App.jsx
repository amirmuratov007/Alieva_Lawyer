import BusinessImage from './components/BusinessImage.jsx'
import ContactForm from './components/ContactForm.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import { blogPosts, faq, lawyer, seoPages, services } from './data/siteData.js'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a href="#top" className="font-bold text-xl tracking-tight">{lawyer.brand}</a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-300">
          <a href="#services" className="hover:text-white">Услуги</a>
          <a href="#about" className="hover:text-white">Опыт</a>
          <a href="#seo" className="hover:text-white">Продвижение</a>
          <a href="#blog" className="hover:text-white">Блог</a>
          <a href="#contact" className="hover:text-white">Контакты</a>
        </nav>
        <a href="#contact" className="rounded-2xl bg-blue-600 hover:bg-blue-700 transition px-5 py-3 font-semibold text-sm">Заявка</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-black" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200">
            Адвокат {lawyer.name} • {lawyer.experience} лет практики
          </div>
          <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Защита бизнеса,
            <span className="block text-blue-400">денег и репутации</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Юридическая помощь по уголовным, арбитражным, семейным и налоговым делам.
            Строгая конфиденциальность, быстрый контакт и понятная стратегия защиты.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-2xl bg-blue-600 hover:bg-blue-700 transition px-8 py-4 text-lg font-semibold shadow-2xl">Получить консультацию</a>
            <a href={lawyer.whatsapp} className="rounded-2xl bg-white text-slate-950 hover:bg-slate-100 transition px-8 py-4 text-lg font-semibold">WhatsApp</a>
            <a href={lawyer.telegram} className="rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition px-8 py-4 text-lg font-semibold">Telegram</a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            <div><div className="text-3xl font-bold">20+</div><div className="text-slate-400 text-sm mt-1">лет практики</div></div>
            <div><div className="text-3xl font-bold">300+</div><div className="text-slate-400 text-sm mt-1">судебных дел</div></div>
            <div><div className="text-3xl font-bold">24/7</div><div className="text-slate-400 text-sm mt-1">срочная связь</div></div>
          </div>
        </div>
        <BusinessImage label="Деловой портрет адвоката" tall />
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle eyebrow="услуги" title="Основные направления практики" text="Каждая услуга ведет клиента к заявке, звонку или сообщению в мессенджер." />
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.slug} className="rounded-[30px] border border-slate-200 p-8 bg-white hover:shadow-premium transition">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">{service.lead}</p>
              <div className="mt-6 space-y-3">
                {service.points.map((point) => <div key={point} className="flex gap-3 text-slate-700"><span className="text-blue-600">✓</span>{point}</div>)}
              </div>
              <a href="#contact" className="mt-8 inline-flex text-blue-600 font-semibold">Оставить заявку →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <BusinessImage label="Переговоры, стратегия и защита" />
        <div>
          <SectionTitle light eyebrow="об адвокате" title="Опыт, репутация и спокойная уверенность" text="Строгий визуальный стиль, понятная структура, доказательства экспертности и быстрый путь к консультации." />
          <div className="mt-10 space-y-5">
            {['20 лет юридической практики', 'Защита бизнеса и собственников', 'Судебные споры разных категорий', 'Конфиденциальная работа с клиентами'].map((item) => (
              <div key={item} className="flex items-center gap-4"><div className="w-3 h-3 rounded-full bg-blue-500" /><div className="text-lg text-slate-200">{item}</div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LeadSystem() {
  return (
    <section id="seo" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle eyebrow="поток клиентов" title="SEO, реклама, CRM и мессенджеры" text="Сайт работает как воронка: SEO-страницы, блог, формы, WhatsApp, Telegram, аналитика, CRM и быстрый контакт с адвокатом." />
        <div className="mt-16 grid lg:grid-cols-4 gap-6">
          {['SEO-страницы', 'Яндекс Директ', 'Google Ads', 'Юридический блог', 'Отзывы', 'Telegram', 'WhatsApp', 'CRM', 'AI-чат', 'Сквозная аналитика', 'Онлайн-запись', 'Ретаргетинг'].map((item) => (
            <div key={item} className="rounded-3xl bg-white p-8 border border-slate-200 text-lg font-semibold">{item}</div>
          ))}
        </div>
        <div className="mt-16 grid lg:grid-cols-4 gap-6">
          {seoPages.map((item) => (
            <div key={item} className="rounded-[28px] border border-slate-200 bg-white p-6 hover:shadow-xl transition">
              <div className="text-lg font-bold leading-tight">{item}</div>
              <div className="mt-4 text-slate-600 leading-relaxed">Посадочная страница под целевой спрос.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle eyebrow="блог" title="Экспертные материалы" text="Статьи усиливают доверие и привлекают поисковый трафик по юридическим вопросам." />
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-[30px] border border-slate-200 overflow-hidden bg-white hover:shadow-premium transition">
              <BusinessImage label={post.title} />
              <div className="p-8">
                <h3 className="text-2xl font-bold leading-tight">{post.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{post.text}</p>
                <a href="#contact" className="mt-6 inline-flex text-blue-600 font-semibold">Получить консультацию →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle eyebrow="faq" title="Частые вопросы" text="Короткие ответы снимают сомнения и повышают конверсию заявки." />
        <div className="mt-12 space-y-6">
          {faq.map(([q, a]) => (
            <div key={q} className="rounded-[28px] bg-white border border-slate-200 p-8">
              <h3 className="text-2xl font-bold">{q}</h3>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle eyebrow="контакты" title="Свяжитесь с адвокатом" text="Конфиденциальная консультация. Ответ в WhatsApp и Telegram. Возможна срочная помощь." />
          <div className="mt-10 space-y-5 text-lg">
            <div>📞 {lawyer.phone}</div>
            <div>✉️ {lawyer.email}</div>
            <div>📍 {lawyer.address}</div>
          </div>
          <div className="mt-10 flex gap-4 flex-wrap">
            <a href={lawyer.whatsapp} className="rounded-2xl bg-slate-900 hover:bg-black transition px-8 py-4 text-white font-semibold">WhatsApp</a>
            <a href={lawyer.telegram} className="rounded-2xl bg-blue-600 hover:bg-blue-700 transition px-8 py-4 text-white font-semibold">Telegram</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">
        <div><div className="text-2xl font-bold">{lawyer.brand}</div><p className="mt-4 text-slate-400 leading-relaxed">Юридическая защита бизнеса, собственников и частных клиентов.</p></div>
        <div><div className="font-semibold text-lg">Контакты</div><div className="mt-4 space-y-2 text-slate-400"><div>{lawyer.phone}</div><div>{lawyer.email}</div><div>{lawyer.address}</div></div></div>
        <div><div className="font-semibold text-lg">Практика</div><div className="mt-4 space-y-2 text-slate-400"><div>Уголовные дела</div><div>Арбитраж</div><div>Семейное право</div><div>Налоговые споры</div></div></div>
        <div><div className="font-semibold text-lg">Быстрая связь</div><a href="#contact" className="mt-4 inline-flex justify-center rounded-2xl bg-blue-600 hover:bg-blue-700 transition px-6 py-4 font-semibold w-full">Написать адвокату</a></div>
      </div>
    </footer>
  )
}

export default function App() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `Адвокат ${lawyer.name}`,
    description: 'Юридическая помощь, защита бизнеса, уголовные дела, арбитражные и семейные споры.',
    address: lawyer.address,
    telephone: lawyer.phone,
    email: lawyer.email,
    areaServed: 'Россия',
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <Hero />
      <section className="py-8 bg-slate-900 text-white border-y border-white/10"><div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-5"><div className="text-slate-300 text-lg">Срочная юридическая помощь • Конфиденциально • По всей России</div><a href="#contact" className="rounded-2xl bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold transition">Связаться сейчас</a></div></section>
      <Services />
      <About />
      <LeadSystem />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
