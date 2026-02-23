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
        headers: {
          'Content-Type': 'application/json',
        },
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      analyzeDream()
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
  ]

  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        
        {/* 히어로 섹션 */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-amber-900/20 backdrop-blur-sm border border-amber-200/30">
            <span className="text-sm font-medium text-amber-100">
              ✨ 평생 무료 · 회원가입 없음
            </span>
          </div>
          
          <h1 className="hero-title mb-4">
            당신의<br />
            꿈을<br />
            해석합니다
          </h1>
          

        </div>

        {/* 역술인 캐릭터 소개 */}
        <div className="glass-card mb-8 animate-fade-in-up delay-200 flex items-center gap-5">
          <div className="text-5xl flex-shrink-0">🔮</div>
          <div>
            <p className="text-white font-bold text-lg leading-snug">꿈은 거짓말을 안 해</p>
            <p className="text-white/60 text-sm leading-relaxed mt-1">꺼내봐</p>
          </div>
        </div>

        {/* 입력 섹션 */}
        <div className="glass-card mb-12 animate-fade-in-up delay-300">
          <div className="mb-6">
            <textarea
              id="dream-input"
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="예: 뱀이 나를 쫓아왔어요..."
              className="dream-input min-h-[150px] resize-none"
              disabled={isLoading}
            />
          </div>
          
          <button
            onClick={analyzeDream}
            disabled={isLoading}
            className="cta-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>
              {isLoading ? '보고 있어...' : '🔮 꿈 꺼내보기'}
            </span>
          </button>
        </div>

        {/* 로딩 섹션 */}
        {isLoading && (
          <div className="glass-card animate-fade-in-up text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin text-4xl">🌙</div>
              <p className="text-white/90 text-lg font-medium">
                보고 있어...
              </p>
              <p className="text-white/60 text-sm">
                잠깐만
              </p>
            </div>
          </div>
        )}

        {/* 결과 섹션 */}
        {result && (
          <div className="glass-card animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              꿈 해석
            </h2>
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-white/90 leading-relaxed text-base md:text-lg">
                {result}
              </div>
            </div>
          </div>
        )}

        {/* 인기 꿈 키워드 (결과가 없을 때만 표시) */}
        {!result && (
          <div className="text-center mt-16 animate-fade-in-up delay-400">
            <h3 className="text-xl font-semibold mb-6 text-white/80">
              💭 다른 분들은 이런 꿈을 물어보셨어요
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['뱀 나오는 꿈', '똥 나오는 꿈', '죽는 꿈', '고양이 꿈', '불나는 꿈', '돈 줍는 꿈', '사랑하는 사람 나오는 꿈', '연애하는 꿈'].map((keyword, i) => (
                <button
                  key={keyword}
                  onClick={() => setDream(keyword)}
                  className="group px-6 py-3 rounded-lg bg-amber-900/20 hover:bg-amber-800/30 border border-amber-200/30 hover:border-amber-200/50 text-amber-50/90 hover:text-amber-50 transition-all duration-300 text-sm font-medium hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl backdrop-blur-sm"
                  style={{ animationDelay: `${0.5 + i * 0.05}s` }}
                >
                  <span className="group-hover:scale-110 inline-block transition-transform">
                    {keyword}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 대표 꿈 키워드 SEO 링크 */}
        <div className="text-center mt-16 animate-fade-in-up delay-400">
          <h2 className="text-2xl font-bold mb-8 text-white">
            📖 많이 찾는 꿈해몽
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {dreamKeywords.map((item) => (
              <Link
                key={item.slug}
                href={`/dream/${item.slug}`}
                className="px-6 py-3 rounded-lg bg-amber-900/20 hover:bg-amber-800/30 border border-amber-200/30 hover:border-amber-200/50 text-amber-50 transition-all duration-300 text-sm font-medium hover:scale-105 shadow-lg backdrop-blur-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}
