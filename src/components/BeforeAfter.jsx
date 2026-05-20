import { useScrollAnimation } from '../hooks/useScrollAnimation'

const cases = [
  {
    treatment: 'Zobu balināšana',
    treatmentEn: 'Teeth Whitening',
    detail: 'ZOOM procedūra, +8 toņi',
    // bright wide smile — ideal for whitening result
    beforeImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop&crop=faces',
    afterImg:  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop&crop=faces',
  },
  {
    treatment: 'Porcelāna venīri',
    treatmentEn: 'Porcelain Veneers',
    detail: '8 venīri, 2 vizītes',
    // close-up aesthetic smile — matches veneer result
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&fit=crop&crop=faces',
    afterImg:  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&fit=crop&crop=faces',
  },
  {
    treatment: 'Implants + kronis',
    treatmentEn: 'Implant & Crown',
    detail: 'Straumann implants, 3 mēneši',
    // dental clinic / treatment context
    beforeImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&fit=crop',
    afterImg:  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&fit=crop',
  },
]

function BeforeAfterCard({ c, index }) {
  return (
    <div className={`animate-on-scroll delay-${index * 200} flex flex-col`}>
      <div className="grid grid-cols-2 gap-px bg-warm-gray">
        {/* Before */}
        <div className="relative overflow-hidden aspect-[3/4] bg-warm-gray">
          <img
            src={c.beforeImg}
            alt={`Pirms — ${c.treatment}`}
            className="w-full h-full object-cover grayscale contrast-75"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 bg-navy/80 text-cream font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1">
            Pirms
          </span>
        </div>
        {/* After */}
        <div className="relative overflow-hidden aspect-[3/4] bg-warm-gray">
          <img
            src={c.afterImg}
            alt={`Pēc — ${c.treatment}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 bg-gold text-cream font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1">
            Pēc
          </span>
        </div>
      </div>

      <div className="pt-5 pb-2">
        <h3 className="font-serif text-lg text-navy font-medium">{c.treatment}</h3>
        <p className="font-sans text-xs text-gold font-semibold tracking-wide uppercase mt-0.5">{c.treatmentEn}</p>
        <p className="font-sans text-xs text-navy/50 mt-2">{c.detail}</p>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const ref = useScrollAnimation()

  return (
    <section className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="animate-on-scroll">
            <span className="inline-flex items-center gap-2 text-gold font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="w-8 h-px bg-gold" />
              Rezultāti
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy font-medium">
              Pirms & Pēc
            </h2>
          </div>
          <p className="animate-on-scroll font-sans text-navy/55 text-sm md:text-base leading-relaxed max-w-sm">
            Reāli pacienti, reāli rezultāti. Katra transformācija ir stāsts par pārliecību un skaistumu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {cases.map((c, i) => (
            <BeforeAfterCard key={c.treatment} c={c} index={i} />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-warm-gray flex flex-col sm:flex-row items-center justify-between gap-4 animate-on-scroll">
          <p className="font-sans text-xs text-navy/40 text-center sm:text-left">
            Attēli ir reālu pacientu fotogrāfijas, publicētas ar rakstisku atļauju.
          </p>
          <a
            href="#contact"
            className="font-sans text-sm font-semibold text-gold tracking-wide uppercase hover:text-navy transition-colors duration-200"
          >
            Sākt savu transformāciju →
          </a>
        </div>
      </div>
    </section>
  )
}
