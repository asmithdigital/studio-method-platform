import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const icons = { studio_setup: '⚙️', ai_layer: '🤖', training: '📚', individual: '👤' }
  return (
    <div className="card group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <div className="text-3xl mb-4">{icons[service.id]}</div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">{service.tagline}</p>
      <h3 className="font-display text-xl font-bold text-ink mb-3">{service.name}</h3>
      <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{service.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-sm font-medium text-ink">From AUD ${service.price_from.toLocaleString()}</span>
        <Link to="/services" className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
          Learn more <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
