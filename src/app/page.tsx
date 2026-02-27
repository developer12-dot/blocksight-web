import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TheLoop from '@/components/TheLoop'
import Products from '@/components/Products'
import Technology from '@/components/Technology'
import Enterprise from '@/components/Enterprise'
import Comparison from '@/components/Comparison'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TheLoop />
      <Products />
      <Technology />
      <Enterprise />
      <Comparison />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
