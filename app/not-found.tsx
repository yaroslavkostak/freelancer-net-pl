import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Сторінку не знайдено
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-xl text-gray-600">
                Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
              </p>
              <p className="text-gray-600">
                Можливо, ви шукали інформацію про бухгалтерські послуги у Польщі? 
                Поверніться на головну сторінку, щоб знайти потрібну інформацію.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/">
                    Повернутися на головну
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Зв'язатися з нами
                  </Link>
                </Button>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">
                  Корисні посилання:
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800">
                    Політика конфіденційності
                  </Link>
                  <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                    Умови використання
                  </Link>
                  <a 
                    href="https://freelancer.net.pl" 
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Freelancer.net.pl
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