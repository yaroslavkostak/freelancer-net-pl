/** @type {import('next').NextConfig} */
const nextConfig = {
  // Налаштування для розгортання на LiteSpeed сервері
  output: 'standalone',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'freelancer.org.pl', pathname: '/**' },
    ],
  },
  // Налаштування для статичного експорту (GitHub Pages)
  // Розкоментуйте наступні рядки для GitHub Pages:
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'out',

  // Налаштування редіректів
  async redirects() {
    return [
      // Редірект зі старих URL на нові
      {
        source: '/contact.tsx',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/privacy-policy.tsx',
        destination: '/privacy-policy/',
        permanent: true,
      },
      {
        source: '/terms.tsx',
        destination: '/terms/',
        permanent: true,
      },
      // Редірект зі старих HTML файлів
      {
        source: '/contact.html',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy/',
        permanent: true,
      },
      {
        source: '/terms.html',
        destination: '/terms/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // Редірект зі старих slug
      {
        source: '/kontakty',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/polityka-konfidencjalnosti',
        destination: '/privacy-policy/',
        permanent: true,
      },
      {
        source: '/umovy-vykorystannya',
        destination: '/terms/',
        permanent: true,
      },
      {
        source: '/terms-of-use',
        destination: '/terms/',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy/',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/contact/',
        permanent: true,
      },
      // Редірект зі старих доменів на freelancer.org.pl
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'buh-online.pl',
          },
        ],
        destination: 'https://freelancer.org.pl/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'freelancer.net.pl',
          },
        ],
        destination: 'https://freelancer.org.pl/:path*',
        permanent: true,
      },
    ]
  },
  // Налаштування заголовків
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  }
}

export default nextConfig
