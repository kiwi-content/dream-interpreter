import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dream-free.vercel.app'

  const dreamSlugs = [
    'snake-dream',
    'teeth-dream',
    'chasing-dream',
    'money-dream',
    'pregnancy-dream',
    'water-dream',
    'death-dream',
    'exam-dream',
    'ghost-dream',
    'ex-dream'
  ]

  const dreamPages = dreamSlugs.map((slug) => ({
    url: `${baseUrl}/dream/${slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...dreamPages
  ]
}
