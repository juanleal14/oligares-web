import Hero from '@/components/home/Hero'
import BrandIntro from '@/components/home/BrandIntro'
import Varieties from '@/components/home/Varieties'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import ProcessScroll from '@/components/home/ProcessScroll'
import Testimonials from '@/components/home/Testimonials'
import ContactCTA from '@/components/home/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <Varieties />
      <FeaturedProducts />
      <ProcessScroll />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
