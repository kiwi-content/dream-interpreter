import './globals.css'
import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kkumhaemong.xyz'),

  title: {
    default: '뚱냥이의 신비로운 꿈풀이 가게 | 무료 꿈해몽',
    template: '%s | 뚱냥이의 꿈풀이 가게'
  },

  description:
    '뚱냥이가 너의 꿈을 읽어준다냥. 뱀꿈, 이빨 빠지는 꿈, 쫓기는 꿈 — 무료로 3초면 해몽 완료.',

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
    title: '뚱냥이의 신비로운 꿈풀이 가게 | 무료 꿈해몽',
    description:
      '뚱냥이가 너의 꿈을 읽어준다냥. 뱀꿈, 이빨 빠지는 꿈, 쫓기는 꿈 — 무료로 3초면 해몽 완료.',
    url: 'https://www.kkumhaemong.xyz',
    siteName: '뚱냥이의 신비로운 꿈풀이 가게',
    locale: 'ko_KR',
    type: 'website'
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png',
  },

  alternates: {
    canonical: 'https://www.kkumhaemong.xyz',
    languages: {
      'ko': 'https://www.kkumhaemong.xyz',
      'en': 'https://www.kkumhaemong.xyz/en',
    },
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
  name: '뚱냥이의 신비로운 꿈풀이 가게',
  description: '뚱냥이가 너의 꿈을 읽어준다냥. 무료로 3초면 해몽 완료.',
  url: 'https://www.kkumhaemong.xyz',
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
  const lang = headers().get('x-lang') || 'ko'
  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="naver-site-verification" content="905a53fdac6e821bb53a7ebad7a8be28028e8eba" />
      </head>
      <body>
        {/* 접근성 스킵 링크 */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          본문으로 건너뛰기
        </a>

        {/* 메인 컨텐츠 */}
        <main id="main-content">
          {children}
        </main>

        {/* 카카오 애드핏 광고 */}
        <div className="mt-12 mb-8">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-3">
              <p className="text-stone-300 text-xs">광고</p>
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
        <footer className="mt-20 py-12 border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-stone-400 text-sm mb-3">
              너의 이야기를 들어주는 곳이다냥. 언제나 여기 있다냥.
            </p>
            <p className="text-stone-300 text-xs">
              이 해석은 참고용이다냥. 전문 상담을 대체하지 않는다냥.
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
