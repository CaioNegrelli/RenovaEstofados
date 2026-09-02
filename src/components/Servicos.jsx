const servicos = [
  {
    titulo: 'Sofá / Poltrona',
    descricao:
      'Higienização profunda que remove manchas, sujeiras impregnadas e maus odores. Eliminamos ácaros e bactérias para devolver o conforto e a cor original do seu estofado.',
  },
  {
    titulo: 'Cama',
    descricao:
      'Sanitização completa para noites de sono mais saudáveis. Extraímos poeira, ácaros e alérgenos acumulados nas fibras do colchão e da cabeceira.',
  },
  {
    titulo: 'Tapete',
    descricao:
      'Lavagem especializada para remover a sujeira profunda das tramas do tecido. Renovamos o toque, realçamos as cores e eliminamos germes sem danificar o material.',
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

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {servicos.map((servico) => (
          <div
            key={servico.titulo}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-3 flex h-32 items-center justify-center rounded-lg bg-slate-200 text-sm font-medium text-slate-500">
              Foto
            </div>
            <h3 className="font-bold text-slate-800">{servico.titulo}</h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">{servico.descricao}</p>
            <button
              type="button"
              className="mt-4 self-start rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Servicos
