import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { copyFor } from '../i18n'

const servicesCopy = {
  lv: {
    label: 'Pakalpojumi',
    title: 'Estētika un veselība',
    intro:
      'Katrs pakalpojums ir pielāgots tieši jums. Mūsu speciālisti izstrādā individuālu ārstēšanas plānu.',
    book: 'Pierakstīties →',
    fallbackLabel: 'Neatradāt vajadzīgo?',
    fallbackTitle: 'Konsultācija bez maksas',
    fallbackText: 'Sazinieties ar mums — atradīsim labāko risinājumu tieši jūsu vajadzībām.',
    fallbackCta: 'Sazināties →',
  },
  en: {
    label: 'Services',
    title: 'Aesthetics and health',
    intro:
      'Every service is tailored to you. Our specialists create an individual treatment plan for your needs.',
    book: 'Book now →',
    fallbackLabel: 'Need something else?',
    fallbackTitle: 'Free consultation',
    fallbackText: 'Contact us and we will find the right solution for your needs.',
    fallbackCta: 'Contact us →',
  },
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" aria-hidden="true" focusable="false">
        <circle cx="20" cy="20" r="14" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M14 20C14 20 16 24 20 24C24 24 26 20 26 20" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 14V16M16 15.3L17.4 16.8M24 15.3L22.6 16.8" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    lv: {
      name: 'Zobu balināšana',
      subtitle: 'Teeth Whitening',
      description:
        'Profesionāla balināšana klīnikā ar ZOOM tehnoloģiju — zobi kļūst līdz 8 toņiem gaišāki vienas vizītes laikā.',
      price: '€149–€299',
    },
    en: {
      name: 'Teeth whitening',
      subtitle: 'ZOOM Whitening',
      description:
        'Professional in-clinic whitening with ZOOM technology, making teeth up to 8 shades brighter in one visit.',
      price: '€149–€299',
    },
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" aria-hidden="true" focusable="false">
        <rect x="16" y="8" width="8" height="14" rx="1" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M16 18H24" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M20 22V32" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 32H25" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    lv: {
      name: 'Zobu implanti',
      subtitle: 'Dental Implants',
      description:
        'Ilgstošs risinājums trūkstošiem zobiem. Straumann implanti ar 10 gadu garantiju un estētisku kroni.',
      price: '€999–€1 499',
    },
    en: {
      name: 'Dental implants',
      subtitle: 'Straumann Implants',
      description:
        'A long-term solution for missing teeth. Straumann implants with a 10-year warranty and an aesthetic crown.',
      price: '€999–€1,499',
    },
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" aria-hidden="true" focusable="false">
        <path d="M13 12C13 12 11 14 11 18C11 22 14 25 17 26.5C18.5 27.3 19 29 20 31C21 29 21.5 27.3 23 26.5C26 25 29 22 29 18C29 14 27 12 24 12C22.5 12 21.5 13 21 14C20.5 13 19.5 12 18 12H13Z" stroke="#C4975A" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    lv: {
      name: 'Venīri',
      subtitle: 'Porcelain Veneers',
      description:
        'Porcelāna plāksnītes perfekta smaida veidošanai. Dabisks, skaists rezultāts ar minimālu iejaukšanos.',
      price: '€450–€699 / zobs',
    },
    en: {
      name: 'Porcelain veneers',
      subtitle: 'Smile Design',
      description:
        'Porcelain shells for shaping a refined smile. A natural, beautiful result with minimal intervention.',
      price: '€450–€699 / tooth',
    },
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" aria-hidden="true" focusable="false">
        <path d="M12 28L16 14" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 14C16 14 17 12 20 12C23 12 24 14 24 14" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 14L28 28" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 23H29" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 28H27" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    lv: {
      name: 'Higiēnas tīrīšana',
      subtitle: 'Hygiene Cleaning',
      description:
        'Profesionāla zobu tīrīšana ar ultraskaņu, air-flow un pulēšanu. Veselas smaganas un mirdzošs smaids.',
      price: '€79–€99',
    },
    en: {
      name: 'Hygiene cleaning',
      subtitle: 'Professional Hygiene',
      description:
        'Professional cleaning with ultrasound, air-flow, and polishing for healthy gums and a brighter smile.',
      price: '€79–€99',
    },
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" aria-hidden="true" focusable="false">
        <rect x="13" y="10" width="14" height="18" rx="2" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M17 16H23M17 20H21" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="26" cy="27" r="5" fill="#FAFAF7" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M24 27H28M26 25V29" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    lv: {
      name: 'Estētiskās plombas',
      subtitle: 'Aesthetic Fillings',
      description:
        'Kompozītmateriāla plombas zobu krāsas tonī. Neredzamas, izturīgas, ar gludu un dabisku virsmu.',
      price: '€89–€149',
    },
    en: {
      name: 'Aesthetic fillings',
      subtitle: 'Tooth-Coloured Fillings',
      description:
        'Composite fillings matched to your tooth shade. Durable, discreet, and shaped for a natural surface.',
      price: '€89–€149',
    },
  },
]

export default function Services({ lang }) {
  const ref = useScrollAnimation()
  const copy = copyFor(servicesCopy, lang)

  return (
    <section id="services" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 text-gold font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-gold" />
            {copy.label}
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-medium mb-4">
            {copy.title}
          </h2>
          <p className="font-sans text-navy/55 text-base md:text-lg max-w-xl leading-relaxed">
            {copy.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
          {services.map((service, i) => {
            const item = copyFor(service, lang)

            return (
              <div
                key={item.name}
                className={`animate-on-scroll delay-${Math.min(i * 100, 400)} bg-white p-8 md:p-10 flex flex-col gap-5 hover:bg-cream transition-colors duration-300 group`}
              >
                <div className="w-14 h-14 flex items-center justify-center border border-warm-gray group-hover:border-gold/40 transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy font-medium mb-0.5">{item.name}</h3>
                  <p className="font-sans text-xs text-gold font-medium tracking-wide uppercase">{item.subtitle}</p>
                </div>
                <p className="font-sans text-navy/60 text-sm leading-relaxed flex-1">{item.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-warm-gray">
                  <span className="font-serif text-lg text-navy font-medium">{item.price}</span>
                  <a
                    href="#contact"
                    className="font-sans text-xs font-semibold text-gold tracking-wide uppercase hover:text-navy transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
                  >
                    {copy.book}
                  </a>
                </div>
              </div>
            )
          })}

          <div className="animate-on-scroll delay-400 bg-navy p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="font-sans text-gold text-xs font-semibold tracking-[0.15em] uppercase">{copy.fallbackLabel}</span>
              <h3 className="font-serif text-2xl text-cream font-medium mt-3 mb-4 leading-snug">
                {copy.fallbackTitle}
              </h3>
              <p className="font-sans text-cream/60 text-sm leading-relaxed">
                {copy.fallbackText}
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold tracking-wide uppercase hover:gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
            >
              {copy.fallbackCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
