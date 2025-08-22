import Link from 'next/link'
import { DynamicYear } from '@/components/dynamic-year'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export default function TaxCalculatorGuidePage() {
  return (
    <>
      <Script
        id="tax-calculator-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Калькулятор податків для українців у Польщі 2025: повний гід",
            "description": "Детальний гід з розрахунку податків в Польщі для українців. Калькулятори PIT, VAT, ZUS та інших податків з актуальними ставками 2025 року.",
            "image": "https://freelancer.org.pl/images/tax-calculator-guide-og.jpg",
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
              "@id": "https://freelancer.org.pl/blog/tax-calculator-guide"
            },
            "articleSection": "Податки",
            "keywords": "калькулятор податків польща, pit калькулятор, vat калькулятор, zus калькулятор, податки україна польща",
            "wordCount": 2200,
            "timeRequired": "PT10M",
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Калькулятор податків</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Калькулятор податків для українців у Польщі 2025: повний гід
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>📅 27 січня 2025</span>
              <span>⏱️ 10 хв читання</span>
              <span>👁️ 3,124 переглядів</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Детальний гід з усіх типів податкових калькуляторів в Польщі для українців. 
              Розрахуйте PIT, VAT, ZUS та інші податки з актуальними ставками 2025 року.
            </p>
            
            {/* Article Image */}
            <div className="my-8">
              <img
                src="/images/webp/tax-calculator-guide.webp"
                alt="Калькулятор податків для JDG в Польщі"
                className="w-1/2 h-auto rounded-lg shadow-lg mx-auto"
              />
              <p className="text-sm text-gray-500 text-center mt-2">
                Онлайн калькулятор податків для українських підприємців у Польщі
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Зміст статті</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#calculator-types" className="text-blue-600 hover:text-blue-800 transition-colors">Типи податкових калькуляторів</a></li>
              <li><a href="#pit-calculator" className="text-blue-600 hover:text-blue-800 transition-colors">Калькулятор PIT (податок на прибуток)</a></li>
              <li><a href="#vat-calculator" className="text-blue-600 hover:text-blue-800 transition-colors">Калькулятор VAT</a></li>
              <li><a href="#zus-calculator" className="text-blue-600 hover:text-blue-800 transition-colors">Калькулятор ZUS (соціальні внески)</a></li>
              <li><a href="#practical-examples" className="text-blue-600 hover:text-blue-800 transition-colors">Практичні приклади</a></li>
              <li><a href="#tips-optimization" className="text-blue-600 hover:text-blue-800 transition-colors">Поради з оптимізації</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none space-y-6">
            <h2 id="calculator-types" className="group">
              <a href="#calculator-types" className="flex items-center hover:text-blue-600 transition-colors">
                Типи податкових калькуляторів у Польщі
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>
            
            <p>
              Польська податкова система включає кілька типів податків, для кожного з яких існують спеціалізовані калькулятори:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">🧾 PIT (Podatek dochodowy)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Податок на прибуток фізичних осіб - основний податок для JDG та працівників</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">🏪 VAT (Podatek VAT)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Податок на додану вартість - застосовується до товарів та послуг</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg">👥 ZUS (Składki społeczne)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Соціальні внески на пенсію, інвалідність та медичне страхування</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg">🏢 CIT (Podatek CIT)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Податок на прибуток юридичних осіб для Spółka z o.o.</p>
                </CardContent>
              </Card>
            </div>

            <h2 id="pit-calculator" className="group">
              <a href="#pit-calculator" className="flex items-center hover:text-blue-600 transition-colors">
                Калькулятор PIT (податок на прибуток)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              PIT - найважливіший податок для українців, які працюють як JDG в Польщі. 
              Ставки на 2025 рік залежать від форми оподаткування.
            </p>

            <h3>Ставки PIT на 2025 рік:</h3>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Загальні правила (Zasady ogólne):</h4>
              <ul className="space-y-2">
                <li>• <strong>12%</strong> - для доходів до 120,000 zł</li>
                <li>• <strong>32%</strong> - для доходів понад 120,000 zł</li>
                <li>• <strong>Вільна сума:</strong> 30,000 zł (не оподатковується)</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h4 className="font-semibold mb-4">Ryczałt (фіксована ставка):</h4>
              <ul className="space-y-2">
                <li>• <strong>2%</strong> - для IT послуг</li>
                <li>• <strong>5.5%</strong> - для комерційної діяльності</li>
                <li>• <strong>8.5%</strong> - для послуг та виробництва</li>
                <li>• <strong>12%</strong> - для вільних професій</li>
              </ul>
            </div>

            <h2 id="vat-calculator" className="group">
              <a href="#vat-calculator" className="flex items-center hover:text-blue-600 transition-colors">
                Калькулятор VAT
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              VAT стягується з продажу товарів та послуг. Реєстрація як платник VAT обов'язкова 
              при перевищенні річного ліміту 200,000 zł.
            </p>

            <h3>Ставки VAT на 2025 рік:</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Тип товару/послуги</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Ставка VAT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Приклади</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Стандартна ставка</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">23%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Більшість товарів та послуг</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Знижена ставка</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">8%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Продукти харчування, книги</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Преференційна ставка</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">5%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Сільгосппродукція</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Звільнення</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">0%</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Експорт, медичні послуги</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="zus-calculator" className="group">
              <a href="#zus-calculator" className="flex items-center hover:text-blue-600 transition-colors">
                Калькулятор ZUS (соціальні внески)
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <p>
              ZUS - це соціальні внески, які платять усі підприємці в Польщі. 
              Розмір внесків залежить від форми діяльності та обраної бази розрахунку.
            </p>

            <h3>Ставки ZUS на 2025 рік для JDG:</h3>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Мінімальні внески ZUS:</h4>
              <ul className="space-y-2">
                <li>• <strong>Пенсійне страхування:</strong> 429.07 zł</li>
                <li>• <strong>Інвалідне страхування:</strong> 70.24 zł</li>
                <li>• <strong>Хвороба страхування:</strong> 26.64 zł (добровільне)</li>
                <li>• <strong>Страхування від нещасних випадків:</strong> 18.43 zł</li>
                <li>• <strong>Фонд праці:</strong> 67.22 zł</li>
                <li>• <strong>Загалом мінімум:</strong> 611.60 zł</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h4 className="font-semibold mb-4">Преференційні внески (перші 24 місяці):</h4>
              <ul className="space-y-2">
                <li>• <strong>Пенсійне страхування:</strong> 103.66 zł</li>
                <li>• <strong>Інвалідне страхування:</strong> 16.98 zł</li>
                <li>• <strong>Страхування від нещасних випадків:</strong> 4.45 zł</li>
                <li>• <strong>Фонд праці:</strong> 16.24 zł</li>
                <li>• <strong>Загалом пільгових:</strong> 141.33 zł</li>
              </ul>
            </div>

            <h2 id="practical-examples" className="group">
              <a href="#practical-examples" className="flex items-center hover:text-blue-600 transition-colors">
                Практичні приклади розрахунків
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <h3>Приклад 1: IT-фрілансер з доходом 8,000 zł/міс</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Форма оподаткування:</strong> Ryczałt 2% (IT послуги)</p>
              <p><strong>Річний дохід:</strong> 96,000 zł</p>
              
              <div className="mt-4 space-y-2">
                <p><strong>Розрахунок податків:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• PIT: 96,000 × 2% = 1,920 zł/рік</li>
                  <li>• ZUS (пільгові): 141.33 × 12 = 1,696 zł/рік</li>
                  <li>• ZUS (звичайні): 611.60 × 12 = 7,339 zł/рік</li>
                </ul>
                
                <p className="mt-4"><strong>Загальні витрати на податки:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Перші 2 роки: 3,616 zł/рік (≈ 301 zł/міс)</li>
                  <li>• Після 2 років: 9,259 zł/рік (≈ 772 zł/міс)</li>
                </ul>
              </div>
            </div>

            <h3>Приклад 2: Консультант з доходом 15,000 zł/міс</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Форма оподаткування:</strong> Загальні правила</p>
              <p><strong>Річний дохід:</strong> 180,000 zł</p>
              
              <div className="mt-4 space-y-2">
                <p><strong>Розрахунок PIT:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Вільна сума: 30,000 zł (0%)</li>
                  <li>• 90,000 zł × 12% = 10,800 zł</li>
                  <li>• 60,000 zł × 32% = 19,200 zł</li>
                  <li>• <strong>Загалом PIT:</strong> 30,000 zł/рік</li>
                </ul>
                
                <ul className="ml-4 space-y-1">
                  <li>• ZUS: 611.60 × 12 = 7,339 zł/рік</li>
                </ul>
                
                <p className="mt-4"><strong>Загальні витрати:</strong> 37,339 zł/рік (≈ 3,111 zł/міс)</p>
              </div>
            </div>

            <h2 id="tips-optimization" className="group">
              <a href="#tips-optimization" className="flex items-center hover:text-blue-600 transition-colors">
                Поради з оптимізації податків
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Вибір форми оподаткування</h4>
                <p className="text-blue-700">
                  Для IT-послуг вигідний ryczałt 2%. Для інших послуг порівняйте ryczałt 
                  та загальні правила залежно від вашого доходу.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h4 className="font-semibold text-green-800 mb-2">🎯 Пільгові внески ZUS</h4>
                <p className="text-green-700">
                  Використовуйте пільгові внески ZUS перші 24 місяці - це значна економія 
                  до 470 zł на місяць.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <h4 className="font-semibold text-orange-800 mb-2">📊 Планування доходів</h4>
                <p className="text-orange-700">
                  Слідкуйте за лімітами VAT (200,000 zł) та PIT (120,000 zł для 12% ставки). 
                  Планування допоможе оптимізувати податкове навантаження.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white mt-16">
              <h2 className="text-2xl font-bold mb-4">Потрібна допомога з розрахунками?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Скористайтеся нашим інтерактивним калькулятором або отримайте консультацію бухгалтера
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/tax-calculator/">
                    Калькулятор податків
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="https://www.infakt.pl/polecam/yaroslav-kostak" target="_blank" rel="sponsored noopener noreferrer">
                    Знайти бухгалтера
                  </Link>
                </Button>
              </div>
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
