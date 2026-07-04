'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', onScroll)

    // Animate title words
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('.word')
      gsap.fromTo(words,
        { opacity: 0, y: 80, rotateX: -40 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.3 }
      )
    }

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const words = ['Descubre', 'nuestro', 'AOVE.']

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 scale-110">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1A]/60 via-[#1C1C1A]/40 to-[#1C1C1A]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          Almería · Cosecha 25/26 · 100% Ecológico
        </motion.p>

        <h1
          ref={titleRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8"
          style={{ perspective: '800px' }}
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-4">{word}</span>
          ))}
        </h1>

        <motion.p
          className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Tradición, sostenibilidad y excelencia desde el corazón de Andalucía.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <Link
            href="/tienda"
            className="px-10 py-4 bg-[#a3af74] text-[#1C1C1A] text-sm tracking-widest uppercase font-medium hover:bg-[#b8c28a] transition-colors duration-300"
          >
            Comprar ahora
          </Link>
          <Link
            href="/sobre-nosotros"
            className="px-10 py-4 border border-white/30 text-white text-sm tracking-widest uppercase hover:border-[#a3af74] hover:text-[#a3af74] transition-colors duration-300"
          >
            Nuestra historia
          </Link>
        </motion.div>
      </div>

    </section>
  )
}
