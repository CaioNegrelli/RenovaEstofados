function Bubble({ className }) {
  return (
    <span
      className={`pointer-events-none absolute rounded-full border border-white/40 bg-white/10 ${className}`}
      aria-hidden="true"
    />
  )
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-blue px-6 py-16 md:px-12 md:py-24"
    >
      <Bubble className="left-[8%] top-10 h-16 w-16" />
      <Bubble className="left-[20%] top-32 h-28 w-28" />
      <Bubble className="right-[30%] top-4 h-10 w-10" />
      <Bubble className="right-[10%] bottom-6 h-20 w-20" />
      <Bubble className="right-[22%] bottom-0 h-12 w-12" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-5xl leading-tight font-extrabold text-white uppercase md:text-6xl">
            Renova
            <br />
            Estofados
          </h1>
          <p className="mt-4 text-xl font-medium text-white md:text-2xl">
            Mais que limpeza, <span className="text-brand-lime">renovamos</span> seu conforto!
          </p>
        </div>

        <div className="relative flex h-56 w-56 shrink-0 items-center justify-center rounded-full bg-white/90 text-center text-sm font-semibold text-brand-navy shadow-xl md:h-64 md:w-64">
          Logo Renova Estofados
        </div>
      </div>
    </section>
  )
}

export default Hero
