'use client'
import { useRef, useEffect } from 'react'
import { useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (inView) animate(motionVal, to, { duration: 2 })
  }, [inView, motionVal, to])

  useEffect(() => {
    return spring.on('change', v => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const stats = [
  { value: 2018, suffix: '', label: 'Año de fundación' },
  { value: 120, suffix: 'ha', label: 'Hectáreas de olivar' },
  { value: 6, suffix: '', label: 'Variedades cultivadas' },
]

export default function BrandIntro() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <FadeIn direction="left">
          <div className="relative">
            <div className="w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: `url('/images/hero-campo.jpg')` }} />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#a3af74]/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#a3af74]/30" />
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-6">Sobre nosotros</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1A] leading-tight mb-8">
              Donde la tradición<br />se convierte en excelencia
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-[#1C1C1A]/60 leading-relaxed mb-6">
              En el corazón de Almería, cultivamos nuestros olivos con respeto absoluto por la tierra.
              Cada aceituna se recolecta a mano en el momento óptimo de maduración para garantizar
              la máxima concentración de aromas y polifenoles.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-[#1C1C1A]/60 leading-relaxed mb-12">
              Nuestro proceso de extracción en frío, en menos de 24 horas desde la cosecha,
              preserva toda la riqueza del fruto. El resultado: un aceite de personalidad
              única, ecológico y trazable desde el árbol hasta tu mesa.
            </p>
          </FadeIn>

          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-[#1C1C1A]/10">
            {stats.map(({ value, suffix, label }) => (
              <FadeIn key={label} delay={0.5}>
                <div>
                  <p className="font-serif text-3xl text-[#a3af74] mb-1">
                    <Counter to={value} suffix={suffix} />
                  </p>
                  <p className="text-xs text-[#1C1C1A]/50 uppercase tracking-wider">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
