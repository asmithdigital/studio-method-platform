import { Bell, Search } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'
import { isDemoMode } from '@/lib/demoMode'

export default function TopBar({ title, subtitle }) {
  const { addToast } = useUIStore()

  return (
    <>
      {isDemoMode && (
        <div className="bg-gold/10 border-b border-gold/20 px-6 py-2 text-xs text-gold font-medium flex items-center justify-center gap-2">
          <span>🔑</span>
          Demo mode — using placeholder data. Add your API keys in <code className="font-mono bg-gold/10 px-1 rounded">.env.local</code> to go live.
        </div>
      )}
      <header className="h-14 bg-white border-b border-border px-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-base font-bold text-ink">{title}</h1>
          {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => addToast('Search coming soon', 'info')} className="p-2 rounded-lg hover:bg-surface text-muted hover:text-ink transition-colors">
            <Search size={16} />
          </button>
          <button onClick={() => addToast('No new notifications', 'info')} className="relative p-2 rounded-lg hover:bg-surface text-muted hover:text-ink transition-colors">
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose rounded-full" />
          </button>
        </div>
      </header>
    </>
  )
}
