import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl

  // Редірект з www на без www
  if (host.startsWith('www.')) {
    const newHost = host.replace('www.', '')
    const url = request.nextUrl.clone()
    url.host = newHost
    return NextResponse.redirect(url, 301)
  }

  // Редірект з HTTP на HTTPS
  if (request.headers.get('x-forwarded-proto') === 'http') {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  // Нормалізація URL - перетворення на нижній регістр
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.toLowerCase()
    return NextResponse.redirect(url, 301)
  }

  // Видалення зайвих слешів (крім кореневого)
  if (pathname !== '/' && pathname.endsWith('/') && pathname.length > 1) {
    const cleanPath = pathname.replace(/\/+$/, '')
    const url = request.nextUrl.clone()
    url.pathname = cleanPath
    return NextResponse.redirect(url, 301)
  }

  // Редірект зі старих файлів на нові сторінки
  const oldToNewPaths: Record<string, string> = {
    '/contact.tsx': '/contact',
    '/privacy-policy.tsx': '/privacy-policy',
    '/terms.tsx': '/terms',
    '/contact.html': '/contact',
    '/privacy-policy.html': '/privacy-policy',
    '/terms.html': '/terms',
    '/index.html': '/',
    '/index.php': '/',
  }

  if (oldToNewPaths[pathname]) {
    return NextResponse.redirect(new URL(oldToNewPaths[pathname], request.url), 301)
  }

  // Редірект зі старих доменів
  if (host === 'buh-online.pl' || host === 'www.buh-online.pl') {
    const url = request.nextUrl.clone()
    url.host = 'freelancer.net.pl'
    return NextResponse.redirect(url, 301)
  }

  // Редірект зі старих slug на нові
  const slugRedirects: Record<string, string> = {
    '/kontakty': '/contact',
    '/polityka-konfidencjalnosti': '/privacy-policy',
    '/umovy-vykorystannya': '/terms',
    '/terms-of-use': '/terms',
    '/privacy': '/privacy-policy',
    '/contacts': '/contact',
  }

  if (slugRedirects[pathname]) {
    return NextResponse.redirect(new URL(slugRedirects[pathname], request.url), 301)
  }

  // Видалення зайвих параметрів (utm, fbclid, тощо)
  const url = request.nextUrl.clone()
  const searchParams = url.searchParams
  const cleanParams = new URLSearchParams()
  
  // Зберігаємо тільки важливі параметри
  for (const [key, value] of searchParams.entries()) {
    if (!['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid'].includes(key)) {
      cleanParams.set(key, value)
    }
  }
  
  if (searchParams.toString() !== cleanParams.toString()) {
    url.search = cleanParams.toString()
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 