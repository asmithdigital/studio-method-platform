# Standalone Prompt: Generate All 12 Studio Method Training Module Scripts

## How to use this prompt

Copy the entire content of this document into a new Claude conversation. Claude will generate the full script content for all 12 Studio Method training modules, ready to paste into `src/lib/constants.js` or use for video/audio production.

---

## THE PROMPT

You are helping to write the full script content for 12 training modules in the Studio Method training platform. Studio Method is a design operations methodology built inside a real Australian organisation. The methodology consists of: the filter gate (intake process), three pathways (Discovery, Delivery, Self-Serve), three ceremonies (Monday Backlog Review, Wednesday Studio Session, Friday Close), journey management practice, design system governance, and an AI orchestration layer.

The training platform serves three audiences:
- **Both (client + consultant)**: Modules that teach the methodology to anyone implementing it
- **Client**: Modules specific to organisations receiving a Studio Method engagement
- **Consultant**: Modules specific to Studio Method consultants delivering engagements

Please generate complete, detailed script content for each of the following 12 modules. Each module script should be:
- **2000–3500 words** of body content
- Written in direct, practical, first-person voice
- Based on real implementation experience, not theory
- Immediately applicable — every module should end with 3 specific action items
- Free of jargon, corporate language, and unnecessary qualifications

For each module, provide the content in this exact JSON structure (matching the existing `content` schema in `FAKE_TRAINING_MODULES`):

```json
{
  "learning_objectives": ["string", "string", "string"],
  "introduction": "2-3 paragraph introduction",
  "sections": [
    {
      "heading": "Section heading",
      "content": "Full section body (400–700 words)",
      "key_points": ["point 1", "point 2", "point 3"]
    }
  ],
  "summary": "One-paragraph summary",
  "action_items": ["action 1", "action 2", "action 3"],
  "related_modules": ["module-slug-1", "module-slug-2"]
}
```

---

## The 12 modules to generate

### Module 1: Welcome to Studio Method
- **Audience**: Both
- **Category**: methodology
- **Estimated time**: 15 minutes
- **Focus**: Introduction to the platform, the methodology, how to use the training, what makes Studio Method different from other frameworks

### Module 2: The Studio Operating Model
- **Audience**: Both
- **Category**: methodology
- **Estimated time**: 25 minutes
- **Focus**: The complete operating model — what a "studio" means versus a conventional design team structure, collective visibility, three ceremonies overview, what the model produces

### Module 3: How Work Flows In — The Filter Gate
- **Audience**: Both
- **Category**: process
- **Estimated time**: 20 minutes
- **Focus**: The filter gate mechanism, three questions every request must answer, how to run the filter gate at Friday Close, common objections and responses

### Module 4: Three Pathways — Discovery, Delivery, Self-Serve
- **Audience**: Both
- **Category**: process
- **Estimated time**: 30 minutes
- **Focus**: Why treating all design work the same creates chaos, Discovery pathway (investigative work), Delivery pathway (defined work), Self-Serve pathway (documented work), assigning requests to pathways

### Module 5: Definition of Done — What Good Looks Like
- **Audience**: Both
- **Category**: process
- **Estimated time**: 20 minutes
- **Focus**: What a definition of done is, why it must be agreed before work starts, five components of a good definition, what happens without one, how to write one for Discovery and Delivery

### Module 6: Journey Management in Practice
- **Audience**: Client
- **Category**: methodology
- **Estimated time**: 35 minutes
- **Focus**: Journey maps vs journey management, four components of a journey management practice, single source of truth, research pipeline, decision framework, quarterly review, starting from scratch

### Module 7: Running a Studio Session
- **Audience**: Consultant
- **Category**: process
- **Estimated time**: 25 minutes
- **Focus**: Studio session structure (5-40-15), why it becomes a status meeting and how to prevent it, facilitating generative discussion, the help board, common failure modes, remote sessions

### Module 8: The AI Orchestration Layer Explained
- **Audience**: Both
- **Category**: ai_layer
- **Estimated time**: 40 minutes
- **Focus**: What the AI layer is, the knowledge problem it solves, four core tool connections (Figma, Miro, GitHub, ZeroHeight), relationship to the operating model, why the operating model must come first

### Module 9: Connecting Your Tools — Figma, Miro, GitHub, Slack
- **Audience**: Consultant
- **Category**: ai_layer
- **Estimated time**: 45 minutes
- **Focus**: Technical architecture of the AI layer, API access for each tool, content quality requirements, the tool audit process, Slack bot deployment, what to assess before architecture design

### Module 10: Design System Governance
- **Audience**: Both
- **Category**: methodology
- **Estimated time**: 30 minutes
- **Focus**: Why most design systems fail (governance, not technology), four governance processes (contribution, change management, quality assurance, access), the discrepancy audit, ROI case

### Module 11: Managing Performance in a Studio Model
- **Audience**: Consultant
- **Category**: leadership
- **Estimated time**: 35 minutes
- **Focus**: How performance management differs in collective working, individual vs collective expectations, common performance conversations (passive participant, quality gap, dominator), the visibility effect

### Module 12: Building Your Client Relationship
- **Audience**: Consultant
- **Category**: leadership
- **Estimated time**: 20 minutes
- **Focus**: What clients are actually buying (change, not deliverables), five trust-building practices, weekly update, naming problems early, the honest conversation, making the client look good internally

---

## Style guide for scripts

**Voice**: Direct, practical, first-person. Write as if Andrew Smith is speaking from experience, not presenting theory. Use "I" when referencing the methodology's origin story.

**Tone**: Confident but not arrogant. The methodology works because it was built from practice. Acknowledge that implementation is hard and takes time.

**Format**: No bullet lists inside section body text — write in full paragraphs. Key points can be bullets. Action items should be concrete and completable within one week.

**Length**: Each section body should be 400–700 words. Don't abbreviate. This is self-paced reading content, not slide text.

**Examples**: Ground every principle in a specific, observable situation. "Most requests arrive underscoped" — show what that looks like in practice.

**Action items**: Must be specific and executable. Not "think about your team structure" — instead "List every active project in your backlog. For each, write one sentence that is the definition of done. Note which ones you cannot write a definition for — those are your filter gate backlog."

---

## Output format

Generate each module script as a separate code block labelled with the module number and title:

```
// MODULE 1: Welcome to Studio Method
{
  "learning_objectives": [...],
  ...
}
```

After generating all 12, provide a short (100-word) summary of any modules where you had to make assumptions about Studio Method-specific content that was not provided in this prompt.
