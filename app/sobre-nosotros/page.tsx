'use client'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

const sections = [
  {
    title: 'Misión',
    content: (
      <>
        <strong>OLIGARES</strong> es una empresa almeriense que trabaja con una misión: llevar al mundo los mejores AOVEs de España, combinando{' '}
        <strong>tradición, innovación y excelencia</strong> en cada gota. Apostamos por un{' '}
        <strong>modelo sostenible</strong> que protege la tierra y garantiza un producto auténtico, nacido en las mejores zonas olivareras del país. Con{' '}
        <strong>OLIGARES</strong>, cada plato se convierte en una experiencia gourmet que refleja lo mejor de la cultura mediterránea.
      </>
    ),
  },
  {
    title: 'Visión',
    content: 'Ser el referente internacional del AOVE premium español, poniendo en valor las variedades autóctonas y el territorio que las hace únicas.',
  },
]

const whyUs = [
  {
    title: 'Una dieta sana',
    content: (
      <>
        <strong>OLIGARES</strong> no es solo un aceite, es parte de la Dieta Mediterránea. Cada gota aporta antioxidantes, vitaminas y grasas saludables que cuidan el organismo, mientras realza cualquier plato. Comer bien es vivir mejor, y con <strong>OLIGARES</strong>, la salud empieza en la mesa.
      </>
    ),
  },
  {
    title: 'Sostenibilidad',
    content: (
      <>
        Cultivamos con respeto a la tierra. Nuestras almazaras trabajan con <strong>procesos responsables</strong> que reducen el impacto ambiental, y contamos con una gama <strong>100% ecológica</strong> que refuerza nuestro compromiso con el futuro del planeta.
      </>
    ),
  },
  {
    title: 'Origen España',
    content: (
      <>
        España es líder mundial en producción de aceite de oliva, y OLIGARES recoge lo mejor de nuestras tierras. Desde los matices suaves de <strong>Huelva</strong>, pasando por la riqueza de <strong>Cuenca</strong>, hasta la intensidad única de <strong>Jaén</strong>, cada botella encierra <strong>tradición, territorio y excelencia</strong>.
      </>
    ),
  },
  {
    title: '100% Sabor',
    content: (
      <>
        En OLIGARES sabemos que el sabor es la esencia de todo. Por eso contamos con <strong>10 variedades</strong> de AOVE, <strong>ecológico</strong> y <strong>2 cosechas tempranas</strong> que despiertan los sentidos: suaves y delicados para los paladares más sutiles, intensos y profundos para quienes buscan carácter y autenticidad.
      </>
    ),
  },
]

export default function SobreNosotrosPage() {
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
            Sobre Nosotros
          </motion.h1>
          <motion.p className="text-white/60 text-lg max-w-lg mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            Una familia, un olivar y una obsesión: el mejor AOVE del mundo.
          </motion.p>
        </div>
      </div>

      {/* Misión & Visión */}
      <section className="py-32 px-6 bg-[#1C1C1A]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.15}>
              <div>
                <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-6">{s.title}</p>
                <p className="text-white/70 leading-relaxed text-lg">{s.content}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ¿Por qué Oligares? */}
      <section className="py-32 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-4 text-center">Nuestros valores</p>
            <h2 className="font-serif text-4xl text-[#1C1C1A] text-center mb-20">¿Por qué Oligares?</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-8">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-10 border border-[#1C1C1A]/10 hover:border-[#a3af74] transition-colors duration-500">
                  <h3 className="font-serif text-2xl text-[#1C1C1A] mb-5">{item.title}</h3>
                  <p className="text-[#1C1C1A]/60 leading-relaxed">{item.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
            'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=600&q=80',
            'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=600&q=80',
            'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=600&q=80',
          ].map((img, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="h-64 bg-cover bg-center hover:scale-[1.02] transition-transform duration-500" style={{ backgroundImage: `url('${img}')` }} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}
