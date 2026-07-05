'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Cultivo ecológico',
    description: 'Nuestros olivos crecen en suelos vírgenes de Almería, sin pesticidas ni fertilizantes químicos. Respetamos el ciclo natural de la tierra para obtener frutos de excepcional calidad.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&q=80',
  },
  {
    number: '02',
    title: 'Recolección en el momento óptimo',
    description: 'Cada aceituna se recoge a mano o con vibradora suave cuando alcanza su punto ideal de maduración. Este detalle marca la diferencia entre un aceite ordinario y uno extraordinario.',
    image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=1200&q=80',
  },
  {
    number: '03',
    title: 'Extracción en frío',
    description: 'En menos de 24 horas desde la cosecha, el fruto llega a nuestra almazara. La extracción en frío, por debajo de 27°C, preserva todos los aromas, antioxidantes y polifenoles del aceite.',
    image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=1200&q=80',
  },
  {
    number: '04',
    title: 'Embotellado y trazabilidad',
    description: 'Cada lote se filtra, analiza y embotella con número de cosecha. Desde el árbol hasta tu mesa, sabemos exactamente de dónde viene cada gota de aceite que llega a tus manos.',
    image: '/images/garrafa-5l.png',
  },
]

export default function ProcessScroll() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })

  useEffect(() => {
    const unsub = scrollYProgress.on('change', v => {
      setActiveStep(Math.min(steps.length - 1, Math.floor(v * steps.length)))
    })
    return unsub
  }, [scrollYProgress])

  return (
    <section ref={containerRef} className="relative" style={{ height: `${steps.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white flex">
        {/* Left: image */}
        <div className="w-1/2 relative bg-white">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${step.image}')` }}
              animate={{ opacity: activeStep === i ? 1 : 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>

        {/* Right: content */}
        <div className="w-1/2 flex flex-col justify-center px-16 relative bg-white">
          <div className="absolute top-12 left-16 flex gap-2">
            {steps.map((_, i) => (
              <div key={i} className={`h-px transition-all duration-500 ${activeStep === i ? 'w-10 bg-[#a3af74]' : 'w-4 bg-[#1C1C1A]/20'}`} />
            ))}
          </div>

          <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-6">Nuestro proceso</p>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: activeStep === i ? 1 : 0,
                y: activeStep === i ? 0 : activeStep > i ? -40 : 40,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: activeStep === i ? 'relative' : 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <span className="font-serif text-8xl text-[#1C1C1A]/5 select-none absolute -top-8 -left-4">{step.number}</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1A] mb-6 relative z-10">{step.title}</h2>
              <p className="text-[#1C1C1A]/50 leading-relaxed text-lg max-w-md relative z-10">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
