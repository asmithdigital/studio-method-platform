import Button from './Button'

export default function EmptyState({ icon, title, description, action, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="font-display text-lg font-semibold text-ink mb-2">{title}</h3>
      {description && <p className="text-muted text-sm max-w-xs mb-6">{description}</p>}
      {action && <Button onClick={onAction}>{action}</Button>}
    </div>
  )
}
