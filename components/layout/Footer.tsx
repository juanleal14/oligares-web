import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1A] text-white/70 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-serif text-3xl text-[#a3af74] tracking-widest uppercase mb-4">Oligares</p>
          <p className="text-sm leading-relaxed">
            AOVE ecológico de máxima calidad.<br />
            Desde el corazón de Almería.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[#a3af74] mb-5">Navegación</p>
          <ul className="space-y-3 text-sm">
            {[['/', 'Inicio'], ['/tienda', 'Tienda'], ['/b2b', 'B2B'], ['/sobre-nosotros', 'Sobre Nosotros']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#a3af74] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[#a3af74] mb-5">Contacto</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-[#a3af74]" />
              <a href="mailto:info@oligares.com" className="hover:text-white transition-colors">info@oligares.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-[#a3af74]" />
              <span>+34 000 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#a3af74]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="3"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              <a href="https://instagram.com/oligares" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@oligares</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-xs text-center text-white/30">
        © {new Date().getFullYear()} Oligares. Todos los derechos reservados. Almería, España.
      </div>
    </footer>
  )
}
