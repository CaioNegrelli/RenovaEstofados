import logoBadge from '../assets/logo-badge.jpeg'

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-6 bg-[] px-6 py-3 md:px-12">
      <div className="flex items-center gap-3">
        <img
          src={logoBadge}
          alt="Renova Estofados"
          className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-brand-navy/10"
        />
        <span className="text-lg font-bold text-brand-navy">
          Renova <span className="text-brand-green">Estofados</span>
        </span>
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
