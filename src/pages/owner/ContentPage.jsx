import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Edit, Eye } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import { FAKE_TRAINING_MODULES, FAKE_INSIGHTS_ARTICLES } from '@/lib/constants'

const draftModule = { title: 'New Module', audience: 'both', category: 'methodology' }

export default function ContentPage() {
  const [activeSection, setActiveSection] = useState('modules')
  const [showGenerator, setShowGenerator] = useState(false)

  return (
    <DashboardLayout title="Content" subtitle="Training modules and insights articles">
      <div className="flex gap-2 mb-5">
        <button onClick={() => setActiveSection('modules')} className={`px-4 py-2 text-sm font-medium rounded-lg ${activeSection === 'modules' ? 'bg-navy text-white' : 'bg-white border border-border text-muted hover:text-ink'}`}>
          Training modules ({FAKE_TRAINING_MODULES.length})
        </button>
        <button onClick={() => setActiveSection('articles')} className={`px-4 py-2 text-sm font-medium rounded-lg ${activeSection === 'articles' ? 'bg-navy text-white' : 'bg-white border border-border text-muted hover:text-ink'}`}>
          Insights ({FAKE_INSIGHTS_ARTICLES.length})
        </button>
      </div>

      {activeSection === 'modules' && (
        <div>
          <div className="flex justify-end gap-3 mb-4">
            <button onClick={() => setShowGenerator(!showGenerator)} className="flex items-center gap-2 px-4 py-2 text-sm border border-border bg-white rounded-lg hover:bg-surface">
              AI Generate module
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gold text-white rounded-lg hover:bg-gold-light">
              <Plus size={14} /> New module
            </button>
          </div>

          {showGenerator && (
            <div className="mb-5 p-5 card text-sm text-muted">
              AI module generator coming soon. Use the training module database to manage content.
            </div>
          )}

          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-surface border-b border-border">
                <tr>
                  <th className="text-left px-5 py-3 font-medium text-muted">#</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Title</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Category</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Audience</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Duration</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Status</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Actions</th>
                </tr>
              </thead>
              <tbody>
                {FAKE_TRAINING_MODULES.map((m) => (
                  <tr key={m.id} className="border-b border-border last:border-b-0 hover:bg-surface">
                    <td className="px-5 py-3 text-muted font-mono">{String(m.order_index).padStart(2,'0')}</td>
                    <td className="px-5 py-3">
                      <p className="font-medium text-ink">{m.title}</p>
                      <p className="text-xs text-muted line-clamp-1">{m.description}</p>
                    </td>
                    <td className="px-5 py-3">
                      <Badge variant="default" className="capitalize">{m.category.replace('_', ' ')}</Badge>
                    </td>
                    <td className="px-5 py-3">
                      <Badge variant={m.audience === 'both' ? 'jade' : m.audience === 'consultant' ? 'navy' : 'gold'}>
                        {m.audience === 'both' ? 'All' : m.audience}
                      </Badge>
                    </td>
                    <td className="px-5 py-3 text-muted">{m.estimated_minutes} min</td>
                    <td className="px-5 py-3">
                      <Badge variant={m.published ? 'jade' : 'default'}>{m.published ? 'Published' : 'Draft'}</Badge>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded hover:bg-surface text-muted hover:text-ink"><Edit size={13} /></button>
                        <button className="p-1.5 rounded hover:bg-surface text-muted hover:text-ink"><Eye size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeSection === 'articles' && (
        <div>
          <div className="flex justify-end mb-4">
            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gold text-white rounded-lg hover:bg-gold-light">
              <Plus size={14} /> New article
            </button>
          </div>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-surface border-b border-border">
                <tr>
                  <th className="text-left px-5 py-3 font-medium text-muted">Title</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Category</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Read time</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Published</th>
                  <th className="text-left px-5 py-3 font-medium text-muted">Actions</th>
                </tr>
              </thead>
              <tbody>
                {FAKE_INSIGHTS_ARTICLES.map((a) => (
                  <tr key={a.id} className="border-b border-border last:border-b-0 hover:bg-surface">
                    <td className="px-5 py-4">
                      <p className="font-medium text-ink">{a.title}</p>
                      <p className="text-xs text-muted mt-0.5">{a.excerpt}</p>
                    </td>
                    <td className="px-5 py-4">
                      <Badge variant="default">{a.category.replace('_', ' ')}</Badge>
                    </td>
                    <td className="px-5 py-4 text-muted">{a.read_time_minutes} min</td>
                    <td className="px-5 py-4 text-muted">{a.published_date}</td>
                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        <Link to={`/insights/${a.slug}`} className="p-1.5 rounded hover:bg-surface text-muted hover:text-ink"><Eye size={13} /></Link>
                        <button className="p-1.5 rounded hover:bg-surface text-muted hover:text-ink"><Edit size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
