import { useState } from 'react'
import PublicLayout from '@/components/layout/PublicLayout'
import ArticleCard from '@/components/ui/ArticleCard'
import FilterBar from '@/components/ui/FilterBar'
import { FAKE_INSIGHTS_ARTICLES } from '@/lib/constants'

const categories = [
  { value: 'all', label: 'All' },
  { value: 'methodology', label: 'Methodology' },
  { value: 'process', label: 'Process' },
  { value: 'ai_layer', label: 'AI Layer' },
  { value: 'leadership', label: 'Leadership' },
]

export default function InsightsPage() {
  const [filter, setFilter] = useState('all')
  const articles = filter === 'all' ? FAKE_INSIGHTS_ARTICLES : FAKE_INSIGHTS_ARTICLES.filter(a => a.category === filter)

  return (
    <PublicLayout>
      <section className="py-24 px-6 bg-surface text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Insights</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">From the Studio Method blog</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">Practical writing on design operations, team management, AI tooling, and building a better design practice.</p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <FilterBar filters={categories} active={filter} onChange={setFilter} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-4">Get new articles by email</h2>
          <p className="text-muted mb-6 text-sm">No marketing. Just the articles, when they are published.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="your@email.com" className="input flex-1" />
            <button type="submit" className="btn-gold px-5 py-3 rounded-lg text-sm">Subscribe</button>
          </form>
        </div>
      </section>
    </PublicLayout>
  )
}
