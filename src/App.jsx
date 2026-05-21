import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import FloatingCTA from './components/FloatingCTA'
import { metaByLang } from './i18n'

const WhyUs = lazy(() => import('./components/WhyUs'))
const BeforeAfter = lazy(() => import('./components/BeforeAfter'))
const Testimonials = lazy(() => import('./components/Testimonials'))

export default function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'lv'
    return window.localStorage.getItem('site-language') === 'en' ? 'en' : 'lv'
  })

  useEffect(() => {
    const meta = metaByLang[lang]
    document.documentElement.lang = meta.htmlLang
    document.title = meta.title

    const description = document.querySelector('meta[name="description"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')

    description?.setAttribute('content', meta.description)
    ogTitle?.setAttribute('content', meta.title)
    ogDescription?.setAttribute('content', meta.description)
    ogLocale?.setAttribute('content', meta.ogLocale)
    twitterTitle?.setAttribute('content', meta.title)
    twitterDescription?.setAttribute('content', meta.description)
    window.localStorage.setItem('site-language', lang)
  }, [lang])

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Suspense fallback={null}>
          <WhyUs lang={lang} />
          <BeforeAfter lang={lang} />
          <Testimonials lang={lang} />
        </Suspense>
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
      <FloatingCTA lang={lang} />
    </>
  )
}
