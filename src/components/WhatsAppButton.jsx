import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '37123456789'
const WHATSAPP_MESSAGE = 'Labdien! Vēlos pierakstīties konsultācijai Smile Studio Rīga.'

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rakstīt WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#1dba58] transition-colors duration-200 md:hidden"
      style={{ animation: 'pulse-wa 2.5s ease-in-out infinite' }}
    >
      <MessageCircle size={26} />
    </a>
  )
}
