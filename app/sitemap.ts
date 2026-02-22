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
    'ex-dream',
    'poop-dream',
    'fire-dream',
    'tiger-dream',
    'baby-dream',
    'wedding-dream',
    'flying-dream',
    'house-dream',
    'thief-dream',
    'car-accident-dream',
    'cat-dream',
    'dog-dream',
    'deceased-dream',
    'rainbow-dream',
    'lottery-dream',
    'hair-dream',
    'blood-dream',
    'earthquake-dream',
    'ocean-dream',
    'moon-dream',
    'gift-dream',
  ]

  const dreamPages = dreamSlugs.map((slug) => ({
    url: `${baseUrl}/dream/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...dreamPages
  ]
}
