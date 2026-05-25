import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import ChatBot from '@/components/ai/ChatBot'
import { TESTIMONIALS, FAKE_INSIGHTS_ARTICLES } from '@/lib/constants'
import {
  IllustrationFilterGate,
  IllustrationThreePathways,
  IllustrationStudioCeremonies,
  IllustrationAILayer,
} from '@/components/public/Illustrations'

const JKS = { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }

function FlowDiagram() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-0 mt-14">
      {[
        { label: 'Request comes in', bg: '#F0F0FF', color: '#6366F1' },
        { label: 'Filter Gate', bg: '#FFF7ED', color: '#F59E0B' },
        { label: 'Right pathway', bg: '#F0FDF4', color: '#10B981' },
      ].map((step, i) => (
        <div key={step.label} className="flex items-center">
          <div
            className="flex items-center justify-center px-6 py-4 rounded-2xl text-sm font-700"
            style={{ background: step.bg, color: step.color, fontWeight: 700, minWidth: 148, textAlign: 'center', ...JKS }}
          >
            {step.label}
          </div>
          {i < 2 && (
            <div className="flex items-center px-2" style={{ color: '#d1d5db' }}>
              <div className="hidden sm:block" style={{ width: 32, height: 2, background: '#d1d5db', position: 'relative' }}>
                <div style={{ position: 'absolute', right: -6, top: -4, width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #d1d5db' }} />
              </div>
              <div className="sm:hidden" style={{ width: 2, height: 24, background: '#d1d5db', margin: '4px auto', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: -6, left: -4, width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid #d1d5db' }} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const mosaicCards = [
  {
    key: 'filter',
    label: 'Filter Gate',
    body: 'Every request gets assessed before it enters the backlog.',
    bg: '#F0F0FF',
    accent: '#6366F1',
    Illustration: IllustrationFilterGate,
  },
  {
    key: 'pathways',
    label: 'Three Pathways',
    body: 'Discovery, Delivery, or Self-serve — each with its own process.',
    bg: '#fff',
    accent: '#6366F1',
    borderTop: '3px solid #6366F1',
    Illustration: IllustrationThreePathways,
  },
  {
    key: 'ceremonies',
    label: 'Studio Ceremonies',
    body: 'Rhythm-based rituals that keep the team aligned week to week.',
    bg: '#FFF7ED',
    accent: '#F59E0B',
    Illustration: IllustrationStudioCeremonies,
  },
  {
    key: 'ai',
    label: 'AI Layer',
    body: 'Your tools connected. Your knowledge accessible.',
    bg: '#F0FDF4',
    accent: '#10B981',
    Illustration: IllustrationAILayer,
  },
]

const stats = [
  { n: '4', l: 'Services', bg: '#6366F1', color: '#fff' },
  { n: '12+', l: 'Engagements delivered', bg: '#FFF7ED', color: '#F59E0B' },
  { n: '97%', l: 'Client satisfaction', bg: '#F0FDF4', color: '#10B981' },
  { n: '12', l: 'Training modules', bg: '#6366F1', color: '#fff' },
]

export default function HomePage() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section style={{ background: '#FAFAF7', ...JKS, position: 'relative', overflow: 'hidden' }} className="px-6 pt-24 pb-16">
        {/* Background blobs */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-60px', left: '-60px',
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
          }} />
        </div>

        <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left column — 60% */}
            <div style={{ flex: '0 0 60%', maxWidth: '60%' }} className="w-full">
              <div
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: '#F0F0FF', color: '#6366F1' }}
              >
                Design Operations Methodology
              </div>
              <h1
                className="mb-6 leading-none tracking-tight"
                style={{ fontSize: 'clamp(42px, 7vw, 72px)', fontWeight: 800, color: '#111111', ...JKS }}
              >
                Design teams that work<br />
                <span style={{ color: '#6366F1' }}>like studios.</span>
              </h1>
              <p
                className="mb-10 max-w-xl leading-relaxed"
                style={{ fontSize: 18, color: '#6B7280', ...JKS }}
              >
                A methodology for how work comes in, gets prioritised, and gets done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/for-organisations"
                  className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
                  style={{ background: '#6366F1', color: '#fff', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...JKS }}
                >
                  See how it works <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
                  style={{ background: 'transparent', color: '#6366F1', border: '2px solid #6366F1', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...JKS }}
                >
                  View the method
                </Link>
              </div>
              <FlowDiagram />
            </div>

            {/* Right column — 40% */}
            <div style={{ flex: '0 0 40%', maxWidth: '40%', position: 'relative' }} className="w-full hidden md:block">
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 360, height: 360, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <IllustrationFilterGate className="w-full h-auto relative" style={{ maxWidth: 380 }} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE MOSAIC */}
      <section style={{ background: '#FFFFFF', ...JKS }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Row 1: large left (60%) + tall right (40%) */}
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            {/* Card 1 — large, lavender */}
            <div
              style={{
                flex: '0 0 calc(60% - 10px)',
                background: mosaicCards[0].bg,
                borderRadius: 20,
                padding: 36,
                boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <IllustrationFilterGate className="w-20 h-20" />
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111111', ...JKS }}>{mosaicCards[0].label}</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, ...JKS }}>{mosaicCards[0].body}</p>
              <div style={{ width: 32, height: 3, borderRadius: 2, background: mosaicCards[0].accent, marginTop: 4 }} />
            </div>

            {/* Card 2 — tall, white with indigo border-top */}
            <div
              style={{
                flex: '0 0 calc(40% - 10px)',
                background: mosaicCards[1].bg,
                borderRadius: 20,
                borderTop: mosaicCards[1].borderTop,
                padding: 36,
                boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <IllustrationThreePathways className="w-20 h-20" />
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111111', ...JKS }}>{mosaicCards[1].label}</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, ...JKS }}>{mosaicCards[1].body}</p>
              <div style={{ width: 32, height: 3, borderRadius: 2, background: mosaicCards[1].accent, marginTop: 4 }} />
            </div>
          </div>

          {/* Row 2: tall left (40%) + large right (60%) */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Card 3 — tall, peach */}
            <div
              style={{
                flex: '0 0 calc(40% - 10px)',
                background: mosaicCards[2].bg,
                borderRadius: 20,
                padding: 36,
                boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <IllustrationStudioCeremonies className="w-20 h-20" />
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111111', ...JKS }}>{mosaicCards[2].label}</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, ...JKS }}>{mosaicCards[2].body}</p>
              <div style={{ width: 32, height: 3, borderRadius: 2, background: mosaicCards[2].accent, marginTop: 4 }} />
            </div>

            {/* Card 4 — large, mint */}
            <div
              style={{
                flex: '0 0 calc(60% - 10px)',
                background: mosaicCards[3].bg,
                borderRadius: 20,
                padding: 36,
                boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <IllustrationAILayer className="w-20 h-20" />
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111111', ...JKS }}>{mosaicCards[3].label}</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, ...JKS }}>{mosaicCards[3].body}</p>
              <div style={{ width: 32, height: 3, borderRadius: 2, background: mosaicCards[3].accent, marginTop: 4 }} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#F0F0FF', ...JKS, position: 'relative', overflow: 'hidden' }} className="py-20 px-6">
        {/* Background blob */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-60px', left: '-60px',
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
          }} />
        </div>

        <div className="max-w-4xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((s, i) => (
              <div
                key={s.l}
                style={{
                  background: s.bg,
                  borderRadius: 999,
                  padding: i % 2 === 0 ? '28px 40px' : '20px 36px',
                  textAlign: 'center',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  minWidth: 160,
                }}
              >
                <p style={{ fontSize: 52, fontWeight: 800, color: s.color, lineHeight: 1, ...JKS }}>{s.n}</p>
                <p style={{ fontSize: 13, color: s.bg === '#6366F1' ? 'rgba(255,255,255,0.75)' : '#6B7280', marginTop: 6, ...JKS }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL AUDIENCE */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-12" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#111111', ...JKS }}>
            Who Studio Method is for
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/for-organisations"
              className="group flex flex-col gap-5 p-8 transition-all"
              style={{ background: '#6366F1', borderRadius: 16, boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', ...JKS }}>Organisations with design teams</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 1.7, ...JKS }}>
                Talented designers working in reactive, unstructured ways. The operating model changes that.
              </p>
              <div className="flex items-center gap-2 font-semibold mt-auto" style={{ color: '#fff', ...JKS }}>
                See how we help organisations <ArrowRight size={15} />
              </div>
            </Link>
            <Link
              to="/for-individuals"
              className="group flex flex-col gap-5 p-8 transition-all"
              style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: '#FFF7ED' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#111111', ...JKS }}>Individual designers and managers</h3>
              <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, ...JKS }}>
                Learn the Studio Method yourself and apply it to your team or freelance practice.
              </p>
              <div className="flex items-center gap-2 font-semibold mt-auto" style={{ color: '#F59E0B', ...JKS }}>
                Learn the methodology yourself <ArrowRight size={15} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: '#F0F0FF', ...JKS }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-14" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#111111', ...JKS }}>
            From the teams we&apos;ve worked with
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="flex flex-col gap-5 p-8"
                style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 20px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden' }}
              >
                {/* Large decorative quote mark */}
                <svg
                  aria-hidden="true"
                  style={{ position: 'absolute', top: 8, left: 12, pointerEvents: 'none', zIndex: 0 }}
                  width="72" height="72" viewBox="0 0 72 72"
                >
                  <text
                    x="0" y="68"
                    style={{ fontSize: '120px', fontFamily: 'Georgia, serif', fill: '#6366F1', opacity: 0.08, fontWeight: 700, lineHeight: 1 }}
                  >&ldquo;</text>
                </svg>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{ fontSize: 17, color: '#111111', lineHeight: 1.7, ...JKS }}>
                    {t.quote}
                  </p>
                </div>
                <div className="mt-auto pt-4" style={{ borderTop: '1px solid #e5e7eb', position: 'relative', zIndex: 1 }}>
                  <p style={{ fontWeight: 700, color: '#111111', ...JKS }}>{t.name}</p>
                  <p style={{ fontSize: 14, color: '#6B7280', ...JKS }}>{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#111111', ...JKS }}>
              From the Studio Method blog
            </h2>
            <Link
              to="/insights"
              className="flex items-center gap-1 font-semibold"
              style={{ color: '#6366F1', fontSize: 14, ...JKS }}
            >
              All articles <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FAKE_INSIGHTS_ARTICLES.slice(0, 3).map((a) => (
              <Link
                key={a.id}
                to={`/insights/${a.slug}`}
                className="flex flex-col gap-4 p-6 transition-all"
                style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
              >
                <span
                  className="pub-pill"
                  style={{ background: '#F0F0FF', color: '#6366F1', fontSize: 12, fontWeight: 600, borderRadius: 999, padding: '4px 12px', alignSelf: 'flex-start' }}
                >
                  {a.category}
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111111', lineHeight: 1.4, ...JKS }}>{a.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6, ...JKS }} className="line-clamp-2">{a.excerpt}</p>
                <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 'auto', ...JKS }}>{a.read_time} min read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#6366F1', ...JKS, position: 'relative', overflow: 'hidden' }} className="py-24 px-6 text-center">
        {/* Background blobs */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-60px', left: '-60px',
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }} />
        </div>
        <div className="max-w-2xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="mb-6" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', lineHeight: 1.2, ...JKS }}>
            Ready to change how your team works?
          </h2>
          <p className="mb-10" style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, ...JKS }}>
            Book a 45-minute discovery call. We will look at your team&apos;s current state.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-all"
            style={{ background: '#fff', color: '#6366F1', borderRadius: 999, padding: '16px 36px', fontSize: 16, ...JKS }}
          >
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <ChatBot />
    </PublicLayout>
  )
}
