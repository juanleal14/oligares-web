'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

const envases = [
  {
    id: 'garrafa',
    name: 'Garrafas',
    description: 'Envase más adecuado para mayores cantidades de aceite. Su diseño facilita el manejo y la dosificación, lo que la convierte en una opción práctica tanto para uso doméstico como para restauración o industria.',
    sizes: ['3L', '5L'],
    image: '/images/garrafa-b2b.jpg',
  },
  {
    id: 'botella-vidrio',
    name: 'Botella de Vidrio',
    description: 'Las botellas de vidrio son muy populares porque protegen el aceite de la luz, lo que contribuye a conservar sus propiedades.',
    sizes: ['100ml', '250ml', '500ml', '1L'],
    image: '/images/botella-vidrio-b2b.jpg',
  },
  {
    id: 'botella-plastico',
    name: 'Botella de Plástico',
    description: 'Este tipo de botella es más resistente y suele resultar más económica.',
    sizes: ['100ml', '250ml', '500ml', '750ml', '1L'],
    image: '/images/botella-plastico-b2b.png',
  },
  {
    id: 'latas',
    name: 'Latas de Metal',
    description: 'Comunes para aceites de mayor volumen. Ofrecen protección contra la luz y son resistentes a impactos.',
    sizes: ['100ml', '250ml', '500ml', '1L', '3L'],
    image: '/images/latas-b2b.jpg',
  },
  {
    id: 'estuche',
    name: 'Estuche de Catas',
    description: 'Presentación premium con nuestras principales variedades en formato degustación. Pensado para amantes del AOVE, chefs y el regalo definitivo para los más exigentes.',
    sizes: ['Pack degustación'],
    image: '/images/estuche-b2b.png',
  },
]

export default function B2BPage() {
  const [active, setActive] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-[#1C1C1A]/65" />
        <div className="relative z-10 text-center">
          <motion.p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Para profesionales
          </motion.p>
          <motion.h1 className="font-serif text-5xl md:text-6xl text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Nuestros envases
          </motion.h1>
        </div>
      </div>

      {/* Carousel */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 flex-wrap justify-center mb-16">
            {envases.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActive(i)}
                className={`px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 ${
                  active === i ? 'bg-[#1C1C1A] text-white' : 'border border-[#1C1C1A]/20 text-[#1C1C1A]/60 hover:border-[#1C1C1A] hover:text-[#1C1C1A]'
                }`}
              >
                {e.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="relative h-[500px] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-center ${envases[active].id === 'garrafa' ? 'bg-contain bg-no-repeat' : 'bg-cover'}`}
                  style={{ backgroundImage: `url('${envases[active].image}')` }}
                />
              </div>
              <div>
                <div className="w-8 h-px bg-[#a3af74] mb-8" />
                <h2 className="font-serif text-4xl text-[#1C1C1A] mb-6">{envases[active].name}</h2>
                <p className="text-[#1C1C1A]/60 leading-relaxed text-lg mb-10">{envases[active].description}</p>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#a3af74] mb-4">Disponible en:</p>
                  <div className="flex flex-wrap gap-3">
                    {envases[active].sizes.map(s => (
                      <span key={s} className="border border-[#1C1C1A]/20 text-[#1C1C1A] text-sm px-4 py-2">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-10 pt-10 border-t border-[#1C1C1A]/10">
                  <p className="text-sm text-[#1C1C1A]/50 mb-2">Bajo reserva</p>
                  <a href="mailto:oligaresaove@gmail.com" className="text-[#1C1C1A] font-medium hover:text-[#a3af74] transition-colors">
                    oligaresaove@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Grid de tarjetas */}
      <div className="pb-24 px-6 bg-[#E8DEC8]">
        <div className="max-w-6xl mx-auto pt-24">
          <FadeIn>
            <h2 className="font-serif text-3xl text-[#1C1C1A] text-center mb-16">Todos los formatos</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {envases.filter(e => e.id !== 'estuche').map((e, i) => (
              <FadeIn key={e.id} delay={i * 0.1}>
                <div className="bg-white p-8 h-full">
                  <h3 className="font-serif text-xl text-[#1C1C1A] mb-4">{e.name}</h3>
                  <p className="text-[#1C1C1A]/60 text-sm leading-relaxed mb-6">{e.description}</p>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#a3af74] mb-3">Disponible en:</p>
                    <ul className="space-y-1">
                      {e.sizes.map(s => (
                        <li key={s} className="text-sm text-[#1C1C1A]/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a3af74] flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
