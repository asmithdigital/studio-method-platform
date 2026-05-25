import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StepIndicator({ steps, current }) {
  return (
    <div className="flex items-center gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold',
              i < current ? 'bg-jade text-white' : i === current ? 'bg-gold text-white' : 'bg-surface text-muted border border-border'
            )}>
              {i < current ? <Check size={14} /> : i + 1}
            </div>
            <span className={cn('text-xs mt-1 whitespace-nowrap', i === current ? 'text-gold font-medium' : 'text-muted')}>{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div className={cn('h-px w-12 mx-1 mb-5', i < current ? 'bg-jade' : 'bg-border')} />
          )}
        </div>
      ))}
    </div>
  )
}
