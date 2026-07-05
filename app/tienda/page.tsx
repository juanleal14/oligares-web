import ProductGrid from '@/components/shop/ProductGrid'

export const metadata = { title: 'Tienda — Oligares AOVE Premium' }

export default function TiendaPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-4">Catálogo</p>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1C1C1A] mb-6">AOVE Picual</h1>
          <p className="text-[#1C1C1A]/60 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra selección de AOVE Premium elaborado exclusivamente con la variedad Picual.
            Una misma aceituna, trabajada mediante diferentes procesos de elaboración, da lugar a aceites únicos,
            con perfiles sensoriales, aromas y matices propios que ofrecen experiencias distintas en cada degustación.
          </p>
        </div>
        <ProductGrid />
      </div>
    </div>
  )
}
