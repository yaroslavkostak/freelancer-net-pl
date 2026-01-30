'use client';

import { useEffect, useMemo, useState } from 'react';
import Script from 'next/script';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DynamicYear } from "@/components/dynamic-year";
import { LanguageSwitcher } from "@/components/language-switcher";
import { translations, type Language } from "@/lib/translations";
import { CheckCircle, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import { navigationSectionsUk, getAllNavIds } from "@/lib/navigation";

export default function HomePage() {
  const language: Language = 'uk';
  const t = translations['uk'];
  const [activeSection, setActiveSection] = useState('introduction');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);

  const allNavIds = useMemo(() => getAllNavIds(navigationSectionsUk), []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'uk';
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSectionId = 'introduction';
      for (let i = allNavIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(allNavIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          currentSectionId = allNavIds[i];
          break;
        }
      }
      setActiveSection(currentSectionId);
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mobile-shell min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 -mx-[max(1rem,env(safe-area-inset-left))] md:mx-0 px-4 py-3 md:py-4">
        <div className="container mx-auto px-0 md:px-4 flex items-center justify-between">
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
            <button
              onClick={() => scrollToSection('jdg')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Реєстрація JDG
            </button>
            <button
              onClick={() => scrollToSection('taxation-systems')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Системи оподаткування
            </button>
            <button
              onClick={() => scrollToSection('zus-insurance')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Страхування ZUS
            </button>
            <button
              onClick={() => scrollToSection('how-to-start')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Як почати
            </button>
            <LanguageSwitcher currentLanguage={language} />
          </nav>
          <div className="md:hidden">
            <LanguageSwitcher currentLanguage={language} />
          </div>
        </div>
      </header>

      {/* Hero Section - зберігаємо як є */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-10 md:py-24">
        <div className="w-full max-w-6xl mx-auto px-0 md:px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-2">{t.hero.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Як почати працювати?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Крок 1 - Перевірте своє право на роботу</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Потрібен легальний статус перебування: PESEL UKR, карта тимчасового побиту або інший документ.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Крок 2 - Виберіть форму діяльності</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Незареєстрована діяльність (дохід до 3500-3600 злотих на місяць) або JDG для більших доходів.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Крок 3 - Зареєструйте бізнес</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Реєстрація JDG онлайн через CEIDG з Profil Zaufany. Процес займає близько 15 хвилин.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Крок 4 - Оберіть систему оподаткування</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Ryczałt: 12% для більшості послуг або 8,5% для вільних професій. Простіше за повний облік витрат.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Крок 5 - Налаштуйте бухгалтерію</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Оберіть бухгалтерську платформу або бухгалтера для обліку доходів та звітності.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
                  alt="Фрілансер в Польщі"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Перевага співпраці з inFakt</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                При обранні inFakt (близько 200 злотих на місяць) вони безкоштовно допоможуть відкрити фірму та налаштувати все необхідне. Ви зосереджуєтеся на роботі, а inFakt веде бухгалтерію та звітність.
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  <Link
                    href="https://www.infakt.pl/polecam/yaroslav-kostak"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                  >
                    Зареєструватися та переглянути свого бухгалтера
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Navigation - сайдбар починається біля заголовка статті */}
      <div className="flex w-full max-w-[100vw]">
        {/* Main Content Area */}
        <main className="flex-1 w-full min-w-0 max-w-3xl mx-auto px-0 md:px-2 py-8 md:py-12">
          {/* Introduction Section */}
          <section id="introduction" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Все про фріланс в Польщі станом на 2026
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Більшість українців приїхали до Польщі та хочуть легально працювати та заробляти гроші онлайн. <strong>Самозайнятість може бути легальною підставою для перебування українців в Польщі</strong>. Тому важливо знати, як все влаштовано. В цьому довіднику зібрана детальна інформація про всі аспекти роботи фрілансером в Польщі.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                У польському законодавстві немає окремого терміну "фрілансер". Фріланс розглядається як <strong>самостійна господарська діяльність</strong>. Це означає, що фрілансер є <em>підприємцем з усіма правами та обов'язками</em>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Польське право визнає кілька форм для ведення самостійної діяльності. Кожна форма має свої особливості, вимоги та обмеження. Вибір форми залежить від обсягу доходу, виду діяльності та особистих обставин.
              </p>

              <h3 id="introduction-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Чому Польща стала хабом для українських фрілансерів?
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Польща пропонує сприятливе середовище для фрілансерів з України. Географічна близькість, схожа ментальність та відкритий ринок праці роблять Польщу привабливою для українців.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Польська економіка активно розвивається. У ЄС за показниками ВВП поляки посідають шосте місце, безробіття в країні весь час падає. Попит на IT-спеціалістів, дизайнерів, маркетологів та інших фахівців постійно зростає. Це створює багато можливостей для українських фрілансерів.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Польща недавно увійшла до 20 найсильніших економік світу за обсягом ВВП. Значний внесок у цей розвиток зробили українці - після 2022 року в країну приїхало понад мільйон українських громадян, багато з яких активно працюють та сприяють економічному зростанню. Українські фахівці, зокрема фрілансери, стали важливою частиною польського ринку праці та економіки.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Джерела:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.worldbank.org/en/country/poland" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">World Bank - Poland</a> - офіційні дані про економіку Польщі та ВВП</li>
                  <li>- <a href="https://stat.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Główny Urząd Statystyczny</a> - польське статистичне управління, дані про економіку та ринок праці</li>
                  <li>- <a href="https://www.gov.pl/web/udsc-ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - Управління у справах іноземців, статистика українців в Польщі</li>
                </ul>
              </div>

              <h3 id="introduction-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Статистика фрілансу в Польщі
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                За даними статистики, в Польщі працює понад <strong>2 мільйони фрілансерів</strong>, що становить близько <strong>12-15% від загальної кількості працюючих</strong>. Ця цифра постійно зростає, особливо після 2022 року, коли до країни приїхало багато українських фахівців.
              </p>

              <h3 id="introduction-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Найзатребуваніші професії та середні заробітні плати
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ринок фрілансу в Польщі активно розвивається, і попит на різні професії постійно змінюється. Ось перелік найпопулярніших професій та їх середні заробітні плати у 2026 році:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>IT-спеціалісти та програмісти</strong> - від <strong>8000 до 25000 злотих</strong> на місяць (залежно від досвіду та технологій)</li>
                <li><strong>Веб-дизайнери та UI/UX дизайнери</strong> - від <strong>5000 до 15000 злотих</strong> на місяць</li>
                <li><strong>Графічні дизайнери</strong> - від <strong>4000 до 12000 злотих</strong> на місяць</li>
                <li><strong>Маркетологи та SMM-спеціалісти</strong> - від <strong>4500 до 14000 злотих</strong> на місяць</li>
                <li><strong>Копірайтери та контент-менеджери</strong> - від <strong>3500 до 10000 злотих</strong> на місяць</li>
                <li><strong>Перекладачі</strong> - від <strong>4000 до 12000 злотих</strong> на місяць (залежно від мови та спеціалізації)</li>
                <li><strong>Репетитори та онлайн-викладачі</strong> - від <strong>3000 до 8000 злотих</strong> на місяць</li>
                <li><strong>Бухгалтери та фінансові консультанти</strong> - від <strong>5000 до 15000 злотих</strong> на місяць</li>
                <li><strong>Фотографи та відеографі</strong> - від <strong>4000 до 12000 злотих</strong> на місяць</li>
                <li><strong>Архітектори та інженери</strong> - від <strong>6000 до 18000 злотих</strong> на місяць</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Важливо враховувати, що ці цифри є орієнтовними та залежать від досвіду, портфоліо, складності проектів та мови спілкування з клієнтами.</em>
              </p>

              <h3 id="introduction-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Платформи для фрілансерів
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Існує багато платформ, де фрілансери можуть знайти роботу. Ось короткий огляд найпопулярніших:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Upwork</strong> - одна з найбільших глобальних платформ з широким спектром проектів</li>
                <li><strong>Fiverr</strong> - популярна платформа для продажу послуг за фіксованими пакетами</li>
                <li><strong>Freelancer.com</strong> - міжнародна платформа з конкурсами та проектами</li>
                <li><strong>Toptal</strong> - платформа для топових фрілансерів з високими вимогами</li>
                <li><strong>PeoplePerHour</strong> - популярна в Європі платформа для різних професій</li>
                <li><strong>99designs</strong> - спеціалізована платформа для дизайнерів</li>
                <li><strong>Guru</strong> - платформа з акцентом на довгострокові стосунки</li>
                <li><strong>Behance</strong> - платформа для демонстрації портфоліо та пошуку клієнтів</li>
                <li><strong>LinkedIn</strong> - професійна соціальна мережа для пошуку клієнтів та проектів</li>
                <li><strong>NoFluffJobs</strong> - популярна в Польщі платформа для IT-спеціалістів</li>
                <li><strong>JustJoinIT</strong> - польська платформа для технічних спеціалістів</li>
              </ul>

              <h3 id="introduction-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Середні погодинні ставки
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Погодинні ставки значно відрізняються залежно від регіону, досвіду та професії. Ось орієнтовні середні ставки:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Польща</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>IT-спеціалісти: <strong>80-200 злотих/год</strong></li>
                  <li>Дизайнери: <strong>60-150 злотих/год</strong></li>
                  <li>Маркетологи: <strong>50-120 злотих/год</strong></li>
                  <li>Перекладачі: <strong>40-100 злотих/год</strong></li>
                  <li>Копірайтери: <strong>40-90 злотих/год</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Європа</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>IT-спеціалісти: <strong>30-80 євро/год</strong></li>
                  <li>Дизайнери: <strong>25-60 євро/год</strong></li>
                  <li>Маркетологи: <strong>20-50 євро/год</strong></li>
                  <li>Перекладачі: <strong>20-45 євро/год</strong></li>
                  <li>Копірайтери: <strong>18-40 євро/год</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Америка (США/Канада)</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>IT-спеціалісти: <strong>40-120 доларів/год</strong></li>
                  <li>Дизайнери: <strong>30-80 доларів/год</strong></li>
                  <li>Маркетологи: <strong>25-70 доларів/год</strong></li>
                  <li>Перекладачі: <strong>20-50 доларів/год</strong></li>
                  <li>Копірайтери: <strong>20-45 доларів/год</strong></li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Ставки залежать від багатьох факторів: досвіду, складності проекту, мови спілкування, репутації на платформі та індивідуальних навичок.</em>
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Польська система оподаткування досить проста та прозора. Є кілька систем оподаткування, які можна обрати залежно від доходу та виду діяльності. Це дозволяє оптимізувати податкове навантаження.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Маленький статутний капітал становить 1200 євро або 5000 злотих. Крім цього, ця сума не обов'язково має перебувати на банківському рахунку. Повний соцпакет включає безкоштовну медицину та освіту. Розширення ринку дозволяє вести бізнес з усіма країнами ЄС.
              </p>

            </div>
          </section>

          {/* Legal Status Section */}
          <section id="legal-status" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Легальне перебування і фріланс в Польщі
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Дуже важливо знати, що працювати фрілансером в Польщі без належного легального статусу перебування заборонено законом. 
                Порушення правил може призвести до <strong>штрафів до 5000 злотих, депортації та заборони в'їзду в країни Шенгенської зони на термін до 5 років</strong>. 
                За даними UDSC, понад мільйон українців легально працюють в Польщі, і правильне оформлення документів - це основа успішної кар'єри фрілансера.
              </p>

              <h3 id="legal-status-1" className="text-2xl font-semibold text-gray-900 mb-4">
                Статус PESEL UKR та його актуальність у 2026 році
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>PESEL UKR</strong> - це спеціальний статус для українських громадян, які перебувають в Польщі. 
                Він дає право на отримання номера PESEL та доступ до базових послуг.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                З номером PESEL можна зареєструвати JDG та вести бізнес. PESEL необхідний для всіх формальностей, пов'язаних з бізнесом.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Отримання PESEL UKR абсолютно безкоштовне. Подати заяву можна в будь-якому міському або гмінному уряді (<em>Urząd miasta</em> або <em>Urząd gminy</em>) за місцем перебування. 
                Процес займає <strong>від 1 до 3 робочих днів</strong> після подачі документів.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Джерела:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc-ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - офіційна інформація про PESEL UKR та процедуру отримання</li>
                  <li>- <a href="https://mos.cudzoziemcy.gov.pl/ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MOS</a> - портал для іноземців, можливість знайти найближчий уряд</li>
                </ul>
              </div>

              <h3 id="legal-status-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Право на ведення господарської діяльності для громадян України
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Громадяни України мають право вести бізнес в Польщі на рівних правах з поляками</strong>. 
                Не потрібно додаткових дозволів або ліцензій для більшості видів діяльності.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для реєстрації <strong>JDG</strong> достатньо мати <strong>дійсний паспорт, PESEL та адресу в Польщі</strong>. <em>Не потрібно чекати на отримання карти побиту</em>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це право закріплено в <strong>Угоді про асоціацію між Україною та ЄС</strong>, яка надає українським громадянам рівні права з громадянами ЄС щодо ведення бізнесу. 
                Ви можете обирати будь-яку форму діяльності, від незареєстрованої до повноцінної компанії.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Важливо знати</strong>, що деякі види діяльності все ж таки вимагають спеціальних дозволів або ліцензій. 
                Наприклад, <em>медична практика, юридичні послуги або фінансові послуги</em> мають додаткові вимоги. 
                Перед початком діяльності варто перевірити, чи не потрібні спеціальні дозволи для вашого виду бізнесу.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Джерела:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://biznes.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - офіційний портал для підприємців, інформація про реєстрацію та види діяльності</li>
                  <li>- <a href="https://www.gov.pl/web/udsc-ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - інформація про права іноземців на ведення бізнесу в Польщі</li>
                  <li>- <a href="https://ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG</a> - центральний реєстр та інформація про реєстрацію JDG</li>
                </ul>
              </div>

              <h3 id="legal-status-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Карта тимчасового побиту (Karta czasowego pobytu) на підставі бізнесу
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Після реєстрації <strong>JDG та ведення діяльності протягом 6 місяців</strong> можна подати заяву на карту тимчасового побиту. 
                Карта дає право легально перебувати в Польщі та працювати.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для отримання карти тимчасового перебування (<strong>Karta pobytu</strong>) потрібно підтвердити стабільний дохід від бізнесу (<strong>зазвичай мінімум 5000-6000 злотих на місяць</strong>, що відповідає середній зарплаті в Польщі), 
                сплату податків та внесків <strong>ZUS (за останні 3-6 місяців діяльності)</strong>. Карта видається на термін <strong>від 1 до 3 років</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Процес отримання карти побиту на підставі бізнесу вимагає підготовки пакету документів, який включає <strong>докази доходу, сплати податків, внесків ZUS та корисності вашого бізнесу для польської економіки</strong>. 
                Розглядання заяви зазвичай триває <strong>від 1 до 3 місяців</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Карта тимчасового побиту надає вам <strong>повні права на перебування та роботу в Польщі</strong>, 
                а також дозволяє безперешкодно подорожувати по країнах <strong>Шенгенської зони</strong>. 
                <em>Після 5 років легального перебування</em> можна подати заяву на карту постійного побиту.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Джерела:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc-ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - офіційна інформація про карту тимчасового побиту та необхідні документи</li>
                  <li>- <a href="https://mos.cudzoziemcy.gov.pl/ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MOS</a> - портал для іноземців, можливість подачі заяви онлайн</li>
                </ul>
              </div>

              <h3 id="legal-status-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Blue Card для висококваліфікованих IT-фрілансерів
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Blue Card - це спеціальний дозвіл для висококваліфікованих спеціалістів. 
                Він підходить для IT-фрілансерів з високою кваліфікацією та зарплатою.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для отримання Blue Card потрібна вища освіта або 5 років досвіду роботи, 
                а також зарплата не нижче встановленого мінімуму. Blue Card дає право працювати та вести бізнес.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Мінімальна зарплата для <strong>Blue Card</strong> у 2026 році становить <strong>150% від середньої зарплати в Польщі</strong>, 
                що приблизно дорівнює <strong>9000-10000 злотих на місяць брутто</strong>. 
                Для IT-спеціалістів ця вимога часто легко досяжна, оскільки ринок пропонує високі ставки.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Blue Card надає швидший шлях до постійного перебування</strong> - після <strong>33 місяців роботи</strong> (або <strong>21 місяця зі знанням польської мови</strong>) 
                можна подати заяву на карту постійного побиту. Це особливо вигідно для фрілансерів, які планують довгостроково працювати в Польщі.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Джерела:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc-ua/niebieska-karta" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC - Blue Card</a> - офіційна інформація про Blue Card та вимоги</li>
                  <li>- <a href="https://www.gov.pl/web/udsc-ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - загальна інформація про дозволи на перебування</li>
                </ul>
              </div>

              <h3 id="legal-status-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Можливість роботи за візою або в рамках безвізового руху
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Українці можуть перебувати в Польщі <strong>до 90 днів без візи</strong>. 
                Проте для ведення бізнесу краще мати легальний статус перебування.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Реєстрація <strong>JDG можлива навіть під час безвізового перебування</strong>, 
                але для довгострокової роботи потрібна карта побиту.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Важливо пам'ятати</strong>, що безвізовий режим дозволяє лише короткострокове перебування. 
                Якщо ви плануєте працювати фрілансером більше 90 днів, <strong>обов'язково потрібно оформити карту тимчасового побиту</strong>. 
                Порушення правил перебування може призвести до заборони в'їзду в країни Шенгенської зони.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для тих, хто вже має карту тимчасового побиту або <strong>PESEL UKR</strong>, реєстрація JDG та початок роботи не викликають жодних проблем. 
                Система дозволяє швидко та легко оформити всі необхідні документи онлайн через портал <strong>CEIDG</strong>.
              </p>

              <div className="mt-6 mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Покроковий приклад від приїзду до початку роботи</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Приїзд та PESEL UKR (1-3 дні)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Зверніться до уряду (Urząd miasta/gminy), подайте заяву на PESEL UKR. Безкоштовно, видається за 1-3 робочі дні.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Оренда та адреса</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Знайдіть житло та зареєструйте адресу. Якщо орендодавець не дозволяє, використайте віртуальний офіс (60-100 злотих/міс).
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Реєстрація JDG з inFakt (15 хв - 1 день)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      inFakt безкоштовно допоможе зареєструвати JDG онлайн через CEIDG. Після реєстрації отримаєте NIP та REGON.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Робота та накопичення доходу (6 міс)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Починайте працювати, inFakt веде бухгалтерію. Накопичте стабільний дохід не менше мінімальної зарплати в Польщі (приблизно 6 тисяч злотих на місяць) протягом 3-6 місяців.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Карта побиту (після 6 міс)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Після 6 місяців зберіть документи про дохід та сплату податків за 3-6 місяців. Подайте заяву в UDSC. Розглядання 1-3 місяці.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Джерела:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc-ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - інформація про правила перебування та безвізовий режим</li>
                  <li>- <a href="https://ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG</a> - реєстрація JDG онлайн</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Unregistered Activity Section */}
          <section id="unregistered-activity" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Działalność nierejestrowana (Незареєстрована діяльність)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Цей розділ присвячений найбільш вигідному формату для початківців. Це ідеальний варіант, щоб протестувати свою нішу без ризику та паперової тяганини.
              </p>

              <h3 id="unregistered-activity-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Що таке незареєстрована діяльність?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це спеціальний правовий режим для дрібного бізнесу. Ви працюєте легально, але не реєструєте фірму в реєстрі <strong>CEIDG</strong>. Це рятівне коло для тих, чий дохід поки що невеликий - <strong>до 3500-3600 злотих на місяць</strong> (приблизно 800-900 євро).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це діяльність фізичної особи, яка не є офіційним підприємництвом. Ви надаєте послуги або продаєте товари як приватна особа.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви маєте право виставляти рахунки (<em>rachunki</em>) або навіть фактури (<em>faktury</em>). Клієнти можуть офіційно вносити ці витрати у свою бухгалтерію. Це робить вас повноцінним гравцем на ринку.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Важливо знати, що незареєстрована діяльність не є підставою для отримання карти тимчасового побиту</strong>. 
                Для отримання карти побиту на підставі бізнесу потрібна зареєстрована діяльність (<strong>JDG</strong>) зі стабільним доходом протягом <strong>мінімум 6 місяців</strong>. 
                Незареєстрована діяльність підходить для початку та тестування ринку, але для довгострокового перебування в Польщі краще зареєструвати JDG.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>На якому статусі перебувати під час незареєстрованої діяльності?</strong> Ви можете працювати на незареєстрованій діяльності, перебуваючи в Польщі за <strong>безвізовим режимом (до 90 днів)</strong> або маючи <strong>PESEL UKR</strong>. Також можна працювати, якщо у вас є <strong>карта тимчасового побиту</strong>, отримана на іншій підставі (наприклад, робота за трудовим договором або навчання).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Скільки може тривати незареєстрована діяльність?</strong> Теоретично, незареєстрована діяльність може тривати необмежено, поки ви не перевищуєте місячний ліміт доходу (3500-3600 злотих). Проте на практиці більшість фрілансерів переходять на <strong>JDG</strong> протягом <strong>3-6 місяців</strong>, коли дохід стабілізується або зростає. Якщо ви плануєте працювати довше 6 місяців або ваш дохід регулярно перевищує ліміт, обов'язково потрібно зареєструвати JDG.
              </p>

              <h3 id="unregistered-activity-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Фінансовий ліміт доходу у 2026 році
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Головна умова полягає в тому, що ваш щомісячний дохід не повинен перевищувати певну суму. Ця сума становить <strong>75% від мінімальної заробітної плати брутто в Польщі</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                З 1 січня 2026 року мінімальна зарплата зросла, тому ваш ліміт тепер складає близько <strong>3500–3600 злотих на місяць</strong> (точну цифру слід перевіряти на момент виплати). <em>Якщо ви перевищили цей ліміт хоча б на 1 злотий, ви зобов'язані зареєструвати JDG протягом 7 днів</em>.
              </p>

              <h3 id="unregistered-activity-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Хто має право на цю форму
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ця модель доступна для громадян України, які легально перебувають у Польщі. <strong>Головна вимога</strong> полягає в тому, що ви не повинні були вести власну фірму (<strong>JDG</strong>) у Польщі протягом <strong>останніх 60 місяців</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це ідеально підходить для <em>копірайтерів, дизайнерів, репетиторів, маркетологів, перекладачів, контент-менеджерів та інших фахівців</em> на старті. Ви просто починаєте працювати без жодних візитів до держустанов.
              </p>

              <h3 id="unregistered-activity-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Перелік обов'язків - спрощений реєстр
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Вам не потрібен бухгалтер</em>. Єдиний документ, який ви зобов'язані вести, це <strong>Ewidencja sprzedaży</strong> (спрощений реєстр продажів).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви просто записуєте дату, суму та кому надали послугу. Це потрібно для того, щоб податкова могла перевірити, чи не перевищили ви місячний ліміт доходу.
              </p>

              <h3 id="unregistered-activity-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання страхування (ZUS)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це найбільша перевага незареєстрованої діяльності. Ви <strong>не платите обов'язкові соціальні внески (ZUS)</strong> як підприємець. Ви економите близько <strong>1600–2000 злотих на місяць</strong>, які платять підприємці на JDG.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Проте пам'ятайте: якщо ви надаєте послуги за договором <strong>Umowa zlecenie</strong>, замовник може бути зобов'язаний заплатити внески за вас. Це варто обговорити з клієнтом заздалегідь.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Важливо:</strong> без сплати <strong>ZUS</strong> ви не маєте права на безкоштовну медицину в Польщі (окрім екстрених випадків) та не накопичуєте пенсію.
              </p>

              <h3 id="unregistered-activity-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Податкова звітність (PIT-36)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Доходи від незареєстрованої діяльності не оподатковуються щомісяця. Ви звітуєте за них лише раз на рік.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви вказуєте загальну суму доходу та ваші витрати у річній декларації PIT-36. Ви платите податок лише з чистого прибутку за загальною шкалою (зазвичай 12%).
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Офіційний портал для підприємців з умовами, лімітами та правилами ведення реєстру.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Офіційна сторінка податкової з формами та інструкціями щодо звітування.</li>
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Офіційний сайт соцстраху з деталями про внески.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* JDG Section */}
          <section id="jdg" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Jednoosobowa Działalność Gospodarcza (JDG)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Реєстрація <strong>JDG</strong> (<em>Jednoosobowa Działalność Gospodarcza</em> - український еквівалент <strong>ФОП</strong> або <strong>ІП</strong>) це крок до повної професійної незалежності. Ви отримуєте податковий номер <strong>NIP</strong> (<em>Numer Identyfikacji Podatkowej</em> - номер ідентифікації платника податків), стаєте повноцінним контрагентом і можете працювати з будь-якими компаніями у світі.
              </p>

              <h3 id="jdg-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Покроковий алгоритм реєстрації через CEIDG
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Реєстрація бізнесу в Польщі безкоштовна</strong> і відбувається онлайн через систему <strong>CEIDG</strong> (<em>Centralna Ewidencja i Informacja o Działalności Gospodarczej</em> - Центральний реєстр та інформація про господарську діяльність). Реєстрація відбувається на порталі <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a>. Вам знадобиться <strong>Profil Zaufany</strong> (<em>Profil Zaufany</em> - це безкоштовний електронний підпис для державних послуг, який дозволяє підписувати документи онлайн та користуватися всіма державними сервісами). Створити Profil Zaufany можна на <a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">gov.pl</a> (<a href="https://www.gov.pl/ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">українська версія</a>).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви заповнюєте форму <strong>CEIDG-1</strong>, яка одночасно є заявою до податкової, статистичного управління та <strong>ZUS</strong>. Система автоматично присвоїть вам номер <strong>REGON</strong> та <strong>NIP</strong>, якщо у вас їх ще немає.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://aplikacja.ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG (Aplikacja.ceidg.gov.pl)</a> - Єдиний державний реєстр для реєстрації, внесення змін або закриття бізнесу.</p>
              </div>

              <h3 id="jdg-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Вибір кодів діяльності (PKD)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Код <strong>PKD</strong> (<em>Polska Klasyfikacja Działalności</em> - Польська класифікація діяльності) визначає, чим саме займається ваш бізнес. Це обов'язковий код, який вказується при реєстрації JDG. Ви можете обрати один основний код і необмежену кількість додаткових.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Популярні коди PKD для різних типів фрілансу:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>62.01.Z</strong> - Діяльність, пов'язана з програмним забезпеченням (для програмістів, розробників, IT-спеціалістів)</li>
                <li><strong>62.02.Z</strong> - Консультування з питань інформатики (для IT-консультантів, системних адміністраторів)</li>
                <li><strong>63.11.Z</strong> - Обробка даних, хостинг та пов'язана діяльність (для веб-розробників, DevOps)</li>
                <li><strong>63.12.Z</strong> - Веб-портали (для веб-дизайнерів, маркетологів)</li>
                <li><strong>73.11.Z</strong> - Рекламні агентства (для маркетологів, копірайтерів, арбітражників)</li>
                <li><strong>74.10.Z</strong> - Діяльність у сфері дизайну (для графічних дизайнерів, UI/UX дизайнерів)</li>
                <li><strong>74.20.Z</strong> - Діяльність у сфері фотографії (для фотографів, відеографів)</li>
                <li><strong>74.30.Z</strong> - Діяльність у сфері перекладацьких послуг (для перекладачів)</li>
                <li><strong>85.59.A</strong> - Інша освітня діяльність (для репетиторів, онлайн-викладачів)</li>
                <li><strong>90.03.Z</strong> - Діяльність у сфері художньої творчості (для художників, ілюстраторів)</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Повний гайд про вибір та зміну кодів PKD 2025</li>
                </ul>
              </div>

              <h3 id="jdg-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Вибір дати початку та місце реєстрації
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви можете вказати дату реєстрації "сьогодні" або майбутню дату. <strong>Важливо: не можна вказувати дату заднім числом</strong>, якщо ви не займалися незареєстрованою діяльністю раніше.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Як адресу ви можете вказати власне житло (якщо орендодавець не проти) або скористатися <strong>Wirtualne biuro</strong>. Віртуальний офіс у Кракові чи Варшаві це законний спосіб мати престижну бізнес-адресу за <strong>60–100 злотих на місяць</strong>.
              </p>

              <h3 id="jdg-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Реєстрація в ZUS - форми ZZA та ZUA
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Після подачі заяви в <strong>CEIDG у вас є 7 днів</strong>, щоб подати уточнюючі форми до <strong>ZUS</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZZA</strong> - якщо ви реєструєтеся лише на медичне страхування (наприклад, працюєте ще десь за трудовим договором).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUA</strong> - якщо ви реєструєтеся на повне соціальне страхування (пенсійне, інвалідність тощо).
              </p>

              <h3 id="jdg-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Банківський рахунок - приватний чи фірмовий
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                За законом, для JDG не завжди обов'язково мати окремий бізнес-рахунок (якщо ви не платник VAT). Проте на практиці більшість банків вимагають розділяти особисті та ділові кошти.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Де краще відкрити рахунок для JDG?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для фрілансерів на старті найкраще підходить <strong>PKO Bank Polski</strong>. Цей банк не вимагає карти тимчасового побиту для відкриття рахунку - достатньо мати <strong>PESEL UKR</strong> та дійсний паспорт. Рахунок можна відкрити онлайн або в відділенні банку.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>mBank</strong> також пропонує рахунки для підприємців, але для відкриття рахунку вимагає наявності <strong>карти тимчасового побиту</strong>. Тому для тих, хто щойно зареєстрував JDG та ще не має карти побиту, краще обрати PKO Bank Polski.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Інші популярні банки для підприємців: <strong>Santander</strong>, <strong>ING Bank Śląski</strong>, <strong>Alior Bank</strong>. Варто перевірити актуальні умови та вимоги кожного банку, оскільки вони можуть змінюватися.
              </p>

              <h3 id="jdg-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Фінансова та майнова відповідальність
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Відповідальність усім майном</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                На відміну від <strong>ТОВ (Spółka z o.o.)</strong>, підприємець на <strong>JDG</strong> відповідає за борги бізнесу <strong>всім своїм особистим майном</strong>. Це включає <em>авто, квартиру та кошти на приватних рахунках</em>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це означає, що якщо ви не можете сплатити борги бізнесу (<strong>податки, ZUS, борги перед клієнтами</strong>), кредитори можуть стягнути ваше особисте майно.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Як захиститися</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Є кілька способів захистити майно. Застрахувати професійну відповідальність (OC) особливо важливо для IT та маркетологів. Розділити майно з подружжям (intercyza) захищає майно подружжя від боргів вашого бізнесу. Створити ТОВ замість JDG можливо, але це складніше та дорожче.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Важливо розуміти</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Власний бізнес це не лише дохід, а й повний ризик вашим капіталом. Важливо правильно вести бізнес та дотримуватися всіх обов'язків, щоб уникнути проблем.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - детально про відповідальність усім майном</li>
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - офіційний портал для підприємців, інформація про страхування професійної відповідальності</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Business Incubators Section */}
          <section id="business-incubators" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Фріланс чи навіть робота через Бізнес-інкубатори
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Робота через бізнес-інкубатори часто згадується як схема та має серйозні ризики</strong>. Цей розділ розповідає про модель, яка дозволяє фрілансеру працювати, юридично не будучи підприємцем, але важливо розуміти всі ризики та відповідальність.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Бізнес-інкубатор це організація, яка надає вам свою юридичну особу для виставлення рахунків клієнтам. Ви стаєте "суб'єктом" всередині інкубатора, а він виступає посередником між вами та вашим замовником. Це особливо популярно серед іноземців, які хочуть делегувати бюрократію, але має важливі нюанси.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Головний ризик - відсутність сплати ZUS</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Коли ви працюєте через інкубатор, ви не платите <strong>ZUS</strong> як підприємець, оскільки юридично ви не є підприємцем. Це означає, що ви <strong>не накопичуєте пенсію</strong> та <strong>не маєте права на безкоштовну медицину</strong> в Польщі (окрім екстрених випадків). Якщо ви плануєте довгостроково працювати в Польщі, це може стати серйозною проблемою.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Відповідальність та ризики</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Працюючи через інкубатор, ви залежите від його фінансової стабільності. Якщо інкубатор має проблеми з податковою або закривається, це може вплинути на ваші доходи. Ви також не маєте прямого контролю над своїми фінансами. Гроші спочатку надходять на рахунок інкубатора, і лише потім виплачуються вам.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Податкові ризики</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Податкова може перевірити, чи не є ваша робота через інкубатор <em>фіктивною</em>. Якщо ви фактично працюєте як підприємець (самостійно шукаєте клієнтів, контролюєте процес роботи, працюєте на своєму обладнанні), але формально працюєте через інкубатор, це може бути визнано як спроба уникнути сплати ZUS та податків. Це загрожує <strong>штрафами та зобов'язанням сплатити всі несплачені внески</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Коли це може бути виправданим</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Робота через інкубатор може мати сенс лише для <strong>короткострокових проектів</strong> (до 3-6 місяців), коли ви ще не впевнені, чи хочете довгостроково працювати в Польщі. Також це може підходити для тих, хто вже має інше джерело страхування (наприклад, працює за трудовим договором і має ZUS через роботодавця).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Альтернатива - JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для більшості фрілансерів <strong>JDG є більш безпечним та прозорим варіантом</strong>. Ви маєте повний контроль над своїми фінансами, накопичуєте пенсію, маєте право на медицину та не залежите від третьої сторони. Хоча JDG вимагає сплати ZUS, це інвестиція у ваше майбутнє та легальність вашої діяльності.
              </p>

              <h3 id="business-incubators-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Принцип роботи моделі "Freelance as a Service"
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви підписуєте договір з інкубатором (зазвичай цивільно-правовий). Коли ви виконуєте роботу для клієнта, інкубатор виставляє йому рахунок від свого імені.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Гроші надходять на рахунок інкубатора, вони відраховують податки та свою комісію, а решту виплачують вам як зарплату. Ви отримуєте "чисті" гроші без необхідності реєструвати JDG у CEIDG.
              </p>
              <h3 id="business-incubators-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Переваги для іноземців (з обережністю)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Теоретично, це може бути зручним варіантом, якщо ви не знаєте польської мови на достатньому рівні для спілкування з податковою. Інкубатор бере на себе бухгалтерію, звітність та юридичний супровід.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Проте <strong>важливо розуміти</strong>, що ви залежите від інкубатора та його компетентності. Якщо інкубатор робить помилки в бухгалтерії або не сплачує податки вчасно, <strong>відповідальність може лягти на вас</strong>. Також ви не маєте прямого доступу до своїх фінансів - все проходить через інкубатора.
              </p>
              <h3 id="business-incubators-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Аналіз витрат - абонплата проти податків
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Замість складних розрахунків ZUS, ви платите фіксовану щомісячну суму за менторинг та адміністрування. У 2026 році це зазвичай становить від <strong>300 до 600 злотих на місяць</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ця модель може здаватися вигіднішою за JDG на початкових етапах, оскільки ваші витрати не залежать від обороту. Ви платите за сервіс лише тоді, коли у вас є активні контракти.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Проте важливо враховувати, що ви не накопичуєте пенсію та не маєте права на безкоштовну медицину. Також ви залежите від стабільності інкубатора та його фінансового стану. Якщо інкубатор має проблеми, це може вплинути на ваші доходи та доступ до коштів.
              </p>
              <h3 id="business-incubators-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Відповідальність у бізнес-інкубаторах
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Працюючи через інкубатор, ви не несете юридичної відповідальності за діяльність інкубатора. Проте ви залежите від його фінансової стабільності та правильності ведення справ. Якщо інкубатор робить помилки в бухгалтерії або не сплачує податки вчасно, це може вплинути на ваші доходи та репутацію.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Важливо розуміти, що ви не маєте прямого контролю над своїми фінансами. Гроші спочатку надходять на рахунок інкубатора, і лише потім виплачуються вам. Якщо інкубатор має фінансові проблеми або закривається, ви можете втратити доступ до своїх коштів.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Податкова може перевірити, чи не є ваша робота через інкубатор фіктивною. Якщо ви фактично працюєте як підприємець, але формально працюєте через інкубатор, це може бути визнано як спроба уникнути сплати <strong>ZUS</strong> та податків. Це загрожує штрафами та зобов'язанням сплатити всі несплачені внески.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                На відміну від <strong>JDG</strong>, де ви маєте повний контроль над своїми фінансами та відповідальністю, працюючи через інкубатор, ви делегуєте цей контроль третій стороні. Це створює додаткові ризики, які важливо враховувати при виборі моделі роботи.
              </p>

              <h3 id="business-incubators-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання легалізації та Карти побиту
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Багато інкубаторів у Польщі спеціалізуються на допомозі українцям з легалізацією. Вони готують пакет документів для отримання Карти побиту на підставі роботи.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Оскільки ви офіційно працевлаштовані в інкубаторі, процедура отримання посвідки на проживання стає стандартною та зрозумілою для інспектора в Уженді.
              </p>

              <h3 id="business-incubators-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Обмеження моделі
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Інкубатори підходять не для всіх. Вони ідеальні для IT, дизайну та маркетингу. Проте вони навряд чи підійдуть для торгівлі товарами, де потрібні складські запаси та ліцензії на імпорт.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви також обмежені внутрішніми правилами інкубатора щодо витрат. Наприклад, списати витрати на пальне або оренду офісу через інкубатор складніше, ніж у власному <strong>JDG</strong>.
              </p>

              <h3 id="business-incubators-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Переваги для іноземців без знання мови та бухгалтерії
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Бізнес-інкубатори ідеально підходять для іноземців, які не знають польської мови. 
                Вся комунікація з урядами та податковою відбувається через інкубатор.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Не потрібно розбиратися в польському законодавстві або вести бухгалтерію. 
                Інкубатор робить все за вас.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Підтримка часто доступна англійською або українською мовами. 
                Це значно спрощує початок роботи в Польщі.
              </p>

              <h3 id="business-incubators-8" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Аналіз витрат - щомісячна абонплата проти податків JDG
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Бізнес-інкубатори беруть щомісячну плату (зазвичай 200-500 zł) плюс відсоток від доходу. 
                Це може бути дорожче, ніж самостійна реєстрація JDG.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Але якщо врахувати час на ведення бухгалтерії та спілкування з урядами, 
                інкубатор може бути вигіднішим для зайнятих фрілансерів.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для початківців інкубатор часто кращий вибір, 
                оскільки дозволяє зосередитися на роботі, а не на формальностях.
              </p>

              <h3 id="business-incubators-9" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання легалізації (карти побиту) через інкубатор
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Робота через інкубатор може бути підставою для отримання карти тимчасового побиту. 
                Але це залежить від конкретного інкубатора та умов договору.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Деякі інкубатори допомагають з оформленням карти побиту, інші - ні. 
                Краще уточнити це перед підписанням договору.
              </p>

              <h3 id="business-incubators-10" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Обмеження у видах діяльності в рамках інкубатора
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Бізнес-інкубатори часто мають обмеження на види діяльності. 
                Зазвичай вони працюють з IT, дизайном, маркетингом та консалтингом.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Якщо ваша діяльність не підходить під формат інкубатора, 
                краще зареєструвати <strong>JDG</strong> самостійно.
              </p>
            </div>
          </section>

          {/* Civil Contracts Section */}
          <section id="civil-contracts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Цивільно-правові договори (B2C)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви не хочете реєструвати бізнес або вступати в інкубатор, ви можете працювати за разовими договорами. У Польщі це називається "Umowy cywilnoprawne". Це законний спосіб отримувати гроші за конкретний результат або час.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Цей розділ описує найпростіший спосіб отримання оплати без створення будь-яких структур. Це класика для фрілансерів, які працюють з польськими компаніями напряму.
              </p>

              <h3 id="civil-contracts-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa o dzieło: Специфіка для творчих професій
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це "договір підряду" або договір на результат. Його обожнюють програмісти, дизайнери та маркетологи, бо він дозволяє суттєво економити на податках.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Головна перевага полягає у відсутності внесків у ZUS. Ви платите лише податок на дохід (PIT). Якщо ви передаєте авторські права на свій код або текст, ви можете застосувати 50% витрат на отримання доходу (KUP), що знижує податок удвічі.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640160093" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kodeks Cywilny (KC)</a> - Цивільний кодекс, статті 627–646 регулюють Umowa o dzieło.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Офіційне роз'яснення про законне зменшення податку при роботі з авторським правом.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa zlecenie: Оплата за процес
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це "договір доручення". Ви зобов'язуєтеся виконувати певні дії у визначений час. Тут податкове навантаження вище, бо ви зобов'язані платити внески на пенсійне та медичне страхування.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для студентів до 26 років цей договір є "золотою жилою". Вони отримують повну суму "брутто" на руки, не сплачуючи жодних податків та внесків.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640160093" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kodeks Cywilny (KC)</a> - Цивільний кодекс, статті 734–751 регулюють Umowa zlecenie.</li>
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Правила соцстрахування та які договори вимагають оплати внесків.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Порівняння "брутто" та "нетто" для фрілансера
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Важливо розуміти різницю при обговоренні ціни з клієнтом. Компанія завжди називає суму "брутто" (до податків).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Наприклад, при Umowa o dzieło ви отримаєте на руки близько 88% від суми. При Umowa zlecenie (якщо ви не студент) це близько 70–75%. Завжди уточнюйте, чи включає ціна вартість податкових відрахувань.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Офіційна інформація про витрати на отримання доходу та розрахунок брутто/нетто.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Оподаткування доходів з-за кордону
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви живете в Польщі (податковий резидент - ти ним стаєш офіційно після 180 днів перебування в країні) і працюєте на замовника з США чи України за договором, ви зобов'язані самостійно задекларувати цей дохід.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Вам не потрібно реєструвати фірму, але раз на рік ви маєте подати декларацію PIT-36. Польща має договори про уникнення подвійного оподаткування з багатьма країнами, що дозволяє не платити податок двічі.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Офіційна інформація про подачу декларації PIT-36.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Договори про уникнення подвійного оподаткування.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa zlecenie: правила оподаткування та соціальні внески
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Umowa zlecenie (договір доручення) - це договір на надання послуг. 
                Він підходить для консультантів, перекладачів, тренерів.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                За цим договором не передаються авторські права. 
                Ви залишаєтеся власником результату роботи.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Податок також утримується у джерела (18%). 
                Можуть бути додаткові внески ZUS, якщо договір є основним джерелом доходу.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Правила соцстрахування для Umowa zlecenie.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Порівняння "брутто" та "нетто" для фрілансера
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                При роботі за цивільно-правовими договорами важливо розуміти різницю між брутто та нетто.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Брутто - це сума до вирахування податку. 
                Нетто - це сума після вирахування податку, яку ви отримуєте на руки.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо в договорі вказано брутто, з цієї суми утримується 18% податку. 
                Якщо вказано нетто, клієнт додає податок до цієї суми.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Краще завжди обговорювати, яка сума мається на увазі, 
                щоб уникнути непорозумінь.
              </p>

              <h3 id="civil-contracts-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Оподаткування доходів з-за кордону через ці договори
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви працюєте з клієнтами з-за кордону за цивільно-правовими договорами, 
                оподаткування залежить від країни клієнта.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для клієнтів з ЄС часто застосовується механізм Reverse Charge. 
                Податок сплачує клієнт у своїй країні, а не ви.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Для клієнтів з-за меж ЄС доходи можуть бути звільнені від польського податку. 
                Але потрібно декларувати їх у податковій декларації.
              </p>
            </div>
          </section>

          {/* Laws and Regulations Section */}
          <section id="laws-regulations" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Закони, норми та державне регулювання (Урядовий блок)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Працювати «по-білому» в Польщі це не лише платити податки, а й знати свої права. Польське законодавство чітко розмежовує, де закінчується приватна допомога і починається бізнес.
              </p>

              <h3 id="laws-regulations-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Закон про підприємців (Ustawa o przedsiębiorcach)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це «Конституція» для кожного фрілансера з JDG. Закон чітко визначає, що підприємницька діяльність це щось, що ви робите систематично, від власного імені та з метою отримання прибутку.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Головне правило: держава має підтримувати підприємця. Закон впроваджує принцип «що не заборонено, те дозволено». Також він захищає вас від безпідставних перевірок.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180000646" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ustawa - Prawo przedsiębiorców</a> - Фундаментальний закон про підприємців.</p>
              </div>

              <h3 id="laws-regulations-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Податковий кодекс (Ordynacja podatkowa)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це збірка правил про те, як нараховуються та сплачуються податки. Для фрілансера важливо знати поняття «податкової резиденції».
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви перебуваєте в Польщі понад 183 дні на рік або тут знаходиться ваш «центр життєвих інтересів» (сім'я, дім), ви стаєте польським податковим резидентом. Це означає, що ви маєте звітувати перед польською податковою (Uząd Skarbowy) про всі свої доходи, навіть якщо вони отримані на Upwork або від замовників з України.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19971370926" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ordynacja podatkowa</a> - Податковий кодекс з правилами відносин між вами та податковою, офіційний текст та оновлення в системі ISAP.</p>
              </div>

              <h3 id="laws-regulations-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Права фрілансера під час перевірок (KAS)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Податкова служба (<strong>Krajowa Administracja Skarbowa</strong> або <strong>KAS</strong>) має право перевірити вашу діяльність. Проте, згідно із законом, вони повинні попередити вас про перевірку заздалегідь (зазвичай за <strong>7 днів</strong>).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Фрілансер має право бути присутнім під час перевірки та надавати пояснення. Важливо зберігати всі рахунки та фактури протягом <strong>5 років</strong>, оскільки саме такий термін позовної давності для податкових питань у Польщі.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Інформація про права під час перевірок KAS та терміни зберігання документів.</p>
              </div>

              <h3 id="laws-regulations-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Захист персональних даних (RODO)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви збираєте email-адреси для розсилки, ведете базу клієнтів або маєте сайт із формою зворотного зв'язку, ви підпадаєте під дію <strong>RODO</strong> (загальноєвропейський регламент <strong>GDPR</strong>).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви зобов'язані повідомити клієнта, як ви використовуєте його дані. Для звичайного фрілансера це означає наявність <strong>«Політики конфіденційності»</strong> на сайті та обережне поводження з документами замовників.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm">UODO (Urząd Ochrony Danych Osobowych) - Офіційний сайт з питань RODO та порадами про захист даних клієнтів.</p>
              </div>

              <h3 id="laws-regulations-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Офіційні роз'яснення щодо віддаленої роботи
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                У 2023–2026 роках польський уряд значно оновив Кодекс праці та норми щодо дистанційної роботи. Хоча фрілансери це не наймані працівники, ці норми впливають на те, як ви оформлюєте договори з великими польськими фірмами.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Роботодавці тепер мають чіткі інструкції, як легально оплачувати послуги дистанційних виконавців, які працюють з дому або коворкінгів.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gov.pl</a> - Офіційні роз'яснення щодо віддаленої роботи та Кодексу праці.</p>
              </div>
            </div>
          </section>

          {/* Taxation Systems Section */}
          <section id="taxation-systems" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Глибокий аналіз систем оподаткування
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Вибір системи оподаткування це головне рішення, яке вплине на те, скільки грошей залишиться у вашій кишені. У 2026 році в Польщі існує три основні варіанти для JDG.
              </p>

              <h3 id="taxation-systems-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Skala podatkowa (Загальна система 12% / 32%)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це базова система. Ви платите <strong>12%</strong> з чистого прибутку, якщо заробляєте до <strong>120 000 злотих на рік</strong>. Якщо більше, ставка зростає до <strong>32%</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Головний бонус це <strong>Kwota wolna od podatku</strong> (сума, вільна від податку). Ви не платите прибутковий податок з перших <strong>30 000 злотих</strong> доходу. Також ви можете віднімати витрати на бізнес (<em>ноутбук, софт, оренда</em>) від доходу перед розрахунком податку.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm">Podatki.gov.pl: Wybór formy opodatkowania - Гайд від міністерства з порівнянням Ryczalt, Skala та Liniowy.</p>
              </div>

              <h3 id="taxation-systems-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Podatek liniowy (Лінійний податок 19%)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Тут ставка завжди фіксована на рівні <strong>19%</strong>, незалежно від того, заробили ви 50 тисяч чи 500 тисяч злотих. Ви також можете віднімати витрати.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ця система вигідна лише тоді, коли ваші доходи стабільно перевищують <strong>120–150 тисяч злотих на рік</strong>. Тут немає «вільної від податку суми», тому для малих доходів вона збиткова.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Інформація про лінійний податок 19%.</p>
              </div>

              <h3 id="taxation-systems-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ryczałt (Ричалт, податок від обороту)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Найпопулярніша система серед фрілансерів</strong>. Ви платите відсоток від усієї суми, яку отримали від клієнта. Витрати (оренда, техніка) врахувати не можна.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ставки для фрілансу у 2026 році</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ставка <strong>12%</strong> діє для <em>IT-спеціалістів та програмістів</em>. Ставка <strong>14%</strong> діє для <em>архітекторів та інженерів</em>. Ставка <strong>8.5%</strong> діє для <em>маркетингу, копірайтингу та більшості сервісних послуг</em>. Ставка <strong>15%</strong> діє для <em>рекламних агентств та деяких видів посередництва</em>.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm">Kalkulator B2B 2026 - Калькулятор доходу для порівняння різних систем оподаткування.</p>
              </div>

              <h3 id="taxation-systems-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ryczałt: детальний розбір ставок
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ryczałt має різні ставки для різних професій:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>8,5%</strong> - для вільних професій (<em>лікарі, юристи, архітектори</em>)</li>
                <li><strong>12%</strong> - для більшості послуг (<em>IT, дизайн, маркетинг</em>)</li>
                <li><strong>15%</strong> - для деяких видів діяльності</li>
                <li><strong>17%</strong> - для доходу понад <strong>200 000 zł на рік</strong></li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ставка залежить від коду <strong>PKD</strong> та виду діяльності. 
                <strong>Важливо правильно обрати код, щоб отримати найнижчу ставку</strong>.
              </p>

              <h3 id="taxation-systems-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Критерії вибору найвигіднішої системи у 2026 році
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для більшості фрілансерів <strong>ryczałt (12%)</strong> - найвигідніший вибір. 
                Він простий та не вимагає ведення складного обліку витрат.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Skala podatkowa</strong> вигідніша, якщо витрати становлять більше <strong>30% від доходу</strong>. 
                Але потрібно збирати та зберігати всі чеки.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Podatek liniowy</strong> вигідніший для дуже високих доходів (понад <strong>300 000 zł</strong>). 
                Але для більшості фрілансерів він не підходить.
              </p>
            </div>
          </section>

          {/* Ryczalt System Section - залишаємо для сумісності */}
          <section id="ryczalt-system" className="mb-16 scroll-mt-20 hidden">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Система оподаткування ryczałt
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ryczałt (ричалт) - це найпопулярніша система оподаткування для фрілансерів у Польщі. 
                Вона передбачає сплату фіксованого відсотка від доходу без необхідності вести складний облік витрат.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Переваги ryczałt:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Не потрібно збирати та зберігати чеки на витрати</li>
                <li>Простий розрахунок податку - просто відсоток від доходу</li>
                <li>Менше паперової роботи</li>
                <li>Можна самостійно розраховувати податок</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ставки ryczałt
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    12% податку
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Для більшості послуг: IT, дизайн, консалтинг, маркетинг. 
                    Діє для доходу до 200 000 zł на рік. Це найпоширеніша ставка для фрілансерів.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    8,5% податку
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Для вільних професій: лікарі, юристи, архітектори, інженери. 
                    Також діє для доходу до 200 000 zł на рік. Ця ставка нижча, оскільки ці професії мають 
                    додаткові вимоги до кваліфікації.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    17% податку
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Якщо ваш річний дохід перевищує 200 000 zł, ставка автоматично збільшується до 17%. 
                    Це все ще нижче, ніж стандартна шкала оподаткування (18% або 32%).
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  <strong>Важливо:</strong> На ryczałt не потрібно платити ZUS від прибутку. 
                  Ви платите тільки мінімальні внески (~1 700 zł/міс), незалежно від розміру доходу. 
                  Це робить ryczałt дуже вигідним для фрілансерів з високим доходом.
                </p>
              </div>
            </div>
          </section>

          {/* ZUS Insurance Section */}
          <section id="zus-insurance" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Соціальне страхування та ZUS
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для багатьох українців <strong>ZUS</strong> це щось зовсім нове. У нас не було подібної системи соціального страхування, де ти платиш державі щомісяця, а вона гарантує тобі медичну допомогу, пенсію та соціальну підтримку. У Польщі це основа суспільного договору між громадянином та державою.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Що таке ZUS і чому це важливо в Європі</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUS</strong> (Zakład Ubezpieczeń Społecznych) це державна страхова компанія, яка збирає внески від працівників та підприємців. Ці гроші йдуть на три основні речі: <strong>пенсійне страхування</strong> (коли вийдете на пенсію), <strong>медичне страхування</strong> (безкоштовна медицина) та <strong>страхування на випадок інвалідності та хвороби</strong> (лікарняні, допомога при втраті працездатності).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                У Європі ця система працює десятиліттями. Вона гарантує, що навіть якщо ви втратите роботу або захворієте, держава вас не залишить без допомоги. Польща зросла завдяки реформам саме тому, що <strong>ZUS</strong> це одна з основних решійних сил країни. Коли ти платиш внески, ти інвестуєш у стабільність держави, в якій живеш, а держава інвестує в тебе.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Скільки платити і за що</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Як підприємець на JDG ви платите внески щомісяця, навіть якщо не заробили нічого. У 2026 році повний <strong>ZUS</strong> становить близько <strong>1600–2000 злотих на місяць</strong>. Ця сума складається з кількох частин: пенсійне страхування (близько 19% від бази), медичне страхування (9% від бази), страхування на випадок інвалідності та нещасного випадку (близько 1,5%).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Як росте сума внесків і чому</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Сума внесків <strong>ZUS</strong> залежить від мінімальної зарплати в Польщі. Кожного року уряд підвищує мінімальну зарплату (у 2026 році це близько 4300–4500 злотих брутто), і від цієї суми розраховуються внески. Чим вища мінімальна зарплата, тим більше ви платите. Але це також означає, що ваша майбутня пенсія буде вищою, а медичне обслуговування кращим.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Що дає медичне страхування</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Коли ви платите <strong>Składka zdrowotna</strong> (медичний внесок), ви отримуєте доступ до <strong>безкоштовної медицини</strong> в Польщі. Це включає: безкоштовні візити до лікаря загальної практики (семейного лікаря), безкоштовні консультації спеціалістів (але часто є черги, тому можна записатися на платний прийом швидше), безкоштовні аналізи та обстеження за направленням лікаря, безкоштовну госпіталізацію та операції, безкоштовні ліки для дітей до 18 років та знижки на ліки для дорослих.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Для сім'ї та дітей</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви платите <strong>ZUS</strong>, ваша сім'я (дружина/чоловік та діти) також мають право на безкоштовну медицину. Діти до 18 років отримують безкоштовні ліки, безкоштовні щеплення та профілактичні огляди. Ваш подружжя може користуватися медициною, якщо не працює або не має власного страхування.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Що безкоштовно, а що платно</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Безкоштовно:</strong> візити до лікаря загальної практики, консультації спеціалістів за направленням, аналізи та обстеження за направленням, госпіталізація, операції, ліки для дітей до 18 років, екстрена медична допомога. <strong>Платно:</strong> консультації спеціалістів без направлення (приватні клініки), деякі косметичні процедури, стоматологія (частково, базові послуги можуть бути безкоштовними), ліки для дорослих (знижка 30–50%), швидкі діагностичні обстеження без черги.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Пенсії - від і до</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Розмір пенсії залежить від того, скільки років ви платили внески та який був ваш дохід. Мінімальна пенсія в Польщі у 2026 році становить близько <strong>1200–1400 злотих</strong>. Середня пенсія близько <strong>2500–3000 злотих</strong>. Максимальна пенсія може досягати <strong>5000–6000 злотих</strong> або більше, якщо ви платили високі внески багато років. Щоб отримати повну пенсію, потрібно платити внески <strong>не менше 20–25 років</strong> (для жінок) або <strong>25–30 років</strong> (для чоловіків).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUS</strong> це державна страхова компанія. Навіть якщо ви нічого не заробили за місяць, як підприємець ви зобов'язані платити внески. Але для новачків є пільги.
              </p>

              <h3 id="zus-insurance-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Пільга "Ulga na start"
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Протягом <strong>перших 6 повних місяців</strong> після реєстрації JDG ви звільнені від сплати соціальних внесків. Ви платите лише медичне страхування (<strong>Składka zdrowotna</strong>). Це дозволяє суттєво зекономити на старті, поки ви шукаєте клієнтів.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm">ZUS: Ulga na start - Офіційні правила пільг для перших 6 місяців бізнесу.</p>
              </div>

              <h3 id="zus-insurance-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Mały ZUS Plus
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Після закінчення "Ulga na start" ви можете перейти на пільговий період на <strong>24 місяці</strong>. Ви платите внески, розраховані від зниженої бази (від мінімальної зарплати). Це все ще значно менше, ніж повний ZUS, який платять досвідчені бізнесмени.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Інформація про Mały ZUS Plus та пільгові періоди.</p>
              </div>

              <h3 id="zus-insurance-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Стандартні внески та "Chorobowe"
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Повний <strong>ZUS</strong> у 2026 році це серйозна сума (близько <strong>1600–2000 злотих</strong> залежно від розрахунків). Ви також можете добровільно платити внесок на випадок хвороби (<strong>Chorobowe</strong>). Це дає право на оплачуваний лікарняний, що важливо для фрілансера, який працює сам на себе.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Інформація про стандартні внески та добровільне страхування Chorobowe.</p>
              </div>
            </div>
          </section>

          {/* VAT Section */}
          <section id="vat" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ПДВ (VAT) у житті фрілансера
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>VAT</strong> це податок на додану вартість. Більшість фрілансерів спочатку намагаються його уникати, але іноді він стає обов'язковим.
              </p>

              <h3 id="vat-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ліміт 200 000 злотих
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви звільнені від <strong>VAT</strong>, поки ваш річний оборот не перевищує <strong>200 000 злотих</strong>. Як тільки ви наближаєтесь до цієї суми, ви зобов'язані зареєструватися як платник VAT (форма <strong>VAT-R</strong>).
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Інформація про ліміт 200 000 злотих та реєстрацію VAT-R.</p>
              </div>

              <h3 id="vat-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Реєстрація VAT-UE
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви плануєте працювати з клієнтами з інших країн ЄС (наприклад, виконувати замовлення для фірми з Німеччини), вам потрібно отримати номер <strong>VAT-UE</strong>. Це дозволяє виставляти рахунки без VAT, оскільки податок сплачує замовник у своїй країні (<strong>Reverse Charge</strong>).
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Інформація про реєстрацію VAT-UE та механізм Reverse Charge.</p>
              </div>
            </div>
          </section>

          {/* Accounting and Finance Section */}
          <section id="accounting-finance" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Бухгалтерія та фінансова гігієна
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Цей розділ допоможе вам організувати щоденну рутину фрілансера так, щоб податкова не мала зайвих запитань. Ми переходимо до практичного управління фінансами та автоматизації процесів.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ведення бізнесу в Польщі вимагає дисципліни в документах. Кожна витрата має бути підтверджена фактурою, а кожен дохід має бути зафіксований у відповідних реєстрах.
              </p>

              <h3 id="accounting-finance-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ведення KPiR (Книга доходів і витрат)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви обрали загальну систему або лінійний податок, ваш головний документ це <strong>KPiR</strong>. Це детальний журнал, куди ви записуєте кожен зароблений злотий та кожну витрату на бізнес.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для тих, хто обрав <strong>Ryczałt</strong>, усе простіше. Ви ведете лише реєстр доходів (<strong>Ewidencja przychodów</strong>). Витрати вас не цікавлять, оскільки вони не впливають на розмір податку.
              </p>

              <h3 id="accounting-finance-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Система KSeF у 2026 році
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                У <strong>2026 році</strong> в Польщі стає обов'язковою Національна система електронних фактур (<strong>KSeF</strong>). Це означає, що ви більше не зможете просто надіслати PDF-файл клієнту.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Фактура має бути згенерована в державному форматі через спеціальну платформу. Це дозволяє податковій бачити всі транзакції в режимі реального часу. Для фрілансера це означає менше паперової роботи, але вимагає використання сучасного софту.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm">KSeF: Офіційна інформація - Все про обов'язкові електронні фактури.</p>
              </div>

              <h3 id="accounting-finance-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Витрати, що зменшують податок
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ваша система оподаткування дозволяє враховувати витрати, ви можете суттєво зекономити. До витрат можна віднести ноутбук, монітор, периферію, оренду офісу або частину витрат на житло (якщо там зареєстрована фірма), професійне навчання та курси, телефонний зв'язок та інтернет.
              </p>

              <h3 id="accounting-finance-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Професійна допомога - де шукати бухгалтера
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Фрілансеру в Польщі не обов'язково мати бухгалтера в штаті. Більшість обирають <strong>Biuro rachunkowe</strong>. Вартість послуг для JDG становить <strong>200–450 злотих на місяць</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Альтернатива це онлайн-бухгалтерія (наприклад, iFirma або wFirma). Це дешевше, і ви самі вносите дані, а система генерує декларації.
              </p>

              <h3 id="accounting-finance-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Електронне фактурування та система KSeF у 2026 році
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                KSeF (Krajowy System e-Faktur) - це національна система електронних рахунків-фактур. 
                З 2026 року вона стає обов'язковою для багатьох підприємців.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Система автоматично надсилає рахунки-фактури до податкової. 
                Не потрібно окремо подавати їх до системи.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Більшість бухгалтерських програм (включаючи inFakt) інтегровані з KSeF. 
                Рахунки-фактури автоматично надсилаються через систему.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для роботи з KSeF потрібна реєстрація в системі та налаштування програмного забезпечення. 
                Бухгалтер може допомогти з налаштуванням.
              </p>

              <h3 id="accounting-finance-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Витрати, що зменшують податок - оренда, техніка, навчання, авто
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                При skala podatkowa або podatek liniowy можна враховувати витрати, які зменшують податок. 
                Це включає оренду офісу, покупку техніки, навчання, витрати на авто.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Важливо зберігати всі чеки та рахунки-фактури на витрати. 
                Без документів витрати не можна врахувати.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Витрати на техніку можна врахувати одразу або амортизувати протягом кількох років. 
                Витрати на навчання враховуються, якщо вони пов'язані з діяльністю.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Витрати на авто враховуються частково, залежно від того, 
                скільки використовується для бізнесу, а скільки - для особистих потреб.
              </p>

              <h3 id="accounting-finance-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Професійна допомога - Biuro rachunkowe проти онлайн-сервісів
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Biuro rachunkowe (бухгалтерське бюро) - це традиційний спосіб ведення бухгалтерії. 
                Ви зустрічаєтеся з бухгалтером особисто, він веде всі документи.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Онлайн-сервіси (як inFakt) дозволяють вести бухгалтерію самостійно з підтримкою бухгалтера. 
                Це зручніше та часто дешевше.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для більшості фрілансерів онлайн-сервіси краще підходять. 
                Вони дозволяють контролювати фінанси та швидко отримувати консультації.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Традиційне бюро краще для складних випадків або якщо ви не хочете займатися бухгалтерією взагалі. 
                Але це дорожче.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Рекомендуємо почати з онлайн-сервісу inFakt. 
                Він має українську мову та підтримку від бухгалтерів, які розмовляють українською.
              </p>
            </div>
          </section>

          {/* Technical and Legal Aspects Section */}
          <section id="technical-legal" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Додаткові технічні та правові аспекти
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Сучасний фріланс це цифрові інструменти. Без них взаємодія з польською державою буде повільною та складною.
              </p>

              <h3 id="technical-legal-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Profil Zaufany та mObywatel
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це ваші цифрові ключі. Profil Zaufany дозволяє підписувати державні документи, подавати декларації та змінювати дані в реєстрі CEIDG онлайн.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Додаток mObywatel це ваш паспорт і водійське посвідчення в телефоні. Він також інтегрований з бізнес-послугами, що дозволяє швидко підтверджувати особу при відкритті банківських рахунків.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm">mObywatel.gov.pl - Як працює головний цифровий додаток Польщі.</p>
              </div>

              <h3 id="technical-legal-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Електронний підпис (Podpis kwalifikowany)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для деяких складних контрактів (особливо міжнародних) звичайного Profil Zaufany може бути недостатньо. Кваліфікований підпис має таку ж юридичну силу, як і ручний. Це платна послуга, але вона незамінна для фрілансерів, які працюють з великими корпораціями.
              </p>

              <h3 id="technical-legal-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Робота з іноземними платформами (Upwork, Fiverr)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви отримуєте дохід через платформи-посередники, пам'ятайте про валютний контроль. Ви повинні перераховувати отримані USD або EUR у польські злоті за курсом Національного банку Польщі (NBP) на день, що передує дню отримання оплати.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm">NBP: Таблиця курсів валют - Для правильного розрахунку податків з іноземних доходів.</p>
              </div>
            </div>
          </section>

          {/* Conclusions Section */}
          <section id="conclusions" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Висновки - стратегія успішного фрілансу в Польщі
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Фріланс у Польщі у 2026 році це прозора та передбачувана система. Головне не боятися легалізації та обрати правильну форму оподаткування.
              </p>

              <h3 id="conclusions-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ваш чек-лист на старт
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>1. Отримати PESEL UKR або перевірити статус легальності</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Перший крок це переконатися, що ви легально перебуваєте в Польщі. PESEL UKR або карта побиту дають право на ведення бізнесу.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>2. Створити Profil Zaufany</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Profil Zaufany це ваш цифровий ключ до всіх державних послуг. Без нього неможливо зареєструвати бізнес онлайн.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>3. Обрати форму - Незареєстрована діяльність чи JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Виберіть форму діяльності залежно від вашого доходу. Незареєстрована діяльність підходить, якщо дохід до 3500-3600 zł на місяць. JDG підходить, якщо дохід більший або хочете повноцінний статус підприємця.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>4. Підібрати коди PKD та ставку податку (Ryczałt або Skala)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Правильний вибір коду PKD та системи оподаткування може заощадити тисячі злотих. Використайте калькулятори або зверніться до бухгалтера.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>5. Зареєструватися та почати виставляти перші фактури</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Після реєстрації ви можете починати працювати та виставляти рахунки-фактури. Не забудьте зареєструватися в ZUS протягом 7 днів після отримання NIP.
              </p>

              <h3 id="conclusions-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Стратегія успішного фрілансу
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Планування</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Плануйте свої фінанси заздалегідь. Враховуйте всі витрати, такі як податки, ZUS, бухгалтерія. Це допоможе уникнути несподіваних проблем.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Вибір правильної системи</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Вибір правильної системи оподаткування критично важливий. Використайте калькулятори або зверніться до бухгалтера за консультацією.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ведення обліку</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ведіть облік з першого дня. Це допоможе уникнути проблем під час перевірок та правильно розрахувати податки.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Професійна допомога</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Не бійтеся звертатися до професійної допомоги. Бухгалтер або консультант може заощадити вам багато часу та грошей.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Дотримання законів</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Дотримуйтеся всіх законів та правил. Це допоможе уникнути штрафів та проблем з урядами.
              </p>
            </div>
          </section>

          {/* Employment vs Self-Employed Section */}
          <section id="employment-vs-selfemployed" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Самозайнятість vs Umowa o pracę - що вигідніше?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це ключове питання для багатьох фрілансерів. Урядові джерела часто наголошують на різниці в "соціальному пакеті". Важливо розуміти всі переваги та недоліки обох варіантів.
              </p>

              <h3 id="employment-vs-selfemployed-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Відпустки та лікарняні
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>На JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                На JDG у вас немає оплачуваної відпустки (20-26 днів), як на трудовому договорі. Ви заробляєте лише тоді, коли працюєте. Якщо ви не працюєте, ви не отримуєте гроші.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ви можете взяти відпустку, але вона буде безкоштовною. Ви не отримаєте оплату за дні, коли не працюєте.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>На Umowa o pracę</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                На трудовому договорі ви маєте право на оплачувану відпустку (20-26 днів на рік). Ви також маєте право на оплачуваний лікарняний.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це означає, що навіть коли ви не працюєте через хворобу або відпустку, ви все одно отримуєте зарплату.
              </p>

              <h3 id="employment-vs-selfemployed-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Стабільність
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Розірвання трудового договору</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Розірвання трудового договору вимагає часу (від 2 тижнів до 3 місяців залежно від стажу). Роботодавець не може просто звільнити вас без причини.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо роботодавець хоче вас звільнити, він має дотримуватися процедури та сплатити відступні.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Розірвання B2B-контракту</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                B2B-контракт може бути розірваний миттєво, якщо це прописано в угоді. Зазвичай контракти мають термін попередження (наприклад, 14 днів), але це залежить від умов договору.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це означає, що клієнт може припинити співпрацю без додаткових витрат, якщо це передбачено договором.
              </p>

              <h3 id="employment-vs-selfemployed-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Гроші на руки
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Головний аргумент за самозайнятість</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Головний аргумент за самозайнятість це значно вища сума "нетто" при тих самих витратах роботодавця.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Приклад розрахунку</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо роботодавець готовий витратити 10 000 zł на місяць.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>На Umowa o pracę</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Витрати роботодавця становлять 10 000 zł (брутто). Ваш дохід нетто становить близько 7 000 zł (після податків та ZUS).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>На JDG (Ryczałt 12%)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Витрати роботодавця становлять 10 000 zł (брутто). Ваш дохід нетто становить близько 8 800 zł (після податку 12%).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Різниця становить близько 1 800 zł на місяць або 21 600 zł на рік.
              </p>
            </div>
          </section>

          {/* Legal Liability Section */}
          <section id="legal-liability" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Юридична відповідальність фрілансера - ризики власним майном
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це розділ, який часто пропускають, але він є критично важливим для безпеки. Розуміння відповідальності допоможе вам захистити своє майно та уникнути серйозних проблем.
              </p>

              <h3 id="legal-liability-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Відповідальність усім майном
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>На відміну від ТОВ (Spółka z o.o.)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                На відміну від ТОВ (Spółka z o.o.), підприємець на JDG відповідає за борги бізнесу всім своїм особистим майном. Це включає авто, квартиру та кошти на приватних рахунках.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Це означає, що якщо ви не можете сплатити борги бізнесу, кредитори можуть стягнути ваше особисте майно.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Як захиститися</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Є кілька способів захистити майно. Застрахувати професійну відповідальність (OC) особливо важливо для IT та маркетологів. Створити ТОВ замість JDG можливо, але це складніше. Розділити майно з подружжям (intercyza) також допомагає.
              </p>

              <h3 id="legal-liability-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Страхування професійної відповідальності (OC)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Що таке OC</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Страхування професійної відповідальності (OC) це страхування, яке покриває збитки клієнта через ваші помилки.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Коли це важливо</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                OC особливо важливе для IT-спеціалістів (помилки в коді можуть призвести до серйозних збитків), маркетологів (неправильні дії можуть зашкодити сайту клієнта), консультантів (неправильні поради можуть призвести до збитків) та дизайнерів (порушення авторських прав).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Вартість OC</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Вартість залежить від виду діяльності та суми покриття. Зазвичай це 500-2000 zł на рік.
              </p>
            </div>
          </section>

          {/* B2B Contracts Section */}
          <section id="b2b-contracts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Специфіка B2B-контракту (Business-to-Business)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Фрілансери часто плутають договір на надання послуг із трудовим. Важливо розуміти різницю, щоб уникнути проблем з податковою та правильно оформити стосунки з клієнтом.
              </p>

              <h3 id="b2b-contracts-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ознаки трудових відносин
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Коли податкова може перекваліфікувати ваш B2B-контракт</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Податкова може перекваліфікувати ваш B2B-контракт у трудовий договір, якщо ви працюєте в офісі клієнта під його прямим керівництвом та за визначеним ним графіком.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ознаки трудових відносин</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ознаки трудових відносин включають роботу в офісі клієнта, фіксований графік (наприклад, 9:00-17:00), керівництво з боку клієнта, використання обладнання клієнта, фіксовану щомісячну оплату та відсутність інших клієнтів.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Наслідки перекваліфікації</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо податкова перекваліфікує ваш контракт, це загрожує штрафами для клієнта, втратою права на пільги ZUS, проблемами з податковою та втратою права на Ryczałt (для певних категорій).
              </p>

              <h3 id="b2b-contracts-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Працювати на колишнього роботодавця
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Чи можу я працювати на того самого роботодавця, у якого раніше працював за трудовим договором?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Так, але ви втратите право на деякі пільги ZUS та ставку податку Ryczałt (для певних категорій), якщо послуги ідентичні тим, що ви надавали як працівник.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Умови</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Між звільненням та підписанням B2B-контракту має пройти мінімум 6 місяців. Послуги не повинні бути ідентичними тим, що ви надавали як працівник. Ви повинні працювати з іншими клієнтами одночасно.
              </p>
            </div>
          </section>

          {/* Reporting Requirements Section */}
          <section id="reporting-requirements" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Вимоги до звітності та "урядові" перевірки
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Деталізація того, що саме перевіряє уряд, допоможе вам підготуватися до перевірок та уникнути проблем.
              </p>

              <h3 id="reporting-requirements-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Реєстрація в статистиці (REGON)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Хоча це автоматично</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Хоча це автоматично, важливо розуміти, що ваш бізнес класифікується для статистичних звітів.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Що таке REGON</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                REGON (Rejestr Gospodarki Narodowej) це реєстр національної економіки. Він використовується для статистичних звітів та класифікації бізнесу.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                REGON присвоюється автоматично під час реєстрації в CEIDG. Ви не потрібно робити нічого додаткового.
              </p>

              <h3 id="reporting-requirements-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Перевірки ZUS
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Соцстрах може перевіряти</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Соцстрах може перевіряти, чи не є ваша самозайнятість фіктивною (наприклад, якщо ви звільнилися з компанії та наступного дня підписали з нею ж B2B-контракт).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Наслідки фіктивної самозайнятості</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                У такому разі ви можете втратити право на пільгу "Ulga na start", отримати штраф від ZUS та втратити право на Ryczałt (для певних категорій).
              </p>

              <h3 id="reporting-requirements-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Перевірки податкової
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Що перевіряє податкова</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Податкова може перевіряти ваші рахунки-фактури, банківські виписки, договори з клієнтами, облік доходів та витрат та правильність розрахунку податків.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Права під час перевірки</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Під час перевірки ви маєте право знати причину перевірки, мати адвоката, мати перекладача (якщо не знаєте польської) та отримувати копії всіх документів.
              </p>
            </div>
          </section>

          {/* How to Start as Freelancer Section */}
          <section id="how-to-start" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Як стати фрілансером - поради для початківців
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Початок кар'єри фрілансера може здаватися складним, але з правильною стратегією та підготовкою ви зможете швидко стати успішним незалежним професіоналом.
              </p>

              <h3 id="how-to-start-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Як визначити свою професію та напрямок
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Перший крок до успішного фрілансу це <strong>чесна оцінка своїх навичок та інтересів</strong>. Задайте собі питання:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li>Що я вмію робити добре?</li>
                <li>Що мені подобається робити?</li>
                <li>Які навички я можу швидко покращити?</li>
                <li>На якому ринку є попит на мої послуги?</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Якщо ви не впевнені, почніть з <strong>найпростіших професій</strong>: копірайтинг, переклади, введення даних, обробка зображень. Це дозволить вам набратися досвіду та зрозуміти, що вам підходить.
              </p>

              <h3 id="how-to-start-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                На кого варто починати - професії для новачків
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ось професії, які підходять для початківців у фрілансі:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Копірайтер</strong> - якщо ви добре пишете, можете почати з простих текстів для сайтів та соціальних мереж</li>
                <li><strong>Перекладач</strong> - якщо ви вільно володієте двома мовами, переклади це стабільний дохід</li>
                <li><strong>Віртуальний асистент</strong> - адміністративна підтримка, обробка email, планування</li>
                <li><strong>Графічний дизайнер</strong> - якщо є базові навички в Photoshop або Figma</li>
                <li><strong>Введення даних</strong> - проста робота, яка не вимагає спеціальних навичок</li>
                <li><strong>Онлайн-репетитор</strong> - якщо ви експерт у якійсь галузі, можете навчати інших</li>
                <li><strong>SMM-менеджер</strong> - управління соціальними мережами для бізнесу</li>
              </ul>

              <h3 id="how-to-start-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Куди йти - платформи та способи пошуку клієнтів
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Є кілька способів знайти перших клієнтів:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Фріланс-платформи</strong> (Upwork, Fiverr, Freelancer.com) - добре для початківців, але висока конкуренція</li>
                <li><strong>Соціальні мережі</strong> (LinkedIn, Facebook групи, Telegram канали) - можна знайти клієнтів безпосередньо</li>
                <li><strong>Польські платформи</strong> (NoFluffJobs, JustJoinIT) - для IT-спеціалістів</li>
                <li><strong>Особисті зв'язки</strong> - розкажіть друзям та знайомим про свої послуги</li>
                <li><strong>Власний сайт або портфоліо</strong> - створіть профіль на Behance, Dribbble або власний сайт</li>
              </ul>

              <h3 id="how-to-start-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Навчання - курси та ресурси
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Для успішного старту в фрілансі важливо постійно вдосконалювати свої навички. Ось різні типи навчальних ресурсів:
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Безкоштовні курси та ресурси
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>YouTube</strong> - безкоштовні туторіали з будь-якої теми</li>
                <li><strong>Coursera</strong> - безкоштовні курси від університетів (з можливістю отримати сертифікат за плату)</li>
                <li><strong>edX</strong> - безкоштовні курси від провідних університетів</li>
                <li><strong>Khan Academy</strong> - безкоштовна освіта з багатьох предметів</li>
                <li><strong>Codecademy</strong> - безкоштовні курси програмування</li>
                <li><strong>Udemy</strong> - часто є безкоштовні курси під час акцій</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Платні курси (середній рівень)
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Udemy</strong> - курси від <strong>50 до 200 злотих</strong>, часто зі знижками</li>
                <li><strong>Skillshare</strong> - підписка від <strong>100 злотих/місяць</strong>, необмежений доступ</li>
                <li><strong>Pluralsight</strong> - підписка від <strong>150 злотих/місяць</strong>, фокус на технічних навичках</li>
                <li><strong>LinkedIn Learning</strong> - підписка від <strong>120 злотих/місяць</strong></li>
                <li><strong>Domestika</strong> - курси з дизайну та творчості від <strong>80 до 300 злотих</strong></li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Преміум курси та буткемпи
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Буткемпи з програмування</strong> - від <strong>5000 до 20000 злотих</strong>, інтенсивні програми з гарантією працевлаштування</li>
                <li><strong>Професійні сертифікації</strong> (Google, Microsoft, Adobe) - від <strong>500 до 2000 злотих</strong></li>
                <li><strong>Онлайн-школи</strong> (Thinkful, General Assembly) - від <strong>10000 до 30000 злотих</strong></li>
                <li><strong>Індивідуальне менторство</strong> - від <strong>200 до 500 злотих/год</strong></li>
              </ul>

              <h3 id="how-to-start-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Мови навчання - таблиця доступності курсів
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Мова</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Безкоштовні курси</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Платні курси</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Преміум курси</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3"><strong>Англійська</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Дуже багато (Coursera, edX, YouTube)</td>
                      <td className="border border-gray-300 px-4 py-3">Найбільший вибір (Udemy, Skillshare)</td>
                      <td className="border border-gray-300 px-4 py-3">Всі преміум платформи</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3"><strong>Польська</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Обмежений вибір (YouTube, безкоштовні вебінари)</td>
                      <td className="border border-gray-300 px-4 py-3">Середній вибір (Udemy, польські платформи)</td>
                      <td className="border border-gray-300 px-4 py-3">Польські буткемпи та школи</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3"><strong>Українська</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Обмежений вибір (YouTube, Prometheus)</td>
                      <td className="border border-gray-300 px-4 py-3">Невеликий вибір (українські платформи)</td>
                      <td className="border border-gray-300 px-4 py-3">Українські онлайн-школи</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3"><strong>Німецька</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Середній вибір (німецькі університети)</td>
                      <td className="border border-gray-300 px-4 py-3">Добрий вибір (німецькі платформи)</td>
                      <td className="border border-gray-300 px-4 py-3">Німецькі буткемпи</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 id="how-to-start-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Практичні поради для старту
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Почніть з малого</strong> - не бійтеся брати невеликі проекти для накопичення досвіду та відгуків</li>
                <li><strong>Створіть портфоліо</strong> - навіть якщо у вас немає комерційних проектів, створіть кілька робіт для демонстрації навичок</li>
                <li><strong>Встановіть реалістичні ціни</strong> - на старті краще працювати за нижчими ставками, щоб набратися досвіду</li>
                <li><strong>Вчитеся постійно</strong> - ринок змінюється, тому важливо оновлювати навички</li>
                <li><strong>Будьте професійними</strong> - завжди дотримуйтеся дедлайнів, спілкуйтеся ввічливо, виконуйте обіцянки</li>
                <li><strong>Зберігайте всі роботи</strong> - вони стануть частиною вашого портфоліо</li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <p className="text-gray-700 font-semibold mb-2">Офіційні джерела</p>
                <p className="text-gray-700 text-sm"><a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Інформація про підтримку підприємництва та навчальні програми для підприємців.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              FAQ - Запитання та відповіді
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Цей розділ містить відповіді на найпоширеніші питання фрілансерів про роботу в Польщі. Всі відповіді написані простою мовою та базуються на актуальному законодавстві 2026 року.
              </p>

              <h3 id="faq-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Основні питання про реєстрацію
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи потрібно реєструвати JDG, якщо я працюю тільки з закордонними клієнтами?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, якщо ви перевищуєте ліміт незареєстрованої діяльності (3500-3600 zł на місяць). Навіть якщо клієнти закордонні, ви все одно зобов'язані декларувати доходи в Польщі, якщо ви податковий резидент.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Скільки часу займає реєстрація JDG?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Реєстрація через CEIDG займає 7-10 робочих днів. Але підготовка документів та налаштування може зайняти додатковий час.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи можна реєструвати JDG віддалено?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, реєстрація відбувається онлайн через CEIDG. Вам потрібен лише Profil Zaufany для підпису заяви.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи потрібен віртуальний офіс для реєстрації?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ні, віртуальний офіс не обов'язковий. Ви можете використати адресу свого проживання. Але віртуальний офіс зручний, якщо ви не хочете вказувати домашню адресу в публічному реєстрі.
                  </p>
                </div>
              </div>

              <h3 id="faq-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання про оподаткування
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Яка система оподаткування найвигідніша для фрілансера?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Це залежить від вашого доходу та витрат. Для більшості фрілансерів з невеликими витратами найвигідніший Ryczałt 12% або 8,5%. Для тих, хто має значні витрати, вигідніша Skala podatkowa.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи можна змінити систему оподаткування?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, систему можна змінити раз на рік, подавши заяву до 20 січня.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Скільки податку я платитиму на Ryczałt 12%?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ви платите 12% від всього доходу без врахування витрат. Наприклад, якщо ваш дохід 100 000 zł на рік, податок буде 12 000 zł.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи можна врахувати витрати на Ryczałt?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ні, на Ryczałt витрати не враховуються. Ви платите відсоток від всього доходу.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Що таке Kwota wolna od podatku?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Це сума, вільна від податку. У 2026 році вона становить близько 30 000 zł. Це означає, що перші 30 000 zł вашого доходу не оподатковуються на Skala podatkowa.
                  </p>
                </div>
              </div>

              <h3 id="faq-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання про ZUS
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Скільки я платитиму ZUS на старті?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Протягом перших 6 місяців ви звільнені від соціальних внесків завдяки пільзі "Ulga na start". Ви платите лише медичне страхування (близько 400-500 zł на місяць).
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Що таке Mały ZUS Plus?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Це пільговий період на 24 місяці після закінчення "Ulga na start". Ви платите внески від зниженої бази, що значно менше повного ZUS.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Скільки коштує повний ZUS?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Повний ZUS у 2026 році становить близько 1600-2000 zł на місяць. Це залежить від розрахунків та додаткових внесків.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи потрібно платити ZUS, якщо я нічого не заробив?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, якщо ви зареєстровані як підприємець, ви зобов'язані платити ZUS навіть якщо не маєте доходу. Але пільги "Ulga na start" та "Mały ZUS Plus" допомагають зменшити витрати на старті.
                  </p>
                </div>
              </div>

              <h3 id="faq-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання про VAT
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Коли я зобов'язаний зареєструватися як платник VAT?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ви зобов'язані зареєструватися, коли ваш річний оборот перевищує 200 000 zł.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Що таке VAT-UE?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    VAT-UE це номер для роботи з клієнтами з країн ЄС. Він дозволяє використовувати механізм Reverse Charge та не сплачувати VAT двічі.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи потрібен касовий апарат для фрілансера?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Зазвичай ні. Більшість фрілансерів використовують електронні рахунки-фактури через KSeF, що замінює касовий апарат.
                  </p>
                </div>
              </div>

              <h3 id="faq-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання про бухгалтерію
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи потрібна KPiR для Ryczałt?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ні, для Ryczałt KPiR не потрібна. Вона потрібна лише для Skala podatkowa та Podatek liniowy.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Що таке KSeF?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    KSeF (Krajowy System e-Faktur) це національна система електронних рахунків-фактур. Вона стає обов'язковою поступово для всіх підприємців.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи можна вести бухгалтерію самостійно?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, але це може бути складно, особливо на Skala або Liniowy. Для Ryczałt це простіше, оскільки не потрібна KPiR.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Скільки коштує бухгалтер?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Вартість залежить від типу послуг. Онлайн-сервіси коштують 150-400 zł на місяць, традиційні бюро коштують 300-600 zł на місяць.
                  </p>
                </div>
              </div>

              <h3 id="faq-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання про міжнародні доходи
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи потрібно декларувати доходи з Upwork/Fiverr?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, всі доходи з міжнародних платформ потрібно декларувати у річній декларації PIT-36.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Як декларувати доходи в доларах?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Доходи конвертуються за курсом НБП на дату отримання. Конвертована сума вказується в декларації PIT-36.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи потрібно платити податок двічі?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ні, завдяки угодам про уникнення подвійного оподаткування ви не платите податок двічі. Податок сплачується в країні, де ви є податковим резидентом.
                  </p>
                </div>
              </div>

              <h3 id="faq-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання про легалізацію
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи можна отримати карту побиту на підставі JDG?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, можна подати заяву на карту тимчасового побиту на підставі ведення бізнесу. Для цього потрібен стабільний дохід та корисність для польської економіки.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Скільки потрібно заробляти для карти побиту?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Зазвичай потрібен дохід мінімум 3000-5000 zł на місяць та мінімум 6-12 місяців роботи.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи допомагають інкубатори з легалізацією?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Деякі інкубатори допомагають з підготовкою документів для карти побиту. Але не всі надають цю послугу, тому краще уточнити заздалегідь.
                  </p>
                </div>
              </div>

              <h3 id="faq-8" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання про B2B-контракти та трудові відносини
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи можу я працювати на того самого роботодавця, у якого раніше працював за трудовим договором?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, але ви втратите право на деякі пільги ZUS та ставку податку Ryczałt (для певних категорій), якщо послуги ідентичні тим, що ви надавали як працівник. Між звільненням та підписанням B2B-контракту має пройти мінімум 6 місяців.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чим відрізняється самозайнятість від трудового договору?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Самозайнятість дає більше грошей на руки, але немає оплачуваної відпустки та лікарняного. Трудовий договір дає стабільність та соціальний пакет, але менше грошей на руки.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи може податкова перекваліфікувати мій B2B-контракт у трудовий?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, якщо ви працюєте в офісі клієнта під його прямим керівництвом та за визначеним ним графіком. Це загрожує штрафами та втратою права на пільги.
                  </p>
                </div>
              </div>

              <h3 id="faq-9" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Питання про відповідальність
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи відповідаю я за борги бізнесу своїм особистим майном?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Так, на JDG ви відповідаєте за борги бізнесу всім своїм особистим майном: авто, квартирою, коштами на приватних рахунках. На відміну від ТОВ, де відповідальність обмежена статутним капіталом.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Як захистити своє майно?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Є кілька способів: застрахувати професійну відповідальність (OC), розділити майно з подружжям (intercyza), або створити ТОВ замість JDG.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Чи потрібне страхування професійної відповідальності?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Це не обов'язково, але дуже рекомендується, особливо для IT-спеціалістів, маркетологів та консультантів. OC покриває збитки клієнта через ваші помилки.
                  </p>
                </div>
              </div>

              <Script
                id="faq-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "Чи потрібно реєструвати JDG, якщо я працюю тільки з закордонними клієнтами?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Так, якщо ви перевищуєте ліміт незареєстрованої діяльності (3500-3600 zł на місяць). Навіть якщо клієнти закордонні, ви все одно зобов'язані декларувати доходи в Польщі, якщо ви податковий резидент."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Яка система оподаткування найвигідніша для фрілансера?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Це залежить від вашого доходу та витрат. Для більшості фрілансерів з невеликими витратами найвигідніший Ryczałt 12% або 8,5%. Для тих, хто має значні витрати, вигідніша Skala podatkowa."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Скільки я платитиму ZUS на старті?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Протягом перших 6 місяців ви звільнені від соціальних внесків завдяки пільзі \"Ulga na start\". Ви платите лише медичне страхування (близько 400-500 zł на місяць)."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Коли я зобов'язаний зареєструватися як платник VAT?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Ви зобов'язані зареєструватися, коли ваш річний оборот перевищує 200 000 zł."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Чи потрібна KPiR для Ryczałt?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Ні, для Ryczałt KPiR не потрібна. Вона потрібна лише для Skala podatkowa та Podatek liniowy."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Чи потрібно декларувати доходи з Upwork/Fiverr?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Так, всі доходи з міжнародних платформ потрібно декларувати у річній декларації PIT-36."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Чи можна отримати карту побиту на підставі JDG?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Так, можна подати заяву на карту тимчасового побиту на підставі ведення бізнесу. Для цього потрібен стабільний дохід та корисність для польської економіки."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Чи можу я працювати на того самого роботодавця, у якого раніше працював за трудовим договором?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Так, але ви втратите право на деякі пільги ZUS та ставку податку Ryczałt (для певних категорій), якщо послуги ідентичні тим, що ви надавали як працівник. Між звільненням та підписанням B2B-контракту має пройти мінімум 6 місяців."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Чим відрізняється самозайнятість від трудового договору?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Самозайнятість дає більше грошей на руки, але немає оплачуваної відпустки та лікарняного. Трудовий договір дає стабільність та соціальний пакет, але менше грошей на руки."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Чи відповідаю я за борги бізнесу своїм особистим майном?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Так, на JDG ви відповідаєте за борги бізнесу всім своїм особистим майном: авто, квартирою, коштами на приватних рахунках. На відміну від ТОВ, де відповідальність обмежена статутним капіталом."
                        }
                      }
                    ]
                  })
                }}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                  Цей FAQ охоплює найпоширеніші питання фрілансерів про роботу в Польщі. Якщо у вас є додаткові питання, рекомендую звернутися до бухгалтера або отримати офіційне роз'яснення від податкової.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  Важливо пам'ятати, що законодавство може змінюватися, тому завжди перевіряйте актуальність інформації на офіційних сайтах урядів.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar Navigation - заголовки + підзаголовки акордеоном */}
        <aside className="hidden lg:block w-[min(359px,28rem)] flex-shrink-0 self-start sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden border-l border-gray-200 bg-gray-50">
          <nav className="p-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Зміст
            </h3>
            <ul className="space-y-0.5">
              {navigationSectionsUk.map((section) => {
                const isExpanded = expandedSectionId === section.id;
                const isSectionActive = activeSection === section.id || section.children?.some(c => c.id === activeSection);
                return (
                  <li key={section.id} className="rounded-md">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`flex-1 min-w-0 text-left px-3 py-2 text-sm rounded-md transition-colors break-words leading-snug ${
                          isSectionActive ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        {section.title}
                      </button>
                      {section.children && section.children.length > 0 && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setExpandedSectionId(isExpanded ? null : section.id);
                          }}
                          className="flex-shrink-0 p-1.5 rounded hover:bg-gray-200 text-gray-500"
                          aria-expanded={isExpanded}
                          aria-label={isExpanded ? 'Згорнути' : 'Розгорнути'}
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {section.children && section.children.length > 0 && (
                      <div
                        className="grid transition-[grid-template-rows] duration-200 ease-out"
                        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
                      >
                        <ul className="min-h-0 overflow-hidden">
                        {section.children.map((child) => (
                          <li key={child.id} className="pl-4 pr-2 py-1">
                            <button
                              onClick={() => scrollToSection(child.id)}
                              className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors break-words leading-snug ${
                                activeSection === child.id ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                              }`}
                            >
                              {child.title}
                            </button>
                          </li>
                        ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12 -mx-[max(1rem,env(safe-area-inset-left))] md:mx-0 px-4 md:px-0">
        <div className="container mx-auto px-0 md:px-4">
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
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/ukr/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.contact}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ukr/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Політика конфіденційності
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ukr/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Умови використання
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@freelancer.org.pl</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {DynamicYear()} {t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Кнопка скролу вгору */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Вгору"
        className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}
