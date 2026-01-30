"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations, type Language } from "@/lib/translations"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function PrivacyPolicyPage() {
  const language: Language = 'uk';
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '/ukr/#jdg', label: 'Реєстрація JDG' },
    { href: '/ukr/#taxation-systems', label: 'Системи оподаткування' },
    { href: '/ukr/#zus-insurance', label: 'Страхування ZUS' },
    { href: '/ukr/#how-to-start', label: 'Як почати' },
  ];

  const content = {
    title: 'Політика конфіденційності',
    lastUpdate: 'Останнє оновлення:',
    section1: {
      title: '1. Загальна інформація',
      p1: 'Ця Політика конфіденційності описує, як ми збираємо, використовуємо та захищаємо вашу особисту інформацію при використанні нашого веб-сайту freelancer.org.pl.',
      p2: 'Ми зобов\'язуємося захищати вашу конфіденційність та забезпечувати безпечне використання нашого сайту відповідно до Регламенту ЄС 2016/679 (GDPR) та інших застосовних законів про захист даних.'
    },
    section2: {
      title: '2. Про наш сайт',
      p1: 'freelancer.org.pl - це інформаційний сайт, створений для надання корисної інформації про бухгалтерські послуги у Польщі. Наш сайт є партнерським майданчиком сервісу inFakt.',
      p2: 'Сайт надає детальну інформацію про послуги inFakt, включаючи:',
      items: [
        'Детальний опис послуг inFakt',
        'Інструкції з реєстрації та використання',
        'Відгуки користувачів',
        'Порівняння з іншими сервісами',
        'Корисні статті та поради'
      ],
      p3: 'Сайт працює як інформаційний ресурс та партнерський майданчик inFakt, надаючи користувачам зручний доступ до інформації про бухгалтерські послуги у Польщі.'
    },
    section3: {
      title: '3. Яку інформацію ми збираємо',
      h31: '3.1 Інформація, яку ви надаєте нам:',
      items1: [
        'Ім\'я та контактна інформація (email, телефон)',
        'Інформація про ваш бізнес та запити',
        'Повідомлення, які ви надсилаєте через контактну форму'
      ],
      h32: '3.2 Автоматично збирається інформація:',
      items2: [
        'IP-адреса та технічна інформація про браузер',
        'Інформація про використання сайту (сторінки, час перебування)',
        'Cookies та подібні технології',
        'Дані про переходи за партнерськими посиланнями'
      ]
    },
    section4: {
      title: '4. Як ми використовуємо вашу інформацію',
      p: 'Ми використовуємо зібрану інформацію для:',
      items: [
        'Відповіді на ваші запити та надання консультацій',
        'Покращення нашого сайту та послуг',
        'Надсилання інформації про наші послуги (з вашої згоди)',
        'Відстеження ефективності партнерської програми',
        'Дотримання юридичних зобов\'язань',
        'Захисту наших прав та безпеки'
      ]
    },
    section5: {
      title: '5. Партнерські посилання та відстеження',
      p1: 'Наш сайт містить партнерські посилання на сервіс inFakt. При переході за цими посиланнями та реєстрації в inFakt ми можемо отримати комісію, яка не впливає на ціну послуг для вас.',
      p2: 'Ми відстежуємо ефективність партнерської програми для аналітики та покращення сервісу, але не передаємо особисті дані користувачів третім особам.'
    },
    section6: {
      title: '6. Cookies та технології відстеження',
      p1: 'Наш сайт використовує cookies для покращення користувацького досвіду. Cookies - це невеликі текстові файли, які зберігаються на вашому пристрої.',
      h3: 'Типи cookies, які ми використовуємо:',
      items: [
        'Необхідні cookies: для базового функціонування сайту',
        'Аналітичні cookies: для аналізу використання сайту',
        'Функціональні cookies: для запам\'ятовування ваших налаштувань',
        'Партнерські cookies: для відстеження партнерських посилань'
      ],
      p2: 'Ви можете керувати налаштуваннями cookies у вашому браузері або відхилити їх використання.'
    },
    section7: {
      title: '7. Поширення інформації',
      p: 'Ми не продаємо, не обмінюємо та не передаємо вашу особисту інформацію третім особам, крім випадків:',
      items: [
        'Коли це необхідно для надання послуг (наприклад, партнерам inFakt)',
        'Коли це вимагається законом',
        'З вашої явної згоди',
        'Для захисту наших прав та безпеки',
        'Для відстеження партнерської програми (без передачі особистих даних)'
      ]
    },
    section8: {
      title: '8. Безпека даних',
      p1: 'Ми впроваджуємо відповідні технічні та організаційні заходи для захисту вашої особистої інформації від несанкціонованого доступу, зміни, розкриття або знищення.',
      p2: 'Однак жоден метод передачі через інтернет або електронного зберігання не є 100% безпечним, тому ми не можемо гарантувати абсолютну безпеку.'
    },
    section9: {
      title: '9. Ваші права',
      p: 'Відповідно до GDPR, ви маєте право:',
      items: [
        'Отримати доступ до своїх особистих даних',
        'Виправити неточні дані',
        'Видалити свої дані',
        'Обмежити обробку даних',
        'Перенести свої дані',
        'Відкликати згоду на обробку даних',
        'Подати скаргу до органу з нагляду'
      ]
    },
    section10: {
      title: '10. Зміни до цієї політики',
      p1: 'Ми можемо періодично оновлювати цю Політику конфіденційності. Про будь-які значні зміни ми повідомимо вас через наш сайт або електронну пошту.',
      p2: 'Рекомендуємо регулярно переглядати цю сторінку для ознайомлення з актуальною версією політики.'
    },
    section11: {
      title: '11. Контактна інформація',
      p1: 'Якщо у вас є питання щодо цієї Політики конфіденційності або обробки ваших даних, зв\'яжіться з нами:',
      note: 'Примітка: Для отримання бухгалтерських послуг звертайтеся безпосередньо до inFakt за контактами, вказаними на сторінці "Контакти".'
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
              href="/ukr/"
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
                {content.lastUpdate} {new Date().toLocaleDateString('uk-UA')}
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
                  <strong>freelancer.org.pl</strong> - {content.section2.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section2.p2}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section2.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm md:text-base">
                  {content.section2.p3}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section3.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{content.section3.h31}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                    {content.section3.items1.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{content.section3.h32}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                    {content.section3.items2.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section4.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">{content.section4.p}</p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section4.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
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
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{content.section6.h3}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                    {content.section6.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm md:text-base">
                  {content.section6.p2}
                </p>
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
                <p className="text-sm md:text-base">{content.section9.p}</p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section9.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section10.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section10.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section10.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section11.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">{content.section11.p1}</p>
                <div className="space-y-2">
                  <p className="text-sm md:text-base"><strong>Email:</strong> info@freelancer.org.pl</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Примітка:</strong> {content.section11.note}
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
                <Link href="/ukr/" className="text-lg font-semibold hover:text-blue-400 transition-colors">Freelancer.org.pl</Link>
              </div>
              <p className="text-gray-400 text-xs md:text-sm max-w-2xl">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><Link href="/ukr/contact/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{t.footer.contact}</Link></li>
                <li><Link href="/ukr/privacy-policy/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{content.footer.privacy}</Link></li>
                <li><Link href="/ukr/terms/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{content.footer.terms}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="text-sm md:text-base">Email: info@freelancer.org.pl</li>
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
