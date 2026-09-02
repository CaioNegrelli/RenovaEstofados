import { CheckIcon, SparklesIcon } from './icons'

const diferenciais = [
  'Tecnologias inovadoras',
  'Equipe própria especializada',
  'Produtos exclusivos e equipamentos de última geração',
  'Atendimento personalizado e cuidadoso',
  'Garantia de qualidade em todos os serviços',
  'Experiência premium no atendimento pós-venda',
]

function Diferenciais() {
  return (
    <section id="diferenciais" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <h2 className="text-center text-3xl font-extrabold text-brand-green md:text-left md:text-4xl">
        Nossos diferenciais
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        <ul className="grid gap-4 sm:grid-cols-2">
          {diferenciais.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-green/10 md:h-80 md:w-80">
          <SparklesIcon className="h-24 w-24 text-brand-blue" />
        </div>
      </div>
    </section>
  )
}

export default Diferenciais
