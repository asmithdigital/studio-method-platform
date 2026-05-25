import { cn } from '@/lib/utils'

export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  disabled,
  loading,
  type = 'button',
  onClick,
  ...props
}) {
  const base = 'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    gold: 'bg-gold text-white hover:bg-gold-light',
    navy: 'bg-navy text-white hover:bg-navy-mid',
    ghost: 'border border-border text-ink hover:bg-surface',
    danger: 'bg-rose text-white hover:opacity-90',
    link: 'text-gold hover:text-gold-light underline',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  )
}
