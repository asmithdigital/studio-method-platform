import { getHealthColor, getHealthLabel } from '@/lib/utils'

export default function HealthIndicator({ score, showLabel = true }) {
  const color = getHealthColor(score)
  const label = getHealthLabel(score)
  return (
    <div className="flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
      {showLabel && <span className="text-sm font-medium" style={{ color }}>{label}</span>}
      {showLabel && <span className="text-xs text-muted">({score})</span>}
    </div>
  )
}
