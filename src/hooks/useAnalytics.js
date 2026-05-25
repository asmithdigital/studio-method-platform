import { useMemo } from 'react'
import { FAKE_REVENUE_DATA, FAKE_LEADS, FAKE_PROJECTS, FAKE_CLIENTS } from '@/lib/constants'

export function useAnalytics() {
  const data = useMemo(() => {
    const totalRevenue = FAKE_REVENUE_DATA.monthly.reduce((s, m) => s + m.revenue, 0)
    const activeClients = FAKE_CLIENTS.filter((c) => c.status === 'active' || c.status === 'onboarding').length
    const activeProjects = FAKE_PROJECTS.filter((p) => p.status === 'active').length
    const pipelineValue = FAKE_REVENUE_DATA.pipeline.total

    return {
      revenue: FAKE_REVENUE_DATA,
      totalRevenue,
      activeClients,
      activeProjects,
      pipelineValue,
      leads: {
        total: FAKE_LEADS.length,
        qualified: FAKE_LEADS.filter((l) => l.status === 'qualified').length,
        won: FAKE_LEADS.filter((l) => l.status === 'won').length,
        conversionRate: 25,
      },
    }
  }, [])

  return data
}
