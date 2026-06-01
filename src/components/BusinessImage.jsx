export default function BusinessImage({ label, tall = false }) {
  return (
    <div className={`relative overflow-hidden rounded-[32px] business-pattern ${tall ? 'min-h-[520px]' : 'min-h-[360px]'} shadow-premium`}>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-8 top-8 h-36 w-56 rounded-3xl bg-white/20" />
        <div className="absolute right-8 top-24 h-52 w-40 rounded-3xl bg-blue-400/20" />
        <div className="absolute left-16 bottom-12 h-24 w-72 rounded-3xl bg-slate-300/20" />
        <div className="absolute right-20 bottom-16 h-28 w-28 rounded-full bg-blue-500/30" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className={`relative z-10 flex ${tall ? 'min-h-[520px]' : 'min-h-[360px]'} items-end p-8`}>
        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-blue-300">деловой стиль</div>
          <div className="mt-3 text-3xl font-bold text-white">{label}</div>
        </div>
      </div>
    </div>
  )
}
