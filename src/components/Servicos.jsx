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

function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px flex-1 bg-slate-300" />
        <h2 className="text-3xl font-extrabold text-brand-blue md:text-4xl">Serviços</h2>
        <span className="h-px flex-1 bg-slate-300" />
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {servicos.map(({ titulo, Icon, descricao }) => (
          <div
            key={titulo}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-slate-800">{titulo}</h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">{descricao}</p>
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
        ))}
      </div>
    </section>
  )
}

export default Servicos
