'use client'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

const timeline = [
  { year: '2010', title: 'Los orígenes', text: 'La familia funda la finca en Almería, apostando por variedades autóctonas abandonadas como la Verdeja.' },
  { year: '2015', title: 'Primera cosecha propia', text: 'Los olivos alcanzan su madurez. La primera extracción en frío produce un aceite que supera todas las expectativas.' },
  { year: '2018', title: 'Certificación ecológica', text: 'Tras tres años de transición, obtenemos el sello de agricultura ecológica. Un compromiso con la tierra y con el consumidor.' },
  { year: '2021', title: 'Apertura al mercado gourmet', text: 'Empezamos a distribuir a restaurantes con estrella Michelin y tiendas gourmet de toda España.' },
  { year: '2024', title: 'Cosecha récord', text: 'La mejor cosecha de nuestra historia. Premiados en varios concursos nacionales de AOVE.' },
]

const values = [
  { icon: '🌿', title: 'Ecológico', text: 'Sin pesticidas, sin fertilizantes químicos. Respetamos el ciclo natural de la tierra.' },
  { icon: '🤲', title: 'Artesanal', text: 'Recolección manual, extracción en menos de 24h. El tiempo y el cuidado marcan la diferencia.' },
  { icon: '♻️', title: 'Sostenible', text: 'Energías renovables en nuestra almazara. Envases reciclables. Huella de carbono mínima.' },
  { icon: '📍', title: 'Trazable', text: 'Cada botella lleva el número de lote y cosecha. Sabes exactamente de dónde viene tu aceite.' },
]

export default function ConocenosPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601039641847-7857b994d704?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1A]/70 to-[#1C1C1A]/30" />
        <div className="relative z-10 text-center px-6">
          <motion.p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Almería, España
          </motion.p>
          <motion.h1 className="font-serif text-5xl md:text-7xl text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Nuestra historia
          </motion.h1>
          <motion.p className="text-white/60 text-lg max-w-lg mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            Una familia, un olivar y una obsesión: el mejor aceite de oliva virgen extra del mundo.
          </motion.p>
        </div>
      </div>

      {/* Timeline */}
      <section className="py-32 px-6 bg-[#1C1C1A]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl text-white text-center mb-20">Una historia de dedicación</h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-[80px] md:left-1/2 top-0 bottom-0 w-px bg-[#a3af74]/20" />
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div className={`flex gap-8 md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                      <span className="text-[#a3af74] font-serif text-4xl">{item.year}</span>
                      <h3 className="font-serif text-2xl text-white mt-2 mb-3">{item.title}</h3>
                      <p className="text-white/50 leading-relaxed">{item.text}</p>
                    </div>
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full border-2 border-[#a3af74] bg-[#1C1C1A] mt-3" />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-4 text-center">Lo que nos guía</p>
            <h2 className="font-serif text-4xl text-[#1C1C1A] text-center mb-20">Nuestros valores</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="p-8 border border-[#1C1C1A]/10 hover:border-[#a3af74] transition-colors duration-500">
                  <span className="text-4xl block mb-6">{v.icon}</span>
                  <h3 className="font-serif text-xl text-[#1C1C1A] mb-3">{v.title}</h3>
                  <p className="text-[#1C1C1A]/50 text-sm leading-relaxed">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Image grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
            'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=600&q=80',
            'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=600&q=80',
            'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=600&q=80',
          ].map((img, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="h-64 bg-cover bg-center hover:scale-[1.02] transition-transform duration-500"
                style={{ backgroundImage: `url('${img}')` }}
              />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}
