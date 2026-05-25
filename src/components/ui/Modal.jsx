import { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Modal({ open, onClose, title, children, size = 'md' }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  const sizes = { sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl' }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className={cn('relative w-full bg-white rounded-2xl shadow-xl', sizes[size])}>
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-surface text-muted hover:text-ink transition-colors">
              <X size={18} />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
