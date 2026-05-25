import { useState, useRef, useEffect } from 'react'
import { Send, X, MessageCircle, Sparkles } from 'lucide-react'
import { qualifyLeadChatAI } from '@/lib/anthropic'

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi there! I'm the Studio Method assistant. I help design leaders figure out if Studio Method can help their team. What's the biggest challenge your design team is facing right now?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = { role: 'user', content: input }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)
    try {
      const reply = await qualifyLeadChatAI(messages, input)
      setMessages((m) => [...m, { role: 'assistant', content: reply }])
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: "I'm having trouble right now. Email us at hello@studiomethod.com.au" }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-navy rounded-full shadow-xl flex items-center justify-center text-white hover:bg-navy-mid transition-colors animate-pulse-gold"
      >
        <MessageCircle size={22} />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border border-border flex flex-col" style={{ height: 440 }}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-navy text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-gold" />
              <span className="text-sm font-semibold">Studio Method Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white"><X size={16} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-navy text-white' : 'bg-surface text-ink'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-surface px-3 py-2 rounded-xl text-sm text-muted">
                  <span className="animate-pulse">Thinking…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t border-border flex gap-2">
            <input
              className="flex-1 text-sm px-3 py-2 border border-border rounded-lg focus:outline-none focus:border-gold"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask me anything…"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="w-8 h-8 bg-gold text-white rounded-lg flex items-center justify-center disabled:opacity-50 hover:bg-gold-light transition-colors"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
