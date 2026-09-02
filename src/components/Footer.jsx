import { FacebookIcon, InstagramIcon, MailIcon } from './icons'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-blue px-6 py-12 text-white md:px-12">
      <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-[auto_1fr_1fr] md:items-start">
        <div className="mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white/90 text-center text-xs font-semibold text-brand-navy">
          Logo
        </div>

        <div>
          <h3 className="font-bold">Sobre</h3>
          <p className="mt-2 text-sm text-white/90">
            Na Renova Estofados, transformamos o seu ambiente trazendo de volta o frescor e o
            conforto dos seus móveis. Trabalhamos com técnicas avançadas para higienizar e
            proteger estofados contra sujeiras, manchas e micro-organismos.
          </p>
          <p className="mt-4 text-xs text-white/70">CNPJ: XX.XXX.XXX/XXXX-XX</p>
        </div>

        <div className="text-sm">
          <h3 className="font-bold">Contatos</h3>
          <ul className="mt-2 space-y-2 text-white/90">
            <li className="flex items-center gap-2">
              <InstagramIcon className="h-4 w-4" /> @RenovaEstofados
            </li>
            <li className="flex items-center gap-2">
              <FacebookIcon className="h-4 w-4" /> Renova Estofados
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4" /> xxxxx@renovaestofados.com
            </li>
          </ul>
          <a
            href="https://wa.me/55XXXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
          >
            Se preferir, nos chame no Whatsapp. Clique Aqui
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
