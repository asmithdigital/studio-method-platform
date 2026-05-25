import { format, formatDistanceToNow, parseISO } from 'date-fns'

export function formatCurrency(amount, currency = 'AUD') {
  return `${currency} $${amount.toLocaleString('en-AU')}`
}

export function formatDate(date) {
  if (!date) return '—'
  try {
    const d = typeof date === 'string' ? parseISO(date) : date
    return format(d, 'd MMM yyyy')
  } catch {
    return date
  }
}

export function formatRelativeTime(date) {
  if (!date) return '—'
  try {
    const d = typeof date === 'string' ? parseISO(date) : date
    return formatDistanceToNow(d, { addSuffix: true })
  } catch {
    return date
  }
}

export function truncateText(text, max = 120) {
  if (!text) return ''
  return text.length > max ? text.slice(0, max) + '…' : text
}

export function generateInitials(name) {
  if (!name) return '??'
  const parts = name.trim().split(' ')
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function getStatusColor(status) {
  const map = {
    new: 'bg-blue-100 text-blue-700',
    contacted: 'bg-purple-100 text-purple-700',
    qualified: 'bg-amber-100 text-amber-700',
    proposal_sent: 'bg-orange-100 text-orange-700',
    won: 'bg-green-100 text-green-700',
    lost: 'bg-red-100 text-red-700',
    active: 'bg-jade/10 text-jade',
    onboarding: 'bg-blue-100 text-blue-700',
    complete: 'bg-green-100 text-green-700',
    on_hold: 'bg-gray-100 text-gray-600',
    in_progress: 'bg-amber-100 text-amber-700',
    upcoming: 'bg-surface text-muted',
    discovery: 'bg-blue-100 text-blue-700',
    review: 'bg-purple-100 text-purple-700',
    draft: 'bg-gray-100 text-gray-600',
    sent: 'bg-blue-100 text-blue-700',
    paid: 'bg-green-100 text-green-700',
    overdue: 'bg-red-100 text-red-700',
    available: 'bg-green-100 text-green-700',
    partial: 'bg-amber-100 text-amber-700',
    unavailable: 'bg-red-100 text-red-700',
    screening: 'bg-purple-100 text-purple-700',
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
  }
  return map[status] || 'bg-gray-100 text-gray-600'
}

export function getHealthColor(score) {
  if (score >= 90) return '#2A7B5C'
  if (score >= 70) return '#C4964A'
  return '#C45A5A'
}

export function getHealthLabel(score) {
  if (score >= 90) return 'Excellent'
  if (score >= 70) return 'Good'
  if (score >= 50) return 'At Risk'
  return 'Critical'
}

export function debounce(fn, delay) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export function calculateCompletion(milestones) {
  if (!milestones || milestones.length === 0) return 0
  const done = milestones.filter((m) => m.status === 'complete').length
  return Math.round((done / milestones.length) * 100)
}

export function formatDayRate(rate) {
  return `$${rate.toLocaleString('en-AU')}/day`
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
