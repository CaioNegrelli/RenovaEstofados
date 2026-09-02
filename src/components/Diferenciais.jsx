const diferenciais = [
  'Tecnologias Inovadoras',
  'Equipe Própria Especializada',
  'Produtos Exclusivos e Equipamentos de Última Geração',
  'Atendimento Personalizado e Cuidadoso',
  'Garantia de Qualidade em Todos os Serviços',
  'Experiência Premium do Atendimento ao Pós-vendas',
]

function Diferenciais() {
  return (
    <section id="diferenciais" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <h2 className="text-3xl font-extrabold text-brand-green md:text-4xl">Nossos diferenciais</h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        <ul className="space-y-4">
          {diferenciais.map((item) => (
            <li
              key={item}
              className="rounded-md border border-slate-200 border-l-4 border-l-brand-blue bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-slate-200 text-center text-sm font-medium text-slate-500 md:h-80 md:w-80">
          Foto do serviço de higienização
        </div>
      </div>
    </section>
  )
}

export default Diferenciais
