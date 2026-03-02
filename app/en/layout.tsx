import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Dream Interpreter | What Did Your Dream Mean?',
  description: 'AI-powered dream interpretation. Get instant, personalized analysis of your dream\'s symbols, emotions, and hidden meaning. Free, no sign-up required.',
  keywords: [
    'dream interpreter',
    'dream meaning',
    'dream analysis',
    'what does my dream mean',
    'dream symbols',
    'snake dream meaning',
    'teeth falling out dream',
    'flying dream meaning',
    'free dream interpretation',
  ],
  openGraph: {
    title: 'Free Dream Interpreter | What Did Your Dream Mean?',
    description: 'AI-powered dream interpretation. Instant, personalized analysis. Free.',
    url: 'https://kkumhaemong.xyz/en',
    siteName: 'Dream Interpreter',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kkumhaemong.xyz/en',
    languages: {
      'ko': 'https://kkumhaemong.xyz',
      'en': 'https://kkumhaemong.xyz/en',
    },
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
