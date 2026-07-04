'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

export default function ContactCTA() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-32 px-6 bg-[#1C1C1A]">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <p className="text-[#a3af74] text-xs tracking-[0.4em] uppercase mb-6">Contacto</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Hablemos de aceite
          </h2>
          <p className="text-white/40 mb-16">
            Para pedidos, distribución o simplemente compartir tu amor por el AOVE.
          </p>
        </FadeIn>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 border border-[#a3af74] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-[#a3af74] text-2xl">✓</span>
            </div>
            <p className="font-serif text-2xl text-white mb-2">Mensaje enviado</p>
            <p className="text-white/40 text-sm">Te responderemos en menos de 24 horas.</p>
          </motion.div>
        ) : (
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">Nombre</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:border-[#a3af74] outline-none transition-colors placeholder:text-white/20"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:border-[#a3af74] outline-none transition-colors placeholder:text-white/20"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:border-[#a3af74] outline-none transition-colors resize-none placeholder:text-white/20"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="px-12 py-4 bg-[#a3af74] text-[#1C1C1A] text-sm tracking-widest uppercase font-medium hover:bg-[#b8c28a] transition-colors duration-300"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
