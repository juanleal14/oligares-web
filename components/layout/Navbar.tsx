'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/b2b', label: 'B2B' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 backdrop-blur-md bg-[#1C1C1A]/80 shadow-lg' : 'py-6 bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-widest text-[#a3af74] uppercase">
            Oligares
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex gap-10">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 relative group ${
                    pathname === href ? 'text-[#a3af74]' : scrolled ? 'text-white/80 hover:text-[#a3af74]' : 'text-white/80 hover:text-[#a3af74]'
                  }`}
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#a3af74] transition-all duration-300 ${pathname === href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#1C1C1A] flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl text-white hover:text-[#a3af74] transition-colors"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
