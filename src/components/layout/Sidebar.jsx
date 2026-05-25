import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Users, Briefcase, TrendingUp, FileText, Settings,
  LogOut, Zap, Book, Clock, ChevronLeft, UserCheck, BarChart2, Mail,
} from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import Avatar from '@/components/ui/Avatar'
import { cn } from '@/lib/utils'

const ownerNav = [
  { label: 'Overview', to: '/dashboard', icon: LayoutDashboard, exact: true },
  { label: 'Pipeline', to: '/dashboard/leads', icon: TrendingUp },
  { label: 'Clients', to: '/dashboard/clients', icon: Briefcase },
  { label: 'Consultants', to: '/dashboard/consultants', icon: UserCheck },
  { label: 'Projects', to: '/dashboard/projects', icon: Users },
  { label: 'Proposals', to: '/dashboard/proposals', icon: FileText },
  { label: 'Finance', to: '/dashboard/finance', icon: BarChart2 },
  { label: 'Analytics', to: '/dashboard/analytics', icon: BarChart2 },
  { label: 'Content', to: '/dashboard/content', icon: Book },
  { label: 'Automations', to: '/dashboard/automations', icon: Zap },
  { label: 'Settings', to: '/dashboard/settings', icon: Settings },
]

const clientNav = [
  { label: 'Dashboard', to: '/client', icon: LayoutDashboard, exact: true },
  { label: 'Project', to: '/client/project', icon: Briefcase },
  { label: 'Training', to: '/client/training', icon: Book },
  { label: 'Documents', to: '/client/documents', icon: FileText },
  { label: 'Profile', to: '/client/profile', icon: Users },
]

const consultantNav = [
  { label: 'Dashboard', to: '/consultant', icon: LayoutDashboard, exact: true },
  { label: 'Projects', to: '/consultant/projects', icon: Briefcase },
  { label: 'Training', to: '/consultant/training', icon: Book },
  { label: 'Timesheets', to: '/consultant/timesheets', icon: Clock },
  { label: 'Profile', to: '/consultant/profile', icon: Users },
]

const individualNav = [
  { label: 'Dashboard', to: '/learn', icon: LayoutDashboard, exact: true },
  { label: 'Training', to: '/learn/training', icon: Book },
  { label: 'Profile', to: '/learn/profile', icon: Users },
  { label: 'Billing', to: '/learn/billing', icon: FileText },
]

const navByRole = { owner: ownerNav, client: clientNav, consultant: consultantNav, individual: individualNav }

export default function Sidebar() {
  const { profile, role, logout } = useAuthStore()
  const navigate = useNavigate()
  const nav = navByRole[role] || ownerNav

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="w-60 flex-shrink-0 h-screen sticky top-0 flex flex-col bg-white border-r border-border">
      <div className="px-5 py-5 border-b border-border">
        <span className="font-display text-base font-bold text-ink">Studio Method</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className={({ isActive }) => isActive ? 'sidebar-link-active' : 'sidebar-link'}
          >
            <item.icon size={16} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 mb-3">
          <Avatar name={profile?.full_name || 'User'} size="md" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-ink truncate">{profile?.full_name || 'User'}</p>
            <p className="text-xs text-muted capitalize">{role}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-3 py-2 text-sm text-muted hover:text-rose hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={14} />
          Sign out
        </button>
      </div>
    </div>
  )
}
