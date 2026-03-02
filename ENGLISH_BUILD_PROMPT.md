# ChatGPT Prompt: Build Standalone English Dream Interpreter

이 프롬프트를 ChatGPT에 넣으세요. 파일이 너무 길면 3-4회에 나눠서 요청하세요.

---

## PROMPT START

I need you to build a **complete standalone Next.js project** for an English dream interpretation site. This will be its own GitHub repo (`dream-free-en`), completely independent from the Korean version.

### Tech Stack
- Next.js 14.2.0 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3.4
- No database — all content is static in code

### Project Structure

Create ALL of these files:

```
package.json
next.config.js
tsconfig.json
tailwind.config.js
postcss.config.js
app/layout.tsx
app/globals.css
app/page.tsx              ← Home page (chat UI)
app/dream/[slug]/page.tsx ← 32 dream content pages
app/dream/[slug]/DreamInput.tsx ← Client component
app/api/interpret/route.ts ← Gemini AI endpoint
```

---

### 1. `package.json`

```json
{
  "name": "dream-free-en",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.20",
    "eslint": "^8",
    "eslint-config-next": "14.2.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}
```

### 2. `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig
```

### 3. `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5. `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

### 6. `app/globals.css`

Use Google Fonts for English — **Inter** (body) and **Playfair Display** (hero titles). Night sky background with stars, same dark mystical feel as below:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: #4F46E5;
    --color-secondary: #EC4899;
    --color-accent: #F59E0B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(180deg,
      #0f172a 0%,
      #1e293b 30%,
      #334155 60%,
      #1e293b 100%
    );
    background-size: 100% 200%;
    animation: nightSky 20s ease infinite;
    background-attachment: fixed;
    min-height: 100vh;
    color: #f8f9fa;
    overflow-x: hidden;
    position: relative;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image:
      radial-gradient(2px 2px at 20% 30%, white, transparent),
      radial-gradient(2px 2px at 60% 70%, white, transparent),
      radial-gradient(1px 1px at 50% 50%, white, transparent),
      radial-gradient(1px 1px at 80% 10%, white, transparent),
      radial-gradient(2px 2px at 90% 60%, white, transparent),
      radial-gradient(1px 1px at 33% 75%, white, transparent),
      radial-gradient(1px 1px at 79% 53%, white, transparent);
    background-size: 200% 200%;
    animation: stars 50s linear infinite;
    opacity: 0.5;
    pointer-events: none;
    z-index: 1;
  }
}

@layer components {
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: #fef3c7;
    text-shadow:
      0 0 20px rgba(254, 243, 199, 0.3),
      0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .floating-shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.3;
    animation: float 20s ease-in-out infinite;
    pointer-events: none;
  }

  .shape-1 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(254, 243, 199, 0.15) 0%, transparent 70%);
    top: 10%; left: -10%;
    filter: blur(40px);
  }

  .shape-2 {
    width: 250px; height: 250px;
    background: radial-gradient(circle, rgba(191, 219, 254, 0.1) 0%, transparent 70%);
    bottom: 20%; right: -5%;
    animation-delay: 5s;
    filter: blur(40px);
  }

  .shape-3 {
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(254, 243, 199, 0.12) 0%, transparent 70%);
    top: 50%; right: 15%;
    animation-delay: 10s;
    filter: blur(35px);
  }

  .dream-category-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(254, 243, 199, 0.15);
    border-radius: 16px;
    padding: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .dream-category-card:hover {
    transform: translateY(-4px);
    background: linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 100%);
    border-color: rgba(254, 243, 199, 0.35);
    box-shadow: 0 8px 24px rgba(0,0,0,0.3), 0 0 20px rgba(254, 243, 199, 0.08);
  }

  .input-amber-glow {
    background: linear-gradient(90deg, rgb(255,251,235) 0%, rgb(254,243,199) 50%, rgb(255,251,235) 100%);
    background-size: 200% 100%;
    animation: amberGlow 2.5s ease-in-out infinite, inputShimmer 3.5s ease-in-out infinite;
  }
}

@keyframes nightSky {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 0% 100%; }
}

@keyframes stars {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -50px) scale(1.1); }
  50% { transform: translate(-30px, 30px) scale(0.9); }
  75% { transform: translate(40px, 60px) scale(1.05); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes crystalGlow {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(167, 139, 250, 0.5)); }
  50% { filter: drop-shadow(0 0 20px rgba(167, 139, 250, 0.9)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.5)); }
}

.crystal-glow {
  animation: crystalGlow 3s ease-in-out infinite;
}

@keyframes amberGlow {
  0%, 100% { border-color: rgba(217,119,6,0.4); box-shadow: 0 0 0 0 rgba(217,119,6,0); }
  50% { border-color: rgba(251,191,36,0.85); box-shadow: 0 0 20px 6px rgba(217,119,6,0.28); }
}

@keyframes inputShimmer {
  0%, 100% { background-position: 200% center; }
  50% { background-position: -200% center; }
}

@keyframes livePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.live-dot {
  animation: livePulse 1.5s ease-in-out infinite;
}

.sparkle {
  position: absolute;
  width: 4px; height: 4px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255,255,255,0.8);
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}

@keyframes reviewFadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes reviewFadeOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-8px); }
}

.review-enter { animation: reviewFadeIn 0.5s ease-out forwards; }
.review-exit { animation: reviewFadeOut 0.5s ease-in forwards; }

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto; height: auto;
  padding: 1rem; margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

/* Responsive */
@media (max-width: 768px) {
  .floating-shape {
    filter: blur(40px);
  }
  .shape-1, .shape-2, .shape-3 {
    width: 200px; height: 200px;
  }
}
```

---

### 7. `app/layout.tsx`

Root layout — English, no Korean-specific ads or verification. Domain will be set up later (use placeholder).

```tsx
import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://dream-free-en.vercel.app'),

  title: {
    default: 'Free Dream Interpreter | What Did Your Dream Mean?',
    template: '%s | Dream'
  },

  description: 'AI-powered dream interpretation. Get instant, personalized analysis of your dream\'s symbols, emotions, and hidden meaning. Free, no sign-up required.',

  keywords: [
    'dream interpreter', 'dream meaning', 'dream analysis',
    'what does my dream mean', 'dream symbols',
    'snake dream meaning', 'teeth falling out dream',
    'flying dream meaning', 'free dream interpretation',
  ],

  openGraph: {
    title: 'Free Dream Interpreter | What Did Your Dream Mean?',
    description: 'AI-powered dream interpretation. Instant, personalized analysis. Free.',
    url: 'https://dream-free-en.vercel.app',
    siteName: 'Dream Interpreter',
    locale: 'en_US',
    type: 'website',
  },

  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Free Dream Interpreter',
  description: 'AI-powered dream interpretation. Get instant analysis of your dream\'s hidden meaning.',
  url: 'https://dream-free-en.vercel.app',
  applicationCategory: 'LifestyleApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="floating-shape shape-3" aria-hidden="true" />

        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>

        <main id="main-content" className="relative z-10">
          {children}
        </main>

        <footer className="relative z-10 mt-20 py-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-white/60 text-sm mb-3">
              A place that listens to your story. Always here for you.
            </p>
            <p className="text-white/40 text-xs">
              These interpretations are for reference only and do not replace professional counseling.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
```

---

### 8. `app/page.tsx` — Home Page

This is a **client component** (`'use client'`). It's a chat-style UI where users type their dream and get AI interpretation. Copy the exact same structure as below, with English text:

**Key features:**
- Typing animation for initial message: "You're here. Tell me what you dreamed last night."
- Live stats counter (random 800-1400 range)
- Dream category quick-select cards (Snake, Teeth, Chased, Death, Money, Ex partner)
- Chat bubble UI with user/AI messages
- Calls `/api/interpret` for AI interpretation
- Auto-rotating user reviews
- "Popular Dream Meanings" section linking to `/dream/[slug]` pages
- Copy and Share buttons on AI responses
- URL `?q=` parameter support (reads query param and auto-fills input, using `window.location.search` in useEffect — do NOT use `useSearchParams()` as it requires Suspense boundary and breaks static builds)

**dreamKeywords for the bottom section** (links to `/dream/[slug]`):
```typescript
const dreamKeywords = [
  { name: 'Snake dream', slug: 'snake-dream' },
  { name: 'Teeth falling out', slug: 'teeth-dream' },
  { name: 'Being chased', slug: 'chasing-dream' },
  { name: 'Flying dream', slug: 'flying-dream' },
  { name: 'Death dream', slug: 'death-dream' },
  { name: 'Pregnancy dream', slug: 'pregnancy-dream' },
  { name: 'Ex partner dream', slug: 'ex-dream' },
  { name: 'Wedding dream', slug: 'wedding-dream' },
  { name: 'Fire dream', slug: 'fire-dream' },
  { name: 'Water dream', slug: 'water-dream' },
  { name: 'Ghost dream', slug: 'ghost-dream' },
  { name: 'Exam dream', slug: 'exam-dream' },
  { name: 'Money dream', slug: 'money-dream' },
  { name: 'Baby dream', slug: 'baby-dream' },
  { name: 'Poop dream', slug: 'poop-dream' },
]
```

**Reviews:**
```typescript
const reviews = [
  { text: 'Goosebumps... it was spot on', stars: 5 },
  { text: "Can't believe this is free", stars: 5 },
  { text: 'Shared it with all my friends!', stars: 5 },
  { text: 'I check every morning lol', stars: 4 },
]
```

**IMPORTANT:** Do NOT add a language switch link. This is a standalone site.

Here is the complete Korean home page code. Replicate this EXACT structure with English text. Do NOT change the Tailwind classes, animations, or layout — only translate the text:

```tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_MESSAGE = "You're here. Tell me what you dreamed last night."

const dreamCategories = [
  { emoji: '🐍', label: 'Snake', keyword: 'Snake dream' },
  { emoji: '🦷', label: 'Teeth', keyword: 'Teeth falling out' },
  { emoji: '🏃', label: 'Chased', keyword: 'Being chased' },
  { emoji: '💀', label: 'Death', keyword: 'Death dream' },
  { emoji: '💰', label: 'Money', keyword: 'Money dream' },
  { emoji: '💔', label: 'Ex partner', keyword: 'Ex partner dream' },
]

const reviews = [
  { text: 'Goosebumps... it was spot on', stars: 5 },
  { text: "Can't believe this is free", stars: 5 },
  { text: 'Shared it with all my friends!', stars: 5 },
  { text: 'I check every morning lol', stars: 4 },
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

  // URL ?q= parameter support
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const q = params.get('q')
    if (q) {
      setInput(q)
      window.history.replaceState({}, '', '/')
    }
  }, [])

  // Typing animation
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
    }, 50)
    return () => clearInterval(timer)
  }, [messages.length])

  // Stats count-up animation
  useEffect(() => {
    const base = 800 + Math.floor(Math.random() * 600)
    let current = 0
    const step = Math.ceil(base / 40)
    const timer = setInterval(() => {
      current += step
      if (current >= base) { current = base; clearInterval(timer) }
      setTodayCount(current)
    }, 40)
    return () => clearInterval(timer)
  }, [])

  // Review auto-rotate
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
      setMessages(prev => [...prev, { role: 'assistant', content: "Can't see it right now. Try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
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
      await navigator.share({ title: 'My Dream Interpretation', text: content, url })
    } else {
      await navigator.clipboard.writeText(url)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    }
  }

  const dreamKeywords = [
    { name: 'Snake dream', slug: 'snake-dream' },
    { name: 'Teeth falling out', slug: 'teeth-dream' },
    { name: 'Being chased', slug: 'chasing-dream' },
    { name: 'Flying dream', slug: 'flying-dream' },
    { name: 'Death dream', slug: 'death-dream' },
    { name: 'Pregnancy dream', slug: 'pregnancy-dream' },
    { name: 'Ex partner dream', slug: 'ex-dream' },
    { name: 'Wedding dream', slug: 'wedding-dream' },
    { name: 'Fire dream', slug: 'fire-dream' },
    { name: 'Water dream', slug: 'water-dream' },
    { name: 'Ghost dream', slug: 'ghost-dream' },
    { name: 'Exam dream', slug: 'exam-dream' },
    { name: 'Money dream', slug: 'money-dream' },
    { name: 'Baby dream', slug: 'baby-dream' },
    { name: 'Poop dream', slug: 'poop-dream' },
  ]

  const isLanding = messages.length === 1

  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto">
      {/* Hero */}
      <div className="text-center px-6 pt-12 pb-4 animate-fade-in-up">
        <div className="inline-block mb-4 px-6 py-2 rounded-full bg-amber-900/20 backdrop-blur-sm border border-amber-200/30">
          <span className="text-sm font-medium text-amber-100">
            ✨ Always free · No sign-up
          </span>
        </div>
        <h1 className="hero-title mb-6">
          What is your<br />dream telling you?
        </h1>
        <div className="text-7xl crystal-glow inline-block">🔮</div>
      </div>

      {/* Live stats */}
      {isLanding && (
        <div className="text-center pb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 live-dot" />
            <span className="text-white/60 text-sm">
              <span className="text-amber-200 font-bold">{todayCount.toLocaleString()}</span> dreams interpreted today
            </span>
          </div>
        </div>
      )}

      {/* Messages + inline input */}
      <div className="flex-1 px-4 pb-6 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} ref={i === messages.length - 1 ? lastMsgRef : null} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="text-xl crystal-glow mb-1 shrink-0">🔮</div>
            )}
            <div className={`max-w-[78%] flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`
                px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap
                ${msg.role === 'user'
                  ? 'bg-amber-600/80 text-white rounded-2xl rounded-br-md'
                  : 'bg-white/10 backdrop-blur-sm text-white/90 rounded-2xl rounded-bl-md border border-white/10'}
              `}>
                {msg.role === 'assistant' && i === 0 && !isTypingDone
                  ? <>{typedText}<span className="inline-block w-0.5 h-4 bg-amber-200/80 ml-0.5 animate-pulse align-middle" /></>
                  : msg.content}
              </div>
              {msg.role === 'assistant' && i > 0 && (
                <div className="flex gap-3 px-1">
                  <button onClick={() => copyMessage(msg.content, i)} className="text-white/35 hover:text-white/60 text-xs transition-colors">
                    {copiedIndex === i ? '✓ Copied' : 'Copy'}
                  </button>
                  <button onClick={() => shareMessage(msg.content)} className="text-white/35 hover:text-white/60 text-xs transition-colors">
                    {shared ? '✓ Shared' : 'Share'}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex items-end gap-2 justify-start">
            <div className="text-xl crystal-glow mb-1 shrink-0">🔮</div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="flex gap-1 items-center h-4">
                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />

        {/* Inline input */}
        {!isLoading && (
          <div className="flex items-end gap-2 justify-end mt-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Tell me..."
              className={`${isLanding ? 'w-[88%] input-amber-glow border-amber-300/70' : 'w-[72%] bg-amber-50/90 border-amber-200/50 focus:border-amber-400'} border rounded-2xl rounded-br-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-amber-900/50 resize-none outline-none transition-all overflow-hidden`}
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-base transition-colors shrink-0"
            >
              🔮
            </button>
          </div>
        )}

        {/* Dream category cards */}
        {isLanding && !isLoading && (
          <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-white/50 text-xs text-center mb-3">What did you dream about?</p>
            <div className="grid grid-cols-3 gap-2">
              {dreamCategories.map(cat => (
                <button key={cat.keyword} onClick={() => setInput(cat.keyword)} className="dream-category-card text-center">
                  <div className="text-2xl mb-1">{cat.emoji}</div>
                  <div className="text-amber-50/80 text-xs font-medium">{cat.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Landing-only sections */}
      {isLanding && (
        <>
          {/* User reviews */}
          <div className="px-6 pb-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="text-center">
              <p className="text-white/40 text-xs mb-3">User reviews</p>
              <div className="inline-block px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[72px]">
                <div className={reviewFading ? 'review-exit' : 'review-enter'}>
                  <div className="text-amber-300 text-sm mb-1">
                    {'★'.repeat(reviews[reviewIndex].stars)}{'☆'.repeat(5 - reviews[reviewIndex].stars)}
                  </div>
                  <p className="text-white/80 text-sm">&ldquo;{reviews[reviewIndex].text}&rdquo;</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO keywords */}
          <div className="text-center px-6 pt-4 pb-40 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-lg font-bold mb-5 text-white/80">Popular Dream Meanings</h2>
            <div className="grid grid-cols-2 gap-2">
              {dreamKeywords.map((item, i) => (
                <Link
                  key={item.slug}
                  href={`/dream/${item.slug}`}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-amber-900/15 hover:bg-amber-800/25 border border-amber-200/20 hover:border-amber-200/40 text-amber-50/90 transition-all duration-300 text-xs font-medium backdrop-blur-sm"
                >
                  {i < 3 && <span className="text-sm">{['🥇', '🥈', '🥉'][i]}</span>}
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
```

This is the COMPLETE home page. Use it as-is — it's already in English.

---

### 9. `app/api/interpret/route.ts` — AI Dream Interpretation API

Use Gemini API (gemini-flash-latest). Env var: `GEMINI_API_KEY`.

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { dream } = await request.json()

    if (!dream) {
      return NextResponse.json({ error: 'Please describe your dream.' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      return NextResponse.json({ interpretation: getDemoInterpretation(dream) })
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `You are a sharp, intuitive dream analyst. You cut straight to what the dream reveals about the person's inner world. You don't comfort — you illuminate.

[INTERNAL ANALYSIS — Do not output this. Complete before writing.]

Analyze through three lenses:

Lens 1 · Desire vs. Block
What does the dreamer want? What blocks it?
"They want (desire) but (block) is expressed as (dream scene)."

Lens 2 · Symbols
What does each element psychologically represent?
What is suppressed or ignored?

Lens 3 · Core Emotion & Need
Dominant emotion? When does it surface in waking life?
What does the person need? (safety/recognition/boundaries/rest/freedom/connection/control)

Integration: Find 1-2 keywords across all three lenses.

[TONE RULES]
- Short, declarative sentences. State, don't explain.
- Confident, direct: "You're..." not "You might be..."
- No comfort, no fluff, no emojis, no academic terms
- No lucky/unlucky predictions

[OUTPUT FORMAT]
- Plain text only. No headers, bullets, markdown.
- One sentence per line.
- Exactly 5 paragraphs, one blank line between each.
- Para 1 (1-2 sentences): Core of the dream.
- Para 2 (3-5 sentences): Symbols as psychological truths.
- Para 3 (2-3 sentences): Name the desire and the block.
- Para 4 (1 sentence): One sharp question.
- Para 5 (1-2 sentences): One concrete action.

Now interpret this dream:

${dream}` }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 2000 }
          })
        }
      )

      if (!response.ok) throw new Error(`API returned ${response.status}`)

      const data = await response.json()
      return NextResponse.json({ interpretation: data.candidates[0].content.parts[0].text })
    } catch {
      return NextResponse.json({ interpretation: getDemoInterpretation(dream) })
    }
  } catch {
    return NextResponse.json({ interpretation: getDemoInterpretation('unknown dream') })
  }
}

function getDemoInterpretation(dream: string): string {
  const d = dream.toLowerCase()

  if (d.includes('snake') || d.includes('serpent')) {
    return `Something in your life is shifting, and part of you already knows it.\nThis dream didn't come from nowhere.\n\nSnakes always signal transformation or threat — sometimes both at once.\nIf it was chasing you, you're avoiding a change that's already begun.\nIf it was still, you're watching something dangerous and choosing not to act.\nDreams like this keep returning until you decide which it is.\n\nYou want things to stay as they are, but something has already moved.\nYou're not ready to name it yet.\n\nWhat has changed in the last month that you haven't fully acknowledged?\n\nToday, write one sentence about what you're sensing but not saying.`
  }

  if (d.includes('teeth') || d.includes('tooth')) {
    return `You're afraid of losing something that matters — and it shows.\nThis is one of the most common dreams, and it always means the same thing.\n\nTeeth represent confidence, control, how you present yourself to the world.\nWhen they fall out in a dream, something in waking life feels like it's slipping.\nA recent mistake, a conversation that went wrong, or a role you're not sure you're filling well.\nThe more teeth that fell, the wider the anxiety.\n\nYou want to appear capable and in control, but right now something is shaking that.\nYou're more worried about how you're being perceived than you're letting on.\n\nWhat happened recently that made you feel less confident than usual?\n\nToday, identify one small thing you can do to feel more in control of that situation.`
  }

  if (d.includes('chased') || d.includes('chasing') || d.includes('running') || d.includes('flee')) {
    return `You're avoiding something — and you've been avoiding it for a while.\nThis dream is your mind's way of making that impossible to ignore.\n\nBeing chased is never about external danger.\nIt's always about something internal you refuse to face.\nThe fact that you remember this dream means the avoidance has reached a threshold.\nWhatever is chasing you, it's gaining.\n\nYou know what needs to be done. You just don't want to start.\nThe longer you wait, the bigger it gets in your head.\n\nWhat is the one thing you keep deciding to deal with "later"?\n\nToday, take one concrete step toward it — however small.`
  }

  if (d.includes('fly') || d.includes('flying') || d.includes('float')) {
    return `You need to get out from under something.\nNot permanently — just enough to breathe.\n\nFlying in dreams means the pressure in your waking life has become too heavy.\nYour mind is literally showing you the urge to rise above it.\nIf flying felt effortless, part of you already knows how to escape it.\nIf it felt hard to stay up, you're fighting to maintain that sense of freedom.\n\nYou want space — from a person, a role, an expectation, a version of yourself.\nBut leaving feels irresponsible, so you stay and dream about flying instead.\n\nWhat would you do differently if you weren't worried about what others expected of you?\n\nToday, carve out one hour that belongs entirely to you — no obligations.`
  }

  if (d.includes('fall') || d.includes('falling') || d.includes('drop')) {
    return `Something feels out of your hands right now.\nYour mind registered it before you fully did.\n\nFalling is the dream version of losing your grip.\nOn a situation, a relationship, a belief about yourself.\nDreams like this happen when control slips faster than you can adjust.\nThe point where you wake up is the point where your mind refuses to see the landing.\n\nYou're holding on to something you know is already falling apart.\nYou're not ready to let it go, but you're starting to feel the drop.\n\nWhat are you gripping tightly right now that may already be changing?\n\nToday, identify one thing you've been trying to control that you actually can't.`
  }

  return `Something unresolved surfaced while you were sleeping.\nThe fact that you remember it means it matters.\n\nDreams pull from what you haven't finished processing during the day.\nThe details that stay with you — the ones that feel odd or heavy — are the real signals.\nThe emotion you felt in the dream is the one you're carrying in waking life right now.\nPay attention to that, not the surface story.\n\nYou're holding something you haven't named yet.\nIt's not about the dream — it's about what you felt inside it.\n\nWhat emotion from that dream do you recognize from your current life?\n\nToday, write it down in one sentence — what you feel but haven't said out loud.`
}
```

This is the COMPLETE API route file including the full `getDemoInterpretation` fallback function.

---

### 10. `app/dream/[slug]/page.tsx` — Dream Content Pages

This is a **server component**. It renders 32 different dream interpretation pages with rich content.

#### Type Definitions

```typescript
type DreamEntry = { title: string; description: string; content: string }
type DreamCase = { title: string; description: string }
type DreamConfig = {
  slug: string
  name: string           // e.g. "Snake Dream"
  keyword: string        // e.g. "snake dream"
  symbol: string         // e.g. "transformation and hidden threat"
  sensory: string        // e.g. "the gleam of scales catching light"
  focus: string          // e.g. "tension between fear and anticipation"
  actionTip: string      // e.g. "Today, address one financial or personal matter you've been postponing."
  tradition: string      // e.g. "a sign of wealth and powerful allies" (Western/universal traditions)
  metaTitle: string      // Conversational, clickbait-style (under 60 chars)
  metaDescription: string // Vivid, curiosity-driving (under 155 chars)
  caseStudies: [DreamCase, DreamCase, DreamCase, DreamCase]
  relatable: [string, string, string]
}
type FAQItem = { question: string; answer: string }
```

#### How the Page Renders (IMPORTANT)

The page component does NOT use a markdown content string. It reads config fields directly and renders them into JSX chat bubbles. The `buildDreamContent` function generates a `content` string for the `dreamData` record (used for SEO/metadata purposes), but the **actual page rendering** reads directly from config:

- `config.name` → H1 title + user bubble text
- `config.symbol` → highlighted in amber-300 in AI intro
- `config.sensory` → italicized in amber-200 in AI intro
- `config.focus` → highlighted in blue-300 in psychology section
- `config.tradition` → tradition card text
- `config.caseStudies` → scenario breakdown cards
- `config.relatable` → "who dreams this" bullet list
- `config.actionTip` → closing bubble tip

The intro text, psychology text, FAQ answers, and closing text are **built from templates** that reference these config fields. The templates should use natural, conversational English with the tone described below.

#### Content Sections (all rendered as chat-bubble JSX)

1. **AI intro bubble**: 2-3 paragraphs connecting the dream symbol to the reader's life. Reference `config.symbol` and `config.sensory` naturally within the text.
2. **Scenario Breakdown card**: `config.caseStudies` — 4 cards in 2-column grid
3. **Psychology bubble**: Freud paragraph (use `config.focus`) + Jung paragraph. Mention concepts without being academic.
4. **Tradition card**: `config.tradition` verbatim — Western/universal dream folklore told as a story
5. **Who dreams this bubble**: `config.relatable` — 3 bullet points
6. **FAQ card**: 5 questions built by `buildFAQs(config)` function — answers reference `config.sensory`, `config.symbol`, `config.actionTip`
7. **Closing bubble**: Warm wrap-up + `config.actionTip`

#### Helper Components (use these exact classes)

```tsx
function AiAvatar() {
  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-sm shrink-0 shadow-md">
      🔮
    </div>
  )
}

function SectionCard({ label, icon, children }: { label: string; icon: string; children: ReactNode }) {
  return (
    <div className="bg-slate-800/40 border border-white/[0.08] rounded-2xl p-4">
      <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-3">
        {icon} {label}
      </p>
      {children}
    </div>
  )
}
```

#### Page Component Structure

Match this exact chat-bubble UI layout:

1. **Back navigation** — "← Back to home" linking to `/`
2. **H1 title** — "{dreamName} Interpretation"
3. **User question bubble** — "I dreamed about {name} last night. What does it mean? 😅"
4. **AI intro bubble** — Overview with symbol (amber-300 color) and sensory detail (amber-200 italic)
5. **Case studies card** — `<SectionCard label="Scenario Breakdown" icon="🔍">` with 2-column grid
6. **Psychology bubble** — Freud section + Jung section, with `text-blue-300/70` label "🧠 Through a psychological lens"
7. **Cultural tradition card** — `bg-amber-950/40 border-amber-400/20`, label "📜 In dream folklore" — Western/universal traditions
8. **"Who dreams this" bubble** — `text-purple-300/70` label "💭 People who commonly have this dream", 3 bullet points
9. **FAQ section** — `<SectionCard label="Frequently Asked" icon="❓">` — Q/A in chat bubble style
10. **Closing message bubble** — gradient bg, "✨ Today's takeaway" — encouraging wrap-up + actionTip
11. **DreamInput component** — `<DreamInput dreamName={config.name} />`
12. **FAQ JSON-LD schema** — For Google rich results
13. **Related dreams section** — Links to `/dream/[slug]`
14. **Bottom navigation** — "← Back to home"

#### `generateMetadata`

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const dream = dreamData[params.slug]
  if (!dream) return {}
  return { title: dream.title, description: dream.description }
}
```

#### FAQ Builder

Build 5 FAQ items per dream:
1. "Is a {name} always a good/bad sign?"
2. "Is it bad if I keep having the same dream?"
3. "Could a very vivid dream be prophetic?"
4. "Should I make big decisions based on my dream?"
5. "What should I do right after having this dream?"

All answers should be thoughtful, balanced, and reference the specific dream's sensory/symbol/actionTip where relevant.

#### Dream Slugs to Create (32 total)

Create unique, high-quality configs for ALL of these:

1. snake-dream
2. teeth-dream
3. chasing-dream
4. money-dream
5. pregnancy-dream
6. water-dream
7. death-dream
8. exam-dream
9. ghost-dream
10. ex-dream
11. poop-dream
12. fire-dream
13. tiger-dream
14. baby-dream
15. wedding-dream
16. flying-dream
17. house-dream
18. thief-dream
19. car-accident-dream
20. cat-dream
21. dog-dream
22. deceased-dream
23. rainbow-dream
24. lottery-dream
25. hair-dream
26. blood-dream
27. earthquake-dream
28. ocean-dream
29. moon-dream
30. gift-dream
31. love-dream
32. romance-dream

#### Content Tone Guidelines

- **metaTitle**: Casual, attention-grabbing. Like a friend telling you something surprising. Under 60 chars.
  - Good: "Snake dream? Yeah, money might actually be coming"
  - Good: "Teeth falling out dream — no, nobody's dying"
  - Bad: "Snake Dream Interpretation | Free Analysis"

- **metaDescription**: Specific, vivid, creates urgency. Not generic SEO filler. Under 155 chars.
  - Good: "Big snake just passing by? That's cash incoming. Chased by one? That's a warning. White snake = jackpot."
  - Bad: "Free snake dream interpretation with psychological analysis."

- **Content**: Empathetic but direct. Not academic. Like a wise friend who knows dream psychology. Mix psychological insight with Western/universal dream traditions. NOT Korean-specific traditions.

- **tradition field**: Reference Western/universal dream traditions — Greek mythology, Egyptian dream books, medieval European folklore, Native American dreamwork, Jungian collective unconscious — NOT Korean.

- **caseStudies**: 4 specific dream scenarios with psychological interpretations
- **relatable**: 3 real-life situations where people commonly have this dream

#### COMPLETE SAMPLE: snake-dream

Use this as the reference for tone, length, and quality when generating all 32 configs. ChatGPT should match this level of specificity and naturalness.

**Config:**

```typescript
{
  slug: 'snake-dream',
  name: 'Snake Dream',
  keyword: 'snake dream',
  symbol: 'transformation and hidden threat',
  sensory: 'the gleam of scales catching light, that electric stillness before it moves',
  focus: 'the tension between fear and something you know is about to change',
  actionTip: 'Today, deal with one money or personal thing you\'ve been dodging. You already know what it is — your dream just confirmed it.',
  tradition: 'The Greeks carved snakes into the staff of Asclepius, the god of healing — because they knew the thing that terrifies you is often the thing that transforms you. Ancient Egyptian dream priests read serpent visions as omens of either powerful enemies or sudden wealth, depending on how the snake behaved. Jung called the snake one of the deepest archetypes in the human psyche: raw life force, shadow energy, the part of you that refuses to stay buried.',
  metaTitle: 'Snake dream? Yeah, money might actually be coming',
  metaDescription: 'Big snake passing by = cash incoming. Chased by one = a warning you\'re ignoring. White snake = jackpot signal. Your snake dream means something specific.',
  caseStudies: [
    {
      title: 'A large snake quietly passing by',
      description: 'No attack, no drama — it just... existed there. That\'s your life rearranging itself beneath the surface. Something big is already shifting — a career move, a financial turn, a relationship evolving into something new. Your body felt it before your brain caught up.'
    },
    {
      title: 'Being chased by a snake',
      description: 'Whatever you\'ve been avoiding just picked up speed. The faster the snake, the more overdue that conversation, decision, or confrontation is. This isn\'t about danger out there. It\'s about something in here you keep hitting snooze on.'
    },
    {
      title: 'Catching or killing a snake',
      description: 'You\'re done running. This dream shows up right when you\'re ready to grab back control — over an anxiety, a toxic dynamic, a fear you\'ve been feeding by ignoring. It\'s not violent energy. It\'s "I\'m handling this now" energy.'
    },
    {
      title: 'A white or golden snake appearing',
      description: 'Every dream tradition on the planet agrees on this one: a luminous snake is rare, and it\'s powerful. Unexpected help, a money door opening, a spiritual click into place. If the snake felt calm, the energy around you right now is genuinely protective.'
    },
  ],
  relatable: [
    'You\'re in the middle of a career shift — or secretly wanting one. The snake mirrors that cocktail of excitement and dread that comes with actually doing the thing you\'ve been talking about.',
    'There\'s a money decision sitting in your head right now. An investment, a debt you keep scrolling past, a raise you haven\'t asked for. The snake IS that unfinished business.',
    'Someone in your life is pulling you in and pushing you away at the same time. The snake often shows up when a relationship needs clearer boundaries — and you know it, but haven\'t drawn the line yet.',
  ],
}
```

**Rendered page content (what `buildDreamContent` should produce for this config):**

The page renders as chat bubbles. Here's how each section reads:

**User bubble:**
> I dreamed about a snake last night. What does it mean? 😅

**AI intro bubble:**
> Okay — snake dreams don't show up randomly. Something in your life is moving, and part of you already sensed it before you fell asleep.
>
> Some people wake up from these with their pulse still going. Others feel this weird pull — like the dream was trying to *show* them something important, but wrapped it in a riddle. That's how dream language works. It doesn't spell things out. It drops symbols and waits for you to catch on. And when the symbol is *transformation and hidden threat*? That's your subconscious saying the stakes just got real — in your work, your money, your closest relationships.
>
> Here's the thing: if the dream was unusually vivid — if you can still feel *that electric stillness before it moves*, still see *the gleam of scales catching light* — that's not random brain noise. That's your deeper mind underlining a sentence and saying "don't skip this part." So forget good dream vs. bad dream. Read it like a weather report from your inner world.

**Scenario Breakdown card (4 cards in 2-column grid):**
> (same as caseStudies above)

**Psychology bubble (🧠 Through a psychological lens):**
> Freud believed dreams are the back channel — the stuff you can't bring yourself to say out loud during the day sneaks out at night in disguise. So a snake dream isn't just "oh, a snake." It's your mind staging a whole scene around *the tension between fear and something you know is about to change*. That knot in your stomach you've been explaining away? Your dream just gave it a body.
>
> Jung went deeper. He saw dreams as a conversation between who you are on the surface and who you are underneath. When the same image keeps showing up in your sleep, it's not a bug — it's a knock on the door. Something in you wants to be seen, dealt with, integrated. This dream isn't trying to scare you. It's more like a compass needle swinging hard toward something you've been walking away from.

**Cultural tradition card (📜 In dream folklore):**
> The Greeks carved snakes into the staff of Asclepius, the god of healing — because they knew the thing that terrifies you is often the thing that transforms you. Ancient Egyptian dream priests read serpent visions as omens of either powerful enemies or sudden wealth, depending on how the snake behaved. Jung called the snake one of the deepest archetypes in the human psyche: raw life force, shadow energy, the part of you that refuses to stay buried.

**Who dreams this bubble (💭 People who commonly have this dream):**
> ● You're in the middle of a career shift — or secretly wanting one. The snake mirrors that cocktail of excitement and dread that comes with actually doing the thing you've been talking about.
> ● There's a money decision sitting in your head right now. An investment, a debt you keep scrolling past, a raise you haven't asked for. The snake IS that unfinished business.
> ● Someone in your life is pulling you in and pushing you away at the same time. The snake often shows up when a relationship needs clearer boundaries — and you know it, but haven't drawn the line yet.

**FAQ section (❓ Frequently Asked) — chat bubble style:**

Q: "Is a snake dream always a good sign?"
A: "Nope — and it's not always bad either. Here's the real filter: how did it *feel*? If the vibe was calm, even weirdly exciting, lean into the positive read — opportunity knocking, transformation loading, resources on the way. But if you woke up with your chest tight? That's your mind waving a flag about stress you've been powering through. The snake doesn't have a fixed meaning. Your gut reaction to it does."

Q: "Is it bad if I keep having the same dream?"
A: "Not bad — just persistent. Think of it like a text notification you keep swiping away. Your subconscious is resending the same message because you haven't opened it yet. There's something unfinished in your waking life that maps to this dream. The wild part? Once you take even one small real-world action on it, the dream usually stops — or shapeshifts into something new."

Q: "Could a very vivid dream be prophetic?"
A: "Vivid doesn't automatically mean prophetic. But it *does* mean your unconscious mind is running at full power on this topic. When you wake up and you can still feel that electric stillness before the snake moves — that's not a movie your brain played for fun. Your emotional charge around this issue is high. It's less about predicting the future and more about your present screaming for attention."

Q: "Should I make big decisions based on my dream?"
A: "Use it like a flashlight, not a rulebook. Dreams are incredible at showing you *where to look* — but terrible at giving you spreadsheets. For the actual decision, bring in real-world data: your bank account, your calendar, your gut. The dream's job was to point at the door. Walking through it is yours."

Q: "What should I do right after having this dream?"
A: "Grab your phone and type the key images + the feeling in one sentence. Seriously — even 'big snake, felt frozen but not scared' is enough. That anchors the dream before it fades. Then pick one tiny action for today. Deal with one money or personal thing you've been dodging. You already know what it is — your dream just confirmed it."

**Closing bubble (✨ Today's takeaway):**
> Your dream didn't come here to stress you out. It showed up the way a good friend taps your shoulder — quiet, but impossible to ignore. Something in your life is asking for a small adjustment. Not a revolution. Just a nudge in a better direction.
>
> Don't overthink the dream today. Just let it gently steer one choice — one conversation, one decision you've been circling around. That's all it ever wanted.
>
> 💡 Today, deal with one money or personal thing you've been dodging. You already know what it is — your dream just confirmed it.

---

#### SECOND SAMPLE: teeth-dream (config only — to show range)

```typescript
{
  slug: 'teeth-dream',
  name: 'Teeth Falling Out Dream',
  keyword: 'teeth falling out dream',
  symbol: 'control slipping and self-image cracking',
  sensory: 'that hollow feeling in your mouth, the sharp click of enamel on your tongue',
  focus: 'the gap between how you want to be seen and how exposed you actually feel',
  actionTip: 'Today, name one situation where you\'re performing confidence you don\'t feel. Just naming it takes half its power away.',
  tradition: 'Ancient Romans believed teeth dreams foretold the death of a family member — but modern dream researchers traced that to the raw vulnerability teeth represent. In medieval European folklore, losing teeth in a dream meant losing face in public. Freud linked it directly to anxiety about sexual attractiveness and social standing. The common thread across centuries: teeth = how the world sees you, and losing them = that armor coming off.',
  metaTitle: 'Teeth falling out dream — relax, nobody\'s dying',
  metaDescription: 'Front teeth = your public image is cracking. Molars = family pressure. Blood = emotional burnout. Putting them back = recovery mode. Here\'s what yours means.',
  caseStudies: [
    {
      title: 'Front teeth falling out',
      description: 'Your public self is under pressure. Something about how people see you — at work, online, in a relationship — feels fragile right now. This dream is your ego sending an SOS.'
    },
    {
      title: 'Molars crumbling',
      description: 'Molars do the heavy lifting. When they go, it\'s about deep foundations — family responsibility, long-term commitments, the stuff you carry quietly. Something structural is shifting.'
    },
    {
      title: 'Teeth falling out with blood',
      description: 'Blood adds urgency. You\'re not just worried — you\'re emotionally spent. This is the dream version of burnout knocking. Your body is saying "I can\'t keep pretending everything is fine."'
    },
    {
      title: 'Putting teeth back in',
      description: 'Recovery energy. You\'re already in fix-it mode — patching your confidence, rebuilding after a hit. The dream isn\'t showing damage. It\'s showing you fighting back. That matters.'
    },
  ],
  relatable: [
    'You have something coming up where you\'ll be judged — a presentation, an interview, a hard conversation. Your sleeping brain is rehearsing the worst-case scenario so your waking brain is ready.',
    'Someone recently saw a side of you that you usually keep hidden. The "teeth falling out" is your subconscious processing that exposure. It feels like losing armor.',
    'You\'ve been carrying a family situation or a responsibility that\'s quietly grinding you down. No one sees it, but your dreams do.',
  ],
}
```

---

#### CONTENT WRITING RULES (READ CAREFULLY)

**The page does NOT render from a markdown string.** The page component renders JSX directly from config fields. `buildDreamContent` is NOT used for page rendering — it exists only for the `dreamData` record. The actual page reads `config.name`, `config.symbol`, `config.sensory`, `config.focus`, `config.tradition`, `config.caseStudies`, `config.relatable`, and `config.actionTip` and renders them into chat-bubble JSX sections.

**DO:**
- Write like you're texting a friend at midnight who just woke up from a weird dream
- Use sentence fragments. "Not a warning. A mirror."
- Address the reader directly: "You're not scared of the snake. You're scared of what happens if you stop ignoring it."
- Use em dashes liberally — they create the punchy, conversational rhythm
- Mix metaphors with psychology: "Your subconscious resending a message you keep swiping away"
- Each `sensory` field should be poetic and physical — make the reader go "yes, that's EXACTLY what it felt like"
- Each `tradition` field should tell a mini-story, not list facts. "The Greeks did X *because* they understood Y"
- Each `actionTip` should be hyper-specific and doable TODAY, not generic self-help advice

**DON'T:**
- ❌ "This dream may indicate feelings of anxiety" (academic, passive, boring)
- ❌ "Many people experience this type of dream" (generic filler)
- ❌ "It could mean several things" (noncommittal)
- ❌ "Consider journaling about your feelings" (generic self-help)
- ❌ "Dreams about X are common and often related to Y" (textbook opening)

**DO instead:**
- ✅ "This dream didn't show up by accident. Something moved." (punchy, declarative)
- ✅ "You know exactly what this is about. You've known for a week." (direct, personal)
- ✅ "The water was calm? Then you're handling it. Rough? You're pretending to." (specific, actionable)
- ✅ "Today, text the person you've been avoiding. One sentence. That's it." (concrete actionTip)
- ✅ "The Egyptians carved dream interpretations into temple walls because they knew: the gods speak clearest when you're asleep." (storytelling tradition)

**TONE RECAP: Write like a slightly mystical best friend who reads people scary-well. Not a textbook. Not a horoscope app. Somewhere between a tarot reader who actually studied psychology and a therapist who believes in magic. Casual, punchy, warm — but with an undercurrent of "I see right through you." Every sentence should feel like it was written for ONE person reading at 2am after a weird dream.**

**Use these two samples (snake-dream, teeth-dream) as the gold standard. Generate all other 30 configs at this same level of detail and vibe. Do NOT use generic templates — each dream MUST have unique, tailored content that feels like it was written specifically for that dream symbol.**

#### Related Dreams Map

```typescript
const relatedDreamMap: Record<string, string[]> = {
  'snake-dream': ['water-dream', 'tiger-dream', 'chasing-dream', 'money-dream', 'deceased-dream'],
  'teeth-dream': ['hair-dream', 'blood-dream', 'ghost-dream', 'death-dream', 'exam-dream'],
  'chasing-dream': ['ghost-dream', 'car-accident-dream', 'exam-dream', 'thief-dream', 'snake-dream'],
  'money-dream': ['lottery-dream', 'poop-dream', 'snake-dream', 'gift-dream', 'house-dream'],
  'pregnancy-dream': ['baby-dream', 'wedding-dream', 'moon-dream', 'water-dream', 'house-dream'],
  'water-dream': ['ocean-dream', 'snake-dream', 'death-dream', 'rainbow-dream', 'moon-dream'],
  'death-dream': ['deceased-dream', 'ghost-dream', 'teeth-dream', 'water-dream', 'earthquake-dream'],
  'exam-dream': ['chasing-dream', 'teeth-dream', 'car-accident-dream', 'money-dream', 'gift-dream'],
  'ghost-dream': ['deceased-dream', 'death-dream', 'chasing-dream', 'teeth-dream', 'moon-dream'],
  'ex-dream': ['romance-dream', 'wedding-dream', 'love-dream', 'chasing-dream', 'ghost-dream'],
  'poop-dream': ['money-dream', 'lottery-dream', 'snake-dream', 'gift-dream', 'baby-dream'],
  'fire-dream': ['house-dream', 'earthquake-dream', 'death-dream', 'snake-dream', 'moon-dream'],
  'tiger-dream': ['snake-dream', 'dog-dream', 'cat-dream', 'chasing-dream', 'flying-dream'],
  'baby-dream': ['pregnancy-dream', 'wedding-dream', 'cat-dream', 'gift-dream', 'moon-dream'],
  'wedding-dream': ['romance-dream', 'ex-dream', 'pregnancy-dream', 'love-dream', 'gift-dream'],
  'flying-dream': ['ocean-dream', 'rainbow-dream', 'moon-dream', 'house-dream', 'chasing-dream'],
  'house-dream': ['fire-dream', 'earthquake-dream', 'thief-dream', 'water-dream', 'ghost-dream'],
  'thief-dream': ['chasing-dream', 'money-dream', 'house-dream', 'dog-dream', 'ghost-dream'],
  'car-accident-dream': ['chasing-dream', 'death-dream', 'water-dream', 'exam-dream', 'flying-dream'],
  'cat-dream': ['dog-dream', 'snake-dream', 'baby-dream', 'ghost-dream', 'moon-dream'],
  'dog-dream': ['cat-dream', 'tiger-dream', 'thief-dream', 'deceased-dream', 'baby-dream'],
  'deceased-dream': ['ghost-dream', 'death-dream', 'gift-dream', 'moon-dream', 'love-dream'],
  'rainbow-dream': ['moon-dream', 'flying-dream', 'ocean-dream', 'gift-dream', 'baby-dream'],
  'lottery-dream': ['money-dream', 'poop-dream', 'snake-dream', 'gift-dream', 'rainbow-dream'],
  'hair-dream': ['teeth-dream', 'blood-dream', 'water-dream', 'moon-dream', 'cat-dream'],
  'blood-dream': ['death-dream', 'teeth-dream', 'hair-dream', 'water-dream', 'fire-dream'],
  'earthquake-dream': ['house-dream', 'fire-dream', 'death-dream', 'ocean-dream', 'chasing-dream'],
  'ocean-dream': ['water-dream', 'moon-dream', 'flying-dream', 'rainbow-dream', 'snake-dream'],
  'moon-dream': ['ocean-dream', 'rainbow-dream', 'baby-dream', 'deceased-dream', 'love-dream'],
  'gift-dream': ['money-dream', 'love-dream', 'baby-dream', 'wedding-dream', 'deceased-dream'],
  'love-dream': ['romance-dream', 'ex-dream', 'wedding-dream', 'deceased-dream', 'gift-dream'],
  'romance-dream': ['love-dream', 'ex-dream', 'wedding-dream', 'baby-dream', 'flying-dream'],
}
```

---

### 11. `app/dream/[slug]/DreamInput.tsx` — Client Component

Here is the COMPLETE component — use it as-is:

```tsx
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
      setResult('Something went wrong. Please try again in a moment.')
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
        🔮 My dream was a bit different...
      </p>
      <p className="text-white/55 text-xs leading-relaxed mb-3">
        The above is a general {dreamName} interpretation. Tell us the details and we&apos;ll craft a personalized reading just for you!
      </p>

      {!result ? (
        <>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={`e.g. It was a ${dreamName} but the setting was my school...`}
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
                Reading your dream...
              </>
            ) : (
              '✨ Get my personalized reading'
            )}
          </button>
        </>
      ) : (
        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="bg-amber-400 text-slate-900 px-3.5 py-2.5 rounded-2xl rounded-br-sm max-w-[85%] text-xs font-medium leading-relaxed">
              {input}
            </div>
          </div>
          <div className="bg-slate-900/60 border border-white/[0.08] rounded-xl px-4 py-3.5">
            <p className="text-white/80 text-sm leading-[1.85] whitespace-pre-wrap">
              {result}
            </p>
          </div>
          <button
            onClick={() => { setResult(''); setInput('') }}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-white/[0.08] text-white/60 hover:text-white/80 text-xs transition-colors"
          >
            Ask about another dream
          </button>
        </div>
      )}
    </div>
  )
}
```

This is the COMPLETE DreamInput component. Use it as-is.

---

### Important Notes

1. All routes are at root: `/` (home), `/dream/[slug]` (content pages), `/api/interpret` (API)
2. NO language switch links — this is a standalone English site
3. NO Korean text anywhere
4. NO Kakao AdFit ads, NO Naver verification
5. Font: Inter (body) + Playfair Display (hero) — NOT Korean serif fonts
6. `tradition` section: Western/universal dream folklore — NOT Korean traditions
7. Generate ALL 32 dream configs with unique, high-quality content — NOT templates or placeholders
8. Each metaTitle must be under 60 characters, conversational, curiosity-driving
9. Each metaDescription must be under 155 characters, specific, vivid
10. Do NOT use `useSearchParams()` in the home page — use `window.location.search` in useEffect instead (to avoid Suspense boundary issues on Vercel)
11. Use `generateStaticParams` to pre-generate all 32 dream pages:
```typescript
export function generateStaticParams() {
  return dreamConfigs.map((config) => ({ slug: config.slug }))
}
```

### Output Format

Give me the complete files. If the output is too long, split into parts:
- Part 1: package.json, configs, layout.tsx, globals.css
- Part 2: page.tsx (home page)
- Part 3: api/interpret/route.ts, DreamInput.tsx
- Part 4: dream/[slug]/page.tsx — types, functions, first 16 configs
- Part 5: remaining 16 configs
- Part 6: page component, metadata, related dreams map

## PROMPT END

---

## 네가 직접 해야 할 일

### 1. GitHub 레포 세팅
```bash
git clone https://github.com/kiwi-content/dream-interpreter-en.git dream-free-en
cd dream-free-en
```

### 2. ChatGPT 결과물 저장
ChatGPT가 준 파일들을 해당 경로에 저장

### 3. 설치 & 빌드 테스트
```bash
npm install
npx tsc --noEmit    # 타입 에러 확인
npm run build       # 빌드 에러 확인
```

### 4. 환경변수 설정
Vercel에서 `GEMINI_API_KEY` 환경변수 추가 (기존 한국 프로젝트와 같은 키 사용 가능)

### 5. Vercel 배포
```bash
git add .
git commit -m "Initial English dream interpreter site"
git push origin main
```
Vercel에서 새 프로젝트로 연결

### 6. Google Search Console
1. 새 도메인으로 사이트 등록
2. 사이트맵 제출 (Next.js가 자동 생성)
3. `/dream/` 경로 색인 요청
