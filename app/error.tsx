'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Логуємо помилку для аналітики
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <div className="text-6xl font-bold text-red-300 mb-4">500</div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Щось пішло не так
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-xl text-gray-600">
                Вибачте, сталася неочікувана помилка. Наша команда вже працює над її вирішенням.
              </p>
              <p className="text-gray-600">
                Спробуйте оновити сторінку або поверніться на головну сторінку.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={reset}
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Спробувати знову
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link href="/">
                    Повернутися на головну
                  </Link>
                </Button>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">
                  Якщо проблема повторюється, зв'яжіться з нами:
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                    Контакти
                  </Link>
                  <a 
                    href="mailto:info@freelancer.org.pl" 
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@freelancer.org.pl
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 