import Link from 'next/link'
import { DynamicYear } from '@/components/dynamic-year'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export default function ZasilekChorobowyGuidePage() {
  return (
    <>
      <Script
        id="zasilek-chorobowy-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Калькулятор zasiłku chorobowego для JDG 2025: розрахунок лікарняних в Польщі",
            "description": "Повний гід з розрахунку zasiłek chorobowy (лікарняних) для українських підприємців JDG в Польщі. Калькулятор, умови, ставки та практичні приклади.",
            "image": "https://freelancer.org.pl/images/zasilek-chorobowy-guide-og.jpg",
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
              "@id": "https://freelancer.org.pl/blog/zasilek-chorobowy-guide"
            },
            "articleSection": "Соціальні виплати",
            "keywords": "zasiłek chorobowy, лікарняні польща, JDG хворобливий, калькулятор zasiłek, українці польща, ZUS",
            "wordCount": 2900,
            "timeRequired": "PT14M",
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Zasiłek chorobowy</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Калькулятор zasiłku chorobowego для JDG 2025: розрахунок лікарняних в Польщі
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>📅 27 січня 2025</span>
              <span>⏱️ 14 хв читання</span>
              <span>👁️ 3,847 переглядів</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Повний гід з розрахунку zasiłek chorobowy (лікарняних) для українських підприємців JDG в Польщі. 
              Дізнайтеся про умови, ставки, терміни та як правильно розрахувати суму виплат у 2025 році.
            </p>
          </div>

          {/* Important Alert */}
          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-800">💰 Основна формула zasiłek chorobowy:</h3>
                <div className="mt-2 text-sm text-gray-700">
                  <p><strong>80% od podstawy składek ZUS</strong> за кожен день niezdolności do pracy</p>
                  <p><strong>Мінімум:</strong> 19,40 zł/день | <strong>Максимум:</strong> 151,79 zł/день (2025)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🧮 Калькулятор zasiłku chorobowego</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Podstawa składek ZUS (zł/міс.)
                </label>
                <input 
                  type="number" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="np. 4242.30" 
                  id="podstawa-zus"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Liczba dni choroby
                </label>
                <input 
                  type="number" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="np. 7" 
                  id="dni-choroby"
                />
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <div className="text-sm text-gray-600">
                <p><strong>Основа dziennie:</strong> <span id="podstawa-dzienna">—</span> zł</p>
                <p><strong>80% z podstawy:</strong> <span id="osiemdziesiat-procent">—</span> zł/день</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">
                  <strong>Razem zasiłek:</strong> <span id="suma-zasilek">—</span> zł
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Zміст статті</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#what-is-zasilek" className="text-blue-600 hover:text-blue-800 transition-colors">Що таке zasiłek chorobowy</a></li>
              <li><a href="#who-entitled" className="text-blue-600 hover:text-blue-800 transition-colors">Хто має право на лікарняні</a></li>
              <li><a href="#calculation-method" className="text-blue-600 hover:text-blue-800 transition-colors">Метод розрахунку</a></li>
              <li><a href="#rates-limits" className="text-blue-600 hover:text-blue-800 transition-colors">Ставки та ліміти 2025</a></li>
              <li><a href="#application-process" className="text-blue-600 hover:text-blue-800 transition-colors">Процедура отримання</a></li>
              <li><a href="#practical-examples" className="text-blue-600 hover:text-blue-800 transition-colors">Практичні приклади</a></li>
              <li><a href="#tips-advice" className="text-blue-600 hover:text-blue-800 transition-colors">Поради та рекомендації</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none space-y-6">
            <h2 id="what-is-zasilek" className="group">
              <a href="#what-is-zasilek" className="flex items-center hover:text-blue-600 transition-colors">
                Що таке zasiłek chorobowy (лікарняні виплати)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>
            
            <p>
              <strong>Zasiłek chorobowy</strong> (лікарняні виплати) - це świadczenie pieniężne (грошова виплата) 
              з ZUS для підприємців JDG, які тимчасово nie могут pracować через chorobę (хворобу).
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-4">🔤 Словник польських термінів:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Zasiłek chorobowy</strong> - лікарняні виплати, допомога по хворобі</li>
                <li><strong>Niezdolność do pracy</strong> - непрацездатність</li>
                <li><strong>Zwolnienie lekarskie</strong> - лікарняний лист</li>
                <li><strong>Podstawa wymiaru</strong> - база для розрахунку</li>
                <li><strong>Okres choroby</strong> - період хвороби</li>
                <li><strong>Składka chorobowa</strong> - внесок на випадок хвороби</li>
                <li><strong>Wniosek o zasiłek</strong> - заява на лікарняні</li>
              </ul>
            </div>

            <h3>Zasady funkcjonowania:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-gray-400">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">📋</span>
                    Obowiązkowe ubezpieczenie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Все підприємці JDG автоматично objęci ubezpieczeniem chorobowym 
                    при сплаті składek ZUS.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">💰</span>
                    Wysokość świadczenia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    80% z podstawy składek ZUS, ale не менш ніж мінімальна stawka 
                    та не більш ніж максимальна.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-600">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">📅</span>
                    Okres wypłaty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Максимум 182 дні в kalendarzowym roku для той самої choroby 
                    або 270 днів при gruźlicy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">🏥</span>
                    Warunki otrzymania
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Potrzebne zwolnienie lekarskie та regularne opłacanie 
                    składek chorobowych do ZUS.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 id="who-entitled" className="group">
              <a href="#who-entitled" className="flex items-center hover:text-blue-600 transition-colors">
                Kto ma prawo do zasiłku chorobowego (хто має право на лікарняні)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Prawo do zasiłku chorobowego mają osoby prowadzące JDG, które spełniają 
              określone warunki (певні умови) dotyczące składek и okresu działalności.
            </p>

            <h3>Warunki podstawowe:</h3>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">✅</span>
                  Opłacanie składek chorobowych
                </h4>
                <p className="text-gray-700 text-sm">
                  Регулярне сплачування składek chorobowych do ZUS. Ставка: 2,45% від основи składок.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">⏰</span>
                  Okres składkowy i wyczekiwania
                </h4>
                <p className="text-gray-700 text-sm">
                  Мінімум 30 днів składek + 30 днів период очікування для нових підприємців.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">🏥</span>
                  Zwolnienie lekarskie
                </h4>
                <p className="text-gray-700 text-sm">
                  Официальне zwolnienie od lekarza з указанням okresu niezdolności do pracy.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">🇺🇦</span>
                  Ukraińcy w Polsce
                </h4>
                <p className="text-gray-700 text-sm">
                  Українці з kartą pobytu або ochroną czasową мають такі самі права як польські obywatele.
                </p>
              </div>
            </div>

            <h2 id="calculation-method" className="group">
              <a href="#calculation-method" className="flex items-center hover:text-blue-600 transition-colors">
                Metoda obliczania zasiłku (метод розрахунку лікарняних)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Kwota zasiłku chorobowego залежить від podstawy składek ZUS та liczby dni niezdolności do pracy.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">📊 Formuła obliczania:</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-lg font-mono text-center">
                    <strong>Zasiłek dzienny = (Podstawa składek ZUS × 30 dni) × 80%</strong>
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">Podstawa miesięczna</p>
                    <p className="text-gray-600">Основа складок ZUS</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">Podstawa dzienna</p>
                    <p className="text-gray-600">Podstawa ÷ 30 днів</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">80% z podstawy</p>
                    <p className="text-gray-600">Ostateczna stawka dzienna</p>
                  </div>
                </div>
              </div>
            </div>

            <h3>Przykłady różnych podstaw składek:</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Podstawa ZUS (miesiąc)</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Podstawa dzienna</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">80% dziennie</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tydzień choroby</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">4,242.30 zł (minimum)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">141,41 zł</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">113,13 zł</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">791,91 zł</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">6,000 zł</td>
                    <td className="px-4 py-3 text-sm text-gray-700">200,00 zł</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">151,79 zł</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">1,062,53 zł</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">8,000 zł</td>
                    <td className="px-4 py-3 text-sm text-gray-700">266,67 zł</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">151,79 zł (max)</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">1,062,53 zł</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">15,000 zł</td>
                    <td className="px-4 py-3 text-sm text-gray-700">500,00 zł</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">151,79 zł (max)</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">1,062,53 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="rates-limits" className="group">
              <a href="#rates-limits" className="flex items-center hover:text-blue-600 transition-colors">
                Stawki i limity 2025 (ставки та ліміти 2025)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">💰 Oficjalne stawki 2025:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Kwota minimalna:</strong> 19,40 zł/день (при najniższej podstawie)</li>
                <li><strong>Kwota maksymalna:</strong> 151,79 zł/день (próg górny)</li>
                <li><strong>Podstawa minimalna:</strong> 4,242.30 zł/міс.</li>
                <li><strong>Podstawa maksymalna:</strong> для zasiłku nie istnieje prawdziwy limit</li>
              </ul>
            </div>

            <h3>Szczegóły limitów:</h3>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">📉 Minimum dzienne (19,40 zł)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Розраховується від мінімальної основи ZUS (4,242.30 zł):
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                  4,242.30 ÷ 30 × 80% = 113,13 zł → обмежено до 19,40 zł minimum
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">📈 Maksimum dzienne (151,79 zł)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Maksymalna stawka dzienna незалежно від wysokości podstawy składek:
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                  Nawet przy основі 20,000 zł → maksimum 151,79 zł/день
                </div>
              </div>
            </div>

            <h2 id="application-process" className="group">
              <a href="#application-process" className="flex items-center hover:text-blue-600 transition-colors">
                Procedura получення zasiłku (процедура отримання лікарняних)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                  Otrzymanie zwolnienia lekarskiego
                </h3>
                <ul className="text-gray-700 space-y-2 ml-11">
                  <li>• Wizyta u lekarza при появі choroby</li>
                  <li>• Получення zwolnienia lekarskiego (e-ZLA або papierowe)</li>
                  <li>• Sprawdzenie poprawności дат та danych osobowych</li>
                  <li>• Zachowanie копії dokumentu na własne potrzeby</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                  Złożenie wniosku do ZUS
                </h3>
                <ul className="text-gray-700 space-y-2 ml-11">
                  <li>• Wypełnienie формуляра ZUS ZAS</li>
                  <li>• Dołączenie zwolnienia lekarskiego</li>
                  <li>• Podanie numeru rachunku bankowego</li>
                  <li>• Złożenie w terminie: <strong>do 12 miesięcy</strong> od zakończenia choroby</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                  Rozpatrzenie i wypłata
                </h3>
                <ul className="text-gray-700 space-y-2 ml-11">
                  <li>• ZUS ma 30 днів на rozpatrzenie wniosku</li>
                  <li>• Możliwe wezwanie на uzupełnienie документacji</li>
                  <li>• Wypłata na указаний rachunek bankowy</li>
                  <li>• Otrzymanie decyzji о przyznaniu або odmowie</li>
                </ul>
              </div>
            </div>

            <h2 id="practical-examples" className="group">
              <a href="#practical-examples" className="flex items-center hover:text-blue-600 transition-colors">
                Praktyczne przykłady rozliczeń (практичні приклади розрахунків)
                <span className="ml-2 opacity-0 group-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4">💼 Przykład 1: Projektant graficzny</h3>
                <div className="space-y-3">
                  <p><strong>Sytuacja:</strong> JDG od 2 lat, podstawa ZUS 4,242.30 zł, choroba 10 dni</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p><strong>Podstawa dzienna:</strong> 4,242.30 ÷ 30 = 141,41 zł</p>
                    <p><strong>80% z podstawy:</strong> 141,41 × 80% = 113,13 zł/день</p>
                    <p><strong>Ograniczenie do minimum:</strong> max(113,13; 19,40) = 113,13 zł</p>
                    <p><strong>Zasiłek za 10 dni:</strong> 113,13 × 10 = <span className="text-gray-900 font-bold">1,131,30 zł</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4">💻 Przykład 2: Programista</h3>
                <div className="space-y-3">
                  <p><strong>Sytuacja:</strong> JDG 3 lata, podstawa ZUS 12,000 zł, choroba 14 dni</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p><strong>Podstawa dzienna:</strong> 12,000 ÷ 30 = 400,00 zł</p>
                    <p><strong>80% z podstawy:</strong> 400,00 × 80% = 320,00 zł</p>
                    <p><strong>Ograniczenie do maksimum:</strong> min(320,00; 151,79) = 151,79 zł</p>
                    <p><strong>Zasiłek za 14 dni:</strong> 151,79 × 14 = <span className="text-gray-900 font-bold">2,125,06 zł</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4">🏢 Przykład 3: Nowy przedsiębiorca</h3>
                <div className="space-y-3">
                  <p><strong>Sytuacja:</strong> JDG 2 miesiące, minimalne składki, choroba 5 dni</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p><strong>Okres wyczekiwania:</strong> 30 dni = nie ma prawa do zasiłku</p>
                    <p><strong>Możliwość:</strong> po 30 dniach składek + 30 dni wyczekiwania</p>
                    <p><strong>Zasiłek:</strong> <span className="text-gray-900 font-bold">0,00 zł</span> (zbyt wczesny okres)</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="tips-advice" className="group">
              <a href="#tips-advice" className="flex items-center hover:text-blue-600 transition-colors">
                Wskazówki i porady (поради та рекомендації)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                <h4 className="font-semibold text-gray-800 mb-2">✅ Dobre praktyki:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Regularne opłacanie składek chorobowych (2,45% od podstawy ZUS)</li>
                  <li>• Zachowanie wszystkich zwolnień lekarskich przez minimum 5 років</li>
                  <li>• Składanie wniosków як найшвидше після zakończenia choroby</li>
                  <li>• Prowadzenie ewidencji всіх períods chorobowych</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-500 p-4">
                <h4 className="font-semibold text-gray-800 mb-2">📱 Przydatne narzędzia:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Platforma ZUS:</strong> składanie wniosków online</li>
                  <li>• <strong>e-ZLA:</strong> elektroniczne zwolnienia lekarskie</li>
                  <li>• <strong>Aplikacja mobilna ZUS:</strong> sprawdzanie statusu wniosków</li>
                  <li>• <strong>Kalkulator:</strong> szybkie obliczanie zasiłku</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-600 p-4">
                <h4 className="font-semibold text-gray-800 mb-2">⚠️ Częste błędy:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Nieopłacanie składek chorobowych (утрата prawa do zasiłku)</li>
                  <li>• Zapomnienie о okresie wyczekiwania dla nowych działalności</li>
                  <li>• Składanie wniosków po upływie 12 месяців (przedawnienie)</li>
                  <li>• Błędy we wniosku ZAS (opóźnienie wypłaty)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white mt-16">
              <h2 className="text-2xl font-bold mb-4">Потрібна допомога z rozliczaniem ZUS?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Професійний <Link href="https://freelancer.org.pl/" className="text-white underline hover:text-blue-200 transition-colors">бухгалтер в Польщі</Link> допоможе правильно obliczyć zasiłki та przeprowadzити wszystкі formalności з ZUS
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/blog/">
                  Więcej artykułów о ZUS
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
                  <Link href="/blog/skladka-zdrowotna-guide/" className="block">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      Składka zdrowotna в Польщі 2025
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Повний гід з внеску на охорону здоров'я для українських підприємців
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
                      Як відкрити JDG в Польщі
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Покрокова інструкція реєстрації індивідуального підприємництва
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

      {/* Simple Calculator Script */}
      <Script id="zasilek-calculator">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            const podstawaInput = document.getElementById('podstawa-zus');
            const dniInput = document.getElementById('dni-choroby');
            
            function calculate() {
              const podstawa = parseFloat(podstawaInput.value) || 0;
              const dni = parseInt(dniInput.value) || 0;
              
              if (podstawa > 0 && dni > 0) {
                const podstawaDzienna = podstawa / 30;
                const osiemdziesiatProcent = Math.min(podstawaDzienna * 0.8, 151.79);
                const maxedRate = Math.max(osiemdziesiatProcent, 19.40);
                const suma = maxedRate * dni;
                
                document.getElementById('podstawa-dzienna').textContent = podstawaDzienna.toFixed(2);
                document.getElementById('osiemdziesiat-procent').textContent = maxedRate.toFixed(2);
                document.getElementById('suma-zasilek').textContent = suma.toFixed(2);
              } else {
                document.getElementById('podstawa-dzienna').textContent = '—';
                document.getElementById('osiemdziesiat-procent').textContent = '—';
                document.getElementById('suma-zasilek').textContent = '—';
              }
            }
            
            podstawaInput.addEventListener('input', calculate);
            dniInput.addEventListener('input', calculate);
          });
        `}
      </Script>
    </>
  )
}
