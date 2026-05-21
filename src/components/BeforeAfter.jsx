import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useRef, useState, useCallback } from 'react'
import { copyFor } from '../i18n'

const sectionCopy = {
  lv: {
    label: 'Rezultāti',
    title: 'Darbs runā pats par sevi.',
    intro: 'Katra procedūra ir pielāgota individuāli. Zemāk — daži mūsu darba piemēri.',
    before: 'Pirms',
    after: 'Pēc',
    note: 'Fotogrāfijas publicētas ar pacientu rakstisku atļauju.',
    cta: 'Pierakstīties konsultācijai →',
  },
  en: {
    label: 'Results',
    title: 'The work speaks for itself.',
    intro: 'Every procedure is individually tailored. Below are a few examples of our work.',
    before: 'Before',
    after: 'After',
    note: 'Photos are published with written patient permission.',
    cta: 'Book a consultation →',
  },
}

const results = [
  {
    img: 'https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=800&q=90&fit=crop',
    split: true,
    lv: {
      treatment: 'Zobu balināšana',
      detail: 'ZOOM procedūra · 1 vizīte',
      outcome: '+8 toņi gaišāki',
    },
    en: {
      treatment: 'Teeth whitening',
      detail: 'ZOOM procedure · 1 visit',
      outcome: '+8 shades brighter',
    },
  },
  {
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=88&fit=crop&crop=faces',
    split: false,
    lv: {
      treatment: 'Porcelāna venīri',
      detail: '8 venīri · 2 vizītes',
      outcome: 'Pilna smaida korekcija',
    },
    en: {
      treatment: 'Porcelain veneers',
      detail: '8 veneers · 2 visits',
      outcome: 'Full smile correction',
    },
  },
  {
    img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=88&fit=crop',
    split: false,
    lv: {
      treatment: 'Implants + kronis',
      detail: 'Straumann implants · 3 mēneši',
      outcome: 'Pilnvērtīga zoba atjaunošana',
    },
    en: {
      treatment: 'Implant + crown',
      detail: 'Straumann implant · 3 months',
      outcome: 'Complete tooth restoration',
    },
  },
]

function SplitCard({ result, labels }) {
  const containerRef = useRef(null)
  const [splitPct, setSplitPct] = useState(50)

  const updateSplit = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setSplitPct(pct)
  }, [])

  const handleMouseMove = (e) => {
    if (e.buttons !== 1) return
    updateSplit(e.clientX)
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
    updateSplit(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden aspect-[4/5] bg-warm-gray cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => updateSplit(e.touches[0].clientX)}
    >
      <img
        src={result.img}
        alt={`${result.treatment} — ${labels.after.toLowerCase()}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable="false"
      />
      <img
        src={result.img}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'sepia(65%) brightness(70%) contrast(112%) saturate(0.7)',
          clipPath: `inset(0 ${100 - splitPct}% 0 0)`,
        }}
        loading="lazy"
        draggable="false"
      />
      <div
        className="absolute inset-y-0 w-0.5 bg-white/90 z-10 -translate-x-px"
        style={{ left: `${splitPct}%` }}
      />
      <div
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-none"
        style={{ left: `${splitPct}%` }}
      >
        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true" focusable="false">
          <path d="M7 5L3 10L7 15M13 5L17 10L13 15" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="absolute top-3 left-3 bg-navy/80 text-cream font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 z-10">
        {labels.before}
      </span>
      <span className="absolute top-3 right-3 bg-gold text-cream font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 z-10">
        {labels.after}
      </span>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/75 to-transparent px-5 pt-10 pb-5 z-10">
        <p className="font-sans text-[11px] font-semibold tracking-[0.16em] uppercase text-gold">
          {result.outcome}
        </p>
      </div>
    </div>
  )
}

function RegularCard({ result }) {
  return (
    <div className="relative overflow-hidden aspect-[4/5] bg-warm-gray group-hover:scale-105 transition-transform duration-700">
      <img
        src={result.img}
        alt={result.treatment}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/70 to-transparent px-5 pt-10 pb-5">
        <p className="font-sans text-[11px] font-semibold tracking-[0.16em] uppercase text-gold">
          {result.outcome}
        </p>
      </div>
    </div>
  )
}

export default function BeforeAfter({ lang }) {
  const ref = useScrollAnimation()
  const copy = copyFor(sectionCopy, lang)
  const labels = { before: copy.before, after: copy.after }

  return (
    <section className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="animate-on-scroll">
            <span className="inline-flex items-center gap-2 text-gold font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="w-8 h-px bg-gold" />
              {copy.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy font-medium">
              {copy.title}
            </h2>
          </div>
          <p className="animate-on-scroll font-sans text-navy/50 text-sm leading-relaxed max-w-xs">
            {copy.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((result, i) => {
            const item = { ...result, ...copyFor(result, lang) }

            return (
              <div
                key={item.treatment}
                className={`animate-on-scroll delay-${i * 200} group flex flex-col`}
              >
                {item.split ? <SplitCard result={item} labels={labels} /> : <RegularCard result={item} />}

                <div className="pt-5 pb-2 border-b border-warm-gray">
                  <h3 className="font-serif text-lg text-navy font-medium">{item.treatment}</h3>
                  <p className="font-sans text-xs text-navy/45 mt-1 tracking-wide">{item.detail}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 animate-on-scroll">
          <p className="font-sans text-xs text-navy/35 text-center sm:text-left">
            {copy.note}
          </p>
          <a
            href="#contact"
            className="font-sans text-sm font-semibold text-gold tracking-wide uppercase hover:text-navy transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
          >
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
