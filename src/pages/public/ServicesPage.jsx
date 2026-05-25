import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Cpu, BookOpen, User } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import { SERVICES } from '@/lib/constants'

const JKS = { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }

const sectionBgs = ['#F0F0FF', '#FFF7ED', '#F0FDF4', '#F0F0FF']
const accentColors = ['#6366F1', '#F59E0B', '#10B981', '#6366F1']

const serviceIcons = [
  <Settings size={48} strokeWidth={1.5} />,
  <Cpu size={48} strokeWidth={1.5} />,
  <BookOpen size={48} strokeWidth={1.5} />,
  <User size={48} strokeWidth={1.5} />,
]

export default function ServicesPage() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: '#F0F0FF', color: '#6366F1' }}
          >
            Services
          </div>
          <h1 className="mb-6" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#111111', lineHeight: 1.1, ...JKS }}>
            Four ways to work with Studio Method
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.7, ...JKS }}>
            Each service is built around a different starting point and a different need.
          </p>
        </div>
      </section>

      {/* ALTERNATING SERVICE SECTIONS */}
      {SERVICES.map((service, i) => {
        const isReversed = i % 2 !== 0
        const accent = accentColors[i]
        const sectionBg = sectionBgs[i]

        return (
          <section key={service.id} id={service.id} style={{ background: sectionBg, ...JKS }} className="py-24 px-6">
            <div className={`max-w-5xl mx-auto flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
              {/* TEXT SIDE */}
              <div className="flex-1">
                <span
                  style={{ fontSize: 80, fontWeight: 800, color: accent, lineHeight: 1, opacity: 0.18, display: 'block', marginBottom: -12, ...JKS }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#111111', marginBottom: 12, ...JKS }}>
                  {service.name}
                </h2>
                <p style={{ fontSize: 17, color: '#6B7280', lineHeight: 1.7, marginBottom: 20, ...JKS }}>
                  {service.description}
                </p>
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className="pub-pill"
                    style={{ background: '#fff', color: accent, border: `1.5px solid ${accent}`, borderRadius: 999, padding: '5px 16px', fontWeight: 600, fontSize: 13, ...JKS }}
                  >
                    {service.duration}
                  </span>
                  {service.price_from && (
                    <span style={{ fontSize: 14, color: '#6B7280', fontWeight: 600, ...JKS }}>
                      From AUD ${service.price_from.toLocaleString()}
                    </span>
                  )}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-semibold transition-all"
                  style={{ background: accent, color: '#fff', borderRadius: 999, padding: '12px 24px', fontSize: 15, ...JKS }}
                >
                  Book a discovery call <ArrowRight size={15} />
                </Link>
              </div>

              {/* ICON SIDE */}
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: 220, height: 220, borderRadius: 32, background: '#fff', boxShadow: '0 2px 40px rgba(0,0,0,0.07)', color: accent }}
              >
                {serviceIcons[i]}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#111111', marginBottom: 12, ...JKS }}>Not sure which is right?</h2>
          <p style={{ fontSize: 17, color: '#6B7280', marginBottom: 32, lineHeight: 1.7, ...JKS }}>
            Book a 30-minute call. We will look at your situation honestly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-all"
            style={{ background: '#6366F1', color: '#fff', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...JKS }}
          >
            Book a call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
