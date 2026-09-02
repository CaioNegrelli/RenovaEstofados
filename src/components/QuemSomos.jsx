import logoBadge from '../assets/logo-badge.jpeg'

function QuemSomos() {
  return (
    <section id="sobre" className="bg-slate-50 px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-white p-2 shadow-xl md:h-72 md:w-72">
          <img
            src={logoBadge}
            alt="Renova Estofados"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-brand-green md:text-4xl">Quem somos?</h2>
          <p className="mt-4 text-brand-navy">
            Na Renova Estofados, transformamos o seu ambiente trazendo de volta o frescor e o
            conforto dos seus móveis. Trabalhamos com técnicas avançadas para higienizar e
            proteger estofados contra sujeiras, manchas e micro-organismos.
          </p>
          <ul className="mt-4 space-y-2 text-brand-navy">
            <li>
              <span className="font-semibold">Atendimento qualificado:</span> cuidado com todos os
              tipos de tecido.
            </li>
            <li>
              <span className="font-semibold">Saúde e proteção:</span> eliminação de ácaros,
              fungos e bactérias.
            </li>
            <li>
              <span className="font-semibold">Renovação completa:</span> seu estofado limpo,
              cheiroso e com cara de novo.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default QuemSomos
