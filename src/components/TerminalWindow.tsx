import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { LockKeyhole, Terminal } from 'lucide-react'
import { terminalScript } from '../content/copy'

export function TerminalWindow() {
  const reduced = useReducedMotion()
  const [lines, setLines] = useState<string[]>(reduced ? terminalScript : [])
  const [activeLine, setActiveLine] = useState(-1)
  const [visible, setVisible] = useState(false)
  const terminal = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = terminal.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting) && !document.hidden))
    const syncVisibility = () => setVisible(Boolean(element.getBoundingClientRect().width && element.getBoundingClientRect().bottom > 0 && element.getBoundingClientRect().top < window.innerHeight) && !document.hidden)
    observer.observe(element)
    document.addEventListener('visibilitychange', syncVisibility)
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', syncVisibility) }
  }, [])

  useEffect(() => {
    if (reduced) {
      setLines(terminalScript)
      setActiveLine(-1)
      return
    }
    if (!visible) return

    let stopped = false
    let timer = 0
    const wait = (duration: number) => new Promise<void>(resolve => { timer = window.setTimeout(resolve, duration) })

    const typeScript = async () => {
      while (!stopped) {
        setLines([])
        for (let lineIndex = 0; lineIndex < terminalScript.length; lineIndex += 1) {
          const line = terminalScript[lineIndex]
          setLines(previous => [...previous, ''])
          setActiveLine(lineIndex)

          for (let character = 1; character <= line.length; character += 1) {
            await wait(lineIndex === 0 ? 28 : 12)
            if (stopped) return
            setLines(previous => previous.map((current, index) => index === lineIndex ? line.slice(0, character) : current))
          }

          setActiveLine(-1)
          await wait(lineIndex === 0 ? 260 : 150)
          if (stopped) return
        }
        await wait(2400)
      }
    }

    void typeScript()
    return () => { stopped = true; window.clearTimeout(timer) }
  }, [reduced, visible])

  return <div ref={terminal} className="terminal-window"><div className="terminal-top"><div className="lights"><i/><i/><i/></div><span><Terminal size={13}/> aegis@scan : ~/target-01</span><span className="terminal-live"><i/> LIVE</span></div><div className="terminal-content" aria-live="off">{lines.map((line, index) => <div key={index} className={`term-line ${line.includes('VULNERABLE') ? 'bad' : line.includes('PASS') ? 'good' : line.startsWith('aegis') ? 'prompt' : ''}`}><span className="line-num">{String(index + 1).padStart(2, '0')}</span><span>{line}{activeLine === index && <span className="cursor" aria-hidden="true">█</span>}</span></div>)}{lines.length === 0 && <div className="terminal-wait">Initializing local scan environment<span className="cursor">_</span></div>}</div><div className="terminal-foot"><span><span className="dot-good"/> 5 pipeline stages</span><span>LOCAL MODE <LockKeyhole className="terminal-lock" size={10}/></span></div></div>
}
