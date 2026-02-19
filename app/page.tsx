'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [dream, setDream] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const analyzeDream = async () => {
    if (!dream.trim()) {
      alert('꿈 내용을 입력해주세요!')
      return
    }

    setIsLoading(true)
    setResult('')

    try {
      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream })
      })

      if (!response.ok) {
        throw new Error(`API 오류: ${response.status}`)
      }

      const data = await response.json()
      setResult(data.interpretation)
    } catch (error) {
      console.error('Error:', error)
      setResult('죄송합니다. 해석 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      analyzeDream()
    }
  }

  const dreamKeywords = [
    { name: '뱀 나오는 꿈 해몽', slug: 'snake-dream' },
    { name: '이빨 빠지는 꿈 해몽', slug: 'teeth-dream' },
    { name: '쫓기는 꿈 해몽', slug: 'chasing-dream' },
    { name: '돈 줍는 꿈 해몽', slug: 'money-dream' },
    { name: '임신하는 꿈 해몽', slug: 'pregnancy-dream' },
    { name: '물에 빠지는 꿈 해몽', slug: 'water-dream' },
    { name: '죽는 꿈 해몽', slug: 'death-dream' },
    { name: '시험 보는 꿈 해몽', slug: 'exam-dream' },
    { name: '귀신 나오는 꿈 해몽', slug: 'ghost-dream' },
    { name: '전애인 나오는 꿈 해몽', slug: 'ex-dream' },
  ]


  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="hero-title mb-4">
            당신의<br />
            꿈을<br />
            해석합니다
          </h1>
        </div>

        {/* 입력 섹션 */}
        <div className="glass-card mb-16">
          <textarea
            value={dream}
            onChange={(e) => setDream(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="예: 뱀이 나를 쫓아왔어요..."
            className="dream-input min-h-[150px] resize-none"
            disabled={isLoading}
          />
          <button
            onClick={analyzeDream}
            disabled={isLoading}
            className="cta-button w-full mt-6 disabled:opacity-50"
          >
            <span>
              {isLoading ? '해석 중...' : '🌙 이야기 들려주기'}
            </span>
          </button>
        </div>

        {/* 대표 꿈 키워드 SEO 링크 */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-8 text-white">
            📖 많이 찾는 꿈해몽
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {dreamKeywords.map((dream) => (
              <Link
                key={dream.slug}
                href={`/dream/${dream.slug}`}
                className="px-6 py-3 rounded-lg bg-amber-900/20 hover:bg-amber-800/30 border border-amber-200/30 hover:border-amber-200/50 text-amber-50 transition-all duration-300 text-sm font-medium hover:scale-105 shadow-lg backdrop-blur-sm"
              >
                {dream.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
