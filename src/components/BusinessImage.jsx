export default function BusinessImage({ label, small = false }) {
  return (
    <div className={`relative overflow-hidden rounded-[32px] bg-slate-900 ${small ? 'min-h-[260px]' : 'min-h-[360px]'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-black" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-10 top-10 h-36 w-56 rounded-3xl bg-white/20" />
        <div className="absolute right-10 top-24 h-52 w-40 rounded-3xl bg-blue-400/20" />
        <div className="absolute left-20 bottom-12 h-24 w-72 rounded-3xl bg-slate-300/20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className={`relative z-10 flex ${small ? 'min-h-[260px]' : 'min-h-[360px]'} items-end p-8`}>
        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-blue-300">деловой стиль</div>
          <div className="mt-3 text-3xl font-bold text-white">{label}</div>
        </div>
      </div>
    </div>
  )
}
