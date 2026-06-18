import { Link } from 'react-router-dom'
import { Glyph } from '@/components/public/SharedComponents'

export default function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="name"><Glyph /> Studio Method</div>
            <p>A design operations methodology for how work comes in, gets prioritised, and gets done. Based in Adelaide, Australia.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Studio Setup</Link></li>
              <li><Link to="/services">AI Layer</Link></li>
              <li><Link to="/services">Studio Training</Link></li>
              <li><Link to="/services">Individual</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Learn</h4>
            <ul>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/for-individuals">For Individuals</Link></li>
              <li><Link to="/for-organisations">For Organisations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><a href="mailto:hello@studiomethod.com.au">hello@studiomethod.com.au</a></li>
              <li><span style={{ fontSize: '14.5px', opacity: 0.82 }}>Adelaide, South Australia</span></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><Link to="/contact">Book a call</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="legal">ABN 00 000 000 000 — Studio Method Pty Ltd · © 2026 Studio Method</span>
          <div className="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
