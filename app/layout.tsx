import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // 실제 도메인으로 변경
  title: {
    default: '무료 꿈해몽 - 평생 무료 AI 꿈 해석 | 뱀꿈 물꿈 똥꿈 풀이',
    template: '%s | 무료 AI 꿈해몽'
  },
  description: '완전 무료! 회원가입 없이 즉시 이용하는 AI 꿈해몽 서비스. 뱀꿈, 물꿈, 똥꿈, 임신꿈, 돌아가신분꿈 등 모든 꿈을 동양 전통과 서양 심리학으로 무료 분석합니다. 지금 바로 평생 무료로 꿈풀이를 받아보세요.',
  keywords: [
    '무료꿈해몽', '꿈해몽무료', '무료꿈풀이', '꿈해몽', '무료꿈해석', 
    '꿈풀이', '꿈해석', 'AI꿈해몽', '평생무료',
    '뱀꿈', '물꿈', '똥꿈', '임신꿈', '돌아가신분꿈',
    '치아빠지는꿈', '전애인꿈', '시험꿈', '지각하는꿈',
    '돼지꿈', '호랑이꿈', '용꿈', '불꿈', '집꿈',
    '회원가입없는꿈해몽', '로그인없는꿈해몽'
  ],
  authors: [{ name: 'AI 꿈해몽' }],
  creator: 'AI 꿈해몽',
  publisher: 'AI 꿈해몽',
  
  // Open Graph (소셜 미디어)
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://your-domain.com',
    title: '무료 꿈해몽 - 평생 무료 AI가 해석하는 당신의 꿈',
    description: '완전 무료! 회원가입 없이 뱀꿈, 물꿈, 똥꿈 등 모든 꿈을 AI가 무료로 해석해드립니다. 동양 전통과 서양 심리학을 결합한 정확한 무료 꿈풀이.',
    siteName: '무료 AI 꿈해몽',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'AI 꿈해몽 - 무료 꿈 해석 서비스'
    }]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '무료 꿈해몽 - AI 꿈 해석',
    description: '뱀꿈, 물꿈, 똥꿈 등 모든 꿈을 AI가 무료로 해석해드립니다.',
    images: ['/og-image.png'],
  },
  
  // 모바일 최적화
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  
  // 추가 메타태그
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 검증 (나중에 추가)
  // verification: {
  //   google: 'your-google-verification-code',
  //   naver: 'your-naver-verification-code',
  // },
  
  alternates: {
    canonical: 'https://your-domain.com',
  },
  
  other: {
    'naver-site-verification': 'your-naver-code',
  }
}

// JSON-LD 구조화 데이터
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '무료 AI 꿈해몽',
  description: '완전 무료 인공지능 꿈해석 서비스 - 회원가입 없음',
  url: 'https://your-domain.com',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
    availability: 'https://schema.org/InStock',
    description: '평생 무료 사용'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '15678'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body>
        {/* 별 배경 */}
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
        
        {/* Skip to main content - 접근성 */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          본문으로 건너뛰기
        </a>
        
        {/* 메인 컨텐츠 */}
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        
        {/* 푸터 - SEO 추가 링크 */}
        <footer className="relative z-10 mt-12 py-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto px-4 text-center text-purple-300 text-sm">
            <p className="mb-2">
              © 2026 AI 꿈해몽. 무료 꿈 해석 서비스.
            </p>
            <p className="text-xs">
              본 서비스는 AI 기반 해석으로 참고용이며, 전문적인 심리 상담을 대체하지 않습니다.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
