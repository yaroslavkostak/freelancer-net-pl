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

  // Налаштування редіректів (працюють у dev і на будь-якому хостингу: Vercel, Netlify, next start)
  async redirects() {
    return [
      // --- Субдомени → мовні версії (uk./ua. → українська, en. → англійська) ---
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'uk.freelancer.org.pl' }],
        destination: 'https://freelancer.org.pl/ukr/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ua.freelancer.org.pl' }],
        destination: 'https://freelancer.org.pl/ukr/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'en.freelancer.org.pl' }],
        destination: 'https://freelancer.org.pl/en/',
        permanent: true,
      },
      // --- Шляхи «мовна версія» → /ukr/, /en/, /de/ ---
      { source: '/ua', destination: '/ukr/', permanent: true },
      { source: '/ua/', destination: '/ukr/', permanent: true },
      { source: '/ukraine', destination: '/ukr/', permanent: true },
      { source: '/ukraine/', destination: '/ukr/', permanent: true },
      { source: '/ukrainian', destination: '/ukr/', permanent: true },
      { source: '/ukrainian/', destination: '/ukr/', permanent: true },
      { source: '/english', destination: '/en/', permanent: true },
      { source: '/english/', destination: '/en/', permanent: true },
      { source: '/german', destination: '/de/', permanent: true },
      { source: '/german/', destination: '/de/', permanent: true },
      { source: '/deutsch', destination: '/de/', permanent: true },
      { source: '/deutsch/', destination: '/de/', permanent: true },
      // --- Старий PHP/форум (беклінки) → головна ---
      { source: '/profile.php', destination: '/', permanent: true },
      { source: '/topic.php', destination: '/', permanent: true },
      { source: '/index.php/feed', destination: '/', permanent: true },
      { source: '/index.php/feed/', destination: '/', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/', destination: '/', permanent: true },
      // --- Редірект зі старих URL на нові ---
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
      {
        source: '/kontakt',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/polityka',
        destination: '/privacy-policy/',
        permanent: true,
      },
      {
        source: '/regulamin',
        destination: '/terms/',
        permanent: true,
      },
      {
        source: '/o-nas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/uslugi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cennik',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/',
        permanent: true,
      },
      {
        source: '/kalkulator',
        destination: '/',
        permanent: true,
      },
      {
        source: '/kalkulator/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/calculator',
        destination: '/',
        permanent: true,
      },
      {
        source: '/calculator/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/podatki',
        destination: '/',
        permanent: true,
      },
      {
        source: '/podatki/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/taxes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/taxes/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tax-calculator',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tax-calculator/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      // UKR/DE технічні сторінки → англійські (Kontakt, Privacy, Terms тільки PL + EN)
      { source: '/ukr/contact/', destination: '/en/contact/', permanent: true },
      { source: '/ukr/privacy-policy/', destination: '/en/privacy-policy/', permanent: true },
      { source: '/ukr/terms/', destination: '/en/terms/', permanent: true },
      { source: '/de/contact/', destination: '/en/contact/', permanent: true },
      { source: '/de/privacy-policy/', destination: '/en/privacy-policy/', permanent: true },
      { source: '/de/terms/', destination: '/en/terms/', permanent: true },
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
