import { useEffect, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, CircleHelp, Sparkles } from 'lucide-react'
import { copy } from '../content/copy'

type ChatState = 'ready' | 'thinking' | 'answered'

export function AssistantCard() {
  const [prompt, setPrompt] = useState(copy.assistant.prompt)
  const [submittedPrompt, setSubmittedPrompt] = useState('')
  const [chatState, setChatState] = useState<ChatState>('ready')

  useEffect(() => {
    if (chatState !== 'thinking') return
    const timeout = window.setTimeout(() => setChatState('answered'), 1350)
    return () => window.clearTimeout(timeout)
  }, [chatState])

  const sendPrompt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const question = prompt.trim()
    if (chatState !== 'ready' || !question) return
    setSubmittedPrompt(question)
    setChatState('thinking')
  }

  return <motion.aside className="assistant-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <div className="assistant-top">
      <span className="assistant-icon"><Sparkles size={19}/></span>
      <span className="assistant-state"><i/> {chatState === 'ready' ? 'READY' : chatState === 'thinking' ? 'THINKING' : 'REPLIED'}</span>
    </div>
    <div className="assistant-label">AEGIS AI ASSISTANT</div>
    <h3>Evidence, made clear.</h3>
    <p>Ask about any finding in plain language. The assistant explains the weakness, shows the evidence turn, and suggests mitigations.</p>

    {chatState === 'ready' ? <form className="assistant-question assistant-compose" onSubmit={sendPrompt}>
      <label className="sr-only" htmlFor="assistant-prompt">Ask the Aegis AI Assistant</label>
      <input id="assistant-prompt" value={prompt} onChange={event => setPrompt(event.target.value)} placeholder={copy.assistant.placeholder} maxLength={240} autoComplete="off"/>
      <button className="assistant-send" type="submit" disabled={!prompt.trim()} aria-label="Send prompt"><ArrowUp size={17}/></button>
    </form> : <div className="assistant-exchange" aria-live="polite">
      {chatState === 'thinking' ? <><div className="assistant-user-message"><span>YOU ASKED</span><p>{submittedPrompt}</p></div><div className="assistant-thinking" role="status"><span className="thinking-spinner" aria-hidden="true"/>{copy.assistant.thinking}</div></> : <div className="assistant-response"><p>{copy.assistant.answer}</p></div>}
    </div>}

    <div className="assistant-status" aria-live="polite"><span className="status-pulse"/> {chatState === 'ready' ? 'Awaiting scan…' : chatState === 'thinking' ? copy.assistant.thinking : copy.assistant.status}</div>
    <div className="assistant-orbit"><CircleHelp size={72}/></div>
  </motion.aside>
}
