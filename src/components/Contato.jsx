import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from './icons'

function Contato() {
  return (
    <section id="contato" className="bg-slate-50 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold text-brand-blue md:text-4xl">Fale Conosco</h2>
        <p className="mt-2 text-brand-blue">Entre em contato conosco para mais informações!</p>
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-10 md:flex-row md:justify-center">
        <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-white text-center text-xs font-semibold text-brand-navy shadow-xl">
          Logo Renova Estofados
        </div>

        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-left text-sm text-brand-navy">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-brand-green" />
              (XX) XXXXX-XXXX
            </div>
            <div className="flex items-center gap-2">
              <InstagramIcon className="h-5 w-5 text-brand-green" />
              @RenovaEstofados
            </div>
            <div className="flex items-center gap-2">
              <FacebookIcon className="h-5 w-5 text-brand-green" />
              Renova Estofados
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-brand-green" />
              xxxxx@renovaestofados.com
            </div>
            <div className="col-span-2 flex items-center gap-2">
              <ClockIcon className="h-5 w-5 shrink-0 text-brand-green" />
              Segunda à Sexta das 8h30 às 18h30 e Sábado das 8h30 às 12h30
            </div>
          </div>

          <a
            href="https://wa.me/55XXXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <WhatsappIcon className="h-5 w-5" />
            Se preferir, nos chame no Whatsapp. Clique Aqui
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contato
