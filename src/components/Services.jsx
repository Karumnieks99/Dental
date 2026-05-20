import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <circle cx="20" cy="20" r="14" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M14 20C14 20 16 24 20 24C24 24 26 20 26 20" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 14V16M16 15.3L17.4 16.8M24 15.3L22.6 16.8" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: 'Zobu Balināšana',
    nameEn: 'Teeth Whitening',
    description: 'Profesionālā balināšana klīnikā ar ZOOM tehnoloģiju — zobi kļūst līdz 8 toņiem gaišāki vienas vizītes laikā.',
    price: '€149 – €299',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <rect x="16" y="8" width="8" height="14" rx="1" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M16 18H24" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M20 22V32" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 32H25" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: 'Zobu Implanti',
    nameEn: 'Dental Implants',
    description: 'Ilgstošs risinājums trūkstošiem zobiem. Straumann implanti ar 10 gadu garantiju un māksliniecisko kronīti.',
    price: '€999 – €1 499',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <path d="M13 12C13 12 11 14 11 18C11 22 14 25 17 26.5C18.5 27.3 19 29 20 31C21 29 21.5 27.3 23 26.5C26 25 29 22 29 18C29 14 27 12 24 12C22.5 12 21.5 13 21 14C20.5 13 19.5 12 18 12H13Z" stroke="#C4975A" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    name: 'Venīri',
    nameEn: 'Porcelain Veneers',
    description: 'Porcelāna plāksnītes perfekta smaida veidošanai. Dabisks, izskatīgs rezultāts ar minimālu iejaukšanos.',
    price: '€450 – €699 / zobs',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <path d="M12 28L16 14" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 14C16 14 17 12 20 12C23 12 24 14 24 14" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 14L28 28" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 23H29" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 28H27" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: 'Higiēnas Tīrīšana',
    nameEn: 'Hygiene Cleaning',
    description: 'Profesionāla zobu tīrīšana ar ultraskaņu, air-flow un polēšanu. Veselīgi smagani un mirdzošs smaids.',
    price: '€79 – €99',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <rect x="13" y="10" width="14" height="18" rx="2" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M17 16H23M17 20H21" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="26" cy="27" r="5" fill="#FAFAF7" stroke="#C4975A" strokeWidth="1.5"/>
        <path d="M24 27H28M26 25V29" stroke="#C4975A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: 'Estētiskās Plombas',
    nameEn: 'Aesthetic Fillings',
    description: 'Kompozītmateriāla plombas zobu krāsas toņā. Neredzamas, izturīgas, ar gludu un dabīgu virsmu.',
    price: '€89 – €149',
  },
]

export default function Services() {
  const ref = useScrollAnimation()

  return (
    <section id="services" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 text-gold font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-gold" />
            Pakalpojumi
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-medium mb-4">
            Estētika un veselība
          </h2>
          <p className="font-sans text-navy/55 text-base md:text-lg max-w-xl leading-relaxed">
            Katrs pakalpojums — pielāgots tieši jums. Mūsu speciālisti izstrādā individuālu ārstēšanas plānu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`animate-on-scroll delay-${Math.min(i * 100, 400)} bg-white p-8 md:p-10 flex flex-col gap-5 hover:bg-cream transition-colors duration-300 group`}
            >
              <div className="w-14 h-14 flex items-center justify-center border border-warm-gray group-hover:border-gold/40 transition-colors duration-300">
                {s.icon}
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy font-medium mb-0.5">{s.name}</h3>
                <p className="font-sans text-xs text-gold font-medium tracking-wide uppercase">{s.nameEn}</p>
              </div>
              <p className="font-sans text-navy/60 text-sm leading-relaxed flex-1">{s.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-warm-gray">
                <span className="font-serif text-lg text-navy font-medium">{s.price}</span>
                <a
                  href="#contact"
                  className="font-sans text-xs font-semibold text-gold tracking-wide uppercase hover:text-navy transition-colors duration-200"
                >
                  Pierakstīties →
                </a>
              </div>
            </div>
          ))}

          {/* Empty 6th cell with CTA */}
          <div className="animate-on-scroll delay-400 bg-navy p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="font-sans text-gold text-xs font-semibold tracking-[0.15em] uppercase">Nav atrasts?</span>
              <h3 className="font-serif text-2xl text-cream font-medium mt-3 mb-4 leading-snug">
                Konsultācija bez maksas
              </h3>
              <p className="font-sans text-cream/60 text-sm leading-relaxed">
                Sazinieties ar mums — mēs atradīsim labāko risinājumu tieši jūsu vajadzībām.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold tracking-wide uppercase hover:gap-3 transition-all duration-200"
            >
              Sazināties →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
