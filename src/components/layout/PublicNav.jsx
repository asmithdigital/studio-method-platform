import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function PublicNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/services', label: 'Method' },
    { to: '/about', label: 'About' },
    { to: '/insights', label: 'Insights' },
  ]

  return (
    <>
      <nav className={`dark-nav${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="dark-nav__logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="1" y="1" width="26" height="26" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            <rect x="7" y="7" width="14" height="14" rx="3" fill="#C7F24D" />
          </svg>
          Studio Method
        </Link>

        <div className="dark-nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `dark-nav__link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="dark-nav__cta-wrap" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/services" className="dark-nav__cta">
            See the playbook
          </Link>
        </div>

        <button className="dark-nav__hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu__close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="mobile-menu__link"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/services"
            className="mobile-menu__link"
            onClick={() => setMobileOpen(false)}
            style={{ color: '#C7F24D', borderBottom: 'none', marginTop: 16 }}
          >
            See the playbook →
          </Link>
        </div>
      )}
    </>
  )
}
