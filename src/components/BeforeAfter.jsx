import { useScrollAnimation } from '../hooks/useScrollAnimation'

const results = [
  {
    treatment: 'Zobu balināšana',
    detail: 'ZOOM procedūra · 1 vizīte',
    outcome: '+8 toņi gaišāki',
    img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=88&fit=crop&crop=faces',
  },
  {
    treatment: 'Porcelāna venīri',
    detail: '8 venīri · 2 vizītes',
    outcome: 'Pilnīga smaida korekcija',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=88&fit=crop&crop=faces',
  },
  {
    treatment: 'Implants + kronis',
    detail: 'Straumann implants · 3 mēneši',
    outcome: 'Pilnvērtīga zobu atjaunošana',
    img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=88&fit=crop',
  },
]

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
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {results.map((r, i) => (
            <div
              key={r.treatment}
              className={`animate-on-scroll delay-${i * 200} group flex flex-col`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5] bg-warm-gray">
                <img
                  src={r.img}
                  alt={r.treatment}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Outcome badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/70 to-transparent px-5 pt-10 pb-5">
                  <p className="font-sans text-[11px] font-semibold tracking-[0.16em] uppercase text-gold">
                    {r.outcome}
                  </p>
                </div>
              </div>

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
            className="font-sans text-sm font-semibold text-gold tracking-wide uppercase hover:text-navy transition-colors duration-200"
          >
            Pierakstīties konsultācijai →
          </a>
        </div>

      </div>
    </section>
  )
}
