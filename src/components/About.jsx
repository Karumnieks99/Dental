import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GraduationCap, Star, Users } from 'lucide-react'
import { copyFor } from '../i18n'

const aboutCopy = {
  lv: {
    imageAlt: 'Dr. Anna Bērziņa — Smile Studio Rīga',
    badgeValue: '10+',
    badgeText: (
      <>
        gadu klīniskās<br />pieredzes
      </>
    ),
    label: 'Par ārsti',
    name: 'Dr. Anna Bērziņa',
    role: 'Galvenā ārste un estētiskās zobārstniecības speciāliste',
    paragraphs: [
      'Dr. Anna Bērziņa ir viena no Latvijas vadošajām estētiskās zobārstniecības speciālistēm ar vairāk nekā 10 gadu pieredzi augstākā līmeņa klīnikās Rīgā un Eiropā.',
      'Viņas pieeja apvieno medicīnisku precizitāti ar māksliniecisku skatījumu. Katrs ārstēšanas plāns tiek veidots, ņemot vērā pacienta individuālo anatomiju, lūpu līniju un smaida estētiku.',
    ],
    quote:
      'Es uzskatu, ka ideāls smaids nav tikai baltāki zobi; tā ir harmonija, kas pieder tieši jums.',
    cta: 'Pierakstīties pie Dr. Bērziņas',
    credentials: [
      { icon: GraduationCap, text: 'RSU Medicīnas fakultāte, zobārstniecības specialitāte' },
      { icon: Star, text: 'Sertificēta estētiskās zobārstniecības speciāliste (EDA)' },
      { icon: Users, text: 'Vairāk nekā 2 400 veiksmīgu ārstēšanas gadījumu' },
    ],
  },
  en: {
    imageAlt: 'Dr. Anna Berzina — Smile Studio Riga',
    badgeValue: '10+',
    badgeText: (
      <>
        years of clinical<br />experience
      </>
    ),
    label: 'About the doctor',
    name: 'Dr. Anna Berzina',
    role: 'Lead dentist and aesthetic dentistry specialist',
    paragraphs: [
      'Dr. Anna Berzina is one of Latvia’s leading aesthetic dentistry specialists, with more than 10 years of experience in high-level clinics in Riga and across Europe.',
      'Her approach combines medical precision with an artistic eye. Every treatment plan is shaped around the patient’s anatomy, lip line, and smile aesthetics.',
    ],
    quote:
      'I believe an ideal smile is not just about whiter teeth; it is harmony that belongs uniquely to you.',
    cta: 'Book with Dr. Berzina',
    credentials: [
      { icon: GraduationCap, text: 'RSU Faculty of Medicine, dentistry specialty' },
      { icon: Star, text: 'Certified aesthetic dentistry specialist (EDA)' },
      { icon: Users, text: 'More than 2,400 successful treatment cases' },
    ],
  },
}

export default function About({ lang }) {
  const ref = useScrollAnimation()
  const copy = copyFor(aboutCopy, lang)

  return (
    <section id="about" className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-on-scroll relative order-2 lg:order-1">
            <div className="relative overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85&fit=crop&crop=faces"
                alt={copy.imageAlt}
                className="w-full h-full object-cover grayscale-[15%]"
                loading="lazy"
              />
              <div className="absolute top-6 -left-4 w-full h-full border border-gold pointer-events-none hidden lg:block" style={{zIndex:-1}} />
            </div>

            <div className="absolute bottom-6 right-6 lg:-right-8 bg-navy text-cream px-6 py-5">
              <p className="font-serif text-4xl font-semibold text-gold">{copy.badgeValue}</p>
              <p className="font-sans text-xs text-cream/70 mt-1 tracking-wide leading-snug">{copy.badgeText}</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="animate-on-scroll inline-flex items-center gap-2 text-gold font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-6">
              <span className="w-8 h-px bg-gold" />
              {copy.label}
            </span>

            <h2 className="animate-on-scroll delay-100 font-serif text-4xl md:text-5xl text-navy font-medium mb-2">
              {copy.name}
            </h2>
            <p className="animate-on-scroll delay-100 font-sans text-gold text-sm font-medium tracking-wide mb-8">
              {copy.role}
            </p>

            <div className="animate-on-scroll delay-200 space-y-4 font-sans text-navy/65 text-base leading-relaxed mb-10">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="italic font-light text-navy/50">
                “{copy.quote}”
              </p>
            </div>

            <ul className="animate-on-scroll delay-300 space-y-4 mb-10">
              {copy.credentials.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-gold" />
                  </span>
                  <span className="font-sans text-sm text-navy/70">{text}</span>
                </li>
              ))}
            </ul>

            <div className="animate-on-scroll delay-400 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-navy text-cream font-sans text-sm font-medium tracking-wide hover:bg-navy/85 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
              >
                {copy.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
