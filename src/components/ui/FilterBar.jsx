import { cn } from '@/lib/utils'

export default function FilterBar({ filters, active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={cn(
            'px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-150',
            active === f.value
              ? 'bg-navy text-white border-navy'
              : 'border-border text-muted hover:border-ink hover:text-ink bg-white'
          )}
        >
          {f.label}
          {f.count !== undefined && <span className="ml-1 opacity-70">({f.count})</span>}
        </button>
      ))}
    </div>
  )
}
