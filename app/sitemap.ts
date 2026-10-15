import type { MetadataRoute } from 'next'

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ajaxglobal.com').replace(/\/$/, '')

// Set each date to when that page's content last really changed.
// `new Date()` makes every page look modified on every build, and Google
// learns to ignore lastModified when it is always "now".
const routes: {
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}[] = [
  { path: '',                  lastModified: '2026-10-15', changeFrequency: 'weekly',  priority: 1 },
  { path: '/about',            lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services',         lastModified: '2026-10-15', changeFrequency: 'weekly',  priority: 0.9 },
  { path: '/services-detailed', lastModified: '2026-10-15', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/hos',              lastModified: '2026-10-15', changeFrequency: 'weekly',  priority: 0.9 },
  { path: '/intellidesq',      lastModified: '2026-10-15', changeFrequency: 'weekly',  priority: 0.9 },
  { path: '/contact',          lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/legal',            lastModified: '2026-10-15', changeFrequency: 'yearly',  priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}