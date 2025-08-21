import Link from 'next/link'
import { DynamicYear } from '@/components/dynamic-year'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export default function ZwrotPodatkuGuidePage() {
  return (
    <>
      <Script
        id="zwrot-podatku-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Як отримати zwrot podatku в Польщі 2025: повна інструкція українською",
            "description": "Детальна інструкція як отримати повернення податку (zwrot podatku) в Польщі для українців. Умови, документи, терміни та покрокова процедура.",
            "image": "https://freelancer.org.pl/images/zwrot-podatku-guide-og.jpg",
            "author": {
              "@type": "Organization",
              "name": "inFakt",
              "url": "https://www.infakt.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Freelancer.org.pl",
              "url": "https://freelancer.org.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://freelancer.org.pl/favicon.svg"
              }
            },
            "datePublished": "2025-01-27T00:00:00.000Z",
            "dateModified": "2025-01-27T00:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://freelancer.org.pl/blog/zwrot-podatku-guide"
            },
            "articleSection": "Податки",
            "keywords": "zwrot podatku польща, повернення податку польща, переплата податків, pit-37 декларація, українці польща податки",
            "wordCount": 2800,
            "timeRequired": "PT12M",
            "inLanguage": "uk",
            "isAccessibleForFree": true,
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", "h3", "p"]
            }
          })
        }}
      />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
            <Link href="https://freelancer.org.pl/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">Рекомендую inFakt</Link>
          </div>
          <nav className="hidden md:flex items-center space-x-10 justify-center flex-1">
            <Link href="/#company-choice/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21h18M3 7h18M3 3h18M7 21V11M17 21V11"/></svg>
              Види діяльності
            </Link>
            <Link href="/#accountants/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><circle cx="17" cy="17" r="4"/><path d="M17 13a4 4 0 0 0-8 0"/></svg>
              Бухгалтери
            </Link>
            <Link href="/#business-management/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
              Бухгалтерський облік
            </Link>
            <Link href="/#accounting-services/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Послуги
            </Link>
            <Link href="/#faq/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
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
                  <Link href="/blog/" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Статті</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Повернення податку</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Як отримати zwrot podatku в Польщі 2025: повна інструкція українською
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>📅 27 січня 2025</span>
              <span>⏱️ 12 хв читання</span>
              <span>👁️ 4,200 переглядів</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Повна інструкція як отримати повернення податку (zwrot podatku) в Польщі для українців. 
              Розглянемо всі умови, необхідні документи, терміни та покрокову процедуру з поясненням польських термінів.
            </p>
          </div>

          {/* Featured Alert */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">💰 Важливо знати!</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>У 2025 році термін подання декларації PIT для отримання <strong>zwrot podatku</strong> (повернення податку) - до 30 квітня 2025 року за доходи 2024 року.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Зміст статті</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#what-is-zwrot" className="text-blue-600 hover:text-blue-800 transition-colors">Що таке zwrot podatku</a></li>
              <li><a href="#who-can-get" className="text-blue-600 hover:text-blue-800 transition-colors">Хто може отримати повернення</a></li>
              <li><a href="#conditions" className="text-blue-600 hover:text-blue-800 transition-colors">Умови для отримання</a></li>
              <li><a href="#documents" className="text-blue-600 hover:text-blue-800 transition-colors">Необхідні документи</a></li>
              <li><a href="#step-by-step" className="text-blue-600 hover:text-blue-800 transition-colors">Покрокова інструкція</a></li>
              <li><a href="#timing" className="text-blue-600 hover:text-blue-800 transition-colors">Терміни та строки</a></li>
              <li><a href="#practical-examples" className="text-blue-600 hover:text-blue-800 transition-colors">Практичні приклади</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none space-y-6">
            <h2 id="what-is-zwrot" className="group">
              <a href="#what-is-zwrot" className="flex items-center hover:text-blue-600 transition-colors">
                Що таке zwrot podatku (повернення податку)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>
            
            <p>
              <strong>Zwrot podatku</strong> (повернення податку) - це процедура повернення державою частини 
              сплачених податків, коли ви заплатили більше, ніж зобов'язані були заплатити згідно з законом.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">🔤 Словник польських термінів:</h3>
              <ul className="space-y-2 text-blue-700">
                <li><strong>Zwrot podatku</strong> - повернення податку</li>
                <li><strong>Nadpłata</strong> - переплата</li>
                <li><strong>Deklaracja PIT</strong> - податкова декларація</li>
                <li><strong>Urząd Skarbowy</strong> - податкова інспекція</li>
                <li><strong>Rozliczenie</strong> - розрахунок/звітність</li>
                <li><strong>Zaliczka</strong> - авансовий платіж</li>
              </ul>
            </div>

            <h3>Основні причини виникнення переплати:</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800">✅ Переплачені авансові платежі</h4>
                <p className="text-gray-700">Коли протягом року ви платили більші zaliczki (авансові платежі), ніж остаточна сума податку</p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-800">💼 Зміна форми оподаткування</h4>
                <p className="text-gray-700">Перехід з загальних правил на <Link href="/blog/stawki-ryczalt-2025/" className="text-blue-600 hover:text-blue-800 transition-colors">ryczałt ewidencjonowany</Link> або навпаки може призвести до переплати</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-800">📊 Використання ulg podatkowych</h4>
                <p className="text-gray-700">Застосування податкових пільг (ulgi) може зменшити остаточну суму податку</p>
              </div>
            </div>

            <h2 id="who-can-get" className="group">
              <a href="#who-can-get" className="flex items-center hover:text-blue-600 transition-colors">
                Хто може отримати zwrot podatku
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Повернення податку можуть отримати різні категорії платників податків в Польщі, 
              включаючи українців, які працюють легально.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">👨‍💼</span>
                    Працівники (umowa o pracę)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Працюють за <strong>umowa o pracę</strong> (трудовий договір)</li>
                    <li>• Мають переплату durch <strong>potrącenia</strong> (утримання)</li>
                    <li>• Можуть використати <strong>ulgi podatkowe</strong> (пільги)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">💻</span>
                    Підприємці JDG
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Ведуть <strong>jednoosobową działalność</strong> (індивідуальне підприємництво)</li>
                    <li>• Переплатили <strong>zaliczki</strong> (авансові платежі)</li>
                    <li>• Змінили форму оподаткування</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">📄</span>
                    Zleceniobiorcy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Працюють за <strong>umowa zlecenie</strong> (договір доручення)</li>
                    <li>• Мають кілька джерел доходу</li>
                    <li>• Можуть об'єднати доходи в dekłарації</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">👨‍👩‍👧‍👦</span>
                    Родини з дітьми
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Мають право на <strong>ulgę na dziecko</strong> (пільга на дитину)</li>
                    <li>• Можуть скористатися <strong>wspólnym rozliczeniem</strong> (спільне розрахування)</li>
                    <li>• Застосовують інші <strong>ulgi rodzinne</strong> (родинні пільги)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 id="conditions" className="group">
              <a href="#conditions" className="flex items-center hover:text-blue-600 transition-colors">
                Умови для отримання zwrot podatku
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Для отримання повернення податку необхідно виконати кілька обов'язкових умов і 
              дотриматися встановлених процедур.
            </p>

            <h3>Основні умови:</h3>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">1. Подання deklaracji PIT (податкової декларації)</h4>
                <p className="text-green-700 text-sm">
                  Обов'язково подати декларацію до Urzędu Skarbowego (податкової інспекції) 
                  в установлені терміни - до 30 квітня наступного року.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">2. Документальне підтвердження</h4>
                <p className="text-blue-700 text-sm">
                  Наявність wszystkich dokumentów (всіх документів): PIT-11, PIT-8A, PIT-8B, 
                  rachunki (рахунки), faktury (інвойси) та інші підтверджуючі документи.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">3. Фактична nadpłata (переплата)</h4>
                <p className="text-purple-700 text-sm">
                  Сума сплачених податків повинна перевищувати остаточну суму zobowiązania podatkowego 
                  (податкового зобов'язання) після всіх розрахунків.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">4. Подача w terminie (у строк)</h4>
                <p className="text-orange-700 text-sm">
                  Декларація повинна бути подана у встановлений термін. Запізнення може 
                  призвести до sankcji (санкцій) та втрати права на zwrot.
                </p>
              </div>
            </div>

            <h2 id="documents" className="group">
              <a href="#documents" className="flex items-center hover:text-blue-600 transition-colors">
                Необхідні документи для zwrot podatku
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Список dokumentów (документів) залежить від вашої ситуації та джерел доходу. 
              Розглянемо найпоширеніші випадки для українців.
            </p>

            <h3>Основні документи для всіх:</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Документ (польською)</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Переклад</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Призначення</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Deklaracja PIT-37</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Податкова декларація</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Основний документ для rozliczenia</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">PIT-11</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Довідка про доходи</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Від pracodawcy (роботодавця)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">PIT-8A</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Довідка про zlecenia</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Доходи з umów zlecenie</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">PIT-8B</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Довідка про działalność</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Доходи з JDG</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Zaświadczenie o dochodach</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Довідка про доходи</td>
                    <td className="px-4 py-3 text-sm text-gray-600">З różnych źródeł (різних джерел)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Додаткові документи для ulg (пільг):</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">📚 Ulga na edukację (освітня пільга)</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Faktury za naukę (рахунки за навчання)</li>
                  <li>• Zaświadczenie ze szkoły (довідка зі школи)</li>
                  <li>• Umowa o kształcenie (договір навчання)</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">👶 Ulga na dziecko (пільга на дитину)</h4>
                <ul className="text-sm text-pink-700 space-y-1">
                  <li>• Akt urodzenia dziecka (свідоцтво народження)</li>
                  <li>• Zaświadczenie o uczęszczaniu do szkoły</li>
                  <li>• Dokumenty opiekuńcze (документи опіки)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🏥 Ulga na leczenie (медична пільга)</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Faktury z przychodni (рахунки з клініки)</li>
                  <li>• Recepty lekarskie (лікарські рецепти)</li>
                  <li>• Dokumenty rehabilitacji</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🏠 Ulga mieszkaniowa (житлова пільга)</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Umowa kredytu hipotecznego</li>
                  <li>• Dokumenty własności nieruchomości</li>
                  <li>• Faktury za remont</li>
                </ul>
              </div>
            </div>

            <h2 id="step-by-step" className="group">
              <a href="#step-by-step" className="flex items-center hover:text-blue-600 transition-colors">
                Покрокова інструкція отримання zwrot podatku
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                  Zbieranie dokumentów (збір документів)
                </h3>
                <ul className="text-blue-700 space-y-2 ml-11">
                  <li>• Зберіть всі PIT-11, PIT-8A, PIT-8B від pracodawców та zleceniodawców</li>
                  <li>• Підготуйте dokumenty potwierdzające (підтверджуючі документи) для ulg</li>
                  <li>• Перевірте wszystkie faktury та rachunki за рік</li>
                  <li>• Упевніться, że маєте numer PESEL та adres zameldowania</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-800 mb-4 flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                  Wypełnianie deklaracji (заповнення декларації)
                </h3>
                <ul className="text-green-700 space-y-2 ml-11">
                  <li>• Завантажте formularz PIT-37 з сайту podatki.gov.pl</li>
                  <li>• Заповніть dane osobowe (особисті дані) та адресну інформацію</li>
                  <li>• Внесіть wszystkie dochody (всі доходи) з отриманих dokumentów</li>
                  <li>• Додайте ulgi podatkowe, якщо маєте право</li>
                  <li>• Перевірте obliczenia (розрахунки) кілька разів</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-purple-800 mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                  Składanie deklaracji (подача декларації)
                </h3>
                <ul className="text-purple-700 space-y-2 ml-11">
                  <li><strong>Elektronicznie:</strong> через portal podatki.gov.pl або e-Deklaracje</li>
                  <li><strong>Osobiście:</strong> у вашому właściwym Urzędzie Skarbowym</li>
                  <li><strong>Pocztą:</strong> надіслати listem poleconym (рекомендованим листом)</li>
                  <li>• Додайте wszystkie załączniki (всі додатки) та dokumenty</li>
                  <li>• Зберегіть potwierdzenie złożenia (підтвердження подачі)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
                <h3 className="font-bold text-orange-800 mb-4 flex items-center">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
                  Oczekiwanie na zwrot (очікування повернення)
                </h3>
                <ul className="text-orange-700 space-y-2 ml-11">
                  <li>• Urząd Skarbowy має maksимум 3 місяці na rozpatrzenie</li>
                  <li>• Можливе wezwanie do uzupełnienia (виклик для доповнення) dokumentów</li>
                  <li>• Слідкуйте за statusem через Twój e-PIT або e-Deklaracje</li>
                  <li>• При позитивному rozstrzygnięciu - грошi поступлять на rachunek bankowy</li>
                </ul>
              </div>
            </div>

            <h2 id="timing" className="group">
              <a href="#timing" className="flex items-center hover:text-blue-600 transition-colors">
                Терміни та строки для zwrot podatku
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="font-semibold text-red-800 mb-4">⏰ Важливі daty (дати) на 2025 рік:</h3>
              <ul className="space-y-2 text-red-700">
                <li><strong>30 квітня 2025</strong> - ostateczny termin (остаточний термін) подачі PIT за 2024 рік</li>
                <li><strong>31 травня 2025</strong> - termin для składania CIT (для компаній)</li>
                <li><strong>3 місяці</strong> - maksymalny czas на розгляд заяви Urzędem Skarbowym</li>
                <li><strong>45 днів</strong> - typowy czas oczekiwania na zwrot при електронній подачі</li>
              </ul>
            </div>

            <h3>Розрахунок terminów:</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Спосіб подачі</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Час розгляду</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Час перерахунку</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Загальний час</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Elektronicznie</td>
                    <td className="px-4 py-3 text-sm text-gray-700">30-45 днів</td>
                    <td className="px-4 py-3 text-sm text-gray-700">5-10 днів</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">35-55 днів</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Papierowo (паперова)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">45-60 днів</td>
                    <td className="px-4 py-3 text-sm text-gray-700">7-14 днів</td>
                    <td className="px-4 py-3 text-sm font-semibold text-orange-600">52-74 дні</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">З uzupełnieniem</td>
                    <td className="px-4 py-3 text-sm text-gray-700">60-90 днів</td>
                    <td className="px-4 py-3 text-sm text-gray-700">10-21 день</td>
                    <td className="px-4 py-3 text-sm font-semibold text-red-600">70-111 днів</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="practical-examples" className="group">
              <a href="#practical-examples" className="flex items-center hover:text-blue-600 transition-colors">
                Praktyczne przykłady (практичні приклади)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <h3>Przykład 1: Pracownik z переплатою</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Sytuacja:</strong> Українець працює за umowa o pracę, зарплата 5,000 zł/міс</p>
              
              <div className="mt-4 space-y-2">
                <p><strong>Dane do rozliczenia:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Dochód roczny: 60,000 zł</li>
                  <li>• Zaliczki potrącone przez pracodawcę: 8,500 zł</li>
                  <li>• Rzeczywisty podatek (po ulgach): 7,200 zł</li>
                  <li>• <strong>Nadpłata do zwrotu: 1,300 zł</strong></li>
                </ul>
                
                <div className="bg-green-100 p-3 rounded mt-4">
                  <p className="text-green-800"><strong>Rezultat:</strong> Zwrot podatku 1,300 zł na rachunek bankowy w ciągu 45 dnів</p>
                </div>
              </div>
            </div>

            <h3>Przykład 2: JDG z zmianą formy opodatkowania</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Sytuacja:</strong> IT-фрілансер zmienił з загальних правил na ryczałt w середині року</p>
              
              <div className="mt-4 space-y-2">
                <p><strong>Rozliczenie:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Dochody styczeń-czerwiec (zasady ogólne): 30,000 zł</li>
                  <li>• Zaliczki zapłacone: 5,100 zł (17%)</li>
                  <li>• Dochody lipiec-grudzień (ryczałt 2%): 30,000 zł</li>
                  <li>• Podatek ryczałt: 600 zł</li>
                  <li>• Rzeczywisty podatek za cały rok: 4,200 zł</li>
                  <li>• <strong>Nadpłata do zwrotu: 900 zł</strong></li>
                </ul>
                
                <div className="bg-green-100 p-3 rounded mt-4">
                  <p className="text-green-800"><strong>Rezultat:</strong> Zwrot 900 zł + możliwość dalszej pracy na ryczałcie</p>
                </div>
              </div>
            </div>

            <h3>Przykład 3: Rodzina z ulgą na dziecko</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Sytuacja:</strong> Украинська родина з 2 dziećmi, wspólne rozliczenie</p>
              
              <div className="mt-4 space-y-2">
                <p><strong>Składniki rozliczenia:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Łączny dochód rodziny: 80,000 zł</li>
                  <li>• Podatek przed ulgami: 12,800 zł</li>
                  <li>• Ulga na pierwsze dziecko: 1,112.04 zł</li>
                  <li>• Ulga na drugie dziecko: 1,112.04 zł</li>
                  <li>• Podatek po ulgach: 10,575.92 zł</li>
                  <li>• Zaliczki zapłacone: 12,000 zł</li>
                  <li>• <strong>Nadpłata do zwrotu: 1,424.08 zł</strong></li>
                </ul>
                
                <div className="bg-green-100 p-3 rounded mt-4">
                  <p className="text-green-800"><strong>Rezultat:</strong> Znaczący zwrot dzięki ulgom rodzinnym</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
              <h3 className="font-semibold text-yellow-800 mb-4">💡 Wskazówki praktyczne:</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>Składaj elektronicznie</strong> - szybciej і безпечніше</li>
                <li>• <strong>Sprawdź wszystkie ulgi</strong> - możesz być uprawniony</li>
                <li>• <strong>Zachowaj wszystkie dokumenty</strong> - minimum 5 років</li>
                <li>• <strong>Skorzystaj z pomocy księgowego</strong> - при складних ситуаціях</li>
                <li>• <strong>Monitoruj status</strong> - через portal podatki.gov.pl</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white mt-16">
              <h2 className="text-2xl font-bold mb-4">Потрібна допомога з rozliczeniem?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Знайдіть <Link href="https://freelancer.org.pl/" className="text-white underline hover:text-blue-200 transition-colors">бухгалтера в Польщі</Link>, який допоможе правильно złożyć deklarację та максимізувати zwrot podatku
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/tax-calculator/">
                  Калькулятор podatku
                </Link>
              </Button>
            </div>
          </article>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Схожі статті</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Link href="/blog/tax-calculator-guide/" className="block">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      Калькулятор податків для українців у Польщі 2025
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Повний гід з розрахунку PIT, VAT, ZUS та інших податків
                    </p>
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Читати далі →
                    </span>
                  </Link>
                </CardContent>
              </Card>
              
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
            </div>
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
    </>
  )
}
