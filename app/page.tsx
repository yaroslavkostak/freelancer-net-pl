import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, FileText, Users, CheckCircle, Star, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { ServiceIcons } from "@/components/service-icons"
import { FeaturesShowcase } from "@/components/features-showcase"
import { VisualCTASection } from "@/components/visual-cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">БухОнлайн</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-600 hover:text-blue-600">
              Послуги
            </Link>
            <Link href="#accountants" className="text-gray-600 hover:text-blue-600">
              Бухгалтери
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600">
              Ціни
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">
              Контакти
            </Link>
          </nav>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="https://www.infakt.pl/ref=123" target="_blank">
              Замовити бухгалтера онлайн
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Україномовні бухгалтери в Польщі </h1>
              <p className="text-xl mb-8 text-blue-100">
                Професійні бухгалтерські послуги онлайн. Досвідчені спеціалісти з перевіреною репутацією для вашого
                бізнесу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="https://www.infakt.pl/ref=123" target="_blank">
                    Замовити бухгалтера онлайн
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Дізнатися більше
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder
                width={500}
                height={400}
                alt="Професійні бухгалтери онлайн в Україні"
                type="hero"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Accountants */}
      <section id="accountants" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Пізнай рекомендованих бухгалтерів</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наші бухгалтери мають багаторічний досвід та відмінні рекомендації від клієнтів
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                name: "Олена Петренко",
                title: "Старший бухгалтер",
                image: "/placeholder.svg?height=120&width=120",
              },
              {
                id: 2,
                name: "Андрій Коваленко",
                title: "Головний бухгалтер",
                image: "/placeholder.svg?height=120&width=120",
              },
              {
                id: 3,
                name: "Марія Шевченко",
                title: "Бухгалтер-консультант",
                image: "/placeholder.svg?height=120&width=120",
              },
              {
                id: 4,
                name: "Віктор Мельник",
                title: "Податковий консультант",
                image: "/placeholder.svg?height=120&width=120",
              },
              { id: 5, name: "Наталія Бондаренко", title: "Аудитор", image: "/placeholder.svg?height=120&width=120" },
              {
                id: 6,
                name: "Олександр Іваненко",
                title: "Фінансовий аналітик",
                image: "/placeholder.svg?height=120&width=120",
              },
            ].map((accountant) => (
              <Card key={accountant.id} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <ImagePlaceholder
                    width={120}
                    height={120}
                    alt={`${accountant.name} - ${accountant.title}`}
                    type="profile"
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">{accountant.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{accountant.title}</p>
                  <div className="flex justify-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary">5+ років досвіду</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <ServiceIcons />
      </section>

      {/* Application + Accountants */}
      <section className="py-16 bg-gray-50">
        <FeaturesShowcase />
      </section>

      {/* Business Management */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Всі справи фірми в одному місці</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImagePlaceholder
                width={600}
                height={400}
                alt="Інтерфейс системи управління бухгалтерським обліком"
                type="dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Документообіг</h3>
                  <p className="text-gray-600">Створення та управління всіма документами компанії</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Фінансовий облік</h3>
                  <p className="text-gray-600">Повний контроль над фінансами та звітністю</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Управління клієнтами</h3>
                  <p className="text-gray-600">База клієнтів та історія взаємодії</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Вибери розширення для Твоєї фірми</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Стартовий</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">₴2,999</div>
                  <p className="text-gray-600">на місяць</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">До 50 документів на місяць</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Базова звітність</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Email підтримка</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="https://www.infakt.pl/ref=123" target="_blank">
                    Замовити бухгалтера онлайн
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-blue-500 border-2 hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Популярний</Badge>
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Професійний</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">₴4,999</div>
                  <p className="text-gray-600">на місяць</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">До 200 документів на місяць</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Повна звітність</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Телефонна підтримка</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Персональний менеджер</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="https://www.infakt.pl/ref=123" target="_blank">
                    Замовити бухгалтера онлайн
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Корпоративний</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">₴9,999</div>
                  <p className="text-gray-600">на місяць</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Необмежена кількість документів</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Розширена аналітика</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Пріоритетна підтримка 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Індивідуальні рішення</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="https://www.infakt.pl/ref=123" target="_blank">
                    Замовити бухгалтера онлайн
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual CTA */}
      <VisualCTASection />

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Дозволь нам налаштувати ведення Твоєї фірми!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Наша команда готова допомогти вам організувати ефективне ведення бухгалтерського обліку
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="https://www.infakt.pl/ref=123" target="_blank">
                Замовити бухгалтера онлайн
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">БухОнлайн</span>
              </div>
              <p className="text-gray-400 text-sm">Професійні бухгалтерські послуги онлайн для вашого бізнесу</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Послуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Ведення обліку
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Податкова звітність
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Консультації
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Аудит
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компанія</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Команда
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Кар'єра
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакти</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+380 44 123 45 67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@bukhonline.ua</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Київ, Україна</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 БухОнлайн. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
