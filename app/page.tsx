'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const DotLottiePlayer = 'dotlottie-wc' as any

const INITIAL_MESSAGE = '냐옹~ 어젯밤에 무슨 꿈 꿨냥? 얘기해봐냥!'

const dreamCategories = [
  { emoji: '🐍', label: '뱀 꿈', keyword: '뱀 꿈' },
  { emoji: '🦷', label: '이빨 꿈', keyword: '이빨 빠지는 꿈' },
  { emoji: '🏃', label: '쫓기는 꿈', keyword: '쫓기는 꿈' },
  { emoji: '💀', label: '죽는 꿈', keyword: '죽는 꿈' },
  { emoji: '💰', label: '돈 꿈', keyword: '돈 줍는 꿈' },
  { emoji: '💔', label: '전 애인 꿈', keyword: '전 애인 꿈' },
]

const reviews = [
  { text: '소름 돋았어요... 진짜 딱 맞아요', stars: 5 },
  { text: '무료인데 이 정도면 대박이에요', stars: 5 },
  { text: '친구한테도 공유했어요! 신기해요', stars: 5 },
  { text: '매일 아침마다 들어와요 ㅋㅋ', stars: 4 },
]

export default function Home() {
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const q = params.get('q')
    if (q) {
      setInput(q)
      window.history.replaceState({}, '', '/')
    }
  }, [])

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
    }, 60)
    return () => clearInterval(timer)
  }, [messages.length])

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
      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream: userMessage }),
      })
      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.interpretation }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '으냥... 지금은 안 보인다냥. 다시 해봐냥!' }])
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
      await navigator.share({ title: '꿈 해석 결과다냥', text: content, url })
    } else {
      await navigator.clipboard.writeText(url)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    }
  }

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
    { name: '전 애인이 나오는 꿈 해몽', slug: 'ex-dream' },
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
    { name: '사랑하는 사람이 나오는 꿈 해몽', slug: 'love-dream' },
    { name: '연애하는 꿈 해몽', slug: 'romance-dream' },
    { name: '물건 잃어버리는 꿈 해몽', slug: 'lost-dream' },
    { name: '길 잃는 꿈 해몽', slug: 'maze-dream' },
    { name: '엘리베이터 꿈 해몽', slug: 'elevator-dream' },
    { name: '계단 꿈 해몽', slug: 'stairs-dream' },
    { name: '기차 꿈 해몽', slug: 'train-dream' },
    { name: '버스 꿈 해몽', slug: 'bus-dream' },
    { name: '비행기 꿈 해몽', slug: 'airplane-dream' },
    { name: '배 타는 꿈 해몽', slug: 'boat-dream' },
    { name: '학교 꿈 해몽', slug: 'school-dream' },
    { name: '회사 꿈 해몽', slug: 'office-dream' },
    { name: '이사하는 꿈 해몽', slug: 'moving-dream' },
    { name: '청소하는 꿈 해몽', slug: 'cleaning-dream' },
    { name: '비 오는 꿈 해몽', slug: 'rain-dream' },
    { name: '눈 오는 꿈 해몽', slug: 'snow-dream' },
    { name: '바람 꿈 해몽', slug: 'wind-dream' },
    { name: '산 꿈 해몽', slug: 'mountain-dream' },
    { name: '꽃 꿈 해몽', slug: 'flower-dream' },
    { name: '나무 꿈 해몽', slug: 'tree-dream' },
    { name: '과일 꿈 해몽', slug: 'fruit-dream' },
    { name: '음식 먹는 꿈 해몽', slug: 'eating-dream' },
    { name: '요리하는 꿈 해몽', slug: 'cooking-dream' },
    { name: '목욕하는 꿈 해몽', slug: 'bath-dream' },
    { name: '화장실 꿈 해몽', slug: 'toilet-dream' },
    { name: '옷 꿈 해몽', slug: 'clothes-dream' },
    { name: '신발 꿈 해몽', slug: 'shoes-dream' },
    { name: '가방 꿈 해몽', slug: 'bag-dream' },
    { name: '핸드폰 꿈 해몽', slug: 'phone-dream' },
    { name: '사진 찍는 꿈 해몽', slug: 'photo-dream' },
    { name: '편지 받는 꿈 해몽', slug: 'letter-dream' },
    { name: '여행 가는 꿈 해몽', slug: 'travel-dream' },
    { name: '병원 꿈 해몽', slug: 'hospital-dream' },
    { name: '수술하는 꿈 해몽', slug: 'surgery-dream' },
  ]

  const isLanding = messages.length === 1

  return (
    <>
      <Script
        src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js"
        type="module"
        strategy="afterInteractive"
      />
      <div className="min-h-screen flex flex-col max-w-2xl mx-auto">

      {/* 언어 전환 */}
      <div className="flex justify-end px-6 pt-6">
        <Link href="/en" className="text-stone-400 hover:text-stone-600 text-sm transition-colors">
          English →
        </Link>
      </div>

      {/* 히어로 섹션 */}
      <div className="text-center px-6 pt-6 pb-2 animate-fade-in-up relative overflow-visible">
        <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white border border-stone-200 shadow-sm">
          <span className="text-sm font-medium text-stone-700">
            ✨ 평생 무료다냥 · 회원가입 없다냥
          </span>
        </div>
        <h1 className="hero-title mb-4">
          고양이가<br />
          꿈을 읽어준다냥
        </h1>

        {/* 말풍선 + 상단 고양이 Lottie */}
        <div className="relative w-full max-w-md mx-auto h-60 mb-1" aria-hidden="true">
          <div className="absolute inset-x-0 bottom-0 z-0 flex justify-center pointer-events-none">
            <DotLottiePlayer
              src="https://lottie.host/b4094ce0-eda0-4102-908c-9a2338c13b15/P877DJHYVx.lottie"
              style={{ width: 'clamp(220px, 58vw, 300px)', height: 'clamp(220px, 58vw, 300px)' }}
              autoplay
              loop
            />
          </div>
          <div className="bubble bubble-1 bg-sky-100 text-sky-800 border border-sky-200/60">
            🌙 어젯밤 꿈이냥?
          </div>
          <div className="bubble bubble-2 bg-amber-100 text-amber-800 border border-amber-200/60">
            해몽해줄게냥
          </div>
          <div className="bubble bubble-3 bg-emerald-100 text-emerald-800 border border-emerald-200/60">
            시작하자냥!
          </div>
        </div>
      </div>

      {/* 실시간 통계 */}
      {isLanding && (
        <div className="text-center pb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 live-dot" />
            <span className="text-stone-500 text-sm">
              오늘 <span className="text-stone-800 font-bold">{todayCount.toLocaleString()}명</span>이 꿈을 해석했다냥
            </span>
          </div>
        </div>
      )}

      {/* 메시지 + 입력 영역 */}
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
                    {copiedIndex === i ? '✓ 복사됨' : '복사'}
                  </button>
                  <button onClick={() => shareMessage(msg.content)} className="text-stone-400 hover:text-stone-600 text-xs transition-colors">
                    {shared ? '✓ 공유됨' : '공유'}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

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

        {/* 입력창 - 히어로 바로 아래 */}
        {!isLoading && (
          <div className="flex items-end gap-2 justify-end mt-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="꿈 얘기해봐냥..."
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

        {/* 인기 꿈 카테고리 */}
        {isLanding && !isLoading && (
          <div className="pt-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-stone-400 text-xs text-center mb-3">어떤 꿈을 꿨냥?</p>
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

      {/* 랜딩 전용 섹션 */}
      {isLanding && (
        <>
          <div className="px-6 pb-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="text-center">
              <p className="text-stone-400 text-xs mb-3">이용자 후기다냥</p>
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

          <div className="text-center px-6 pt-4 pb-40 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-lg font-bold mb-5 text-stone-700">
              많이 찾는 꿈해몽이다냥
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
    </>
  )
}
