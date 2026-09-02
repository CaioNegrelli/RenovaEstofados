import { useId } from 'react'
import logoTransparente from '../assets/logo-transparente.png'
import { WhatsappIcon } from './icons'

function Bubble({ className }) {
  const id = useId()
  const fillId = `bubble-fill-${id}`

  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={fillId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
        </radialGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="47"
        fill={`url(#${fillId})`}
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
      />
      <ellipse cx="34" cy="30" rx="11" ry="6.5" fill="rgba(255,255,255,0.65)" />
      <circle cx="66" cy="68" r="3.5" fill="rgba(255,255,255,0.35)" />
    </svg>
  )
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#1F6FB6] to-[#FFFFFF] px-6 py-16 md:px-12 md:py-24"
    >
      <Bubble className="left-[8%] top-10 h-16 w-16" />
      <Bubble className="left-[20%] top-32 h-28 w-28" />
      <Bubble className="left-[4%] bottom-10 h-10 w-10" />
      <Bubble className="right-[30%] top-4 h-10 w-10" />
      <Bubble className="right-[10%] bottom-6 h-20 w-20" />
      <Bubble className="right-[22%] bottom-0 h-12 w-12" />
      <Bubble className="right-[4%] top-1/3 h-8 w-8" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-6xl leading-none font-extrabold uppercase md:text-8xl">
            <span className="text-brand-navy [text-shadow:0_0_18px_rgba(255,255,255,0.55),0_0_4px_rgba(255,255,255,0.7)]">
              Renova
            </span>
            <br />
            <span className="text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.15)]">Estofados</span>
          </h1>
          <p className="mt-5 text-xl font-medium text-white md:text-2xl">
            Mais que limpeza, <span className="text-brand-navy">renovamos</span> seu conforto!
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="https://wa.me/55XXXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
            >
              <WhatsappIcon className="h-5 w-5" />
              Solicitar orçamento
            </a>
            <a

              href="#servicos"
              className="rounded-full border border-brand-green px-6 py-3 text-sm font-semibold text-brand-green transition hover:border-brand-blue hover:text-brand-blue"
            >
              Ver serviços
            </a>
          </div>
        </div>

        <div className="relative h-64 w-64 shrink-0 md:h-100 md:w-100">

          <img
            src={logoTransparente}
            alt="Renova Estofados"
            className="h-full w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
