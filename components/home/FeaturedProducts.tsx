'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '@/data/products'
import FadeIn from '@/components/ui/FadeIn'

const featured = products

const productImages: Record<string, string> = {
  'garrafa-picual': '/images/garrafa-5l.png',
  'botella-picual-500': '/images/botella-500ml.png',
  'botella-cosecha-temprana-500': '/images/botella-500ml.png',
  'botella-cosecha-temprana-100': '/images/botella-500ml.png',
}

export default function FeaturedProducts() {
  return (
    <section className="py-32 px-6 bg-[#E8DEC8]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-4 text-center">Nuestra selección</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1A] text-center mb-4">
            Productos destacados
          </h2>
          <p className="text-[#1C1C1A]/50 text-center mb-20 max-w-md mx-auto">
            Cada botella es el resultado de años de experiencia y el compromiso con la máxima calidad.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1}>
              <motion.div
                className="group relative bg-[#F5F0E8] overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${productImages[product.id]}')` }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Gold overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[#a3af74]/0 group-hover:bg-[#a3af74]/15 transition-colors duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#1C1C1A] text-[#a3af74] text-xs px-3 py-1 tracking-widest">
                    {product.format}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-xs text-[#a3af74] tracking-widest uppercase mb-2">{product.variety}</p>
                  <h3 className="font-serif text-xl text-[#1C1C1A] mb-2">{product.name}</h3>
                  <p className="text-[#1C1C1A]/50 text-sm leading-relaxed mb-6 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-[#1C1C1A]">
                      {product.price ? `€${product.price.toFixed(2)}` : '—'}
                    </span>
                    {!product.soldOut ? (
                      <Link
                        href={`https://wa.me/34000000000?text=Hola, me interesa: ${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-widest uppercase text-[#1C1C1A] border-b border-[#a3af74] pb-0.5 hover:text-[#a3af74] transition-colors"
                      >
                        Pedir
                      </Link>
                    ) : (
                      <span className="text-xs text-[#1C1C1A]/40 uppercase tracking-widest">Agotado</span>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-16">
            <Link
              href="/tienda"
              className="inline-block px-12 py-4 border border-[#1C1C1A] text-[#1C1C1A] text-sm tracking-widest uppercase hover:bg-[#1C1C1A] hover:text-white transition-all duration-400"
            >
              Ver toda la tienda
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
