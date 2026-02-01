"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations, type Language } from "@/lib/translations"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function TermsPage() {
  const pathname = usePathname();
  const language: Language = pathname?.startsWith('/ukr') ? 'uk' : 'pl';
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = language === 'pl' 
    ? [
        { href: '/#jdg', label: 'Rejestracja JDG' },
        { href: '/#taxation-systems', label: 'Systemy opodatkowania' },
        { href: '/#zus-insurance', label: 'Ubezpieczenia ZUS' },
        { href: '/#how-to-start', label: 'Jak zacząć' },
      ]
    : [
        { href: '/ukr/#jdg', label: 'Реєстрація JDG' },
        { href: '/ukr/#taxation-systems', label: 'Системи оподаткування' },
        { href: '/ukr/#zus-insurance', label: 'Страхування ZUS' },
        { href: '/ukr/#how-to-start', label: 'Як почати' },
      ];

  const content = language === 'pl' ? {
    title: 'Regulamin',
    lastUpdate: 'Ostatnia aktualizacja:',
    section1: {
      title: '1. Postanowienia ogólne',
      p1: 'Niniejszy Regulamin reguluje korzystanie ze strony internetowej freelancer.org.pl oraz wszystkich powiązanych z nią usług.',
      p2: 'Korzystając z naszej strony, akceptujesz te warunki. Jeśli nie zgadzasz się z którąkolwiek częścią tych warunków, prosimy nie korzystać z naszej strony.'
    },
    section2: {
      title: '2. Opis usług',
      p1: 'Nasza strona świadczy usługi informacyjne dotyczące usług księgowych w Polsce, w szczególności:',
      items: [
        'Informacje o rejestracji biznesu w Polsce',
        'Konsultacje dotyczące usług księgowych',
        'Linki do serwisów partnerskich (inFakt)',
        'Informacje kontaktowe do uzyskania dodatkowych konsultacji'
      ],
      important: 'Ważne: Nie świadczymy bezpośrednich usług księgowych. Nasza strona jest zasobem informacyjnym i platformą partnerską.'
    },
    section3: {
      title: '3. Linki partnerskie',
      p: 'Nasza strona zawiera linki partnerskie do serwisu inFakt. Oznacza to, że:',
      items: [
        'Przy przejściu przez nasze linki i rejestracji w inFakt możemy otrzymać prowizję',
        'Ta prowizja nie wpływa na cenę usług dla Ciebie',
        'Wszystkie usługi inFakt są świadczone na ich własnych warunkach',
        'Nie ponosimy odpowiedzialności za jakość usług inFakt',
        'Aby uzyskać usługi, skontaktuj się bezpośrednio z inFakt'
      ]
    },
    section4: {
      title: '4. Strony informacyjne',
      p1: 'freelancer.org.pl to strona informacyjna, która:',
      items: [
        'Dostarcza przydatne informacje o usługach księgowych w Polsce',
        'Działa jako platformy partnerskie inFakt',
        'Nie świadczy bezpośrednich usług',
        'Pomaga użytkownikom dokonać świadomego wyboru'
      ],
      p2: 'Strona ma na celu dostarczenie wysokiej jakości informacji o usługach księgowych i pomoc przedsiębiorcom w znalezieniu odpowiednich rozwiązań.'
    },
    section5: {
      title: '5. Ograniczenie odpowiedzialności',
      p1: 'Informacje na naszej stronie są udostępniane "tak jak są" bez żadnych gwarancji. Nie gwarantujemy:',
      items: [
        'Dokładności lub kompletności informacji',
        'Ciągłej dostępności strony',
        'Brak błędów lub wirusów',
        'Zgodność informacji z Twoimi konkretnymi potrzebami'
      ],
      p2: 'Nie ponosimy odpowiedzialności za jakiekolwiek szkody wynikające z korzystania z naszej strony lub informacji na niej.'
    },
    section6: {
      title: '6. Własność intelektualna',
      p1: 'Cała zawartość naszej strony, w tym tekst, obrazy, logo i projekt, jest własnością naszej strony lub jest używana za zgodą właścicieli.',
      p2: 'Zabronione jest:',
      items: [
        'Kopiowanie lub rozpowszechnianie treści bez zezwolenia',
        'Używanie naszej treści do celów komercyjnych',
        'Modyfikowanie lub tworzenie dzieł pochodnych'
      ]
    },
    section7: {
      title: '7. Korzystanie ze strony',
      p: 'Zobowiązujesz się nie korzystać z naszej strony do:',
      items: [
        'Naruszenia praw lub praw osób trzecich',
        'Rozpowszechniania szkodliwych treści',
        'Spamu lub niechcianych wiadomości',
        'Prób nieautoryzowanego dostępu do systemów',
        'Zakłócania działania strony'
      ]
    },
    section8: {
      title: '8. Zmiany warunków',
      p1: 'Zastrzegamy sobie prawo do zmiany tych warunków w dowolnym momencie. O znaczących zmianach poinformujemy przez naszą stronę.',
      p2: 'Kontynuacja korzystania ze strony po zmianie warunków oznacza Twoją zgodę na nowe warunki.'
    },
    section9: {
      title: '9. Właściwa jurysdykcja',
      p: 'Te warunki są regulowane prawem polskim. Wszelkie spory będą rozstrzygane w sądach polskich.'
    },
    section10: {
      title: '10. Informacje kontaktowe',
      p1: 'Jeśli masz pytania dotyczące tych warunków, skontaktuj się z nami:',
      note: 'Uwaga: Aby uzyskać usługi księgowe, skontaktuj się bezpośrednio z oficjalną stroną'
    },
    footer: {
      quickLinks: 'Szybkie linki',
      contact: 'Kontakt',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
      copyright: 'Freelancer.org.pl. Wszelkie prawa zastrzeżone.'
    }
  } : {
    title: 'Умови використання',
    lastUpdate: 'Останнє оновлення:',
    section1: {
      title: '1. Загальні положення',
      p1: 'Ці Умови використання регулюють використання веб-сайту freelancer.org.pl та всіх пов\'язаних з ним послуг.',
      p2: 'Використовуючи наш сайт, ви погоджуєтеся з цими умовами. Якщо ви не згодні з будь-якою частиною цих умов, будь ласка, не використовуйте наш сайт.'
    },
    section2: {
      title: '2. Опис послуг',
      p1: 'Наш сайт надає інформаційні послуги щодо бухгалтерських послуг у Польщі, зокрема:',
      items: [
        'Інформація про реєстрацію бізнесу в Польщі',
        'Консультації щодо бухгалтерських послуг',
        'Посилання на партнерські сервіси (inFakt)',
        'Контактна інформація для отримання додаткових консультацій'
      ],
      important: 'Важливо: Ми не надаємо безпосередні бухгалтерські послуги. Наш сайт є інформаційним ресурсом та партнерським майданчиком.'
    },
    section3: {
      title: '3. Партнерські посилання',
      p: 'Наш сайт містить партнерські посилання на сервіс inFakt. Це означає, що:',
      items: [
        'При переході за нашими посиланнями та реєстрації в inFakt ми можемо отримати комісію',
        'Ця комісія не впливає на ціну послуг для вас',
        'Всі послуги inFakt надаються на їх власних умовах',
        'Ми не несемо відповідальності за якість послуг inFakt',
        'Для отримання послуг звертайтеся безпосередньо до inFakt'
      ]
    },
    section4: {
      title: '4. Інформаційні сайти',
      p1: 'freelancer.org.pl - це інформаційний сайт, який:',
      items: [
        'Надають корисну інформацію про бухгалтерські послуги у Польщі',
        'Працюють як партнерські майданчики inFakt',
        'Не надають безпосередніх послуг',
        'Допомагають користувачам зробити інформований вибір'
      ],
      p2: 'Сайт має мету надати якісну інформацію про бухгалтерські послуги та допомогти підприємцям знайти відповідні рішення.'
    },
    section5: {
      title: '5. Обмеження відповідальності',
      p1: 'Інформація на нашому сайті надається "як є" без будь-яких гарантій. Ми не гарантуємо:',
      items: [
        'Точність або повноту інформації',
        'Безперервну доступність сайту',
        'Відсутність помилок або вірусів',
        'Відповідність інформації вашим конкретним потребам'
      ],
      p2: 'Ми не несемо відповідальності за будь-які збитки, що виникають внаслідок використання нашого сайту або інформації на ньому.'
    },
    section6: {
      title: '6. Інтелектуальна власність',
      p1: 'Весь контент на нашому сайті, включаючи текст, зображення, логотипи та дизайн, є власністю нашого сайту або використовується з дозволу власників.',
      p2: 'Забороняється:',
      items: [
        'Копіювати або розповсюджувати контент без дозволу',
        'Використовувати наш контент для комерційних цілей',
        'Модифікувати або створювати похідні роботи'
      ]
    },
    section7: {
      title: '7. Використання сайту',
      p: 'Ви зобов\'язуєтеся не використовувати наш сайт для:',
      items: [
        'Порушення законів або прав третіх осіб',
        'Розповсюдження шкідливого контенту',
        'Спаму або небажаних повідомлень',
        'Спроби несанкціонованого доступу до систем',
        'Порушення роботи сайту'
      ]
    },
    section8: {
      title: '8. Зміни умов',
      p1: 'Ми залишаємо за собою право змінювати ці умови в будь-який час. Про значні зміни ми повідомимо через наш сайт.',
      p2: 'Продовження використання сайту після зміни умов означає вашу згоду з новими умовами.'
    },
    section9: {
      title: '9. Примірна юрисдикція',
      p: 'Ці умови регулюються законодавством Польщі. Будь-які спори будуть вирішуватися в судах Польщі.'
    },
    section10: {
      title: '10. Контактна інформація',
      p1: 'Якщо у вас є питання щодо цих умов, зв\'яжіться з нами:',
      note: 'Примітка: Для отримання бухгалтерських послуг звертайтеся безпосередньо на офіційний сайт'
    },
    footer: {
      quickLinks: 'Швидкі посилання',
      contact: 'Контакти',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання',
      copyright: 'Freelancer.org.pl. Всі права захищені.'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-6 w-6 md:h-8 md:w-8 text-blue-600"
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
              href={language === 'pl' ? '/' : '/ukr/'}
              className="text-base md:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Freelancer.org.pl
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher currentLanguage={language} />
          </nav>
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher currentLanguage={language} />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">{content.title}</h1>
              <p className="text-base md:text-xl text-gray-600 px-4">
                {content.lastUpdate} {new Date().toLocaleDateString(language === 'pl' ? 'pl-PL' : 'uk-UA')}
              </p>
            </div>

            <Card className="bg-white shadow-lg">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section1.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section1.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section1.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section2.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section2.p1}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section2.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm md:text-base">
                  <strong>{language === 'pl' ? 'Ważne:' : 'Важливо:'}</strong> {content.section2.important}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section3.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section3.p}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section3.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section4.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  <strong>freelancer.org.pl</strong> - {content.section4.p1}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section4.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm md:text-base">
                  {content.section4.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section5.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section5.p1}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section5.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm md:text-base">
                  {content.section5.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section6.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section6.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section6.p2}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section6.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section7.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">{content.section7.p}</p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section7.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section8.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section8.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section8.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section9.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section9.p}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section10.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">{content.section10.p1}</p>
                <div className="space-y-2">
                  <p className="text-sm md:text-base"><strong>Email:</strong> info@freelancer.org.pl</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>{language === 'pl' ? 'Uwaga:' : 'Примітка:'}</strong> {content.section10.note} <a href="https://www.infakt.pl/" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 underline">https://www.infakt.pl/</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <rect x="7" y="7" width="10" height="3"/>
                  <rect x="7" y="14" width="3" height="3"/>
                  <rect x="14" y="14" width="3" height="3"/>
                </svg>
                <a href="https://freelancer.org.pl/" className="text-lg font-semibold hover:text-blue-400 transition-colors">Freelancer.org.pl</a>
              </div>
              <p className="text-gray-400 text-xs md:text-sm max-w-2xl">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><Link href={language === 'pl' ? '/contact/' : '/en/contact/'} className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{t.footer.contact}</Link></li>
                <li><Link href={language === 'pl' ? '/privacy-policy/' : '/en/privacy-policy/'} className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{content.footer.privacy}</Link></li>
                <li><Link href={language === 'pl' ? '/terms/' : '/en/terms/'} className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{content.footer.terms}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="text-sm md:text-base">Email: info@freelancer.org.pl</li>
                <li className="text-sm md:text-base">{t.footer.addressLabel}: {t.footer.address}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
