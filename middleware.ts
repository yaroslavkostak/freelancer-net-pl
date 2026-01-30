import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl
  
  // Визначення мови з URL
  const localeMatch = pathname.match(/^\/(ukr)(\/|$)/)
  const locale = localeMatch ? localeMatch[1] : 'pl'

  // Редірект з www на без www
  if (host.startsWith('www.')) {
    const newHost = host.replace('www.', '')
    const url = request.nextUrl.clone()
    url.host = newHost
    return NextResponse.redirect(url, 301)
  }

  // Редірект з HTTP на HTTPS (тільки для продакшену)
  if (request.headers.get('x-forwarded-proto') === 'http' && !host.includes('localhost') && !host.includes('127.0.0.1')) {
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

  // Додавання закритого слеша до всіх URL (крім файлів та кореневого)
  if (pathname !== '/' && !pathname.endsWith('/') && !pathname.includes('.')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname + '/'
    return NextResponse.redirect(url, 301)
  }

  // Редірект зі старих файлів на нові сторінки
  const oldToNewPaths: Record<string, string> = {
    '/contact.tsx': '/contact/',
    '/privacy-policy.tsx': '/privacy-policy/',
    '/terms.tsx': '/terms/',
    '/contact.html': '/contact/',
    '/privacy-policy.html': '/privacy-policy/',
    '/terms.html': '/terms/',
    '/index.html': '/',
    '/index.php': '/',
    '/kontakt.html': '/contact/',
    '/kontakt.php': '/contact/',
    '/polityka.html': '/privacy-policy/',
    '/polityka.php': '/privacy-policy/',
    '/umovy.html': '/terms/',
    '/umovy.php': '/terms/',
    '/regulamin.html': '/terms/',
    '/regulamin.php': '/terms/',
    '/o-nas.html': '/',
    '/o-nas.php': '/',
    '/about.html': '/',
    '/about.php': '/',
    '/uslugi.html': '/',
    '/uslugi.php': '/',
    '/services.html': '/',
    '/services.php': '/',
    '/cennik.html': '/',
    '/cennik.php': '/',
    '/pricing.html': '/',
    '/pricing.php': '/',
    '/kalkulator.html': '/tax-calculator/',
    '/kalkulator.php': '/tax-calculator/',
    '/calculator.html': '/tax-calculator/',
    '/calculator.php': '/tax-calculator/',
    '/podatki.html': '/tax-calculator/',
    '/podatki.php': '/tax-calculator/',
    '/taxes.html': '/tax-calculator/',
    '/taxes.php': '/tax-calculator/',
  }

  if (oldToNewPaths[pathname]) {
    return NextResponse.redirect(new URL(oldToNewPaths[pathname], request.url), 301)
  }

  // Редірект зі старих доменів
  if (host === 'buh-online.pl' || host === 'www.buh-online.pl' || host === 'freelancer.net.pl' || host === 'www.freelancer.net.pl') {
    const url = request.nextUrl.clone()
    url.host = 'freelancer.org.pl'
    return NextResponse.redirect(url, 301)
  }

  // Редірект зі старих slug на нові
  const slugRedirects: Record<string, string> = {
    '/kontakty': '/contact/',
    '/polityka-konfidencjalnosti': '/privacy-policy/',
    '/umovy-vykorystannya': '/terms/',
    '/terms-of-use': '/terms/',
    '/privacy': '/privacy-policy/',
    '/contacts': '/contact/',
    '/kontakt': '/contact/',
    '/polityka': '/privacy-policy/',
    '/umovy': '/terms/',
    '/regulamin': '/terms/',
    '/o-nas': '/',
    '/about': '/',
    '/uslugi': '/',
    '/services': '/',
    '/cennik': '/',
    '/pricing': '/',
    '/kalkulator': '/tax-calculator/',
    '/calculator': '/tax-calculator/',
    '/podatki': '/tax-calculator/',
    '/taxes': '/tax-calculator/',
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