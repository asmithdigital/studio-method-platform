import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StatCard({ label, value, change, changeLabel, icon, color = 'gold' }) {
  const positive = change >= 0
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide">{label}</p>
          <p className={cn('text-2xl font-bold mt-1', color === 'gold' ? 'text-ink' : 'text-ink')}>{value}</p>
        </div>
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gold">
            {icon}
          </div>
        )}
      </div>
      {change !== undefined && (
        <div className={cn('flex items-center gap-1 text-xs font-medium mt-1', positive ? 'text-jade' : 'text-rose')}>
          {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span>{positive ? '+' : ''}{change}%</span>
          {changeLabel && <span className="text-muted font-normal">{changeLabel}</span>}
        </div>
      )}
    </div>
  )
}
