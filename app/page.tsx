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
  const [bellyExtra, setBellyExtra] = useState(0)
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
    setBellyExtra(0)
    if (textareaRef.current) textareaRef.current.style.height = '48px'
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)
    try {
      const allMessages = [...messages, { role: 'user' as const, content: userMessage }]
      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream: userMessage, messages: allMessages }),
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
    e.target.style.height = '48px'
    const newHeight = Math.min(e.target.scrollHeight, 200)
    e.target.style.height = newHeight + 'px'
    setBellyExtra(Math.max(0, newHeight - 48))
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
      <div className="min-h-screen flex flex-col max-w-2xl mx-auto">

      {/* 언어 전환 */}
      <div className="flex justify-end px-6 pt-6">
        <Link href="/en" className="text-stone-400 hover:text-stone-600 text-sm transition-colors">
          English →
        </Link>
      </div>

      {/* 히어로 섹션 */}
      <div className="text-center px-6 pt-6 pb-2 animate-fade-in-up relative overflow-visible">
        <div className="relative inline-flex items-center mb-5">
          <span
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-8 bg-amber-300 border border-amber-400 rounded-l-sm shadow-sm"
            aria-hidden="true"
          />
          <span
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-8 bg-amber-300 border border-amber-400 rounded-r-sm shadow-sm"
            aria-hidden="true"
          />
          <div className="px-6 py-2.5 rounded-md border-2 border-amber-300 bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 shadow-md">
            <span className="text-sm font-semibold text-amber-900">
              🐾 뚱냥이의 신비로운 꿈풀이 가게 🐾
            </span>
          </div>
        </div>
        <h1 className="hero-title mb-4">
          고양이가<br />
          꿈을 읽어준다냥
        </h1>

        {/* 뚱냥이 SVG + 배 위 입력창 (랜딩 전용) */}
        {isLanding && (
          <div className="relative w-full mx-auto mb-1" style={{ maxWidth: '340px' }}>
            <div className="bubble bubble-1 bg-sky-100 text-sky-800 border border-sky-200/60">
              🌙 어젯밤 꿈이냥?
            </div>
            <div className="bubble bubble-2 bg-amber-100 text-amber-800 border border-amber-200/60">
              해몽해줄게냥
            </div>
            {/* 대형 뚱냥이 SVG — 입력량에 따라 늘어남 */}
            {(() => {
              const s = bellyExtra * 1.2
              return (
                <svg viewBox={`0 0 340 ${380 + s}`} className="w-full h-auto transition-all duration-200" aria-hidden="true">
                  {/* 꼬리 (줄무늬) */}
                  <path d={`M260 ${300 + s} Q310 ${275 + s} 300 ${230 + s * 0.5} Q295 ${205 + s * 0.3} 308 ${190}`} fill="none" stroke="#e8c67a" strokeWidth="16" strokeLinecap="round" />
                  <path d={`M268 ${288 + s} Q305 ${268 + s} 300 ${240 + s * 0.5}`} fill="none" stroke="#d4a84a" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
                  <path d={`M274 ${276 + s * 0.8} Q300 ${260 + s * 0.6} 298 ${248 + s * 0.4}`} fill="none" stroke="#d4a84a" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
                  {/* 몸통 (뚱뚱) */}
                  <ellipse cx="170" cy={260 + s / 2} rx="130" ry={105 + s / 2} fill="#f5d98a" />
                  {/* 몸통 줄무늬 */}
                  <path d={`M110 ${195 + s * 0.1} Q130 ${185 + s * 0.1} 140 ${195 + s * 0.1}`} fill="none" stroke="#e0c060" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
                  <path d={`M120 ${210 + s * 0.15} Q145 ${198 + s * 0.15} 155 ${210 + s * 0.15}`} fill="none" stroke="#e0c060" strokeWidth="5" strokeLinecap="round" opacity="0.3" />
                  <path d={`M200 ${195 + s * 0.1} Q220 ${185 + s * 0.1} 230 ${195 + s * 0.1}`} fill="none" stroke="#e0c060" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
                  <path d={`M190 ${210 + s * 0.15} Q215 ${198 + s * 0.15} 225 ${210 + s * 0.15}`} fill="none" stroke="#e0c060" strokeWidth="5" strokeLinecap="round" opacity="0.3" />
                  {/* 배 (크고 밝게 — 입력 영역) */}
                  <ellipse cx="170" cy={275 + s / 2} rx="100" ry={78 + s / 2} fill="#fef3c7" />
                  {/* 머리 (둥글게) */}
                  <ellipse cx="170" cy="135" rx="90" ry="60" fill="#f5d98a" />
                  {/* 이마 줄무늬 */}
                  <path d="M155 95 Q160 85 165 95" fill="none" stroke="#e0c060" strokeWidth="3.5" strokeLinecap="round" opacity="0.45" />
                  <path d="M170 90 Q175 80 180 90" fill="none" stroke="#e0c060" strokeWidth="3.5" strokeLinecap="round" opacity="0.45" />
                  <path d="M185 95 Q190 85 195 95" fill="none" stroke="#e0c060" strokeWidth="3.5" strokeLinecap="round" opacity="0.45" />
                  {/* 귀 */}
                  <polygon points="105,98 72,38 135,85" fill="#f5d98a" />
                  <polygon points="235,98 268,38 205,85" fill="#f5d98a" />
                  <polygon points="110,96 82,48 130,87" fill="#fbbf9e" />
                  <polygon points="230,96 258,48 210,87" fill="#fbbf9e" />
                  {/* 볼터치 */}
                  <ellipse cx="118" cy="152" rx="16" ry="10" fill="#fbbf9e" opacity="0.45" />
                  <ellipse cx="222" cy="152" rx="16" ry="10" fill="#fbbf9e" opacity="0.45" />
                  {/* 눈 */}
                  <ellipse cx="140" cy="130" rx="12" ry="13" fill="#3a3226" />
                  <ellipse cx="200" cy="130" rx="12" ry="13" fill="#3a3226" />
                  <ellipse cx="143" cy="126" rx="4.5" ry="5" fill="white" />
                  <ellipse cx="203" cy="126" rx="4.5" ry="5" fill="white" />
                  <ellipse cx="137" cy="132" rx="2" ry="2" fill="white" opacity="0.5" />
                  <ellipse cx="197" cy="132" rx="2" ry="2" fill="white" opacity="0.5" />
                  {/* 코 + 입 */}
                  <path d="M166 148 L170 153 L174 148 Z" fill="#e8937a" />
                  <path d="M170 153 Q161 163 152 157" fill="none" stroke="#3a3226" strokeWidth="2" strokeLinecap="round" />
                  <path d="M170 153 Q179 163 188 157" fill="none" stroke="#3a3226" strokeWidth="2" strokeLinecap="round" />
                  {/* 수염 */}
                  <line x1="85" y1="144" x2="128" y2="148" stroke="#c4a456" strokeWidth="1.5" />
                  <line x1="82" y1="156" x2="126" y2="155" stroke="#c4a456" strokeWidth="1.5" />
                  <line x1="88" y1="168" x2="129" y2="162" stroke="#c4a456" strokeWidth="1.5" />
                  <line x1="212" y1="148" x2="255" y2="144" stroke="#c4a456" strokeWidth="1.5" />
                  <line x1="214" y1="155" x2="258" y2="156" stroke="#c4a456" strokeWidth="1.5" />
                  <line x1="211" y1="162" x2="252" y2="168" stroke="#c4a456" strokeWidth="1.5" />
                  {/* 앞발 */}
                  <ellipse cx="105" cy={345 + s} rx="30" ry="18" fill="#f5d98a" />
                  <ellipse cx="235" cy={345 + s} rx="30" ry="18" fill="#f5d98a" />
                  {/* 발가락 패드 (왼발) */}
                  <ellipse cx="93" cy={341 + s} rx="5" ry="4" fill="#e8937a" opacity="0.5" />
                  <ellipse cx="105" cy={339 + s} rx="5" ry="4" fill="#e8937a" opacity="0.5" />
                  <ellipse cx="117" cy={341 + s} rx="5" ry="4" fill="#e8937a" opacity="0.5" />
                  <ellipse cx="105" cy={349 + s} rx="7" ry="5" fill="#e8937a" opacity="0.4" />
                  {/* 발가락 패드 (오른발) */}
                  <ellipse cx="223" cy={341 + s} rx="5" ry="4" fill="#e8937a" opacity="0.5" />
                  <ellipse cx="235" cy={339 + s} rx="5" ry="4" fill="#e8937a" opacity="0.5" />
                  <ellipse cx="247" cy={341 + s} rx="5" ry="4" fill="#e8937a" opacity="0.5" />
                  <ellipse cx="235" cy={349 + s} rx="7" ry="5" fill="#e8937a" opacity="0.4" />
                </svg>
              )
            })()}

            {/* 배 위 입력창 오버레이 */}
            <div className="cat-belly-input-wrap" style={{ position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)', width: '56%' }}>
              <textarea
                ref={textareaRef}
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="여기에 꿈을 적어냥..."
                className="cat-belly-textarea"
                style={{ minHeight: '48px', maxHeight: '200px' }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="cat-belly-send"
              >
                🐾
              </button>
            </div>
          </div>
        )}

        {/* 대화 모드: 작은 고양이 얼굴 */}
        {!isLanding && (
          <div className="w-full flex justify-center mb-2">
            <svg viewBox="0 0 200 160" className="w-28 h-auto" aria-hidden="true">
              {/* 머리 */}
              <ellipse cx="100" cy="90" rx="72" ry="50" fill="#f5d98a" />
              {/* 귀 */}
              <polygon points="48,58 22,8 72,48" fill="#f5d98a" />
              <polygon points="152,58 178,8 128,48" fill="#f5d98a" />
              <polygon points="52,56 30,18 68,50" fill="#fbbf9e" />
              <polygon points="148,56 170,18 132,50" fill="#fbbf9e" />
              {/* 이마 줄무늬 */}
              <path d="M85 58 Q90 48 95 58" fill="none" stroke="#e0c060" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
              <path d="M100 53 Q105 43 110 53" fill="none" stroke="#e0c060" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
              {/* 볼터치 */}
              <ellipse cx="58" cy="102" rx="14" ry="9" fill="#fbbf9e" opacity="0.45" />
              <ellipse cx="142" cy="102" rx="14" ry="9" fill="#fbbf9e" opacity="0.45" />
              {/* 눈 (^^) 행복한 표정 */}
              <path d="M72 82 Q80 72 88 82" fill="none" stroke="#3a3226" strokeWidth="3" strokeLinecap="round" />
              <path d="M112 82 Q120 72 128 82" fill="none" stroke="#3a3226" strokeWidth="3" strokeLinecap="round" />
              {/* 코 + 입 */}
              <path d="M96 98 L100 103 L104 98 Z" fill="#e8937a" />
              <path d="M100 103 Q92 112 84 107" fill="none" stroke="#3a3226" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M100 103 Q108 112 116 107" fill="none" stroke="#3a3226" strokeWidth="1.8" strokeLinecap="round" />
              {/* 수염 */}
              <line x1="30" y1="94" x2="68" y2="98" stroke="#c4a456" strokeWidth="1.3" />
              <line x1="28" y1="106" x2="66" y2="104" stroke="#c4a456" strokeWidth="1.3" />
              <line x1="132" y1="98" x2="170" y2="94" stroke="#c4a456" strokeWidth="1.3" />
              <line x1="134" y1="104" x2="172" y2="106" stroke="#c4a456" strokeWidth="1.3" />
            </svg>
          </div>
        )}
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
          <div className="flex flex-col items-center py-6">
            <svg viewBox="0 0 240 180" className="w-44 h-auto" aria-label="고양이가 해몽 중...">
              {/* 머리 */}
              <ellipse cx="120" cy="80" rx="62" ry="44" fill="#f5d98a" />
              {/* 귀 */}
              <polygon points="72,50 50,8 94,42" fill="#f5d98a" />
              <polygon points="168,50 190,8 146,42" fill="#f5d98a" />
              <polygon points="75,48 56,16 91,43" fill="#fbbf9e" />
              <polygon points="165,48 184,16 149,43" fill="#fbbf9e" />
              {/* 이마 줄무늬 */}
              <path d="M108 48 Q112 40 116 48" fill="none" stroke="#e0c060" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
              <path d="M120 44 Q124 36 128 44" fill="none" stroke="#e0c060" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
              {/* 볼터치 */}
              <ellipse cx="76" cy="90" rx="12" ry="8" fill="#fbbf9e" opacity="0.45" />
              <ellipse cx="164" cy="90" rx="12" ry="8" fill="#fbbf9e" opacity="0.45" />
              {/* 눈 — 집중하는 표정 (반쯤 감은 눈) */}
              <ellipse cx="98" cy="72" rx="9" ry="10" fill="#3a3226" />
              <ellipse cx="142" cy="72" rx="9" ry="10" fill="#3a3226" />
              <ellipse cx="100" cy="69" rx="3.5" ry="4" fill="white" />
              <ellipse cx="144" cy="69" rx="3.5" ry="4" fill="white" />
              <rect x="85" y="62" width="30" height="6" fill="#f5d98a" rx="2" className="cat-blink" />
              <rect x="129" y="62" width="30" height="6" fill="#f5d98a" rx="2" className="cat-blink" />
              {/* 코 */}
              <path d="M116 86 L120 90 L124 86 Z" fill="#e8937a" />
              {/* 입 — 열렸다 닫혔다 */}
              <ellipse cx="120" cy="98" rx="8" ry="4" fill="#c4706a" className="cat-mouth-talk" />
              {/* 수염 */}
              <line x1="52" y1="82" x2="84" y2="86" stroke="#c4a456" strokeWidth="1.3" />
              <line x1="50" y1="94" x2="82" y2="92" stroke="#c4a456" strokeWidth="1.3" />
              <line x1="156" y1="86" x2="188" y2="82" stroke="#c4a456" strokeWidth="1.3" />
              <line x1="158" y1="92" x2="190" y2="94" stroke="#c4a456" strokeWidth="1.3" />
              {/* 말풍선 효과 — 입에서 나오는 물결 */}
              <path d="M136 96 Q148 90 158 96 Q168 102 178 96" fill="none" stroke="#e0c060" strokeWidth="2" strokeLinecap="round" className="cat-speech-wave cat-speech-1" />
              <path d="M140 106 Q152 100 162 106 Q172 112 182 106" fill="none" stroke="#e0c060" strokeWidth="2" strokeLinecap="round" className="cat-speech-wave cat-speech-2" />
              <path d="M144 116 Q154 110 164 116 Q174 122 184 116" fill="none" stroke="#e0c060" strokeWidth="2" strokeLinecap="round" className="cat-speech-wave cat-speech-3" />
            </svg>
            <p className="text-stone-400 text-xs mt-1 cat-loading-text">꿈을 읽고 있다냥...</p>
          </div>
        )}

        <div ref={bottomRef} />

        {/* 입력창 - 대화 모드에서만 표시 (랜딩은 고양이 배 위 입력창 사용) */}
        {!isLoading && !isLanding && (
          <div className="flex items-end gap-2 justify-end mt-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="꿈 얘기해봐냥..."
              className="w-[72%] bg-white border-stone-200 focus:border-amber-400 border rounded-2xl rounded-br-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-stone-400 resize-none outline-none transition-all overflow-hidden shadow-sm"
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
