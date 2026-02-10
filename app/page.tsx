'use client'

import { useState } from 'react'

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      analyzeDream()
    }
  }

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
          
          <p className="subtitle max-w-2xl mx-auto mb-4 delay-200">
            몇 마디만 적어도 괜찮아요<br className="hidden md:block" />
            당신의 이야기를 들려주세요
          </p>
          
          <div className="max-w-xl mx-auto mt-6 px-6 py-4 rounded-xl bg-amber-900/10 backdrop-blur-sm border border-amber-200/20 animate-fade-in-up delay-300">
            <p className="text-amber-100/70 text-sm leading-relaxed">
              밤이 되면 이곳에 편지가 도착합니다<br />
              당신의 꿈 이야기를 우체통에 넣어주세요<br />
              곧 답장을 받으실 수 있을 거예요
            </p>
          </div>
        </div>

        {/* 입력 섹션 */}
        <div className="glass-card mb-12 animate-fade-in-up delay-300">
          <div className="mb-6">
            <label htmlFor="dream-input" className="block text-lg font-semibold mb-4 text-white/90">
              당신의 꿈 이야기를 들려주세요
            </label>
            <textarea
              id="dream-input"
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              onKeyPress={handleKeyPress}
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
              {isLoading ? '당신의 이야기를 듣고 있어요...' : '🌙 이야기 들려주기'}
            </span>
          </button>
        </div>

        {/* 결과 섹션 */}
        {result && (
          <div className="glass-card animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              💌 당신에게 보내는 답장
            </h2>
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-white/90 leading-relaxed text-base md:text-lg">
                {result}
              </div>
            </div>
          </div>
        )}

        {/* 인기 꿈 키워드 */}
        {!result && (
          <div className="text-center mt-16 animate-fade-in-up delay-400">
            <h3 className="text-xl font-semibold mb-6 text-white/80">
              💭 다른 분들은 이런 꿈을 물어보셨어요
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['뱀꿈', '물꿈', '똥꿈', '임신꿈', '치아빠지는꿈', '전애인꿈', '돌아가신분꿈', '시험꿈'].map((keyword, i) => (
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

        {/* 특징 섹션 */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 animate-fade-in-up delay-400">
          {[
            {
              icon: '💌',
              title: '진심을 담아',
              desc: '당신의 이야기를 끝까지 들어드려요'
            },
            {
              icon: '✨',
              title: '지금 바로',
              desc: '기다림 없이 답장을 받아보세요'
            },
            {
              icon: '🎁',
              title: '언제나 무료',
              desc: '부담 없이 언제든 찾아와주세요'
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className="glass-card text-center group cursor-pointer"
              style={{ animationDelay: `${0.5 + i * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}