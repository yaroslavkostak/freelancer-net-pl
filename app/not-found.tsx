'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LanguageSwitcher } from '@/components/language-switcher'
import { translations, type Language } from '@/lib/translations'
import { DynamicYear } from '@/components/dynamic-year'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname();
  const language: Language = pathname?.startsWith('/en') ? 'en' : pathname?.startsWith('/ukr') ? 'uk' : 'pl';
  const t = translations[language];

  const navLinks = language === 'pl'
    ? [
        { href: '/#jdg', label: 'Rejestracja JDG' },
        { href: '/#taxation-systems', label: 'Systemy opodatkowania' },
        { href: '/#zus-insurance', label: 'Ubezpieczenia ZUS' },
        { href: '/#how-to-start', label: 'Jak zacząć' },
      ]
    : language === 'en'
    ? [
        { href: '/en/#jdg', label: 'Register JDG' },
        { href: '/en/#taxation-systems', label: 'Tax systems' },
        { href: '/en/#zus-insurance', label: 'ZUS insurance' },
        { href: '/en/#how-to-start', label: 'How to start' },
      ]
    : [
        { href: '/ukr/#jdg', label: 'Реєстрація JDG' },
        { href: '/ukr/#taxation-systems', label: 'Системи оподаткування' },
        { href: '/ukr/#zus-insurance', label: 'Страхування ZUS' },
        { href: '/ukr/#how-to-start', label: 'Як почати' },
      ];

  const content = language === 'pl'
    ? {
        title: 'Strona nie znaleziona',
        message: 'Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.',
        suggestion: 'Możesz szukać informacji o usługach księgowych w Polsce? Wróć na stronę główną, aby znaleźć potrzebne informacje.',
        backHome: 'Wróć na stronę główną',
        contact: 'Skontaktuj się z nami',
      }
    : language === 'en'
    ? {
        title: 'Page not found',
        message: 'Sorry, the page you are looking for does not exist or has been moved.',
        suggestion: 'Looking for information on accounting services in Poland? Go back to the home page to find what you need.',
        backHome: 'Back to home',
        contact: 'Contact us',
      }
    : {
        title: 'Сторінку не знайдено',
        message: 'Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.',
        suggestion: 'Можливо, ви шукали інформацію про бухгалтерські послуги у Польщі? Поверніться на головну сторінку, щоб знайти потрібну інформацію.',
        backHome: 'Повернутися на головну',
        contact: "Зв'язатися з нами",
      };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18l-7.5-4.5v-6.75L15.75 6v9.75Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6v9.75l-7.5-4.5v-6.75L15.75 6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6V6Z" />
            </svg>
            <Link
              href={language === 'pl' ? '/' : language === 'en' ? '/en/' : language === 'de' ? '/de/' : '/ukr/'}
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Freelancer.org.pl
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher currentLanguage={language} />
          </nav>
          <div className="md:hidden">
            <LanguageSwitcher currentLanguage={language} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                  {content.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-xl text-gray-600">
                  {content.message}
                </p>
                <p className="text-gray-600">
                  {content.suggestion}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href={language === 'pl' ? '/' : language === 'en' ? '/en/' : language === 'de' ? '/de/' : '/ukr/'}>
                      {content.backHome}
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg">
                    <Link href={language === 'pl' ? '/contact/' : '/en/contact/'}>
                      {content.contact}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18l-7.5-4.5v-6.75L15.75 6v9.75Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6v9.75l-7.5-4.5v-6.75L15.75 6Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6V6Z" />
                </svg>
                <Link
                  href={language === 'pl' ? '/' : language === 'en' ? '/en/' : language === 'de' ? '/de/' : '/ukr/'}
                  className="text-lg font-semibold hover:text-blue-400 transition-colors"
                >
                  Freelancer.org.pl
                </Link>
              </div>
              <p className="text-gray-400 text-sm max-w-2xl">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={language === 'pl' ? '/contact/' : '/en/contact/'}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.contact}
                  </Link>
                </li>
                <li>
                  <Link
                    href={language === 'pl' ? '/privacy-policy/' : '/en/privacy-policy/'}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'pl' ? 'Polityka prywatności' : 'Privacy policy'}
                  </Link>
                </li>
                <li>
                  <Link
                    href={language === 'pl' ? '/terms/' : '/en/terms/'}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'pl' ? 'Regulamin' : 'Terms of use'}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@freelancer.org.pl</li>
                <li>{t.footer.addressLabel}: {t.footer.address}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {DynamicYear()} {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 