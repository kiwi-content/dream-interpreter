'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_MESSAGE = "Meow~ Tell me what you dreamed last night!"

const dreamCategories = [
  { emoji: '🐍', label: 'Snake', keyword: 'Snake dream' },
  { emoji: '🦷', label: 'Teeth', keyword: 'Teeth falling out' },
  { emoji: '🏃', label: 'Chased', keyword: 'Being chased' },
  { emoji: '💀', label: 'Death', keyword: 'Death dream' },
  { emoji: '💰', label: 'Money', keyword: 'Money dream' },
  { emoji: '💔', label: 'Ex partner', keyword: 'Ex partner dream' },
]

const reviews = [
  { text: 'Goosebumps... it was spot on', stars: 5 },
  { text: "Can't believe this is free", stars: 5 },
  { text: 'Shared it with all my friends!', stars: 5 },
  { text: 'I check every morning lol', stars: 4 },
]

export default function EnHome() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: INITIAL_MESSAGE }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [shared, setShared] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [isTypingDone, setIsTypingDone] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewFading, setReviewFading] = useState(false)
  const [todayCount, setTodayCount] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const lastMsgRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Typing animation
  useEffect(() => {
    if (messages.length > 1) return
    let i = 0
    const timer = setInterval(() => {
      i++
      setTypedText(INITIAL_MESSAGE.slice(0, i))
      if (i >= INITIAL_MESSAGE.length) {
        clearInterval(timer)
        setIsTypingDone(true)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [messages.length])

  // Stats count-up animation
  useEffect(() => {
    const base = 800 + Math.floor(Math.random() * 600)
    let current = 0
    const step = Math.ceil(base / 40)
    const timer = setInterval(() => {
      current += step
      if (current >= base) {
        current = base
        clearInterval(timer)
      }
      setTodayCount(current)
    }, 40)
    return () => clearInterval(timer)
  }, [])

  // Review auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewFading(true)
      setTimeout(() => {
        setReviewIndex(prev => (prev + 1) % reviews.length)
        setReviewFading(false)
      }, 500)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (messages.length <= 1) return
    if (isLoading) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    } else {
      lastMsgRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [messages, isLoading])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    if (textareaRef.current) textareaRef.current.style.height = '44px'
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/interpret-en', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream: userMessage }),
      })
      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.interpretation }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Can't see it right now. Try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    e.target.style.height = '44px'
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
  }

  const copyMessage = async (content: string, index: number) => {
    await navigator.clipboard.writeText(content)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const shareMessage = async (content: string) => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title: 'My Dream Interpretation', text: content, url })
    } else {
      await navigator.clipboard.writeText(url)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    }
  }

  const dreamKeywords = [
    { name: 'Snake dream', slug: 'snake-dream' },
    { name: 'Teeth falling out', slug: 'teeth-dream' },
    { name: 'Being chased', slug: 'chasing-dream' },
    { name: 'Flying dream', slug: 'flying-dream' },
    { name: 'Falling dream', slug: 'fall-dream' },
    { name: 'Death dream', slug: 'death-dream' },
    { name: 'Pregnancy dream', slug: 'pregnancy-dream' },
    { name: 'Ex partner dream', slug: 'ex-dream' },
    { name: 'Wedding dream', slug: 'wedding-dream' },
    { name: 'Fire dream', slug: 'fire-dream' },
    { name: 'Water dream', slug: 'water-dream' },
    { name: 'Ghost dream', slug: 'ghost-dream' },
    { name: 'Exam dream', slug: 'exam-dream' },
    { name: 'Money dream', slug: 'money-dream' },
    { name: 'Baby dream', slug: 'baby-dream' },
  ]

  const isLanding = messages.length === 1

  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto">

      {/* Language switch */}
      <div className="flex justify-end px-6 pt-6">
        <Link href="/" className="text-stone-400 hover:text-stone-600 text-sm transition-colors">
          한국어 →
        </Link>
      </div>

      {/* Hero */}
      <div className="text-center px-6 pt-6 pb-2 animate-fade-in-up relative overflow-visible">
        <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white border border-stone-200 shadow-sm">
          <span className="text-sm font-medium text-stone-700">
            ✨ Always free · No sign-up
          </span>
        </div>
        <h1 className="hero-title mb-4">
          A cat reads<br />
          your dreams
        </h1>

        {/* Floating bubbles + emoji */}
        <div className="relative w-full max-w-md mx-auto h-52 mb-2" aria-hidden="true">
          <div className="bubble bubble-1 bg-sky-100 text-sky-800 border border-sky-200/60">
            🌙 Last night&apos;s dream?
          </div>
          <div className="bubble bubble-2 bg-amber-100 text-amber-800 border border-amber-200/60">
            I&apos;ll read it for you
          </div>
          <div className="bubble bubble-3 bg-purple-100 text-purple-800 border border-purple-200/60">
            It&apos;s free
          </div>
          <div className="bubble bubble-4 bg-emerald-100 text-emerald-800 border border-emerald-200/60">
            Let&apos;s start!
          </div>
          <span className="emoji-float emoji-1">😸</span>
          <span className="emoji-float emoji-2">🥳</span>
          <span className="emoji-float emoji-3">😴</span>
          <span className="emoji-float emoji-4">🌙</span>
          <span className="emoji-float emoji-5">✨</span>
        </div>

        {/* Character illustrations */}
        <div className="relative w-full max-w-xs mx-auto h-24 mb-2" aria-hidden="true">
          {/* Star */}
          <svg className="char-item char-side-l" width="48" height="58" viewBox="0 0 80 90" fill="none">
            <path d="M40 4L47 24L68 18L54 34L70 48L48 44L40 64L32 44L10 48L26 34L12 18L33 24Z" fill="#fde68a" stroke="#eab308" strokeWidth="1.5"/>
            <rect x="28" y="60" width="5" height="14" rx="2.5" fill="#475569"/><rect x="46" y="60" width="5" height="14" rx="2.5" fill="#475569"/>
            <ellipse cx="30.5" cy="75" rx="4.5" ry="2.5" fill="#67e8f9"/><ellipse cx="48.5" cy="75" rx="4.5" ry="2.5" fill="#67e8f9"/>
            <circle cx="32" cy="34" r="4.5" fill="#1e293b"/><circle cx="48" cy="34" r="4.5" fill="#1e293b"/>
            <circle cx="33.3" cy="32.5" r="1.8" fill="white"/><circle cx="49.3" cy="32.5" r="1.8" fill="white"/>
            <circle cx="25" cy="40" r="3" fill="#fca5a5" opacity="0.6"/><circle cx="55" cy="40" r="3" fill="#fca5a5" opacity="0.6"/>
            <path d="M36 42 Q40 47 44 42" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>

          {/* Cat (main) */}
          <svg className="char-item char-center" width="80" height="90" viewBox="0 0 80 95" fill="none">
            <ellipse cx="40" cy="58" rx="24" ry="20" fill="#fde68a" stroke="#eab308" strokeWidth="1.2"/>
            <circle cx="40" cy="32" r="22" fill="#fde68a" stroke="#eab308" strokeWidth="1.2"/>
            <path d="M20 18L15 0L30 14Z" fill="#fbbf24" stroke="#eab308" strokeWidth="0.8"/>
            <path d="M60 18L65 0L50 14Z" fill="#fbbf24" stroke="#eab308" strokeWidth="0.8"/>
            <path d="M21 16L17 4L29 14Z" fill="#fda4af"/>
            <path d="M59 16L63 4L51 14Z" fill="#fda4af"/>
            <rect x="24" y="73" width="6" height="12" rx="3" fill="#475569"/>
            <rect x="50" y="73" width="6" height="12" rx="3" fill="#475569"/>
            <ellipse cx="27" cy="86" rx="5.5" ry="3" fill="#67e8f9"/>
            <ellipse cx="53" cy="86" rx="5.5" ry="3" fill="#67e8f9"/>
            <path d="M62 55 Q80 38 72 22" stroke="#fbbf24" strokeWidth="5" fill="none" strokeLinecap="round"/>
            <rect x="12" y="48" width="5" height="14" rx="2.5" fill="#475569" transform="rotate(-10 14 48)"/>
            <rect x="63" y="48" width="5" height="14" rx="2.5" fill="#475569" transform="rotate(10 65 48)"/>
            <circle cx="30" cy="30" r="6" fill="#1e293b"/>
            <circle cx="50" cy="30" r="6" fill="#1e293b"/>
            <circle cx="32" cy="28" r="2.5" fill="white"/>
            <circle cx="52" cy="28" r="2.5" fill="white"/>
            <circle cx="29" cy="32" r="1.2" fill="white" opacity="0.5"/>
            <circle cx="49" cy="32" r="1.2" fill="white" opacity="0.5"/>
            <circle cx="21" cy="38" r="4" fill="#fca5a5" opacity="0.5"/>
            <circle cx="59" cy="38" r="4" fill="#fca5a5" opacity="0.5"/>
            <ellipse cx="40" cy="36" rx="3" ry="2.5" fill="#f472b6"/>
            <path d="M35 40 Q40 44 45 40" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <line x1="10" y1="34" x2="26" y2="36" stroke="#eab308" strokeWidth="0.8"/>
            <line x1="10" y1="38" x2="26" y2="38" stroke="#eab308" strokeWidth="0.8"/>
            <line x1="54" y1="36" x2="70" y2="34" stroke="#eab308" strokeWidth="0.8"/>
            <line x1="54" y1="38" x2="70" y2="38" stroke="#eab308" strokeWidth="0.8"/>
          </svg>

          {/* Moon */}
          <svg className="char-item char-side-r" width="48" height="52" viewBox="0 0 100 100" fill="none">
            <path d="M65 10C35 10 15 35 15 55C15 75 30 90 50 90C70 90 85 75 85 55C75 65 55 60 50 40C48 30 55 15 65 10Z" fill="#fef3c7" stroke="#eab308" strokeWidth="1.5"/>
            <rect x="35" y="84" width="6" height="12" rx="3" fill="#475569"/><rect x="55" y="84" width="6" height="12" rx="3" fill="#475569"/>
            <ellipse cx="38" cy="97" rx="5" ry="2.5" fill="#67e8f9"/><ellipse cx="58" cy="97" rx="5" ry="2.5" fill="#67e8f9"/>
            <circle cx="35" cy="55" r="5" fill="#1e293b"/><circle cx="52" cy="52" r="5" fill="#1e293b"/>
            <circle cx="36.3" cy="53.2" r="2" fill="white"/><circle cx="53.3" cy="50.2" r="2" fill="white"/>
            <circle cx="27" cy="62" r="3.5" fill="#fca5a5" opacity="0.5"/><circle cx="58" cy="58" r="3.5" fill="#fca5a5" opacity="0.5"/>
            <path d="M38 63 Q44 70 52 62" stroke="#1e293b" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Live stats */}
      {isLanding && (
        <div className="text-center pb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 live-dot" />
            <span className="text-stone-500 text-sm">
              <span className="text-stone-800 font-bold">{todayCount.toLocaleString()}</span> dreams interpreted today
            </span>
          </div>
        </div>
      )}

      {/* Messages + input */}
      <div className="flex-1 px-4 pb-6 space-y-4">

        {messages.map((msg, i) => (
          <div key={i} ref={i === messages.length - 1 ? lastMsgRef : null} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="text-xl mb-1 shrink-0">😸</div>
            )}
            <div className={`max-w-[78%] flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`
                px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap
                ${msg.role === 'user'
                  ? 'bg-amber-500 text-white rounded-2xl rounded-br-md shadow-md'
                  : 'bg-white text-stone-800 rounded-2xl rounded-bl-md border border-stone-200 shadow-sm'}
              `}>
                {msg.role === 'assistant' && i === 0 && !isTypingDone
                  ? <>{typedText}<span className="inline-block w-0.5 h-4 bg-amber-500 ml-0.5 animate-pulse align-middle" /></>
                  : msg.content}
              </div>
              {msg.role === 'assistant' && i > 0 && (
                <div className="flex gap-3 px-1">
                  <button onClick={() => copyMessage(msg.content, i)} className="text-stone-400 hover:text-stone-600 text-xs transition-colors">
                    {copiedIndex === i ? '✓ Copied' : 'Copy'}
                  </button>
                  <button onClick={() => shareMessage(msg.content)} className="text-stone-400 hover:text-stone-600 text-xs transition-colors">
                    {shared ? '✓ Shared' : 'Share'}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex items-end gap-2 justify-start">
            <div className="text-xl mb-1 shrink-0">😸</div>
            <div className="bg-white border border-stone-200 shadow-sm px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="flex gap-1 items-center h-4">
                <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />

        {/* Input */}
        {!isLoading && (
          <div className="flex items-end gap-2 justify-end mt-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Tell me your dream..."
              className={`${isLanding ? 'w-[88%] input-amber-glow border-amber-300' : 'w-[72%] bg-white border-stone-200 focus:border-amber-400'} border rounded-2xl rounded-br-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-stone-400 resize-none outline-none transition-all overflow-hidden shadow-sm`}
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-base transition-colors shrink-0 shadow-md"
            >
              😸
            </button>
          </div>
        )}

        {/* Dream categories */}
        {isLanding && !isLoading && (
          <div className="pt-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-stone-400 text-xs text-center mb-3">What did you dream about?</p>
            <div className="grid grid-cols-3 gap-2">
              {dreamCategories.map(cat => (
                <button
                  key={cat.keyword}
                  onClick={() => setInput(cat.keyword)}
                  className="dream-category-card text-center"
                >
                  <div className="text-2xl mb-1">{cat.emoji}</div>
                  <div className="text-stone-600 text-xs font-medium">{cat.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Landing-only sections */}
      {isLanding && (
        <>
          {/* User reviews */}
          <div className="px-6 pb-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="text-center">
              <p className="text-stone-400 text-xs mb-3">User reviews</p>
              <div className="inline-block px-6 py-4 rounded-2xl bg-white border border-stone-200 shadow-sm min-h-[72px]">
                <div className={reviewFading ? 'review-exit' : 'review-enter'}>
                  <div className="text-amber-400 text-sm mb-1">
                    {'★'.repeat(reviews[reviewIndex].stars)}{'☆'.repeat(5 - reviews[reviewIndex].stars)}
                  </div>
                  <p className="text-stone-600 text-sm">&ldquo;{reviews[reviewIndex].text}&rdquo;</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO keywords */}
          <div className="text-center px-6 pt-4 pb-40 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-lg font-bold mb-5 text-stone-700">
              Popular Dream Meanings
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {dreamKeywords.map((item, i) => (
                <Link
                  key={item.slug}
                  href={`/dream/${item.slug}`}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white hover:bg-amber-50 border border-stone-200 hover:border-amber-300 text-stone-600 transition-all duration-300 text-xs font-medium shadow-sm"
                >
                  {i < 3 && (
                    <span className="text-sm">{['🥇', '🥈', '🥉'][i]}</span>
                  )}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  )
}
