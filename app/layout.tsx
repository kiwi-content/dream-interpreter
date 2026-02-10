import './globals.css'
import type { Metadata, Viewport } from 'next'

// 1. Viewport 설정 분리 (Next.js 14 이상 필수 방식)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// 2. Metadata 설정
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // 실제 도메인으로 변경하세요
  title: {
    default: '무료 꿈해몽 🌙 AI가 풀어주는 당신의 꿈 | 뱀꿈 물꿈 똥꿈',
    template: '%s | 무료 AI 꿈해몽'
  },
  description: '어젯밤 꿈이 궁금하다고? AI 고양이가 속 시원하게 풀어줄게 🐱 뱀꿈, 물꿈, 똥꿈부터 이상한 꿈까지! 회원가입 없이 바로 무료로 해석 받아보세요.',
  keywords: [
    '무료꿈해몽', '꿈해몽무료', '무료꿈풀이', '꿈해몽', '무료꿈해석', 
    '꿈풀이', '꿈해석', 'AI꿈해몽', '평생무료',
    '뱀꿈', '물꿈', '똥꿈', '임신꿈', '돌아가신분꿈'
  ],
  authors: [{ name: 'AI 꿈해몽' }],
  creator: 'AI 꿈해몽',
  publisher: 'AI 꿈해몽',
  
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://your-domain.com',
    title: '무료 꿈해몽 🌙 AI 고양이가 당신의 꿈을 풀어드려요',
    description: '어젯밤 꿈 때문에 잠 못 잤어? AI가 뱀꿈, 물꿈, 똥꿈 다 풀어줄게!',
    siteName: '무료 AI 꿈해몽',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'AI 꿈해몽 - 무료 꿈 해석 서비스'
    }]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '무료 꿈해몽 - AI가 꿈 풀어줌',
    description: '뱀꿈, 물꿈, 똥꿈 궁금해? AI가 무료로 속 시원하게 풀어줄게!',
    images: ['/og-image.png'],
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: 'https://your-domain.com',
  },
  
  other: {
    'naver-site-verification': 'your-naver-code',
  }
}

// 3. JSON-LD 구조화 데이터
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '무료 AI 꿈해몽',
  description: '완전 무료 AI 꿈 해석 - 회원가입 없이 바로 이용',
  url: 'https://your-domain.com',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
    availability: 'https://schema.org/InStock',
    description: '평생 무료'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode // 오타 수정됨
}) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <div className="stars" aria-hidden="true">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        <a href="#main-content" className="sr-only focus:not-sr-only">
          본문으로 건너뛰기
        </a>
        
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        
        <footer className="relative z-10 mt-12 py-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto px-4 text-center text-purple-300 text-sm">
            <p className="mb-2">
              © 2026 AI 꿈해몽 🌙 평생 무료로 꿈 풀어드려요
            </p>
            <p className="text-xs">
              AI 해석이라 참고용이에요. 진지한 고민은 전문가와 상담하세요!
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
