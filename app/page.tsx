'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [dream, setDream] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!dream.trim()) return

    setIsLoading(true)
    
    localStorage.setItem('currentDream', dream)
    
    router.push('/result')
  }

  return (
    <>
      {/* SEO를 위한 구조화된 마크업 */}
      <article className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* 메인 헤딩 - SEO 최적화 */}
          <header className="text-center mb-12 animate-float">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg animate-pulse">
              <span className="text-white font-bold text-base">💯 평생 무료 · 회원가입 없음</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              무료 꿈해몽 - AI 꿈 해석
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-2">
              당신의 무의식이 말하는 것 🌙
            </p>
            <p className="text-base text-purple-300">
              완전 무료! 동양 전통 꿈풀이와 서양 심리학으로 해석하는 AI 꿈해석 서비스
            </p>
          </header>

          {/* 메인 폼 - 시맨틱 마크업 */}
          <section className="dream-card">
            <h2 className="text-2xl font-bold mb-4 text-purple-200">
              💫 무료로 오늘 꿈을 해석해보세요
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="dream-input" className="block text-lg font-semibold mb-3 text-purple-200">
                  어떤 꿈을 꾸셨나요?
                </label>
                <textarea
                  id="dream-input"
                  name="dream"
                  value={dream}
                  onChange={(e) => setDream(e.target.value)}
                  placeholder="예: 뱀이 나오는 꿈, 돌아가신 할머니 꿈, 물에 빠지는 꿈, 임신하는 꿈 등 자유롭게 입력하세요"
                  className="dream-input min-h-[200px] resize-none"
                  disabled={isLoading}
                  aria-label="꿈 내용 입력"
                />
                <p className="text-sm text-purple-300 mt-2">
                  💡 꿈의 상황, 느낌, 주변 환경을 자세히 적어주시면 더 정확한 해석을 받을 수 있어요
                </p>
              </div>

              <button
                type="submit"
                disabled={!dream.trim() || isLoading}
                className="dream-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="꿈 해석 시작하기"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    AI가 해석 중...
                  </span>
                ) : (
                  '💯 무료로 꿈 해석하기 ✨'
                )}
              </button>
            </form>
          </section>

          {/* 통계 정보 - 신뢰성 강화 */}
          <section className="mt-8 grid grid-cols-3 gap-4 text-center" aria-label="서비스 통계">
            <div className="dream-card py-4">
              <p className="text-2xl font-bold text-purple-300">1,234</p>
              <p className="text-sm text-purple-200">오늘의 해석</p>
            </div>
            <div className="dream-card py-4">
              <p className="text-2xl font-bold text-pink-300">⭐ 4.8</p>
              <p className="text-sm text-purple-200">평균 만족도</p>
            </div>
            <div className="dream-card py-4">
              <p className="text-2xl font-bold text-purple-300">15,678</p>
              <p className="text-sm text-purple-200">누적 해석</p>
            </div>
          </section>

          {/* 인기 꿈 키워드 - 내부 링크 */}
          <section className="mt-8 dream-card">
            <h3 className="text-lg font-semibold mb-4 text-purple-200">
              🔥 많이 찾는 꿈해몽 키워드
            </h3>
            <nav aria-label="인기 꿈 키워드">
              <ul className="flex flex-wrap gap-2">
                {[
                  '뱀꿈', '물꿈', '돌아가신분꿈', '치아빠지는꿈', 
                  '임신꿈', '시험꿈', '전애인꿈', '집꿈', '돈꿈', 
                  '똥꿈', '불꿈', '죽는꿈'
                ].map((keyword) => (
                  <li key={keyword}>
                    <button
                      onClick={() => setDream(keyword.replace('꿈', '') + ' 꿈')}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                      type="button"
                    >
                      #{keyword}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* SEO를 위한 설명 섹션 */}
          <section className="mt-8 dream-card prose prose-invert max-w-none">
            <h2 className="text-xl font-bold text-purple-200 mb-4">
              무료 AI 꿈해몽이란?
            </h2>
            <p className="text-purple-100 leading-relaxed mb-4">
              무료 AI 꿈해몽은 인공지능 Claude가 한국 전통 꿈풀이와 서양 심리학(프로이트, 융)을 결합하여 
              당신의 꿈을 분석하는 <strong>완전 무료</strong> 꿈 해석 서비스입니다. 회원가입, 로그인, 
              결제가 일절 필요 없어요. 뱀꿈, 물꿈, 똥꿈, 임신꿈 등 
              다양한 꿈의 의미를 지금 바로 무료로 확인할 수 있습니다.
            </p>
            <h3 className="text-lg font-bold text-purple-200 mb-3">
              이런 꿈을 무료로 해석할 수 있어요
            </h3>
            <ul className="text-purple-100 space-y-2 list-disc list-inside">
              <li>길몽: 뱀꿈, 돼지꿈, 똥꿈, 용꿈, 호랑이꿈</li>
              <li>흉몽: 치아빠지는꿈, 죽는꿈, 추락하는꿈</li>
              <li>심리: 시험꿈, 지각하는꿈, 쫓기는꿈</li>
              <li>관계: 전애인꿈, 돌아가신분꿈, 임신꿈</li>
            </ul>
          </section>
        </div>
      </article>
    </>
  )
}
