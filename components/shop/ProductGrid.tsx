'use client'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  return (
    <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  )
}
