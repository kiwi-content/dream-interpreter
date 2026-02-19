import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://dream-free.vercel.app'),

  title: {
    default: '꿈해몽 AI | 꿈 의미 무료 해석 서비스',
    template: '%s | Dream'
  },

  description:
    '꿈해몽 AI 서비스. 뱀꿈, 이빨빠지는꿈, 쫓기는꿈 등 상황별 꿈 의미를 무료로 해석해드립니다.',

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
    title: '꿈해몽 AI | Dream',
    description:
      '상황별 꿈해몽을 무료로 확인하세요.',
    url: 'https://dream-free.vercel.app',
    siteName: 'Dream',
    locale: 'ko_KR',
    type: 'website'
  },

  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
