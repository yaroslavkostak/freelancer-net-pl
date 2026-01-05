import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  FileText,
  Users,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ServiceIcons } from "@/components/service-icons";
import { VisualCTASection } from "@/components/visual-cta-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { DynamicYear } from "@/components/dynamic-year";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Професійна іконка калькулятора */}
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
              href="https://freelancer.org.pl/"
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              rel="nofollow"
            >
              Рекомендую inFakt
            </Link>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10 justify-center flex-1">
            <Link
              href="#company-choice"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              {/* Професійна іконка будівлі */}
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-6.75 3.75h6.75m-6.75 3.75h6.75" />
              </svg>
              Оберіть рішення
            </Link>
            <Link
              href="#recommended-accountants"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              {/* Професійна іконка групи користувачів */}
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              Бухгалтери
            </Link>
            <Link
              href="#business-management"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              {/* Професійна іконка калькулятора */}
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18l-7.5-4.5v-6.75L15.75 6v9.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6v9.75l-7.5-4.5v-6.75L15.75 6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6V6Z" />
              </svg>
              Облік
            </Link>
            <Link
              href="#business-guide"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              {/* Професійна іконка портфеля */}
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              Покроковий гід
            </Link>
            <Link
              href="#faq"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              {/* Професійна іконка питання */}
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
              Питання
            </Link>
          </nav>
          {/* Mobile Menu */}
          <div className="md:hidden">
            {/* Тут можна додати компонент випадаючого меню (наприклад, Drawer/Sheet) з тими ж пунктами */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row gap-6 items-center">
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
              <h1 className="text-2xl md:text-3xl font-semibold mb-6">
                Бухгалтер в Польщі для українців - Варшава, Краків, Вроцлав,
                Познань
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-xl">
                Професійний бухгалтер в Польщі для українців. Бухгалтер Варшава,
                бухгалтер Краків, бухгалтер Вроцлав, бухгалтер Познань.
                Реєстрація ФОП (JDG) та ТОВ, ведення бухгалтерського обліку,
                податкові консультації українською мовою. Бухгалтер для ФОП від
                189 zł/міс. Бугалтери платформи Infakt все зроблять, як треба!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold shadow-lg"
                >
                  <Link
                    href="https://www.infakt.pl/polecam/yaroslav-kostak"
                    target="_blank"
                  >
                    Знайти бухгалтера
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent text-lg px-8 py-6 font-semibold"
                  asChild
                >
                  <Link
                    href="https://www.infakt.pl/polecam/yaroslav-kostak"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                  >
                    Відвідайте сайт
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[600px] mx-auto overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4491441/pexels-photo-4491441.jpeg"
                  alt="Успішні клієнти БухОнлайн"
                  width={600}
                  height={480}
                  className="rounded-lg shadow-2xl w-full h-auto max-w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
            <div className="flex items-center gap-3 bg-green-50 rounded-2xl px-6 py-4 w-full md:w-96 h-24 justify-center shadow-lg">
              <svg
                className="h-8 w-8 text-green-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-green-900 font-semibold text-base text-center">
                9,7 з 10 клієнтів inFaktu рекомендують свого бухгалтера друзям!
              </span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-2xl px-6 py-4 w-full md:w-96 h-24 justify-center shadow-lg">
              <svg
                className="h-8 w-8 text-green-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-green-900 font-semibold text-base text-center">
                98% клієнтів залишають позитивний відгук після звернення до
                служби підтримки
              </span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-2xl px-6 py-4 w-full md:w-96 h-24 justify-center shadow-lg">
              <svg
                className="h-8 w-8 text-green-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-green-900 font-semibold text-base text-center">
                Високі рейтинги: Google (4,9) , Facebook (94%) , AppStore (4,8)
                та Google Play (4,8)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Choice Section */}
      <section id="company-choice" className="bg-[#f5f8fa] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
            Оберіть рішення для вашої діяльності
          </h2>
          <div className="flex flex-col md:flex-row justify-center mb-8 gap-4 md:gap-8 items-center">
            <div className="flex flex-col items-center w-full md:w-auto">
              <button className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-sm border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-lg">
                Відкрити JDG (як ФОП)
              </button>
              <span className="text-gray-500 text-sm mt-2 text-center max-w-xs">
                Для тих, хто хоче відкрити індивідуальне підприємництво
                (Jednoosobowa Działalność Gospodarcza) — аналог ФОП в Польщі.
              </span>
            </div>
            <div className="flex flex-col items-center w-full md:w-auto">
              <button className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-sm border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-lg">
                Створити компанію Spółka z o.o. (як ТОВ)
              </button>
              <span className="text-gray-500 text-sm mt-2 text-center max-w-xs">
                Для тих, хто хоче створити компанію з обмеженою відповідальністю
                (Spółka z o.o.) — аналог ТОВ у Польщі.
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Індивідуальне підприємництво */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  {/* Noun Project icon: user */}
                  <svg
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  Індивідуальна підприємницька діяльність
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Бухгалтери inFakt допоможуть вам безкоштовно відкрити
                індивідуальну підприємницьку діяльність та вести бухгалтерський
                облік.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-baseline">
                  <span className="text-gray-700 mr-2 text-sm">
                    Вартість відкриття JDG -
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    0,00 zł
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-gray-700 mr-2 text-sm">
                    Ведення бухгалтерського обліку -
                  </span>
                  <span className="text-gray-700 text-sm">
                    від <span className="text-xl font-bold">189,00 zł</span>
                  </span>
                </div>
              </div>
              <a
                href="https://www.infakt.pl/polecam/yaroslav-kostak"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 mb-2 transition"
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                Почати індивідуальну підприємницьку діяльність
              </a>
              <a
                href="https://www.infakt.pl/polecam/yaroslav-kostak"
                className="block w-full text-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-lg py-3 mb-4 transition"
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                Дізнатися більше
              </a>
              <ul className="text-gray-700 text-base space-y-2 mt-auto">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>Безкоштовний
                  запуск бізнесу
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>Постійна турбота
                  бухгалтера
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>Відповідальність
                  за бухгалтерський облік
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>додаток inFakt
                </li>
              </ul>
            </div>
            {/* ТОВ */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  {/* Noun Project icon: user group */}
                  <svg
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="9" cy="7" r="4" />
                    <circle cx="17" cy="17" r="4" />
                    <path d="M17 13a4 4 0 0 0-8 0" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  Товариство з обмеженою відповідальністю
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Бухгалтери inFakt допоможуть вам створити товариство з обмеженою
                відповідальністю, вести бухгалтерський облік та податкову
                звітність.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-baseline">
                  <span className="text-gray-700 mr-2 text-sm">
                    Вартість відкриття Spółka z o.o. -
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    199,00 zł
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-gray-700 mr-2 text-sm">
                    Ведення бухгалтерського обліку -
                  </span>
                  <span className="text-gray-700 text-sm">
                    від <span className="text-xl font-bold">619,00 zł</span>
                  </span>
                </div>
              </div>
              <a
                href="https://www.infakt.pl/polecam/yaroslav-kostak"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 mb-2 transition"
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                Створити товариство з обмеженою відповідальністю
              </a>
              <a
                href="https://www.infakt.pl/polecam/yaroslav-kostak"
                className="block w-full text-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-lg py-3 mb-4 transition"
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                Дізнатися більше
              </a>
              <ul className="text-gray-700 text-base space-y-2 mt-auto">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>Зручне створення
                  компанії
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>Постійна турбота
                  бухгалтера
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>Відповідальність
                  за бухгалтерський облік
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>додаток inFakt
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Accountants */}
      <section id="recommended-accountants" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
              Рекомендовані бухгалтери в Польщі
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ви можете вирішити всі свої бухгалтерські потреби персонально по
              телефону або електронною поштою. Є бугалтери, які добре розуміють
              українську мову!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                name: "Irina Halko",
                rating: 9.8,
                reviews: 77,
                price: "від 279 zł / міс.",
                isVip: true,
              },
              {
                id: 2,
                name: "Iryna Kim",
                rating: 9.8,
                reviews: 22,
                price: "від 299 zł / міс.",
                isVip: false,
              },
              {
                id: 3,
                name: "Olha Leonova",
                rating: 9.5,
                reviews: 21,
                price: "від 349 zł / міс.",
                isVip: false,
              },
              {
                id: 4,
                name: "Liudmyla Vasylkiv",
                rating: 10.0,
                reviews: 43,
                price: "від ~189 zł / міс.",
                isVip: false,
              },
              {
                id: 5,
                name: "Alina Mysan",
                rating: 9.8,
                reviews: 19,
                price: "400 zł / міс.",
                isVip: false,
              },
              {
                id: 6,
                name: "Justyna Kulikowska",
                rating: 9.0,
                reviews: 0,
                price: "1200 zł / міс.",
                isVip: false,
              },
            ].map((accountant) => (
              <Card
                key={accountant.id}
                className={`text-center p-6 hover:shadow-lg transition-shadow ${accountant.isVip ? "ring-2 ring-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50" : ""}`}
              >
                <CardContent className="p-0">
                  {accountant.isVip && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                      VIP
                    </div>
                  )}
                  <div className="relative">
                    <div className="w-[120px] h-[120px] mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/girl-icon.png"
                        alt={`${accountant.name} - бухгалтер`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {accountant.name}
                  </h3>

                  <div className="flex items-center justify-center mb-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500 font-bold text-lg mr-1">
                        {accountant.rating}
                      </span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= Math.floor(accountant.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-2">
                    {accountant.reviews} відгуків
                  </p>
                  <p className="text-lg font-bold text-green-600 mb-3">
                    {accountant.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link
                href="https://www.infakt.pl/polecam/yaroslav-kostak"
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                Знайти свого бухгалтера
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Management */}
      <section id="business-management" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
              Вся бухгалтерія онлайн в одному місці
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full max-w-[600px] mx-auto overflow-hidden">
              <ImagePlaceholder
                width={600}
                height={400}
                alt="Інтерфейс системи управління бухгалтерським обліком"
                type="dashboard"
                className="rounded-lg shadow-lg w-full h-auto max-w-full"
              />
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-500">
                  <a
                    href="https://www.infakt.pl/polecam/yaroslav-kostak"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    inFakt.pl
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Документообіг
                  </h3>
                  <p className="text-gray-600">
                    Створення та управління всіма документами компанії
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18l-7.5-4.5v-6.75L15.75 6v9.75Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6v9.75l-7.5-4.5v-6.75L15.75 6Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6V6Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Фінансовий облік
                  </h3>
                  <p className="text-gray-600">
                    Повний контроль над фінансами та звітністю
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 01 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 01 6 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 00 12 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Управління клієнтами
                  </h3>
                  <p className="text-gray-600">
                    База клієнтів та історія взаємодії
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section
        id="accounting-services"
        className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
              Ведення бухгалтерського обліку та консультації
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Перший блок акордеонів */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Реєстрація та відкриття бізнесу
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Відкриття бізнесу в Польщі для українців
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Відкриття власного бізнесу в Польщі — популярний вибір
                        серед українців, які прагнуть легалізувати роботу та
                        мати стабільний дохід у Європейському Союзі. Залежно від
                        виду діяльності, індивідуальних потреб та податкового
                        планування, підприємці можуть зареєструвати ФОП
                        (jednoosobowa działalność gospodarcza) або ТОВ (spółka z
                        o.o.).
                      </p>
                      <p>
                        Для належного функціонування бізнесу необхідна
                        професійна бухгалтерська підтримка. Особливо актуальним
                        є пошук бухгалтера, який надає консультації українською,
                        російською або англійською мовами — для тих, хто ще не
                        володіє польською вільно. Сервіс inFakt дозволяє обрати
                        фахівця з відповідною мовною підтримкою та досвідом
                        роботи з підприємцями з України.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Відкрити ФОП у Польщі для українців: як це працює
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Реєстрація ФОП у Польщі включає кілька обов'язкових
                        етапів: подання заявки через CEIDG, отримання
                        податкового номера (NIP), внесення до ZUS, вибір форми
                        оподаткування та відкриття рахунку в банку. Для
                        новоприбулих українців цей процес може бути складним без
                        належного розуміння польського законодавства.
                      </p>
                      <p>
                        Сервіс inFakt надає підтримку на кожному етапі:
                        підготовка документів, консультування щодо податкової
                        системи (ryczałt, liniowy, skala), допомога з
                        реєстрацією в ZUS і, за потреби, реєстрація платником
                        VAT. Процес здійснюється онлайн, із супроводом
                        бухгалтера, який спілкується зрозумілою мовою.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Бухгалтер українською, російською чи англійською
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Професійна бухгалтерська підтримка — ключовий елемент
                        стабільної роботи бізнесу. Підприємці з України часто
                        звертаються з потребою отримати консультацію не
                        польською, а мовою, яку краще розуміють. Сервіс inFakt
                        дозволяє обрати бухгалтера, який веде облік і надає
                        підтримку українською, російською або англійською.
                      </p>
                      <p>
                        Бухгалтер не лише обробляє податкову документацію, а й
                        пояснює важливі аспекти законодавства, терміни сплати
                        податків, принципи виставлення рахунків-фактур,
                        особливості співпраці з іноземними клієнтами та правила
                        подання звітності. Це зменшує кількість помилок і
                        дозволяє зосередитись на розвитку бізнесу.
                      </p>
                      <p>
                        Крім того, бухгалтер допомагає оптимізувати податкове
                        навантаження, консультує щодо можливих пільг та знижок,
                        а також надає рекомендації щодо ведення бізнесу
                        відповідно до польського законодавства. Це особливо
                        важливо для нових підприємців, які ще не знайомі з
                        місцевими особливостями ведення бізнесу.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Які послуги надає бухгалтер через inFakt
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Бухгалтер, який працює через платформу inFakt,
                        супроводжує процес реєстрації бізнесу з нуля. Власник
                        майбутнього ФОП або ТОВ отримує консультації щодо вибору
                        форми діяльності, підготовки документів, реєстрації в
                        ZUS, оформлення KPiR, ведення обліку для VAT і PIT, а
                        також підтримку при відкритті банківського рахунку.
                      </p>
                      <p>
                        Ведення бухгалтерії здійснюється онлайн через зручний
                        особистий кабінет. Користувач має змогу створювати
                        рахунки-фактури, бачити суми податків, переглядати
                        звіти, отримувати автоматичні нагадування про сплату
                        внесків. Всі податкові декларації формуються автоматично
                        на основі внесених даних, що мінімізує ризик помилок.
                      </p>
                      <p>
                        Бухгалтер також допомагає організувати фінансову
                        документацію при співпраці з польськими чи іноземними
                        клієнтами, консультує щодо податкових знижок та
                        роз'яснює зміни у законодавстві. Вся комунікація можлива
                        телефоном, електронною поштою або через месенджери —
                        українською, російською або англійською мовами.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Бухгалтерія для українців: дистанційно, зрозуміло, зручно
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Сервіс inFakt створений з урахуванням потреб
                        підприємців, які цінують комфорт і прозорість у веденні
                        бізнесу. Платформа дозволяє працювати з бухгалтером
                        незалежно від місця проживання — у Варшаві, Кракові,
                        будь-якому місті Польщі чи повністю дистанційно.
                      </p>
                      <p>
                        Наявність україномовних спеціалістів робить цей сервіс
                        оптимальним вибором для тих, хто вперше відкриває бізнес
                        у Польщі, хоче працювати легально та не витрачати зайвий
                        час на бюрократичні процедури. Онлайн-бухгалтерія — це
                        сучасне рішення для фрилансерів, малого бізнесу,
                        IT-фахівців та надавачів послуг.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Чому обирають inFakt для українців у Польщі?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        inFakt — це не просто бухгалтерія, а ваш партнер у
                        розвитку бізнесу. Ми гарантуємо прозорість, сучасний
                        онлайн-сервіс, підтримку українською, російською та
                        англійською, а також індивідуальний підхід до кожного
                        клієнта. Ви зможете зосередитися на розвитку своєї
                        справи, а всі питання щодо податків, ZUS, VAT, PIT,
                        KPiR, рахунків-фактур, співпраці з клієнтами та
                        державними органами ми беремо на себе.
                      </p>
                      <p>
                        Не відкладайте розвиток своєї справи через мовні
                        бар'єри! Довірте бухгалтерію професіоналам, які
                        розуміють ваші потреби та завжди готові допомогти
                        українською, російською чи англійською. Відкрийте ФОП у
                        Польщі з inFakt — і отримайте надійного партнера для
                        вашого бізнесу!
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Другий блок акордеонів */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Податки, звітність та фінанси
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    Податкова система Польщі: PIT, VAT, ZUS для українців
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Податкова система Польщі включає кілька основних
                        податків, які повинен сплачувати кожен підприємець. PIT
                        (Podatek dochodowy od osób fizycznych) — це податок на
                        доходи фізичних осіб, який залежить від обраної форми
                        оподаткування: ryczałt (єдиний податок), skala podatkowa
                        (прогресивна шкала) або podatek liniowy (лінійний
                        податок).
                      </p>
                      <p>
                        VAT (Podatek od towarów i usług) — це податок на додану
                        вартість, який повинні сплачувати підприємці з оборотом
                        понад 200 000 злотих на рік. ZUS (Zakład Ubezpieczeń
                        Społecznych) — це соціальне страхування, яке включає
                        пенсійні внески, внески на медичне страхування та внески
                        до Фонду праці.
                      </p>
                      <p>
                        Бухгалтери inFakt допоможуть вам обрати оптимальну форму
                        оподаткування, зареєструватися платником VAT, правильно
                        розрахувати та сплатити всі податки, а також подати
                        необхідні декларації вчасно.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>
                    Щомісячна звітність та податкові декларації
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Кожен підприємець у Польщі повинен подавати регулярні
                        звіти та декларації. Для ФОП це включає щомісячні
                        декларації VAT-7 (якщо зареєстрований платником VAT),
                        квартальні декларації PIT-5L (для ryczałt) або річні
                        декларації PIT-36/PIT-37 (для інших форм оподаткування).
                      </p>
                      <p>
                        Для ТОВ необхідно подавати щомісячні декларації VAT-7,
                        квартальні декларації CIT-8 та річні декларації CIT-8.
                        Також потрібно вести KPiR (Księga przychodów i
                        rozchodów) — книгу доходів та витрат, яка є основою для
                        податкового обліку.
                      </p>
                      <p>
                        Сервіс inFakt автоматизує процес подачі всіх декларацій.
                        Бухгалтер підготує та подасть всі необхідні документи, а
                        ви отримаєте нагадування про терміни сплати податків та
                        внесків.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>
                    Банківські рахунки та фінансове планування
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Після реєстрації бізнесу в Польщі необхідно відкрити
                        банківський рахунок для підприємницької діяльності.
                        Популярні банки серед українців включають PKO Bank
                        Polski, mBank, ING Bank Śląski та інші. Для відкриття
                        рахунку потрібні документи про реєстрацію бізнесу, NIP
                        та особисті документи.
                      </p>
                      <p>
                        Бухгалтери inFakt допоможуть вам обрати найкращий банк
                        для вашого бізнесу, підготують необхідні документи та
                        супроводять процес відкриття рахунку. Також вони
                        допоможуть налаштувати інтеграцію банківського рахунку з
                        платформою inFakt для автоматичного імпорту транзакцій.
                      </p>
                      <p>
                        Фінансове планування включає прогнозування доходів та
                        витрат, планування податкових платежів, оптимізацію
                        грошових потоків та стратегічне планування розвитку
                        бізнесу. Професійний бухгалтер допоможе вам приймати
                        обґрунтовані фінансові рішення.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger>
                    Міжнародна торгівля та експорт-імпорт
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Якщо ваш бізнес планує працювати з іноземними клієнтами
                        або постачальниками, важливо розуміти особливості
                        міжнародної торгівлі. Для експорту товарів або послуг за
                        межі ЄС потрібно отримати EORI номер та правильно
                        оформляти митні документи.
                      </p>
                      <p>
                        При роботі з клієнтами з інших країн ЄС
                        (внутрішньоєвропейська торгівля) потрібно правильно
                        оформляти рахунки-фактури з позначкою
                        "Wewnątrzwspólnotowa dostawa towarów" або
                        "Wewnątrzwspólnotowe świadczenie usług". Це дозволяє не
                        сплачувати VAT при експорті в країни ЄС.
                      </p>
                      <p>
                        Бухгалтери inFakt мають досвід роботи з міжнародною
                        торгівлею та допоможуть вам правильно оформляти всі
                        документи, розраховувати податки та подавати необхідні
                        звіти до митних органів та податкової служби.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger>
                    Аудит та податкова оптимізація
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Регулярний аудит фінансової звітності допомагає виявити
                        помилки, оптимізувати податкове навантаження та
                        покращити ефективність бізнесу. Бухгалтери inFakt
                        проводять комплексний аналіз вашої фінансової діяльності
                        та надають рекомендації щодо оптимізації.
                      </p>
                      <p>
                        Податкова оптимізація включає вибір найкращої форми
                        оподаткування, використання податкових пільг та знижок,
                        правильне оформлення витрат та максимізацію податкових
                        відрахувань. Це дозволяє законно зменшити податкове
                        навантаження та зберегти більше коштів для розвитку
                        бізнесу.
                      </p>
                      <p>
                        Професійний бухгалтер також допоможе вам уникнути
                        податкових ризиків, правильно інтерпретувати зміни в
                        законодавстві та забезпечити повну відповідність вашої
                        діяльності польському податковому праву.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger>
                    Цифрові інструменти та автоматизація
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Сучасна бухгалтерія неможлива без використання цифрових
                        інструментів. Платформа inFakt надає повний набір
                        інструментів для автоматизації бухгалтерських процесів:
                        створення рахунків-фактур, відстеження платежів,
                        генерація звітів та інтеграція з банківськими рахунками.
                      </p>
                      <p>
                        Мобільний додаток inFakt дозволяє керувати бізнесом з
                        будь-якого місця: створювати рахунки-фактури,
                        переглядати фінансові звіти, отримувати нагадування про
                        податки та спілкуватися з бухгалтером. Це особливо
                        зручно для підприємців, які часто перебувають у дорозі.
                      </p>
                      <p>
                        Автоматизація дозволяє зменшити кількість помилок,
                        економити час на рутинних операціях та зосередитися на
                        розвитку бізнесу. Бухгалтери inFakt допоможуть вам
                        налаштувати всі необхідні інтеграції та навчать
                        ефективно використовувати цифрові інструменти.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Business Guide Section */}
      <section id="business-guide" className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Покроковий гід для ведення легального бізнесу у Польщі
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Детальний план дій для українців, які хочуть почати бізнес у
              Польщі
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Step 1: Як почати */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Як почати</h3>
                </div>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Українці в Польщі часто стикаються з тим, що документи й
                    податки виглядають складно. Насправді весь процес можна
                    пройти поетапно.
                  </p>
                  <p>
                    <strong>Для старту достатньо мати:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-3 text-gray-900">
                    <li>Паспорт або карту перебування</li>
                    <li>Номер PESEL</li>
                    <li>Адресу проживання</li>
                    <li>Банківський рахунок</li>
                  </ul>
                </div>
              </div>

              {/* Step 2: Вибір форми бізнесу */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 mr-3">
                    <span className="text-xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Вибір форми бізнесу
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    <strong>ФОП (JDG)</strong> — найпоширеніший варіант для
                    українців. Підходить для фрілансерів, айтішників,
                    консультантів.
                  </p>
                  <p>
                    <strong>ТОВ (Sp. z o.o.)</strong> — зручне для партнерського
                    бізнесу, інтернет-магазинів, компаній з більшими оборотами.
                  </p>
                  <p className="text-xs text-gray-900">
                    JDG реєструється безкоштовно онлайн через CEIDG, тоді як Sp.
                    z o.o. потребує подання до KRS та стартового капіталу у 5000
                    zł.
                  </p>
                </div>
              </div>

              {/* Step 3: Податки та ZUS */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-3">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Податки та ZUS
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    <strong>Система оподаткування:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-3 text-gray-900">
                    <li>Прогресивна шкала: 12% і 32% із пільгою 30 000 zł</li>
                    <li>Лінійний податок: 19%</li>
                    <li>Ричалт: фіксований відсоток від виручки</li>
                  </ul>
                  <p className="text-xs text-gray-900">
                    Перші 6 місяців діє "ulga na start" — тільки медичний внесок
                    (314,96 zł).
                  </p>
                </div>
              </div>

              {/* Step 4: VAT і міжнародна робота */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 rounded-full p-3 mr-3">
                    <span className="text-xl font-bold text-orange-600">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    VAT і міжнародна робота
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    <strong>Реєстрація VAT:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-3 text-gray-900">
                    <li>Якщо оборот менше 200 000 zł — можна без VAT</li>
                    <li>Для співпраці з ЄС — краще зареєструватися</li>
                    <li>Інтернет-магазини — система OSS для всього ЄС</li>
                  </ul>
                </div>
              </div>

              {/* Step 5: Банківський рахунок і бухгалтерія */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-red-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-full p-3 mr-3">
                    <span className="text-xl font-bold text-red-600">5</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Банківський рахунок і бухгалтерія
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    <strong>Банківський рахунок:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-3 text-gray-900">
                    <li>ФОП може працювати з особистим рахунком</li>
                    <li>Для безпеки — краще бізнес-рахунок</li>
                    <li>Автоматична інтеграція з бухгалтерією</li>
                  </ul>
                  <p className="text-xs text-gray-900">
                    Сервіс inFakt забезпечує онлайн-доступ до всіх документів.
                  </p>
                </div>
              </div>

              {/* Step 6: Щомісячні обов'язки */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-teal-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 rounded-full p-3 mr-3">
                    <span className="text-xl font-bold text-teal-600">6</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Щомісячні обов'язки
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    <strong>Щомісячні звіти:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-3 text-gray-900">
                    <li>JPK_V7 (для платників VAT)</li>
                    <li>Сплата податків та внесків до ZUS</li>
                  </ul>
                  <p>
                    <strong>Дедлайни:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-3 text-gray-900">
                    <li>20 число: ZUS та PIT</li>
                    <li>25 число: VAT</li>
                  </ul>
                </div>
              </div>

              {/* Step 7: Вартість послуг */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-indigo-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 rounded-full p-3 mr-3">
                    <span className="text-xl font-bold text-indigo-600">7</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Вартість послуг
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    <strong>Ведення обліку:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-3 text-gray-900">
                    <li>ФОП: від 189 zł на місяць</li>
                    <li>ТОВ: від 619 zł на місяць</li>
                  </ul>
                  <p>
                    <strong>Реєстрація:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-3 text-gray-900">
                    <li>JDG через CEIDG: безкоштовно</li>
                    <li>Sp. z o.o. у KRS: 250 zł + 100 zł публікація</li>
                  </ul>
                </div>
              </div>

              {/* Step 8: Як отримати допомогу */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-pink-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 rounded-full p-3 mr-3">
                    <span className="text-xl font-bold text-pink-600">8</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Як отримати допомогу
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Вести бізнес у Польщі без бухгалтера ризиковано. Документи,
                    податки, внески та терміни швидко заплутують.
                  </p>
                  <p>
                    <strong>Найзручніше рішення:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-3 text-gray-900">
                    <li>Українськомовний бухгалтер</li>
                    <li>Підкаже правильну форму оподаткування</li>
                    <li>Зареєструє бізнес</li>
                    <li>Вестиме облік онлайн</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link
                  href="https://www.infakt.pl/polecam/yaroslav-kostak"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                >
                  👉 Замовити бухгалтера!
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
              Часті питання та відповіді
            </h2>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>
                  Чи є в inFakt бухгалтери, які розмовляють українською?
                </AccordionTrigger>
                <AccordionContent>
                  Так, у inFakt працюють бухгалтери, які вільно спілкуються
                  українською та російською мовами, а також ті, хто добре
                  розуміє українську. Ви зможете отримати консультацію рідною
                  мовою.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>
                  Я не знаю польської мови. Чи зможу я користуватися сервісом?
                </AccordionTrigger>
                <AccordionContent>
                  Так, бухгалтери inFakt допоможуть вам на кожному етапі. Всі
                  документи, інструкції та консультації можуть бути надані
                  українською або російською мовою.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>
                  Чи допоможуть мені з відкриттям бізнесу в Польщі?
                </AccordionTrigger>
                <AccordionContent>
                  Так, бухгалтери inFakt допоможуть вам з усіма формальностями,
                  підготують документи та проконсультують щодо вибору форми
                  діяльності (ФОП/JDG чи ТОВ/Spółka z o.o.).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>
                  Чи можна вести бухгалтерію повністю онлайн?
                </AccordionTrigger>
                <AccordionContent>
                  Так, сервіс inFakt дозволяє вести всі справи онлайн: від
                  підписання договору до обміну документами та консультацій.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger>
                  Які документи потрібні для початку співпраці?
                </AccordionTrigger>
                <AccordionContent>
                  Для початку достатньо паспорта, ідентифікаційного коду та
                  базової інформації про ваш бізнес. Бухгалтери inFakt
                  підкажуть, якщо буде потрібно щось додатково.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger>
                  Скільки коштує ведення бухгалтерії в inFakt?
                </AccordionTrigger>
                <AccordionContent>
                  Вартість залежить від форми діяльності: для ФОП (JDG) від 189
                  злот на місяць, для ТОВ (Spółka z o.o.) від 619 злот на
                  місяць. Точну ціну можна дізнатися після консультації з
                  бухгалтером inFakt.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger>
                  Чи можна змінити бухгалтера в процесі співпраці?
                </AccordionTrigger>
                <AccordionContent>
                  Так, ви можете змінити бухгалтера в будь-який момент. Сервіс
                  inFakt дозволяє обрати нового спеціаліста, який краще
                  підходить вашим потребам або мовним вимогам.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                  href="https://freelancer.org.pl/"
                  className="text-lg font-semibold hover:text-blue-400 transition-colors"
                >
                  Freelancer.org.pl
                </Link>
              </div>
              <p className="text-gray-400 text-sm max-w-2xl">
                Сайт freelancer.org.pl є інформаційним ресурсом у межах
                партнерської програми inFakt. Метою сайту є ознайомлення з
                сервісом та його можливостями для підприємців в Польщі.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">
                Швидкі посилання
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Контакти
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Політика конфіденційності
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Умови використання
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
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
