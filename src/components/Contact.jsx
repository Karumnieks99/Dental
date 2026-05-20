import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react'
import { useState } from 'react'

const WHATSAPP_NUMBER = '37123456789'
const WHATSAPP_MESSAGE = 'Labdien! Vēlos pierakstīties konsultācijai Smile Studio Rīga.'

const contactItems = [
  {
    icon: MapPin,
    label: 'Adrese',
    value: 'Brīvības iela 58, Rīga, LV-1011',
    link: 'https://maps.google.com/?q=Br%C4%ABv%C4%ABbas+iela+58+R%C4%ABga',
  },
  {
    icon: Phone,
    label: 'Tālrunis',
    value: '+371 2345 6789',
    link: 'tel:+37123456789',
  },
  {
    icon: Mail,
    label: 'E-pasts',
    value: 'info@smilestudioriga.lv',
    link: 'mailto:info@smilestudioriga.lv',
  },
  {
    icon: Clock,
    label: 'Darba laiks',
    value: 'P–Pk 9:00–19:00, Sestd. 9:00–14:00',
    link: null,
  },
]

export default function Contact() {
  const ref = useScrollAnimation()
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Info */}
          <div>
            <span className="animate-on-scroll inline-flex items-center gap-2 text-gold font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-6">
              <span className="w-8 h-px bg-gold" />
              Kontakti
            </span>
            <h2 className="animate-on-scroll delay-100 font-serif text-4xl md:text-5xl text-cream font-medium mb-4">
              Sāciet ar bezmaksas<br className="hidden md:block"/> konsultāciju
            </h2>
            <p className="animate-on-scroll delay-100 font-sans text-cream/55 text-base leading-relaxed mb-10">
              Aizpildiet formu vai sazinieties ar mums tieši. Mēs atbildam 24 stundu laikā.
            </p>

            {/* Contact list */}
            <ul className="animate-on-scroll delay-200 space-y-5 mb-10">
              {contactItems.map(({ icon: Icon, label, value, link }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center border border-cream/15">
                    <Icon size={15} className="text-gold" />
                  </span>
                  <div>
                    <p className="font-sans text-[11px] text-cream/40 font-semibold tracking-[0.12em] uppercase mb-0.5">{label}</p>
                    {link ? (
                      <a href={link} className="font-sans text-cream/80 text-sm hover:text-cream transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="font-sans text-cream/80 text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <div className="animate-on-scroll delay-300">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white font-sans text-sm font-semibold tracking-wide hover:bg-[#1dba58] transition-colors duration-200"
              >
                <MessageCircle size={18} />
                Rakstīt WhatsApp
              </a>
            </div>

            {/* Map placeholder */}
            <div className="animate-on-scroll delay-400 mt-10 overflow-hidden border border-cream/10" style={{height: 200}}>
              <iframe
                title="Smile Studio Rīga atrašanās vieta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.022609831655!2d24.105183477!3d56.951438774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb354fcb8e1%3A0x1b1bba4a3d5f0f8e!2sBr%C4%ABv%C4%ABbas%20iela%2058%2C%20Centra%20rajons%2C%20R%C4%ABga!5e0!3m2!1slv!2slv!4v1700000000000!5m2!1slv!2slv"
                width="100%"
                height="200"
                style={{ border: 0, filter: 'grayscale(80%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="animate-on-scroll delay-200">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 flex items-center justify-center border border-gold mb-6">
                  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                    <path d="M6 16L13 23L26 9" stroke="#C4975A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-cream mb-3">Paldies!</h3>
                <p className="font-sans text-cream/60 text-sm leading-relaxed max-w-xs">
                  Jūsu pieteikums ir saņemts. Mēs sazināsimies ar jums 24 stundu laikā.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-serif text-2xl text-cream font-medium mb-2">Pierakstīties konsultācijai</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-[11px] text-cream/50 font-semibold tracking-[0.1em] uppercase block mb-2">
                      Vārds, Uzvārds *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Anna Bērziņa"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border border-cream/15 text-cream placeholder:text-cream/25 font-sans text-sm px-4 py-3 outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] text-cream/50 font-semibold tracking-[0.1em] uppercase block mb-2">
                      Tālrunis *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+371 2000 0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border border-cream/15 text-cream placeholder:text-cream/25 font-sans text-sm px-4 py-3 outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[11px] text-cream/50 font-semibold tracking-[0.1em] uppercase block mb-2">
                    Pakalpojums
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-navy border border-cream/15 text-cream font-sans text-sm px-4 py-3 outline-none focus:border-gold transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Izvēlēties pakalpojumu...</option>
                    <option value="whitening">Zobu balināšana</option>
                    <option value="implants">Zobu implanti</option>
                    <option value="veneers">Venīri</option>
                    <option value="hygiene">Higiēnas tīrīšana</option>
                    <option value="fillings">Estētiskās plombas</option>
                    <option value="consult">Bezmaksas konsultācija</option>
                  </select>
                </div>

                <div>
                  <label className="font-sans text-[11px] text-cream/50 font-semibold tracking-[0.1em] uppercase block mb-2">
                    Ziņojums
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Papildu jautājumi vai komentāri..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-cream/15 text-cream placeholder:text-cream/25 font-sans text-sm px-4 py-3 outline-none focus:border-gold transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-navy font-sans text-sm font-semibold tracking-wide uppercase hover:bg-gold/85 transition-colors duration-200 mt-2"
                >
                  Nosūtīt pieteikumu
                </button>

                <p className="font-sans text-[11px] text-cream/30 text-center leading-relaxed">
                  Iesniedzot formu, jūs piekrītat mūsu privātuma politikai.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
