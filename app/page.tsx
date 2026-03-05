'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

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

        {/* 떠다니는 말풍선 + 이모지 */}
        <div className="relative w-full max-w-md mx-auto h-52 mb-2" aria-hidden="true">
          <div className="bubble bubble-1 bg-sky-100 text-sky-800 border border-sky-200/60">
            🌙 어젯밤 꿈이냥?
          </div>
          <div className="bubble bubble-2 bg-amber-100 text-amber-800 border border-amber-200/60">
            해몽해줄게냥
          </div>
          <div className="bubble bubble-3 bg-purple-100 text-purple-800 border border-purple-200/60">
            무료다냥
          </div>
          <div className="bubble bubble-4 bg-emerald-100 text-emerald-800 border border-emerald-200/60">
            시작하자냥!
          </div>
          <span className="emoji-float emoji-1">😸</span>
          <span className="emoji-float emoji-2">🥳</span>
          <span className="emoji-float emoji-3">😴</span>
          <span className="emoji-float emoji-4">🌙</span>
          <span className="emoji-float emoji-5">✨</span>
        </div>

        {/* 캐릭터 일러스트 */}
        <div className="relative w-full max-w-xs mx-auto h-24 mb-2" aria-hidden="true">
          {/* 별 */}
          <svg className="char-item char-side-l" width="48" height="58" viewBox="0 0 80 90" fill="none">
            <path d="M40 4L47 24L68 18L54 34L70 48L48 44L40 64L32 44L10 48L26 34L12 18L33 24Z" fill="#fde68a" stroke="#eab308" strokeWidth="1.5"/>
            <rect x="28" y="60" width="5" height="14" rx="2.5" fill="#475569"/><rect x="46" y="60" width="5" height="14" rx="2.5" fill="#475569"/>
            <ellipse cx="30.5" cy="75" rx="4.5" ry="2.5" fill="#67e8f9"/><ellipse cx="48.5" cy="75" rx="4.5" ry="2.5" fill="#67e8f9"/>
            <circle cx="32" cy="34" r="4.5" fill="#1e293b"/><circle cx="48" cy="34" r="4.5" fill="#1e293b"/>
            <circle cx="33.3" cy="32.5" r="1.8" fill="white"/><circle cx="49.3" cy="32.5" r="1.8" fill="white"/>
            <circle cx="25" cy="40" r="3" fill="#fca5a5" opacity="0.6"/><circle cx="55" cy="40" r="3" fill="#fca5a5" opacity="0.6"/>
            <path d="M36 42 Q40 47 44 42" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>

          {/* 고양이 (메인 - 크게) */}
          <svg className="char-item char-center" width="80" height="90" viewBox="0 0 80 95" fill="none">
            {/* 몸통 */}
            <ellipse cx="40" cy="58" rx="24" ry="20" fill="#fde68a" stroke="#eab308" strokeWidth="1.2"/>
            {/* 머리 */}
            <circle cx="40" cy="32" r="22" fill="#fde68a" stroke="#eab308" strokeWidth="1.2"/>
            {/* 귀 */}
            <path d="M20 18L15 0L30 14Z" fill="#fbbf24" stroke="#eab308" strokeWidth="0.8"/>
            <path d="M60 18L65 0L50 14Z" fill="#fbbf24" stroke="#eab308" strokeWidth="0.8"/>
            <path d="M21 16L17 4L29 14Z" fill="#fda4af"/>
            <path d="M59 16L63 4L51 14Z" fill="#fda4af"/>
            {/* 다리 */}
            <rect x="24" y="73" width="6" height="12" rx="3" fill="#475569"/>
            <rect x="50" y="73" width="6" height="12" rx="3" fill="#475569"/>
            <ellipse cx="27" cy="86" rx="5.5" ry="3" fill="#67e8f9"/>
            <ellipse cx="53" cy="86" rx="5.5" ry="3" fill="#67e8f9"/>
            {/* 꼬리 */}
            <path d="M62 55 Q80 38 72 22" stroke="#fbbf24" strokeWidth="5" fill="none" strokeLinecap="round"/>
            {/* 팔 */}
            <rect x="12" y="48" width="5" height="14" rx="2.5" fill="#475569" transform="rotate(-10 14 48)"/>
            <rect x="63" y="48" width="5" height="14" rx="2.5" fill="#475569" transform="rotate(10 65 48)"/>
            {/* 눈 - 큰 반짝 눈 */}
            <circle cx="30" cy="30" r="6" fill="#1e293b"/>
            <circle cx="50" cy="30" r="6" fill="#1e293b"/>
            <circle cx="32" cy="28" r="2.5" fill="white"/>
            <circle cx="52" cy="28" r="2.5" fill="white"/>
            <circle cx="29" cy="32" r="1.2" fill="white" opacity="0.5"/>
            <circle cx="49" cy="32" r="1.2" fill="white" opacity="0.5"/>
            {/* 볼터치 */}
            <circle cx="21" cy="38" r="4" fill="#fca5a5" opacity="0.5"/>
            <circle cx="59" cy="38" r="4" fill="#fca5a5" opacity="0.5"/>
            {/* 코 */}
            <ellipse cx="40" cy="36" rx="3" ry="2.5" fill="#f472b6"/>
            {/* 입 - 방긋 */}
            <path d="M35 40 Q40 44 45 40" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            {/* 수염 */}
            <line x1="10" y1="34" x2="26" y2="36" stroke="#eab308" strokeWidth="0.8"/>
            <line x1="10" y1="38" x2="26" y2="38" stroke="#eab308" strokeWidth="0.8"/>
            <line x1="54" y1="36" x2="70" y2="34" stroke="#eab308" strokeWidth="0.8"/>
            <line x1="54" y1="38" x2="70" y2="38" stroke="#eab308" strokeWidth="0.8"/>
          </svg>

          {/* 달 */}
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
  )
}
