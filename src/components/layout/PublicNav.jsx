import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

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
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/insights', label: 'Insights' },
    { to: '/pricing', label: 'Pricing' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm border-b border-border' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-lg font-bold text-ink tracking-tight">
            Studio Method
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-gold' : scrolled ? 'text-ink hover:text-gold' : 'text-ink hover:text-gold'}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/for-individuals" className="text-sm font-medium text-muted hover:text-ink transition-colors">
              For Individuals
            </Link>
            <Link to="/login" className="text-sm font-medium px-4 py-2 border border-border rounded-lg hover:bg-surface transition-colors text-ink">
              Log in
            </Link>
            <a href="https://calendly.com" target="_blank" rel="noreferrer" className="btn-gold text-sm px-4 py-2 rounded-lg">
              Book a call
            </a>
          </div>
          <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-surface">
            <Menu size={20} className="text-ink" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-border">
            <Link to="/" onClick={() => setMenuOpen(false)} className="font-display text-lg font-bold text-ink">Studio Method</Link>
            <button onClick={() => setMenuOpen(false)}><X size={20} className="text-ink" /></button>
          </div>
          <div className="flex flex-col gap-1 p-6">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className="px-4 py-3 text-lg font-medium text-ink hover:text-gold transition-colors rounded-xl hover:bg-surface">
                {l.label}
              </Link>
            ))}
            <Link to="/for-individuals" onClick={() => setMenuOpen(false)} className="px-4 py-3 text-lg font-medium text-muted hover:text-ink transition-colors rounded-xl hover:bg-surface">For Individuals</Link>
            <Link to="/for-organisations" onClick={() => setMenuOpen(false)} className="px-4 py-3 text-lg font-medium text-muted hover:text-ink transition-colors rounded-xl hover:bg-surface">For Organisations</Link>
          </div>
          <div className="px-6 mt-auto pb-8 flex flex-col gap-3">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 border border-border rounded-xl font-medium text-ink">Log in</Link>
            <a href="https://calendly.com" target="_blank" rel="noreferrer" className="w-full text-center py-3 bg-gold text-white rounded-xl font-medium">Book a call</a>
          </div>
        </div>
      )}
    </>
  )
}
