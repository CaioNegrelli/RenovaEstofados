import { useState } from 'react'
import { ArmchairIcon, BedIcon, RugIcon, SofaIcon, WhatsappIcon } from './icons'

const servicos = [
  {
    titulo: 'Sofá',
    Icon: SofaIcon,
    descricao:
      'Higienização profunda que remove manchas, sujeiras impregnadas e maus odores, devolvendo o conforto e a cor original.',
  },
  {
    titulo: 'Poltrona',
    Icon: ArmchairIcon,
    descricao:
      'Limpeza especializada para poltronas e cadeiras estofadas, eliminando ácaros e bactérias sem danificar o tecido.',
  },
  {
    titulo: 'Cama',
    Icon: BedIcon,
    descricao:
      'Sanitização completa para noites de sono mais saudáveis, extraindo poeira, ácaros e alérgenos do colchão e da cabeceira.',
  },
  {
    titulo: 'Tapete',
    Icon: RugIcon,
    descricao:
      'Lavagem especializada que remove a sujeira profunda das tramas, renova o toque e realça as cores sem danificar o material.',
  },
]

function ChevronIcon({ direction, className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ServicoCard({ titulo, Icon, descricao, offset }) {
  const isActive = offset === 0
  const scale = isActive ? 1 : 0.8
  const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.4 : 0
  const blur = isActive ? '' : 'blur-[1px]'

  return (
    <div
      className={`absolute top-1/2 left-1/2 w-64 shrink-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 ease-out sm:w-72 ${blur}`}
      style={{
        transform: `translate(-50%, -50%) translateX(${offset * 78}%) scale(${scale})`,
        opacity,
        zIndex: 10 - Math.abs(offset),
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-bold text-slate-800">{titulo}</h3>
      <p className="mt-2 text-sm text-slate-600">{descricao}</p>
      <a
        href="https://wa.me/55XXXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex items-center justify-center gap-2 self-start rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
      >
        <WhatsappIcon className="h-4 w-4" />
        Solicitar
      </a>
    </div>
  )
}

function Servicos() {
  const [index, setIndex] = useState(0)
  const total = servicos.length

  const goTo = (i) => setIndex(((i % total) + total) % total)

  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px flex-1 bg-slate-300" />
        <h2 className="text-3xl font-extrabold text-brand-blue md:text-4xl">Serviços</h2>
        <span className="h-px flex-1 bg-slate-300" />
      </div>

      <div className="relative mt-10 h-96 overflow-hidden">
        {servicos.map((servico, i) => {
          let offset = i - index
          if (offset > total / 2) offset -= total
          if (offset < -total / 2) offset += total

          return <ServicoCard key={servico.titulo} {...servico} offset={offset} />
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Serviço anterior"
          className="flex h-8 w-8 items-center justify-center rounded-full text-brand-blue transition hover:bg-brand-blue/10"
        >
          <ChevronIcon direction="left" className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {servicos.map((servico, i) => (
            <button
              key={servico.titulo}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para ${servico.titulo}`}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? 'bg-brand-blue' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Próximo serviço"
          className="flex h-8 w-8 items-center justify-center rounded-full text-brand-blue transition hover:bg-brand-blue/10"
        >
          <ChevronIcon direction="right" className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}

export default Servicos