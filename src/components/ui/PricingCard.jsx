import { Check } from 'lucide-react'
import Button from './Button'
import { cn } from '@/lib/utils'

export default function PricingCard({ service, featured = false }) {
  return (
    <div className={cn(
      'rounded-2xl border p-8 flex flex-col',
      featured ? 'bg-navy border-navy text-white' : 'bg-white border-border'
    )}>
      <div className="mb-6">
        <p className={cn('text-xs font-semibold uppercase tracking-widest mb-2', featured ? 'text-gold' : 'text-gold')}>{service.tagline}</p>
        <h3 className={cn('font-display text-xl font-bold mb-2', featured ? 'text-white' : 'text-ink')}>{service.name}</h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className={cn('text-3xl font-bold font-display', featured ? 'text-white' : 'text-ink')}>
            ${service.price_from.toLocaleString()}
          </span>
          <span className={cn('text-sm', featured ? 'text-white/60' : 'text-muted')}> AUD from</span>
        </div>
        <p className={cn('text-sm leading-relaxed', featured ? 'text-white/70' : 'text-muted')}>{service.description}</p>
      </div>
      <ul className="space-y-2.5 flex-1 mb-8">
        {service.features.map((f, i) => (
          <li key={i} className={cn('flex items-start gap-2.5 text-sm', featured ? 'text-white/80' : 'text-muted')}>
            <Check size={14} className={cn('flex-shrink-0 mt-0.5', featured ? 'text-gold' : 'text-jade')} />
            {f}
          </li>
        ))}
      </ul>
      <Button variant={featured ? 'gold' : 'ghost'} className="w-full justify-center">
        {service.id === 'individual' ? 'Get started' : 'Book a call'}
      </Button>
    </div>
  )
}
