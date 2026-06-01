import { ArrowRight, CheckCircle2, MessageCircle, Phone, Scale, ShieldCheck } from 'lucide-react'
import BusinessImage from './components/BusinessImage.jsx'
import ContactForm from './components/ContactForm.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import { blogPosts, faq, lawyer, seoPages, services } from './data/siteData.js'

function Button({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-2xl shadow-blue-950/20',
    light: 'bg-white text-slate-950 hover:bg-slate-100',
    dark: 'bg-slate-950 text-white hover:bg-black',
    ghost: 'border border-white/15 bg-white/5 text-white hover:bg-white/10',
  }

  return (
    <button className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold transition ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#top" className="text-xl font-bold tracking-tight">{lawyer.brand}</a>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          <a href="#services" className="hover:text-white">Услуги</a>
          <a href="#about" className="hover:text-white">Опыт</a>
          <a href="#seo" className="hover:text-white">Продвижение</a>
          <a href="#blog" className="hover:text-white">Блог</a>
          <a href="#contacts" className="hover:text-white">Контакты</a>
        </nav>
        <a href="tel:+79999999999" className="hidden rounded-2xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700 md:inline-flex">
          Срочный звонок
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 pt-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-black" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200">
            <Scale className="h-4 w-4 text-blue-300" />
            Адвокат {lawyer.name} • {lawyer.experience} лет практики
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {lawyer.tagline.split(',')[0]},
            <span className="block text-blue-400">денег и репутации</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Профессиональная юридическая защита по уголовным, гражданским, семейным и арбитражным делам. Конфиденциально, системно и с вниманием к каждой детали.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Получить консультацию <ArrowRight className="h-5 w-5" /></Button>
            <Button variant="light">Срочная помощь</Button>
            <Button variant="ghost"><MessageCircle className="h-5 w-5" /> WhatsApp / Telegram</Button>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">{lawyer.experience}</div>
              <div className="mt-1 text-sm text-slate-400">лет практики</div>
            </div>
            <div>
              <div className="text-3xl font-bold">300+</div>
              <div className="mt-1 text-sm text-slate-400">судебных дел</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="mt-1 text-sm text-slate-400">срочная связь</div>
            </div>
          </div>
        </div>

        <BusinessImage label="Деловой портрет адвоката" />
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-slate-900 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6">
        <div className="text-lg text-slate-300">Срочная юридическая помощь • Конфиденциально • По всей России</div>
        <Button>Связаться сейчас</Button>
      </div>
    </section>
  )
}

function TrustCards() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-4">
        {[
          ['Конфиденциальность', ShieldCheck],
          ['20 лет опыта', Scale],
          ['Быстрая реакция', Phone],
          ['Работа с бизнесом', CheckCircle2],
        ].map(([item, Icon]) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <Icon className="h-8 w-8 text-blue-600" />
            <div className="mt-5 text-xl font-semibold">{item}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="услуги" title="Основные направления практики" />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[30px] border border-slate-200 bg-white p-8 transition hover:shadow-soft">
              <div className="text-2xl font-bold">{service.title}</div>
              <p className="mt-4 leading-relaxed text-slate-600">{service.text}</p>
              <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600">
                Подробнее <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <BusinessImage label="Юридическая практика и переговоры" />
        <div>
          <SectionTitle
            eyebrow="об адвокате"
            title="Опыт, репутация и спокойная уверенность"
            text="Строгий визуальный стиль, деловые изображения, понятная структура, доказательства экспертности и быстрый путь к консультации."
            light
          />
          <div className="mt-10 space-y-5">
            {['20 лет юридической практики', 'Сложные судебные споры', 'Защита бизнеса и собственников', 'Полная конфиденциальность'].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <div className="text-lg text-slate-200">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle eyebrow="результаты" title="Доверие через факты" />
          <p className="max-w-xl leading-relaxed text-slate-600">Для юридической ниши важны не обещания, а опыт, понятный процесс, кейсы, отзывы и быстрый контакт.</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            ['20+', 'лет практики'],
            ['300+', 'дел в разных категориях споров'],
            ['24/7', 'срочная связь с адвокатом'],
          ].map(([amount, title]) => (
            <div key={title} className="rounded-[30px] border border-slate-200 bg-slate-50 p-8">
              <div className="text-4xl font-bold text-blue-600">{amount}</div>
              <div className="mt-4 text-lg leading-relaxed text-slate-700">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="bg-blue-700 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight md:text-5xl">Нужна срочная юридическая помощь?</h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-blue-100">Оставьте заявку. Адвокат свяжется с вами, изучит ситуацию и предложит стратегию защиты.</p>
        <div className="mx-auto mt-12 max-w-3xl rounded-[32px] bg-white/10 p-6 backdrop-blur">
          <ContactForm dark />
        </div>
      </div>
    </section>
  )
}

function LeadSystem() {
  return (
    <section id="seo" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="поток клиентов"
          title="SEO, реклама, CRM и мессенджеры"
          text="Сайт работает как воронка: SEO-страницы, блог, формы, WhatsApp, Telegram, аналитика, CRM и быстрый контакт с адвокатом."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {['SEO-страницы', 'Яндекс Директ', 'Google Ads', 'Юридический блог', 'Отзывы', 'Telegram', 'WhatsApp', 'CRM', 'AI-чат', 'Сквозная аналитика', 'Онлайн-запись', 'Ретаргетинг'].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-8 text-lg font-semibold">{item}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle eyebrow="блог" title="Экспертные материалы" />
          <button className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold transition hover:bg-slate-100">Смотреть все статьи</button>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.title} className="overflow-hidden rounded-[30px] border border-slate-200 bg-white transition hover:shadow-soft">
              <BusinessImage label={post.title} compact />
              <div className="p-8">
                <div className="text-2xl font-bold leading-tight">{post.title}</div>
                <p className="mt-4 leading-relaxed text-slate-600">{post.text}</p>
                <button className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
                  Читать статью <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Crm() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="crm и аналитика" title="Автоматическая обработка заявок" light />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-300">
            <div>✓ Заявки в Telegram</div>
            <div>✓ Подключение CRM</div>
            <div>✓ WhatsApp и обратный звонок</div>
            <div>✓ Яндекс Метрика и Google Analytics</div>
            <div>✓ Отслеживание рекламных каналов</div>
          </div>
        </div>
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="space-y-5">
            <div className="flex items-center justify-between rounded-2xl bg-white/10 p-5">
              <div>
                <div className="font-semibold">Новая заявка</div>
                <div className="mt-1 text-sm text-slate-400">Уголовное дело • WhatsApp</div>
              </div>
              <div className="font-semibold text-blue-300">NEW</div>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/10 p-5">
              <div>
                <div className="font-semibold">Семейный спор</div>
                <div className="mt-1 text-sm text-slate-400">Telegram • срочная консультация</div>
              </div>
              <div className="font-semibold text-slate-300">IN WORK</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SeoPages() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle eyebrow="seo-страницы" title="Посадочные страницы под спрос" />
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">Каждая услуга должна иметь отдельную страницу под поисковые запросы клиентов.</p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {seoPages.map((item) => (
            <div key={item} className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:shadow-xl">
              <div className="text-xl font-bold leading-tight">{item}</div>
              <div className="mt-4 leading-relaxed text-slate-600">SEO-страница для привлечения целевых клиентов.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <SectionTitle eyebrow="faq" title="Частые вопросы" />
        </div>
        <div className="mt-16 space-y-6">
          {faq.map((item) => (
            <div key={item.q} className="rounded-[28px] border border-slate-200 bg-white p-8">
              <div className="text-2xl font-bold">{item.q}</div>
              <div className="mt-4 text-lg leading-relaxed text-slate-600">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contacts() {
  return (
    <section id="contacts" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="контакты"
            title="Свяжитесь с адвокатом"
            text="Конфиденциальная консультация. Ответ в WhatsApp и Telegram. Возможна срочная помощь."
          />
          <div className="mt-10 space-y-5 text-lg">
            <div>📞 {lawyer.phone}</div>
            <div>✉️ {lawyer.email}</div>
            <div>📍 {lawyer.location}</div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="dark"><MessageCircle className="h-5 w-5" /> WhatsApp</Button>
            <Button><MessageCircle className="h-5 w-5" /> Telegram</Button>
          </div>
        </div>
        <BusinessImage label="Премиальный офис и консультации" />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4">
        <div>
          <div className="text-2xl font-bold">{lawyer.brand}</div>
          <p className="mt-4 leading-relaxed text-slate-400">Юридическая защита бизнеса, собственников и частных клиентов.</p>
        </div>
        <div>
          <div className="text-lg font-semibold">Контакты</div>
          <div className="mt-4 space-y-2 text-slate-400">
            <div>{lawyer.phone}</div>
            <div>{lawyer.email}</div>
            <div>{lawyer.location}</div>
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold">Практика</div>
          <div className="mt-4 space-y-2 text-slate-400">
            <div>Уголовные дела</div>
            <div>Арбитраж</div>
            <div>Семейное право</div>
            <div>Налоговые споры</div>
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold">Быстрая связь</div>
          <button className="mt-4 w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-700">Написать адвокату</button>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />
      <Hero />
      <TrustBar />
      <TrustCards />
      <Services />
      <About />
      <Results />
      <Cta />
      <LeadSystem />
      <Blog />
      <Crm />
      <SeoPages />
      <Faq />
      <Contacts />
      <Footer />
    </div>
  )
}
