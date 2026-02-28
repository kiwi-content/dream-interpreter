'use client'

import { useState, useRef } from 'react'

export default function DreamInput({ dreamName }: { dreamName: string }) {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    e.target.style.height = '52px'
    e.target.style.height = Math.min(e.target.scrollHeight, 140) + 'px'
  }

  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return
    setIsLoading(true)
    setResult('')

    try {
      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream: input.trim() }),
      })
      const data = await response.json()
      setResult(data.interpretation)
    } catch {
      setResult('지금은 해석이 어려워요. 잠시 후 다시 시도해 주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="bg-gradient-to-br from-amber-600/20 to-amber-900/30 border border-amber-400/30 rounded-2xl p-5">
      <p className="text-amber-200 text-sm font-bold mb-1.5">
        🔮 내 꿈은 좀 달랐는데...
      </p>
      <p className="text-white/55 text-xs leading-relaxed mb-3">
        위 해석은 일반적인 {dreamName} 풀이예요. 꿈의 세부 장면을 알려주시면 AI가 딱 맞춘 해석을 해드려요.
      </p>

      {!result ? (
        <>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={`예: ${dreamName}인데 장소가 학교였고...`}
            disabled={isLoading}
            className="w-full bg-slate-900/60 border border-white/[0.1] focus:border-amber-400/50 rounded-xl px-4 py-3 text-white/90 text-sm placeholder:text-white/30 resize-none outline-none transition-colors"
            style={{ minHeight: '52px', maxHeight: '140px' }}
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || isLoading}
            className="mt-2.5 w-full px-4 py-3 rounded-xl bg-amber-600/80 hover:bg-amber-500/80 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
                해석 중...
              </>
            ) : (
              '✨ 맞춤 해석받기'
            )}
          </button>
        </>
      ) : (
        <div className="space-y-3">
          {/* 사용자 질문 */}
          <div className="flex justify-end">
            <div className="bg-amber-400 text-slate-900 px-3.5 py-2.5 rounded-2xl rounded-br-sm max-w-[85%] text-xs font-medium leading-relaxed">
              {input}
            </div>
          </div>
          {/* AI 해석 결과 */}
          <div className="bg-slate-900/60 border border-white/[0.08] rounded-xl px-4 py-3.5">
            <p className="text-white/80 text-sm leading-[1.85] whitespace-pre-wrap">
              {result}
            </p>
          </div>
          {/* 다시 하기 */}
          <button
            onClick={() => { setResult(''); setInput('') }}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-white/[0.08] text-white/60 hover:text-white/80 text-xs transition-colors"
          >
            다른 꿈도 물어보기
          </button>
        </div>
      )}
    </div>
  )
}
