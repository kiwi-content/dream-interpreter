'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '왔어? 지난 밤에 무슨 꿈 꿨는지 얘기해봐.' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [shared, setShared] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const lastMsgRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

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
      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream: userMessage }),
      })
      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.interpretation }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '지금은 안 보여. 다시 해봐.' }])
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
      await navigator.share({ title: '꿈 해석 결과', text: content, url })
    } else {
      await navigator.clipboard.writeText(url)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    }
  }

  const quickKeywords = ['뱀 꿈', '이빨 빠지는 꿈', '쫓기는 꿈', '죽는 꿈', '돈 줍는 꿈', '전 애인 꿈']

  const dreamKeywords = [
    { name: '뱀 나오는 꿈 해몽', slug: 'snake-dream' },
    { name: '똥 나오는 꿈 해몽', slug: 'poop-dream' },
    { name: '죽는 꿈 해몽', slug: 'death-dream' },
    { name: '고양이 꿈 해몽', slug: 'cat-dream' },
    { name: '불 나오는 꿈 해몽', slug: 'fire-dream' },
    { name: '돈 줍는 꿈 해몽', slug: 'money-dream' },
    { name: '이빨 빠지는 꿈 해몽', slug: 'teeth-dream' },
    { name: '물에 빠지는 꿈 해몽', slug: 'water-dream' },
    { name: '임신하는 꿈 해몽', slug: 'pregnancy-dream' },
    { name: '귀신 나오는 꿈 해몽', slug: 'ghost-dream' },
    { name: '전애인 나오는 꿈 해몽', slug: 'ex-dream' },
    { name: '쫓기는 꿈 해몽', slug: 'chasing-dream' },
    { name: '시험 보는 꿈 해몽', slug: 'exam-dream' },
    { name: '아기 꿈 해몽', slug: 'baby-dream' },
    { name: '결혼하는 꿈 해몽', slug: 'wedding-dream' },
    { name: '개 꿈 해몽', slug: 'dog-dream' },
    { name: '돌아가신 분 꿈 해몽', slug: 'deceased-dream' },
    { name: '피 꿈 해몽', slug: 'blood-dream' },
    { name: '머리카락 꿈 해몽', slug: 'hair-dream' },
    { name: '하늘을 나는 꿈 해몽', slug: 'flying-dream' },
    { name: '호랑이 나오는 꿈 해몽', slug: 'tiger-dream' },
    { name: '사고 꿈 해몽', slug: 'car-accident-dream' },
    { name: '집 꿈 해몽', slug: 'house-dream' },
    { name: '복권 꿈 해몽', slug: 'lottery-dream' },
    { name: '바다 꿈 해몽', slug: 'ocean-dream' },
    { name: '도둑 꿈 해몽', slug: 'thief-dream' },
    { name: '지진 꿈 해몽', slug: 'earthquake-dream' },
    { name: '달 꿈 해몽', slug: 'moon-dream' },
    { name: '무지개 꿈 해몽', slug: 'rainbow-dream' },
    { name: '선물 꿈 해몽', slug: 'gift-dream' },
    { name: '사랑하는 사람 꿈 해몽', slug: 'love-dream' },
    { name: '연애하는 꿈 해몽', slug: 'romance-dream' },
  ]

  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto">

      {/* 언어 전환 */}
      <div className="flex justify-end px-6 pt-6">
        <Link href="/en" className="text-amber-200/60 hover:text-amber-200 text-sm transition-colors">
          English →
        </Link>
      </div>

      {/* 히어로 섹션 */}
      <div className="text-center px-6 pt-6 pb-8 animate-fade-in-up">
        <div className="inline-block mb-4 px-6 py-2 rounded-full bg-amber-900/20 backdrop-blur-sm border border-amber-200/30">
          <span className="text-sm font-medium text-amber-100">
            ✨ 평생 무료 · 회원가입 없음
          </span>
        </div>
        <h1 className="hero-title mb-6">
          당신의 꿈을<br />
          해석합니다
        </h1>
        <div className="text-7xl crystal-glow inline-block">🔮</div>
      </div>

      {/* 메시지 + 인라인 입력 영역 */}
      <div className="flex-1 px-4 pb-6 space-y-4">

        {messages.map((msg, i) => (
          <div key={i} ref={i === messages.length - 1 ? lastMsgRef : null} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
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
                    {copiedIndex === i ? '✓ 복사됨' : '복사'}
                  </button>
                  <button
                    onClick={() => shareMessage(msg.content)}
                    className="text-white/35 hover:text-white/60 text-xs transition-colors"
                  >
                    {shared ? '✓ 공유됨' : '공유'}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* 타이핑 인디케이터 */}
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

        <div ref={bottomRef} />

        {/* 인라인 입력창 — 오른쪽 정렬 */}
        {!isLoading && (
          <div className="flex items-end gap-2 justify-end mt-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="얘기해봐..."
              className={`${messages.length === 1 ? 'w-[88%] input-amber-glow border-amber-300/70' : 'w-[72%] bg-amber-50/90 border-amber-200/50 focus:border-amber-400'} border rounded-2xl rounded-br-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-amber-900/50 resize-none outline-none transition-all overflow-hidden`}
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

        {/* 퀵 키워드 — 입력창 아래 */}
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

      </div>

      {/* SEO 키워드 섹션 */}
      <div className="text-center px-6 pt-8 pb-40 animate-fade-in-up">
        <h2 className="text-xl font-bold mb-6 text-white/80">
          📖 많이 찾는 꿈해몽
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
