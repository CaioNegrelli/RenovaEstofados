import { useEffect, useRef, useState } from 'react'
import higienizacaoEstofado from '../assets/higienizacao-estofado.jpg'
import { CheckIcon } from './icons'

const diferenciais = [
  'Tecnologias inovadoras',
  'Equipe própria especializada',
  'Produtos exclusivos e equipamentos de última geração',
  'Atendimento personalizado e cuidadoso',
  'Garantia de qualidade em todos os serviços',
  'Experiência premium no atendimento pós-venda',
]

function Diferenciais() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="diferenciais"
      className="mx-auto max-w-6xl px-6 py-16 md:px-12"
    >
      <h2 className="text-center text-3xl font-extrabold text-brand-green md:text-left md:text-4xl">
        Nossos diferenciais
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        <ul className="grid gap-4 sm:grid-cols-2">
          {diferenciais.map((item, i) => (
            <li key={item} className="relative">
              {visible && (
                <span
                  className="animate-bubble-ring pointer-events-none absolute inset-0 rounded-lg border-2 border-brand-green/60"
                  style={{ animationDelay: `${i * 110}ms` }}
                />
              )}
              <div
                className={`relative flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm ${
                  visible ? 'animate-bubble-pop' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </div>
            </li>
          ))}
        </ul>

        <div className="mx-auto h-72 w-72 overflow-hidden rounded-full shadow-lg ring-4 ring-brand-blue/10 md:h-80 md:w-80">
          <img
            src={higienizacaoEstofado}
            alt="Higienização profissional de estofado com equipamento a vácuo"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Diferenciais