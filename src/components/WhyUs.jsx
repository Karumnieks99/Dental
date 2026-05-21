import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Cpu, HeartHandshake, UserCheck, Award } from 'lucide-react'
import { copyFor } from '../i18n'

const whyCopy = {
  lv: {
    label: 'Kāpēc mēs',
    title: 'Atšķirība, ko jūtat',
    intro:
      'Smile Studio Rīga nav vienkārši zobārstniecības klīnika. Tā ir vieta, kur zinātniska precizitāte satiekas ar estētiku.',
  },
  en: {
    label: 'Why choose us',
    title: 'A difference you can feel',
    intro:
      'Smile Studio Riga is more than a dental clinic. It is where scientific precision meets aesthetics.',
  },
}

const reasons = [
  {
    icon: Cpu,
    lv: {
      title: 'Mūsdienīgas tehnoloģijas',
      subtitle: 'Modern Equipment',
      text:
        '3D skenēšana, digitālā rentgenoloģija un CEREC keramikas kroņi vienā vizītē. Precizitāte, ko nodrošina labākais aprīkojums.',
    },
    en: {
      title: 'Modern technology',
      subtitle: 'Digital Dentistry',
      text:
        '3D scanning, digital radiology, and CEREC ceramic crowns in one visit. Precision supported by high-quality equipment.',
    },
  },
  {
    icon: HeartHandshake,
    lv: {
      title: 'Komfortabla ārstēšana',
      subtitle: 'Pain-Free Experience',
      text:
        'Sāpēm mūsu klīnikā nav jābūt normai. Izmantojam saudzīgu anestēziju un sedāciju, lai ārstēšana būtu komfortabla katram pacientam.',
    },
    en: {
      title: 'Comfortable treatment',
      subtitle: 'Pain-Free Experience',
      text:
        'Pain does not have to be part of dental care. We use gentle anesthesia and sedation to keep treatment comfortable.',
    },
  },
  {
    icon: UserCheck,
    lv: {
      title: 'Individuāla pieeja',
      subtitle: 'Personalised Care',
      text:
        'Katra vizīte sākas ar 30 minūšu konsultāciju. Jūsu mērķi, bažas un vēlmes veido ārstēšanas plānu no pirmās līdz pēdējai vizītei.',
    },
    en: {
      title: 'Personalised care',
      subtitle: 'Individual Planning',
      text:
        'Every visit starts with a 30-minute consultation. Your goals, concerns, and wishes shape the treatment plan from start to finish.',
    },
  },
  {
    icon: Award,
    lv: {
      title: '10+ gadu pieredze',
      subtitle: '10+ Years of Expertise',
      text:
        'Kopš 2014. gada esam palīdzējuši vairāk nekā 2 400 pacientiem Rīgā. Mūsu pieredze ir jūsu garantija, ne tikai solījums.',
    },
    en: {
      title: '10+ years of expertise',
      subtitle: 'Proven Experience',
      text:
        'Since 2014, we have helped more than 2,400 patients in Riga. Our experience is your assurance, not just a promise.',
    },
  },
]

export default function WhyUs({ lang }) {
  const ref = useScrollAnimation()
  const copy = copyFor(whyCopy, lang)

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
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
          <p className="font-sans text-navy/55 text-base md:text-lg max-w-lg leading-relaxed">
            {copy.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-gray">
          {reasons.map((reason, i) => {
            const item = copyFor(reason, lang)

            return (
              <div
                key={item.title}
                className={`animate-on-scroll delay-${Math.min(i * 100, 400)} bg-white p-8 flex flex-col gap-4 group hover:bg-navy transition-all duration-300`}
              >
                <div className="w-11 h-11 flex items-center justify-center border border-warm-gray group-hover:border-gold/40 transition-colors duration-300">
                  <reason.icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-navy group-hover:text-cream font-medium transition-colors duration-300 mb-0.5">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[10px] text-gold font-semibold tracking-[0.15em] uppercase">
                    {item.subtitle}
                  </p>
                </div>
                <p className="font-sans text-sm text-navy/60 group-hover:text-cream/65 leading-relaxed transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
