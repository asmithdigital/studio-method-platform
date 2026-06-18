import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

/* ---------------- icons ---------------- */
export const Arrow = ({ s = 16 }) => (
  <svg className="ico" width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowUR = ({ s = 15 }) => (
  <svg className="ico" width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IcoOrg = ({ s = 24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="3" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    <rect x="3" y="14" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="14" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const IcoPerson = ({ s = 24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

/* ---------------- brand mark ---------------- */
export const Glyph = () => (
  <span className="glyph"><i></i><i></i></span>
)

/* ---------------- reveal hook ---------------- */
const revealInView = () => {
  const vh = window.innerHeight || 800
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
    const r = el.getBoundingClientRect()
    if (r.top < vh - 40 && r.bottom > 0) el.classList.add('in')
  })
}

export const useReveal = (dep) => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    let io
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      els.forEach((el) => io.observe(el))
    }
    revealInView()
    const onScroll = () => revealInView()
    window.addEventListener('scroll', onScroll, { passive: true })
    const t1 = setTimeout(revealInView, 200)
    const probe = setTimeout(() => {
      const sample = document.querySelector('.reveal.in')
      const frozen = sample && parseFloat(getComputedStyle(sample).opacity) < 0.05
      if (frozen) {
        document.querySelectorAll('.reveal').forEach((el) => {
          el.style.transition = 'none'
          el.classList.add('in')
        })
      }
    }, 1000)
    const t2 = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        el.style.transition = 'none'
        el.classList.add('in')
      })
    }, 1600)
    return () => {
      if (io) io.disconnect()
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t1)
      clearTimeout(probe)
      clearTimeout(t2)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep])
}

/* ---------------- count-up ---------------- */
export const CountUp = ({ end, suffix = '', prefix = '', dur = 1400 }) => {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)
  useEffect(() => {
    let timer = null
    const run = () => {
      if (done.current) return
      done.current = true
      const t0 = Date.now()
      timer = setInterval(() => {
        const p = Math.min(1, (Date.now() - t0) / dur)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(eased * end))
        if (p >= 1) { setVal(end); clearInterval(timer); timer = null }
      }, 16)
    }
    let io
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) run() })
      }, { threshold: 0.5 })
      if (ref.current) io.observe(ref.current)
    }
    const t = setTimeout(run, 700)
    return () => {
      if (io) io.disconnect()
      clearTimeout(t)
      if (timer) clearInterval(timer)
    }
  }, [end, dur])
  return <span ref={ref}>{prefix}{val}<span className="u">{suffix}</span></span>
}

/* ---------------- CTA BAND ---------------- */
export const CtaBand = ({ kicker, title, sub, btn = 'Book a discovery call', ghost }) => {
  const navigate = useNavigate()
  return (
    <section className="cta-band" data-screen-label="CTA">
      <div className="ghost-num">{ghost || '→'}</div>
      <div className="wrap cta-inner">
        {kicker && <span className="eyebrow reveal">{kicker}</span>}
        <h2 className="reveal d1" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="cta-sub reveal d2">{sub}</p>
        <button
          className="btn btn-primary reveal d2"
          onClick={() => navigate('/contact')}
          style={{ fontSize: 15, padding: '16px 26px' }}
        >
          {btn} <Arrow />
        </button>
      </div>
    </section>
  )
}
