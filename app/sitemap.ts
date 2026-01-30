import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://phobeus.com.tr',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
