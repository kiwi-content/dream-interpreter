import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://dream-free.vercel.app'),

  title: {
    default: '무료 꿈해몽 | 어젯밤 꿈, 무슨 뜻일까?',
    template: '%s | Dream'
  },

  description:
    '꿈해몽 서비스. 뱀꿈, 이빨빠지는꿈, 쫓기는꿈 등 상황별 꿈 의미를 무료로 해석해드립니다.',

  keywords: [
    '꿈해몽',
    '꿈 의미',
    '뱀꿈',
    '이빨빠지는꿈',
    '쫓기는꿈',
    '임신꿈',
    '돈꿈',
    '무료 꿈해몽'
  ],

  openGraph: {
    title: '무료 꿈해몽 | 어젯밤 꿈, 무슨 뜻일까?',
    description:
      '상황별 꿈해몽을 무료로 확인하세요.',
    url: 'https://dream-free.vercel.app',
    siteName: 'Dream',
    locale: 'ko_KR',
    type: 'website'
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: 'qRhK_TW2QITIO35Vcuf1N_jHEcgQBd9cGtk42YXvdNo',
    other: {
      naver: '905a53fdac6e821bb53a7ebad7a8be28028e8eba',
    }
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '무료 꿈해몽',
  description: '완전 무료 꿈해석 서비스',
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
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="naver-site-verification" content="905a53fdac6e821bb53a7ebad7a8be28028e8eba" />
      </head>
      <body>
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

        <script 
          type="text/javascript" 
          src="//t1.daumcdn.net/kas/static/ba.min.js" 
          async
        />
      </body>
    </html>
  )
}
