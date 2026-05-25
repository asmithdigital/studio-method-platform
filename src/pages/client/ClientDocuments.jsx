import { FileText, Download, Eye } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'

const documents = [
  { id: 'd-001', name: 'Studio Operating Model', type: 'PDF', category: 'Deliverable', date: '2026-03-05', size: '2.4 MB', status: 'final' },
  { id: 'd-002', name: 'Filter Gate Process', type: 'PDF', category: 'Deliverable', date: '2026-03-05', size: '1.1 MB', status: 'final' },
  { id: 'd-003', name: 'Ways of Working Brochure', type: 'PDF', category: 'Deliverable', date: '2026-04-02', size: '3.2 MB', status: 'final' },
  { id: 'd-004', name: 'Team Assessment Report', type: 'PDF', category: 'Assessment', date: '2026-02-14', size: '1.8 MB', status: 'final' },
  { id: 'd-005', name: 'AI Layer Architecture Design', type: 'Figma', category: 'In Progress', date: '2026-04-30', size: '—', status: 'in_progress' },
  { id: 'd-006', name: 'Handover Documentation', type: 'PDF', category: 'Upcoming', date: '—', size: '—', status: 'upcoming' },
]

const statusVariant = { final: 'jade', in_progress: 'gold', upcoming: 'default' }
const statusLabel = { final: 'Final', in_progress: 'In Progress', upcoming: 'Upcoming' }

export default function ClientDocuments() {
  return (
    <DashboardLayout title="Documents" subtitle="Engagement deliverables and documentation">
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-muted">Document</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Category</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Type</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Date</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Status</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((d) => (
              <tr key={d.id} className="border-b border-border last:border-b-0 hover:bg-surface">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-muted flex-shrink-0" />
                    <div>
                      <p className="font-medium text-ink">{d.name}</p>
                      {d.size !== '—' && <p className="text-xs text-muted">{d.size}</p>}
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-muted">{d.category}</td>
                <td className="px-5 py-4 text-muted">{d.type}</td>
                <td className="px-5 py-4 text-muted">{d.date}</td>
                <td className="px-5 py-4">
                  <Badge variant={statusVariant[d.status] || 'default'}>{statusLabel[d.status]}</Badge>
                </td>
                <td className="px-5 py-4">
                  {d.status === 'final' && (
                    <div className="flex gap-2">
                      <button className="p-1.5 rounded hover:bg-surface text-muted hover:text-ink"><Eye size={13} /></button>
                      <button className="p-1.5 rounded hover:bg-surface text-muted hover:text-ink"><Download size={13} /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
