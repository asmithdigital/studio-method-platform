import PublicNav from './PublicNav'
import Footer from './Footer'

export default function PublicLayout({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F2EFE6',
      fontFamily: '"Schibsted Grotesk", system-ui, -apple-system, sans-serif',
    }}>
      <PublicNav />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  )
}
