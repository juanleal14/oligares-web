import FadeIn from '@/components/ui/FadeIn'

const steps = [
  {
    number: '01',
    title: 'Cultivo ecológico',
    description: 'Nuestros olivos crecen en suelos vírgenes de Almería, sin pesticidas ni fertilizantes químicos. Respetamos el ciclo natural de la tierra para obtener frutos de excepcional calidad.',
  },
  {
    number: '02',
    title: 'Recolección en el momento óptimo',
    description: 'Cada aceituna se recoge a mano o con vibradora suave cuando alcanza su punto ideal de maduración. Este detalle marca la diferencia entre un aceite ordinario y uno extraordinario.',
  },
  {
    number: '03',
    title: 'Extracción en frío',
    description: 'En menos de 24 horas desde la cosecha, el fruto llega a nuestra almazara. La extracción en frío, por debajo de 27°C, preserva todos los aromas, antioxidantes y polifenoles del aceite.',
  },
  {
    number: '04',
    title: 'Embotellado y trazabilidad',
    description: 'Cada lote se filtra, analiza y embotella con número de cosecha. Desde el árbol hasta tu mesa, sabemos exactamente de dónde viene cada gota de aceite que llega a tus manos.',
  },
]

export default function ProcessScroll() {
  return (
    <section className="pt-16 pb-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-[#8a9660] font-semibold text-xs tracking-[0.4em] uppercase mb-20 text-center">Nuestro proceso</p>
        </FadeIn>

        <div className="divide-y divide-[#1C1C1A]/10">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="py-12 grid md:grid-cols-[160px_1fr] gap-6 md:gap-16">
                <div className="flex items-baseline gap-4 md:block">
                  <span className="font-serif font-semibold text-5xl text-[#8a9660]/70">{step.number}</span>
                  <h3 className="font-serif text-2xl text-[#1C1C1A] md:mt-2">{step.title}</h3>
                </div>
                <p className="text-[#1C1C1A]/70 leading-relaxed text-lg">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
