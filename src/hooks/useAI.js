import { useState } from 'react'
import { generateProposalAI, scoreLeadAI, generateEmailAI, analyseClientHealthAI, generateModuleContentAI } from '@/lib/anthropic'

export function useAI() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const run = async (fn, ...args) => {
    setLoading(true)
    setError(null)
    try {
      const result = await fn(...args)
      return result
    } catch (e) {
      setError(e.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    scoreLead: (data) => run(scoreLeadAI, data),
    generateProposal: (lead, service) => run(generateProposalAI, lead, service),
    generateEmail: (type, ctx) => run(generateEmailAI, type, ctx),
    analyseHealth: (data) => run(analyseClientHealthAI, data),
    generateModule: (title, audience, category) => run(generateModuleContentAI, title, audience, category),
  }
}
