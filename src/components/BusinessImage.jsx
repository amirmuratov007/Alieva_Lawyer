export default function BusinessImage({ label = 'Деловое изображение', compact = false }) {
  return (
    <div className={`relative overflow-hidden rounded-[32px] bg-slate-900 ${compact ? 'min-h-[260px]' : 'min-h-[360px]'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-black" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-8 top-8 h-28 w-48 rounded-3xl bg-white/20" />
        <div className="absolute right-8 top-20 h-48 w-36 rounded-3xl bg-blue-400/20" />
        <div className="absolute left-14 bottom-10 h-20 w-64 rounded-3xl bg-slate-300/20" />
        <div className="absolute right-20 bottom-16 h-16 w-16 rounded-full bg-blue-300/20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      <div className={`relative z-10 flex ${compact ? 'min-h-[260px]' : 'min-h-[360px]'} items-end p-8`}>
        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-blue-300">business image</div>
          <div className="mt-3 text-2xl md:text-3xl font-bold text-white">{label}</div>
        </div>
      </div>
    </div>
  )
}
