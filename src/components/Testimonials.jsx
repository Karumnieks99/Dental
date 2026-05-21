import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Star } from 'lucide-react'
import { copyFor } from '../i18n'

const testimonialsCopy = {
  lv: {
    label: 'Atsauksmes',
    title: 'Ko saka mūsu pacienti',
    ratingSummary: '4,9 / 5 — balstīts uz 180+ atsauksmēm',
    starsLabel: (count) => `${count} zvaigznes no 5`,
    googleTitle: 'Google atsauksmes',
    googleScore: '4,9 (180 atsauksmes)',
  },
  en: {
    label: 'Reviews',
    title: 'What our patients say',
    ratingSummary: '4.9 / 5 — based on 180+ reviews',
    starsLabel: (count) => `${count} stars out of 5`,
    googleTitle: 'Google reviews',
    googleScore: '4.9 (180 reviews)',
  },
}

const reviews = [
  {
    rating: 5,
    lv: {
      name: 'Marta Kalniņa',
      date: 'Marts 2024',
      treatment: 'Porcelāna venīri',
      text:
        'Dr. Bērziņa ir brīnišķīga speciāliste. Iepriekš baidījos no zobārsta, bet viņas klīnikā viss noritēja pilnīgi nesāpīgi un komfortabli. Venīri izskatās dabiski un skaisti, pat labāk, nekā cerēju.',
    },
    en: {
      name: 'Marta Kalnina',
      date: 'March 2024',
      treatment: 'Porcelain veneers',
      text:
        'Dr. Berzina is a wonderful specialist. I used to be afraid of the dentist, but everything at her clinic was completely painless and comfortable. The veneers look natural and beautiful, even better than I hoped.',
    },
  },
  {
    rating: 5,
    lv: {
      name: 'Jānis Ozoliņš',
      date: 'Janvāris 2024',
      treatment: 'Zobu implants',
      text:
        'Pēc implanta ievietošanas Smile Studio klīnikā esmu pilnīgi apmierināts. Visa procedūra bija profesionāla, personāls — laipns un komunikatīvs. Implants lieliski ieguļas, un komplikāciju nebija.',
    },
    en: {
      name: 'Janis Ozolins',
      date: 'January 2024',
      treatment: 'Dental implant',
      text:
        'I am fully satisfied after having my implant placed at Smile Studio. The whole procedure was professional, and the staff were kind and communicative. The implant fits perfectly, with no complications.',
    },
  },
  {
    rating: 4,
    lv: {
      name: 'Elīna Freimane',
      date: 'Aprīlis 2024',
      treatment: 'ZOOM balināšana',
      text:
        'Pirmo reizi mūžā mani zobi patiešām ir tik balti. Balināšana aizņēma mazāk nekā divas stundas, un rezultāts ir iespaidīgs. Arī cena bija godīga salīdzinājumā ar citām klīnikām Rīgā.',
    },
    en: {
      name: 'Elina Freimane',
      date: 'April 2024',
      treatment: 'ZOOM whitening',
      text:
        'For the first time, my teeth truly look this white. The whitening took less than two hours, and the result is impressive. The price was fair compared with other clinics in Riga.',
    },
  },
]

function Stars({ count, label }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={label(count)}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="star-filled" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials({ lang }) {
  const ref = useScrollAnimation()
  const copy = copyFor(testimonialsCopy, lang)

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white" ref={ref}>
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
          <div className="flex items-center gap-2 mt-2">
            <Stars count={5} label={copy.starsLabel} />
            <span className="font-sans text-sm text-navy/50">{copy.ratingSummary}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-warm-gray">
          {reviews.map((review, i) => {
            const item = copyFor(review, lang)

            return (
              <div
                key={item.name}
                className={`animate-on-scroll delay-${i * 200} bg-white p-8 md:p-10 flex flex-col gap-5 min-w-0`}
              >
                <Stars count={review.rating} label={copy.starsLabel} />

                <blockquote className="font-sans text-navy/70 text-sm leading-relaxed flex-1 italic break-words">
                  “{item.text}”
                </blockquote>

                <div className="pt-5 border-t border-warm-gray flex items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-navy font-medium">{item.name}</p>
                    <p className="font-sans text-[11px] text-gold font-semibold tracking-wide mt-0.5">{item.treatment}</p>
                  </div>
                  <span className="font-sans text-xs text-navy/35 whitespace-nowrap">{item.date}</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-warm-gray">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true" focusable="false">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <p className="font-sans text-xs font-semibold text-navy">{copy.googleTitle}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Stars count={5} label={copy.starsLabel} />
                <span className="font-sans text-[10px] text-navy/50 ml-1">{copy.googleScore}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
