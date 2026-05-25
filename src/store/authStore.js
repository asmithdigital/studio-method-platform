import { create } from 'zustand'
import { isDemoMode, demoUser } from '@/lib/demoMode'
import { supabase } from '@/lib/supabase'

export const useAuthStore = create((set, get) => ({
  user: isDemoMode ? demoUser : null,
  profile: isDemoMode ? demoUser : null,
  role: isDemoMode ? 'owner' : null,
  loading: false,

  login: async (email, password, demoRole) => {
    set({ loading: true })
    if (isDemoMode) {
      const roles = {
        owner: { ...demoUser, role: 'owner' },
        client: { id: 'demo-client', email: 'james@afterpay.com', full_name: 'James Okafor', role: 'client', company: 'Afterpay', client_id: 'client-001' },
        consultant: { id: 'demo-consultant', email: 'jordan@studiomethod.com.au', full_name: 'Jordan Nakamura', role: 'consultant', consultant_id: 'consultant-001' },
        individual: { id: 'demo-individual', email: 'sam@freelance.com', full_name: 'Sam Rivera', role: 'individual', plan: 'individual' },
      }
      const user = roles[demoRole || 'owner']
      set({ user, profile: user, role: user.role, loading: false })
      return { user }
    }
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { set({ loading: false }); return { error } }
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user.id).single()
    set({ user: data.user, profile, role: profile?.role, loading: false })
    return { user: data.user }
  },

  logout: async () => {
    if (!isDemoMode) await supabase.auth.signOut()
    set({ user: isDemoMode ? demoUser : null, profile: isDemoMode ? demoUser : null, role: isDemoMode ? 'owner' : null })
  },

  setProfile: (profile) => set({ profile, role: profile?.role }),

  initAuth: async () => {
    if (isDemoMode) return
    set({ loading: true })
    const { data: { session } } = await supabase.auth.getSession()
    if (session?.user) {
      const { data: profile } = await supabase.from('profiles').select('*').eq('id', session.user.id).single()
      set({ user: session.user, profile, role: profile?.role })
    }
    set({ loading: false })
    supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', session.user.id).single()
        set({ user: session.user, profile, role: profile?.role })
      } else {
        set({ user: null, profile: null, role: null })
      }
    })
  },
}))
