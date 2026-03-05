import { NextRequest, NextResponse } from 'next/server'

const PRIMARY_HOST = 'kkumhaemong.xyz'

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

  if (!host || !isEnglishRedirectHost(host)) {
    const response = NextResponse.next()
    response.headers.set('x-lang', request.nextUrl.pathname.startsWith('/en') ? 'en' : 'ko')
    return response
  }

  const pathname = request.nextUrl.pathname
  const targetPath =
    pathname === '/' ? '/en' : pathname.startsWith('/en') ? pathname : `/en${pathname}`

  const redirectUrl = new URL(`https://${PRIMARY_HOST}${targetPath}${request.nextUrl.search}`)
  return NextResponse.redirect(redirectUrl, 301)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}
