"use client"

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DynamicYear } from '@/components/dynamic-year'

export default function BlogPage() {
        const articles = [
        {
          id: 'stawki-ryczalt-2025',
          title: 'Stawki ryczałtu 2025 в Польщі: нові ставки та розрахунки для українців',
          excerpt: 'Актуальні stawki ryczałtu ewidencjonowanego на 2025 рік в Польщі для українських підприємців. Повна таблиця ставок, умови застосування та практичні приклади розрахунків.',
          date: '27 січня 2025',
          readTime: '12 хв',
          image: '/images/webp/stawki-ryczalt-2025.webp'
        },
        {
          id: 'zasilek-chorobowy-guide',
          title: 'Калькулятор zasiłku chorobowego для JDG 2025: розрахунок лікарняних в Польщі',
          excerpt: 'Повний гід з розрахунку zasiłek chorobowy (лікарняних) для українських підприємців JDG в Польщі. Калькулятор, умови, ставки та практичні приклади.',
          date: '27 січня 2025',
          readTime: '14 хв',
          image: '/images/webp/zasilek-chorobowy-guide.webp'
        },
        {
          id: 'skladka-zdrowotna-guide',
          title: 'Składka zdrowotna в Польщі 2025: розрахунок та оплата для українців',
          excerpt: 'Повний гід з składka zdrowotna (внесок на охорону здоров\'я) в Польщі для українських підприємців. Розрахунки, ставки, терміни оплати та льготи для JDG.',
          date: '27 січня 2025',
          readTime: '13 хв',
          image: '/images/webp/skladka-zdrowotna-guide.webp'
        },
        {
          id: 'babciowe-guide',
          title: 'Babciowe в Польщі 2025: як подати wniosek та отримати допомогу українцям',
          excerpt: 'Повна інструкція про babciowe (активне батьківство) в Польщі для українців. Умови, суми виплат, необхідні документи та як правильно подати wniosek o babciowe.',
          date: '27 січня 2025',
          readTime: '11 хв',
          image: '/images/webp/babciowe-guide.webp'
        },
        {
          id: 'zwrot-podatku-guide',
          title: 'Як отримати zwrot podatku в Польщі 2025: повна інструкція українською',
          excerpt: 'Детальна інструкція як отримати повернення податку в Польщі для українців. Умови, документи, терміни та покрокова процедура з поясненням польських термінів.',
          date: '27 січня 2025',
          readTime: '12 хв',
          image: '/images/webp/zwrot-podatku-guide.webp'
        },
        {
          id: 'tax-calculator-guide',
          title: 'Калькулятор податків для українців у Польщі 2025: повний гід',
          excerpt: 'Детальний гід з усіх типів податкових калькуляторів в Польщі для українців. Розрахуйте PIT, VAT, ZUS та інші податки з актуальними ставками 2025 року.',
          date: '27 січня 2025',
          readTime: '10 хв',
          image: '/images/webp/tax-calculator-guide.webp'
        },
        {
          id: 'tax-changes-2025',
          title: 'Податкові зміни 2025 року в Польщі: що змінюється для JDG та Spółka z o.o.',
          excerpt: 'Детальний огляд нових податкових правил, які вступають в силу з 1 січня 2025 року. Зміни в оподаткуванні для індивідуальних підприємців та компаній.',
          date: '27 січня 2025',
          readTime: '8 хв',
          image: '/images/webp/tax-changes-2025.webp'
        },
        {
          id: 'jdg-registration-guide',
          title: 'Як відкрити JDG в Польщі: покрокова інструкція',
          excerpt: 'Повний гід з реєстрації індивідуального підприємництва (JDG) в Польщі для українців. Від підготовки документів до початку діяльності.',
          date: '27 січня 2025',
          readTime: '12 хв',
          image: '/images/webp/jdg-registration.webp'
        },
        {
          id: 'vat-poland-guide',
          title: 'VAT в Польщі: основні правила для підприємців',
          excerpt: 'Детальний гід з податку на додану вартість (VAT) в Польщі. Всі важливі правила, ставки, обов\'язки та особливості для підприємців.',
          date: '27 січня 2025',
          readTime: '10 хв',
          image: '/images/webp/vat-guide.webp'
        }
      ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
            <Link href="https://freelancer.org.pl/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors" rel="nofollow">Рекомендую inFakt</Link>
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
        <div className="mb-6">
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
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Статті</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Блог про бухгалтерію в Польщі</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Корисні статті про ведення бізнесу, податки та бухгалтерський облік для українців у Польщі. Бухгалтер для ФОП. Бугалтери платформи Infakt все зроблять, як треба!
          </p>
        </div>

                {/* Articles Grid */}
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6 mb-12">
        {articles.map((article) => (
          <Card key={article.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <Link href={`/blog/${article.id}/`} className="block">
              <div className="md:flex">
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">📅 {article.date}</span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {article.excerpt}
                  </p>
                  <div className="inline-flex">
                    <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                      Читати далі
                    </span>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>



        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 md:p-8 text-center text-white mt-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Потрібна допомога з бухгалтерією?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Наші партнери з inFakt допоможуть вам з усіма питаннями ведення бізнесу в Польщі
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="https://www.infakt.pl/polecam/yaroslav-kostak" target="_blank" rel="sponsored noopener noreferrer">
                Знайти бухгалтера
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Related Articles & Internal Linking */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Корисні матеріали про бухгалтерію в Польщі</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Реєстрація та відкриття бізнесу</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><Link href="/blog/jdg-registration-guide/" className="text-blue-600 hover:text-blue-800 underline">Реєстрація ФОП (JDG) у Польщі для українців</Link></li>
                  <li><Link href="/blog/tax-changes-2025/" className="text-blue-600 hover:text-blue-800 underline">Податкові зміни 2025 року в Польщі</Link></li>
                  <li><Link href="/blog/stawki-ryczalt-2025/" className="text-blue-600 hover:text-blue-800 underline">Ставки річного податку 2025 для ФОП</Link></li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Податки та звітність</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><Link href="/blog/vat-poland-guide/" className="text-blue-600 hover:text-blue-800 underline">Податок VAT у Польщі - Повний посібник</Link></li>
                  <li><Link href="/blog/skladka-zdrowotna-guide/" className="text-blue-600 hover:text-blue-800 underline">Страховий внесок (składka zdrowotna) у Польщі</Link></li>
                  <li><Link href="/blog/zwrot-podatku-guide/" className="text-blue-600 hover:text-blue-800 underline">Як отримати повернення податку в Польщі</Link></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Шукаєте бухгалтера в Польщі?</h3>
              <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
                Наші партнери з inFakt надають професійні бухгалтерські послуги для українців у Польщі. 
                Отримайте безкоштовну консультацію та дізнайтеся, як бухгалтер в Польщі може допомогти вашому бізнесу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="https://www.infakt.pl/polecam/yaroslav-kostak" target="_blank" rel="sponsored noopener noreferrer">
                    Знайти бухгалтера в Польщі
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/tax-calculator/">
                    Калькулятор податків
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
