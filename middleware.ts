import { NextRequest, NextResponse } from 'next/server'

const PRIMARY_HOST = 'www.kkumhaemong.xyz'

const EN_REDIRECT_HOSTS = (
  process.env.EN_REDIRECT_HOSTS ??
  'dream-free-en.vercel.app,dream-interpreter-en.vercel.app,dream-interpreter-en.com,www.dream-interpreter-en.com'
)
  .split(',')
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean)

const normalizeHost = (rawHost: string) =>
  rawHost
    .split(',')[0]
    ?.trim()
    .toLowerCase()
    .split(':')[0]

const isEnglishRedirectHost = (host: string) =>
  EN_REDIRECT_HOSTS.includes(host)

export function middleware(request: NextRequest) {
  // Never apply domain redirects during local development.
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  const hostHeader =
    request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? ''
  const host = normalizeHost(hostHeader)

  // Redirect English-specific hosts → kkumhaemong.xyz/en
  if (isEnglishRedirectHost(host)) {
    const pathname = request.nextUrl.pathname
    const targetPath =
      pathname === '/' ? '/en' : pathname.startsWith('/en') ? pathname : `/en${pathname}`
    const redirectUrl = new URL(`https://${PRIMARY_HOST}${targetPath}${request.nextUrl.search}`)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Redirect non-primary hosts (e.g. dream-free.vercel.app) → kkumhaemong.xyz
  if (host && host !== PRIMARY_HOST && host !== PRIMARY_HOST.replace('www.', '')) {
    const redirectUrl = new URL(`https://${PRIMARY_HOST}${request.nextUrl.pathname}${request.nextUrl.search}`)
    return NextResponse.redirect(redirectUrl, 301)
  }

  const response = NextResponse.next()
  response.headers.set('x-lang', request.nextUrl.pathname.startsWith('/en') ? 'en' : 'ko')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}
