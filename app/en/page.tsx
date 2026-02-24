'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function EnHome() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "You're here. Tell me what you dreamed last night." }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [shared, setShared] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
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

  const quickKeywords = ['Snake dream', 'Teeth falling out', 'Being chased', 'Falling dream', 'Ex partner dream', 'Flying dream']

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

  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto">

      {/* Language switch */}
      <div className="flex justify-end px-6 pt-6">
        <Link href="/" className="text-amber-200/60 hover:text-amber-200 text-sm transition-colors">
          한국어 →
        </Link>
      </div>

      {/* Hero */}
      <div className="text-center px-6 pt-6 pb-8 animate-fade-in-up">
        <div className="inline-block mb-4 px-6 py-2 rounded-full bg-amber-900/20 backdrop-blur-sm border border-amber-200/30">
          <span className="text-sm font-medium text-amber-100">
            ✨ Always free · No sign-up
          </span>
        </div>
        <h1 className="hero-title mb-6">
          What is your<br />dream telling you?
        </h1>
        <div className="text-7xl crystal-glow inline-block">🔮</div>
      </div>

      {/* Messages + inline input */}
      <div className="flex-1 px-4 pb-6 space-y-4">

        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="text-xl crystal-glow mb-1 shrink-0">🔮</div>
            )}
            <div className={`max-w-[78%] flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`
                px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap
                ${msg.role === 'user'
                  ? 'bg-amber-600/80 text-white rounded-2xl rounded-br-md'
                  : 'bg-white/10 backdrop-blur-sm text-white/90 rounded-2xl rounded-bl-md border border-white/10'}
              `}>
                {msg.content}
              </div>
              {msg.role === 'assistant' && i > 0 && (
                <div className="flex gap-3 px-1">
                  <button
                    onClick={() => copyMessage(msg.content, i)}
                    className="text-white/35 hover:text-white/60 text-xs transition-colors"
                  >
                    {copiedIndex === i ? '✓ Copied' : 'Copy'}
                  </button>
                  <button
                    onClick={() => shareMessage(msg.content)}
                    className="text-white/35 hover:text-white/60 text-xs transition-colors"
                  >
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
            <div className="text-xl crystal-glow mb-1 shrink-0">🔮</div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="flex gap-1 items-center h-4">
                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        {/* Inline input — right aligned */}
        {!isLoading && (
          <div className="flex items-end gap-2 justify-end mt-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Tell me..."
              className="w-[72%] bg-white/8 border border-white/15 rounded-2xl rounded-br-md px-4 py-2.5 text-white text-sm placeholder:text-white/35 resize-none outline-none focus:border-white/30 transition-colors overflow-hidden"
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-base transition-colors shrink-0"
            >
              🔮
            </button>
          </div>
        )}

        {/* Quick keywords — below input */}
        {messages.length === 1 && !isLoading && (
          <div className="flex flex-wrap gap-2 justify-end pt-1">
            {quickKeywords.map(kw => (
              <button
                key={kw}
                onClick={() => setInput(kw)}
                className="px-3 py-1.5 rounded-full bg-amber-900/30 border border-amber-200/20 text-amber-50/70 text-xs hover:bg-amber-800/40 hover:text-amber-50/90 transition-all"
              >
                {kw}
              </button>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* SEO keywords */}
      <div className="text-center px-6 pt-8 pb-40 animate-fade-in-up">
        <h2 className="text-xl font-bold mb-6 text-white/80">
          📖 Popular Dream Meanings
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {dreamKeywords.map((item) => (
            <Link
              key={item.slug}
              href={`/dream/${item.slug}`}
              className="px-4 py-2 rounded-lg bg-amber-900/20 hover:bg-amber-800/30 border border-amber-200/30 hover:border-amber-200/50 text-amber-50 transition-all duration-300 text-xs font-medium hover:scale-105 backdrop-blur-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
