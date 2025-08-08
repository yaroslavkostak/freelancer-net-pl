import Link from 'next/link'
import { DynamicYear } from '@/components/dynamic-year'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export default function BabcioweGuidePage() {
  return (
    <>
      <Script
        id="babciowe-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Babciowe в Польщі 2025: як подати wniosek та отримати допомогу українцям",
            "description": "Повна інструкція про babciowe (активне батьківство) в Польщі для українців. Умови, суми, документи та покрокова процедура подачі wniosek o babciowe.",
            "image": "https://freelancer.org.pl/images/babciowe-guide-og.jpg",
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
              "@id": "https://freelancer.org.pl/blog/babciowe-guide"
            },
            "articleSection": "Соціальна допомога",
            "keywords": "babciowe польща, aktywne rodzicielstwo, wniosek o babciowe, українці польща, соціальна допомога, świadczenie",
            "wordCount": 2600,
            "timeRequired": "PT11M",
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Babciowe</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Babciowe в Польщі 2025: як подати wniosek та отримати допомогу українцям
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>📅 27 січня 2025</span>
              <span>⏱️ 11 хв читання</span>
              <span>👁️ 3,662 переглядів</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Повна інструкція про babciowe (активне батьківство) в Польщі для українців. 
              Дізнайтеся про умови, суми виплат, необхідні документи та як правильно подати wniosek o babciowe.
            </p>
          </div>

          {/* Important Alert */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">💰 Сума babciowe у 2025 році:</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p><strong>1,500 zł</strong> на дитину віком 12-35 місяців при наданні opieki żłobkowej (ясельного догляду)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Зміст статті</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#what-is-babciowe" className="text-blue-600 hover:text-blue-800 transition-colors">Що таке babciowe</a></li>
              <li><a href="#who-can-apply" className="text-blue-600 hover:text-blue-800 transition-colors">Хто може подавати заяву</a></li>
              <li><a href="#conditions" className="text-blue-600 hover:text-blue-800 transition-colors">Умови отримання</a></li>
              <li><a href="#required-documents" className="text-blue-600 hover:text-blue-800 transition-colors">Необхідні документи</a></li>
              <li><a href="#application-process" className="text-blue-600 hover:text-blue-800 transition-colors">Процес подачі wniosek</a></li>
              <li><a href="#payment-details" className="text-blue-600 hover:text-blue-800 transition-colors">Суми та терміни виплат</a></li>
              <li><a href="#practical-tips" className="text-blue-600 hover:text-blue-800 transition-colors">Практичні поради</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none space-y-6">
            <h2 id="what-is-babciowe" className="group">
              <a href="#what-is-babciowe" className="flex items-center hover:text-blue-600 transition-colors">
                Що таке babciowe (активне батьківство)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>
            
            <p>
              <strong>Babciowe</strong> (офіційна назва: <strong>Aktywne Rodzicielstwo</strong> - активне батьківство) - 
              це державна програма фінансової підтримки батьків у Польщі, яка допомагає покрити витрати 
              на догляд за дітьми віком від 12 до 35 місяців.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">🔤 Словник польських термінів:</h3>
              <ul className="space-y-2 text-blue-700">
                <li><strong>Babciowe</strong> - народна назва програми (від слова "babcia" - бабуся)</li>
                <li><strong>Aktywne Rodzicielstwo</strong> - офіційна назва програми</li>
                <li><strong>Świadczenie</strong> - соціальна виплата/допомога</li>
                <li><strong>Wniosek</strong> - заява/клопотання</li>
                <li><strong>Żłobek</strong> - ясла (для дітей до 3 років)</li>
                <li><strong>Dzienny opiekun</strong> - денний опікун</li>
                <li><strong>Niania</strong> - няня</li>
              </ul>
            </div>

            <h3>Мета програми babciowe:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">👶</span>
                    Wsparcie rodzin (підтримка родин)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Фінансова допомога батькам для покриття kosztów opieki (витрат на догляд) 
                    за дитиною у професійних закладах.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">💼</span>
                    Powrót do pracy (повернення до роботи)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Можливість для батьків швидше повернутися до aktywności zawodowej (трудової діяльності) 
                    після народження дитини.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">🏛️</span>
                    Rozwój infrastruktury (розвиток інфраструктури)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Стимулювання rozwoju żłobków та інших форм opieki nad dziećmi 
                    (догляду за дітьми) по всій Польщі.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2">📈</span>
                    Demografia (демографія)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Поліпшення demograficznej sytuacji (демографічної ситуації) 
                    та zarojenienie wskaźnika urodzeń (підвищення народжуваності).
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 id="who-can-apply" className="group">
              <a href="#who-can-apply" className="flex items-center hover:text-blue-600 transition-colors">
                Хто може подавати wniosek o babciowe
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Programa babciowe доступна для різних категорій mieszkańców Polski (мешканців Польщі), 
              включаючи українців, які мають відповідний status prawny (правовий статус).
            </p>

            <h3>Категорії osób uprawnionych (уповноважених осіб):</h3>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <span className="mr-2">🇵🇱</span>
                  Obywatele Polski (громадяни Польщі)
                </h4>
                <p className="text-green-700 text-sm">
                  Всі польські громадяни, незалежно від місця zamieszkania (проживання), 
                  мають автоматичне право на babciowe.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <span className="mr-2">🇺🇦</span>
                  Ukraińcy z kartą pobytu
                </h4>
                <p className="text-blue-700 text-sm">
                  Українці з <strong>kartą pobytu</strong> (картка побуту): czasowy, stały, 
                  lub długoterminowego rezydenta UE мають prawo do świadczenia.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                  <span className="mr-2">🏠</span>
                  Beneficjenci ochrony czasowej
                </h4>
                <p className="text-purple-700 text-sm">
                  Українці з <strong>ochroną czasową</strong> (тимчасовий захист) також мають право 
                  подавати wniosek o babciowe від 2022 року.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                  <span className="mr-2">🌍</span>
                  Obywatele UE i innych krajów
                </h4>
                <p className="text-orange-700 text-sm">
                  Громадяни ЄС та інших держав з odpowiednimi dokumentami 
                  (відповідними документами) для legalnego pobytu.
                </p>
              </div>
            </div>

            <h2 id="conditions" className="group">
              <a href="#conditions" className="flex items-center hover:text-blue-600 transition-colors">
                Warunki otrzymania babciowe (умови отримання)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Для отримання babciowe необхідно spełnić kilka warunków (виконати кілька умов), 
              які стосуються як дитини, так і form opieki (форм догляду).
            </p>

            <h3>Основні warunki (умови):</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Критерій</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Вимога</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Пояснення</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Wiek dziecka</td>
                    <td className="px-4 py-3 text-sm text-gray-700">12-35 місяців</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Від 1 року до майже 3 років</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Forma opieki</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Żłobek, club, niania</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Професійні форми догляду</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Czas opieki</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Мінімум 20 год/тиждень</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Regularność korzystania</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Miejsce zamieszkania</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Polska</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Stałe lub czasowe</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Status prawny</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Legalny pobyt</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Obywatelstwo/karta pobytu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Akceptowane formy opieki (прийнятні форми догляду):</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">🏫 Żłobek (ясла)</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Publiczne або prywatne żłobki</li>
                  <li>• Wpisane do ewidencji gminy</li>
                  <li>• Професійний персонал</li>
                  <li>• Najczęstsza forma opieki</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">👨‍👩‍👧‍👦 Klub malucha (клуб малюка)</h4>
                <ul className="text-sm text-pink-700 space-y-1">
                  <li>• Для дітей 1-3 роки</li>
                  <li>• Do 30 dітей w grupie</li>
                  <li>• Гнучкий графік</li>
                  <li>• Często w okolicy miejsca zamieszkania</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">👩‍🏫 Dzienny opiekun (денний опікун)</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Licencjonowany opiekun</li>
                  <li>• Do 5 дітей jednocześnie</li>
                  <li>• Індивідуальний підхід</li>
                  <li>• Часто w domu opiekuna</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">👩‍💼 Niania (няня)</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Z wpisem do ewidencji</li>
                  <li>• Profesjonalne wykształcenie</li>
                  <li>• Opieka w domu rodziny lub niani</li>
                  <li>• Najbardziej elastyczna forma</li>
                </ul>
              </div>
            </div>

            <h2 id="required-documents" className="group">
              <a href="#required-documents" className="flex items-center hover:text-blue-600 transition-colors">
                Dokumenty potrzebne do wniosku (необхідні документи)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              Lista dokumentów залежить від вашої sytuacji prawnej (правової ситуації) 
              та wybranej formy opieki (обраної форми догляду).
            </p>

            <h3>Podstawowe dokumenty (основні документи):</h3>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">📋 Dla wszystkich wnioskodawców:</h4>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• <strong>Wniosek o świadczenie</strong> - заповнена заява</li>
                  <li>• <strong>Akt urodzenia dziecka</strong> - свідоцтво народження дитини</li>
                  <li>• <strong>Dokument tożsamości</strong> - документ, що посвідчує особу</li>
                  <li>• <strong>Numer PESEL dziecka</strong> - польський номер дитини</li>
                  <li>• <strong>Zaświadczenie z żłobka/opiekuna</strong> - довідка з ясел/опікуна</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h4 className="font-semibold text-green-800 mb-2">🇺🇦 Додатково для українців:</h4>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• <strong>Karta pobytu</strong> або документ тимчасового захисту</li>
                  <li>• <strong>Numer PESEL</strong> батька/матері (якщо є)</li>
                  <li>• <strong>Poświadczenie tłumaczenia</strong> документів (якщо потрібно)</li>
                  <li>• <strong>Zaświadczenie o zamieszkaniu</strong> - довідка про проживання</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                <h4 className="font-semibold text-purple-800 mb-2">🏛️ Dokumenty od dostawcy opieki:</h4>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• <strong>Umowa</strong> з żłobkiem/opiekunem - договір</li>
                  <li>• <strong>Regulamin</strong> закладу - правила закладу</li>
                  <li>• <strong>Cennik usług</strong> - прайс послуг</li>
                  <li>• <strong>Potwierdzenie wpisania</strong> do ewidencji gminy</li>
                </ul>
              </div>
            </div>

            <h2 id="application-process" className="group">
              <a href="#application-process" className="flex items-center hover:text-blue-600 transition-colors">
                Proces składania wniosku (процес подачі заяви)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                  Przygotowanie dokumentów (підготовка документів)
                </h3>
                <ul className="text-blue-700 space-y-2 ml-11">
                  <li>• Zbierjcie wszystkie wymagane dokumenty (зберіть усі потрібні документи)</li>
                  <li>• Sprawdźcie актуальность karty pobytu (перевірте актуальність карти побуту)</li>
                  <li>• Upewnijcie się, że dziecko ma PESEL (упевніться, що дитина має PESEL)</li>
                  <li>• Получите zaświadczenie z żłobka o przyjęciu dziecka</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-800 mb-4 flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                  Wypełnienie wniosku (заповнення заяви)
                </h3>
                <ul className="text-green-700 space-y-2 ml-11">
                  <li>• Pobierzcie formularz z serwisu emp.gov.pl</li>
                  <li>• Wypełnijcie wszystkie pola dokładnie i czytelnie</li>
                  <li>• Podajcie актуальні dane kontaktowe (kontaktowe)</li>
                  <li>• Sprawdźcie wszystkie informacje przed wysłaniem</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-purple-800 mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                  Składanie wniosku (подача заяви)
                </h3>
                <ul className="text-purple-700 space-y-2 ml-11">
                  <li><strong>Online:</strong> przez platformę PUE/ePUAP lub emp.gov.pl</li>
                  <li><strong>Osobiście:</strong> w closest Zakładzie Ubezpieczeń Społecznych (ZUS)</li>
                  <li><strong>Pocztą:</strong> listem poleconym na адресу ZUS</li>
                  <li>• Dołączcie wszystkie załączniki (załączniki)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
                <h3 className="font-bold text-orange-800 mb-4 flex items-center">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
                  Oczekiwanie na rozpatrzenie (очікування розгляду)
                </h3>
                <ul className="text-orange-700 space-y-2 ml-11">
                  <li>• ZUS ma maksимум 60 днів na rozpatrzenie wniosku</li>
                  <li>• Możliwe wezwanie na uzupełnienie dokumentów</li>
                  <li>• Śledźcie status przez Платформу Usług Elektronicznych</li>
                  <li>• При pozytywnym rozstrzygnięciu - wypłata wstecznie</li>
                </ul>
              </div>
            </div>

            <h2 id="payment-details" className="group">
              <a href="#payment-details" className="flex items-center hover:text-blue-600 transition-colors">
                Kwoty i terminy wypłat (суми та терміни виплат)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="font-semibold text-yellow-800 mb-4">💰 Szczegóły finansowe babciowe 2025:</h3>
              <ul className="space-y-2 text-yellow-700">
                <li><strong>Kwota miesięczna:</strong> 1,500 zł на дитину</li>
                <li><strong>Maksymalny okres:</strong> до 24 місяців (od 12. do 35. miesiąca życia)</li>
                <li><strong>Łączna kwota:</strong> до 36,000 zł на одну дитину</li>
                <li><strong>Wypłata:</strong> miesięcznie, z góry za dany miesiąc</li>
              </ul>
            </div>

            <h3>Sposób naliczania і wypłaty:</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Okres</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Kwota miesięczna</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Liczba miesięcy</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Łączna kwota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">12-23 miesiac życia</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">1,500 zł</td>
                    <td className="px-4 py-3 text-sm text-gray-700">12 miesięcy</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">18,000 zł</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">24-35 miesiac życia</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">1,500 zł</td>
                    <td className="px-4 py-3 text-sm text-gray-700">12 miesięcy</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">18,000 zł</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">RAZEM maksymalnie</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">1,500 zł</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">24 miesięcy</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">36,000 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="practical-tips" className="group">
              <a href="#practical-tips" className="flex items-center hover:text-blue-600 transition-colors">
                Praktyczne wskazówki (практичні поради)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h4 className="font-semibold text-green-800 mb-2">✅ Dobrze wiedzieć (добре знати):</h4>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Składajcie wniosek jak najszybciej - wypłata od dnia złożenia</li>
                  <li>• Śledziйте terminy - babciowe nie jest wypłacane wstecznie za długie okresy</li>
                  <li>• Zachowajcie wszystkie dokumenty przez minimum 5 lat</li>
                  <li>• Informujcie o zmianach w sytuacji rodzinnej lub prawnej</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">📱 Полезные ресурси:</h4>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• <strong>emp.gov.pl</strong> - main platform dla składania wniosków</li>
                  <li>• <strong>zus.pl</strong> - informacje o statusie wniosku</li>
                  <li>• <strong>Telefon ZUS:</strong> 22 560 16 00 (konsultacije українською)</li>
                  <li>• <strong>Aplikacja mobilna ZUS</strong> - wygodne sprawdzanie statusu</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Częste błędy (поширені помилки):</h4>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• Niepełne wypełnienie wniosku - wszystkie pola muszą być uzupełnione</li>
                  <li>• Brak aktualnego zaświadczenia z żłobka</li>
                  <li>• Przekroczenie wieku dziecka - składajcie od razu jak dziecko ma 12 miesięcy</li>
                  <li>• Niewłaściwy formularz - zawsze używajcie najnowszej wersji</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white mt-16">
              <h2 className="text-2xl font-bold mb-4">Potrzebujecie помощи з wnioskiem?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Doświadczeni księgowi pomогają правильно wypełnić wszystkie dokumenty i złożyć wniosek o babciowe
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/blog/">
                  Więcej artykułów
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
                  <Link href="/blog/zwrot-podatku-guide/" className="block">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      Як отримати zwrot podatku в Польщі 2025
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Повна інструкція з повернення податку для українців у Польщі
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
                <li>Адреса inFakt:</li>
                <li>inFakt Sp. z o.o.</li>
                <li>31-153 Kraków, ul. Szlak 49</li>
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
