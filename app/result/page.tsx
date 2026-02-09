'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ResultPage() {
  const [dream, setDream] = useState('')
  const [interpretation, setInterpretation] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const savedDream = localStorage.getItem('currentDream')
    if (!savedDream) {
      router.push('/')
      return
    }

    setDream(savedDream)
    interpretDream(savedDream)
  }, [router])

  const interpretDream = async (dreamText: string) => {
    try {
      setIsLoading(true)
      setError('')

      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dream: dreamText }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '해석에 실패했습니다')
      }

      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setInterpretation(data.interpretation)
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다')
    } finally {
      setIsLoading(false)
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: '내 꿈 해석 결과 - AI 꿈해몽',
      text: '무료 AI 꿈해몽에서 내 꿈을 해석받았어요!',
      url: window.location.origin,
    }

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.log('공유 취소됨')
      }
    } else {
      navigator.clipboard.writeText(window.location.origin)
      alert('링크가 복사되었습니다!')
    }
  }

  const handleNewDream = () => {
    localStorage.removeItem('currentDream')
    router.push('/')
  }

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <div className="mb-8 animate-float">
            <div className="text-6xl mb-4" role="img" aria-label="달 이모지">🌙</div>
            <h1 className="text-2xl font-bold text-purple-200 mb-2">
              AI가 당신의 꿈을 해석하는 중이에요...
            </h1>
            <p className="text-purple-300">
              동양 전통과 서양 심리학의 지혜를 모으고 있어요
            </p>
          </div>
          
          <div className="flex justify-center gap-2" aria-label="로딩 중">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </main>
    )
  }

  return (
    <article className="min-h-screen p-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* 헤더 */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            당신의 꿈 해석 결과 ✨
          </h1>
          <p className="text-purple-200">
            AI가 분석한 당신만의 꿈풀이
          </p>
        </header>

        {/* 꿈 내용 */}
        <section className="dream-card mb-6">
          <h2 className="text-lg font-semibold text-purple-200 mb-3">🌙 당신이 꾼 꿈</h2>
          <p className="text-white/90 leading-relaxed">{dream}</p>
        </section>

        {/* 해석 결과 */}
        {error ? (
          <section className="dream-card bg-red-500/20 border-red-500/50" role="alert">
            <p className="text-red-200">{error}</p>
            <button
              onClick={() => interpretDream(dream)}
              className="mt-4 dream-button"
              aria-label="꿈 해석 다시 시도하기"
            >
              다시 시도하기
            </button>
          </section>
        ) : (
          <section className="dream-card">
            <h2 className="text-xl font-bold text-purple-200 mb-6 flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="수정구슬">🔮</span>
              AI 꿈 해석
            </h2>
            <div className="prose prose-invert max-w-none">
              <div className="text-white/90 leading-relaxed whitespace-pre-wrap">
                {interpretation}
              </div>
            </div>
          </section>
        )}

        {/* 액션 버튼들 */}
        <nav className="mt-8 grid grid-cols-2 gap-4" aria-label="추가 작업">
          <button
            onClick={handleShare}
            className="dream-card py-4 text-center hover:bg-white/20 transition-all cursor-pointer"
            aria-label="꿈 해석 결과 공유하기"
          >
            <span className="text-2xl mb-2 block" role="img" aria-label="공유">📤</span>
            <span className="text-purple-200 font-semibold">공유하기</span>
          </button>
          
          <button
            onClick={handleNewDream}
            className="dream-card py-4 text-center hover:bg-white/20 transition-all cursor-pointer"
            aria-label="다른 꿈 해석하러 가기"
          >
            <span className="text-2xl mb-2 block" role="img" aria-label="별">✨</span>
            <span className="text-purple-200 font-semibold">다른 꿈 해석하기</span>
          </button>
        </nav>

        {/* 만족도 피드백 */}
        <section className="mt-8 dream-card text-center">
          <h3 className="text-purple-200 mb-4">이 해석이 도움이 되었나요?</h3>
          <div className="flex justify-center gap-4" role="group" aria-label="만족도 평가">
            {[
              { emoji: '😊', label: '만족' },
              { emoji: '😐', label: '보통' },
              { emoji: '😞', label: '불만족' }
            ].map((item) => (
              <button
                key={item.label}
                className="text-4xl hover:scale-125 transition-transform"
                onClick={() => alert('소중한 의견 감사합니다! 💜')}
                aria-label={`${item.label} 평가하기`}
                title={item.label}
              >
                <span role="img" aria-label={item.label}>{item.emoji}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 광고 공간 */}
        <aside className="mt-8 dream-card bg-white/5 text-center py-12" aria-label="광고">
          <p className="text-purple-300 text-sm">[ 광고 영역 ]</p>
          <p className="text-purple-400 text-xs mt-2">
            Google AdSense가 여기에 표시됩니다
          </p>
        </aside>

        {/* 관련 꿈해몽 링크 */}
        <section className="mt-8 dream-card">
          <h3 className="text-lg font-semibold mb-4 text-purple-200">
            🔗 이런 꿈도 궁금하신가요?
          </h3>
          <nav aria-label="관련 꿈해몽">
            <ul className="grid grid-cols-2 gap-3">
              {['뱀꿈', '물꿈', '똥꿈', '임신꿈', '돌아가신분꿈', '시험꿈'].map((keyword) => (
                <li key={keyword}>
                  <button
                    onClick={() => {
                      localStorage.setItem('currentDream', keyword)
                      router.push('/')
                      setTimeout(() => router.push('/result'), 100)
                    }}
                    className="w-full text-left px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-purple-200"
                  >
                    {keyword} 해석보기 →
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </article>
  )
}
