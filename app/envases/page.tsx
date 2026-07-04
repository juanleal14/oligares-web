'use client'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

const envases = [
  {
    name: 'Lata de Aluminio',
    subtitle: '250ml',
    description: 'El aluminio es el material más protector para el aceite de oliva. Bloquea completamente la luz y el oxígeno, los dos grandes enemigos del AOVE. Perfecto para regalar, viajar y preservar el máximo aroma.',
    features: ['Protección total a la luz', 'Ligero y resistente', 'Ideal para regalo', 'Reciclable 100%'],
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=900&q=80',
    color: '#a3af74',
  },
  {
    name: 'Botella de Cristal',
    subtitle: '250ml y 500ml',
    description: 'Cristal oscuro de alta densidad que filtra hasta el 99% de la luz UV. Elegante, sofisticada, pensada para el uso diario en casa y para quien valora tanto la calidad del aceite como la presentación en la mesa.',
    features: ['Cristal UV premium', 'Tap rosca hermética', 'Etiqueta ecológica', 'Línea ecológica certificada'],
    image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=900&q=80',
    color: '#4A5240',
  },
  {
    name: 'Garrafa',
    subtitle: '5 litros',
    description: 'Para familias con alto consumo y cocinas profesionales que no quieren comprometer la calidad. Alimentaria de alta densidad, con grifo dispensador y tapa hermética. El mejor AOVE en el formato más económico.',
    features: ['Plástico alimentario HDPE', 'Grifo dispensador', 'Óptima relación calidad/precio', 'Para restauración y hogar'],
    image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=900&q=80',
    color: '#8A9B6E',
  },
  {
    name: 'Estuche de Cata',
    subtitle: 'Pack degustación',
    description: 'Nuestra presentación más exclusiva. Un estuche con nuestras principales variedades en formato degustación, pensado para amantes del AOVE, chefs, sommeliers y el regalo perfecto para los más exigentes.',
    features: ['3 variedades monovarietales', 'Presentación de lujo', 'Ficha de cata incluida', 'El regalo definitivo'],
    image: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=900&q=80',
    color: '#a3af74',
  },
]

export default function EnvasesPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-[#1C1C1A]/60" />
        <div className="relative z-10 text-center">
          <motion.p
            className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Diseño y funcionalidad
          </motion.p>
          <motion.h1
            className="font-serif text-5xl md:text-6xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Nuestros envases
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {envases.map((envase, i) => (
          <FadeIn key={envase.name} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative h-[500px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${envase.image}')` }}
                />
                <div className="absolute bottom-6 right-6 bg-white/90 px-4 py-2">
                  <span className="font-serif text-lg text-[#1C1C1A]">{envase.subtitle}</span>
                </div>
              </div>

              <div>
                <div className="w-8 h-px mb-8" style={{ backgroundColor: envase.color }} />
                <h2 className="font-serif text-4xl text-[#1C1C1A] mb-6">{envase.name}</h2>
                <p className="text-[#1C1C1A]/60 leading-relaxed text-lg mb-10">{envase.description}</p>
                <ul className="space-y-3">
                  {envase.features.map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm text-[#1C1C1A]/70">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: envase.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
