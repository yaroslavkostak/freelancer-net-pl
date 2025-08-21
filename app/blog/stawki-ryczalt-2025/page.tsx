import Link from 'next/link'
import { DynamicYear } from '@/components/dynamic-year'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export default function StawkiRyczaltGuidePage() {
  return (
    <>
      <Script
        id="stawki-ryczalt-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Stawki ryczałtu 2025 в Польщі: нові ставки та розрахунки для українців",
            "description": "Актуальні stawki ryczałtu ewidencjonowanego на 2025 рік в Польщі для українських підприємців. Повна таблиця ставок, умови та практичні приклади розрахунків.",
            "image": "https://freelancer.org.pl/images/stawki-ryczalt-2025-og.jpg",
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
              "@id": "https://freelancer.org.pl/blog/stawki-ryczalt-2025"
            },
            "articleSection": "Податки",
            "keywords": "stawki ryczałtu 2025, рichałt ewidencjonowany, JDG ryczałt, українці польща, податки 2025, paušalny podatok",
            "wordCount": 2700,
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Stawki ryczałtu 2025</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Stawki ryczałtu 2025 в Польщі: нові ставки та розрахунки для українців
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>📅 27 січня 2025</span>
              <span>⏱️ 12 хв читання</span>
              <span>👁️ 5,123 переглядів</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Актуальні stawki ryczałtu ewidencjonowanego на 2025 рік в Польщі для українських підприємців. 
              Повна таблиця ставок, умови застосування та практичні приклади розрахунків податку.
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
                <h3 className="text-sm font-medium text-gray-800">📊 Główne stawki ryczałtu 2025:</h3>
                <div className="mt-2 text-sm text-gray-700">
                  <p><strong>Najniższa:</strong> 2% dla obrotu towarami | <strong>Najwyższa:</strong> 17% dla wolnych zawodów</p>
                  <p><strong>Próg dochodowy:</strong> maksimum 2,000,000 zł rocznie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Zmiст статті</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#what-is-ryczalt" className="text-blue-600 hover:text-blue-800 transition-colors">Що таке ryczałt ewidencjonowany</a></li>
              <li><a href="#rates-table-2025" className="text-blue-600 hover:text-blue-800 transition-colors">Таблиця stawek 2025</a></li>
              <li><a href="#who-can-use" className="text-blue-600 hover:text-blue-800 transition-colors">Хто може використовувати</a></li>
              <li><a href="#limits-conditions" className="text-blue-600 hover:text-blue-800 transition-colors">Ліміти та умови</a></li>
              <li><a href="#calculation-examples" className="text-blue-600 hover:text-blue-800 transition-colors">Приклади розрахунків</a></li>
              <li><a href="#advantages-disadvantages" className="text-blue-600 hover:text-blue-800 transition-colors">Переваги та недоліки</a></li>
              <li><a href="#comparison-other-forms" className="text-blue-600 hover:text-blue-800 transition-colors">Порівняння з іншими формами</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none space-y-6">
            <h2 id="what-is-ryczalt" className="group">
              <a href="#what-is-ryczalt" className="flex items-center hover:text-blue-600 transition-colors">
                Що таке ryczałt ewidencjonowany (паушальний податок)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>
            
            <p>
              <strong>Ryczałt ewidencjonowany</strong> (паушальний податок) - це спрощена forma opodatkowania 
              для підприємців JDG в Польщі, при якій podatek розраховується від przychodów (доходів) 
              за фіксованими stawkami (ставками).
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-4">🔤 Słownik polskich terminów:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Ryczałt ewidencjonowany</strong> - паушальний податок з обліку</li>
                <li><strong>Przychody</strong> - доходи (валові надходження)</li>
                <li><strong>Stawka ryczałtu</strong> - ставка паушального податку</li>
                <li><strong>Ewidencja przychodów</strong> - облік доходів</li>
                <li><strong>Próg dochodowy</strong> - доходний ліміт</li>
                <li><strong>Rodzaj działalności</strong> - вид діяльності</li>
                <li><strong>Formularz PIT-28</strong> - декларація ryczałtu</li>
              </ul>
            </div>

            <h3>Główne zasady funkcjonowania:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-gray-400">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">📊</span>
                    Proste rozliczenia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Podatek obliczany wyłącznie від przychodów bez odliczania 
                    kosztów uzyskania przychodu.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">📝</span>
                    Ewidencja przychodów
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Obowiązek prowadzenia tylko prostej ewidencji przychodów, 
                    bez komplikowanej księgowości.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-600">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">🎯</span>
                    Stawki zależne od działalności
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Różne stawki podatku (2%-17%) залежно від rodzaju 
                    prowadzonej działalności gospodarczej.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">💰</span>
                    Brak VAT poniżej progu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    При przychodach poniżej 200,000 zł/рік 
                    zwolnienie z obowiązku VAT.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 id="rates-table-2025" className="group">
              <a href="#rates-table-2025" className="flex items-center hover:text-blue-600 transition-colors">
                Tabela stawek ryczałtu 2025 (таблиця ставок 2025)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Stawki ryczałtu залежать від rodzaju działalności (виду діяльності) 
              та są określone в ustawie o podatku dochodowym.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Rodzaj działalności</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Stawka</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Przykłady</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Obrót towarami i materiałami</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">2%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Sklep, handel, sprzedaż</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Działalność wytwórcza</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">3%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Produkcja, rzemiosło</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Usługi ogólne</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">5,5%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Fryzjer, mechanik, sprzątanie</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Działalność w zakresie sztuki</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">8,5%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Grafik, fotograf, muzyk</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Świadczenie określonych usług</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">10%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">IT, marketing, doradztwo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Działalność gastronomiczna</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">8,5%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Restauracja, catering</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Wolne zawody</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">17%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Lekarz, prawnik, architekt</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Szczegółowe rodzaje działalności:</h3>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">2% - Obrót towarami</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Sprzedaż towarów oraz materiałów (за винятком sprzedaży publikacji):
                </p>
                <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                  <li>Handel detaliczny i hurtowy</li>
                  <li>Sprzedaż odzieży, обуви, elektronики</li>
                  <li>Działalność e-commerce (sklepy online)</li>
                  <li>Import/export towarów</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">5,5% - Większość usług</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Najczęstsza stawka для usług nie objętych innymi stawkami:
                </p>
                <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                  <li>Usługi kosmetyczne i fryzjerskie</li>
                  <li>Naprawy i serwis (auto, AGD)</li>
                  <li>Usługi sprzątania i porządkowe</li>
                  <li>Transport i logistyka</li>
                  <li>Usługi remontowo-budowlane</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">17% - Wolne zawody</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Najwyższa stawka для działalności wymagającej специальних kwalifikacji:
                </p>
                <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                  <li>Usługi medyczne (lekarz, dentysta)</li>
                  <li>Usługi prawne (adwokat, radca prawny)</li>
                  <li>Usługi inżynierskie (architekt, konstruktor)</li>
                  <li>Usługi księgowe i audytorskie</li>
                </ul>
              </div>
            </div>

            <h2 id="who-can-use" className="group">
              <a href="#who-can-use" className="flex items-center hover:text-blue-600 transition-colors">
                Kto może stosować ryczałt (хто може використовувати)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Ryczałt ewidencjonowany могут stosować większość підприємців JDG, 
              але istnieją pewne ograniczenia (обмеження) і wykluczenia.
            </p>

            <h3>Warunki podstawowe:</h3>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">✅</span>
                  Kto może używać ryczałtu
                </h4>
                <ul className="text-gray-700 space-y-1 text-sm list-disc ml-5">
                  <li>Większość підприємців JDG</li>
                  <li>Przychody do 2,000,000 zł rocznie</li>
                  <li>Działalność wymieniona w przepisach</li>
                  <li>Ukraińcy z kartą pobytu lub ochroną czasową</li>
                  <li>Rozpoczynający działalność (bez ograniczeń czasowych)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">❌</span>
                  Wykluczenia z ryczałtu
                </h4>
                <ul className="text-gray-700 space-y-1 text-sm list-disc ml-5">
                  <li>Działalność wytwarzania wyrobów podlegających акцизі</li>
                  <li>Obrót paliwami, alkoholem, tytoniem</li>
                  <li>Niektóre usługi finansowe</li>
                  <li>Działalność jako wspólnik spółki</li>
                  <li>Przy przekroczeniu progu 2 mln zł przychodów</li>
                </ul>
              </div>
            </div>

            <h2 id="limits-conditions" className="group">
              <a href="#limits-conditions" className="flex items-center hover:text-blue-600 transition-colors">
                Limity i warunki 2025 (ліміти та умови 2025)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">💰 Główne limity 2025:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Próg przychodowy:</strong> 2,000,000 zł/рік (без змін від 2024, детальніше про <Link href="/blog/tax-changes-2025/" className="text-blue-600 hover:text-blue-800 transition-colors">податкові зміни 2025</Link>)</li>
                <li><strong>Zwolnienie z VAT:</strong> do 200,000 zł/рік</li>
                <li><strong>Rejestracja VAT:</strong> obowiązkowa ponad 200,000 zł</li>
                <li><strong>Składki ZUS:</strong> według wyboru - minimalne lub 19,52% z dochodu</li>
              </ul>
            </div>

            <h3>Dodatkowe warunki:</h3>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">📝 Obowiązki ewidencyjne</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
                  <li>Prowadzenie ewidencji przychodów</li>
                  <li>Wystawianie paragonów/faktur</li>
                  <li>Przechowywanie dokumentów przez 5 років</li>
                  <li>Złożenie rocznej deklaracji PIT-28</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">💸 Składki i inne podatki</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
                  <li>Składki ZUS według wybranej podstawy</li>
                  <li>Składka zdrowotna 9% (можливість odliczenia)</li>
                  <li>VAT przy przekroczeniu progu 200,000 zł</li>
                  <li>Podatek od nieruchomości (jeśli dotyczy)</li>
                </ul>
              </div>
            </div>

            <h2 id="calculation-examples" className="group">
              <a href="#calculation-examples" className="flex items-center hover:text-blue-600 transition-colors">
                Przykłady obliczeń 2025 (приклади розрахунків 2025)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4">🛒 Przykład 1: Sklep internetowy (2%)</h3>
                <div className="space-y-3">
                  <p><strong>Sytuacja:</strong> Sprzedaż odzieży online, przychód 150,000 zł/рік</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p><strong>Przychód roczny:</strong> 150,000 zł</p>
                    <p><strong>Stawka ryczałtu:</strong> 2%</p>
                    <p><strong>Podatek ryczałt:</strong> 150,000 × 2% = <span className="text-gray-900 font-bold">3,000 zł</span></p>
                    <p><strong>VAT:</strong> zwolniony (poniżej 200,000 zł)</p>
                    <p><strong>Miesięcznie:</strong> 3,000 ÷ 12 = 250 zł</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4">💻 Przykład 2: Usługi IT (10%)</h3>
                <div className="space-y-3">
                  <p><strong>Sytuacja:</strong> Programista, przychód 300,000 zł/рік</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p><strong>Przychód roczny:</strong> 300,000 zł</p>
                    <p><strong>Stawka ryczałtu:</strong> 10%</p>
                    <p><strong>Podatek ryczałt:</strong> 300,000 × 10% = <span className="text-gray-900 font-bold">30,000 zł</span></p>
                    <p><strong>VAT:</strong> обов'язковий (ponad 200,000 zł)</p>
                    <p><strong>Miesięcznie:</strong> 30,000 ÷ 12 = 2,500 zł + VAT</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4">🏥 Przykład 3: Lekarz dentysta (17%)</h3>
                <div className="space-y-3">
                  <p><strong>Sytuacja:</strong> Prywatna praktyka lekarska, przychód 500,000 zł/рік</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p><strong>Przychód roczny:</strong> 500,000 zł</p>
                    <p><strong>Stawka ryczałtu:</strong> 17%</p>
                    <p><strong>Podatek ryczałt:</strong> 500,000 × 17% = <span className="text-gray-900 font-bold">85,000 zł</span></p>
                    <p><strong>VAT:</strong> często zwolniony (usługi medyczne)</p>
                    <p><strong>Miesięcznie:</strong> 85,000 ÷ 12 = 7,083 zł</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="advantages-disadvantages" className="group">
              <a href="#advantages-disadvantages" className="flex items-center hover:text-blue-600 transition-colors">
                Zalety i wady ryczałtu (переваги та недоліки)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2 text-gray-600">✅</span>
                  Zalety ryczałtu
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Prostota rozliczeń</strong> - nie trzeba odliczać kosztów</li>
                  <li>• <strong>Niskie stawki</strong> - особливо dla handlu (2%)</li>
                  <li>• <strong>Przewidywalność</strong> - łatwe planowanie podatków</li>
                  <li>• <strong>Mniej formalności</strong> - prosta ewidencja</li>
                  <li>• <strong>Zwolnienie z VAT</strong> - do 200,000 zł przychodów</li>
                  <li>• <strong>Brak księgowości</strong> - tylko ewidencja przychodów</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2 text-gray-600">❌</span>
                  Wady ryczałtu
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Brak odliczania kosztów</strong> - podatek od pełnych przychodów</li>
                  <li>• <strong>Ograniczenia działalności</strong> - nie wszystkie rodzaje</li>
                  <li>• <strong>Wysokie stawki</strong> - dla niektórych usług (17%)</li>
                  <li>• <strong>Brak możliwości rozliczenia strat</strong> з innymi dochodami</li>
                  <li>• <strong>Limit przychodów</strong> - maksimum 2 mln zł</li>
                  <li>• <strong>Problemy z VAT</strong> - przy współpracy B2B</li>
                </ul>
              </div>
            </div>

            <h2 id="comparison-other-forms" className="group">
              <a href="#comparison-other-forms" className="flex items-center hover:text-blue-600 transition-colors">
                Porównanie z innymi formami (порівняння з іншими формами)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Forma opodatkowania</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Stawka podatku</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Koszty</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Księgowość</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Ryczałt ewidencjonowany</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2% - 17%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Nie odlicza się</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Ewidencja przychodów</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Podatek liniowy</td>
                    <td className="px-4 py-3 text-sm text-gray-700">19%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Odlicza się</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Księga przychodów</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Skala podatkowa</td>
                    <td className="px-4 py-3 text-sm text-gray-700">12% lub 32%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Odlicza się</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Księga przychodów</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Kiedy wybrać ryczałt:</h3>

            <div className="space-y-4">
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                <h4 className="font-semibold text-gray-800 mb-2">✅ Ryczałt opłaca się gdy:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Niska stawka ryczałtu (2%, 3%, 5,5%)</li>
                  <li>• Niewielkie koszty działalności</li>
                  <li>• Chcesz prostoty w rozliczeniach</li>
                  <li>• Stabilne przychody poniżej 2 mln zł</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-500 p-4">
                <h4 className="font-semibold text-gray-800 mb-2">❌ Lepiej wybrać inne formy gdy:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Wysokie koszty działalności (ponad 50% przychodów)</li>
                  <li>• Wysoka stawka ryczałtu (17%)</li>
                  <li>• Potrzebujesz odliczenia VAT</li>
                  <li>• Przychody mogą przekroczyć 2 mln zł</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white mt-16">
              <h2 className="text-2xl font-bold mb-4">Потрібна консультація щодо wyboru formy opodatkowania?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Професійний <Link href="https://freelancer.org.pl/" className="text-white underline hover:text-blue-200 transition-colors">бухгалтер в Польщі</Link> допоможе выбрати najlepszą formę opodatkowania та оптимізувати obciążenia podatkowe
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/tax-calculator/">
                  Kalkulatory podatkowe
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
