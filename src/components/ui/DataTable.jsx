import { cn } from '@/lib/utils'

export default function DataTable({ columns, data, onRowClick, emptyMessage = 'No data available.' }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th key={col.key} className={cn('text-left py-3 px-4 text-xs font-semibold text-muted uppercase tracking-wide', col.className)}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.length === 0 ? (
            <tr><td colSpan={columns.length} className="text-center py-8 text-muted text-sm">{emptyMessage}</td></tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={row.id || i}
                onClick={() => onRowClick?.(row)}
                className={cn('hover:bg-surface/50 transition-colors', onRowClick && 'cursor-pointer')}
              >
                {columns.map((col) => (
                  <td key={col.key} className={cn('py-3 px-4 text-ink', col.className)}>
                    {col.render ? col.render(row[col.key], row) : row[col.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
