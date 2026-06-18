import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Glyph, Arrow } from '@/components/public/SharedComponents'

export default function PublicNav() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/insights', label: 'Insights' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/for-individuals', label: 'For Individuals' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="brand">
          <Glyph />
          <span className="name"><b>Studio</b> <span>Method</span></span>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {l.label}<span className="dot"></span>
            </NavLink>
          ))}
        </div>
        <div className="nav-right">
          <Link to="/login" className="login">Log in</Link>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('/contact')}>
            Book a call <Arrow s={14} />
          </button>
        </div>
      </div>
    </nav>
  )
}
