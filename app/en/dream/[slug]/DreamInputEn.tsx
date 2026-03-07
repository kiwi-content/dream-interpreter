'use client'

import { useState, useRef } from 'react'

export default function DreamInputEn({ dreamLabel }: { dreamLabel: string }) {
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
      const response = await fetch('/api/interpret-en', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream: input.trim() }),
      })
      const data = await response.json()
      setResult(data.interpretation)
    } catch {
      setResult("I can't read this dream right now. Please try again in a moment.")
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
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-5 shadow-md">
      {/* Cat + intro */}
      <div className="flex items-start gap-3 mb-3">
        <svg viewBox="0 0 80 70" className="w-12 h-auto flex-shrink-0" aria-hidden="true">
          <ellipse cx="40" cy="40" rx="28" ry="20" fill="#f5d98a" />
          <ellipse cx="22" cy="44" rx="7" ry="5" fill="#f5d98a" />
          <ellipse cx="58" cy="44" rx="7" ry="5" fill="#f5d98a" />
          <g className="cat-ear-twitch-l"><polygon points="22,26 12,4 32,20" fill="#f5d98a" /><polygon points="23,25 15,8 30,21" fill="#fbbf9e" /></g>
          <g className="cat-ear-twitch-r"><polygon points="58,26 68,4 48,20" fill="#f5d98a" /><polygon points="57,25 65,8 50,21" fill="#fbbf9e" /></g>
          <path d="M34 32 Q37 26 40 32" fill="none" stroke="#3a3226" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M40 32 Q43 26 46 32" fill="none" stroke="#3a3226" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="40" cy="38" rx="2" ry="1.5" fill="#e8937a" />
          <path d="M38 38 L40 41 L42 38 Z" fill="#e8937a" />
          <path d="M40 41 Q37 45 34 43" fill="none" stroke="#3a3226" strokeWidth="1" strokeLinecap="round" />
          <path d="M40 41 Q43 45 46 43" fill="none" stroke="#3a3226" strokeWidth="1" strokeLinecap="round" />
          <g className="cat-whisker-left">
            <path d="M12 34 Q22 36 28 37" fill="none" stroke="#c4a456" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M11 42 Q21 42 27 41" fill="none" stroke="#c4a456" strokeWidth="0.8" strokeLinecap="round" />
          </g>
          <g className="cat-whisker-right">
            <path d="M52 37 Q58 36 68 34" fill="none" stroke="#c4a456" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M53 41 Q59 42 69 42" fill="none" stroke="#c4a456" strokeWidth="0.8" strokeLinecap="round" />
          </g>
          <ellipse cx="27" cy="44" rx="5" ry="3" fill="#fbbf9e" opacity="0.4" />
          <ellipse cx="53" cy="44" rx="5" ry="3" fill="#fbbf9e" opacity="0.4" />
        </svg>
        <div>
          <p className="text-amber-900 text-sm font-bold mb-0.5">
            My dream was a bit different...
          </p>
          <p className="text-stone-500 text-xs leading-relaxed">
            This is a general {dreamLabel} dream guide. Share your specific scene for a personalized reading!
          </p>
        </div>
      </div>

      {!result ? (
        <>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={`e.g. I dreamed about ${dreamLabel} at my old school...`}
            disabled={isLoading}
            className="w-full bg-white/80 border border-amber-200 focus:border-amber-400 rounded-xl px-4 py-3 text-stone-700 text-sm placeholder:text-stone-400 resize-none outline-none transition-colors"
            style={{ minHeight: '52px', maxHeight: '140px' }}
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || isLoading}
            className="mt-2.5 w-full px-4 py-3 rounded-full bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 80 50" className="w-8 h-auto" aria-hidden="true">
                  <ellipse cx="40" cy="28" rx="22" ry="15" fill="#f5d98a" />
                  <path d="M30 22 Q34 16 38 22" fill="none" stroke="#3a3226" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M42 22 Q46 16 50 22" fill="none" stroke="#3a3226" strokeWidth="1.5" strokeLinecap="round" />
                  <ellipse cx="40" cy="30" rx="3" ry="2" fill="#c4706a" className="cat-mouth-talk" />
                </svg>
                Reading your dream...
              </span>
            ) : (
              '🐾 Get my personalized reading'
            )}
          </button>
        </>
      ) : (
        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="bg-amber-500 text-white px-3.5 py-2.5 rounded-2xl rounded-br-sm max-w-[85%] text-xs font-medium leading-relaxed shadow-sm">
              {input}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg mt-0.5 shrink-0">😸</span>
            <div className="bg-white/90 border border-amber-200 rounded-2xl rounded-bl-sm px-4 py-3.5 shadow-sm">
              <p className="text-stone-700 text-sm leading-[1.85] whitespace-pre-wrap">
                {result}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setResult('')
              setInput('')
            }}
            className="w-full px-4 py-2.5 rounded-full bg-white hover:bg-amber-50 border border-amber-200 text-stone-500 hover:text-amber-700 text-xs font-medium transition-colors"
          >
            Ask about another dream 🐾
          </button>
        </div>
      )}
    </div>
  )
}
