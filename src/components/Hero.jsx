export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#FAFAF8' }}
    >

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full pt-40 pb-16">

        {/* Eyebrow */}
        <p className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-navy/35 mb-12">
          Smile Studio · Rīga
        </p>

        {/* Headline */}
        <h1
          className="font-display font-light text-navy mb-8 leading-[1.05]"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          Jūsu smaids —<br />
          <span className="italic">mūsu māksla.</span>
        </h1>

        {/* Subheading */}
        <p className="font-sans text-navy/45 text-base font-light tracking-wide mb-14 max-w-sm leading-relaxed">
          Estētiskā zobārstniecība Rīgā.<br />
          Pierakstieties konsultācijai.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-7 py-3.5 bg-navy text-cream font-sans text-[13px] font-medium tracking-widest uppercase hover:bg-navy/85 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
          >
            Pierakstīties
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-7 py-3.5 border border-navy/20 text-navy font-sans text-[13px] font-medium tracking-widest uppercase hover:border-navy/45 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-navy"
          >
            Pakalpojumi
          </a>
        </div>

      </div>

      {/* Full-width hero image */}
      <div className="relative w-full" style={{ height: '58vh' }}>
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=2000&q=90&fit=crop"
          alt="Smile Studio Rīga — estētiskā zobārstniecība"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Top fade */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #FAFAF8, transparent)' }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #FAFAF8, transparent)' }}
        />
      </div>

    </section>
  )
}
