import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#contact"
      aria-label="Pierakstīties konsultācijai"
      className={`hidden md:inline-flex fixed bottom-8 right-6 z-50 items-center gap-2 px-5 py-3 bg-navy text-cream font-sans text-xs font-semibold tracking-widest uppercase rounded-sm shadow-lg hover:bg-gold hover:text-navy transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      Pierakstīties →
    </a>
  )
}
