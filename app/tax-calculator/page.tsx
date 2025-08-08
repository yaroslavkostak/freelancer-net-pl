"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DynamicYear } from '@/components/dynamic-year'

export default function TaxCalculatorPage() {
  const [income, setIncome] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [year, setYear] = useState('2025')
  const [result, setResult] = useState<any>(null)

  const calculateTax = () => {
    const incomeNum = parseFloat(income)
    if (!incomeNum || !businessType) return

    let tax = 0
    let socialContributions = 0
    let healthInsurance = 0
    let totalTax = 0

    if (businessType === 'jdg') {
      // JDG (ФОП) розрахунки з вільною сумою 30,000 PLN
      const freeAmount = 30000
      const taxableIncome = Math.max(0, incomeNum - freeAmount)
      
      if (taxableIncome <= 30000) {
        tax = taxableIncome * 0.12
      } else {
        tax = 30000 * 0.12 + (taxableIncome - 30000) * 0.32
      }
      
      socialContributions = Math.min(incomeNum * 0.0976, 30000 * 0.0976)
      healthInsurance = incomeNum * 0.09
    } else if (businessType === 'spolka') {
      // Spółka z o.o. розрахунки
      tax = incomeNum * 0.19
      socialContributions = 0 // Для компаній розраховується окремо
      healthInsurance = 0
    }

    totalTax = tax + socialContributions + healthInsurance
    const netIncome = incomeNum - totalTax

    setResult({
      grossIncome: incomeNum,
      tax,
      socialContributions,
      healthInsurance,
      totalTax,
      netIncome,
      effectiveRate: ((totalTax / incomeNum) * 100).toFixed(1)
    })
  }

  return (
    <>
      <Script
        id="tax-calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Калькулятор податкових змін 2025 року",
            "description": "Розрахуйте податки для JDG та Spółka z o.o. в Польщі з урахуванням нових змін 2025 року",
            "url": "https://freelancer.org.pl/tax-calculator",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "PLN"
            },
            "author": {
              "@type": "Organization",
              "name": "inFakt",
              "url": "https://www.infakt.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Freelancer.org.pl",
              "url": "https://freelancer.org.pl"
            },
            "featureList": [
              "Розрахунок податків для JDG",
              "Розрахунок податків для Spółka z o.o.",
              "Вільна сума 30,000 PLN",
              "Нові податкові ставки 2025",
              "Розрахунок соціальних внесків"
            ],
            "screenshot": "https://freelancer.org.pl/images/tax-calculator-screenshot.jpg",
            "inLanguage": "uk"
          })
        }}
      />
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Калькулятор податкових змін 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Розрахуйте податки для вашого бізнесу в Польщі з урахуванням нових змін у 2025 році. 
            Отримайте точні розрахунки для JDG та Spółka z o.o.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Калькулятор податків
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="income" className="text-sm font-medium text-gray-700">
                  Річний дохід (PLN)
                </Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="Введіть суму доходу"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="businessType" className="text-sm font-medium text-gray-700">
                  Тип бізнесу
                </Label>
                <Select value={businessType} onValueChange={setBusinessType}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Оберіть тип бізнесу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jdg">JDG (Індивідуальне підприємництво)</SelectItem>
                    <SelectItem value="spolka">Spółka z o.o. (ТОВ)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="year" className="text-sm font-medium text-gray-700">
                  Рік
                </Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateTax}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                disabled={!income || !businessType}
              >
                Розрахувати податки
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Результати розрахунку
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Валовий дохід</p>
                      <p className="text-xl font-bold text-gray-900">{result.grossIncome.toLocaleString()} PLN</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Чистий дохід</p>
                      <p className="text-xl font-bold text-green-600">{result.netIncome.toLocaleString()} PLN</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Податок на дохід</span>
                      <span className="font-semibold">{result.tax.toLocaleString()} PLN</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Соціальні внески</span>
                      <span className="font-semibold">{result.socialContributions.toLocaleString()} PLN</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Медичне страхування</span>
                      <span className="font-semibold">{result.healthInsurance.toLocaleString()} PLN</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-blue-50 rounded-lg px-4">
                      <span className="text-lg font-semibold text-gray-900">Загальні податки</span>
                      <span className="text-lg font-bold text-red-600">{result.totalTax.toLocaleString()} PLN</span>
                    </div>
                    <div className="text-center py-2 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Ефективна податкова ставка</p>
                      <p className="text-xl font-bold text-blue-600">{result.effectiveRate}%</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🧮</div>
                  <p className="text-gray-500">Введіть дані та натисніть "Розрахувати податки"</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tax Changes Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Податкові зміни 2025 року
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">JDG (Індивідуальне підприємництво)</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Вільна сума 30,000 PLN (не оподатковується)</li>
                    <li>• Податкова ставка 12% для доходів 30,000-60,000 PLN</li>
                    <li>• Податкова ставка 32% для доходів понад 60,000 PLN</li>
                    <li>• Соціальні внески 9.76% від бази (макс. 30,000 PLN)</li>
                    <li>• Медичне страхування 9% від доходу</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Spółka z o.o. (ТОВ)</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Податок на прибуток 19%</li>
                    <li>• Можливість використання IP Box (5%)</li>
                    <li>• Податок на дивіденди 19%</li>
                    <li>• Соціальні внески для працівників</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Важливо знати</h3>
                <p className="text-blue-800">
                  Цей калькулятор надає приблизні розрахунки. Для точних розрахунків рекомендуємо звернутися до 
                  професійного бухгалтера. inFakt надає безкоштовні консультації з податкового планування.
                </p>
              </div>
            </CardContent>
          </Card>
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
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="https://www.infakt.pl/polecam/yaroslav-kostak" target="_blank" rel="nofollow noopener noreferrer">
                  Отримати консультацію
                </Link>
              </Button>
            </CardContent>
          </Card>
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
            <p>&copy; {DynamicYear()} Freelancer.org.pl. Всі права захищені.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
} 