export interface Product {
  id: string
  name: string
  variety: 'Picual'
  format: '100ml' | '500ml' | '5L'
  price: number | null
  description: string
  detail: string
  soldOut?: boolean
  soldOutMessage?: string
}

export const products: Product[] = [
  {
    id: 'garrafa-picual',
    name: 'Garrafa AOVE 5L — Picual',
    variety: 'Picual',
    format: '5L',
    price: 39.90,
    description: 'El mejor AOVE Picual en gran formato. Para cocinas profesionales y hogares que exigen calidad sin límites.',
    detail: 'Extracción en frío, primera prensada. Alto contenido en polifenoles y antioxidantes.',
  },
  {
    id: 'botella-picual-500',
    name: 'Botella AOVE 500ml — Picual',
    variety: 'Picual',
    format: '500ml',
    price: 13.90,
    description: 'Frutado intenso, con notas de tomate verde y un picante elegante. El Picual de Oligares en su formato más popular.',
    detail: 'Monovarietal Picual, cosecha 25/26. Extracción en frío en menos de 24h desde la recolección.',
  },
  {
    id: 'botella-cosecha-temprana-500',
    name: 'Botella AOVE 500ml — Cosecha Temprana Picual',
    variety: 'Picual',
    format: '500ml',
    price: null,
    description: 'Nuestro aceite más exclusivo. Intensidad máxima, verde brillante, aromas únicos de la cosecha más prematura.',
    detail: 'Stock agotado. Vuelve en septiembre con la nueva cosecha.',
    soldOut: true,
    soldOutMessage: 'Stock vendido — Vuelve en septiembre',
  },
  {
    id: 'botella-cosecha-temprana-100',
    name: 'Botella AOVE 100ml — Cosecha Temprana Picual',
    variety: 'Picual',
    format: '100ml',
    price: null,
    description: 'La cosecha temprana en formato degustación. El regalo perfecto para amantes del AOVE más selecto.',
    detail: 'Stock agotado. Vuelve en septiembre con la nueva cosecha.',
    soldOut: true,
    soldOutMessage: 'Stock vendido — Vuelve en septiembre',
  },
]
