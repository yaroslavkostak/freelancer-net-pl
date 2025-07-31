"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

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
      // JDG (ФОП) розрахунки
      if (incomeNum <= 30000) {
        tax = incomeNum * 0.12
      } else if (incomeNum <= 120000) {
        tax = 30000 * 0.12 + (incomeNum - 30000) * 0.32
      } else {
        tax = 30000 * 0.12 + 90000 * 0.32 + (incomeNum - 120000) * 0.32
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
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
                    <li>• Податкова ставка 12% для доходів до 30,000 PLN</li>
                    <li>• Податкова ставка 32% для доходів понад 30,000 PLN</li>
                    <li>• Соціальні внески 9.76% від бази</li>
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
  )
} 