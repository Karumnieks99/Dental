export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <img
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=2000&q=90&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(11,26,46,0.93) 42%, rgba(11,26,46,0.08) 78%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full pt-24 pb-16">
        <p className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-white/35 mb-12">
          Smile Studio · Rīga
        </p>
        <h1
          className="font-display font-light text-white mb-8 leading-[1.05]"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          Jūsu smaids —<br />
          <span className="italic">mūsu māksla.</span>
        </h1>
        <p className="font-sans text-white/50 text-base font-light tracking-wide mb-14 max-w-sm leading-relaxed">
          Estētiskā zobārstniecība Rīgā.<br />
          Pierakstieties konsultācijai.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-7 py-3.5 bg-gold text-navy font-sans text-[13px] font-medium tracking-widest uppercase hover:bg-gold/85 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
          >
            Pierakstīties
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-7 py-3.5 border border-white/30 text-white font-sans text-[13px] font-medium tracking-widest uppercase hover:border-white/55 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Pakalpojumi
          </a>
        </div>
      </div>
    </section>
  )
}
