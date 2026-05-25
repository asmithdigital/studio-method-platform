import PublicNav from './PublicNav'
import Footer from './Footer'

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F9F8F5' }}>
      <PublicNav />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
