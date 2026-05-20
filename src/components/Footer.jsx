export default function Footer() {
  return (
    <footer className="bg-navy border-t border-cream/10 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M8 6C8 6 6 8.5 6 12.5C6 16.5 8.5 19 12 21C13.5 21.8 14 23 14 25C14 23 14.5 21.8 16 21C19.5 19 22 16.5 22 12.5C22 8.5 20 6 17 6C15.5 6 14.5 7 14 8C13.5 7 12.5 6 11 6H8Z" fill="#C4975A"/>
            </svg>
          </span>
          <span className="font-serif text-cream/80 font-medium">Smile Studio Rīga</span>
        </div>

        <p className="font-sans text-cream/30 text-xs text-center">
          © {new Date().getFullYear()} Smile Studio Rīga. Visas tiesības aizsargātas.
        </p>

        <div className="flex items-center gap-6">
          <span className="font-sans text-xs text-cream/40">
            Privātuma politika
          </span>
          <a href="#contact" className="font-sans text-xs text-cream/40 hover:text-cream/70 transition-colors duration-200">
            Kontakti
          </a>
        </div>
      </div>
    </footer>
  )
}
