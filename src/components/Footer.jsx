import { copyFor } from '../i18n'

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true" focusable="false">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true" focusable="false">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true" focusable="false">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.05a8.16 8.16 0 0 0 4.77 1.52V7.14a4.85 4.85 0 0 1-1-.45z"/>
      </svg>
    ),
  },
]

const footerCopy = {
  lv: {
    brand: 'Smile Studio Rīga',
    copyright: 'Visas tiesības aizsargātas.',
    privacy: 'Privātuma politika',
    contact: 'Kontakti',
  },
  en: {
    brand: 'Smile Studio Riga',
    copyright: 'All rights reserved.',
    privacy: 'Privacy Policy',
    contact: 'Contact',
  },
}

export default function Footer({ lang }) {
  const copy = copyFor(footerCopy, lang)

  return (
    <footer className="bg-navy border-t border-cream/10 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5" aria-label={copy.brand}>
            <span className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true" focusable="false">
                <path d="M8 6C8 6 6 8.5 6 12.5C6 16.5 8.5 19 12 21C13.5 21.8 14 23 14 25C14 23 14.5 21.8 16 21C19.5 19 22 16.5 22 12.5C22 8.5 20 6 17 6C15.5 6 14.5 7 14 8C13.5 7 12.5 6 11 6H8Z" fill="#C4975A"/>
              </svg>
            </span>
            <span className="font-serif text-cream/80 font-medium">{copy.brand}</span>
          </div>
          <div className="flex items-center gap-5">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-cream/45 hover:text-cream transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50 rounded-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-cream/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-cream/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {copy.brand}. {copy.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-sans text-xs text-cream/40 hover:text-cream/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50 rounded-sm"
            >
              {copy.privacy}
            </a>
            <a
              href="#contact"
              className="font-sans text-xs text-cream/40 hover:text-cream/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50 rounded-sm"
            >
              {copy.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
