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

        {/* 히어로 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            무료 AI 꿈해몽
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            뱀꿈, 물꿈, 똥꿈, 임신꿈 등 당신의 꿈을 무료로 해석해드립니다.
          </p>
        </div>

        {/* 입력 */}
        <div className="glass-card mb-12">
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
            className="cta-button w-full mt-4"
          >
            {isLoading ? '꿈을 해석 중...' : '꿈 해석하기'}
          </button>
        </div>

        {/* 결과 */}
        {result && (
          <div className="glass-card mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">
              꿈 해석 결과
            </h2>
            <div className="whitespace-pre-wrap text-white/90 leading-relaxed">
              {result}
            </div>
          </div>
        )}

        {/* SEO 콘텐츠 */}
        <section className="max-w-4xl mx-auto text-white/90 leading-relaxed space-y-16">

          <div>
            <h2 className="text-2xl font-bold mb-6">
              무료 꿈해몽이란 무엇인가요?
            </h2>
            <p className="mb-4">
              꿈해몽은 인간의 무의식과 심리를 해석하려는 전통에서 시작되었습니다.
              뱀꿈, 물꿈, 똥꿈, 임신꿈, 이빨 빠지는 꿈처럼 자주 등장하는 상징은
              각기 다른 의미를 가질 수 있습니다.
            </p>
            <p>
              이 사이트는 단순한 상징 풀이가 아닌, 사용자가 작성한
              꿈의 맥락을 분석하는 AI 기반 무료 꿈해몽 서비스입니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              많이 찾는 꿈해몽 유형
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">뱀꿈 해몽</h3>
            <p>
              뱀은 변화, 재물, 인간관계 갈등을 상징할 수 있으며
              꿈속 상황에 따라 해석이 달라집니다.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">물꿈 해몽</h3>
            <p>
              물은 감정과 무의식을 의미합니다. 맑은 물은 긍정,
              흐린 물은 혼란을 상징할 수 있습니다.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">똥꿈 해몽</h3>
            <p>
              재물운과 연결되는 경우가 많지만,
              감정적 해소를 뜻하기도 합니다.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">임신꿈 해몽</h3>
            <p>
              새로운 시작이나 아이디어의 탄생을 의미하는 경우가 많습니다.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">이빨 빠지는 꿈</h3>
            <p>
              불안감이나 관계 변화를 반영하는 심리적 꿈일 수 있습니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              자주 묻는 질문
            </h2>

            <h3 className="font-semibold mt-4">무료인가요?</h3>
            <p>네, 회원가입 없이 무료로 이용할 수 있습니다.</p>

            <h3 className="font-semibold mt-4">입력 내용은 저장되나요?</h3>
            <p>별도의 회원 데이터로 저장되지 않습니다.</p>

            <h3 className="font-semibold mt-4">AI 해석은 정확한가요?</h3>
            <p>AI는 맥락을 분석하지만 꿈은 개인 상황에 따라 달라질 수 있습니다.</p>
          </div>

        </section>

      </div>
    </div>
  )
}
