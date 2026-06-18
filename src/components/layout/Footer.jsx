import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ROTATING_WORDS = ['studios', 'collectives', 'systems', 'machines', 'clockwork']

function RotatingText() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROTATING_WORDS.length)
        setVisible(true)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rotating-text-section">
      <p className="rotating-text">
        Design teams that work like{' '}
        <strong style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          {ROTATING_WORDS[idx]}
        </strong>
      </p>
    </div>
  )
}

export default function Footer() {
  return (
    <>
      <RotatingText />
      <footer className="dark-footer">
        <div className="dark-footer__inner">
          <div className="dark-footer__grid">
            <div>
              <div className="dark-footer__brand-name">Studio Method</div>
              <p className="dark-footer__brand-desc">
                A methodology for design teams. Built internally. Shared openly.
              </p>
            </div>
            <div>
              <div className="dark-footer__col-title">Method</div>
              <Link to="/services" className="dark-footer__link">The Operating Model</Link>
              <Link to="/services" className="dark-footer__link">The Filter Gate</Link>
              <Link to="/services" className="dark-footer__link">The AI Layer</Link>
              <Link to="/services" className="dark-footer__link">Studio Ceremonies</Link>
            </div>
            <div>
              <div className="dark-footer__col-title">Learn</div>
              <Link to="/insights" className="dark-footer__link">Insights</Link>
              <Link to="/about" className="dark-footer__link">About</Link>
            </div>
            <div>
              <div className="dark-footer__col-title">Contact</div>
              <a href="mailto:hello@studiomethod.com.au" className="dark-footer__link">hello@studiomethod.com.au</a>
              <span className="dark-footer__link" style={{ cursor: 'default' }}>Adelaide, South Australia</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="dark-footer__link">LinkedIn</a>
            </div>
          </div>
          <div className="dark-footer__bottom">
            <span>ABN 00 000 000 000 — Studio Method Pty Ltd · © 2026 Studio Method</span>
            <div style={{ display: 'flex', gap: 24 }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
