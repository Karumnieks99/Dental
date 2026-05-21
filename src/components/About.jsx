import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GraduationCap, Star, Users } from 'lucide-react'

const credentials = [
  { icon: GraduationCap, text: 'RSU Medicīnas fakultāte, zobārstniecības specialitāte' },
  { icon: Star, text: 'Sertificēta estētiskās zobārstniecības speciāliste (EDA)' },
  { icon: Users, text: 'Vairāk nekā 2 400 veiksmīgu ārstēšanas gadījumu' },
]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image side */}
          <div className="animate-on-scroll relative order-2 lg:order-1">
            <div className="relative overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85&fit=crop&crop=faces"
                alt="Dr. Anna Bērziņa — Smile Studio Rīga"
                className="w-full h-full object-cover grayscale-[15%]"
                loading="lazy"
              />
              {/* Gold accent */}
              <div className="absolute top-6 -left-4 w-full h-full border border-gold pointer-events-none hidden lg:block" style={{zIndex:-1}} />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-6 right-6 lg:-right-8 bg-navy text-cream px-6 py-5">
              <p className="font-serif text-4xl font-semibold text-gold">10+</p>
              <p className="font-sans text-xs text-cream/70 mt-1 tracking-wide leading-snug">gadu klīniskās<br/>pieredzes</p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="animate-on-scroll inline-flex items-center gap-2 text-gold font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-6">
              <span className="w-8 h-px bg-gold" />
              Par ārsti
            </span>

            <h2 className="animate-on-scroll delay-100 font-serif text-4xl md:text-5xl text-navy font-medium mb-2">
              Dr. Anna Bērziņa
            </h2>
            <p className="animate-on-scroll delay-100 font-sans text-gold text-sm font-medium tracking-wide mb-8">
              Galvenā ārste & Estētiskās zobārstniecības speciāliste
            </p>

            <div className="animate-on-scroll delay-200 space-y-4 font-sans text-navy/65 text-base leading-relaxed mb-10">
              <p>
                Dr. Anna Bērziņa ir viena no Latvijas vadošajām estētiskās zobārstniecības
                speciālistēm ar vairāk nekā 10 gadu pieredzi augstākā līmeņa klīnikās Rīgā un Eiropā.
              </p>
              <p>
                Viņas pieeja apvieno medicīnisko precizitāti ar māksliniecisko skatījumu —
                katrs ārstēšanas plāns tiek veidots, ņemot vērā pacienta individuālo anatomiju,
                lūpu līniju un smaida estētiku.
              </p>
              <p className="italic font-light text-navy/50">
                "Es uzskatu, ka ideāls smaids nav tikai baltāki zobi — tas ir harmonija,
                kas pieder tieši jums."
              </p>
            </div>

            <ul className="animate-on-scroll delay-300 space-y-4 mb-10">
              {credentials.map(({ icon: Icon, text }) => (
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
                Pierakstīties pie Dr. Bērziņas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
