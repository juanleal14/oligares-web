'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

const varieties = [
  {
    name: 'Picual',
    tagline: 'Intensidad y carácter',
    description: 'La variedad más plantada de España. Frutado intenso, con notas de tomate, hierba fresca y un picante elegante que persiste en el paladar. Alta en polifenoles, de extraordinaria estabilidad.',
    aroma: ['Tomate verde', 'Hierba fresca', 'Almendra'],
  },
  {
    name: 'Verdeja',
    tagline: 'Delicadeza floral',
    description: 'Variedad autóctona y casi desconocida fuera de Almería. Suave, aromática, con notas florales y almendradas que la hacen única. Una joya del olivar andaluz que cultivamos con especial esmero.',
    aroma: ['Flor de azahar', 'Almendra dulce', 'Manzana'],
  },
  {
    name: 'Arbequina',
    tagline: 'Suavidad y equilibrio',
    description: 'La variedad favorita para quienes se inician en el mundo del AOVE. Frutado suave, notas de almendra y manzana, con un amargor y picante muy ligeros. Perfecta para ensaladas y postres.',
    aroma: ['Manzana madura', 'Plátano', 'Hierba dulce'],
  },
]

export default function Varieties() {
  const [active, setActive] = useState(0)

  return (
    <section className="pt-16 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-4 text-center">Nuestras variedades</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1A] text-center mb-20">
            Tres aceites, tres personalidades
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-2">
            {varieties.map((v, i) => (
              <motion.button
                key={v.name}
                onClick={() => setActive(i)}
                className={`w-full text-left px-8 py-6 border transition-all duration-500 ${
                  active === i ? 'border-[#a3af74] bg-white' : 'border-[#1C1C1A]/10 hover:border-[#1C1C1A]/30 bg-white/50'
                }`}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-2xl text-[#1C1C1A]">{v.name}</span>
                  <span className="text-xs text-[#a3af74] tracking-widest uppercase">{v.tagline}</span>
                </div>
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#1C1C1A]/50 text-sm leading-relaxed mt-3 mb-4">{v.description}</p>
                      <div className="flex gap-3 flex-wrap">
                        {v.aroma.map(a => (
                          <span key={a} className="text-xs px-3 py-1 border border-[#a3af74]/40 text-[#a3af74]">{a}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>

          <div
            className="relative h-[500px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url('/images/inicio-feature.png')` }}
          />
        </div>
      </div>
    </section>
  )
}
