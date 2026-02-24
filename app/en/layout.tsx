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
    url: 'https://dream-free.vercel.app/en',
    siteName: 'Dream Interpreter',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dream-free.vercel.app/en',
    languages: {
      'ko': 'https://dream-free.vercel.app',
      'en': 'https://dream-free.vercel.app/en',
    },
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
