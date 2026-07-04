'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

const testimonials = [
  {
    quote: 'Un aceite de una personalidad extraordinaria. El Picual de Oligares tiene esa intensidad frutal que buscas para platos de alta cocina. Lo uso en mi restaurante desde hace tres temporadas.',
    author: 'Carlos Morales',
    role: 'Chef, Restaurante El Cortijo — Almería',
  },
  {
    quote: 'La Verdeja es una revelación. Nunca había probado un aceite con tanta delicadeza floral. Lo uso para acabar ensaladas, pescados y hasta postres. Una joya.',
    author: 'Ana Gómez',
    role: 'Sommelier de aceites, Madrid',
  },
  {
    quote: 'El pack degustación fue el regalo perfecto para mis clientes gourmet. La presentación es impecable y la calidad del aceite habla por sí sola.',
    author: 'Miguel Torres',
    role: 'Distribuidor gourmet, Barcelona',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(v => (v + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-32 px-6 bg-[#F5F0E8]">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-16">Lo que dicen de nosotros</p>
        </FadeIn>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
            >
              <p className="font-serif text-2xl md:text-3xl text-[#1C1C1A] leading-relaxed mb-10 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div>
                <p className="font-medium text-[#1C1C1A]">{testimonials[active].author}</p>
                <p className="text-sm text-[#1C1C1A]/50 mt-1">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${active === i ? 'w-8 h-2 bg-[#a3af74]' : 'w-2 h-2 bg-[#1C1C1A]/20 hover:bg-[#a3af74]/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
