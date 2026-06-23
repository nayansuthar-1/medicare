import { useState, useRef, useEffect } from 'react'

/**
 * MediBot — a lightweight, rule-based healthcare assistant.
 * Matches user input against keyword intents and returns canned answers.
 * No backend or API key required, so it runs entirely in the browser.
 */

const INTENTS = [
  {
    keywords: ['appointment', 'book', 'schedule', 'booking', 'reserve'],
    reply:
      "I can help with that! You can book an appointment from the form at the bottom of this page, or call us at +1 (800) 555-0199. Which department do you need — Cardiology, Pediatrics, Dental, or something else?",
  },
  {
    keywords: ['hour', 'open', 'timing', 'time', 'close', 'when'],
    reply:
      'Our clinic is open Monday to Saturday, 8:00 AM – 8:00 PM. Telemedicine visits are available 24/7. 🕗',
  },
  {
    keywords: ['emergency', 'urgent', 'ambulance', '911', 'chest pain', 'bleeding'],
    reply:
      '🚨 If this is a medical emergency, please call your local emergency number (e.g. 911) right away. For urgent but non-life-threatening care, our urgent line is +1 (800) 555-0100.',
  },
  {
    keywords: ['service', 'specialt', 'department', 'treat', 'offer'],
    reply:
      'We offer Cardiology, Neurology, Dental Care, Pediatrics, Orthopedics, and full Lab & Diagnostics. Scroll up to the "Our Services" section to learn more. Which one interests you?',
  },
  {
    keywords: ['insurance', 'cover', 'cost', 'price', 'payment', 'pay', 'bill'],
    reply:
      'We accept all major insurance providers and offer transparent self-pay pricing. For a personalized estimate, share your plan name and the service you need, or call billing at +1 (800) 555-0150. 💳',
  },
  {
    keywords: ['doctor', 'specialist', 'physician', 'dr ', 'staff'],
    reply:
      'Our board-certified team includes Dr. Amelia Reyes (Cardiology), Dr. James Okafor (Neurology), Dr. Sofia Haddad (Pediatrics), and more. Check the "Meet the Team" section above! 👩‍⚕️',
  },
  {
    keywords: ['telemedicine', 'video', 'online', 'virtual', 'remote'],
    reply:
      'Yes! We offer secure video consultations from home, available 24/7. You can request a telemedicine slot in the appointment form. 💻',
  },
  {
    keywords: ['location', 'address', 'where', 'direction', 'parking'],
    reply:
      '📍 We are located at 124 Wellness Ave, Suite 300. Free patient parking is available on-site.',
  },
  {
    keywords: ['record', 'result', 'report', 'prescription', 'history'],
    reply:
      'You can access your medical records, test results, and prescriptions anytime through our digital patient portal. Need a password reset? Call +1 (800) 555-0199. 📱',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'greetings'],
    reply: 'Hello! 👋 I\'m MediBot. How can I help you with your healthcare needs today?',
  },
  {
    keywords: ['thank', 'thanks', 'appreciate', 'great', 'awesome'],
    reply: "You're very welcome! Take care, and feel free to ask if you need anything else. 💙",
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    reply: 'Take care and stay healthy! 👋 We\'re here whenever you need us.',
  },
]

const FALLBACK =
  "I'm not totally sure about that, but I'd love to help. You can ask me about appointments, services, hours, insurance, or our doctors — or call us at +1 (800) 555-0199. 😊";

const QUICK_REPLIES = [
  'Book an appointment',
  'What are your hours?',
  'Do you take insurance?',
  'Telemedicine options',
]

function getReply(text) {
  const lower = text.toLowerCase()
  for (const intent of INTENTS) {
    if (intent.keywords.some((k) => lower.includes(k))) {
      return intent.reply
    }
  }
  return FALLBACK
}

const WELCOME = {
  from: 'bot',
  text: "Hi, I'm MediBot 🤖 — your healthcare assistant. Ask me about appointments, services, hours, or insurance!",
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, typing, open])

  const send = (raw) => {
    const text = (raw ?? input).trim()
    if (!text) return

    setMessages((m) => [...m, { from: 'user', text }])
    setInput('')
    setTyping(true)

    // Simulate the bot "thinking" for a more natural feel.
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', text: getReply(text) }])
    }, 650)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send()
  }

  return (
    <>
      <button
        className={`chat-fab ${open ? 'chat-fab--hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Open chat assistant"
      >
        <span className="chat-fab__icon">💬</span>
        <span className="chat-fab__pulse" />
      </button>

      <div className={`chat ${open ? 'chat--open' : ''}`} role="dialog" aria-label="MediBot chat">
        <div className="chat__header">
          <div className="chat__avatar">🤖</div>
          <div className="chat__title">
            <strong>MediBot</strong>
            <span><span className="chat__online" /> Online · replies instantly</span>
          </div>
          <button className="chat__close" onClick={() => setOpen(false)} aria-label="Close chat">
            ✕
          </button>
        </div>

        <div className="chat__body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`bubble bubble--${m.from}`}>
              {m.text}
            </div>
          ))}

          {typing && (
            <div className="bubble bubble--bot bubble--typing">
              <span /><span /><span />
            </div>
          )}

          {messages.length <= 1 && !typing && (
            <div className="chat__quick">
              {QUICK_REPLIES.map((q) => (
                <button key={q} onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        <form className="chat__input" onSubmit={onSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
            aria-label="Message"
          />
          <button type="submit" aria-label="Send message" disabled={!input.trim()}>
            ➤
          </button>
        </form>
      </div>
    </>
  )
}
