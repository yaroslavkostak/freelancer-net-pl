"use client"

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DynamicYear } from '@/components/dynamic-year'

export default function JDGRegistrationGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
            <Link href="https://freelancer.org.pl/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">Рекомендую inFakt</Link>
          </div>
          <nav className="hidden md:flex items-center space-x-10 justify-center flex-1">
            <Link href="/#company-choice" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21h18M3 7h18M3 3h18M7 21V11M17 21V11"/></svg>
              Види діяльності
            </Link>
            <Link href="/#accountants" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><circle cx="17" cy="17" r="4"/><path d="M17 13a4 4 0 0 0-8 0"/></svg>
              Бухгалтери
            </Link>
            <Link href="/#business-management" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
              Бухгалтерський облік
            </Link>
            <Link href="/#accounting-services" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Послуги
            </Link>
            <Link href="/#faq" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12" y2="17"/></svg>
              Питання
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Головна
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link href="/blog" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Статті</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Як відкрити JDG</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Як відкрити JDG в Польщі: покрокова інструкція
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>📅 27 січня 2025</span>
              <span>⏱️ 12 хв читання</span>
              <span>👁️ 1,234 переглядів</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Повний гід з реєстрації індивідуального підприємництва (JDG) в Польщі для українців. 
              Від підготовки документів до початку діяльності - все, що потрібно знати.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 id="what-is-jdg" className="group">
              <a href="#what-is-jdg" className="flex items-center hover:text-blue-600 transition-colors">
                Що таке JDG і чому це популярно серед українців?
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>
            
            <p>
              <strong>JDG (Jednoosobowa Działalność Gospodarcza)</strong> - це індивідуальне підприємництво в Польщі, 
              аналог українського ФОП. Це найпростіша форма ведення бізнесу, яка дозволяє легально працювати 
              та отримувати дохід на території Польщі.
            </p>

            <p>
              Багато українців обирають JDG через простоту реєстрації та можливість швидко почати легальну роботу 
              в Європейському Союзі.
            </p>

            <h3>Переваги JDG для українців:</h3>
            <ul>
              <li>Проста реєстрація без великих витрат</li>
              <li>Можливість працювати з клієнтами по всій ЄС</li>
              <li>Доступ до європейських банківських послуг</li>
              <li>Легальне проживання та робота в Польщі</li>
              <li>Можливість отримати дозвіл на проживання</li>
            </ul>

            <h2 id="step-1-documents" className="group">
              <a href="#step-1-documents" className="flex items-center hover:text-blue-600 transition-colors">
                Крок 1: Підготовка документів
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>
            <p>Для реєстрації JDG вам знадобиться:</p>
            <ul>
              <li><strong>Паспорт</strong> - обов'язковий документ для іноземців</li>
              <li><strong>PESEL</strong> - польський ідентифікаційний номер</li>
              <li><strong>Дозвіл на проживання</strong> (якщо є)</li>
              <li><strong>Адреса в Польщі</strong> для реєстрації</li>
              <li><strong>Визначення виду діяльності</strong> (PKD коди)</li>
            </ul>

            <h3>Як отримати PESEL?</h3>
            <p>
              PESEL можна отримати в місцевому уряді (Urząd Gminy) або в міській раді (Urząd Miasta). 
              Потрібно подати заяву разом з паспортом та документами про проживання в Польщі.
            </p>

            <h2>Крок 2: Вибір виду діяльності (PKD коди)</h2>
            <p>
              PKD (Polska Klasyfikacja Działalności) - це польська класифікація видів діяльності. 
              Вам потрібно вибрати відповідні коди для вашої діяльності.
            </p>

            <h3>Популярні PKD коди для українців:</h3>
            <ul>
              <li><strong>62.01.Z</strong> - Програмування комп'ютерне</li>
              <li><strong>62.02.Z</strong> - Консультації в галузі інформаційних технологій</li>
              <li><strong>69.20.Z</strong> - Діяльність у сфері бухгалтерського обліку</li>
              <li><strong>70.21.Z</strong> - Консультації з питань управління</li>
              <li><strong>85.51.Z</strong> - Додаткова освіта</li>
              <li><strong>96.09.Z</strong> - Інші персональні послуги</li>
            </ul>

            <h2>Крок 3: Реєстрація JDG</h2>
            <p>Реєстрацію можна провести кількома способами:</p>

            <h3>Спосіб 1: Онлайн через CEIDG</h3>
            <p>
              Найшвидший та найзручніший спосіб - реєстрація через інтернет на сайті 
              <a href="https://prod.ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> CEIDG</a>. 
              Для цього потрібен підпис електронний або профіль Zaufany.
            </p>

            <h3>Спосіб 2: Особисто в уряді</h3>
            <p>
              Можна подати заяву особисто в місцевому уряді (Urząd Gminy) або в міській раді (Urząd Miasta). 
              Потрібно заповнити форму CEIDG-1 та подати разом з документами.
            </p>

            <h3>Спосіб 3: Через бухгалтера</h3>
            <p>
              Найпростіший спосіб для іноземців - звернутися до бухгалтера, який допоможе з усіма формальностями. 
              Сервіс inFakt надає такі послуги українською мовою.
            </p>

            <h2>Крок 4: Податкові зобов'язання</h2>
            <p>Після реєстрації JDG у вас з'являються податкові зобов'язання:</p>

            <h3>Основні податки:</h3>
            <ul>
              <li><strong>PIT</strong> - податок на доходи фізичних осіб</li>
              <li><strong>VAT</strong> - податок на додану вартість (якщо оборот перевищує ліміти)</li>
              <li><strong>ZUS</strong> - соціальні внески</li>
            </ul>

            <h3>Податкові режими:</h3>
            <ul>
              <li><strong>Лінійний</strong> - 19% від доходу</li>
              <li><strong>Прогресивний</strong> - 12% та 32% (з 2025 року)</li>
              <li><strong>Рідна ставка</strong> - 19%</li>
            </ul>

            <h2>Крок 5: Відкриття банківського рахунку</h2>
            <p>
              Для ведення бізнесу рекомендується відкрити окремий банківський рахунок. 
              Популярні банки для JDG: PKO BP, mBank, ING, Santander.
            </p>

            <h2>Крок 6: Початок діяльності</h2>
            <p>
              Після реєстрації ви можете починати діяльність. Не забудьте:
            </p>
            <ul>
              <li>Вести облік доходів та витрат</li>
              <li>Виставляти рахунки клієнтам</li>
              <li>Своєчасно подавати декларації</li>
              <li>Сплачувати податки та внески</li>
            </ul>

            <h2>Допомога від inFakt</h2>
            <p>
              Сервіс inFakt допоможе вам з усіма аспектами ведення JDG:
            </p>
            <ul>
              <li>Реєстрація JDG українською мовою</li>
              <li>Вибір оптимальних PKD кодів</li>
              <li>Ведення бухгалтерського обліку</li>
              <li>Подача податкових декларацій</li>
              <li>Консультації з питань оподаткування</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h3 className="text-blue-900 font-semibold mb-2">💡 Порада</h3>
              <p className="text-blue-800">
                Не намагайтеся реєструвати JDG самостійно, якщо не впевнені в польській мові та законодавстві. 
                Зверніться до бухгалтера inFakt - це заощадить час, гроші та нерви.
              </p>
            </div>

            <h2>Висновок</h2>
            <p>
              Реєстрація JDG в Польщі - це відмінна можливість для українців легально працювати та розвивати бізнес. 
              При правильному підході та допомозі професіоналів цей процес буде швидким та безболісним.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Схожі статті</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Link href="/blog/tax-changes-2025/" className="block">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      Податкові зміни 2025 року в Польщі
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Детальний огляд нових податкових правил для JDG та Spółka z o.o.
                    </p>
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Читати далі →
                    </span>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Link href="/blog/vat-poland-guide/" className="block">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      VAT в Польщі: основні правила для підприємців
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Все про податок на додану вартість для українських підприємців
                    </p>
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Читати далі →
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white mt-12">
            <h2 className="text-2xl font-bold mb-4">Потрібна допомога з реєстрацією JDG?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Наші партнери з inFakt допоможуть вам з реєстрацією та веденням бухгалтерії
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="https://www.infakt.pl/polecam/yaroslav-kostak" target="_blank" rel="nofollow noopener noreferrer">
                Зареєструвати JDG
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
                <Link href="https://freelancer.org.pl/" className="text-lg font-semibold hover:text-blue-400 transition-colors">Freelancer.org.pl</Link>
              </div>
              <p className="text-gray-400 text-sm max-w-2xl">
                Сайт freelancer.org.pl є інформаційним ресурсом у межах партнерської програми inFakt. Метою сайту є ознайомлення з сервісом та його можливостями для підприємців в Польщі.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Швидкі посилання</h3>
              <ul className="space-y-2">
                <li><Link href="/contact/" className="text-gray-400 hover:text-white transition-colors">Контакти</Link></li>
                <li><Link href="/privacy-policy/" className="text-gray-400 hover:text-white transition-colors">Політика конфіденційності</Link></li>
                <li><Link href="/terms/" className="text-gray-400 hover:text-white transition-colors">Умови використання</Link></li>
                <li><Link href="/blog/" className="text-gray-400 hover:text-white transition-colors">Всі статті</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Контакти</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@freelancer.org.pl</li>
                <li>Адреса: 31-445 Kraków, ul. płk. pil. Stefana Łaszkiewicza 2</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {DynamicYear()} Freelancer.org.pl. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
