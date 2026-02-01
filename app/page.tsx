'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DynamicYear } from "@/components/dynamic-year";
import { LanguageSwitcher } from "@/components/language-switcher";
import { translations, type Language } from "@/lib/translations";
import { ChevronUp, ChevronDown } from "lucide-react";
import { navigationSectionsPl, getAllNavIds } from "@/lib/navigation";

export default function HomePage() {
  const language: Language = 'pl';
  const t = translations['pl'];
  const [activeSection, setActiveSection] = useState('introduction');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);

  const allNavIds = useMemo(() => getAllNavIds(navigationSectionsPl), []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'pl';
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
              Rejestracja JDG
            </button>
            <button
              onClick={() => scrollToSection('taxation-systems')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Systemy opodatkowania
            </button>
            <button
              onClick={() => scrollToSection('zus-insurance')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Ubezpieczenia ZUS
            </button>
            <button
              onClick={() => scrollToSection('how-to-start')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Jak zacząć
            </button>
            <LanguageSwitcher currentLanguage={language} />
          </nav>
          <div className="md:hidden">
            <LanguageSwitcher currentLanguage={language} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-10 md:py-24">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-2">{t.hero.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Jak zacząć pracować?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Krok 1 - Sprawdź swoje prawo do pracy</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Potrzebny jest numer PESEL oraz adres zamieszkania w Polsce.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Krok 2 - Wybierz formę działalności</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Działalność nierejestrowana (dochód do 3500-3600 złotych miesięcznie) lub JDG dla większych dochodów.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Krok 3 - Zarejestruj działalność</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Rejestracja JDG online przez CEIDG z Profil Zaufany. Proces zajmuje około 15 minut.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Krok 4 - Wybierz system opodatkowania</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Ryczałt: 12% dla większości usług lub 8,5% dla wolnych zawodów. Prostsze niż pełny rozliczenie kosztów.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Krok 5 - Skonfiguruj księgowość</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Wybierz platformę księgową lub księgowego do rozliczania dochodów i sprawozdawczości.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
                  alt="Freelancer w Polsce"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Korzyści współpracy z inFakt</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Przy wyborze inFakt (około 200 złotych miesięcznie) bezpłatnie pomogą otworzyć firmę i skonfigurować wszystko niezbędne. Skupiasz się na pracy, a inFakt prowadzi księgowość i sprawozdawczość.
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
                    Zarejestruj się i zobacz swojego księgowego
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Navigation - sidebar razem ze stawką, od nagłówka artykułu */}
      <div className="flex w-full max-w-[100vw] overflow-x-hidden">
        {/* Main Content Area */}
        <main className="flex-1 w-full min-w-0 max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
          {/* Introduction Section */}
          <section id="introduction" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wszystko o freelancingu w Polsce na 2026
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wiele osób w Polsce chce legalnie pracować i zarabiać pieniądze online. <strong>Samozatrudnienie może być legalną podstawą prowadzenia działalności w Polsce</strong>. Dlatego ważne jest, aby wiedzieć, jak wszystko działa. W tym przewodniku zebrano szczegółowe informacje o wszystkich aspektach pracy jako freelancer w Polsce.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                W polskim prawodawstwie nie ma osobnego terminu "freelancer". Freelancing jest traktowany jako <strong>samodzielna działalność gospodarcza</strong>. Oznacza to, że freelancer jest <em>przedsiębiorcą ze wszystkimi prawami i obowiązkami</em>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Polskie prawo uznaje kilka form prowadzenia samodzielnej działalności. Każda forma ma swoje szczególne cechy, wymagania i ograniczenia. Wybór formy zależy od wielkości dochodu, rodzaju działalności i osobistych okoliczności.
              </p>

              <h3 id="introduction-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Dlaczego Polska stała się centrum dla freelancerów?
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Polska oferuje sprzyjające środowisko dla freelancerów. Rozwijająca się gospodarka, otwarty rynek pracy i korzystne warunki podatkowe sprawiają, że Polska jest atrakcyjna dla osób prowadzących działalność na własny rachunek.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Polska gospodarka aktywnie się rozwija. W UE pod względem PKB Polacy zajmują szóste miejsce, bezrobocie w kraju stale spada. Popyt na specjalistów IT, projektantów, marketerów i innych fachowców stale rośnie. To tworzy wiele możliwości dla freelancerów.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Polska niedawno weszła do 20 najsilniejszych gospodarek świata pod względem PKB. Znaczący wkład w ten rozwój wnoszą freelancerzy i przedsiębiorcy, którzy aktywnie pracują i przyczyniają się do wzrostu gospodarczego. Specjaliści, w szczególności freelancerzy, stali się ważną częścią polskiego rynku pracy i gospodarki.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Źródła:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.worldbank.org/en/country/poland" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">World Bank - Poland</a> - oficjalne dane o gospodarce Polski i PKB</li>
                  <li>- <a href="https://stat.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Główny Urząd Statystyczny</a> - polski urząd statystyczny, dane o gospodarce i rynku pracy</li>
                </ul>
              </div>

              <h3 id="introduction-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Statystyki freelancingu w Polsce
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Według danych statystycznych w Polsce pracuje ponad <strong>2 miliony freelancerów</strong>, co stanowi około <strong>12-15% całkowitej liczby pracujących</strong>. Ta liczba stale rośnie, szczególnie po 2022 roku, kiedy rynek freelancingu znacznie się rozwinął.
              </p>

              <h3 id="introduction-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Najbardziej poszukiwane zawody i średnie wynagrodzenia
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Rynek freelancingu w Polsce aktywnie się rozwija, a popyt na różne zawody stale się zmienia. Oto lista najpopularniejszych zawodów i ich średnie wynagrodzenia w 2026 roku:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Specjaliści IT i programiści</strong> - od <strong>8000 do 25000 złotych</strong> miesięcznie (w zależności od doświadczenia i technologii)</li>
                <li><strong>Projektanci stron internetowych i projektanci UI/UX</strong> - od <strong>5000 do 15000 złotych</strong> miesięcznie</li>
                <li><strong>Projektanci graficzni</strong> - od <strong>4000 do 12000 złotych</strong> miesięcznie</li>
                <li><strong>Marketerzy i specjaliści SMM</strong> - od <strong>4500 do 14000 złotych</strong> miesięcznie</li>
                <li><strong>Copywriterzy i menedżerowie treści</strong> - od <strong>3500 do 10000 złotych</strong> miesięcznie</li>
                <li><strong>Tłumacze</strong> - od <strong>4000 do 12000 złotych</strong> miesięcznie (w zależności od języka i specjalizacji)</li>
                <li><strong>Korepetytorzy i nauczyciele online</strong> - od <strong>3000 do 8000 złotych</strong> miesięcznie</li>
                <li><strong>Księgowi i doradcy finansowi</strong> - od <strong>5000 do 15000 złotych</strong> miesięcznie</li>
                <li><strong>Fotografowie i wideografowie</strong> - od <strong>4000 do 12000 złotych</strong> miesięcznie</li>
                <li><strong>Architekci i inżynierowie</strong> - od <strong>6000 do 18000 złotych</strong> miesięcznie</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Ważne jest, aby wziąć pod uwagę, że te liczby są orientacyjne i zależą od doświadczenia, portfolio, złożoności projektów i języka komunikacji z klientami.</em>
              </p>

              <h3 id="introduction-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Platformy dla freelancerów
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Istnieje wiele platform, na których freelancerzy mogą znaleźć pracę. Oto krótki przegląd najpopularniejszych:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Upwork</strong> - jedna z największych globalnych platform z szerokim zakresem projektów</li>
                <li><strong>Fiverr</strong> - popularna platforma do sprzedaży usług w stałych pakietach</li>
                <li><strong>Freelancer.com</strong> - międzynarodowa platforma z konkursami i projektami</li>
                <li><strong>Toptal</strong> - platforma dla najlepszych freelancerów z wysokimi wymaganiami</li>
                <li><strong>PeoplePerHour</strong> - popularna w Europie platforma dla różnych zawodów</li>
                <li><strong>99designs</strong> - wyspecjalizowana platforma dla projektantów</li>
                <li><strong>Guru</strong> - platforma z naciskiem na długoterminowe relacje</li>
                <li><strong>Behance</strong> - platforma do prezentacji portfolio i znajdowania klientów</li>
                <li><strong>LinkedIn</strong> - profesjonalna sieć społecznościowa do znajdowania klientów i projektów</li>
                <li><strong>NoFluffJobs</strong> - popularna w Polsce platforma dla specjalistów IT</li>
                <li><strong>JustJoinIT</strong> - polska platforma dla specjalistów technicznych</li>
              </ul>

              <h3 id="introduction-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Średnie stawki godzinowe
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Stawki godzinowe znacznie się różnią w zależności od regionu, doświadczenia i zawodu. Oto orientacyjne średnie stawki:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Polska</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>Specjaliści IT: <strong>80-200 złotych/godz</strong></li>
                  <li>Projektanci: <strong>60-150 złotych/godz</strong></li>
                  <li>Marketerzy: <strong>50-120 złotych/godz</strong></li>
                  <li>Tłumacze: <strong>40-100 złotych/godz</strong></li>
                  <li>Copywriterzy: <strong>40-90 złotych/godz</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Europa</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>Specjaliści IT: <strong>30-80 euro/godz</strong></li>
                  <li>Projektanci: <strong>25-60 euro/godz</strong></li>
                  <li>Marketerzy: <strong>20-50 euro/godz</strong></li>
                  <li>Tłumacze: <strong>20-45 euro/godz</strong></li>
                  <li>Copywriterzy: <strong>18-40 euro/godz</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Ameryka (USA/Kanada)</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>Specjaliści IT: <strong>40-120 dolarów/godz</strong></li>
                  <li>Projektanci: <strong>30-80 dolarów/godz</strong></li>
                  <li>Marketerzy: <strong>25-70 dolarów/godz</strong></li>
                  <li>Tłumacze: <strong>20-50 dolarów/godz</strong></li>
                  <li>Copywriterzy: <strong>20-45 dolarów/godz</strong></li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Stawki zależą od wielu czynników: doświadczenia, złożoności projektu, języka komunikacji, reputacji na platformie i indywidualnych umiejętności.</em>
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Polski system podatkowy jest dość prosty i przejrzysty. Istnieje kilka systemów podatkowych, które można wybrać w zależności od dochodu i rodzaju działalności. To pozwala zoptymalizować obciążenie podatkowe.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Niski kapitał zakładowy wynosi 1200 euro lub 5000 złotych. Ponadto ta kwota nie musi koniecznie znajdować się na koncie bankowym. Pełny pakiet socjalny obejmuje bezpłatną opiekę medyczną i edukację. Rozszerzenie rynku pozwala prowadzić działalność ze wszystkimi krajami UE.
              </p>

            </div>
          </section>

          {/* Legal Status Section */}
          <section id="legal-status" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Legalny pobyt i freelancing w Polsce
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jako obywatel Polski masz pełne prawo do prowadzenia działalności gospodarczej w kraju. 
                Nie potrzebujesz dodatkowych zezwoleń ani wiz - wystarczy <strong>numer PESEL oraz adres zamieszkania w Polsce</strong>.
              </p>

              <h3 id="legal-status-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Numer PESEL i jego znaczenie
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>PESEL</strong> (Powszechny Elektroniczny System Ewidencji Ludności) to unikalny numer identyfikacyjny każdego obywatela Polski. 
                Jest niezbędny do rejestracji JDG i prowadzenia działalności gospodarczej.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Z numerem PESEL możesz zarejestrować JDG i prowadzić biznes. PESEL jest wymagany do wszystkich formalności związanych z biznesem, 
                w tym do rejestracji w CEIDG, otwarcia konta bankowego oraz rozliczeń podatkowych.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli nie masz jeszcze numeru PESEL, możesz go uzyskać w urzędzie gminy lub miasta za miejsce zamieszkania. 
                Proces zwykle trwa <strong>od 1 do 3 dni roboczych</strong> po złożeniu dokumentów.
              </p>

              <h3 id="legal-status-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Prawo do prowadzenia działalności gospodarczej
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Obywatele Polski mają pełne prawo do prowadzenia działalności gospodarczej w kraju</strong>. 
                Nie potrzebujesz dodatkowych zezwoleń ani licencji dla większości rodzajów działalności.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Do rejestracji <strong>JDG</strong> wystarczy mieć <strong>dokument tożsamości, numer PESEL oraz adres w Polsce</strong>. 
                Możesz zarejestrować działalność online przez portal <strong>CEIDG</strong> w ciągu kilku minut.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ważne jest, aby wiedzieć</strong>, że niektóre rodzaje działalności wymagają specjalnych zezwoleń lub licencji. 
                Na przykład <em>praktyka medyczna, usługi prawne lub usługi finansowe</em> mają dodatkowe wymagania. 
                Przed rozpoczęciem działalności warto sprawdzić, czy nie są potrzebne specjalne zezwolenia dla Twojego rodzaju biznesu.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Źródła:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://biznes.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - oficjalny portal dla przedsiębiorców, informacje o rejestracji i rodzajach działalności</li>
                  <li>- <a href="https://ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG</a> - centralny rejestr i informacje o rejestracji JDG</li>
                </ul>
              </div>

              <h3 id="legal-status-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Krok po kroku: od pomysłu do rozpoczęcia działalności
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">Krok 1 - Numer PESEL i adres (1-3 dni)</h5>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Upewnij się, że masz numer PESEL. Jeśli go nie masz, zarejestruj się w urzędzie gminy lub miasta. 
                    Znajdź miejsce zamieszkania i zarejestruj adres.
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">Krok 2 - Profil Zaufany</h5>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Utwórz Profil Zaufany na portalu gov.pl. To bezpłatny podpis elektroniczny, który pozwala na korzystanie z usług online, 
                    w tym rejestracji JDG przez CEIDG.
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">Krok 3 - Rejestracja JDG (15 min - 1 dzień)</h5>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Zarejestruj JDG online przez CEIDG na portalu Biznes.gov.pl. Po rejestracji otrzymasz numer NIP i REGON. 
                    Możesz skorzystać z pomocy platformy księgowej, takiej jak inFakt, która bezpłatnie pomoże w rejestracji.
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">Krok 4 - Rozpoczęcie działalności</h5>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Zacznij pracować! Wybierz system opodatkowania (ryczałt lub skala podatkowa), 
                    skonfiguruj księgowość i rozpocznij świadczenie usług.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Unregistered Activity Section */}
          <section id="unregistered-activity" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Działalność nierejestrowana
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ten rozdział jest poświęcony najbardziej korzystnemu formatowi dla początkujących. 
                To idealny wariant, aby przetestować swoją niszę bez ryzyka i papierkowej roboty.
              </p>

              <h3 id="unregistered-activity-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Czym jest działalność nierejestrowana?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To specjalny reżim prawny dla małego biznesu. Pracujesz legalnie, ale nie rejestrujesz firmy w rejestrze <strong>CEIDG</strong>. 
                To ratunkowe koło dla tych, których dochód jest jeszcze niewielki - <strong>do 3500-3600 złotych miesięcznie</strong> (około 800-900 euro).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To działalność osoby fizycznej, która nie jest oficjalnym przedsiębiorstwem. 
                Świadczysz usługi lub sprzedajesz towary jako osoba prywatna.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Masz prawo wystawiać rachunki (<em>rachunki</em>) lub nawet faktury (<em>faktury</em>). 
                Klienci mogą oficjalnie wpisać te wydatki do swojej księgowości. To czyni Cię pełnoprawnym graczem na rynku.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ważne jest, aby wiedzieć</strong>, że działalność nierejestrowana jest idealna do rozpoczęcia i testowania rynku, 
                ale dla długoterminowej działalności lepiej zarejestrować JDG, gdy dochód wzrośnie lub stanie się stabilny.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Jak długo może trwać działalność nierejestrowana?</strong> Teoretycznie działalność nierejestrowana może trwać nieograniczenie, 
                dopóki nie przekroczysz miesięcznego limitu dochodu (3500-3600 złotych). 
                W praktyce większość freelancerów przechodzi na <strong>JDG</strong> w ciągu <strong>3-6 miesięcy</strong>, 
                gdy dochód się ustabilizuje lub wzrośnie. Jeśli planujesz pracować dłużej niż 6 miesięcy lub Twój dochód regularnie przekracza limit, 
                koniecznie musisz zarejestrować JDG.
              </p>

              <h3 id="unregistered-activity-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Limit finansowy dochodu w 2026 roku
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Główny warunek polega na tym, że Twój miesięczny dochód nie powinien przekraczać określonej kwoty. 
                Ta kwota wynosi <strong>75% od minimalnego wynagrodzenia brutto w Polsce</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Od 1 stycznia 2026 roku minimalna pensja wzrosła, więc Twój limit wynosi teraz około <strong>3500-3600 złotych miesięcznie</strong> 
                (dokładną cyfrę należy sprawdzić w momencie wypłaty). 
                <em>Jeśli przekroczyłeś ten limit choćby o 1 złoty, jesteś zobowiązany zarejestrować JDG w ciągu 7 dni</em>.
              </p>

              <h3 id="unregistered-activity-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Kto ma prawo do tej formy?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ten model jest dostępny dla obywateli Polski, którzy legalnie przebywają w kraju. 
                <strong>Główny warunek</strong> polega na tym, że nie powinieneś prowadzić własnej firmy (<strong>JDG</strong>) w Polsce przez 
                <strong> ostatnie 60 miesięcy</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To idealnie pasuje dla <em>copywriterów, projektantów, korepetytorów, marketerów, tłumaczy, 
                menedżerów treści i innych specjalistów</em> na starcie. Po prostu zaczynasz pracować bez żadnych wizyt w urzędach.
              </p>

              <h3 id="unregistered-activity-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Lista obowiązków - uproszczony rejestr
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Nie potrzebujesz księgowego</em>. Jedyny dokument, który jesteś zobowiązany prowadzić, to 
                <strong> Ewidencja sprzedaży</strong> (uproszczony rejestr sprzedaży).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Po prostu zapisujesz datę, kwotę i komu świadczyłeś usługę. To jest potrzebne, aby urząd skarbowy mógł sprawdzić, 
                czy nie przekroczyłeś miesięcznego limitu dochodu.
              </p>

              <h3 id="unregistered-activity-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Kwestia ubezpieczenia (ZUS)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To największa zaleta działalności nierejestrowanej. <strong>Nie płacisz obowiązkowych składek społecznych (ZUS)</strong> jako przedsiębiorca. 
                Oszczędzasz około <strong>1600-2000 złotych miesięcznie</strong>, które płacą przedsiębiorcy na JDG.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pamiętaj jednak: jeśli świadczysz usługi na podstawie umowy <strong>Umowa zlecenie</strong>, 
                zleceniodawca może być zobowiązany zapłacić składki za Ciebie. Warto to omówić z klientem z góry.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ważne:</strong> bez opłacania <strong>ZUS</strong> nie masz prawa do bezpłatnej opieki medycznej w Polsce 
                (oprócz przypadków nagłych) i nie gromadzisz emerytury.
              </p>

              <h3 id="unregistered-activity-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Sprawozdawczość podatkowa (PIT-36)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dochody z działalności nierejestrowanej nie są opodatkowane miesięcznie. Rozliczasz je tylko raz w roku.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wskazujesz całkowitą kwotę dochodu i swoje wydatki w rocznym zeznaniu PIT-36. 
                Płacisz podatek tylko od zysku netto według ogólnej skali (zwykle 12%).
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Oficjalny portal dla przedsiębiorców z warunkami, limitami i zasadami prowadzenia rejestru.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Oficjalna strona podatkowa z formularzami i instrukcjami dotyczącymi sprawozdawczości.</li>
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Oficjalna strona ubezpieczeń społecznych ze szczegółami dotyczącymi składek.</li>
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
                Rejestracja <strong>JDG</strong> (<em>Jednoosobowa Działalność Gospodarcza</em>) to krok do pełnej niezależności zawodowej. 
                Otrzymujesz numer podatkowy <strong>NIP</strong> (<em>Numer Identyfikacji Podatkowej</em> - numer identyfikacji podatkowej), 
                stajesz się pełnoprawnym kontrahentem i możesz pracować z dowolnymi firmami na świecie.
              </p>

              <h3 id="jdg-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Krok po kroku: algorytm rejestracji przez CEIDG
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Rejestracja biznesu w Polsce jest bezpłatna</strong> i odbywa się online przez system <strong>CEIDG</strong> 
                (<em>Centralna Ewidencja i Informacja o Działalności Gospodarczej</em> - Centralny rejestr i informacja o działalności gospodarczej). 
                Rejestracja odbywa się na portalu <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a>. 
                Będziesz potrzebować <strong>Profil Zaufany</strong> (<em>Profil Zaufany</em> - to bezpłatny podpis elektroniczny dla usług państwowych, 
                który pozwala podpisywać dokumenty online i korzystać ze wszystkich usług państwowych). 
                Możesz utworzyć Profil Zaufany na <a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">gov.pl</a>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wypełniasz formularz <strong>CEIDG-1</strong>, który jednocześnie jest wnioskiem do urzędu skarbowego, 
                urzędu statystycznego i <strong>ZUS</strong>. System automatycznie przydzieli Ci numer <strong>REGON</strong> i <strong>NIP</strong>, 
                jeśli jeszcze ich nie masz.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://aplikacja.ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG (Aplikacja.ceidg.gov.pl)</a> - Jedyny państwowy rejestr do rejestracji, wprowadzania zmian lub zamknięcia biznesu.</p>
              </div>

              <h3 id="jdg-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Wybór kodów działalności (PKD)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Kod <strong>PKD</strong> (<em>Polska Klasyfikacja Działalności</em> - Polska klasyfikacja działalności) określa, 
                czym dokładnie zajmuje się Twój biznes. To obowiązkowy kod, który jest wskazany przy rejestracji JDG. 
                Możesz wybrać jeden główny kod i nieograniczoną liczbę dodatkowych.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Popularne kody PKD dla różnych typów freelancingu:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>62.01.Z</strong> - Działalność związana z oprogramowaniem (dla programistów, deweloperów, specjalistów IT)</li>
                <li><strong>62.02.Z</strong> - Konsulting w zakresie informatyki (dla konsultantów IT, administratorów systemów)</li>
                <li><strong>63.11.Z</strong> - Przetwarzanie danych, hosting i powiązana działalność (dla deweloperów web, DevOps)</li>
                <li><strong>63.12.Z</strong> - Portale internetowe (dla projektantów stron internetowych, marketerów)</li>
                <li><strong>73.11.Z</strong> - Agencje reklamowe (dla marketerów, copywriterów, arbitrażystów)</li>
                <li><strong>74.10.Z</strong> - Działalność w zakresie projektowania (dla projektantów graficznych, projektantów UI/UX)</li>
                <li><strong>74.20.Z</strong> - Działalność w zakresie fotografii (dla fotografów, wideografów)</li>
                <li><strong>74.30.Z</strong> - Działalność w zakresie usług tłumaczeniowych (dla tłumaczy)</li>
                <li><strong>85.59.A</strong> - Inna działalność edukacyjna (dla korepetytorów, nauczycieli online)</li>
                <li><strong>90.03.Z</strong> - Działalność w zakresie twórczości artystycznej (dla artystów, ilustratorów)</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Pełny przewodnik dotyczący wyboru i zmiany kodów PKD 2025</li>
                </ul>
              </div>

              <h3 id="jdg-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Wybór daty rozpoczęcia i miejsce rejestracji
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Możesz wskazać datę rejestracji "dzisiaj" lub przyszłą datę. 
                <strong> Ważne: nie można wskazać daty wstecznej</strong>, jeśli wcześniej nie prowadziłeś działalności nierejestrowanej.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jako adres możesz wskazać własne mieszkanie (jeśli właściciel nie ma nic przeciwko) lub skorzystać z 
                <strong> Wirtualne biuro</strong>. Wirtualne biuro w Krakowie czy Warszawie to legalny sposób na posiadanie prestiżowego adresu biznesowego za 
                <strong> 60-100 złotych miesięcznie</strong>.
              </p>

              <h3 id="jdg-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Rejestracja w ZUS - formularze ZZA i ZUA
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Po złożeniu wniosku w <strong>CEIDG masz 7 dni</strong>, aby złożyć uzupełniające formularze do <strong>ZUS</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZZA</strong> - jeśli rejestrujesz się tylko na ubezpieczenie zdrowotne (na przykład pracujesz jeszcze gdzie indziej na umowę o pracę).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUA</strong> - jeśli rejestrujesz się na pełne ubezpieczenie społeczne (emerytalne, rentowe itp.).
              </p>

              <h3 id="jdg-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Konto bankowe - prywatne czy firmowe?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Zgodnie z prawem, dla JDG nie zawsze jest obowiązkowe posiadanie osobnego konta biznesowego (jeśli nie jesteś płatnikiem VAT). 
                W praktyce jednak większość banków wymaga rozdzielenia środków prywatnych i biznesowych.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Gdzie najlepiej otworzyć konto dla JDG?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla freelancerów na starcie najlepiej pasuje <strong>PKO Bank Polski</strong>. 
                Ten bank oferuje konta dla przedsiębiorców z korzystnymi warunkami. Konto można otworzyć online lub w oddziale banku.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>mBank</strong> również oferuje konta dla przedsiębiorców. 
                Inne popularne banki dla przedsiębiorców: <strong>Santander</strong>, <strong>ING Bank Śląski</strong>, <strong>Alior Bank</strong>. 
                Warto sprawdzić aktualne warunki i wymagania każdego banku, ponieważ mogą się zmieniać.
              </p>

              <h3 id="jdg-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Odpowiedzialność finansowa i majątkowa
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Odpowiedzialność całym majątkiem</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                W przeciwieństwie do <strong>Sp. z o.o.</strong>, przedsiębiorca na <strong>JDG</strong> odpowiada za długi biznesu 
                <strong> całym swoim majątkiem osobistym</strong>. To obejmuje <em>samochód, mieszkanie i środki na kontach prywatnych</em>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Oznacza to, że jeśli nie możesz spłacić długów biznesu (<strong>podatki, ZUS, długi przed klientami</strong>), 
                wierzyciele mogą zająć Twój majątek osobisty.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Jak się chronić</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Istnieje kilka sposobów ochrony majątku. Ubezpieczenie odpowiedzialności zawodowej (OC) jest szczególnie ważne dla IT i marketerów. 
                Rozdzielenie majątku z małżonkiem (intercyza) chroni majątek małżonka przed długami Twojego biznesu. 
                Utworzenie Sp. z o.o. zamiast JDG jest możliwe, ale jest bardziej skomplikowane i droższe.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ważne jest zrozumienie</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Własny biznes to nie tylko dochód, ale także pełne ryzyko Twoim kapitałem. 
                Ważne jest prawidłowe prowadzenie biznesu i przestrzeganie wszystkich obowiązków, aby uniknąć problemów.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Szczegółowo o odpowiedzialności całym majątkiem</li>
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Oficjalny portal dla przedsiębiorców, informacje o ubezpieczeniu odpowiedzialności zawodowej</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Civil Contracts Section */}
          <section id="civil-contracts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Umowy cywilnoprawne (B2C)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli nie chcesz rejestrować działalności gospodarczej ani wstępować do inkubatora, możesz pracować na podstawie jednorazowych umów. 
                W Polsce nazywa się to "Umowy cywilnoprawne". To legalny sposób otrzymywania pieniędzy za konkretny wynik lub czas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ten rozdział opisuje najprostszy sposób otrzymania zapłaty bez tworzenia jakichkolwiek struktur. 
                To klasyka dla freelancerów, którzy pracują z polskimi firmami bezpośrednio.
              </p>

              <h3 id="civil-contracts-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa o dzieło: Specyfika dla zawodów kreatywnych
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To "umowa o wykonanie dzieła" lub umowa na wynik. Uwielbiają ją programiści, projektanci i marketerzy, 
                ponieważ pozwala znacznie oszczędzać na podatkach.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Główna zaleta polega na braku składek do ZUS. Płacisz tylko podatek od dochodu (PIT). 
                Jeśli przekazujesz prawa autorskie do swojego kodu lub tekstu, możesz zastosować 50% kosztów uzyskania przychodu (KUP), 
                co obniża podatek o połowę.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640160093" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kodeks Cywilny (KC)</a> - Kodeks cywilny, artykuły 627-646 regulują Umowa o dzieło.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Oficjalne wyjaśnienie dotyczące legalnego zmniejszenia podatku przy pracy z prawami autorskimi.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa zlecenie: Płatność za proces
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To "umowa zlecenia". Zobowiązujesz się wykonywać określone działania w określonym czasie. 
                Tutaj obciążenie podatkowe jest wyższe, ponieważ jesteś zobowiązany płacić składki na ubezpieczenie emerytalne i zdrowotne.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla studentów do 26 roku życia ta umowa jest "złotą żyłą". 
                Otrzymują pełną kwotę "brutto" na rękę, nie płacąc żadnych podatków i składek.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640160093" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kodeks Cywilny (KC)</a> - Kodeks cywilny, artykuły 734-751 regulują Umowa zlecenie.</li>
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Zasady ubezpieczenia społecznego i które umowy wymagają opłacania składek.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Porównanie "brutto" i "netto" dla freelancera
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ważne jest zrozumienie różnicy przy omawianiu ceny z klientem. 
                Firma zawsze podaje kwotę "brutto" (przed podatkami).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Na przykład, przy Umowa o dzieło otrzymasz na rękę około 88% kwoty. 
                Przy Umowa zlecenie (jeśli nie jesteś studentem) to około 70-75%. 
                Zawsze upewnij się, czy cena obejmuje koszt odliczeń podatkowych.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Oficjalne informacje o kosztach uzyskania przychodu i obliczaniu brutto/netto.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Opodatkowanie dochodów z zagranicy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli mieszkasz w Polsce (rezydent podatkowy - stajesz się nim oficjalnie po 180 dniach pobytu w kraju) 
                i pracujesz dla zleceniodawcy z USA czy innego kraju na podstawie umowy, jesteś zobowiązany samodzielnie zadeklarować ten dochód.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Nie musisz rejestrować firmy, ale raz w roku musisz złożyć deklarację PIT-36. 
                Polska ma umowy o unikaniu podwójnego opodatkowania z wieloma krajami, co pozwala nie płacić podatku dwukrotnie.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Oficjalne informacje o składaniu deklaracji PIT-36.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Umowy o unikaniu podwójnego opodatkowania.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa zlecenie: zasady opodatkowania i składki społeczne
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Umowa zlecenie (umowa zlecenia) - to umowa na świadczenie usług. 
                Pasuje dla konsultantów, tłumaczy, trenerów.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Na podstawie tej umowy nie przekazują się prawa autorskie. 
                Zostajesz właścicielem wyniku pracy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Podatek jest również potrącany u źródła (18%). 
                Mogą być dodatkowe składki ZUS, jeśli umowa jest głównym źródłem dochodu.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Zasady ubezpieczenia społecznego dla Umowa zlecenie.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Porównanie "brutto" i "netto" dla freelancera
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Przy pracy na podstawie umów cywilnoprawnych ważne jest zrozumienie różnicy między brutto a netto.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Brutto - to kwota przed odliczeniem podatku. 
                Netto - to kwota po odliczeniu podatku, którą otrzymujesz na rękę.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli w umowie wskazano brutto, z tej kwoty potrąca się 18% podatku. 
                Jeśli wskazano netto, klient dodaje podatek do tej kwoty.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Lepiej zawsze omówić, jaka kwota jest rozumiana, 
                aby uniknąć nieporozumień.
              </p>

              <h3 id="civil-contracts-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Opodatkowanie dochodów z zagranicy przez te umowy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli pracujesz z klientami z zagranicy na podstawie umów cywilnoprawnych, 
                opodatkowanie zależy od kraju klienta.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla klientów z UE często stosuje się mechanizm Reverse Charge. 
                Podatek płaci klient w swoim kraju, a nie Ty.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Dla klientów spoza UE dochody mogą być zwolnione z polskiego podatku. 
                Ale trzeba je zadeklarować w deklaracji podatkowej.
              </p>
            </div>
          </section>

          {/* Business Incubators Section */}
          <section id="business-incubators" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Freelancing lub nawet praca przez Inkubatory biznesowe
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Praca przez inkubatory biznesowe często jest wspominana jako schemat i ma poważne ryzyka</strong>. 
                Ten rozdział opowiada o modelu, który pozwala freelancerowi pracować, prawnie nie będąc przedsiębiorcą, 
                ale ważne jest zrozumienie wszystkich ryzyk i odpowiedzialności.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Inkubator biznesowy to organizacja, która udostępnia Ci swoją osobowość prawną do wystawiania rachunków klientom. 
                Stajesz się "podmiotem" wewnątrz inkubatora, a on występuje jako pośrednik między Tobą a Twoim zleceniodawcą. 
                To szczególnie popularne wśród osób, które chcą delegować biurokrację, ale ma ważne niuanse.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Główne ryzyko - brak opłacania ZUS</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Gdy pracujesz przez inkubator, nie płacisz <strong>ZUS</strong> jako przedsiębiorca, ponieważ prawnie nie jesteś przedsiębiorcą. 
                Oznacza to, że <strong>nie gromadzisz emerytury</strong> i <strong>nie masz prawa do bezpłatnej opieki medycznej</strong> w Polsce 
                (oprócz przypadków nagłych). Jeśli planujesz długoterminowo pracować w Polsce, może to stać się poważnym problemem.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Odpowiedzialność i ryzyka</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pracując przez inkubator, jesteś zależny od jego stabilności finansowej. 
                Jeśli inkubator ma problemy z urzędem skarbowym lub zamyka się, może to wpłynąć na Twoje dochody. 
                Nie masz również bezpośredniej kontroli nad swoimi finansami. 
                Pieniądze najpierw trafiają na konto inkubatora, a dopiero potem są wypłacane Tobie.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ryzyka podatkowe</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Urząd skarbowy może sprawdzić, czy Twoja praca przez inkubator nie jest <em>fikcyjna</em>. 
                Jeśli faktycznie pracujesz jako przedsiębiorca (samodzielnie szukasz klientów, kontrolujesz proces pracy, 
                pracujesz na swoim sprzęcie), ale formalnie pracujesz przez inkubator, może to zostać uznane jako próba 
                uniknięcia opłacania ZUS i podatków. To grozi <strong>karami i obowiązkiem zapłacenia wszystkich nieopłaconych składek</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Kiedy to może być uzasadnione</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Praca przez inkubator może mieć sens tylko dla <strong>krótkoterminowych projektów</strong> (do 3-6 miesięcy), 
                gdy jeszcze nie jesteś pewien, czy chcesz długoterminowo pracować w Polsce. 
                Może też pasować dla tych, którzy już mają inne źródło ubezpieczenia 
                (na przykład pracują na umowę o pracę i mają ZUS przez pracodawcę).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Alternatywa - JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla większości freelancerów <strong>JDG jest bezpieczniejszą i bardziej przejrzystą opcją</strong>. 
                Masz pełną kontrolę nad swoimi finansami, gromadzisz emeryturę, masz prawo do opieki medycznej 
                i nie jesteś zależny od strony trzeciej. Chociaż JDG wymaga opłacania ZUS, 
                to inwestycja w Twoją przyszłość i legalność Twojej działalności.
              </p>

              <h3 id="business-incubators-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Zasada działania modelu "Freelance as a Service"
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Podpisujesz umowę z inkubatorem (zwykle cywilnoprawną). 
                Gdy wykonujesz pracę dla klienta, inkubator wystawia mu rachunek od swojego imienia.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pieniądze trafiają na konto inkubatora, oni potrącają podatki i swoją prowizję, 
                a resztę wypłacają Tobie jako wynagrodzenie. Otrzymujesz "czyste" pieniądze bez konieczności rejestracji JDG w CEIDG.
              </p>
              <h3 id="business-incubators-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Zalety (z ostrożnością)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Teoretycznie może to być wygodna opcja, jeśli nie znasz języka polskiego na wystarczającym poziomie 
                do komunikacji z urzędem skarbowym. Inkubator przejmuje księgowość, sprawozdawczość i wsparcie prawne.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jednak <strong>ważne jest zrozumienie</strong>, że jesteś zależny od inkubatora i jego kompetencji. 
                Jeśli inkubator popełnia błędy w księgowości lub nie płaci podatków na czas, 
                <strong> odpowiedzialność może spaść na Ciebie</strong>. 
                Nie masz również bezpośredniego dostępu do swoich finansów - wszystko przechodzi przez inkubatora.
              </p>
              <h3 id="business-incubators-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Analiza kosztów - abonament przeciwko podatkom
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Zamiast skomplikowanych obliczeń ZUS, płacisz stałą miesięczną kwotę za mentoring i administrację. 
                W 2026 roku to zwykle wynosi od <strong>300 do 600 złotych miesięcznie</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ten model może wydawać się bardziej opłacalny niż JDG na początkowych etapach, 
                ponieważ Twoje koszty nie zależą od obrotu. Płacisz za usługę tylko wtedy, gdy masz aktywne kontrakty.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jednak ważne jest uwzględnienie, że nie gromadzisz emerytury i nie masz prawa do bezpłatnej opieki medycznej. 
                Jesteś również zależny od stabilności inkubatora i jego stanu finansowego. 
                Jeśli inkubator ma problemy, może to wpłynąć na Twoje dochody i dostęp do środków.
              </p>
              <h3 id="business-incubators-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Odpowiedzialność w inkubatorach biznesowych
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pracując przez inkubator, nie ponosisz odpowiedzialności prawnej za działalność inkubatora. 
                Jednak jesteś zależny od jego stabilności finansowej i prawidłowości prowadzenia spraw. 
                Jeśli inkubator popełnia błędy w księgowości lub nie płaci podatków na czas, 
                może to wpłynąć na Twoje dochody i reputację.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ważne jest zrozumienie, że nie masz bezpośredniej kontroli nad swoimi finansami. 
                Pieniądze najpierw trafiają na konto inkubatora, a dopiero potem są wypłacane Tobie. 
                Jeśli inkubator ma problemy finansowe lub zamyka się, możesz stracić dostęp do swoich środków.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Urząd skarbowy może sprawdzić, czy Twoja praca przez inkubator nie jest fikcyjna. 
                Jeśli faktycznie pracujesz jako przedsiębiorca, ale formalnie pracujesz przez inkubator, 
                może to zostać uznane jako próba uniknięcia opłacania <strong>ZUS</strong> i podatków. 
                To grozi karami i obowiązkiem zapłacenia wszystkich nieopłaconych składek.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                W przeciwieństwie do <strong>JDG</strong>, gdzie masz pełną kontrolę nad swoimi finansami i odpowiedzialnością, 
                pracując przez inkubator, delegujesz tę kontrolę stronie trzeciej. 
                To tworzy dodatkowe ryzyka, które ważne jest uwzględnić przy wyborze modelu pracy.
              </p>

              <h3 id="business-incubators-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ograniczenia modelu
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Inkubatory nie pasują dla wszystkich. Są idealne dla IT, projektowania i marketingu. 
                Jednak raczej nie pasują do handlu towarami, gdzie potrzebne są zapasy magazynowe i licencje na import.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jesteś również ograniczony wewnętrznymi zasadami inkubatora dotyczącymi wydatków. 
                Na przykład, odpisać wydatki na paliwo lub wynajem biura przez inkubator jest trudniejsze niż we własnym <strong>JDG</strong>.
              </p>

              <h3 id="business-incubators-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Zalety dla osób bez znajomości języka i księgowości
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Inkubatory biznesowe idealnie pasują dla osób, które nie znają języka polskiego. 
                Cała komunikacja z urzędami i urzędem skarbowym odbywa się przez inkubator.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Nie trzeba rozumieć polskiego prawodawstwa ani prowadzić księgowości. 
                Inkubator robi wszystko za Ciebie.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wsparcie często jest dostępne w języku angielskim. 
                To znacznie ułatwia rozpoczęcie pracy w Polsce.
              </p>

              <h3 id="business-incubators-8" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Analiza kosztów - miesięczna abonament przeciwko podatkom JDG
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Inkubatory biznesowe pobierają miesięczną opłatę (zwykle 200-500 zł) plus procent od dochodu. 
                To może być droższe niż samodzielna rejestracja JDG.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ale jeśli uwzględnić czas na prowadzenie księgowości i komunikację z urzędami, 
                inkubator może być bardziej opłacalny dla zajętych freelancerów.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla początkujących inkubator często jest lepszym wyborem, 
                ponieważ pozwala skupić się na pracy, a nie na formalnościach.
              </p>

              <h3 id="business-incubators-10" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ograniczenia w rodzajach działalności w ramach inkubatora
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Inkubatory biznesowe często mają ograniczenia dotyczące rodzajów działalności. 
                Zwykle pracują z IT, projektowaniem, marketingiem i konsultingiem.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Jeśli Twoja działalność nie pasuje do formatu inkubatora, 
                lepiej zarejestrować <strong>JDG</strong> samodzielnie.
              </p>
            </div>
          </section>

          {/* Laws and Regulations Section */}
          <section id="laws-regulations" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prawa, normy i regulacje państwowe
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pracować "na biało" w Polsce to nie tylko płacić podatki, ale także znać swoje prawa. 
                Polskie prawodawstwo wyraźnie rozróżnia, gdzie kończy się prywatna pomoc, a zaczyna biznes.
              </p>

              <h3 id="laws-regulations-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ustawa o przedsiębiorcach
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To "Konstytucja" dla każdego freelancera z JDG. Ustawa wyraźnie określa, 
                że działalność przedsiębiorcza to coś, co robisz systematycznie, we własnym imieniu i w celu osiągnięcia zysku.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Główna zasada: państwo ma wspierać przedsiębiorcę. Ustawa wprowadza zasadę "co nie jest zabronione, jest dozwolone". 
                Chroni Cię również przed bezpodstawnymi kontrolami.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180000646" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ustawa - Prawo przedsiębiorców</a> - Podstawowa ustawa o przedsiębiorcach.</p>
              </div>

              <h3 id="laws-regulations-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ordynacja podatkowa (Kodeks podatkowy)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To zbiór zasad dotyczących tego, jak naliczane i płacone są podatki. 
                Dla freelancera ważne jest poznanie pojęcia "rezydencji podatkowej".
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli przebywasz w Polsce ponad 183 dni w roku lub tutaj znajduje się Twój "centrum życiowych interesów" 
                (rodzina, dom), stajesz się polskim rezydentem podatkowym. 
                Oznacza to, że musisz rozliczać się przed polskim urzędem skarbowym (Urząd Skarbowy) 
                ze wszystkich swoich dochodów, nawet jeśli zostały uzyskane na Upwork lub od zleceniodawców z zagranicy.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19971370926" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ordynacja podatkowa</a> - Kodeks podatkowy z zasadami relacji między Tobą a urzędem skarbowym, oficjalny tekst i aktualizacje w systemie ISAP.</p>
              </div>

              <h3 id="laws-regulations-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Prawa freelancera podczas kontroli (KAS)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Urząd skarbowy (<strong>Krajowa Administracja Skarbowa</strong> lub <strong>KAS</strong>) ma prawo sprawdzić Twoją działalność. 
                Jednak zgodnie z prawem muszą Cię uprzedzić o kontroli z wyprzedzeniem (zwykle <strong>7 dni</strong>).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Freelancer ma prawo być obecny podczas kontroli i udzielać wyjaśnień. 
                Ważne jest przechowywanie wszystkich rachunków i faktur przez <strong>5 lat</strong>, 
                ponieważ taki jest termin przedawnienia dla kwestii podatkowych w Polsce.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Informacje o prawach podczas kontroli KAS i terminach przechowywania dokumentów.</p>
              </div>

              <h3 id="laws-regulations-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ochrona danych osobowych (RODO)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli zbierasz adresy e-mail do newslettera, prowadzisz bazę klientów lub masz stronę z formularzem kontaktowym, 
                podlegasz pod <strong>RODO</strong> (ogólnoeuropejskie rozporządzenie <strong>GDPR</strong>).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jesteś zobowiązany poinformować klienta, jak wykorzystujesz jego dane. 
                Dla zwykłego freelancera oznacza to posiadanie <strong>"Polityki prywatności"</strong> na stronie 
                i ostrożne obchodzenie się z dokumentami zleceniodawców.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm">UODO (Urząd Ochrony Danych Osobowych) - Oficjalna strona dotycząca RODO i porad dotyczących ochrony danych klientów.</p>
              </div>

              <h3 id="laws-regulations-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Oficjalne wyjaśnienia dotyczące pracy zdalnej
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                W latach 2023-2026 polski rząd znacznie zaktualizował Kodeks pracy i normy dotyczące pracy zdalnej. 
                Chociaż freelancerzy nie są pracownikami najemnymi, te normy wpływają na to, 
                jak formalizujesz umowy z dużymi polskimi firmami.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pracodawcy mają teraz jasne instrukcje, jak legalnie opłacać usługi zdalnych wykonawców, 
                którzy pracują z domu lub coworkingów.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gov.pl</a> - Oficjalne wyjaśnienia dotyczące pracy zdalnej i Kodeksu pracy.</p>
              </div>
            </div>
          </section>

          {/* Taxation Systems Section */}
          <section id="taxation-systems" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Szczegółowa analiza systemów podatkowych
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wybór systemu podatkowego to główna decyzja, która wpłynie na to, ile pieniędzy zostanie w Twojej kieszeni. 
                W 2026 roku w Polsce istnieją trzy główne opcje dla JDG.
              </p>

              <h3 id="taxation-systems-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Skala podatkowa (Ogólny system 12% / 32%)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To podstawowy system. Płacisz <strong>12%</strong> od zysku netto, jeśli zarabiasz do <strong>120 000 złotych rocznie</strong>. 
                Jeśli więcej, stawka wzrasta do <strong>32%</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Główna zaleta to <strong>Kwota wolna od podatku</strong> (kwota wolna od podatku). 
                Nie płacisz podatku dochodowego od pierwszych <strong>30 000 złotych</strong> dochodu. 
                Możesz również odliczać wydatki na biznes (<em>laptop, oprogramowanie, wynajem</em>) od dochodu przed obliczeniem podatku.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm">Podatki.gov.pl: Wybór formy opodatkowania - Przewodnik od ministerstwa z porównaniem Ryczałt, Skala i Liniowy.</p>
              </div>

              <h3 id="taxation-systems-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Podatek liniowy (Podatek liniowy 19%)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Tutaj stawka jest zawsze stała na poziomie <strong>19%</strong>, niezależnie od tego, 
                czy zarobiłeś 50 tysięcy czy 500 tysięcy złotych. Możesz również odliczać wydatki.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ten system jest opłacalny tylko wtedy, gdy Twoje dochody stale przekraczają <strong>120-150 tysięcy złotych rocznie</strong>. 
                Nie ma tutaj "kwoty wolnej od podatku", więc dla małych dochodów jest niekorzystny.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Informacje o podatku liniowym 19%.</p>
              </div>

              <h3 id="taxation-systems-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ryczałt (Podatek od obrotu)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Najpopularniejszy system wśród freelancerów</strong>. 
                Płacisz procent od całej kwoty, którą otrzymałeś od klienta. 
                Wydatki (wynajem, sprzęt) nie mogą być uwzględnione.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Stawki dla freelancingu w 2026 roku</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Stawka <strong>12%</strong> obowiązuje dla <em>specjalistów IT i programistów</em>. 
                Stawka <strong>14%</strong> obowiązuje dla <em>architektów i inżynierów</em>. 
                Stawka <strong>8,5%</strong> obowiązuje dla <em>marketingu, copywritingu i większości usług serwisowych</em>. 
                Stawka <strong>15%</strong> obowiązuje dla <em>agencji reklamowych i niektórych rodzajów pośrednictwa</em>.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm">Kalkulator B2B 2026 - Kalkulator dochodu do porównania różnych systemów podatkowych.</p>
              </div>

              <h3 id="taxation-systems-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ryczałt: szczegółowa analiza stawek
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ryczałt ma różne stawki dla różnych zawodów:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>8,5%</strong> - dla wolnych zawodów (<em>lekarze, prawnicy, architekci</em>)</li>
                <li><strong>12%</strong> - dla większości usług (<em>IT, projektowanie, marketing</em>)</li>
                <li><strong>15%</strong> - dla niektórych rodzajów działalności</li>
                <li><strong>17%</strong> - dla dochodu powyżej <strong>200 000 zł rocznie</strong></li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Stawka zależy od kodu <strong>PKD</strong> i rodzaju działalności. 
                <strong>Ważne jest prawidłowe wybranie kodu, aby uzyskać najniższą stawkę</strong>.
              </p>

              <h3 id="taxation-systems-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Kryteria wyboru najbardziej opłacalnego systemu w 2026 roku
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla większości freelancerów <strong>ryczałt (12%)</strong> - najbardziej opłacalny wybór. 
                Jest prosty i nie wymaga prowadzenia skomplikowanego rozliczenia wydatków.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Skala podatkowa</strong> jest bardziej opłacalna, jeśli wydatki stanowią więcej niż <strong>30% dochodu</strong>. 
                Ale trzeba zbierać i przechowywać wszystkie paragony.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Podatek liniowy</strong> jest bardziej opłacalny dla bardzo wysokich dochodów (powyżej <strong>300 000 zł</strong>). 
                Ale dla większości freelancerów nie pasuje.
              </p>
            </div>
          </section>

          {/* ZUS Insurance Section */}
          <section id="zus-insurance" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ubezpieczenia społeczne i ZUS
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUS</strong> to podstawa systemu ubezpieczeń społecznych w Polsce. 
                To system, w którym płacisz państwu co miesiąc, a ono gwarantuje Ci opiekę medyczną, emeryturę i wsparcie społeczne. 
                W Polsce to podstawa umowy społecznej między obywatelem a państwem.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Czym jest ZUS i dlaczego jest ważny w Europie</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUS</strong> (Zakład Ubezpieczeń Społecznych) to państwowa firma ubezpieczeniowa, 
                która zbiera składki od pracowników i przedsiębiorców. Te pieniądze idą na trzy główne rzeczy: 
                <strong> ubezpieczenie emerytalne</strong> (gdy przejdziesz na emeryturę), 
                <strong> ubezpieczenie zdrowotne</strong> (bezpłatna medycyna) oraz 
                <strong> ubezpieczenie na wypadek niezdolności do pracy i choroby</strong> (zasiłki chorobowe, pomoc przy utracie zdolności do pracy).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                W Europie ten system działa od dziesięcioleci. Gwarantuje, że nawet jeśli stracisz pracę lub zachorujesz, 
                państwo Cię nie zostawi bez pomocy. Polska rozwinęła się dzięki reformom właśnie dlatego, 
                że <strong>ZUS</strong> jest jedną z głównych sił napędowych kraju. 
                Gdy płacisz składki, inwestujesz w stabilność państwa, w którym żyjesz, a państwo inwestuje w Ciebie.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ile płacić i za co</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jako przedsiębiorca na JDG płacisz składki co miesiąc, nawet jeśli nic nie zarobiłeś. 
                W 2026 roku pełny <strong>ZUS</strong> wynosi około <strong>1600-2000 złotych miesięcznie</strong>. 
                Ta kwota składa się z kilku części: ubezpieczenie emerytalne (około 19% od podstawy), 
                ubezpieczenie zdrowotne (9% od podstawy), ubezpieczenie na wypadek niezdolności do pracy i wypadku (około 1,5%).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Jak rośnie suma składek i dlaczego</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Suma składek <strong>ZUS</strong> zależy od minimalnej pensji w Polsce. 
                Co roku rząd podnosi minimalną pensję (w 2026 roku to około 4300-4500 złotych brutto), 
                i od tej kwoty obliczane są składki. Im wyższa minimalna pensja, tym więcej płacisz. 
                Ale to również oznacza, że Twoja przyszła emerytura będzie wyższa, a opieka medyczna lepsza.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Co daje ubezpieczenie zdrowotne</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Gdy płacisz <strong>Składka zdrowotna</strong> (składka zdrowotna), otrzymujesz dostęp do 
                <strong> bezpłatnej medycyny</strong> w Polsce. To obejmuje: bezpłatne wizyty u lekarza rodzinnego, 
                bezpłatne konsultacje specjalistów (ale często są kolejki, więc można umówić się na płatną wizytę szybciej), 
                bezpłatne analizy i badania na skierowanie od lekarza, bezpłatną hospitalizację i operacje, 
                bezpłatne leki dla dzieci do 18 roku życia oraz zniżki na leki dla dorosłych.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Dla rodziny i dzieci</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli płacisz <strong>ZUS</strong>, Twoja rodzina (małżonek i dzieci) również ma prawo do bezpłatnej medycyny. 
                Dzieci do 18 roku życia otrzymują bezpłatne leki, bezpłatne szczepienia i badania profilaktyczne. 
                Twój małżonek może korzystać z medycyny, jeśli nie pracuje lub nie ma własnego ubezpieczenia.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Co jest bezpłatne, a co płatne</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Bezpłatnie:</strong> wizyty u lekarza rodzinnego, konsultacje specjalistów na skierowanie, 
                analizy i badania na skierowanie, hospitalizacja, operacje, leki dla dzieci do 18 roku życia, 
                nagła pomoc medyczna. <strong>Płatnie:</strong> konsultacje specjalistów bez skierowania (prywatne kliniki), 
                niektóre procedury kosmetyczne, stomatologia (częściowo, podstawowe usługi mogą być bezpłatne), 
                leki dla dorosłych (zniżka 30-50%), szybkie badania diagnostyczne bez kolejki.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Emerytury - od początku do końca</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Rozmiar emerytury zależy od tego, ile lat płaciłeś składki i jaki był Twój dochód. 
                Minimalna emerytura w Polsce w 2026 roku wynosi około <strong>1200-1400 złotych</strong>. 
                Średnia emerytura około <strong>2500-3000 złotych</strong>. 
                Maksymalna emerytura może osiągnąć <strong>5000-6000 złotych</strong> lub więcej, 
                jeśli płaciłeś wysokie składki przez wiele lat. 
                Aby otrzymać pełną emeryturę, trzeba płacić składki <strong>nie mniej niż 20-25 lat</strong> (dla kobiet) 
                lub <strong>25-30 lat</strong> (dla mężczyzn).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUS</strong> to państwowa firma ubezpieczeniowa. 
                Nawet jeśli nic nie zarobiłeś w miesiącu, jako przedsiębiorca jesteś zobowiązany płacić składki. 
                Ale dla początkujących są ulgi.
              </p>

              <h3 id="zus-insurance-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ulga "Ulga na start"
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Przez <strong>pierwsze 6 pełnych miesięcy</strong> po rejestracji JDG jesteś zwolniony z opłacania składek społecznych. 
                Płacisz tylko ubezpieczenie zdrowotne (<strong>Składka zdrowotna</strong>). 
                To pozwala znacznie zaoszczędzić na starcie, podczas gdy szukasz klientów.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm">ZUS: Ulga na start - Oficjalne zasady ulg dla pierwszych 6 miesięcy biznesu.</p>
              </div>

              <h3 id="zus-insurance-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Mały ZUS Plus
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Po zakończeniu "Ulga na start" możesz przejść na okres preferencyjny na <strong>24 miesiące</strong>. 
                Płacisz składki obliczone od obniżonej podstawy (od minimalnej pensji). 
                To wciąż znacznie mniej niż pełny ZUS, który płacą doświadczeni biznesmeni.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Informacje o Mały ZUS Plus i okresach preferencyjnych.</p>
              </div>

              <h3 id="zus-insurance-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Standardowe składki i "Chorobowe"
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pełny <strong>ZUS</strong> w 2026 roku to poważna suma (około <strong>1600-2000 złotych</strong> w zależności od obliczeń). 
                Możesz również dobrowolnie płacić składkę na wypadek choroby (<strong>Chorobowe</strong>). 
                To daje prawo do płatnego zwolnienia lekarskiego, co jest ważne dla freelancera, który pracuje na własny rachunek.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Informacje o standardowych składkach i dobrowolnym ubezpieczeniu Chorobowe.</p>
              </div>
            </div>
          </section>

          {/* VAT Section */}
          <section id="vat" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              VAT w życiu freelancera
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>VAT</strong> to podatek od wartości dodanej. Większość freelancerów początkowo próbuje go unikać, 
                ale czasami staje się obowiązkowy.
              </p>

              <h3 id="vat-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Limit 200 000 złotych
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jesteś zwolniony z <strong>VAT</strong>, dopóki Twój roczny obrót nie przekroczy <strong>200 000 złotych</strong>. 
                Gdy tylko zbliżasz się do tej kwoty, jesteś zobowiązany zarejestrować się jako płatnik VAT (formularz <strong>VAT-R</strong>).
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Informacje o limicie 200 000 złotych i rejestracji VAT-R.</p>
              </div>

              <h3 id="vat-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Rejestracja VAT-UE
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli planujesz pracować z klientami z innych krajów UE (na przykład wykonywać zlecenia dla firmy z Niemiec), 
                musisz uzyskać numer <strong>VAT-UE</strong>. To pozwala wystawiać rachunki bez VAT, 
                ponieważ podatek płaci zleceniodawca w swoim kraju (<strong>Reverse Charge</strong>).
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Informacje o rejestracji VAT-UE i mechanizmie Reverse Charge.</p>
              </div>
            </div>
          </section>

          {/* Accounting and Finance Section */}
          <section id="accounting-finance" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Księgowość i higiena finansowa
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ten rozdział pomoże Ci zorganizować codzienną rutynę freelancera tak, 
                aby urząd skarbowy nie miał zbędnych pytań. Przechodzimy do praktycznego zarządzania finansami i automatyzacji procesów.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Prowadzenie biznesu w Polsce wymaga dyscypliny w dokumentach. 
                Każdy wydatek musi być potwierdzony fakturą, a każdy dochód musi być zarejestrowany w odpowiednich rejestrach.
              </p>

              <h3 id="accounting-finance-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Prowadzenie KPiR (Księga przychodów i rozchodów)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli wybrałeś ogólny system lub podatek liniowy, Twój główny dokument to <strong>KPiR</strong>. 
                To szczegółowy dziennik, w którym zapisujesz każdy zarobiony złoty i każdy wydatek na biznes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla tych, którzy wybrali <strong>Ryczałt</strong>, wszystko jest prostsze. 
                Prowadzisz tylko rejestr dochodów (<strong>Ewidencja przychodów</strong>). 
                Wydatki Cię nie interesują, ponieważ nie wpływają na rozmiar podatku.
              </p>

              <h3 id="accounting-finance-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                System KSeF w 2026 roku
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                W <strong>2026 roku</strong> w Polsce staje się obowiązkowy Krajowy System e-Faktur (<strong>KSeF</strong>). 
                To oznacza, że nie będziesz już mógł po prostu wysłać pliku PDF klientowi.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Faktura musi być wygenerowana w formacie państwowym przez specjalną platformę. 
                To pozwala urzędowi skarbowemu widzieć wszystkie transakcje w czasie rzeczywistym. 
                Dla freelancera oznacza to mniej papierkowej roboty, ale wymaga użycia nowoczesnego oprogramowania.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm">KSeF: Oficjalne informacje - Wszystko o obowiązkowych fakturach elektronicznych.</p>
              </div>

              <h3 id="accounting-finance-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Wydatki, które zmniejszają podatek
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli Twój system podatkowy pozwala uwzględniać wydatki, możesz znacznie zaoszczędzić. 
                Do wydatków można zaliczyć laptop, monitor, peryferia, wynajem biura lub część wydatków na mieszkanie 
                (jeśli tam jest zarejestrowana firma), szkolenia zawodowe i kursy, telefon i internet.
              </p>

              <h3 id="accounting-finance-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Gdzie szukać księgowego?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Freelancerowi w Polsce nie jest koniecznie potrzebny księgowy w zespole. 
                Większość wybiera <strong>Biuro rachunkowe</strong>. Koszt usług dla JDG wynosi <strong>200-450 złotych miesięcznie</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Alternatywą jest księgowość online (na przykład iFirma lub wFirma). 
                To tańsze, a Ty sam wprowadzasz dane, a system generuje deklaracje.
              </p>

              <h3 id="accounting-finance-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Fakturowanie elektroniczne i system KSeF w 2026 roku
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                KSeF (Krajowy System e-Faktur) - to krajowy system elektronicznych faktur. 
                Od 2026 roku staje się obowiązkowy dla wielu przedsiębiorców.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                System automatycznie wysyła faktury do urzędu skarbowego. 
                Nie trzeba osobno składać ich do systemu.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Większość programów księgowych (w tym inFakt) jest zintegrowana z KSeF. 
                Faktury automatycznie wysyłane są przez system.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Do pracy z KSeF potrzebna jest rejestracja w systemie i konfiguracja oprogramowania. 
                Księgowy może pomóc w konfiguracji.
              </p>

              <h3 id="accounting-finance-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Wydatki, które zmniejszają podatek - wynajem, sprzęt, szkolenia, auto
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Przy skala podatkowa lub podatek liniowy można uwzględniać wydatki, które zmniejszają podatek. 
                To obejmuje wynajem biura, zakup sprzętu, szkolenia, wydatki na auto.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ważne jest przechowywanie wszystkich paragonów i faktur na wydatki. 
                Bez dokumentów wydatków nie można uwzględnić.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wydatki na sprzęt można uwzględnić od razu lub amortyzować przez kilka lat. 
                Wydatki na szkolenia są uwzględniane, jeśli są związane z działalnością.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wydatki na auto są uwzględniane częściowo, w zależności od tego, 
                ile jest używane do biznesu, a ile - do potrzeb osobistych.
              </p>

              <h3 id="accounting-finance-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Profesjonalna pomoc - Biuro rachunkowe przeciwko usługom online
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Biuro rachunkowe (biuro księgowe) - to tradycyjny sposób prowadzenia księgowości. 
                Spotykasz się z księgowym osobiście, on prowadzi wszystkie dokumenty.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Usługi online (jak inFakt) pozwalają prowadzić księgowość samodzielnie z wsparciem księgowego. 
                To wygodniejsze i często tańsze.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla większości freelancerów usługi online lepiej pasują. 
                Pozwalają kontrolować finanse i szybko otrzymywać konsultacje.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Tradycyjne biuro lepsze dla skomplikowanych przypadków lub jeśli w ogóle nie chcesz zajmować się księgowością. 
                Ale to droższe.
              </p>
            </div>
          </section>

          {/* Technical and Legal Aspects Section */}
          <section id="technical-legal" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dodatkowe aspekty techniczne i prawne
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Nowoczesny freelancing to narzędzia cyfrowe. Bez nich interakcja z polskim państwem będzie powolna i skomplikowana.
              </p>

              <h3 id="technical-legal-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Profil Zaufany i mObywatel
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To Twoje cyfrowe klucze. Profil Zaufany pozwala podpisywać dokumenty państwowe, 
                składać deklaracje i zmieniać dane w rejestrze CEIDG online.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Aplikacja mObywatel to Twój paszport i prawo jazdy w telefonie. 
                Jest również zintegrowana z usługami biznesowymi, co pozwala szybko potwierdzać tożsamość 
                przy otwieraniu kont bankowych.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm">mObywatel.gov.pl - Jak działa główna aplikacja cyfrowa Polski.</p>
              </div>

              <h3 id="technical-legal-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Podpis elektroniczny (Podpis kwalifikowany)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla niektórych skomplikowanych kontraktów (szczególnie międzynarodowych) zwykłego Profil Zaufany może być niewystarczające. 
                Podpis kwalifikowany ma taką samą siłę prawną jak ręczny. To płatna usługa, 
                ale jest niezastąpiona dla freelancerów, którzy pracują z dużymi korporacjami.
              </p>

              <h3 id="technical-legal-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Praca z zagranicznymi platformami (Upwork, Fiverr)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli otrzymujesz dochód przez platformy pośredniczące, pamiętaj o kontroli walutowej. 
                Musisz przeliczać otrzymane USD lub EUR na polskie złote według kursu Narodowego Banku Polskiego (NBP) 
                na dzień poprzedzający dzień otrzymania płatności.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm">NBP: Tabela kursów walut - Do prawidłowego obliczenia podatków z dochodów zagranicznych.</p>
              </div>
            </div>
          </section>

          {/* Conclusions Section */}
          <section id="conclusions" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wnioski - strategia udanego freelancingu w Polsce
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Freelancing w Polsce w 2026 roku to przejrzysty i przewidywalny system. 
                Najważniejsze to nie bać się legalizacji i wybrać właściwą formę opodatkowania.
              </p>

              <h3 id="conclusions-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Twój checklist na start
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>1. Uzyskać numer PESEL i sprawdzić status legalności</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pierwszy krok to upewnić się, że legalnie przebywasz w Polsce. 
                Numer PESEL i adres zamieszkania dają prawo do prowadzenia biznesu.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>2. Utworzyć Profil Zaufany</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Profil Zaufany to Twój cyfrowy klucz do wszystkich usług państwowych. 
                Bez niego nie można zarejestrować biznesu online.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>3. Wybrać formę - Działalność nierejestrowana czy JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wybierz formę działalności w zależności od Twojego dochodu. 
                Działalność nierejestrowana pasuje, jeśli dochód do 3500-3600 zł miesięcznie. 
                JDG pasuje, jeśli dochód większy lub chcesz pełny status przedsiębiorcy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>4. Dobrać kody PKD i stawkę podatku (Ryczałt lub Skala)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Prawidłowy wybór kodu PKD i systemu opodatkowania może zaoszczędzić tysiące złotych. 
                Użyj kalkulatorów lub skontaktuj się z księgowym.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>5. Zarejestrować się i zacząć wystawiać pierwsze faktury</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Po rejestracji możesz zacząć pracować i wystawiać faktury. 
                Nie zapomnij zarejestrować się w ZUS w ciągu 7 dni po otrzymaniu NIP.
              </p>

              <h3 id="conclusions-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Strategia udanego freelancingu
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Planowanie</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Planuj swoje finanse z wyprzedzeniem. Uwzględnij wszystkie wydatki, takie jak podatki, ZUS, księgowość. 
                To pomoże uniknąć nieoczekiwanych problemów.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wybór właściwego systemu</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wybór właściwego systemu opodatkowania jest krytycznie ważny. 
                Użyj kalkulatorów lub skontaktuj się z księgowym po konsultację.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Prowadzenie rozliczeń</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Prowadź rozliczenia od pierwszego dnia. 
                To pomoże uniknąć problemów podczas kontroli i prawidłowo obliczyć podatki.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Profesjonalna pomoc</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Nie bój się zwracać do profesjonalnej pomocy. 
                Księgowy lub konsultant może zaoszczędzić Ci dużo czasu i pieniędzy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Przestrzeganie praw</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Przestrzegaj wszystkich praw i zasad. 
                To pomoże uniknąć kar i problemów z urzędami.
              </p>
            </div>
          </section>

          {/* Employment vs Self-Employed Section */}
          <section id="employment-vs-selfemployed" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Samozatrudnienie vs Umowa o pracę - co jest korzystniejsze?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To kluczowe pytanie dla wielu freelancerów. Źródła rządowe często podkreślają różnicę w "pakiecie społecznym". 
                Ważne jest zrozumienie wszystkich zalet i wad obu opcji.
              </p>

              <h3 id="employment-vs-selfemployed-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Urlopy i zwolnienia lekarskie
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Na JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Na JDG nie masz płatnego urlopu (20-26 dni), jak na umowie o pracę. 
                Zarabiasz tylko wtedy, gdy pracujesz. Jeśli nie pracujesz, nie otrzymujesz pieniędzy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Możesz wziąć urlop, ale będzie bezpłatny. Nie otrzymasz zapłaty za dni, gdy nie pracujesz.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Na Umowa o pracę</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Na umowie o pracę masz prawo do płatnego urlopu (20-26 dni rocznie). 
                Masz również prawo do płatnego zwolnienia lekarskiego.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Oznacza to, że nawet gdy nie pracujesz z powodu choroby lub urlopu, nadal otrzymujesz pensję.
              </p>

              <h3 id="employment-vs-selfemployed-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Stabilność
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Rozwiązanie umowy o pracę</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Rozwiązanie umowy o pracę wymaga czasu (od 2 tygodni do 3 miesięcy w zależności od stażu). 
                Pracodawca nie może po prostu Cię zwolnić bez powodu.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli pracodawca chce Cię zwolnić, musi przestrzegać procedury i zapłacić odprawę.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Rozwiązanie umowy B2B</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Umowa B2B może być rozwiązana natychmiast, jeśli jest to zapisane w umowie. 
                Zwykle umowy mają okres wypowiedzenia (na przykład 14 dni), ale to zależy od warunków umowy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Oznacza to, że klient może zakończyć współpracę bez dodatkowych kosztów, jeśli jest to przewidziane w umowie.
              </p>

              <h3 id="employment-vs-selfemployed-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Pieniądze na rękę
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Główny argument za samozatrudnieniem</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Główny argument za samozatrudnieniem to znacznie wyższa kwota "netto" przy tych samych kosztach pracodawcy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Przykład obliczenia</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli pracodawca jest gotowy wydać 10 000 zł miesięcznie.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Na Umowa o pracę</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Koszty pracodawcy wynoszą 10 000 zł (brutto). Twój dochód netto wynosi około 7 000 zł (po podatkach i ZUS).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Na JDG (Ryczałt 12%)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Koszty pracodawcy wynoszą 10 000 zł (brutto). Twój dochód netto wynosi około 8 800 zł (po podatku 12%).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Różnica wynosi około 1 800 zł miesięcznie lub 21 600 zł rocznie.
              </p>
            </div>
          </section>

          {/* Legal Liability Section */}
          <section id="legal-liability" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Odpowiedzialność prawna freelancera - ryzyka własnym majątkiem
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To rozdział, który często jest pomijany, ale jest krytycznie ważny dla bezpieczeństwa. 
                Zrozumienie odpowiedzialności pomoże Ci chronić swój majątek i uniknąć poważnych problemów.
              </p>

              <h3 id="legal-liability-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Odpowiedzialność całym majątkiem
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>W przeciwieństwie do Sp. z o.o.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                W przeciwieństwie do Sp. z o.o., przedsiębiorca na JDG odpowiada za długi biznesu całym swoim majątkiem osobistym. 
                To obejmuje samochód, mieszkanie i środki na kontach prywatnych.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Oznacza to, że jeśli nie możesz spłacić długów biznesu, wierzyciele mogą zająć Twój majątek osobisty.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Jak się chronić</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Istnieje kilka sposobów ochrony majątku. Ubezpieczenie odpowiedzialności zawodowej (OC) jest szczególnie ważne dla IT i marketerów. 
                Utworzenie Sp. z o.o. zamiast JDG jest możliwe, ale jest bardziej skomplikowane. 
                Rozdzielenie majątku z małżonkiem (intercyza) również pomaga.
              </p>

              <h3 id="legal-liability-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ubezpieczenie odpowiedzialności zawodowej (OC)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Czym jest OC</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ubezpieczenie odpowiedzialności zawodowej (OC) to ubezpieczenie, które pokrywa szkody klienta z powodu Twoich błędów.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Kiedy jest ważne</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                OC jest szczególnie ważne dla specjalistów IT (błędy w kodzie mogą prowadzić do poważnych szkód), 
                marketerów (nieprawidłowe działania mogą zaszkodzić stronie klienta), 
                konsultantów (nieprawidłowe porady mogą prowadzić do szkód) 
                oraz projektantów (naruszenie praw autorskich).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Koszt OC</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Koszt zależy od rodzaju działalności i sumy ubezpieczenia. Zwykle to 500-2000 zł rocznie.
              </p>
            </div>
          </section>

          {/* B2B Contracts Section */}
          <section id="b2b-contracts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Specyfika umowy B2B (Business-to-Business)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Freelancerzy często mylą umowę o świadczenie usług z umową o pracę. 
                Ważne jest zrozumienie różnicy, aby uniknąć problemów z urzędem skarbowym i prawidłowo sformalizować relacje z klientem.
              </p>

              <h3 id="b2b-contracts-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Oznaki stosunku pracy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Kiedy urząd skarbowy może przekwalifikować Twoją umowę B2B</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Urząd skarbowy może przekwalifikować Twoją umowę B2B na umowę o pracę, 
                jeśli pracujesz w biurze klienta pod jego bezpośrednim kierownictwem i według określonego przez niego harmonogramu.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Oznaki stosunku pracy</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Oznaki stosunku pracy obejmują pracę w biurze klienta, stały harmonogram (na przykład 9:00-17:00), 
                kierownictwo ze strony klienta, korzystanie ze sprzętu klienta, 
                stałą miesięczną płatność oraz brak innych klientów.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Konsekwencje przekwalifikowania</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli urząd skarbowy przekwalifikuje Twoją umowę, grozi to karami dla klienta, 
                utratą prawa do ulg ZUS, problemami z urzędem skarbowym oraz utratą prawa do Ryczałt (dla określonych kategorii).
              </p>

              <h3 id="b2b-contracts-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Praca dla byłego pracodawcy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Czy mogę pracować dla tego samego pracodawcy, u którego wcześniej pracowałem na umowę o pracę?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Tak, ale stracisz prawo do niektórych ulg ZUS i stawki podatku Ryczałt (dla określonych kategorii), 
                jeśli usługi są identyczne z tymi, które świadczyłeś jako pracownik.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Warunki</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Między zwolnieniem a podpisaniem umowy B2B musi minąć minimum 6 miesięcy. 
                Usługi nie powinny być identyczne z tymi, które świadczyłeś jako pracownik. 
                Powinieneś pracować z innymi klientami jednocześnie.
              </p>
            </div>
          </section>

          {/* Reporting Requirements Section */}
          <section id="reporting-requirements" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wymagania dotyczące sprawozdawczości i kontroli
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Szczegółowe informacje o tym, co dokładnie sprawdza urząd, pomoże Ci przygotować się do kontroli i uniknąć problemów.
              </p>

              <h3 id="reporting-requirements-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Rejestracja w statystyce (REGON)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Chociaż jest automatyczna</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Chociaż jest automatyczna, ważne jest zrozumienie, że Twój biznes jest klasyfikowany do sprawozdań statystycznych.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Czym jest REGON</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                REGON (Rejestr Gospodarki Narodowej) to rejestr gospodarki narodowej. 
                Jest używany do sprawozdań statystycznych i klasyfikacji biznesu.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                REGON jest przypisywany automatycznie podczas rejestracji w CEIDG. Nie musisz robić nic dodatkowego.
              </p>

              <h3 id="reporting-requirements-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Kontrole ZUS
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Ubezpieczenie społeczne może sprawdzać</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ubezpieczenie społeczne może sprawdzać, czy Twoje samozatrudnienie nie jest fikcyjne 
                (na przykład, jeśli zwolniłeś się z firmy i następnego dnia podpisałeś z nią umowę B2B).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Konsekwencje fikcyjnego samozatrudnienia</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                W takim przypadku możesz stracić prawo do ulgi "Ulga na start", otrzymać karę od ZUS 
                oraz stracić prawo do Ryczałt (dla określonych kategorii).
              </p>

              <h3 id="reporting-requirements-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Kontrole urzędu skarbowego
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Co sprawdza urząd skarbowy</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Urząd skarbowy może sprawdzać Twoje faktury, wyciągi bankowe, umowy z klientami, 
                rozliczenie dochodów i wydatków oraz prawidłowość obliczenia podatków.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Prawa podczas kontroli</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Podczas kontroli masz prawo znać przyczynę kontroli, mieć adwokata, 
                mieć tłumacza (jeśli nie znasz polskiego) oraz otrzymywać kopie wszystkich dokumentów.
              </p>
            </div>
          </section>

          {/* How to Start as Freelancer Section */}
          <section id="how-to-start" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Jak zostać freelancerem - porady dla początkujących
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Rozpoczęcie kariery freelancera może wydawać się skomplikowane, ale z właściwą strategią i przygotowaniem 
                szybko staniesz się udanym niezależnym profesjonalistą.
              </p>

              <h3 id="how-to-start-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Jak określić swój zawód i kierunek?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pierwszy krok do udanego freelancingu to <strong>uczciwa ocena swoich umiejętności i zainteresowań</strong>. Zadaj sobie pytania:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li>Co potrafię robić dobrze?</li>
                <li>Co lubię robić?</li>
                <li>Jakie umiejętności mogę szybko poprawić?</li>
                <li>Na jakim rynku jest popyt na moje usługi?</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Jeśli nie jesteś pewien, zacznij od <strong>najprostszych zawodów</strong>: copywriting, tłumaczenia, wprowadzanie danych, 
                obróbka obrazów. To pozwoli Ci zdobyć doświadczenie i zrozumieć, co Ci pasuje.
              </p>

              <h3 id="how-to-start-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Dla kogo warto zaczynać? Zawody dla początkujących
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Oto zawody, które pasują dla początkujących w freelancingu:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Copywriter</strong> - jeśli dobrze piszesz, możesz zacząć od prostych tekstów dla stron i mediów społecznościowych</li>
                <li><strong>Tłumacz</strong> - jeśli swobodnie posługujesz się dwoma językami, tłumaczenia to stabilny dochód</li>
                <li><strong>Asystent wirtualny</strong> - wsparcie administracyjne, obsługa email, planowanie</li>
                <li><strong>Projektant graficzny</strong> - jeśli masz podstawowe umiejętności w Photoshop lub Figma</li>
                <li><strong>Wprowadzanie danych</strong> - prosta praca, która nie wymaga specjalnych umiejętności</li>
                <li><strong>Korepetytor online</strong> - jeśli jesteś ekspertem w jakiejś dziedzinie, możesz uczyć innych</li>
                <li><strong>Menedżer SMM</strong> - zarządzanie mediami społecznościowymi dla biznesu</li>
              </ul>

              <h3 id="how-to-start-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Gdzie szukać - platformy i sposoby znajdowania klientów
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Istnieje kilka sposobów znalezienia pierwszych klientów:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Platformy freelancingu</strong> (Upwork, Fiverr, Freelancer.com) - dobre dla początkujących, ale wysoka konkurencja</li>
                <li><strong>Media społecznościowe</strong> (LinkedIn, grupy Facebook, kanały Telegram) - można znaleźć klientów bezpośrednio</li>
                <li><strong>Polskie platformy</strong> (NoFluffJobs, JustJoinIT) - dla specjalistów IT</li>
                <li><strong>Kontakty osobiste</strong> - opowiedz znajomym o swoich usługach</li>
                <li><strong>Własna strona lub portfolio</strong> - utwórz profil na Behance, Dribbble lub własną stronę</li>
              </ul>

              <h3 id="how-to-start-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Nauka - kursy i zasoby
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dla udanego startu w freelancingu ważne jest ciągłe doskonalenie swoich umiejętności. 
                Oto różne typy zasobów edukacyjnych:
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Darmowe kursy i zasoby
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>YouTube</strong> - darmowe tutoriale z każdego tematu</li>
                <li><strong>Coursera</strong> - darmowe kursy od uniwersytetów (z możliwością uzyskania certyfikatu za opłatą)</li>
                <li><strong>edX</strong> - darmowe kursy od wiodących uniwersytetów</li>
                <li><strong>Khan Academy</strong> - darmowa edukacja z wielu przedmiotów</li>
                <li><strong>Codecademy</strong> - darmowe kursy programowania</li>
                <li><strong>Udemy</strong> - często są darmowe kursy podczas promocji</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Płatne kursy (średni poziom)
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Udemy</strong> - kursy od <strong>50 do 200 złotych</strong>, często ze zniżkami</li>
                <li><strong>Skillshare</strong> - subskrypcja od <strong>100 złotych/miesiąc</strong>, nieograniczony dostęp</li>
                <li><strong>Pluralsight</strong> - subskrypcja od <strong>150 złotych/miesiąc</strong>, skupienie na umiejętnościach technicznych</li>
                <li><strong>LinkedIn Learning</strong> - subskrypcja od <strong>120 złotych/miesiąc</strong></li>
                <li><strong>Domestika</strong> - kursy z projektowania i kreatywności od <strong>80 do 300 złotych</strong></li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Premium kursy i bootcampy
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Bootcampy programistyczne</strong> - od <strong>5000 do 20000 złotych</strong>, intensywne programy z gwarancją zatrudnienia</li>
                <li><strong>Certyfikacje zawodowe</strong> (Google, Microsoft, Adobe) - od <strong>500 do 2000 złotych</strong></li>
                <li><strong>Szkoły online</strong> (Thinkful, General Assembly) - od <strong>10000 do 30000 złotych</strong></li>
                <li><strong>Mentoring indywidualny</strong> - od <strong>200 do 500 złotych/godz</strong></li>
              </ul>

              <h3 id="how-to-start-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Praktyczne porady na start
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Zacznij od małych projektów</strong> - nie bój się brać małych projektów, aby zdobyć doświadczenie i opinie</li>
                <li><strong>Utwórz portfolio</strong> - nawet jeśli nie masz komercyjnych projektów, utwórz kilka prac do demonstracji umiejętności</li>
                <li><strong>Ustaw realistyczne ceny</strong> - na starcie lepiej pracować za niższe stawki, aby zdobyć doświadczenie</li>
                <li><strong>Ucz się ciągle</strong> - rynek się zmienia, więc ważne jest aktualizowanie umiejętności</li>
                <li><strong>Bądź profesjonalny</strong> - zawsze przestrzegaj terminów, komunikuj się uprzejmie, dotrzymuj obietnic</li>
                <li><strong>Zachowuj wszystkie prace</strong> - staną się częścią Twojego portfolio</li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <p className="text-gray-700 font-semibold mb-2">Oficjalne źródła</p>
                <p className="text-gray-700 text-sm"><a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Informacje o wsparciu przedsiębiorczości i programach edukacyjnych dla przedsiębiorców.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              FAQ - Pytania i odpowiedzi
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ten rozdział zawiera odpowiedzi na najczęstsze pytania freelancerów o pracę w Polsce. 
                Wszystkie odpowiedzi są napisane prostym językiem i oparte na aktualnym prawodawstwie z 2026 roku.
              </p>

              <h3 id="faq-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Podstawowe pytania o rejestrację
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy muszę rejestrować JDG, jeśli pracuję tylko z zagranicznymi klientami?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tak, jeśli przekraczasz limit działalności nierejestrowanej (3500-3600 zł miesięcznie). 
                    Nawet jeśli klienci są zagraniczni, nadal jesteś zobowiązany deklarować dochody w Polsce, jeśli jesteś rezydentem podatkowym.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Ile czasu zajmuje rejestracja JDG?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Rejestracja przez CEIDG zajmuje 7-10 dni roboczych. 
                    Ale przygotowanie dokumentów i konfiguracja może zająć dodatkowy czas.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy mogę rejestrować JDG zdalnie?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tak, rejestracja odbywa się online przez CEIDG. 
                    Potrzebujesz tylko Profil Zaufany do podpisania wniosku.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy potrzebny jest wirtualny biuro do rejestracji?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nie, wirtualny biuro nie jest obowiązkowy. Możesz użyć adresu swojego zamieszkania. 
                    Ale wirtualny biuro jest wygodny, jeśli nie chcesz wskazywać adresu domowego w publicznym rejestrze.
                  </p>
                </div>
              </div>

              <h3 id="faq-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Pytania o opodatkowanie
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Jaki system opodatkowania jest najbardziej opłacalny dla freelancera?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To zależy od Twojego dochodu i wydatków. 
                    Dla większości freelancerów z małymi wydatkami najbardziej opłacalny jest Ryczałt 12% lub 8,5%. 
                    Dla tych, którzy mają znaczne wydatki, bardziej opłacalna jest Skala podatkowa.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy mogę zmienić system opodatkowania?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tak, system można zmienić raz w roku, składając wniosek do 20 stycznia.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Ile podatku będę płacić na Ryczałt 12%?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Płacisz 12% od całego dochodu bez uwzględnienia wydatków. 
                    Na przykład, jeśli Twój dochód wynosi 100 000 zł rocznie, podatek będzie 12 000 zł.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy mogę uwzględnić wydatki na Ryczałt?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nie, na Ryczałt wydatki nie są uwzględniane. Płacisz procent od całego dochodu.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Co to jest Kwota wolna od podatku?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To kwota wolna od podatku. W 2026 roku wynosi około 30 000 zł. 
                    Oznacza to, że pierwsze 30 000 zł Twojego dochodu nie są opodatkowane na Skala podatkowa.
                  </p>
                </div>
              </div>

              <h3 id="faq-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Pytania o ZUS
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Ile będę płacić ZUS na starcie?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Przez pierwsze 6 miesięcy jesteś zwolniony ze składek społecznych dzięki uldze "Ulga na start". 
                    Płacisz tylko ubezpieczenie zdrowotne (około 400-500 zł miesięcznie).
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Co to jest Mały ZUS Plus?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To okres preferencyjny na 24 miesiące po zakończeniu "Ulga na start". 
                    Płacisz składki od obniżonej podstawy, co jest znacznie mniej niż pełny ZUS.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Ile kosztuje pełny ZUS?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Pełny ZUS w 2026 roku wynosi około 1600-2000 zł miesięcznie. 
                    To zależy od obliczeń i dodatkowych składek.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy muszę płacić ZUS, jeśli nic nie zarobiłem?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tak, jeśli jesteś zarejestrowany jako przedsiębiorca, jesteś zobowiązany płacić ZUS nawet jeśli nie masz dochodu. 
                    Ale ulgi "Ulga na start" i "Mały ZUS Plus" pomagają zmniejszyć koszty na starcie.
                  </p>
                </div>
              </div>

              <h3 id="faq-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Pytania o VAT
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Kiedy jestem zobowiązany zarejestrować się jako płatnik VAT?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Jesteś zobowiązany zarejestrować się, gdy Twój roczny obrót przekracza 200 000 zł.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Co to jest VAT-UE?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    VAT-UE to numer do pracy z klientami z krajów UE. 
                    Pozwala używać mechanizmu Reverse Charge i nie płacić VAT dwukrotnie.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy potrzebna jest kasa fiskalna dla freelancera?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Zwykle nie. Większość freelancerów używa elektronicznych faktur przez KSeF, co zastępuje kasę fiskalną.
                  </p>
                </div>
              </div>

              <h3 id="faq-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Pytania o księgowość
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy potrzebna jest KPiR dla Ryczałt?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nie, dla Ryczałt KPiR nie jest potrzebna. Jest potrzebna tylko dla Skala podatkowa i Podatek liniowy.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Co to jest KSeF?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    KSeF (Krajowy System e-Faktur) to krajowy system elektronicznych faktur. 
                    Staje się obowiązkowy stopniowo dla wszystkich przedsiębiorców.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy mogę prowadzić księgowość samodzielnie?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tak, ale może być skomplikowane, szczególnie na Skala lub Liniowy. 
                    Dla Ryczałt jest prostsze, ponieważ nie jest potrzebna KPiR.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Ile kosztuje księgowy?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Koszt zależy od rodzaju usług. Usługi online kosztują 150-400 zł miesięcznie, 
                    tradycyjne biura kosztują 300-600 zł miesięcznie.
                  </p>
                </div>
              </div>

              <h3 id="faq-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Pytania o dochody międzynarodowe
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy muszę deklarować dochody z Upwork/Fiverr?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tak, wszystkie dochody z międzynarodowych platform muszą być deklarowane w rocznej deklaracji PIT-36.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Jak deklarować dochody w dolarach?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Dochody są konwertowane według kursu NBP na datę otrzymania. 
                    Skonwertowana kwota jest wskazana w deklaracji PIT-36.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy muszę płacić podatek dwukrotnie?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nie, dzięki umowom o unikaniu podwójnego opodatkowania nie płacisz podatku dwukrotnie. 
                    Podatek jest płacony w kraju, w którym jesteś rezydentem podatkowym.
                  </p>
                </div>
              </div>

              <h3 id="faq-8" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Pytania o umowy B2B i stosunki pracy
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy mogę pracować dla tego samego pracodawcy, u którego wcześniej pracowałem na umowę o pracę?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tak, ale stracisz prawo do niektórych ulg ZUS i stawki podatku Ryczałt (dla określonych kategorii), 
                    jeśli usługi są identyczne z tymi, które świadczyłeś jako pracownik. 
                    Między zwolnieniem a podpisaniem umowy B2B musi minąć minimum 6 miesięcy.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czym różni się samozatrudnienie od umowy o pracę?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Samozatrudnienie daje więcej pieniędzy na rękę, ale nie ma płatnego urlopu i zwolnienia lekarskiego. 
                    Umowa o pracę daje stabilność i pakiet społeczny, ale mniej pieniędzy na rękę.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy urząd skarbowy może przekwalifikować moją umowę B2B na umowę o pracę?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tak, jeśli pracujesz w biurze klienta pod jego bezpośrednim kierownictwem i według określonego przez niego harmonogramu. 
                    To grozi karami i utratą prawa do ulg.
                  </p>
                </div>
              </div>

              <h3 id="faq-9" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Pytania o odpowiedzialność
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy odpowiadam za długi biznesu swoim majątkiem osobistym?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tak, na JDG odpowiadasz za długi biznesu całym swoim majątkiem osobistym: 
                    samochodem, mieszkaniem, środkami na kontach prywatnych. 
                    W przeciwieństwie do Sp. z o.o., gdzie odpowiedzialność jest ograniczona kapitałem zakładowym.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Jak chronić swój majątek?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Istnieje kilka sposobów: ubezpieczyć odpowiedzialność zawodową (OC), 
                    rozdzielić majątek z małżonkiem (intercyza), lub utworzyć Sp. z o.o. zamiast JDG.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Czy potrzebne jest ubezpieczenie odpowiedzialności zawodowej?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To nie jest obowiązkowe, ale bardzo zalecane, szczególnie dla specjalistów IT, 
                    marketerów i konsultantów. OC pokrywa szkody klienta z powodu Twoich błędów.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                  Ten FAQ obejmuje najczęściej zadawane pytania freelancerów dotyczące pracy w Polsce. Jeśli masz dodatkowe pytania, zalecam skontaktowanie się z księgowym lub uzyskanie oficjalnego wyjaśnienia od urzędu skarbowego.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  Ważne jest, aby pamiętać, że przepisy mogą się zmieniać, dlatego zawsze sprawdzaj aktualność informacji na oficjalnych stronach rządowych.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar Navigation - w jednym rzędzie z artykułem, sticky przy scrollu */}
        <aside className="hidden lg:block w-[min(359px,28rem)] flex-shrink-0 self-start sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden border-l border-gray-200 bg-gray-50">
          <nav className="p-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Spis treści
            </h3>
            <ul className="space-y-0.5">
              {navigationSectionsPl.map((section) => {
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
                          aria-label={isExpanded ? 'Zwiń' : 'Rozwiń'}
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
                    href="/contact/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.contact}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Polityka prywatności
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Regulamin
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

      {/* Кнопка скролу вгору / Przewiń do góry */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Przewiń do góry"
        className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}
