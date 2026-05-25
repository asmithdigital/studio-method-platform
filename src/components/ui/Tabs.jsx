import { cn } from '@/lib/utils'

export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-1 border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-all duration-150',
            active === tab.id
              ? 'border-gold text-gold'
              : 'border-transparent text-muted hover:text-ink'
          )}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className={cn('ml-2 px-1.5 py-0.5 rounded-full text-xs', active === tab.id ? 'bg-gold/10 text-gold' : 'bg-surface text-muted')}>
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
