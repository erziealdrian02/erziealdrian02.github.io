import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://erziealdrian02.github.io/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        'https://erziealdrian02.github.io/og-image.png',
        'https://erziealdrian02.github.io/images/profiles/me_ilustration.png',
      ],
    },
  ];
}
