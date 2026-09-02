function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-6 border-b border-slate-200 bg-white px-6 py-4 md:px-12">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 shrink-0 rounded-full bg-brand-navy" aria-hidden="true" />
        <span className="text-lg font-bold text-brand-navy">Renova</span>
      </div>

      <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
        <a href="#inicio" className="hover:text-brand-blue">
          Início
        </a>
        <a href="#sobre" className="hover:text-brand-blue">
          Sobre nós
        </a>
        <a href="#servicos" className="hover:text-brand-blue">
          Serviços
        </a>
        <a href="#contato" className="hover:text-brand-blue">
          Contato
        </a>
      </nav>

      <a
        href="#contato"
        className="shrink-0 rounded-full bg-brand-navy px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Entre em contato conosco
      </a>
    </header>
  )
}

export default Header
