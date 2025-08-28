import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DynamicYear } from "@/components/dynamic-year";

export const metadata: Metadata = {
  title: "Система оподаткування для фрілансерів у Польщі 2025",
  description: "Повний гід по системах оподаткування для фрілансерів у Польщі у 2025 році. Ryczałt, лінійний PIT, загальна шкала - що вигідніше? Консультації українською.",
  keywords: "система оподаткування польща, фрілансер польща, ryczałt 2025, лінійний PIT, податки фрілансер, бухгалтер польща українців",
  openGraph: {
    title: "Система оподаткування для фрілансерів у Польщі у 2025 році",
    description: "Повний гід по системах оподаткування для фрілансерів у Польщі у 2025 році. Ryczałt, лінійний PIT, загальна шкала - що вигідніше?",
    type: "article",
    locale: "uk_UA",
    images: [
      {
        url: "/images/tax-system-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Система оподаткування для фрілансерів у Польщі - калькулятор та документи",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TaxSystemGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18l-7.5-4.5v-6.75L15.75 6v9.75Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6v9.75l-7.5-4.5v-6.75L15.75 6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6V6Z" />
            </svg>
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Freelancer.org.pl
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Головна
            </Link>
            <Link href="/blog/" className="text-gray-600 hover:text-blue-600">
              Блог
            </Link>
            <Link href="/contact/" className="text-gray-600 hover:text-blue-600">
              Контакти
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Головна
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog/" className="hover:text-blue-600">
                Блог
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">Система оподаткування для фрілансерів</li>
          </ol>
        </nav>

                  {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Податки
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  2025
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Яку систему оподаткування обрати для фрілансера в Польщі у 2025 році?
              </h1>
              <div className="flex items-center space-x-4 text-gray-600 text-sm mb-6">
                <span>Опубліковано: 23 серпня 2025</span>
                <span>Читати: 8 хв</span>
              </div>
              
              {/* Hero Image */}
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
                <img
                  src="/images/tax-system-guide.jpg"
                  alt="Система оподаткування для фрілансерів у Польщі - калькулятор та документи"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">Фото: Pexels</p>
                </div>
              </div>
            </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Фрілансери, які планують працювати в Польщі офіційно, повинні не лише зареєструвати бізнес, 
              але й обрати вигідну систему оподаткування. Від цього рішення залежить ваш чистий дохід, 
              суми внесків до ZUS, обсяг бухгалтерських обов'язків і навіть право на пільги. 
              У 2025 році польське податкове законодавство пропонує кілька варіантів, і важливо 
              розібратись у них до запуску діяльності.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Основні системи оподаткування для фрілансерів
            </h2>

            <p className="mb-6">
              Найпопулярніші системи для фрілансерів: <strong>ryczałt ewidencjonowany</strong> (єдиний податок), 
              <strong>лінійний PIT</strong> (19%) та <strong>загальна шкала</strong> (12% і 32%). 
              Більшість IT-фахівців, дизайнерів або маркетологів обирають ryczałt — завдяки низьким 
              ставкам (12% або 8,5%) і простому обліку.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Ryczałt ewidencjonowany</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Ставка: 12% або 8,5%</li>
                    <li>• Простий облік</li>
                    <li>• Не можна віднімати витрати</li>
                    <li>• Залежить від PKD-коду</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">Лінійний PIT</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Ставка: 19%</li>
                    <li>• Можна віднімати витрати</li>
                    <li>• Повна бухгалтерія</li>
                    <li>• Більше гнучкості</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-purple-600 mb-3">Загальна шкала</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 12% до 120 000 zł</li>
                    <li>• 32% понад 120 000 zł</li>
                    <li>• Доступ до пільг</li>
                    <li>• Соціальні механізми</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Ryczałт ewidencjonowany - найпопулярніший вибір
            </h2>

            <p className="mb-6">
              Але важливо враховувати обмеження: ви не можете віднімати витрати, і ставка залежить від PKD-коду. 
              Якщо маєте витрати на техніку, програмне забезпечення чи підрядників — можливо, 
              вам вигідніше перейти на PIT.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Порада експерта</h3>
              <p className="text-blue-800">
                Для IT-фрілансерів з високими витратами на техніку та програмне забезпечення 
                ryczałt може бути невигідним. Розрахуйте обидва варіанти перед вибором.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Лінійний PIT - для тих, хто має витрати
            </h2>

            <p className="mb-6">
              Лінійний PIT із ставкою 19% підходить тим, у кого високі витрати на ведення діяльності. 
              Тут дозволено віднімати витрати, наприклад, оренду офісу, ноутбук чи послуги підрядників. 
              Такий варіант дає більше гнучкості, але вимагає ведення повної бухгалтерії й складнішої звітності.
            </p>

            <p className="mb-6">
              У деяких випадках фахівці комбінують систему оподаткування з працевлаштуванням у 
              <strong>Spółka z o.o.</strong>, щоб оптимізувати внески до ZUS Польща і зменшити 
              загальне податкове навантаження.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Загальна шкала PIT - для соціальних пільг
            </h2>

            <p className="mb-6">
              Загальна шкала PIT (12% до 120 000 злотих доходу) — менш популярна серед фрілансерів, 
              але вона дає доступ до податкових пільг, наприклад, спільного подання з подружжям або 
              вирахування на дітей. Вона може бути вигідною тим, хто має низький дохід і хоче 
              скористатися соціальними механізмами.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              ZUS - окреме питання для всіх
            </h2>

            <p className="mb-6">
              ZUS залишається окремим питанням. Усі власники JDG зобов'язані сплачувати щомісячні 
              внески — незалежно від того, чи отримують дохід. У 2025 році існують пільги для новачків: 
              <strong>"mały ZUS"</strong> або <strong>"ulga na start"</strong>, що дозволяє знизити 
              навантаження в перші місяці роботи.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">⚠️ Важливо знати</h3>
              <p className="text-yellow-800">
                Якщо ви плануєте працювати через Spółka z o.o., і не оформляєте себе як працівника 
                або члена правління з контрактом, то внески до ZUS можуть бути необов'язковими. 
                Проте варто пам'ятати, що це має податкові наслідки.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Як обрати оптимальну систему?
            </h2>

            <p className="mb-6">
              Щоб точно визначити, яка система вам підходить, потрібен аналіз вашої діяльності, 
              доходів і витрат. Якщо ви не орієнтуєтесь у польських термінах або не впевнені 
              у правильному виборі, краще звернутися до бухгалтерського сервісу для IT-фахівців, 
              який врахує всі нюанси та порадить оптимальну модель.
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Висновок</h3>
              <p className="text-green-800">
                Правильно обрана система оподаткування — це не лише економія, а й захист від штрафів і стресу. 
                Якщо ви хочете працювати легально, сплачувати податки без зайвих витрат і бути готовим 
                до перевірок, зверніться до бухгалтера в Польщі, який говорить українською. 
                Це перший крок до стабільного й прозорого бізнесу у 2025 році.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center my-8">
              <h3 className="text-2xl font-bold mb-4">
                Потрібна консультація по податках?
              </h3>
              <p className="text-blue-100 mb-6">
                Наші бухгалтери допоможуть обрати оптимальну систему оподаткування 
                та налаштувати облік для вашого бізнесу
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link
                  href="https://www.infakt.pl/polecam/yaroslav-kostak"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                >
                  Отримати консультацію
                </Link>
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Пов'язані статті
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <Link href="/blog/stawki-ryczalt-2025/" className="hover:text-blue-600">
                      Ставки ryczałt 2025 - що змінилося?
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Оновлені ставки єдиного податку для фрілансерів у Польщі у 2025 році
                  </p>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Податки
                  </Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <Link href="/blog/jdg-registration-guide/" className="hover:text-blue-600">
                      Реєстрація JDG для українців
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Покроковий гід по реєстрації бізнесу в Польщі
                  </p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Реєстрація
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18l-7.5-4.5v-6.75L15.75 6v9.75Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6v9.75l-7.5-4.5v-6.75L15.75 6Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6V6Z" />
                </svg>
                <Link
                  href="/"
                  className="text-lg font-semibold hover:text-blue-400 transition-colors"
                >
                  Freelancer.org.pl
                </Link>
              </div>
              <p className="text-gray-400 text-sm max-w-2xl">
                Сайт freelancer.org.pl є інформаційним ресурсом у межах партнерської програми inFakt. 
                Метою сайту є ознайомлення з сервісом та його можливостями для підприємців в Польщі.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Швидкі посилання</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact/" className="text-gray-400 hover:text-white transition-colors">
                    Контакти
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy/" className="text-gray-400 hover:text-white transition-colors">
                    Політика конфіденційності
                  </Link>
                </li>
                <li>
                  <Link href="/terms/" className="text-gray-400 hover:text-white transition-colors">
                    Умови використання
                  </Link>
                </li>
                <li>
                  <Link href="/blog/" className="text-gray-400 hover:text-white transition-colors">
                    Всі статті
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Контакти</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@freelancer.org.pl</li>
                <li>
                  Адреса: 31-445 Kraków, ul. płk. pil. Stefana Łaszkiewicza 2
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {DynamicYear()} Freelancer.org.pl. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
