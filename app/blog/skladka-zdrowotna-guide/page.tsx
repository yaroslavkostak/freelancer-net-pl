import Link from 'next/link'
import { DynamicYear } from '@/components/dynamic-year'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export default function SkladkaZdrowotnaGuidePage() {
  return (
    <>
      <Script
        id="skladka-zdrowotna-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Składka zdrowotna в Польщі 2025: розрахунок та оплата для українців",
            "description": "Повний гід з składka zdrowotna (внесок на охорону здоров'я) в Польщі для українських підприємців. Розрахунки, ставки, терміни оплати та льготи для JDG.",
            "image": "https://freelancer.org.pl/images/skladka-zdrowotna-guide-og.jpg",
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
              "@id": "https://freelancer.org.pl/blog/skladka-zdrowotna-guide"
            },
            "articleSection": "Податки та внески",
            "keywords": "składka zdrowotna, внесок здоров'я польща, JDG податки, NFZ, українці польща, розрахунок składka",
            "wordCount": 2800,
            "timeRequired": "PT13M",
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Składka zdrowotna</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Składka zdrowotna в Польщі 2025: розрахунок та оплата для українців
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>📅 27 січня 2025</span>
              <span>⏱️ 13 хв читання</span>
              <span>👁️ 4,234 переглядів</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Повний гід з składka zdrowotna (внесок на охорону здоров'я) в Польщі для українських підприємців. 
              Дізнайтеся про ставки, розрахунки, терміни оплати та льготи для JDG у 2025 році.
            </p>
          </div>

          {/* Important Alert */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">💰 Stawki składka zdrowotna 2025:</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p><strong>JDG na ryczałcie:</strong> 381,81 zł/міс. (до доходу 60,000 zł/рік)</p>
                  <p><strong>JDG na podatku liniowym:</strong> 9% від podstawy składek ZUS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Зміст статті</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#what-is-skladka" className="text-blue-600 hover:text-blue-800 transition-colors">Що таке składka zdrowotna</a></li>
              <li><a href="#who-pays" className="text-blue-600 hover:text-blue-800 transition-colors">Хто платить складку здоров'я</a></li>
              <li><a href="#rates-2025" className="text-blue-600 hover:text-blue-800 transition-colors">Ставки на 2025 рік</a></li>
              <li><a href="#calculation-methods" className="text-blue-600 hover:text-blue-800 transition-colors">Методи розрахунку</a></li>
              <li><a href="#payment-deadlines" className="text-blue-600 hover:text-blue-800 transition-colors">Терміни оплати</a></li>
              <li><a href="#benefits-льготи" className="text-blue-600 hover:text-blue-800 transition-colors">Пільги та винятки</a></li>
              <li><a href="#practical-examples" className="text-blue-600 hover:text-blue-800 transition-colors">Практичні приклади</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none space-y-6">
            <h2 id="what-is-skladka" className="group">
              <a href="#what-is-skladka" className="flex items-center hover:text-blue-600 transition-colors">
                Що таке składka zdrowotna (внесок на охорону здоров'я)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>
            
            <p>
              <strong>Składka zdrowotna</strong> (внесок на охорону здоров'я) - це обов'язковий платіж, 
              який фінансує систему охорони здоров'я в Польщі через 
              <strong>NFZ</strong> (Narodowy Fundusz Zdrowia - Національний фонд здоров'я).
            </p>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">🔤 Словник польських термінів:</h3>
              <ul className="space-y-2 text-green-700">
                <li><strong>Składka zdrowotna</strong> - внесок на охорону здоров'я</li>
                <li><strong>NFZ</strong> - Національний фонд здоров'я</li>
                <li><strong>Podstawa wymiaru</strong> - база нарахування складки</li>
                <li><strong>Kwota składki</strong> - сума складки</li>
                <li><strong>Ubezpieczenie zdrowotne</strong> - медичне страхування</li>
                <li><strong>Świadczenia zdrowotne</strong> - медичні послуги</li>
                <li><strong>Ulga na składkę</strong> - пільга на складку</li>
              </ul>
            </div>

            <h3>Мета składka zdrowotna:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">🏥</span>
                    Finansowanie służby zdrowia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Основне джерело finansowania (фінансування) публічної системи 
                    ochrony zdrowia (охорони здоров'я) у Польщі.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">🩺</span>
                    Dostęp do świadczeń (доступ до послуг)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Гарантія bezpłatnego dostępu (безкоштовного доступу) 
                    до podstawowych świadczeń zdrowotnych.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">💊</span>
                    Refundacja leków (компенсація ліків)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Частичне pokrycie kosztów (покриття витрат) na leki 
                    oraz wyroby medyczne (медичні вироби).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">🚑</span>
                    Opieka specjalistyczna
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Dostęp do lekarzy specjalistów (лікарів-спеціалістів), 
                    badań diagnostycznych та szpitali (лікарень).
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 id="who-pays" className="group">
              <a href="#who-pays" className="flex items-center hover:text-blue-600 transition-colors">
                Kto płaci składkę zdrowotną (хто платить складку здоров'я)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Składka zdrowotna jest obов'язковою dla różnych kategorii osób prowadzących 
              działalność gospodarczą (господарську діяльність) в Польщі.
            </p>

            <h3>Osoby zobowiązane do płacenia:</h3>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <span className="mr-2">👤</span>
                  JDG (jednoosobowa działalność gospodarcza)
                </h4>
                <p className="text-blue-700 text-sm">
                  Всі підприємці на <strong>JDG</strong>, незалежно від форми оподаткування 
                  (ryczałt, podatek liniowy, skala podatkowa).
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <span className="mr-2">🏢</span>
                  Wspólnicy spółek osobowych
                </h4>
                <p className="text-green-700 text-sm">
                  Wspólnicy у spółka jawna, spółka partnerska, spółka komandytowa, 
                  які беруть участь в zarządzaniu spółką.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                  <span className="mr-2">💼</span>
                  Osoby wykonujące wolne zawody
                </h4>
                <p className="text-purple-700 text-sm">
                  Лікарі, адвокати, нотаріуси, архітектори та інші przedstawiciele 
                  wolnych zawodów (вільних професій).
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                  <span className="mr-2">🇺🇦</span>
                  Ukraińcy prowadzący działalność
                </h4>
                <p className="text-orange-700 text-sm">
                  Українці з <strong>kartą pobytu</strong> або тимчасовим захистом, 
                  які зареєстрували działalność gospodarczą в Польщі.
                </p>
              </div>
            </div>

            <h2 id="rates-2025" className="group">
              <a href="#rates-2025" className="flex items-center hover:text-blue-600 transition-colors">
                Stawki składki zdrowotnej 2025 (ставки на 2025 рік)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Stawki składki zdrowotnej залежать від formy opodatkowania (форми оподаткування) 
              та wysokości dochodów (висоти доходів) підприємця.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Forma opodatkowania</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Podstawa wymiaru</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Stawka</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Kwota miesięczna</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Ryczałt do 60,000 zł</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Podstawa minimalna ZUS</td>
                    <td className="px-4 py-3 text-sm text-gray-700">9%</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">381,81 zł</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Ryczałt ponad 60,000 zł</td>
                    <td className="px-4 py-3 text-sm text-gray-700">60% średniego wynagrodzenia</td>
                    <td className="px-4 py-3 text-sm text-gray-700">9%</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">450,54 zł</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Podatek liniowy 19%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Podstawa składek ZUS</td>
                    <td className="px-4 py-3 text-sm text-gray-700">9%</td>
                    <td className="px-4 py-3 text-sm font-semibold text-purple-600">zmienne</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Skala podatkowa</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Podstawa składek ZUS</td>
                    <td className="px-4 py-3 text-sm text-gray-700">9%</td>
                    <td className="px-4 py-3 text-sm font-semibold text-purple-600">zmienne</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Szczegóły stawek 2025:</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">💰 Podstawa minimalna ZUS</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li><strong>2025:</strong> 4,242.30 zł</li>
                  <li><strong>Składka:</strong> 4,242.30 × 9% = 381,81 zł</li>
                  <li><strong>Stosowana dla:</strong> ryczałt do 60,000 zł</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">📈 60% średniego wynagrodzenia</h4>
                <ul className="text-sm text-pink-700 space-y-1">
                  <li><strong>2025:</strong> 5,006.00 zł</li>
                  <li><strong>Składka:</strong> 5,006.00 × 9% = 450,54 zł</li>
                  <li><strong>Stosowana dla:</strong> ryczałt ponad 60,000 zł</li>
                </ul>
              </div>
            </div>

            <h2 id="calculation-methods" className="group">
              <a href="#calculation-methods" className="flex items-center hover:text-blue-600 transition-colors">
                Metody obliczania składki (методи розрахунку складки)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                  Ryczałt ewidencjonowany (паушальний податок)
                </h3>
                <div className="ml-11 space-y-3">
                  <p className="text-blue-700"><strong>Do 60,000 zł rocznie:</strong></p>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-sm">Podstawa: 4,242.30 zł (minimalna podstawa ZUS)</p>
                    <p className="text-sm">Składka: 4,242.30 × 9% = <strong>381,81 zł/міс.</strong></p>
                  </div>
                  
                  <p className="text-blue-700"><strong>Ponad 60,000 zł rocznie:</strong></p>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-sm">Podstawa: 5,006.00 zł (60% średniego wynagrodzenia)</p>
                    <p className="text-sm">Składka: 5,006.00 × 9% = <strong>450,54 zł/міс.</strong></p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-800 mb-4 flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                  Podatek liniowy 19% (лінійний податок)
                </h3>
                <div className="ml-11 space-y-3">
                  <p className="text-green-700">Podstawa = основа для складок ZUS (той самий дохід)</p>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-sm">Jeśli podstawa ZUS = 6,000 zł</p>
                    <p className="text-sm">Składka zdrowotna: 6,000 × 9% = <strong>540,00 zł/міс.</strong></p>
                  </div>
                  <p className="text-sm text-green-600">
                    💡 <strong>Uwaga:</strong> Można odliczyć 7.75% od podatku dochodowego!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-purple-800 mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                  Skala podatkowa (прогресивна шкала)
                </h3>
                <div className="ml-11 space-y-3">
                  <p className="text-purple-700">Основа = основа для складок ZUS</p>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-sm">Składka: Podstawa ZUS × 9%</p>
                    <p className="text-sm"><strong>Można odliczyć</strong> від podatku doходowego</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="payment-deadlines" className="group">
              <a href="#payment-deadlines" className="flex items-center hover:text-blue-600 transition-colors">
                Terminy płatności składki (терміни оплати складки)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="font-semibold text-red-800 mb-4">📅 Ważne terminy 2025:</h3>
              <ul className="space-y-2 text-red-700">
                <li><strong>Do 15. dnia następnego miesiąca</strong> - оплата складки здоров'я</li>
                <li><strong>Do 20. dnia następnego miesiąca</strong> - подача DRA (deklaracje)</li>
                <li><strong>Razem ze składkami ZUS</strong> - можна платити одним платежем</li>
                <li><strong>Kary za zwłokę:</strong> від 1% за кожен день затримки</li>
              </ul>
            </div>

            <h3>Przykłady terminów na 2025:</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Miesiąc składki</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Termin płatności</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Termin DRA</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Styczeń 2025</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">15 lutego 2025</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20 lutego 2025</td>
                    <td className="px-4 py-3 text-sm text-green-600">Aktualny</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Luty 2025</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">15 marca 2025</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20 marca 2025</td>
                    <td className="px-4 py-3 text-sm text-blue-600">Nadchodzący</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Marzec 2025</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">15 kwietnia 2025</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20 kwietnia 2025</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Planowany</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="benefits-льготи" className="group">
              <a href="#benefits-льготи" className="flex items-center hover:text-blue-600 transition-colors">
                Ulgi і zwolnienia (пільги та звільнення)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Istnieją różne formy ulg (пільг) та zwolnień (звільнень) ze składki zdrowotnej, 
              szczególnie dla początkujących przedsiębiorców.
            </p>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <span className="mr-2">🆕</span>
                  Ulga dla nowych przedsiębiorców
                </h4>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• <strong>Pierwsze 6 miesięcy:</strong> zwolnienie ze składki zdrowotnej</li>
                  <li>• <strong>Warunki:</strong> первый раз реєструє JDG</li>
                  <li>• <strong>Ograniczenia:</strong> nie łączył działalności z pracą najemną</li>
                  <li>• <strong>2025:</strong> ulga nadal obowiązuje</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <span className="mr-2">👶</span>
                  Zwolnienie dla rodziców
                </h4>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• <strong>Urlop macierzyński:</strong> brak składki podczas urlopu</li>
                  <li>• <strong>Urlop wychowawczy:</strong> możliwość zwolnienia</li>
                  <li>• <strong>Warunki:</strong> zawieszenie działalności</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                  <span className="mr-2">💼</span>
                  Łączenie z pracą najemną
                </h4>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• <strong>Pełny etat:</strong> składka zdrowotna płacona przez pracodawcę</li>
                  <li>• <strong>JDG dodatkowe:</strong> zwolnienie ze składki z JDG</li>
                  <li>• <strong>Warunki:</strong> główne miejsce pracy na umowie o pracę</li>
                </ul>
              </div>
            </div>

            <h2 id="practical-examples" className="group">
              <a href="#practical-examples" className="flex items-center hover:text-blue-600 transition-colors">
                Praktyczne przykłady rozliczeń (практичні приклади розрахунків)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-800 mb-4">💼 Przykład 1: Projektant graficzny na ryczałcie</h3>
                <div className="space-y-3">
                  <p><strong>Sytuacja:</strong> Ukrainiec, JDG od 6 miesięcy, ryczałt 8.5%, dochód 45,000 zł/rok</p>
                  <div className="bg-blue-50 p-4 rounded">
                    <p><strong>Roczny dochód:</strong> 45,000 zł (poniżej 60,000 zł)</p>
                    <p><strong>Podstawa składki:</strong> 4,242.30 zł (minimalna ZUS)</p>
                    <p><strong>Składka miesięczna:</strong> 4,242.30 × 9% = <span className="text-blue-600 font-bold">381,81 zł</span></p>
                    <p><strong>Składka roczna:</strong> 381,81 × 12 = <span className="text-blue-600 font-bold">4,581,72 zł</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-800 mb-4">💻 Przykład 2: Programista na podatku liniowym</h3>
                <div className="space-y-3">
                  <p><strong>Sytuacja:</strong> JDG 2 lata, podatek liniowy 19%, średni miesięczny dochód 15,000 zł</p>
                  <div className="bg-green-50 p-4 rounded">
                    <p><strong>Podstawa ZUS:</strong> 15,000 zł (na podstawie dochodu)</p>
                    <p><strong>Składka zdrowotna:</strong> 15,000 × 9% = <span className="text-green-600 font-bold">1,350 zł/міс.</span></p>
                    <p><strong>Odliczenie od podatku:</strong> 15,000 × 7.75% = 1,162.50 zł</p>
                    <p><strong>Realna składka:</strong> 1,350 - 1,162.50 = <span className="text-green-600 font-bold">187,50 zł/міс.</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-purple-800 mb-4">🏢 Przykład 3: Konsultant z pracą najemną</h3>
                <div className="space-y-3">
                  <p><strong>Sytuacja:</strong> Pełny etat + JDG na ryczałcie, dochód z JDG 30,000 zł/rok</p>
                  <div className="bg-purple-50 p-4 rounded">
                    <p><strong>Praca najemna:</strong> składka płacona przez pracodawcę</p>
                    <p><strong>JDG:</strong> zwolnienie ze składki zdrowotnej</p>
                    <p><strong>Składka z JDG:</strong> <span className="text-purple-600 font-bold">0 zł/міс.</span></p>
                    <p><strong>Oszczędność roczna:</strong> 381,81 × 12 = 4,581,72 zł</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
              <h3 className="font-semibold text-yellow-800 mb-4">💡 Praktyczne wskazówki:</h3>
              <ul className="space-y-2 text-yellow-700">
                <li><strong>Planowanie formy opodatkowania</strong> - wybór wpływa na wysokość składki</li>
                <li><strong>Korzystanie z ulg</strong> - szczególnie dla nowych przedsiębiorców</li>
                <li><strong>Terminowe płatności</strong> - unikajcie kar за zwłokę</li>
                <li><strong>Profesjonalna pomoc</strong> - księgowy pomoże оптимізувати obciążenia</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white mt-16">
              <h2 className="text-2xl font-bold mb-4">Потрібна допомога з rozliczeniem składek?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Професійний <Link href="https://freelancer.org.pl/" className="text-white underline hover:text-blue-200 transition-colors">бухгалтер в Польщі</Link> допоможе правильно obliczyć składkę zdrowotną та wykorzystати wszystі dostępні ulgi
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/tax-calculator/">
                  Kalkulatory podatków
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
                  <Link href="/blog/jdg-registration-guide/" className="block">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      Як відкрити JDG в Польщі: покрокова інструкція
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Повний гід з реєстрації індивідуального підприємництва для українців
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
