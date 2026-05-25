import PublicNav from './PublicNav'
import Footer from './Footer'

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-jakarta" style={{ backgroundColor: '#FAFAF7', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
      <PublicNav />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
