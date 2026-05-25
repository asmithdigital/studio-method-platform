import { create } from 'zustand'

export const useUIStore = create((set) => ({
  sidebarOpen: true,
  mobileMenuOpen: false,
  toasts: [],
  activeModal: null,

  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setMobileMenu: (open) => set({ mobileMenuOpen: open }),

  addToast: (message, type = 'info') => {
    const id = Date.now()
    set((s) => ({ toasts: [...s.toasts, { id, message, type }] }))
    setTimeout(() => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })), 4000)
  },
  removeToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),

  openModal: (name, data = {}) => set({ activeModal: { name, data } }),
  closeModal: () => set({ activeModal: null }),
}))
