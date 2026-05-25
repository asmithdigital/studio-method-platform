import { cn } from '@/lib/utils'

export default function ProgressBar({ value = 0, max = 100, color = 'gold', className = '' }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  const colors = { gold: 'bg-gold', jade: 'bg-jade', rose: 'bg-rose', navy: 'bg-navy', blue: 'bg-blue-500' }
  return (
    <div className={cn('w-full bg-surface rounded-full h-2', className)}>
      <div className={cn('h-2 rounded-full transition-all duration-500', colors[color])} style={{ width: `${pct}%` }} />
    </div>
  )
}
