import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import FloatingCTA from './components/FloatingCTA'

const WhyUs = lazy(() => import('./components/WhyUs'))
const BeforeAfter = lazy(() => import('./components/BeforeAfter'))
const Testimonials = lazy(() => import('./components/Testimonials'))

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Suspense fallback={null}>
          <WhyUs />
          <BeforeAfter />
          <Testimonials />
        </Suspense>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingCTA />
    </>
  )
}
