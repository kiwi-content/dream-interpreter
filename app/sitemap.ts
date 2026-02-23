import fs from 'node:fs'
import path from 'node:path'
import { MetadataRoute } from 'next'

const BASE_URL = 'https://dream-free.vercel.app'
const APP_DIR = path.join(process.cwd(), 'app')
const DREAM_PAGE_PATH = path.join(APP_DIR, 'dream', '[slug]', 'page.tsx')

const getStaticAppRoutes = (): string[] => {
  const routes: string[] = []
  const ignoredDirs = new Set(['api', 'dream'])

  for (const entry of fs.readdirSync(APP_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory() || ignoredDirs.has(entry.name)) {
      continue
    }

    const pagePath = path.join(APP_DIR, entry.name, 'page.tsx')
    if (fs.existsSync(pagePath)) {
      routes.push(`/${entry.name}`)
    }
  }

  return routes
}

const getDreamSlugs = (): string[] => {
  const source = fs.readFileSync(DREAM_PAGE_PATH, 'utf-8')
  const slugPattern = /slug:\s*'([^']+)'/g
  const slugs = new Set<string>()
  let match: RegExpExecArray | null = null

  while ((match = slugPattern.exec(source)) !== null) {
    const slug = match[1]?.trim()
    if (slug) {
      slugs.add(slug)
    }
  }

  return Array.from(slugs)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = getStaticAppRoutes().map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const dreamPages = getDreamSlugs().map((slug) => ({
    url: `${BASE_URL}/dream/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...staticPages,
    ...dreamPages,
  ]
}
