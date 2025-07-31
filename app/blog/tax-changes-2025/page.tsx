import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function TaxChangesBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Noun Project icon: calculator */}
            <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
            <Link href="https://freelancer.org.pl/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">Рекомендую inFakt</Link>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10 justify-center flex-1">
            <Link href="/#company-choice" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              {/* Noun Project icon: building */}
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21h18M3 7h18M3 3h18M7 21V11M17 21V11"/></svg>
              Види діяльності
            </Link>
            <Link href="/#accountants" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              {/* Noun Project icon: user group */}
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><circle cx="17" cy="17" r="4"/><path d="M17 13a4 4 0 0 0-8 0"/></svg>
              Бухгалтери
            </Link>
            <Link href="/#business-management" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              {/* Noun Project icon: calculator */}
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
              Бухгалтерський облік
            </Link>
            <Link href="/#accounting-services" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              {/* Noun Project icon: briefcase */}
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Послуги
            </Link>
            <Link href="/#faq" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              {/* Noun Project icon: question mark */}
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12" y2="17"/></svg>
              Питання
            </Link>
            <Link href="/tax-calculator" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              {/* Noun Project icon: calculator */}
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
              Калькулятор
            </Link>
          </nav>
          {/* Mobile Menu */}
          <div className="md:hidden">
            {/* Тут можна додати компонент випадаючого меню (наприклад, Drawer/Sheet) з тими ж пунктами */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">Податки</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Податкові зміни 2025 року: що змінюється для підприємців у Польщі
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>📅 15 грудня 2024</span>
              <span>⏱️ 8 хв читання</span>
              <span>👁️ 2,847 переглядів</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              У 2025 році польська податкова система зазнає значних змін, які зачеплять як індивідуальних підприємців (JDG), 
              так і компанії (Spółka z o.o.). Розбираємо основні нововведення та їх вплив на ваш бізнес.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">🧮 Калькулятор податкових змін 2025</h2>
              <p className="text-lg mb-6 opacity-90">
                Розрахуйте, як нові податкові правила вплинуть на ваш дохід
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/tax-calculator">
                  Відкрити калькулятор
                </Link>
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <h2>Основні зміни для JDG (Індивідуальне підприємництво)</h2>
            
            <h3>Нові податкові ставки</h3>
            <p>
              З 1 січня 2025 року вводяться нові податкові ставки для індивідуальних підприємців:
            </p>
            <ul>
              <li><strong>12%</strong> - для доходів до 30,000 PLN на рік</li>
              <li><strong>32%</strong> - для доходів понад 30,000 PLN на рік</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-yellow-800">
                <strong>Важливо:</strong> Ці зміни застосовуються до доходів, отриманих з 1 січня 2025 року. 
                Доходи за 2024 рік оподатковуються за старими правилами.
              </p>
            </div>

            <h3>Соціальні внески та медичне страхування</h3>
            <p>
              Розміри соціальних внесків та медичного страхування залишаються незмінними:
            </p>
            <ul>
              <li>Соціальні внески: <strong>9.76%</strong> від бази (максимум 30,000 PLN)</li>
              <li>Медичне страхування: <strong>9%</strong> від доходу</li>
            </ul>

            <h2>Зміни для Spółka z o.o. (ТОВ)</h2>
            
            <h3>Податок на прибуток</h3>
            <p>
              Для компаній з обмеженою відповідальністю основна податкова ставка залишається <strong>19%</strong>, 
              але вводяться нові можливості для оптимізації:
            </p>
            <ul>
              <li>Розширення IP Box до 5% для інноваційних компаній</li>
              <li>Нові пільги для малих підприємств</li>
              <li>Спрощення процедур податкового обліку</li>
            </ul>

            <h3>Податок на дивіденди</h3>
            <p>
              Ставка податку на дивіденди залишається <strong>19%</strong>, але вводяться нові правила 
              для запобігання податковому плануванню.
            </p>

            <h2>Практичні приклади розрахунків</h2>
            
            <h3>Приклад 1: JDG з доходом 50,000 PLN</h3>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <p><strong>Розрахунок податку:</strong></p>
              <ul>
                <li>Перші 30,000 PLN × 12% = 3,600 PLN</li>
                <li>Наступні 20,000 PLN × 32% = 6,400 PLN</li>
                <li><strong>Загальний податок: 10,000 PLN</strong></li>
              </ul>
              <p><strong>Ефективна ставка: 20%</strong></p>
            </div>

            <h3>Приклад 2: Spółka z o.o. з прибутком 100,000 PLN</h3>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <p><strong>Розрахунок податку:</strong></p>
              <ul>
                <li>Податок на прибуток: 100,000 PLN × 19% = 19,000 PLN</li>
                <li>Чистий прибуток: 81,000 PLN</li>
                <li>Податок на дивіденди (якщо виводити): 81,000 PLN × 19% = 15,390 PLN</li>
              </ul>
            </div>

            <h2>Як підготуватися до змін</h2>
            
            <h3>Для JDG</h3>
            <ul>
              <li>Проаналізуйте свій дохід за 2024 рік</li>
              <li>Розрахуйте податкове навантаження за новими правилами</li>
              <li>Розгляньте можливість оптимізації через витрати</li>
              <li>Проконсультуйтесь з бухгалтером щодо податкового планування</li>
            </ul>

            <h3>Для Spółka z o.o.</h3>
            <ul>
              <li>Оцініть можливості використання IP Box</li>
              <li>Перегляньте структуру витрат</li>
              <li>Розгляньте можливості реінвестування прибутку</li>
              <li>Плануйте виплату дивідендів з урахуванням нових правил</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <h3 className="text-blue-900 mb-2">💡 Порада від експертів</h3>
              <p className="text-blue-800">
                Не чекайте до останнього моменту! Краще заздалегідь проаналізувати вплив нових правил 
                на ваш бізнес та підготувати план дій. Професійний бухгалтер допоможе оптимізувати 
                податкове навантаження та зекономити значні кошти.
              </p>
            </div>

            <h2>Висновки</h2>
            <p>
              Податкові зміни 2025 року принесуть як нові можливості, так і виклики для підприємців. 
              Ключ до успіху - це своєчасна підготовка та професійна консультація. 
              Використовуйте наш калькулятор для попередніх розрахунків та звертайтеся до 
              експертів inFakt для детального аналізу вашої ситуації.
            </p>
          </article>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Схожі статті</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Бухгалтерія</Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Як відкрити JDG в Польщі: покрокова інструкція
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Детальний гід з реєстрації індивідуального підприємництва для українців
                  </p>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                    Читати далі →
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Податки</Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    VAT в Польщі: основні правила для підприємців
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Все про податок на додану вартість для українських підприємців
                  </p>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                    Читати далі →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4">
                  Потрібна допомога з податками?
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Наші бухгалтери допоможуть оптимізувати податки та зекономити ваші кошти
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Link href="https://www.infakt.pl/polecam/yaroslav-kostak" target="_blank" rel="nofollow noopener noreferrer">
                      Отримати консультацію
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Link href="/">
                      Повернутися на головну
                    </Link>
                  </Button>
                </div>
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
                <span className="text-lg font-semibold">Freelancer.org.pl</span>
              </div>
              <p className="text-gray-400 text-sm max-w-2xl">
                Сайт freelancer.org.pl є інформаційним ресурсом у межах партнерської програми inFakt. Метою сайту є ознайомлення з сервісом та його можливостями для підприємців в Польщі.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Швидкі посилання</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Контакти</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Політика конфіденційності</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Умови використання</Link></li>
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
            <p>&copy; 2024 Freelancer.org.pl. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 