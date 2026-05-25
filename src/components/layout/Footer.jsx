import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-white text-lg font-bold mb-3">Studio Method</p>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              A design operations methodology for how work comes in, gets prioritised, and gets done. Based in Adelaide, Australia.
            </p>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#studio-setup" className="hover:text-white transition-colors">Studio Setup</Link></li>
              <li><Link to="/services#ai-layer" className="hover:text-white transition-colors">AI Layer</Link></li>
              <li><Link to="/services#training" className="hover:text-white transition-colors">Studio Training</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Individual</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Learn</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/for-individuals" className="hover:text-white transition-colors">For Individuals</Link></li>
              <li><Link to="/for-organisations" className="hover:text-white transition-colors">For Organisations</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@studiomethod.com.au" className="hover:text-white transition-colors">hello@studiomethod.com.au</a></li>
              <li><span>Adelaide, South Australia</span></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Book a call</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>ABN 00 000 000 000 — Studio Method Pty Ltd</p>
          <p>© {new Date().getFullYear()} Studio Method. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
