import { CalendarIcon, SparklesIcon, ThumbsUpIcon } from './icons'

const passos = [
  {
    numero: '1',
    Icon: CalendarIcon,
    titulo: 'Solicite um orçamento',
    descricao: 'Fale com a gente pelo WhatsApp e conte o que precisa higienizar.',
  },
  {
    numero: '2',
    Icon: SparklesIcon,
    titulo: 'Agendamos e higienizamos',
    descricao: 'Nossa equipe vai até você com equipamentos e produtos profissionais.',
  },
  {
    numero: '3',
    Icon: ThumbsUpIcon,
    titulo: 'Aproveite o resultado',
    descricao: 'Estofado limpo, cheiroso e protegido, com a garantia Renova Estofados.',
  },
]

function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-slate-50 px-6 py-16 md:px-12">
      <h2 className="text-center text-3xl font-extrabold text-brand-navy md:text-4xl">
        Como funciona
      </h2>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-3">
        {passos.map(({ numero, Icon, titulo, descricao }) => (
          <div key={numero} className="flex flex-col items-center text-center">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg">
              <Icon className="h-7 w-7" />
              <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white">
                {numero}
              </span>
            </div>
            <h3 className="mt-4 font-bold text-brand-navy">{titulo}</h3>
            <p className="mt-2 text-sm text-slate-600">{descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ComoFunciona
