export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <div className={`${light ? 'text-blue-300' : 'text-blue-600'} uppercase tracking-[0.2em] text-sm font-semibold`}>{eyebrow}</div>
      <h2 className={`mt-4 text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {text ? <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p> : null}
    </div>
  )
}
