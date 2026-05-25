const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY
const isPlaceholder =
  !ANTHROPIC_API_KEY || ANTHROPIC_API_KEY === 'YOUR_ANTHROPIC_API_KEY_HERE'

async function callClaude(systemPrompt, userMessage, maxTokens = 1000) {
  if (isPlaceholder) {
    return getFakeAIResponse(systemPrompt, userMessage)
  }
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    }),
  })
  if (!res.ok) throw new Error(`Anthropic API error: ${res.status}`)
  const data = await res.json()
  return data.content[0].text
}

function getFakeAIResponse(systemPrompt, userMessage) {
  if (systemPrompt.includes('lead qualification')) {
    return JSON.stringify({
      score: 82,
      reasoning:
        'Strong fit based on team size, confirmed pain around operational maturity, and budget aligned with Studio Setup service. Timeline is Q3 which is workable.',
      recommended_action: 'Schedule discovery call within 48 hours. Prepare tailored proposal for Studio Setup + AI Layer combination.',
      risk_flags: ['Budget range needs confirmation', 'Single contact — need executive sponsor identified'],
    })
  }
  if (systemPrompt.includes('proposal')) {
    return JSON.stringify({
      executive_summary:
        'Studio Method proposes a 10-week Studio Setup engagement to install a high-performing design operating model for your team. Based on what you have shared, your team is capable and motivated — what is missing is the structural foundation that allows collective capability to compound.',
      situation_analysis:
        'Your design team faces a challenge common to high-growth product organisations: talented individuals operating without a shared operating model, resulting in reactive work patterns, uneven quality, and limited visibility for stakeholders. The root cause is not a people problem — it is a system problem.',
      recommended_approach:
        'We recommend beginning with a two-week discovery sprint to understand your specific context before committing to the full model design. This de-risks the engagement and ensures what we install is built for your team, not a generic version.',
      scope_of_work: [
        'Week 1–2: Discovery sprint — team interviews, current state mapping, stakeholder briefing',
        'Week 3–5: Studio model design — filter gate, pathways, ceremonies, definition of done',
        'Week 6–8: Implementation — ceremonies running, filter gate live, team trained',
        'Week 9–10: Handover — documentation, sustainability plan, governance model',
      ],
      investment: 'AUD $32,000 + GST for the 10-week engagement.',
      timeline: 'Can commence within 2 weeks of contract signing.',
      next_steps: 'We recommend a 45-minute discovery call to confirm scope and address any questions before issuing a formal contract.',
    })
  }
  if (systemPrompt.includes('status update')) {
    return 'The engagement is tracking well and on schedule. The team has completed all planned milestones to date and is actively engaged with the new ways of working. The primary focus this week is the AI layer build, which is progressing as expected. No blockers at this stage.'
  }
  if (systemPrompt.includes('client health')) {
    return JSON.stringify({
      score: 84,
      status: 'healthy',
      key_risks: [
        'Stakeholder engagement could deepen — primary contact is strong but executive sponsor is passive',
        'Budget is 62% consumed with 40% of engagement remaining — monitor closely',
      ],
      recommended_actions: [
        'Schedule 15-minute executive touchpoint before end of month',
        'Send interim progress report this week to reinforce value delivered',
        'Identify two quick wins for implementation sprint to build momentum',
      ],
    })
  }
  if (systemPrompt.includes('email')) {
    return JSON.stringify({
      subject: 'Following up on our conversation — Studio Method',
      body: `Hi there,\n\nThank you for taking the time to speak this week. I appreciated your candour about what is not working — it was exactly the kind of conversation that helps me understand whether Studio Method is the right fit.\n\nBased on what you shared, I think the Studio Setup engagement is the right starting point. I am going to put together a tailored proposal and send it through by Thursday.\n\nIn the meantime, if you want to share this with your team or a stakeholder, our case study captures the full story of how the methodology developed: studiomethod.com.au/work\n\nLooking forward to Thursday.\n\nAndrew\nFounder, Studio Method`,
    })
  }
  if (systemPrompt.includes('training module')) {
    return JSON.stringify({
      learning_objectives: [
        'Understand the core principles of the Studio Method operating model',
        'Identify which elements apply immediately to your current context',
        'Define one action you will take in the next five working days',
      ],
      introduction:
        'This module introduces the foundational concepts behind Studio Method. Whether you are a new manager inheriting a team, an experienced design leader looking for a more structured approach, or a consultant deploying this model for a client — this is where the thinking starts.\n\nThe Studio Method is not a framework invented in a consultancy. It was built inside a real Australian design team over twelve months of iteration, failure, and gradual improvement. That origin shapes everything about how it works.',
      sections: [
        {
          heading: 'Why operating models matter',
          content:
            'Most design teams are collections of talented individuals with no shared understanding of how work should flow. Requests arrive from everywhere. Priority is determined by whoever shouts loudest. Work is defined vaguely and scoped even more vaguely. Quality is inconsistent because there is no agreed definition of done.\n\nThis is not a talent problem. The designers are capable. The problem is structural — the team lacks an operating model.\n\nAn operating model is the set of agreed ways a team works together. It covers how work comes in, how it gets prioritised, how it gets done, and how the team communicates about all of it. Without one, every project is reinvented from scratch.',
          key_points: [
            'Operating models are structural, not personal',
            'Most team problems are system problems in disguise',
            'A good operating model creates clarity, not bureaucracy',
          ],
        },
      ],
      summary:
        'The Studio Method operating model gives design teams the structure they need to work collectively, manage capacity, and deliver consistent quality. It is the foundation everything else builds on.',
      action_items: [
        'Draw your current "how work comes in" process from memory — what does it actually look like?',
        'Identify one recurring problem your team has that might be a system problem rather than a people problem',
        'Share this module with one other person on your team and ask them what resonates',
      ],
      related_modules: ['the-studio-operating-model', 'how-work-flows-in-the-filter-gate'],
    })
  }
  return 'This is a demo AI response. Add your Anthropic API key in .env.local to get real AI-generated content.'
}

export async function scoreLeadAI(leadData) {
  const system =
    'You are a lead qualification expert for Studio Method, a design operations consultancy. Score this lead 0-100 based on: team size fit (20pts), budget alignment (20pts), pain severity (20pts), service match (20pts), urgency (20pts). Return JSON: {score, reasoning, recommended_action, risk_flags}'
  const result = await callClaude(system, JSON.stringify(leadData), 800)
  try {
    return typeof result === 'string' ? JSON.parse(result) : result
  } catch {
    return { score: 75, reasoning: result, recommended_action: 'Schedule discovery call', risk_flags: [] }
  }
}

export async function generateProposalAI(leadData, serviceType) {
  const system =
    'You are a senior consultant at Studio Method writing a tailored proposal. Write a compelling, specific proposal that directly addresses the client\'s stated pain points. Structure: executive_summary, situation_analysis, recommended_approach, scope_of_work, investment, timeline, next_steps. Return as JSON.'
  const result = await callClaude(system, JSON.stringify({ lead: leadData, service: serviceType }), 2000)
  try {
    return typeof result === 'string' ? JSON.parse(result) : result
  } catch {
    return { executive_summary: result }
  }
}

export async function qualifyLeadChatAI(history, message) {
  const system =
    'You are the Studio Method AI assistant. Warm, direct, knowledgeable. You help design leaders understand if Studio Method can help their team. Ask one question at a time. Qualify: team size, pain points, timeline, budget. After 4 exchanges capture name and email. Recommend a specific service. Never be salesy. Under 60 words per message.'
  const messages = history.map((h) => `${h.role}: ${h.content}`).join('\n')
  return callClaude(system, `Conversation so far:\n${messages}\n\nUser: ${message}`, 200)
}

export async function generateProjectStatusAI(project, milestones, timesheets) {
  const system =
    'You are a project manager writing a concise client-facing status update for a design operations consulting engagement. Write 3 sentences: current status, what\'s on track, what needs attention. Be honest and professional.'
  return callClaude(system, JSON.stringify({ project, milestones, timesheets }), 300)
}

export async function generateEmailAI(type, context) {
  const system =
    'You are writing a professional email on behalf of Andrew Smith, founder of Studio Method. Be warm, direct, and specific. Never use corporate jargon. Return JSON: {subject, body}'
  const result = await callClaude(system, JSON.stringify({ type, context }), 600)
  try {
    return typeof result === 'string' ? JSON.parse(result) : result
  } catch {
    return { subject: 'Following up — Studio Method', body: result }
  }
}

export async function analyseClientHealthAI(clientData) {
  const system =
    'You are analysing the health of a consulting engagement. Consider: milestone completion rate, budget burn, engagement frequency, NPS. Return JSON: {score, status, key_risks, recommended_actions}'
  const result = await callClaude(system, JSON.stringify(clientData), 600)
  try {
    return typeof result === 'string' ? JSON.parse(result) : result
  } catch {
    return { score: 80, status: 'healthy', key_risks: [], recommended_actions: [] }
  }
}

export async function generateModuleContentAI(moduleTitle, audience, category) {
  const system =
    'You are writing a training module for Studio Method — a design operations consultancy. Write genuinely useful, practical content that a design manager can apply immediately. Structure: learning_objectives[], introduction, sections[{heading, content, key_points[]}], summary, action_items[], related_modules[]'
  const result = await callClaude(system, JSON.stringify({ moduleTitle, audience, category }), 2000)
  try {
    return typeof result === 'string' ? JSON.parse(result) : result
  } catch {
    return { introduction: result }
  }
}
