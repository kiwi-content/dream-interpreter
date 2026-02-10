import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

// Noto Sans KR 폰트 설정
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
})

// Viewport 설정 분리 (Next.js 14+ 필수)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dream-free.vercel.app'),
  title: {
    default: '무료 꿈해몽 AI - 뱀꿈 물꿈 똥꿈 무료 풀이',
    template: '%s | 무료 AI 꿈해몽'
  },
  description: '완전 무료! 회원가입 없이 AI가 즉시 해석하는 꿈해몽. 뱀꿈, 물꿈, 똥꿈, 임신꿈 등 모든 꿈을 동양 전통과 서양 심리학으로 무료 분석합니다.',
  keywords: [
    '무료꿈해몽', '꿈해몽무료', '무료꿈풀이', '꿈해몽', 'AI꿈해몽',
    '뱀꿈', '물꿈', '똥꿈', '임신꿈', '돌아가신분꿈',
    '치아빠지는꿈', '전애인꿈', '회원가입없는꿈해몽'
  ],
  
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://dream-free.vercel.app',
    title: '무료 꿈해몽 AI - 당신의 꿈을 즉시 무료로 해석',
    description: '완전 무료! 회원가입 없이 뱀꿈, 물꿈, 똥꿈 등 모든 꿈을 AI가 무료로 해석해드립니다.',
    siteName: '무료 AI 꿈해몽',
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  // 검색엔진 인증
  verification: {
    google: 'qRhK_TW2QITIO35Vcuf1N_jHEcgQBd9cGtk42YXvdNo',
    other: {
      naver: '905a53fdac6e821bb53a7ebad7a8be28028e8eba',
    }
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '무료 AI 꿈해몽',
  description: '완전 무료 인공지능 꿈해석 서비스',
  url: 'https://dream-free.vercel.app',
  applicationCategory: 'LifestyleApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <head>
        <meta name="naver-site-verification" content="905a53fdac6e821bb53a7ebad7a8be28028e8eba" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={notoSansKr.className}>
        {/* 배경 플로팅 셰이프 */}
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="floating-shape shape-3" aria-hidden="true" />
        
        {/* 반짝이는 별들 */}
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
        
        {/* 접근성 스킵 링크 */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          본문으로 건너뛰기
        </a>
        
        {/* 메인 컨텐츠 */}
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        
        {/* 카카오 애드핏 광고 */}
        <div className="relative z-10 mt-12 mb-8">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-3">
              <p className="text-white/40 text-xs">광고</p>
            </div>
            <div className="flex justify-center">
              <ins 
                className="kakao_ad_area" 
                style={{ display: 'none' }}
                data-ad-unit="DAN-tkfllXc9QoFQY7oJ"
                data-ad-width="320"
                data-ad-height="100"
              />
            </div>
          </div>
        </div>
        
        {/* 푸터 */}
        <footer className="relative z-10 mt-20 py-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-white/60 text-sm mb-3">
              당신의 이야기를 들어주는 곳. 언제나 여기 있습니다.
            </p>
            <p className="text-white/40 text-xs">
              이 해석은 참고용이며, 전문 상담을 대체하지 않아요.
            </p>
          </div>
        </footer>
        
        {/* 카카오 애드핏 스크립트 */}
        <script 
          type="text/javascript" 
          src="//t1.daumcdn.net/kas/static/ba.min.js" 
          async
        />
      </body>
    </html>
  )
}
