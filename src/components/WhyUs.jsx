import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Cpu, HeartHandshake, UserCheck, Award } from 'lucide-react'

const reasons = [
  {
    icon: Cpu,
    title: 'Moderna tehnoloģija',
    titleEn: 'Modern Equipment',
    text: '3D skenēšana, digitālā rentgenoloģija, CEREC keramikas vainagi vienā vizītē. Precizitāte, ko nodrošina tikai labākais aprīkojums.',
  },
  {
    icon: HeartHandshake,
    title: 'Nesāpīgas procedūras',
    titleEn: 'Pain-Free Experience',
    text: 'Mūsu klīnikā sāpes nav norma. Izmantojam silto anestēziju, rampes paņēmienu un sedāciju — ārstēšana ir komfortabla katram.',
  },
  {
    icon: UserCheck,
    title: 'Individuāla pieeja',
    titleEn: 'Personalised Care',
    text: 'Katra vizīte sākas ar 30 minūšu konsultāciju. Jūsu mērķi, bažas un vēlmes veido ārstēšanas plānu no pirmās līdz pēdējai vizītei.',
  },
  {
    icon: Award,
    title: '10+ gadu pieredze',
    titleEn: '10+ Years of Expertise',
    text: 'No 2014. gada esam palīdzējuši vairāk nekā 2 400 pacientiem Rīgā. Mūsu pieredze ir jūsu garantija — ne tikai vārds uz sienas.',
  },
]

export default function WhyUs() {
  const ref = useScrollAnimation()

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="flex flex-col items-center text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 text-gold font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-gold" />
            Kāpēc mēs
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-medium mb-4">
            Atšķirība, ko jūtat
          </h2>
          <p className="font-sans text-navy/55 text-base md:text-lg max-w-lg leading-relaxed">
            Smile Studio Rīga nav vienkārši zobārstniecība. Tā ir vieta, kur zinātniskā precizitāte satiek estētiku.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-gray">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`animate-on-scroll delay-${Math.min(i * 100, 400)} bg-white p-8 flex flex-col gap-4 group hover:bg-navy transition-all duration-300`}
            >
              <div className="w-11 h-11 flex items-center justify-center border border-warm-gray group-hover:border-gold/40 transition-colors duration-300">
                <r.icon size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-navy group-hover:text-cream font-medium transition-colors duration-300 mb-0.5">
                  {r.title}
                </h3>
                <p className="font-sans text-[10px] text-gold font-semibold tracking-[0.15em] uppercase">
                  {r.titleEn}
                </p>
              </div>
              <p className="font-sans text-sm text-navy/60 group-hover:text-cream/65 leading-relaxed transition-colors duration-300">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
