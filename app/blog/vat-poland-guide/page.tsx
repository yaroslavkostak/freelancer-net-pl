"use client"

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DynamicYear } from '@/components/dynamic-year'

export default function VATPolandGuidePage() {
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">VAT в Польщі</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              VAT в Польщі: основні правила для підприємців
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>📅 27 січня 2025</span>
              <span>⏱️ 10 хв читання</span>
              <span>👁️ 987 переглядів</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Детальний гід з податку на додану вартість (VAT) в Польщі. 
              Всі важливі правила, ставки, обов'язки та особливості для підприємців.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 id="what-is-vat" className="group">
              <a href="#what-is-vat" className="flex items-center hover:text-blue-600 transition-colors">
                Що таке VAT і коли потрібно його платити?
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">#</span>
              </a>
            </h2>
            
            <p>
              <strong>VAT (Podatek od towarów i usług)</strong> - це податок на додану вартість, який стягується 
              з продажу товарів та послуг. В Польщі обов'язкова реєстрація платника VAT наступає при досягненні 
              певних лімітів обороту.
            </p>

            <p>
              Для більшості підприємців ліміт становить 200,000 PLN на рік. Якщо ваш оборот перевищує цю суму, 
              ви зобов'язані зареєструватися як платник VAT.
            </p>

            <h3>Ліміти для обов'язкової реєстрації VAT:</h3>
            <ul>
              <li><strong>200,000 zł</strong> - річний оборот для обов'язкової реєстрації</li>
              <li><strong>50,000 zł</strong> - квартальний оборот для обов'язкової реєстрації</li>
              <li><strong>Добровільна реєстрація</strong> - можлива в будь-який момент</li>
            </ul>

            <h2>VAT ставки в Польщі</h2>
            <p>В Польщі діють різні ставки VAT залежно від виду товарів або послуг:</p>

            <h3>Основні ставки:</h3>
            <ul>
              <li><strong>23%</strong> - стандартна ставка (більшість товарів та послуг)</li>
              <li><strong>8%</strong> - знижена ставка (продукти харчування, книги, послуги готелів)</li>
              <li><strong>5%</strong> - знижена ставка (основні продукти харчування, книги, газети)</li>
              <li><strong>0%</strong> - експорт, внутрішньоєвропейські постачання</li>
              <li><strong>ZW</strong> - звільнення від VAT (медичні послуги, освіта, фінансові послуги)</li>
            </ul>

            <h2>Процес реєстрації платника VAT</h2>
            <p>Реєстрація платника VAT складається з кількох етапів:</p>

            <h3>Крок 1: Подача заяви</h3>
            <p>
              Заяву на реєстрацію платника VAT подають через інтернет на сайті 
              <a href="https://www.podatki.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> podatki.gov.pl</a> 
              або особисто в податковій інспекції.
            </p>

            <h3>Крок 2: Отримання NIP</h3>
            <p>
              Після реєстрації ви отримаєте NIP (Numer Identyfikacji Podatkowej) - податковий ідентифікаційний номер.
            </p>

            <h3>Крок 3: Початок діяльності</h3>
            <p>
              З моменту реєстрації ви зобов'язані виставляти рахунки з VAT та подавати декларації.
            </p>

            <h2>Обов'язки платника VAT</h2>
            <p>Після реєстрації платника VAT у вас з'являються наступні обов'язки:</p>

            <h3>Основні обов'язки:</h3>
            <ul>
              <li><strong>Виставлення рахунків</strong> з правильним розрахунком VAT</li>
              <li><strong>Ведення обліку</strong> всіх операцій з VAT</li>
              <li><strong>Подача декларацій</strong> VAT-7 щомісячно або щоквартально</li>
              <li><strong>Сплата податку</strong> до 25 числа наступного місяця</li>
              <li><strong>Звітність</strong> по внутрішньоєвропейських операціях (JPK_V7M)</li>
            </ul>

            <h2>Розрахунок VAT</h2>
            <p>Розглянемо приклади розрахунку VAT:</p>

            <h3>Приклад 1: Продаж послуг зі ставкою 23%</h3>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p><strong>Вартість послуги без VAT:</strong> 1,000 zł</p>
              <p><strong>VAT (23%):</strong> 1,000 × 0.23 = 230 zł</p>
              <p><strong>Вартість з VAT:</strong> 1,000 + 230 = 1,230 zł</p>
            </div>

            <h3>Приклад 2: Купівля товарів з можливістю відшкодування</h3>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p><strong>Купівля товарів:</strong> 2,000 zł + 460 zł VAT = 2,460 zł</p>
              <p><strong>Продаж товарів:</strong> 3,000 zł + 690 zł VAT = 3,690 zł</p>
              <p><strong>VAT до сплати:</strong> 690 - 460 = 230 zł</p>
            </div>

            <h2>Спеціальні режими оподаткування</h2>
            <p>В Польщі існують спеціальні режими для малого бізнесу:</p>

            <h3>Каса реєструє продаж (Kasa rejestrująca sprzedaż)</h3>
            <p>
              Для підприємців з оборотом до 2 млн zł на рік можна використовувати спрощений режим 
              з касою реєструє продаж замість повного обліку VAT.
            </p>

            <h3>Малий платник VAT</h3>
            <p>
              Підприємці з оборотом до 200,000 zł можуть добровільно зареєструватися платником VAT 
              для отримання можливості відшкодування вхідного VAT.
            </p>

            <h2>Внутрішньоєвропейські операції</h2>
            <p>При роботі з клієнтами з інших країн ЄС:</p>

            <h3>Внутрішньоєвропейські постачання (WDT)</h3>
            <ul>
              <li>Ставка 0% для постачання товарів в інші країни ЄС</li>
              <li>Потрібно вказувати NIP покупця з іншої країни ЄС</li>
              <li>Подача звітності по внутрішньоєвропейських операціях</li>
            </ul>

            <h3>Внутрішньоєвропейські придбання (WNT)</h3>
            <ul>
              <li>При купівлі товарів з інших країн ЄС</li>
              <li>Потрібно декларувати та сплачувати VAT в Польщі</li>
              <li>Можливість відшкодування при подальшому продажі</li>
            </ul>

            <h2>Часті помилки та як їх уникнути</h2>
            <p>Найпоширеніші помилки при роботі з VAT:</p>

            <h3>Основні помилки:</h3>
            <ul>
              <li><strong>Неправильний розрахунок ставки</strong> - перевіряйте актуальні ставки</li>
              <li><strong>Помилки в рахунках</strong> - обов'язково вказуйте NIP та правильні суми</li>
              <li><strong>Пропуск термінів подачі</strong> - налаштуйте нагадування</li>
              <li><strong>Неправильне відшкодування</strong> - зберігайте всі документи</li>
            </ul>

            <h2>Допомога від inFakt</h2>
            <p>
              Сервіс inFakt допоможе вам з усіма аспектами роботи з VAT:
            </p>
            <ul>
              <li>Автоматичний розрахунок VAT в рахунках</li>
              <li>Підготовка декларацій VAT-7</li>
              <li>Звітність по внутрішньоєвропейських операціях</li>
              <li>Контроль термінів подачі та сплати</li>
              <li>Консультації з питань VAT українською мовою</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <h3 className="text-yellow-900 font-semibold mb-2">⚠️ Важливо</h3>
              <p className="text-yellow-800">
                Неправильна робота з VAT може призвести до штрафів та перевірок. 
                Рекомендуємо звернутися до бухгалтера для правильної настройки обліку.
              </p>
            </div>

            <h2>Висновок</h2>
            <p>
              VAT в Польщі - це складний, але важливий аспект ведення бізнесу. 
              При правильному підході та використанні професійних інструментів 
              робота з VAT буде ефективною та безпомилковою.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Схожі статті</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Як відкрити JDG в Польщі: покрокова інструкція
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Повний гід з реєстрації індивідуального підприємництва для українців
                  </p>
                  <Link href="/blog/jdg-registration-guide" className="text-blue-600 hover:text-blue-800 font-medium">
                    Читати далі →
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Податкові зміни 2025 року в Польщі
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Детальний огляд нових податкових правил для JDG та Spółka z o.o.
                  </p>
                  <Link href="/blog/tax-changes-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                    Читати далі →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white mt-12">
            <h2 className="text-2xl font-bold mb-4">Потрібна допомога з VAT?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Наші партнери з inFakt допоможуть вам з усіма питаннями VAT
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="https://www.infakt.pl/polecam/yaroslav-kostak" target="_blank" rel="nofollow noopener noreferrer">
                Консультація з VAT
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
