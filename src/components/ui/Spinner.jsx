export default function Spinner({ size = 'md', color = 'gold' }) {
  const sizes = { sm: 'h-4 w-4', md: 'h-8 w-8', lg: 'h-12 w-12' }
  const colors = { gold: 'border-gold', navy: 'border-navy', white: 'border-white' }
  return (
    <div className={`animate-spin rounded-full border-2 border-transparent ${colors[color]} border-t-current ${sizes[size]}`} />
  )
}
