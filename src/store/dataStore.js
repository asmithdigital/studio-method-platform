import { create } from 'zustand'
import {
  FAKE_LEADS, FAKE_CLIENTS, FAKE_CONSULTANTS, FAKE_PROJECTS,
  FAKE_TRAINING_MODULES, FAKE_INSIGHTS_ARTICLES,
} from '@/lib/constants'

export const useDataStore = create((set) => ({
  leads: FAKE_LEADS,
  clients: FAKE_CLIENTS,
  consultants: FAKE_CONSULTANTS,
  projects: FAKE_PROJECTS,
  modules: FAKE_TRAINING_MODULES,
  articles: FAKE_INSIGHTS_ARTICLES,

  updateLeadStatus: (id, status) =>
    set((s) => ({ leads: s.leads.map((l) => l.id === id ? { ...l, status } : l) })),

  updateMilestoneStatus: (projectId, milestoneId, status) =>
    set((s) => ({
      projects: s.projects.map((p) =>
        p.id === projectId
          ? { ...p, milestones: p.milestones.map((m) => m.id === milestoneId ? { ...m, status, completed_date: status === 'complete' ? new Date().toISOString().split('T')[0] : null } : m) }
          : p
      ),
    })),

  updateProject: (id, updates) =>
    set((s) => ({ projects: s.projects.map((p) => p.id === id ? { ...p, ...updates } : p) })),
}))
