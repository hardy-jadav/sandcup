import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Vision from '../components/Vision'
import Initiatives from '../components/Initiatives'
import News from '../components/News'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Initiatives />
      <News />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
