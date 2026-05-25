import Sidebar from './Sidebar'
import TopBar from './TopBar'
import Toast from '@/components/ui/Toast'

export default function DashboardLayout({ children, title, subtitle }) {
  return (
    <div className="flex h-screen overflow-hidden bg-canvas">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
      <Toast />
    </div>
  )
}
