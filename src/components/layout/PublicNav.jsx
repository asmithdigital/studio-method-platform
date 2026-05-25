import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function PublicNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/insights', label: 'Insights' },
    { to: '/pricing', label: 'Pricing' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
        style={{
          background: scrolled ? 'rgba(250,250,247,0.95)' : 'rgba(250,250,247,0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
          fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold tracking-tight" style={{ color: '#111111', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
            Studio Method
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-indigo' : 'hover:text-indigo'
                  }`
                }
                style={{ color: undefined, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/for-individuals"
              className="text-sm font-semibold transition-colors"
              style={{ color: '#6B7280', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}
            >
              For Individuals
            </Link>
            <Link
              to="/login"
              className="text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              style={{ color: '#111111', border: '1.5px solid #e5e7eb', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}
            >
              Log in
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
              style={{ background: '#6366F1', color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}
            >
              Book a call
            </Link>
          </div>
          <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 rounded-lg" style={{ color: '#111111' }}>
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ background: '#FAFAF7', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
          <div className="flex items-center justify-between px-6 h-16" style={{ borderBottom: '1px solid #e5e7eb' }}>
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-lg font-bold" style={{ color: '#111111' }}>Studio Method</Link>
            <button onClick={() => setMenuOpen(false)} style={{ color: '#111111' }}><X size={20} /></button>
          </div>
          <div className="flex flex-col gap-1 p-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-lg font-semibold rounded-xl transition-colors"
                style={{ color: '#111111' }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/for-individuals" onClick={() => setMenuOpen(false)} className="px-4 py-3 text-lg font-semibold rounded-xl" style={{ color: '#6B7280' }}>For Individuals</Link>
            <Link to="/for-organisations" onClick={() => setMenuOpen(false)} className="px-4 py-3 text-lg font-semibold rounded-xl" style={{ color: '#6B7280' }}>For Organisations</Link>
          </div>
          <div className="px-6 mt-auto pb-8 flex flex-col gap-3">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-full font-semibold" style={{ border: '1.5px solid #e5e7eb', color: '#111111' }}>Log in</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-full font-semibold" style={{ background: '#6366F1', color: '#fff' }}>Book a call</Link>
          </div>
        </div>
      )}
    </>
  )
}
