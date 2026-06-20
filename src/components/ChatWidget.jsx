import { useEffect, useRef, useState } from 'react'
import './ChatWidget.css'

// The chatbot backend (Cloudflare Worker → Gemini). CORS is open there, so the
// site can call it cross-origin from chicoryman.com.
const API = 'https://chat.chicoryman.com/api/chat'

const GREETING =
  "Hi! I'm a small bot that knows about Yonghao and the things he's built. " +
  'Ask me about his projects, his interests, or how to reach him.'

const SUGGESTIONS = [
  'What does Yonghao work on?',
  'Tell me about the NeRF project',
  "What's he into outside of code?",
]

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Turn bare URLs / emails in bot text into safe links.
function renderText(text) {
  const re = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g
  const out = []
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const isEmail = m[0].includes('@') && !m[0].startsWith('http')
    out.push(
      isEmail ? (
        <a key={i++} href={`mailto:${m[0]}`}>{m[0]}</a>
      ) : (
        <a key={i++} href={m[0]} target="_blank" rel="noopener noreferrer">{m[0]}</a>
      ),
    )
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: GREETING }])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [showSuggest, setShowSuggest] = useState(true)
  const logRef = useRef(null)
  const inputRef = useRef(null)

  // Keep the transcript we send to the API (user/assistant only).
  const historyRef = useRef([])

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [messages, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  async function send(text, attempt = 0) {
    const q = text.trim()
    // On a retry we're already "busy" by design, so only the first call guards.
    if (!q || (busy && attempt === 0)) return

    if (attempt === 0) {
      setShowSuggest(false)
      setInput('')
      setMessages((m) => [...m, { role: 'user', text: q }, { role: 'bot', text: '', pending: true }])
      historyRef.current.push({ role: 'user', content: q })
      setBusy(true)
    }

    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: historyRef.current }),
      })

      if (!res.ok || !res.body) {
        let data = {}
        try {
          data = await res.json()
        } catch {}
        // 429 = the shared free-tier quota is momentarily exhausted. Wait the
        // hint the server gives us and retry a couple of times before giving up,
        // so a bit of traffic doesn't look like a dead bot.
        if (res.status === 429 && attempt < 2) {
          const wait = Math.min(data.retryAfterMs || 6000, 15000)
          updateLast("One sec — lots of questions right now, let me try again…", false)
          await sleep(wait)
          await send(q, attempt + 1)
          return
        }
        failLast(data.error || 'The bot is unavailable right now.')
        historyRef.current.pop()
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let answer = ''

      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const frames = buffer.split('\n\n')
        buffer = frames.pop() ?? ''
        for (const frame of frames) {
          for (const line of frame.split('\n')) {
            if (!line.startsWith('data:')) continue
            const payload = line.slice(5).trim()
            if (!payload) continue
            try {
              const obj = JSON.parse(payload)
              if (obj.text) {
                answer += obj.text
                updateLast(answer, true)
              }
            } catch {}
          }
        }
      }

      if (answer.trim()) {
        updateLast(answer, false)
        historyRef.current.push({ role: 'assistant', content: answer })
      } else {
        updateLast('Hmm, I came up empty. Try rephrasing?', false)
        historyRef.current.pop()
      }
    } catch {
      failLast('Something went wrong reaching the bot. Please try again.')
      historyRef.current.pop()
    } finally {
      // Only the original call owns the busy flag; retries run nested inside it.
      if (attempt === 0) {
        setBusy(false)
        inputRef.current?.focus()
      }
    }
  }

  // Replace the trailing (pending) bot message's text.
  function updateLast(text, streaming) {
    setMessages((m) => {
      const copy = m.slice()
      copy[copy.length - 1] = { role: 'bot', text, pending: false, streaming }
      return copy
    })
  }
  function failLast(text) {
    setMessages((m) => {
      const copy = m.slice()
      copy[copy.length - 1] = { role: 'bot', text, error: true }
      return copy
    })
  }

  if (!open) {
    return (
      <button className="cw-launch" type="button" onClick={() => setOpen(true)} aria-label="Open the chatbot">
        <span className="cw-launch__dot" aria-hidden="true" />
        Ask about me
      </button>
    )
  }

  return (
    <section className="cw-panel" role="dialog" aria-label="Ask about Yonghao">
      <header className="cw-head">
        <div className="cw-head__left">
          <span className="cw-mark" aria-hidden="true">YL</span>
          <div>
            <h2 className="cw-title">Ask about Yonghao</h2>
            <p className="cw-sub">a little bot that knows his projects</p>
          </div>
        </div>
        <button className="cw-close" type="button" onClick={() => setOpen(false)} aria-label="Close">
          ✕
        </button>
      </header>

      <div className="cw-log" ref={logRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`cw-msg cw-msg--${msg.role}`}>
            <span className="cw-who">{msg.role === 'user' ? 'You' : 'Chicory'}</span>
            <div
              className={
                'cw-bubble' +
                (msg.streaming ? ' is-streaming' : '') +
                (msg.error ? ' cw-bubble--error' : '')
              }
            >
              {msg.pending ? (
                <span className="cw-dots"><span>.</span><span>.</span><span>.</span></span>
              ) : msg.role === 'bot' ? (
                renderText(msg.text)
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
      </div>

      {showSuggest && (
        <div className="cw-suggest">
          {SUGGESTIONS.map((s) => (
            <button key={s} className="cw-chip" type="button" onClick={() => send(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        className="cw-form"
        onSubmit={(e) => {
          e.preventDefault()
          send(input)
        }}
      >
        <input
          ref={inputRef}
          className="cw-input"
          type="text"
          value={input}
          maxLength={2000}
          placeholder="Type a question…"
          aria-label="Your question"
          onChange={(e) => setInput(e.target.value)}
          disabled={busy}
        />
        <button className="cw-send" type="submit" disabled={busy}>
          Send
        </button>
      </form>

      <div className="cw-foot">Answers come from Gemini — it can be wrong.</div>
    </section>
  )
}
