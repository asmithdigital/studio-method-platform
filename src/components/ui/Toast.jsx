import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'

const icons = {
  success: <CheckCircle size={16} className="text-jade" />,
  error: <AlertCircle size={16} className="text-rose" />,
  info: <Info size={16} className="text-blue-500" />,
}

export default function Toast() {
  const { toasts, removeToast } = useUIStore()
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div key={t.id} className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 shadow-lg min-w-64 animate-fade-up">
          {icons[t.type] || icons.info}
          <span className="text-sm text-ink flex-1">{t.message}</span>
          <button onClick={() => removeToast(t.id)} className="text-muted hover:text-ink">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}
