import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { copyFor } from '../i18n'

const navCopy = {
  lv: {
    homeLabel: 'Smile Studio Rīga — sākumlapa',
    navLabel: 'Galvenā navigācija',
    openMenu: 'Atvērt izvēlni',
    closeMenu: 'Aizvērt izvēlni',
    cta: 'Pierakstīties',
    switchToLv: 'Pārslēgt uz latviešu valodu',
    switchToEn: 'Switch to English',
    links: [
      { label: 'Pakalpojumi', href: '#services' },
      { label: 'Par mums', href: '#about' },
      { label: 'Atsauksmes', href: '#testimonials' },
      { label: 'Kontakti', href: '#contact' },
    ],
  },
  en: {
    homeLabel: 'Smile Studio Riga — home',
    navLabel: 'Primary navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    cta: 'Book a visit',
    switchToLv: 'Pārslēgt uz latviešu valodu',
    switchToEn: 'Switch to English',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
}

function LanguageSwitch({ lang, setLang }) {
  const copy = copyFor(navCopy, lang)

  return (
    <div className="flex items-center gap-1 font-sans text-xs font-semibold tracking-[0.12em]">
      <button
        type="button"
        onClick={() => setLang('lv')}
        aria-label={copy.switchToLv}
        aria-pressed={lang === 'lv'}
        className={`px-0.5 focus:outline-none focus:ring-2 focus:ring-navy rounded-sm transition-colors duration-200 ${
          lang === 'lv'
            ? 'text-navy border-b border-gold pb-px'
            : 'text-navy/40 hover:text-navy/70'
        }`}
      >
        LV
      </button>
      <span className="text-navy/20">/</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-label={copy.switchToEn}
        aria-pressed={lang === 'en'}
        className={`px-0.5 focus:outline-none focus:ring-2 focus:ring-navy rounded-sm transition-colors duration-200 ${
          lang === 'en'
            ? 'text-navy border-b border-gold pb-px'
            : 'text-navy/40 hover:text-navy/70'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const copy = copyFor(navCopy, lang)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream border-b border-warm-gray shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#hero" aria-label={copy.homeLabel} className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-navy rounded-sm">
          <span className="w-7 h-7 flex items-center justify-center">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true" focusable="false">
              <path d="M8 6C8 6 6 8.5 6 12.5C6 16.5 8.5 19 12 21C13.5 21.8 14 23 14 25C14 23 14.5 21.8 16 21C19.5 19 22 16.5 22 12.5C22 8.5 20 6 17 6C15.5 6 14.5 7 14 8C13.5 7 12.5 6 11 6H8Z" fill="#C4975A"/>
            </svg>
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-semibold text-navy text-lg tracking-tight">Smile Studio</span>
            <span className="text-[10px] font-sans font-medium text-gold tracking-[0.12em] uppercase">Rīga</span>
          </div>
        </a>

        <nav aria-label={copy.navLabel} className="hidden md:flex items-center gap-8">
          {copy.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-navy/70 hover:text-navy transition-colors duration-200 tracking-wide focus:outline-none focus:ring-2 focus:ring-navy rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitch lang={lang} setLang={setLang} />
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 bg-navy text-cream font-sans text-sm font-medium tracking-wide hover:bg-navy/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
          >
            {copy.cta}
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-navy p-1 focus:outline-none focus:ring-2 focus:ring-navy"
          onClick={() => setOpen(!open)}
          aria-label={open ? copy.closeMenu : copy.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-cream border-t border-warm-gray px-6 py-6 flex flex-col gap-5">
          {copy.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-base font-medium text-navy/80 hover:text-navy focus:outline-none focus:ring-2 focus:ring-navy rounded-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-1">
            <LanguageSwitch lang={lang} setLang={setLang} />
          </div>
          <a
            href="#contact"
            className="mt-2 px-5 py-3 bg-navy text-cream font-sans text-sm font-medium text-center tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
            onClick={() => setOpen(false)}
          >
            {copy.cta}
          </a>
        </div>
      )}
    </header>
  )
}
