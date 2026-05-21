import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useRef, useState, useCallback } from 'react'

const results = [
  {
    treatment: 'Zobu balināšana',
    detail: 'ZOOM procedūra · 1 vizīte',
    outcome: '+8 toņi gaišāki',
    // Split before/after — same close-up, CSS filter yellows the left half
    img: 'https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=800&q=90&fit=crop',
    split: true,
  },
  {
    treatment: 'Porcelāna venīri',
    detail: '8 venīri · 2 vizītes',
    outcome: 'Pilnīga smaida korekcija',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=88&fit=crop&crop=faces',
    split: true,
  },
  {
    treatment: 'Implants + kronis',
    detail: 'Straumann implants · 3 mēneši',
    outcome: 'Pilnvērtīga zobu atjaunošana',
    img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=88&fit=crop',
    split: true,
  },
]

function SplitCard({ r }) {
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
      {/* After — full bright image */}
      <img
        src={r.img}
        alt={`${r.treatment} — pēc`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable="false"
      />
      {/* Before — same image, yellowed, clipped to the left of the split */}
      <img
        src={r.img}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'sepia(65%) brightness(70%) contrast(112%) saturate(0.7)',
          clipPath: `inset(0 ${100 - splitPct}% 0 0)`,
        }}
        loading="lazy"
        draggable="false"
      />
      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white/90 z-10 -translate-x-px"
        style={{ left: `${splitPct}%` }}
      />
      {/* Drag handle */}
      <div
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-none"
        style={{ left: `${splitPct}%` }}
      >
        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
          <path d="M7 5L3 10L7 15M13 5L17 10L13 15" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Labels */}
      <span className="absolute top-3 left-3 bg-navy/80 text-cream font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 z-10">
        Pirms
      </span>
      <span className="absolute top-3 right-3 bg-gold text-cream font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 z-10">
        Pēc
      </span>
      {/* Outcome badge */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/75 to-transparent px-5 pt-10 pb-5 z-10">
        <p className="font-sans text-[11px] font-semibold tracking-[0.16em] uppercase text-gold">
          {r.outcome}
        </p>
      </div>
    </div>
  )
}

function RegularCard({ r }) {
  return (
    <div className="relative overflow-hidden aspect-[4/5] bg-warm-gray group-hover:scale-105 transition-transform duration-700">
      <img
        src={r.img}
        alt={r.treatment}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/70 to-transparent px-5 pt-10 pb-5">
        <p className="font-sans text-[11px] font-semibold tracking-[0.16em] uppercase text-gold">
          {r.outcome}
        </p>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const ref = useScrollAnimation()

  return (
    <section className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="animate-on-scroll">
            <span className="inline-flex items-center gap-2 text-gold font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="w-8 h-px bg-gold" />
              Rezultāti
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy font-medium">
              Darbs runā pats par sevi.
            </h2>
          </div>
          <p className="animate-on-scroll font-sans text-navy/50 text-sm leading-relaxed max-w-xs">
            Katra procedūra ir pielāgota individuāli. Zemāk — daži no mūsu darba piemēriem.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((r, i) => (
            <div
              key={r.treatment}
              className={`animate-on-scroll delay-${i * 200} group flex flex-col`}
            >
              {r.split ? <SplitCard r={r} /> : <RegularCard r={r} />}

              {/* Info */}
              <div className="pt-5 pb-2 border-b border-warm-gray">
                <h3 className="font-serif text-lg text-navy font-medium">{r.treatment}</h3>
                <p className="font-sans text-xs text-navy/45 mt-1 tracking-wide">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note + CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 animate-on-scroll">
          <p className="font-sans text-xs text-navy/35 text-center sm:text-left">
            Fotogrāfijas publicētas ar pacientu rakstisku atļauju.
          </p>
          <a
            href="#contact"
            className="font-sans text-sm font-semibold text-gold tracking-wide uppercase hover:text-navy transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
          >
            Pierakstīties konsultācijai →
          </a>
        </div>

      </div>
    </section>
  )
}
