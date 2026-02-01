'use client';

import { useEffect, useMemo, useState } from 'react';
import Script from 'next/script';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { DynamicYear } from "@/components/dynamic-year";
import { LanguageSwitcher } from "@/components/language-switcher";
import { translations, type Language } from "@/lib/translations";
import { CheckCircle, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import { navigationSectionsDe, getAllNavIds } from "@/lib/navigation";

export default function HomePage() {
  const language: Language = 'de';
  const t = translations['de'];
  const [activeSection, setActiveSection] = useState('introduction');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);

  const allNavIds = useMemo(() => getAllNavIds(navigationSectionsDe), []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'de';
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
      <header className="bg-white shadow-sm sticky top-0 z-50 mobile-shell-edge md:mx-0 px-4 py-3 md:py-4">
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
              href="/de/"
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              aria-label="Freelancer.org.pl - Startseite (Deutsch)"
            >
              Freelancer.org.pl
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('jdg')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              JDG anmelden
            </button>
            <button
              onClick={() => scrollToSection('taxation-systems')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Steuersysteme
            </button>
            <button
              onClick={() => scrollToSection('zus-insurance')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              ZUS-Versicherung
            </button>
            <button
              onClick={() => scrollToSection('how-to-start')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              So startest du
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
                So startest du mit der Arbeit?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Schritt 1 – Recht zu arbeiten prüfen</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Du benötigst einen gültigen Aufenthaltsstatus: PESEL (z. B. für Ukrainer), Aufenthaltskarte oder eine andere Genehmigung.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Schritt 2 – Tätigkeitsform wählen</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Unangemeldete Tätigkeit (Einkommen bis ca. 3.500–3.600 PLN/Monat) oder JDG bei höherem Einkommen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Schritt 3 – Unternehmen anmelden</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    JDG online über CEIDG mit Profil Zaufany anmelden. Der Vorgang dauert etwa 15 Minuten.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Schritt 4 – Steuersystem wählen</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Pauschale (ryczałt): 12 % für die meisten Dienstleistungen oder 8,5 % für freie Berufe. Einfacher als Vollkostenbuchhaltung.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Schritt 5 – Buchhaltung einrichten</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Wähle eine Buchhaltungsplattform oder einen Buchhalter für Einnahmen und Meldungen.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
                  alt="Freelancer in Polen"
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, min(696px, 50vw)"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vorteile der Zusammenarbeit mit inFakt</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Mit inFakt (ca. 200 PLN/Monat) helfen sie dir beim Aufbau deines Unternehmens und allem Nötigen kostenlos. Du konzentrierst dich auf die Arbeit; inFakt übernimmt Buchhaltung und Meldungen. Beliebt bei Freelancern aus Indien, der Ukraine und anderen Ländern.
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
                    {t.hero.cta}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Navigation - sidebar with article, from article heading */}
      <div className="flex w-full max-w-[100vw] overflow-x-hidden">
        {/* Main Content Area */}
        <main className="flex-1 w-full min-w-0 max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
          {/* Introduction Section */}
          <section id="introduction" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Alles über Freelancing in Polen 2026
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Viele Menschen aus Indien, der Ukraine und anderen Ländern kommen nach Polen und möchten legal arbeiten und online Geld verdienen. <strong>Selbstständigkeit kann ein rechtlicher Aufenthaltsgrund in Polen sein</strong>. Es ist wichtig zu wissen, wie alles funktioniert. Dieser Leitfaden bündelt detaillierte Informationen zu allen Aspekten des Freelancings in Polen für internationale Fachkräfte.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das polnische Recht kennt keinen eigenen Begriff für „Freelancer“. Freelancing gilt als <strong>selbstständige wirtschaftliche Tätigkeit</strong>. Ein Freelancer ist also ein <em>Unternehmer mit denselben Rechten und Pflichten</em>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das polnische Recht kennt mehrere Formen selbstständiger Tätigkeit. Jede hat eigene Regeln, Anforderungen und Grenzen. Die richtige Wahl hängt von deinem Einkommen, der Art der Tätigkeit und deiner persönlichen Situation ab.
              </p>

              <h3 id="introduction-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Warum ist Polen ein Zentrum für internationale Freelancer geworden?
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Polen bietet ein günstiges Umfeld für Freelancer aus dem Ausland. EU-Mitgliedschaft, wachsende Wirtschaft und ein offener Arbeitsmarkt machen es für Fachkräfte aus Indien, der Ukraine und anderen Ländern attraktiv.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die polnische Wirtschaft wächst. In der EU liegt Polen beim BIP auf Platz sechs; die Arbeitslosigkeit sinkt. Die Nachfrage nach IT-Spezialisten, Designern, Marketern und anderen Fachleuten ist hoch. Das schafft viele Chancen für internationale Freelancer.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Polen gehört zu den 20 größten Volkswirtschaften der Welt nach BIP. Viele Ausländer, auch aus Indien und der Ukraine, sind nach Polen gezogen, um zu arbeiten und zu diesem Wachstum beizutragen. Internationale Freelancer sind ein wichtiger Teil des polnischen Arbeitsmarkts.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Quellen:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.worldbank.org/en/country/poland" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">World Bank - Poland</a> – offizielle Daten zu Polens Wirtschaft und BIP</li>
                  <li>- <a href="https://stat.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Główny Urząd Statystyczny</a> – polnisches Statistikamt, Wirtschafts- und Arbeitsmarktdaten</li>
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> – Amt für Ausländer, Informationen für Nicht-EU-Bürger</li>
                </ul>
              </div>

              <h3 id="introduction-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Freelancing-Statistik in Polen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Laut Statistik arbeiten in Polen über <strong>2 Millionen Freelancer</strong> – etwa <strong>12–15 % der Erwerbstätigen</strong>. Diese Zahl wächst weiter, auch durch die Ankunft vieler ausländischer Fachkräfte.
              </p>

              <h3 id="introduction-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Gefragteste Berufe und Durchschnittsvergütungen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Der Freelance-Markt in Polen wächst und die Nachfrage nach verschiedenen Berufen ändert sich. Typische Berufe und ungefähre Monatsvergütungen 2026 (in PLN):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>IT-Spezialisten und Entwickler</strong> – von <strong>8.000 bis 25.000 PLN</strong> pro Monat (je nach Erfahrung und Tech-Stack)</li>
                <li><strong>Web- und UI/UX-Designer</strong> – von <strong>5.000 bis 15.000 PLN</strong> pro Monat</li>
                <li><strong>Grafikdesigner</strong> – von <strong>4.000 bis 12.000 PLN</strong> pro Monat</li>
                <li><strong>Marketer und SMM-Spezialisten</strong> – von <strong>4.500 bis 14.000 PLN</strong> pro Monat</li>
                <li><strong>Texter und Content-Manager</strong> – von <strong>3.500 bis 10.000 PLN</strong> pro Monat</li>
                <li><strong>Übersetzer</strong> – von <strong>4.000 bis 12.000 PLN</strong> pro Monat (je nach Sprache und Fach)</li>
                <li><strong>Nachhilfelehrer und Online-Dozenten</strong> – von <strong>3.000 bis 8.000 PLN</strong> pro Monat</li>
                <li><strong>Buchhalter und Finanzberater</strong> – von <strong>5.000 bis 15.000 PLN</strong> pro Monat</li>
                <li><strong>Fotografen und Videografen</strong> – von <strong>4.000 bis 12.000 PLN</strong> pro Monat</li>
                <li><strong>Architekten und Ingenieure</strong> – von <strong>6.000 bis 18.000 PLN</strong> pro Monat</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Die Angaben sind Richtwerte und hängen von Erfahrung, Portfolio, Projektkomplexität und Kundensprache ab.</em>
              </p>

              <h3 id="introduction-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Freelance-Plattformen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Viele Plattformen helfen Freelancern bei der Auftragssuche. Hier einige der bekanntesten:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Upwork</strong> – eine der größten globalen Plattformen mit breitem Projektspektrum</li>
                <li><strong>Fiverr</strong> – beliebt für Dienstleistungen in festen Paketen</li>
                <li><strong>Freelancer.com</strong> – internationale Plattform mit Wettbewerben und Projekten</li>
                <li><strong>Toptal</strong> – für Top-Freelancer mit hohen Anforderungen</li>
                <li><strong>PeoplePerHour</strong> – in Europa beliebt für verschiedene Berufe</li>
                <li><strong>99designs</strong> – für Designer</li>
                <li><strong>Guru</strong> – Fokus auf langfristige Zusammenarbeit</li>
                <li><strong>Behance</strong> – Portfolio und Kundenakquise</li>
                <li><strong>LinkedIn</strong> – berufliches Netzwerk für Kunden und Projekte</li>
                <li><strong>NoFluffJobs</strong> – in Polen beliebt für IT</li>
                <li><strong>JustJoinIT</strong> – polnische Plattform für Tech-Spezialisten</li>
              </ul>

              <h3 id="introduction-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Durchschnittliche Stundensätze
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Stundensätze variieren je nach Region, Erfahrung und Beruf. Ungefähre Durchschnitte:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Polen</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>IT-Spezialisten: <strong>80–200 PLN/Stunde</strong></li>
                  <li>Designer: <strong>60–150 PLN/Stunde</strong></li>
                  <li>Marketer: <strong>50–120 PLN/Stunde</strong></li>
                  <li>Übersetzer: <strong>40–100 PLN/Stunde</strong></li>
                  <li>Texter: <strong>40–90 PLN/Stunde</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Europa</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>IT-Spezialisten: <strong>30–80 EUR/Stunde</strong></li>
                  <li>Designer: <strong>25–60 EUR/Stunde</strong></li>
                  <li>Marketer: <strong>20–50 EUR/Stunde</strong></li>
                  <li>Übersetzer: <strong>20–45 EUR/Stunde</strong></li>
                  <li>Texter: <strong>18–40 EUR/Stunde</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">USA / Kanada</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>IT-Spezialisten: <strong>40–120 USD/Stunde</strong></li>
                  <li>Designer: <strong>30–80 USD/Stunde</strong></li>
                  <li>Marketer: <strong>25–70 USD/Stunde</strong></li>
                  <li>Übersetzer: <strong>20–50 USD/Stunde</strong></li>
                  <li>Texter: <strong>20–45 USD/Stunde</strong></li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Sätze hängen von Erfahrung, Projektkomplexität, Kundensprache, Plattformruf und deinen Fähigkeiten ab.</em>
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das polnische Steuersystem ist relativ einfach und transparent. Je nach Einkommen und Tätigkeitsart stehen mehrere Steuerregime zur Verfügung, was die Steuerlast optimieren hilft.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das Mindeststammkapital beträgt 1.200 EUR bzw. 5.000 PLN und muss nicht auf der Bank liegen. Das volle Sozialpaket umfasst kostenlose Gesundheitsversorgung und Bildung. Die EU-Mitgliedschaft ermöglicht Geschäfte mit allen EU-Ländern.
              </p>

            </div>
          </section>

          {/* Legal Status Section */}
          <section id="legal-status" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Rechtlicher Aufenthalt und Freelancing in Polen
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Es ist sehr wichtig zu wissen: Als Freelancer in Polen ohne gültigen Aufenthaltsstatus zu arbeiten, ist rechtswidrig. 
                Verstöße können zu <strong>Geldbußen bis 5.000 PLN, Abschiebung und Einreisesperre in den Schengen-Raum bis zu 5 Jahren</strong> führen. 
                Gültige Dokumente sind die Grundlage für eine erfolgreiche Freelance-Karriere in Polen – ob du aus Indien, der Ukraine oder einem anderen Land kommst.
              </p>

              <h3 id="legal-status-1" className="text-2xl font-semibold text-gray-900 mb-4">
                PESEL und Aufenthaltsstatus 2026
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>PESEL</strong> ist eine polnische Identifikationsnummer. Für viele Ausländer (z. B. Ukrainer nach Sonderregeln oder andere mit Aufenthaltserlaubnis) ermöglicht sie den Zugang zu grundlegenden Leistungen und ist für die Geschäftstätigkeit erforderlich.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Mit einer PESEL-Nummer kannst du eine JDG anmelden und ein Unternehmen führen. PESEL wird für alle geschäftsbezogenen Formalitäten benötigt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wie du PESEL erhalten, hängt von deiner Staatsangehörigkeit und deinem Aufenthaltsgrund ab. Für manche Staatsangehörigkeiten ist es kostenlos und kann beim Stadt- oder Gemeindeamt (<em>Urząd miasta</em> oder <em>Urząd gminy</em>) beantragt werden. 
                Die Bearbeitung dauert oft <strong>1 bis 3 Werktage</strong> nach Einreichung der Unterlagen.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Quellen:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> – offizielle Informationen zu Aufenthalt und PESEL</li>
                  <li>- <a href="https://www.gov.pl/web/gov/cudzoziemcy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Portal für Ausländer</a> – nächstgelegenes Amt und Verfahren</li>
                </ul>
              </div>

              <h3 id="legal-status-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Recht zur Geschäftstätigkeit für Nicht-EU-Bürger
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wenn du eine gültige Aufenthaltserlaubnis oder ein Aufenthaltsrecht in Polen hast, kannst du in der Regel unter ähnlichen Bedingungen wie Polen ein Unternehmen führen</strong>. 
                Für die meisten Tätigkeiten brauchst du außer der Anmeldung keine zusätzlichen Genehmigungen oder Lizenzen. Die Regeln hängen von deiner Staatsangehörigkeit und Art des Aufenthalts ab (z. B. Arbeitserlaubnis, Blaue Karte, befristeter Aufenthalt usw.).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für die Anmeldung einer <strong>JDG</strong> benötigst du einen <strong>gültigen Reisepass, PESEL und eine Adresse in Polen</strong>. <em>Du musst nicht auf die Aufenthaltskarte warten</em>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für ukrainische Staatsbürger ist dies im <strong>EU-Ukraine-Assoziierungsabkommen</strong> geregelt, das ukrainischen Staatsbürgern gleiche Rechte wie EU-Bürgern zur Geschäftstätigkeit einräumt. 
                Für andere Staatsangehörigkeiten hängen die Regeln vom Aufenthaltsstatus ab. Du kannst jede Tätigkeitsform wählen, von unangemeldet bis zur vollwertigen Gesellschaft.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wichtig:</strong> Einige Tätigkeiten erfordern weiterhin besondere Genehmigungen oder Lizenzen. 
                So gelten z. B. für <em>ärztliche Tätigkeit, Rechtsberatung oder Finanzdienstleistungen</em> zusätzliche Anforderungen. 
                Prüfe vor dem Start, ob deine Geschäftsart besondere Genehmigungen benötigt.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Quellen:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://biznes.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> – offizielles Portal für Unternehmer, Anmeldung und Tätigkeitsarten</li>
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> – Informationen zu Rechten von Ausländern zur Geschäftstätigkeit in Polen</li>
                  <li>- <a href="https://ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG</a> – zentrales Register und JDG-Anmeldeinformationen</li>
                </ul>
              </div>

              <h3 id="legal-status-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Aufenthaltskarte (Karta czasowego pobytu) aus geschäftlichen Gründen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Nach Anmeldung einer <strong>JDG und mindestens 6 Monaten Tätigkeit</strong> kannst du eine befristete Aufenthaltskarte beantragen. 
                Die Karte berechtigt du zum rechtmäßigen Aufenthalt und zur Arbeit in Polen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für die befristete Aufenthaltskarte (<strong>Karta pobytu</strong>) musst du stabiles Geschäftseinkommen nachweisen (<strong>in der Regel mindestens 5.000–6.000 PLN pro Monat</strong>, in Anlehnung an das durchschnittliche polnische Gehalt), 
                Steuerzahlungen und <strong>ZUS-Beiträge (für die letzten 3–6 Monate der Tätigkeit)</strong>. Die Karte wird für <strong>1 bis 3 Jahre</strong> ausgestellt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für die Aufenthaltskarte aus geschäftlichen Gründen sind verschiedene Unterlagen erforderlich, u. a. <strong>Einkommensnachweis, Steuer- und ZUS-Zahlungen sowie der Nutzen deines Unternehmens für die polnische Wirtschaft</strong>. 
                Die Bearbeitung dauert in der Regel <strong>1 bis 3 Monate</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Eine befristete Aufenthaltskarte gibt dir <strong>volle Rechte zum Aufenthalt und zur Arbeit in Polen</strong> 
                sowie zur freien Einreise in den <strong>Schengen-Raum</strong>. 
                <em>Nach 5 Jahren rechtmäßigem Aufenthalt</em> kannst du eine Daueraufenthaltskarte beantragen.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Quellen:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> – offizielle Informationen zu befristeten Aufenthaltskarten und erforderlichen Unterlagen</li>
                  <li>- <a href="https://www.gov.pl/web/gov/cudzoziemcy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MOS</a> – Portal für Ausländer, Online-Antrag</li>
                </ul>
              </div>

              <h3 id="legal-status-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                EU Blaue Karte für hochqualifizierte IT-Freelancer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Blaue Karte ist eine Sondererlaubnis für hochqualifizierte Fachkräfte. 
                sie eignet sich für IT-Freelancer mit hoher Qualifikation und Einkommen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für die Blaue Karte benötigst du einen Hochschulabschluss oder 5 Jahre Berufserfahrung 
                sowie ein Gehalt mindestens in Höhe des festgelegten Mindestbetrags. Die Blaue Karte erlaubt Arbeit und Geschäftstätigkeit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das Mindestgehalt für die <strong>Blaue Karte</strong> 2026 beträgt <strong>150 % des Durchschnittsgehalts in Polen</strong>, 
                etwa <strong>9.000–10.000 PLN brutto pro Monat</strong>. 
                Für IT-Spezialisten ist das oft leicht erreichbar, da der Markt hohe Sätze bietet.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Die Blaue Karte ermöglicht einen schnelleren Weg zum Daueraufenthalt</strong> – nach <strong>33 Monaten Arbeit</strong> (oder <strong>21 Monaten mit Polnischkenntnissen</strong>) 
                kannst du eine Daueraufenthaltskarte beantragen. Besonders nützlich für Freelancer mit langfristiger Perspektive in Polen.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Quellen:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc/niebieska-karta" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC - Blaue Karte</a> – offizielle Informationen und Anforderungen</li>
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> – allgemeine Informationen zu Aufenthaltserlaubnissen</li>
                </ul>
              </div>

              <h3 id="legal-status-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Arbeit mit Visum oder visumfrei
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Staatsbürger vieler Länder (z. B. Ukraine, EU, visumfreie Staaten) können in Polen <strong>bis zu 90 Tage ohne Visum</strong> bleiben (je nach Staatsangehörigkeit). 
                Für die Geschäftstätigkeit ist ein ordnungsgemäßer Aufenthaltsstatus dennoch besser.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Die JDG-Anmeldung ist in einigen Fällen auch während des visumfreien Aufenthalts möglich</strong>, 
                für langfristige Arbeit benötigst du jedoch eine Aufenthaltskarte.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wichtig:</strong> Der visumfreie Aufenthalt gilt nur für kurze Zeiträume. 
                Wenn du länger als 90 Tage als Freelancer arbeiten möchten, <strong>musst du eine befristete Aufenthaltskarte beantragen</strong>. 
                Verstöße gegen die Aufenthaltsregeln können zu einer Einreisesperre in den Schengen-Raum führen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wenn du bereits eine befristete Aufenthaltskarte oder eine gültige <strong>PESEL</strong>-Nummer hast (z. B. PESEL UKR für Ukrainer), sind JDG-Anmeldung und Arbeitsaufnahme unkompliziert. 
                Die Formalitäten kannst du online über das <strong>CEIDG</strong>-Portal erledigen.
              </p>

              <div className="mt-6 mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Schritt-für-Schritt-Beispiel: von der Ankunft bis zum Arbeitsbeginn</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Ankunft und PESEL (1–3 Tage)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Geh zum Stadt- oder Gemeindeamt (Urząd miasta/gminy), beantrage PESEL. Kostenlos, Ausstellung innerhalb von 1–3 Werktagen (Verfahren hängt von der Staatsangehörigkeit ab).
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Miete und Adresse</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Finde eine Unterkunft und melde deine Adresse an. Wenn der Vermieter es nicht erlaubt, nutze ein virtuelles Büro (60–100 PLN/Monat).
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">JDG-Anmeldung mit inFakt (15 Min – 1 Tag)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      inFakt kann dich kostenlos bei der Online-Anmeldung deiner JDG über CEIDG unterstützen. Nach der Anmeldung erhältst du NIP und REGON.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Arbeit und Einkommensaufbau (6 Monate)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Beginne zu arbeiten; inFakt übernimmt die Buchhaltung. Baue über 3–6 Monate ein stabiles Einkommen mindestens in Höhe des polnischen Mindestlohns (ca. 6.000 PLN/Monat) auf.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Aufenthaltskarte (nach 6 Monaten)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Nach 6 Monaten sammelst du Unterlagen zu Einkommen und Steuerzahlungen für 3–6 Monate. Reiche deinen Antrag beim UDSC ein. Bearbeitung dauert 1–3 Monate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Quellen:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> – Informationen zu Aufenthaltsregeln und visumfreiem Regime</li>
                  <li>- <a href="https://ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG</a> – JDG-Anmeldung online</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Unregistered Activity Section */}
          <section id="unregistered-activity" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Unangemeldete Tätigkeit (Działalność nierejestrowana)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dieser Abschnitt behandelt die für Einsteiger günstigste Form. sie eignet sich ideal, um deine Nische ohne Risiko und Papierkram zu testen.
              </p>

              <h3 id="unregistered-activity-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Was ist unangemeldete Tätigkeit?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Es handelt sich um ein besonderes Rechtsregime für Kleingewerbe. Du arbeitest legal, melden aber kein Unternehmen im <strong>CEIDG</strong> an. Geeignet für alle mit noch niedrigem Einkommen – <strong>bis etwa 3.500–3.600 PLN pro Monat</strong> (ca. 800–900 EUR).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Es ist die Tätigkeit einer natürlichen Person ohne formale Unternehmereigenschaft. du erbringst Leistungen oder verkaufen Waren als Privatperson.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du kannst Quittungen (<em>rachunki</em>) oder sogar Rechnungen (<em>faktury</em>) ausstellen. Kunden können diese Kosten in ihrer Buchführung geltend machen. So bist du vollwertiger Marktteilnehmer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wichtig: Unangemeldete Tätigkeit ist kein Grund für eine befristete Aufenthaltskarte</strong>. 
                Für eine Aufenthaltskarte aus geschäftlichen Gründen brauchst du angemeldete Tätigkeit (<strong>JDG</strong>) mit stabilem Einkommen für <strong>mindestens 6 Monate</strong>. 
                Unangemeldete Tätigkeit eignet sich zum Einstieg und Markttest; für einen längerfristigen Aufenthalt in Polen ist die Anmeldung einer JDG besser.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Welchen Aufenthaltsstatus kannst du bei unangemeldeter Tätigkeit haben?</strong> Unangemeldete Tätigkeit ist möglich bei <strong>visumfreiem Aufenthalt (bis 90 Tage)</strong> oder mit <strong>PESEL</strong> (z. B. PESEL UKR für Ukrainer). Auch mit einer <strong>befristeten Aufenthaltskarte</strong> aus anderem Grund (z. B. Arbeit oder Studium) ist sie möglich.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wie lange kann unangemeldete Tätigkeit dauern?</strong> Theoretisch unbegrenzt, solange du das monatliche Einkommenslimit (3.500–3.600 PLN) nicht überschreiten. In der Praxis wechseln die meisten Freelancer innerhalb von <strong>3–6 Monaten</strong> zur <strong>JDG</strong>, wenn das Einkommen sich stabilisiert oder steigt. Bei geplanter Arbeit länger als 6 Monate oder regelmäßigem Überschreiten des Limits musst du eine JDG anmelden.
              </p>

              <h3 id="unregistered-activity-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Einkommensgrenze 2026
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Hauptbedingung ist, dass dein monatliches Einkommen einen festgelegten Betrag nicht überschreiten darf. Dieser Betrag entspricht <strong>75 % des Bruttomindestlohns in Polen</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Seit dem 1. Januar 2026 ist der Mindestlohn gestiegen, deine Grenze liegt nun bei etwa <strong>3.500–3.600 PLN pro Monat</strong> (exakten Wert zum jeweiligen Zeitpunkt prüfen). <em>Überschreiten du diese Grenze auch nur um 1 PLN, musst du innerhalb von 7 Tagen eine JDG anmelden</em>.
              </p>

              <h3 id="unregistered-activity-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Wer kann diese Form nutzen?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dieses Modell steht Ausländern offen, die legal in Polen sind (z. B. Ukrainer, andere mit PESEL oder Aufenthaltserlaubnis). <strong>Hauptvoraussetzung</strong> ist, dass du in den <strong>letzten 60 Monaten</strong> keine eigene <strong>JDG</strong> in Polen geführt haben darfst.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ideal für <em>Texter, Designer, Nachhilfelehrer, Marketer, Übersetzer, Content-Manager und andere Fachleute</em> am Anfang. du fängst einfach an zu arbeiten, ohne Ämter aufzusuchen.
              </p>

              <h3 id="unregistered-activity-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Pflichten – vereinfachtes Register
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Du brauchst keinen Buchhalter</em>. Das einzige Register, das Du führst müssen, ist <strong>Ewidencja sprzedaży</strong> (vereinfachtes Verkaufsregister).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                du trägst lediglich Datum, Betrag und Leistungsempfänger ein. So kann das Finanzamt prüfen, ob du die monatliche Einkommensgrenze nicht überschritten hast.
              </p>

              <h3 id="unregistered-activity-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Versicherung (ZUS)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das ist der größte Vorteil der unangemeldeten Tätigkeit. du <strong>zahlst keine Pflichtbeiträge (ZUS)</strong> als Unternehmer. du sparst etwa <strong>1.600–2.000 PLN pro Monat</strong> im Vergleich zur JDG.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Hinweis: Bei Leistungen nach <strong>Umowa zlecenie</strong> kann der Auftraggeber verpflichtet sein, Beiträge für dich zu zahlen. Das solltest du vorab mit dem Kunden klären.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wichtig:</strong> Ohne <strong>ZUS</strong>-Zahlung hast du kein Recht auf kostenlose Gesundheitsversorgung in Polen (außer Notfälle) und bauen keine Rente auf.
              </p>

              <h3 id="unregistered-activity-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Steuererklärung (PIT-36)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Einkünfte aus unangemeldeter Tätigkeit werden nicht monatlich versteuert. du meldest sie nur einmal jährlich.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                du trägst Gesamteinkünfte und Ausgaben in der jährlichen PIT-36-Erklärung ein. Versteuert wird nur der Nettogewinn nach der allgemeinen Skala (in der Regel 12 %).
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> – offizielles Portal für Unternehmer mit Bedingungen, Grenzen und Registerregeln</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> – Website des Finanzamts mit Formularen und Anleitung</li>
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> – Website der Sozialversicherung mit Beitragsinformationen</li>
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
                Die Anmeldung einer <strong>JDG</strong> (<em>Jednoosobowa Działalność Gospodarcza</em> – Einzelunternehmen, vergleichbar mit Freiberufler oder Selbstständigen in anderen Ländern) ist der Schritt in die volle berufliche Unabhängigkeit. Du erhältst eine Steuernummer <strong>NIP</strong> (<em>Numer Identyfikacji Podatkowej</em>), werden offiziell Geschäftspartner und können mit Unternehmen weltweit arbeiten.
              </p>

              <h3 id="jdg-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Schritt-für-Schritt-Anmeldung über CEIDG
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Die Unternehmensanmeldung in Polen ist kostenlos</strong> und erfolgt online über <strong>CEIDG</strong> (<em>Centralna Ewidencja i Informacja o Działalności Gospodarczej</em> – Zentrales Register der Wirtschaftstätigkeit). Die Anmeldung erfolgt im Portal <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a>. Du benötigst <strong>Profil Zaufany</strong> (Vertrauensprofil – kostenlose E-Signatur für Behördendienste). Profil Zaufany kannst du unter <a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">gov.pl</a> einrichten.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du füllst das Formular <strong>CEIDG-1</strong> aus; damit meldest du dich gleichzeitig beim Finanzamt, Statistikamt und <strong>ZUS</strong> an. Das System weist dir <strong>REGON</strong> und <strong>NIP</strong> zu, falls du diese noch nicht hast.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://aplikacja.ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG (Aplikacja.ceidg.gov.pl)</a> – Einheitliches staatliches Register zur An-, Um- oder Abmeldung eines Unternehmens.</p>
              </div>

              <h3 id="jdg-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Tätigungscodes (PKD) wählen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>PKD</strong> (<em>Polska Klasyfikacja Działalności</em> – Polnische Klassifikation der Tätigkeiten) definiert, was dein Unternehmen macht. Bei der JDG-Anmeldung ist PKD Pflicht. Du wählst einen Hauptcode und beliebig viele Zusatzcodes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Häufige PKD-Codes für Freelancer:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>62.01.Z</strong> – Softwarebezogene Tätigkeit (Programmierer, Entwickler, IT)</li>
                <li><strong>62.02.Z</strong> – IT-Beratung (IT-Berater, Sysadmins)</li>
                <li><strong>63.11.Z</strong> – Datenverarbeitung, Hosting (Webentwickler, DevOps)</li>
                <li><strong>63.12.Z</strong> – Webportale (Webdesigner, Marketer)</li>
                <li><strong>73.11.Z</strong> – Werbeagenturen (Marketer, Texter)</li>
                <li><strong>74.10.Z</strong> – Design (Grafikdesigner, UI/UX)</li>
                <li><strong>74.20.Z</strong> – Fotografie (Fotografen, Videografen)</li>
                <li><strong>74.30.Z</strong> – Übersetzungsdienstleistungen</li>
                <li><strong>85.59.A</strong> – Sonstige Bildung (Nachhilfelehrer, Online-Dozenten)</li>
                <li><strong>90.03.Z</strong> – Künstlerische Tätigkeit (Künstler, Illustratoren)</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> – vollständige Anleitung zur Auswahl und Änderung von PKD-Codes</li>
                </ul>
              </div>

              <h3 id="jdg-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Startdatum und Anmeldeort
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du kannst das Anmeldedatum auf „heute“ oder ein zukünftiges Datum legen. <strong>Wichtig: Rückdatierung ist nicht erlaubt</strong>, es sei denn, Du hast zuvor unangemeldet gearbeitet.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Als Adresse kannst du deine Wohnung nutzen (wenn der Vermieter zustimmt) oder ein <strong>Wirtualne biuro</strong> (virtuelles Büro). Ein virtuelles Büro in Krakau oder Warschau ist eine legale Möglichkeit für eine Geschäftsadresse für <strong>60–100 PLN pro Monat</strong>.
              </p>

              <h3 id="jdg-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                ZUS-Anmeldung – Formulare ZZA und ZUA
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Nach der Einreichung beim <strong>CEIDG hast du 7 Tage</strong> Zeit, die relevanten Formulare an <strong>ZUS</strong> zu senden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZZA</strong> – wenn du sich nur für die Krankenversicherung anmelden (z. B. Du bist anderswo angestellt).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUA</strong> – wenn du sich für die volle Sozialversicherung anmelden (Rente, Erwerbsminderung usw.).
              </p>

              <h3 id="jdg-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Bankkonto – privat oder geschäftlich?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Gesetzlich braucht eine JDG nicht zwingend ein separates Geschäftskonto (wenn du nicht umsatzsteuerpflichtig sind). In der Praxis verlangen die meisten Banken die Trennung von privaten und geschäftlichen Mitteln.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wo ein Konto für die JDG eröffnen?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für Freelancer am Anfang ist oft <strong>PKO Bank Polski</strong> die beste Wahl. Diese Bank verlangt keine Aufenthaltskarte zur Kontoeröffnung – ein gültiger <strong>PESEL</strong> (z. B. PESEL UKR für Ukrainer) und Reisepass reichen. Du kannst das Konto online oder in einer Filiale eröffnen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>mBank</strong> bietet ebenfalls Konten für Unternehmer an, verlangt aber meist eine <strong>Aufenthaltskarte</strong>. Wenn du gerade eine JDG angemeldet hast und noch keine Aufenthaltskarte besitzt, ist PKO Bank Polski oft einfacher.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Weitere beliebte Banken für Unternehmer: <strong>Santander</strong>, <strong>ING Bank Śląski</strong>, <strong>Alior Bank</strong>. Prüfe die aktuellen Bedingungen und Anforderungen der jeweiligen Bank, da sie sich ändern können.
              </p>

              <h3 id="jdg-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Finanzielle und Vermögenshaftung
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Haftung mit dem gesamten Vermögen</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Im Unterschied zur <strong>Gesellschaft mit beschränkter Haftung (Spółka z o.o.)</strong> haftet ein <strong>JDG</strong>-Unternehmer für Geschäftsschulden mit <strong>seinem gesamten Privatvermögen</strong>. Dazu gehören <em>Auto, Wohnung und Guthaben auf Privatkonten</em>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Kannst du Geschäftsschulden (<strong>Steuern, ZUS, Verbindlichkeiten gegenüber Kunden</strong>) nicht bezahlen, können Gläubiger auf dein Privatvermögen zugreifen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wie du dich absichern kannst</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du kannst sich auf verschiedene Weise absichern. Berufshaftpflichtversicherung (OC) ist besonders für IT und Marketer wichtig. Ein Ehevertrag oder Gütertrennungsvereinbarung (intercyza) schützt das Vermögen des Partners vor deinen Geschäftsschulden. Statt einer JDG eine Kapitalgesellschaft zu gründen ist möglich, aber aufwendiger und teurer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wichtig zu verstehen</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ein eigenes Unternehmen zu führen bedeutet sowohl Einkommen als auch volles Risiko mit deinem Kapital. Wichtig ist die ordnungsgemäße Führung des Unternehmens und die Erfüllung aller Pflichten, um Probleme zu vermeiden.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> – Details zur Gesamthaftung</li>
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> – offizielles Portal für Unternehmer, Informationen zur Berufshaftpflichtversicherung</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Business Incubators Section */}
          <section id="business-incubators" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Freelancing über Business-Inkubatoren
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Arbeit über Business-Inkubatoren wird oft als Modell mit erheblichen Risiken genannt</strong>. Dieser Abschnitt beschreibt ein Modell, bei dem ein Freelancer arbeitet, ohne rechtlich Unternehmer zu sein – wichtig ist, alle Risiken und Haftung zu verstehen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ein Business-Inkubator ist eine Organisation, die ihre Rechtspersönlichkeit zur Rechnungsstellung gegenüber deinen Kunden bereitstellt. Du wirst „Subjekt“ im Inkubator; er vermittelt zwischen dir und dem Kunden. Besonders beliebt bei Ausländern, die Bürokratie delegieren möchten – mit wichtigen Nuancen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Hauptrisiko – keine ZUS-Beiträge</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei Arbeit über einen Inkubator zahlst du als Unternehmer kein <strong>ZUS</strong>, weil du rechtlich keiner sind. du <strong>bauen keine Rente auf</strong> und <strong>haben kein Recht auf kostenlose Gesundheitsversorgung</strong> in Polen (außer Notfälle). Bei langfristiger Arbeit in Polen kann das zum Problem werden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Haftung und Risiken</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei Arbeit über einen Inkubator hängen du von seiner finanziellen Stabilität ab. Hat der Inkubator Steuerprobleme oder schließt, kann dein Einkommen betroffen sein. Du hast keine direkte Kontrolle über deine Finanzen – das Geld geht zuerst auf das Konto des Inkubators und wird dir dann ausgezahlt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Steuerrisiken</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das Finanzamt kann prüfen, ob deine Tätigkeit über den Inkubator <em>Scheingeschäft</em> ist. Arbeitest du faktisch wie ein Unternehmer (Kundenakquise, Kontrolle des Arbeitsprozesses, eigene Ausrüstung), formal aber über einen Inkubator, kann das als Umgehung von ZUS und Steuern gewertet werden – mit <strong>Geldbußen und Nachzahlung aller Beiträge</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wann es gerechtfertigt sein kann</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Arbeit über einen Inkubator kann nur bei <strong>kurzfristigen Projekten</strong> (3–6 Monate) sinnvoll sein, wenn du noch unsicher bist, ob du langfristig in Polen arbeiten willst. Oder wenn du bereits anderweitig versichert bist (z. B. Arbeitsvertrag mit vom Arbeitgeber gezahlten ZUS-Beiträgen).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Alternative – JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für die meisten Freelancer ist <strong>JDG die sicherere und transparentere Option</strong>. Du hast volle Kontrolle über deine Finanzen, bauen Rente auf, haben Zugang zur Gesundheitsversorgung und sind nicht von Dritten abhängig. JDG erfordert ZUS-Zahlungen, ist aber eine Investition in deine Zukunft und die Legalität deiner Tätigkeit.
              </p>

              <h3 id="business-incubators-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                So funktioniert das Modell „Freelance as a Service“
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                du schließt einen Vertrag mit dem Inkubator (meist zivilrechtlich). Bei Leistungen für einen Kunden stellt der Inkubator die Rechnung auf seinen Namen aus.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das Geld geht auf das Konto des Inkubators; er zieht Steuern und seine Gebühr ab und zahlt dir den Rest als Gehalt. Du erhältst „netto“ ohne JDG-Anmeldung im CEIDG.
              </p>
              <h3 id="business-incubators-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Vorteile für Ausländer (mit Vorsicht)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Theoretisch praktisch, wenn du nicht gut genug Polnisch sprechen, um mit dem Finanzamt zu kommunizieren. Der Inkubator übernimmt Buchhaltung, Meldungen und rechtliche Betreuung.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wichtig zu verstehen:</strong> du hängen vom Inkubator und seiner Kompetenz ab. Macht der Inkubator Buchungsfehler oder zahlt Steuern nicht rechtzeitig, <strong>kann die Haftung bei dir liegen</strong>. Du hast auch keinen direkten Zugang zu deinen Finanzen – alles läuft über den Inkubator.
              </p>
              <h3 id="business-incubators-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Kostenvergleich – Abo vs. Steuern
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Statt komplexer ZUS-Berechnungen zahlst du eine feste Monatsgebühr für Betreuung und Verwaltung. 2026 sind das in der Regel <strong>300–600 PLN pro Monat</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das Modell wirkt am Anfang günstiger als JDG, weil die Kosten nicht vom Umsatz abhängen. Du zahlst nur, wenn du aktive Verträge haben.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bedenke: du baust keine Rente auf und hast kein Recht auf kostenlose Gesundheitsversorgung. du hängst auch von der Stabilität und den Finanzen des Inkubators ab. Bei Problemen des Inkubators können Einkommen und Zugang zu Mitteln betroffen sein.
              </p>
              <h3 id="business-incubators-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Haftung bei Business-Inkubatoren
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei Arbeit über einen Inkubator haften du rechtlich nicht für die Tätigkeit des Inkubators. du hängen aber von seiner finanziellen Stabilität und korrektem Verhalten ab. Buchungsfehler oder verspätete Steuerzahlungen des Inkubators können dein Einkommen und deinen Ruf beeinträchtigen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wichtig: Du hast keine direkte Kontrolle über deine Finanzen. Das Geld geht zuerst auf das Konto des Inkubators und wird dir dann ausgezahlt. Bei finanziellen Problemen oder Schließung des Inkubators kannst du den Zugang zu deinen Mitteln verlieren.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das Finanzamt kann prüfen, ob deine Tätigkeit über den Inkubator Scheingeschäft ist. Arbeitest du faktisch als Unternehmer, formal aber über einen Inkubator, kann das als Umgehung von <strong>ZUS</strong> und Steuern gewertet werden – mit Geldbußen und Nachzahlung aller Beiträge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Im Unterschied zur <strong>JDG</strong>, bei der du volle Kontrolle über Finanzen und Haftung haben, delegieren du bei Arbeit über einen Inkubator diese Kontrolle an Dritte. Das schafft zusätzliche Risiken bei der Wahl deines Arbeitsmodells.
              </p>

              <h3 id="business-incubators-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Aufenthaltserlaubnis und Legalisierung
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Viele Inkubatoren in Polen helfen Ausländern bei der Legalisierung. du bereitest Unterlagenpakete für eine befristete Aufenthaltserlaubnis aus Arbeitsgründen vor.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Da du offiziell beim Inkubator angestellt sind, wird das Verfahren für die Behörde (Urząd) für den Inspektor standardmäßig und nachvollziehbar.
              </p>

              <h3 id="business-incubators-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Grenzen des Modells
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Inkubatoren sind nicht für jeden geeignet. du eignen sich gut für IT, Design und Marketing. Weniger für Warenhandel mit Lagerhaltung und Einfuhrlizenzen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du bist auch durch die internen Regeln des Inkubators zu Ausgaben begrenzt. z. B. ist der Abzug von Kraftstoff oder Büromiete über den Inkubator schwieriger als in der eigenen <strong>JDG</strong>.
              </p>

              <h3 id="business-incubators-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Vorteile für Ausländer ohne Sprach- oder Buchhaltungskenntnisse
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Business-Inkubatoren passen gut für Ausländer, die kein Polnisch sprechen. Die gesamte Kommunikation mit Behörden und Finanzamt läuft über den Inkubator.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du musst weder polnisches Recht verstehen noch Buchhaltung führen. Der Inkubator übernimmt das.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Support ist oft auf Englisch oder Ukrainisch verfügbar. So fällt der Einstieg in Polen leichter.
              </p>

              <h3 id="business-incubators-8" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Kostenvergleich – Monatsabo vs. JDG-Steuern
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Business-Inkubatoren verlangen eine Monatsgebühr (meist 200–500 PLN) plus Prozentsatz vom Einkommen. Das kann teurer sein als eine eigene JDG-Anmeldung.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Rechnet man die Zeit für Buchhaltung und Behördenkontakt ein, kann ein Inkubator für beschäftigte Freelancer jedoch kosteneffektiver sein.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für Einsteiger ist ein Inkubator oft die bessere Wahl, da du sich auf die Arbeit statt auf Formalitäten konzentrieren können.
              </p>

              <h3 id="business-incubators-9" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Legalisierung (Aufenthaltserlaubnis) über einen Inkubator
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Arbeit über einen Inkubator kann Grundlage für eine befristete Aufenthaltserlaubnis sein. Das hängt vom konkreten Inkubator und den Vertragsbedingungen ab.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Manche Inkubatoren helfen bei Aufenthaltsverfahren, andere nicht. Das solltest du vor Vertragsunterzeichnung klären.
              </p>

              <h3 id="business-incubators-10" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Grenzen der Tätigkeitsarten im Inkubator
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Business-Inkubatoren begrenzen oft die Tätigkeitsarten. Üblich sind IT, Design, Marketing und Beratung.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Passt deine Tätigkeit nicht ins Inkubator-Format, ist eine eigene <strong>JDG</strong>-Anmeldung besser.
              </p>
            </div>
          </section>

          {/* Civil Contracts Section */}
          <section id="civil-contracts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Zivilrechtliche Verträge (B2C)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wenn du kein Unternehmen anmelden oder einem Inkubator beitreten möchten, kannst du mit Einzelverträgen arbeiten. In Polen heißen diese „Umowy cywilnoprawne“. Das ist eine legale Möglichkeit, für ein bestimmtes Ergebnis oder geleistete Zeit bezahlt zu werden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dieser Abschnitt beschreibt den einfachsten Weg zur Bezahlung ohne eigene Struktur. Die klassische Option für Freelancer, die direkt mit polnischen Unternehmen arbeiten.
              </p>

              <h3 id="civil-contracts-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa o dzieło: Besonderheiten für kreative Berufe
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das ist ein „Werkvertrag“ – Vertrag für ein Ergebnis. Entwickler, Designer und Marketer nutzen ihn oft, weil er deutliche Steuervorteile bietet.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Hauptvorteil: keine ZUS-Beiträge. Du zahlst nur Einkommensteuer (PIT). Bei Übertragung der Urheberrechte an Code oder Text kannst du die 50 %-Kosten der Einkünfteerzielung (KUP) ansetzen und halbieren so die Steuer.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640160093" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kodeks Cywilny (KC)</a> – Bürgerliches Gesetzbuch, Art. 627–646 regeln Umowa o dzieło.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> – offizielle Hinweise zur zulässigen Steuerminderung bei Urheberrechten.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa zlecenie: Bezahlung für den Ablauf
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das ist ein „Auftragsvertrag“. du verpflichtest dich, bestimmte Aufgaben in einer Frist zu erledigen. Die Steuerlast ist hier höher, da du Renten- und Krankenversicherungsbeiträge zahlen musst.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für Studierende unter 26 ist dieser Vertrag eine „goldene“ Option: Du erhältst den vollen „brutto“-Betrag ohne Steuer und Beiträge.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640160093" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kodeks Cywilny (KC)</a> – Bürgerliches Gesetzbuch, Art. 734–751 regeln Umowa zlecenie.</li>
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> – Regeln zur Sozialversicherung und welche Verträge Beiträge erfordern.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Vergleich „brutto“ und „netto“ für Freelancer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei Preisgesprächen mit dem Kunden ist der Unterschied wichtig. Unternehmen nennen meist den „brutto“-Betrag (vor Steuer).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei Umowa o dzieło erhältst du etwa 88 % netto. Bei Umowa zlecenie (wenn du kein Studierender sind) etwa 70–75 %. Klären du immer, ob der Preis Steuerabzüge einschließt.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> – offizielle Informationen zu Einkünfteerzielungskosten und Brutto-/Nettoberechnung.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Besteuerung von Einkünften aus dem Ausland
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Lebst du in Polen (Steuerinländer – offiziell nach 180 Tagen Aufenthalt) und arbeitest du vertraglich für einen Kunden in den USA oder der Ukraine, musst du diese Einkünfte selbst angeben.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du brauchst kein Unternehmen anzumelden, müssen aber einmal jährlich die PIT-36-Erklärung abgeben. Polen hat Doppelbesteuerungsabkommen mit vielen Ländern – Du zahlst nicht doppelt Steuer.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> – offizielle Informationen zur Abgabe der PIT-36.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> – Doppelbesteuerungsabkommen.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa zlecenie: Steuerregeln und Sozialbeiträge
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Umowa zlecenie (Auftragsvertrag) ist ein Dienstleistungsvertrag. Geeignet für Berater, Übersetzer und Trainer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei diesem Vertrag werden keine Urheberrechte übertragen. du bleibst Eigentümer des Arbeitsergebnisses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Steuer wird ebenfalls an der Quelle einbehalten (18 %). ZUS-Beiträge können anfallen, wenn der Vertrag deine Haupteinkommensquelle ist.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> – Sozialversicherungsregeln für Umowa zlecenie.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Brutto vs. Netto für Freelancer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei zivilrechtlichen Verträgen ist der Unterschied zwischen brutto und netto wichtig.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Brutto ist der Betrag vor Steuer. Netto ist der Betrag nach Steuer, den du tatsächlich erhalten.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Steht im Vertrag brutto, werden 18 % Steuer einbehalten. Steht netto, rechnet der Kunde die Steuer obendrauf.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Besser ist, immer zu vereinbaren, welcher Betrag gemeint ist, um Missverständnisse zu vermeiden.
              </p>

              <h3 id="civil-contracts-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Besteuerung von Auslandseinkünften bei diesen Verträgen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Arbeitest du mit ausländischen Kunden über zivilrechtliche Verträge, hängt die Besteuerung vom Land des Kunden ab.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei EU-Kunden gilt oft die Umkehr der Steuerschuldnerschaft (Reverse Charge). Der Kunde zahlt die Steuer in seinem Land, nicht du.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Bei Kunden außerhalb der EU können die Einkünfte von der polnischen Steuer befreit sein. Du musst sie aber dennoch in der Steuererklärung angeben.
              </p>
            </div>
          </section>

          {/* Laws and Regulations Section */}
          <section id="laws-regulations" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Gesetze, Verordnungen und staatliche Aufsicht
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                „Sauber“ in Polen zu arbeiten heißt nicht nur Steuern zahlen, sondern auch deine Rechte zu kennen. Das polnische Recht trennt klar, wo private Hilfe endet und Geschäftstätigkeit beginnt.
              </p>

              <h3 id="laws-regulations-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Unternehmergesetz (Ustawa o przedsiębiorcach)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das ist die „Verfassung“ für jeden Freelancer mit JDG. Das Gesetz definiert unternehmerische Tätigkeit als etwas, das du systematisch, im eigenen Namen und mit Gewinnerzielungsabsicht ausüben.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Grundsatz: Der Staat muss den Unternehmer unterstützen. Das Gesetz verwirklicht den Grundsatz „Was nicht verboten ist, ist erlaubt“. Es schützt du auch vor unbegründeten Kontrollen.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180000646" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ustawa - Prawo przedsiębiorców</a> – Grundgesetz für Unternehmer.</p>
              </div>

              <h3 id="laws-regulations-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Abgabenordnung (Ordynacja podatkowa)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das ist der Regelungsrahmen für Berechnung und Zahlung von Steuern. Für Freelancer wichtig: der Begriff „Steuerwohnsitz“.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bist du mehr als 183 Tage im Jahr in Polen oder liegt dein „Mittelpunkt der Lebensinteressen“ (Familie, Wohnsitz) hier, wirst du polnischer Steuerinländer. Du musst dann alle Einkünfte dem polnischen Finanzamt (Urząd Skarbowy) melden – auch Einkünfte von Upwork oder Kunden in der Ukraine.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19971370926" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ordynacja podatkowa</a> – Abgabenordnung mit Regeln zum Verhältnis zum Finanzamt; offizieller Text und Aktualisierungen im ISAP-System.</p>
              </div>

              <h3 id="laws-regulations-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Rechte von Freelancern bei Kontrollen (KAS)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Steuerbehörde (<strong>Krajowa Administracja Skarbowa</strong>, <strong>KAS</strong>) kann deine Tätigkeit prüfen. du muss du jedoch gesetzlich vorher benachrichtigen (in der Regel <strong>7 Tage</strong>).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ein Freelancer hat das Recht, bei der Kontrolle anwesend zu sein und Erklärungen abzugeben. Wichtig: Rechnungen und Belege <strong>5 Jahre</strong> aufbewahren – das ist die Verjährungsfrist für Steuersachen in Polen.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> – Informationen zu Rechten bei KAS-Kontrollen und Aufbewahrungsfristen.</p>
              </div>

              <h3 id="laws-regulations-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Datenschutz (RODO / DSGVO)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wenn du E-Mail-Adressen für Newsletter erfassen, eine Kundendatenbank führen oder eine Seite mit Kontaktformular betreiben, unterliegst du <strong>RODO</strong> (der EU-<strong>DSGVO</strong>).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du musst Kunden informieren, wie du ihre Daten nutzt. Für typische Freelancer bedeutet das eine <strong>Datenschutzerklärung</strong> auf der Website und sorgfältigen Umgang mit Kundendokumenten.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm">UODO (Urząd Ochrony Danych Osobowych) – offizielle Seite zu RODO und Hinweise zum Schutz von Kundendaten.</p>
              </div>

              <h3 id="laws-regulations-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Offizielle Hinweise zu Remote-Arbeit
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                2023–2026 hat die polnische Regierung das Arbeitsgesetzbuch und die Regeln zu Remote-Arbeit deutlich aktualisiert. Obwohl Freelancer keine Arbeitnehmer sind, beeinflussen diese Regeln deine Verträge mit großen polnischen Unternehmen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Arbeitgeber haben nun klare Vorgaben, wie sie Leistungen von Remote-Auftragnehmern (von zu Hause oder Coworking) rechtmäßig vergüten können.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gov.pl</a> – offizielle Hinweise zu Remote-Arbeit und Arbeitsgesetzbuch.</p>
              </div>
            </div>
          </section>

          {/* Taxation Systems Section */}
          <section id="taxation-systems" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Steuersysteme im Überblick
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Wahl des Steuersystems ist die zentrale Entscheidung dafür, wie viel Geld bei dir bleibt. 2026 gibt es in Polen für die JDG drei Hauptoptionen.
              </p>

              <h3 id="taxation-systems-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Skala podatkowa (Allgemeines System 12 % / 32 %)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das ist das Standardsystem. Du zahlst <strong>12 %</strong> auf den Nettogewinn bei Einkünften bis <strong>120.000 PLN pro Jahr</strong>. Darüber steigt der Satz auf <strong>32 %</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Hauptvorteil: <strong>Kwota wolna od podatku</strong> (Steuerfreibetrag). Auf die ersten <strong>30.000 PLN</strong> Einkünfte zahlst du keine Einkommensteuer. Du kannst auch Betriebsausgaben (<em>Laptop, Software, Miete</em>) vor der Steuerberechnung abziehen.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm">Podatki.gov.pl: Wybór formy opodatkowania – Ministerielle Übersicht zu Ryczałt, Skala und Liniowy.</p>
              </div>

              <h3 id="taxation-systems-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Podatek liniowy (Pauschalsteuer 19 %)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Hier ist der Satz immer <strong>19 %</strong>, egal ob du 50.000 oder 500.000 PLN verdienst. Auch Ausgaben können abgezogen werden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dieses System lohnt sich nur, wenn dein Einkommen dauerhaft über <strong>120.000–150.000 PLN pro Jahr</strong> liegt. Es gibt keinen Steuerfreibetrag – bei niedrigem Einkommen nachteilig.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> – Informationen zur 19 %-Pauschalsteuer.</p>
              </div>

              <h3 id="taxation-systems-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ryczałt (Pauschale, Umsatzsteuer)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Das bei Freelancern beliebteste System</strong>. Du zahlst einen Prozentsatz des vollen Betrags, den du vom Kunden erhältst. Ausgaben (Miete, Ausrüstung) können nicht abgezogen werden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Sätze für Freelancing 2026</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>12 %</strong> für <em>IT-Spezialisten und Programmierer</em>. <strong>14 %</strong> für <em>Architekten und Ingenieure</em>. <strong>8,5 %</strong> für <em>Marketing, Texter und die meisten Dienstleistungen</em>. <strong>15 %</strong> für <em>Werbeagenturen und bestimmte Vermittlungsarten</em>.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm">Kalkulator B2B 2026 – Einkommensrechner zum Vergleich der Steuersysteme.</p>
              </div>

              <h3 id="taxation-systems-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ryczałt: Sätze im Detail
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ryczałt hat je nach Beruf unterschiedliche Sätze:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>8,5 %</strong> – für freie Berufe (<em>Ärzte, Anwälte, Architekten</em>)</li>
                <li><strong>12 %</strong> – für die meisten Dienstleistungen (<em>IT, Design, Marketing</em>)</li>
                <li><strong>15 %</strong> – für einige Tätigkeitsarten</li>
                <li><strong>17 %</strong> – für Einkünfte über <strong>200.000 PLN pro Jahr</strong></li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Der Satz hängt von deinem <strong>PKD</strong>-Code und der Tätigkeitsart ab. <strong>Wichtig: den richtigen Code wählen, um den niedrigsten Satz zu erhalten</strong>.
              </p>

              <h3 id="taxation-systems-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                So wählst du 2026 das günstigste System
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für die meisten Freelancer ist <strong>ryczałt (12 %)</strong> die beste Wahl. Einfach und ohne aufwendige Kostenbuchhaltung.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Skala podatkowa</strong> lohnt sich, wenn die Ausgaben mehr als <strong>30 % des Einkommens</strong> ausmachen. Dann musst du aber alle Belege sammeln und aufbewahren.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Podatek liniowy</strong> lohnt sich bei sehr hohem Einkommen (über <strong>300.000 PLN</strong>). Für die meisten Freelancer nicht geeignet.
              </p>
            </div>
          </section>

          {/* Ryczalt System Section - kept for compatibility */}
          <section id="ryczalt-system" className="mb-16 scroll-mt-20 hidden">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ryczałt taxation system
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ryczałt (lump sum) is the most popular taxation system for freelancers in Poland. It means paying a fixed percentage of income without having to keep detailed records of expenses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Advantages of ryczałt:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>No need to collect and keep expense receipts</li>
                <li>Simple tax calculation - just a percentage of income</li>
                <li>Less paperwork</li>
                <li>You can calculate tax yourself</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ryczałt rates
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    12% tax
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For most services: IT, design, consulting, marketing. Applies to income up to 200,000 PLN per year. This is the most common rate for freelancers.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    8.5% tax
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For liberal professions: doctors, lawyers, architects, engineers. Also applies to income up to 200,000 PLN per year. This rate is lower because these professions have additional qualification requirements.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    17% tax
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your annual income exceeds 200,000 PLN, the rate automatically increases to 17%. This is still lower than the standard tax scale (18% or 32%).
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  <strong>Wichtig:</strong> Bei Ryczałt zahlst du kein ZUS auf den Gewinn. Du zahlst nur Mindestbeiträge (ca. 1.700 PLN/Monat), unabhängig vom Einkommen. Das macht Ryczałt für gut verdienende Freelancer sehr attraktiv.
                </p>
              </div>
            </div>
          </section>

          {/* ZUS Insurance Section */}
          <section id="zus-insurance" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sozialversicherung und ZUS
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für viele Ausländer ist <strong>ZUS</strong> neu. In Polen ist es die Grundlage des Sozialvertrags zwischen Bürger und Staat: Du zahlst monatlich an den Staat, der dir Gesundheitsversorgung, Rente und soziale Absicherung garantiert.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Was ZUS ist und warum es in Europa wichtig ist</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUS</strong> (Zakład Ubezpieczeń Społecznych) ist die staatliche Versicherungsanstalt, die Beiträge von Arbeitnehmern und Unternehmern erhebt. Damit werden drei Bereiche finanziert: <strong>Rentenversicherung</strong> (für das Alter), <strong>Krankenversicherung</strong> (Zugang zur öffentlichen Gesundheitsversorgung) und <strong>Invaliditäts- und Krankengeldversicherung</strong> (Krankengeld, Unterstützung bei Erwerbsminderung).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                In Europa funktioniert dieses System seit Jahrzehnten. Es stellt sicher, dass du bei Jobverlust oder Krankheit nicht ohne Unterstützung dastehst. Mit deinen Beiträgen investierst du in die Stabilität des Landes, in dem du lebst – und der Staat investiert in dich.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wie viel Du zahlst und wofür</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Als JDG-Unternehmer zahlst du jeden Monat Beiträge, auch bei null Einnahmen. 2026 beträgt der volle <strong>ZUS</strong> etwa <strong>1.600–2.000 PLN pro Monat</strong>. Darin enthalten: Rentenversicherung (ca. 19 % der Bemessungsgrundlage), Krankenversicherung (9 %), Invaliditäts- und Unfallversicherung (ca. 1,5 %).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Warum die Beiträge steigen</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Höhe der <strong>ZUS</strong>-Beiträge hängt vom Mindestlohn in Polen ab. Die Regierung erhöht ihn jährlich (2026 ca. 4.300–4.500 PLN brutto); die Beiträge werden daraus berechnet. Höherer Mindestlohn bedeutet höhere Beiträge – aber auch höhere künftige Rente und bessere Gesundheitsversorgung.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Was die Krankenversicherung bringt</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Mit <strong>Składka zdrowotna</strong> (Krankenbeitrag) erhältst du Zugang zur <strong>öffentlichen Gesundheitsversorgung</strong> in Polen: kostenlose Hausarztbesuche, kostenlose Facharztkonsultationen (oft mit Wartezeiten; schnellere private Termine gegen Bezahlung), kostenlose Untersuchungen mit Überweisung, kostenlose Klinik und Operationen, kostenlose Medikamente für Kinder unter 18 und Ermäßigungen für Erwachsene.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Für Familie und Kinder</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Zahlst du <strong>ZUS</strong>, haben auch deine Familie (Partner und Kinder) Anspruch auf öffentliche Gesundheitsversorgung. Kinder unter 18 erhalten kostenlose Medikamente, Impfungen und Vorsorge. Der Partner kann die Versorgung nutzen, wenn er nicht arbeitet oder keine eigene Versicherung hat.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Was kostenlos und was kostenpflichtig ist</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Kostenlos:</strong> Hausarztbesuche, Facharzt mit Überweisung, Untersuchungen mit Überweisung, Klinik, Operationen, Medikamente für Kinder unter 18, Notfallversorgung. <strong>Kostenpflichtig:</strong> Facharzt ohne Überweisung (Privat), manche kosmetische Behandlungen, Zahnmedizin (teilweise; Basisleistungen können kostenlos sein), Medikamente für Erwachsene (30–50 % Ermäßigung), schnelle Diagnostik ohne Wartezeit.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Rente – Grundlagen</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Rentenhöhe hängt von Beitragsjahren und Einkommen ab. Die Mindestrente in Polen 2026 liegt bei etwa <strong>1.200–1.400 PLN</strong>, die Durchschnittsrente bei <strong>2.500–3.000 PLN</strong>. Die Höchstrente kann <strong>5.000–6.000 PLN</strong> oder mehr erreichen bei langjährigen hohen Beiträgen. Für eine volle Rente brauchst du <strong>mindestens 20–25 Jahre</strong> (Frauen) bzw. <strong>25–30 Jahre</strong> (Männer) Beitragszeit.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUS</strong> ist die staatliche Versicherungsanstalt. Auch bei null Einnahmen in einem Monat musst du als Unternehmer Beiträge zahlen. Für Neugründer gibt es Erleichterungen.
              </p>

              <h3 id="zus-insurance-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ermäßigung „Ulga na start“
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                In den <strong>ersten 6 vollen Monaten</strong> nach JDG-Anmeldung bist du von den Sozialbeiträgen befreit. Du zahlst nur die Krankenversicherung (<strong>Składka zdrowotna</strong>). Das spart am Anfang viel, während du Kunden suchen.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm">ZUS: Ulga na start – offizielle Regeln für die ersten 6 Monate.</p>
              </div>

              <h3 id="zus-insurance-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Mały ZUS Plus
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Nach Ende von „Ulga na start“ kannst du in einen <strong>24-Monats</strong>-Vergünstigungszeitraum wechseln. Du zahlst Beiträge auf eine reduzierte Bemessungsgrundlage (Mindestlohn). Das ist immer noch deutlich weniger als der volle ZUS etablierter Unternehmer.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> – Informationen zu Mały ZUS Plus und Vergünstigungszeiträumen.</p>
              </div>

              <h3 id="zus-insurance-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Regelbeiträge und „Chorobowe“
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Der volle <strong>ZUS</strong> 2026 ist ein spürbarer Betrag (ca. <strong>1.600–2.000 PLN</strong> je nach Berechnung). Freiwillig kannst du auch den Krankengeldbeitrag (<strong>Chorobowe</strong>) zahlen. Das berechtigt zu Krankengeld – wichtig für selbstständige Freelancer.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> – Informationen zu Regelbeiträgen und freiwilliger Chorobowe-Versicherung.</p>
              </div>
            </div>
          </section>

          {/* VAT Section */}
          <section id="vat" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Umsatzsteuer im Freelancer-Alltag
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>VAT</strong> (Umsatzsteuer) versuchen die meisten Freelancer zunächst zu vermeiden; manchmal wird sie aber Pflicht.
              </p>

              <h3 id="vat-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                200.000-PLN-Grenze
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du bist von <strong>VAT</strong> befreit, bis dein Jahresumsatz <strong>200.000 PLN</strong> überschreitet. Sobald du dich diesem Betrag näherst, musst du dich als Umsatzsteuerpflichtiger anmelden (Formular <strong>VAT-R</strong>).
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> – Informationen zur 200.000-PLN-Grenze und VAT-R-Anmeldung.</p>
              </div>

              <h3 id="vat-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                VAT-EU-Anmeldung
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wenn du mit Kunden in anderen EU-Ländern arbeiten willst (z. B. für ein deutsches Unternehmen), brauchst du eine <strong>VAT-EU</strong>-Nummer. Dann kannst du Rechnungen ohne polnische VAT ausstellen, weil der Kunde die Steuer in seinem Land zahlt (<strong>Reverse Charge</strong>).
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> – Informationen zur VAT-EU-Anmeldung und Reverse Charge.</p>
              </div>
            </div>
          </section>

          {/* Accounting and Finance Section */}
          <section id="accounting-finance" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Buchhaltung und Finanzhygiene
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dieser Abschnitt hilft Ihnen, den Freelancer-Alltag so zu organisieren, dass das Finanzamt keine zusätzlichen Fragen hat. Es geht um praktisches Finanzmanagement und Prozessautomatisierung.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Geschäftstätigkeit in Polen erfordert Disziplin bei Unterlagen. Jede Ausgabe braucht eine Rechnung, jede Einnahme muss in den vorgesehenen Registern erfasst werden.
              </p>

              <h3 id="accounting-finance-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Führen der KPiR (Einnahmen- und Ausgabenbuch)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Hast du das allgemeine System oder die Pauschalsteuer gewählt, ist dein Hauptdokument die <strong>KPiR</strong>. Das ist ein detailliertes Journal, in dem du jede Einnahme und jede Betriebsausgabe erfasst.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei <strong>Ryczałt</strong> ist es einfacher: Du führst nur ein Einnahmenregister (<strong>Ewidencja przychodów</strong>). Ausgaben spielen keine Rolle, da sie die Steuer nicht beeinflussen.
              </p>

              <h3 id="accounting-finance-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                KSeF-System 2026
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>2026</strong> führt Polen das verpflichtende nationale E-Rechnungssystem (<strong>KSeF</strong>) ein. Du kannst dem Kunden dann nicht mehr einfach eine PDF-Rechnung schicken.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Rechnungen müssen im offiziellen Format über eine dafür vorgesehene Plattform erstellt werden. Das Finanzamt sieht alle Vorgänge in Echtzeit. Für Freelancer bedeutet das weniger Papierkram, aber den Einsatz moderner Software.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm">KSeF: offizielle Informationen – alles zu verpflichtenden E-Rechnungen.</p>
              </div>

              <h3 id="accounting-finance-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ausgaben, die die Steuer mindern
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Erlaubt dein Steuersystem den Abzug von Ausgaben, kannst du viel sparen. Abzugsfähig sind u. a. Laptop, Monitor, Peripherie, Büromiete oder ein Teil der Wohnkosten (wenn die Firma dort gemeldet ist), Fortbildung und Kurse, Telefon und Internet.
              </p>

              <h3 id="accounting-finance-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Wo findet man einen Buchhalter?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ein Freelancer in Polen muss keinen Buchhalter anstellen. Die meisten nutzen ein <strong>Biuro rachunkowe</strong> (Buchhaltungsbüro). Kosten für JDG typischerweise <strong>200–450 PLN pro Monat</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Alternative: Online-Buchhaltung (z. B. inFakt oder wFirma). Günstiger; du trägst die Daten selbst ein, das System erstellt die Meldungen.
              </p>

              <h3 id="accounting-finance-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                E-Rechnung und KSeF 2026
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                KSeF (Krajowy System e-Faktur) ist das nationale E-Rechnungssystem. Ab 2026 wird es für viele Unternehmer verpflichtend.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das System übermittelt Rechnungen automatisch an das Finanzamt. Eine gesonderte Einreichung ist nicht nötig.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die meisten Buchhaltungsprogramme (u. a. inFakt) sind mit KSeF integriert. Rechnungen werden automatisch über das System versendet.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für KSeF musst du sich im System registrieren und die Software einrichten. Ein Buchhalter kann bei der Einrichtung helfen.
              </p>

              <h3 id="accounting-finance-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Steuermindernde Ausgaben – Miete, Ausrüstung, Fortbildung, Auto
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei Skala podatkowa oder Podatek liniowy kannst du Ausgaben abziehen, die die Steuer mindern: u. a. Büromiete, Ausrüstung, Fortbildung und Autokosten.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wichtig: Alle Belege und Rechnungen für Ausgaben aufbewahren. Ohne Unterlagen ist kein Abzug möglich.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ausrüstungskosten können sofort abgezogen oder über mehrere Jahre abgeschrieben werden. Fortbildungskosten zählen, wenn sie mit deiner Tätigkeit zusammenhängen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Autokosten sind anteilig abzugsfähig, je nach betrieblicher und privater Nutzung.
              </p>

              <h3 id="accounting-finance-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Professionelle Hilfe – Biuro rachunkowe vs. Online-Dienste
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Biuro rachunkowe (Buchhaltungsbüro) ist die klassische Variante. du treffen den Buchhalter persönlich, er übernimmt alle Unterlagen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Online-Dienste (z. B. inFakt) ermöglichen Buchhaltung in Eigenregie mit Buchhalter-Support. Oft bequemer und günstiger.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für die meisten Freelancer passen Online-Dienste besser. du behalten die Finanzen im Blick und erhalten schnell Rat.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ein klassisches Büro lohnt sich bei komplexen Fällen oder wenn du sich gar nicht mit Buchhaltung befassen wollen – ist aber teurer.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Wir empfehlen den Einstieg mit dem Online-Dienst inFakt – mit Oberfläche und Support auf Englisch und Ukrainisch.
              </p>
            </div>
          </section>

          {/* Technical and Legal Aspects Section */}
          <section id="technical-legal" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Weitere technische und rechtliche Aspekte
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Moderne Freelance-Arbeit setzt auf digitale Werkzeuge. Ohne sie wäre der Umgang mit polnischen Behörden langsam und mühsam.
              </p>

              <h3 id="technical-legal-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Profil Zaufany und mObywatel
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das sind deine digitalen Schlüssel. Profil Zaufany (Vertrauensprofil) ermöglicht das Unterzeichnen offizieller Dokumente, die Abgabe von Erklärungen und Änderungen im CEIDG-Register online.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die App mObywatel ersetzt Reisepass und Führerschein auf dem Handy. du ist auch mit Geschäftsleistungen verknüpft – z. B. zur schnellen Identitätsbestätigung bei der Kontoeröffnung.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm">mObywatel.gov.pl – So funktioniert Polens zentrale digitale App.</p>
              </div>

              <h3 id="technical-legal-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Qualifizierte elektronische Signatur (Podpis kwalifikowany)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei manchen komplexen Verträgen (besonders international) reicht Profil Zaufany nicht. Eine qualifizierte Signatur hat dieselbe Rechtswirkung wie handschriftlich. Kostenpflichtig, aber für Freelancer mit Großkunden oft nötig.
              </p>

              <h3 id="technical-legal-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Arbeit mit ausländischen Plattformen (Upwork, Fiverr)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei Einnahmen über Vermittlungsplattformen gelten Währungsregeln: USD oder EUR müssen zum NBP-Kurs des Tages vor dem Zahlungseingang in Złoty umgerechnet werden.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm">NBP: Wechselkursübersicht – für die korrekte Berechnung der Steuer auf Auslandseinkünfte.</p>
              </div>
            </div>
          </section>

          {/* Conclusions Section */}
          <section id="conclusions" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fazit – Strategie für erfolgreiches Freelancing in Polen
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Freelancing in Polen 2026 ist ein transparentes und berechenbares System. Wichtig ist, die Legalisierung nicht zu scheuen und die passende Besteuerungsform zu wählen.
              </p>

              <h3 id="conclusions-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                deine Start-Checkliste
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>1. PESEL besorgen oder rechtlichen Status prüfen</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Der erste Schritt: sicherstellen, dass du rechtmäßig in Polen wohnst. PESEL (z. B. PESEL UKR für Ukrainer) oder eine Aufenthaltskarte berechtigen zur Geschäftstätigkeit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>2. Profil Zaufany einrichten</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Profil Zaufany ist dein digitaler Schlüssel zu allen Behördendiensten. Ohne ihn ist eine Online-Anmeldung des Unternehmens nicht möglich.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>3. Form wählen – Unangemeldete Tätigkeit oder JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Tätigkeitsform hängt vom Einkommen ab. Unangemeldete Tätigkeit bis etwa 3.500–3.600 PLN/Monat. JDG bei höherem Einkommen oder vollem Unternehmerstatus.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>4. PKD-Codes und Steuersystem wählen (Ryczałt oder Skala)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Der richtige PKD-Code und das passende Steuersystem können tausende Złoty sparen. Rechner nutzen oder einen Buchhalter fragen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>5. Anmelden und erste Rechnungen ausstellen</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Nach der Anmeldung kannst du arbeiten und Rechnungen schreiben. Innerhalb von 7 Tagen nach Erhalt der NIP bei ZUS anmelden.
              </p>

              <h3 id="conclusions-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Strategie für erfolgreiches Freelancing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Planung</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Finanzen im Voraus planen. Alle Kosten einrechnen: Steuern, ZUS, Buchhaltung. So vermeiden du böse Überraschungen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Richtiges System wählen</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Wahl des Steuersystems ist entscheidend. Rechner nutzen oder einen Buchhalter um Rat fragen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Buchführung von Anfang an</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Von Tag eins an Aufzeichnungen führen. Das hilft bei Kontrollen und bei der korrekten Steuerberechnung.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Professionelle Hilfe</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Nicht zögern, professionelle Hilfe in Anspruch zu nehmen. Ein Buchhalter oder Berater spart viel Zeit und Geld.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Rechtstreue</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Alle Gesetze und Vorschriften einhalten. So vermeiden du Bußgelder und Ärger mit Behörden.
              </p>
            </div>
          </section>

          {/* Employment vs Self-Employed Section */}
          <section id="employment-vs-selfemployed" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Selbstständigkeit vs. Umowa o pracę – was ist besser?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das ist für viele Freelancer die zentrale Frage. Offizielle Quellen betonen oft den Unterschied beim „Sozialpaket“. Wichtig ist, Vor- und Nachteile beider Optionen zu kennen.
              </p>

              <h3 id="employment-vs-selfemployed-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Urlaub und Krankheit
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Bei JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei JDG hast du keinen bezahlten Urlaub (20–26 Tage) wie beim Arbeitsvertrag. du verdienen nur, wenn Du arbeitest. Ohne Arbeit kein Gehalt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Urlaub ist möglich, aber unbezahlt. Für Tage ohne Arbeit gibt es keine Bezahlung.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Bei Umowa o pracę</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Beim Arbeitsvertrag hast du Anspruch auf bezahlten Urlaub (20–26 Tage pro Jahr) und auf bezahltes Krankengeld.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das heißt: Auch bei Krankheit oder Urlaub erhältst du dein Gehalt.
              </p>

              <h3 id="employment-vs-selfemployed-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Kündigungsschutz
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Kündigung eines Arbeitsvertrags</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Kündigung eines Arbeitsvertrags braucht Zeit (2 Wochen bis 3 Monate je nach Betriebszugehörigkeit). Der Arbeitgeber kann du nicht einfach ohne Grund entlassen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei einer Kündigung muss der Arbeitgeber das Verfahren einhalten und ggf. Abfindung zahlen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Beendigung eines B2B-Vertrags</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ein B2B-Vertrag kann bei entsprechender Vereinbarung sofort gekündigt werden. Oft gibt es eine Kündigungsfrist (z. B. 14 Tage), je nach Vertrag.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Der Kunde kann die Zusammenarbeit also ohne zusätzliche Kosten beenden, wenn der Vertrag es vorsieht.
              </p>

              <h3 id="employment-vs-selfemployed-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Nettoeinkommen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Hauptargument für Selbstständigkeit</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Der Hauptvorteil der Selbstständigkeit ist ein deutlich höherer „Netto“-Betrag bei gleichen Kosten für den Auftraggeber.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Beispielrechnung</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Der Auftraggeber ist bereit, 10.000 PLN pro Monat zu zahlen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Bei Umowa o pracę</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Arbeitgeberkosten 10.000 PLN (brutto). dein Nettoeinkommen etwa 7.000 PLN (nach Steuer und ZUS).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Bei JDG (Ryczałt 12 %)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Auftraggeberkosten 10.000 PLN (brutto). dein Nettoeinkommen etwa 8.800 PLN (nach 12 % Steuer).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Differenz beträgt etwa 1.800 PLN pro Monat bzw. 21.600 PLN pro Jahr.
              </p>
            </div>
          </section>

          {/* Legal Liability Section */}
          <section id="legal-liability" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Haftung von Freelancern – Vollhaftung mit Privatvermögen
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dieser Abschnitt wird oft übersprungen, ist aber für deine Absicherung wichtig. Wer die Haftung kennt, kann Vermögen schützen und schwerwiegende Probleme vermeiden.
              </p>

              <h3 id="legal-liability-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Vollhaftung mit Privatvermögen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Anders als bei einer Sp. z o.o.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Anders als bei einer Spółka z o.o. haftet ein JDG-Unternehmer mit seinem gesamten Privatvermögen für Geschäftsschulden – inklusive Auto, Wohnung und Guthaben auf Privatkonten.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das heißt: Kannst du Geschäftsschulden nicht bezahlen, können Gläubiger auf dein Privatvermögen zugreifen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wie du dich schützen kannst</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Du kannst sich auf mehrere Weisen absichern: Die Berufshaftpflichtversicherung (OC) ist besonders für IT und Vermarkter wichtig. Statt JDG eine Sp. z o.o. zu gründen ist möglich, aber aufwendiger. Ein Ehevertrag mit Gütertrennung (intercyza) hilft ebenfalls.
              </p>

              <h3 id="legal-liability-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Berufshaftpflichtversicherung (OC)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Was ist die OC?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Berufshaftpflichtversicherung (OC) deckt Schäden ab, die beim Kunden durch deine Fehler entstehen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wann sie wichtig ist</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die OC ist besonders wichtig für IT-Spezialisten (Programmfehler können großen Schaden anrichten), Vermarkter (falsche Maßnahmen können die Website des Kunden schädigen), Berater (falsche Ratschläge können zu Verlusten führen) und Designer (Urheberrechtsverletzungen).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Kosten der OC</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Kosten hängen von Tätigkeitsart und Deckungssumme ab. Üblich sind 500–2.000 PLN pro Jahr.
              </p>
            </div>
          </section>

          {/* B2B Contracts Section */}
          <section id="b2b-contracts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              B2B-Verträge im Detail (Business-to-Business)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Freelancer verwechseln oft einen Dienstleistungsvertrag mit einem Arbeitsvertrag. Der Unterschied ist wichtig, um Probleme mit dem Finanzamt zu vermeiden und das Verhältnis zum Auftraggeber korrekt zu gestalten.
              </p>

              <h3 id="b2b-contracts-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Anzeichen eines Arbeitsverhältnisses
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Wann das Finanzamt deinen B2B-Vertrag umqualifizieren kann</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das Finanzamt kann deinen B2B-Vertrag als Arbeitsvertrag einstufen, wenn du beim Auftraggeber vor Ort unter dessen direkter Weisung und nach dessen Zeiten arbeiten.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Anzeichen eines Arbeitsverhältnisses</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dazu zählen: Arbeit beim Auftraggeber vor Ort, feste Zeiten (z. B. 9–17 Uhr), Weisungsgebundenheit, Nutzung von dessen Geräten, festes Monatsgehalt und keine weiteren Auftraggeber.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Folgen der Umqualifizierung</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei Umqualifizierung drohen dem Auftraggeber Bußgelder; Du kannst ZUS-Vergünstigungen und den Ryczałt-Satz (in bestimmten Kategorien) verlieren.
              </p>

              <h3 id="b2b-contracts-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Arbeit für den früheren Arbeitgeber
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Kann ich für denselben Arbeitgeber arbeiten wie zuvor mit Arbeitsvertrag?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ja, aber Du kannst ZUS-Vergünstigungen und den Ryczałt-Satz (in bestimmten Kategorien) verlieren, wenn die Leistungen dieselben sind wie früher als Arbeitnehmer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Bedingungen</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Zwischen Kündigung und Abschluss des B2B-Vertrags müssen mindestens 6 Monate liegen. Die Leistungen sollten nicht identisch mit der früheren Tätigkeit sein. du sollten parallel für andere Auftraggeber tätig sein.
              </p>
            </div>
          </section>

          {/* Reporting Requirements Section */}
          <section id="reporting-requirements" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Meldepflichten und behördliche Prüfungen
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Zu wissen, was Behörden prüfen, hilft Ihnen, sich auf Kontrollen vorzubereiten und Probleme zu vermeiden.
              </p>

              <h3 id="reporting-requirements-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Statistiknummer (REGON)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Obwohl sie automatisch vergeben wird</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Obwohl die REGON-Nummer automatisch vergeben wird, ist es wichtig zu wissen, dass dein Unternehmen für die Statistikmeldungen erfasst wird.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Was ist REGON?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                REGON (Rejestr Gospodarki Narodowej) ist das zentrale Statistikregister. Es wird für Statistikmeldungen und die Zuordnung von Unternehmen genutzt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die REGON-Nummer wird automatisch bei der Anmeldung im CEIDG vergeben. Du musst nichts weiter tun.
              </p>

              <h3 id="reporting-requirements-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                ZUS-Kontrollen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Sozialversicherung kann prüfen</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Die Sozialversicherung kann prüfen, ob deine Selbstständigkeit nur vorgeschoben ist (z. B. wenn du ein Unternehmen verlassen und am nächsten Tag einen B2B-Vertrag mit derselben Firma schließen).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Folgen einer Scheinselbstständigkeit</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                In dem Fall kannst du „Ulga na start“ verlieren, eine ZUS-Nachzahlung erhalten und den Ryczałt-Satz (in bestimmten Kategorien) verlieren.
              </p>

              <h3 id="reporting-requirements-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Finanzamt-Kontrollen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Was das Finanzamt prüft</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Das Finanzamt kann Rechnungen, Kontoauszüge, Auftraggeberverträge, Einnahmen- und Ausgabenaufzeichnungen sowie die korrekte Steuerberechnung prüfen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Deine Rechte bei einer Prüfung</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bei einer Prüfung hast du das Recht auf Angabe des Prüfungsgrundes, auf einen Anwalt, auf einen Dolmetscher (wenn du kein Polnisch sprechen) und auf Kopien aller Unterlagen.
              </p>
            </div>
          </section>

          {/* How to Start as Freelancer Section */}
          <section id="how-to-start" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              So wirst du Freelancer – Tipps für Einsteiger
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Eine Freelance-Karriere zu starten kann schwierig wirken – mit der richtigen Strategie und Vorbereitung kannst du aber schnell erfolgreich selbstständig werden.
              </p>

              <h3 id="how-to-start-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Wie wählst du Beruf und Richtung?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Der erste Schritt zum erfolgreichen Freelancing ist eine <strong>ehrliche Einschätzung deiner Fähigkeiten und Interessen</strong>. Fragen du sich:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li>Was kann ich gut?</li>
                <li>Was mache ich gern?</li>
                <li>Welche Fähigkeiten kann ich schnell verbessern?</li>
                <li>Welcher Markt hat Nachfrage nach meinen Leistungen?</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Bist du unsicher, startest du mit <strong>einfachen Berufen</strong>: Texter, Übersetzer, Datenerfassung, Bildbearbeitung. So sammelst du Erfahrung und findest heraus, was zu dir passt.
              </p>

              <h3 id="how-to-start-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Womit anfangen? Berufe für Einsteiger
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Berufe, die sich für Freelance-Einsteiger eignen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Texter</strong> – wenn du gut schreiben, kannst du mit einfachen Texten für Websites und Social Media starten</li>
                <li><strong>Übersetzer</strong> – bei zwei fließenden Sprachen ist Übersetzen stabiles Einkommen</li>
                <li><strong>Virtueller Assistent</strong> – Admin, E-Mails, Terminplanung</li>
                <li><strong>Grafikdesigner</strong> – mit Grundkenntnissen in Photoshop oder Figma</li>
                <li><strong>Datenerfassung</strong> – einfache Arbeit ohne besondere Qualifikation</li>
                <li><strong>Online-Nachhilfe</strong> – als Experte kannst du andere unterrichten</li>
                <li><strong>SMM-Manager</strong> – Social Media für Unternehmen</li>
              </ul>

              <h3 id="how-to-start-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Wo suchen – Plattformen und Wege zu Kunden
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Wege zu deinen ersten Kunden:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Freelance-Plattformen</strong> (Upwork, Fiverr, Freelancer.com) – gut für Einsteiger, aber hoher Wettbewerb</li>
                <li><strong>Soziale Netzwerke</strong> (LinkedIn, Facebook-Gruppen, Telegram) – direkte Kundenakquise</li>
                <li><strong>Polnische Plattformen</strong> (NoFluffJobs, JustJoinIT) – für IT-Spezialisten</li>
                <li><strong>Persönliches Netzwerk</strong> – Freunde und Kontakte über deine Leistungen informieren</li>
                <li><strong>Eigene Website oder Portfolio</strong> – Profil auf Behance, Dribbble oder eigener Seite</li>
              </ul>

              <h3 id="how-to-start-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Lernen – Kurse und Ressourcen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Für einen erfolgreichen Freelance-Start ist kontinuierliche Weiterbildung wichtig. Verschiedene Lernressourcen:
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Kostenlose Kurse und Ressourcen
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>YouTube</strong> – kostenlose Tutorials zu jedem Thema</li>
                <li><strong>Coursera</strong> – kostenlose Uni-Kurse (Zertifikat gegen Gebühr)</li>
                <li><strong>edX</strong> – kostenlose Kurse führender Universitäten</li>
                <li><strong>Khan Academy</strong> – kostenlose Bildung in vielen Fächern</li>
                <li><strong>Codecademy</strong> – kostenlose Programmierkurse</li>
                <li><strong>Udemy</strong> – oft kostenlose Kurse in Aktionen</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Bezahlte Kurse (Mittelklasse)
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Udemy</strong> – Kurse von <strong>50 bis 200 PLN</strong>, oft mit Rabatt</li>
                <li><strong>Skillshare</strong> – Abo ab <strong>100 PLN/Monat</strong>, unbegrenzter Zugang</li>
                <li><strong>Pluralsight</strong> – Abo ab <strong>150 PLN/Monat</strong>, Fokus Technik</li>
                <li><strong>LinkedIn Learning</strong> – Abo ab <strong>120 PLN/Monat</strong></li>
                <li><strong>Domestika</strong> – Design- und Kreativkurse von <strong>80 bis 300 PLN</strong></li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Premium-Kurse und Bootcamps
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Coding-Bootcamps</strong> – von <strong>5.000 bis 20.000 PLN</strong>, intensive Programme mit Jobgarantie</li>
                <li><strong>Professionelle Zertifizierungen</strong> (Google, Microsoft, Adobe) – von <strong>500 bis 2.000 PLN</strong></li>
                <li><strong>Online-Schulen</strong> (Thinkful, General Assembly) – von <strong>10.000 bis 30.000 PLN</strong></li>
                <li><strong>Einzelmentoring</strong> – von <strong>200 bis 500 PLN/Stunde</strong></li>
              </ul>

              <h3 id="how-to-start-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Kurssprachen – Verfügbarkeitstabelle
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Sprache</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Kostenlose Kurse</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Bezahlte Kurse</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Premium-Kurse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3"><strong>Englisch</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Sehr viele (Coursera, edX, YouTube)</td>
                      <td className="border border-gray-300 px-4 py-3">Größte Auswahl (Udemy, Skillshare)</td>
                      <td className="border border-gray-300 px-4 py-3">Alle Premium-Plattformen</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3"><strong>Polnisch</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Begrenzte Auswahl (YouTube, kostenlose Webinare)</td>
                      <td className="border border-gray-300 px-4 py-3">Mittlere Auswahl (Udemy, polnische Plattformen)</td>
                      <td className="border border-gray-300 px-4 py-3">Polnische Bootcamps und Schulen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3"><strong>Ukrainisch</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Begrenzte Auswahl (YouTube, Prometheus)</td>
                      <td className="border border-gray-300 px-4 py-3">Kleine Auswahl (ukrainische Plattformen)</td>
                      <td className="border border-gray-300 px-4 py-3">Ukrainische Online-Schulen</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3"><strong>Deutsch</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Mittlere Auswahl (deutsche Universitäten)</td>
                      <td className="border border-gray-300 px-4 py-3">Gute Auswahl (deutsche Plattformen)</td>
                      <td className="border border-gray-300 px-4 py-3">Deutsche Bootcamps</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 id="how-to-start-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Praktische Tipps für den Einstieg
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Klein anfangen</strong> – keine Angst vor kleinen Projekten; sie bringen Erfahrung und Bewertungen</li>
                <li><strong>Portfolio aufbauen</strong> – auch ohne kommerzielle Projekte ein paar Arbeiten erstellen, die deine Fähigkeiten zeigen</li>
                <li><strong>Realistische Sätze setzen</strong> – am Anfang besser etwas günstiger arbeiten, um Erfahrung zu sammeln</li>
                <li><strong>Dranbleiben</strong> – der Markt ändert sich; deine Fähigkeiten sollten du regelmäßig aktualisieren</li>
                <li><strong>Professionell bleiben</strong> – Fristen einhalten, höflich kommunizieren, Versprechen halten</li>
                <li><strong>Arbeiten aufbewahren</strong> – alles wird Teil deines Portfolios</li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <p className="text-gray-700 font-semibold mb-2">Offizielle Quellen</p>
                <p className="text-gray-700 text-sm"><a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> – Informationen zu Unternehmensförderung und Schulungsprogrammen für Unternehmer.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              FAQ – Fragen und Antworten
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Dieser Abschnitt enthält Antworten auf die häufigsten Freelancer-Fragen zum Arbeiten in Polen. Alle Antworten in verständlicher Sprache und auf Basis der geltenden Rechtslage 2026.
              </p>

              <h3 id="faq-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Grundlegende Anmeldungsfragen
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Muss ich eine JDG anmelden, wenn ich nur mit ausländischen Kunden arbeite?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, wenn du die Grenze der unangemeldeten Tätigkeit (3.500–3.600 PLN/Monat) überschreiten. Auch bei Kunden im Ausland musst du als Steuerinländer Einkünfte in Polen angeben.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Wie lange dauert die JDG-Anmeldung?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Die Anmeldung über CEIDG dauert 7–10 Werktage. Die Vorbereitung der Unterlagen und der Aufbau können zusätzlich Zeit kosten.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Kann ich eine JDG aus der Ferne anmelden?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, die Anmeldung erfolgt online über CEIDG. Du benötigst nur Profil Zaufany zur Unterzeichnung des Antrags.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Brauche ich ein virtuelles Büro für die Anmeldung?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nein, ein virtuelles Büro ist nicht Pflicht. Du kannst deine Wohnadresse nutzen. Ein virtuelles Büro ist aber praktisch, wenn deine Adresse nicht im öffentlichen Register stehen soll.
                  </p>
                </div>
              </div>

              <h3 id="faq-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Steuerfragen
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Welches Steuersystem ist für Freelancer am besten?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Das hängt von Einkommen und Ausgaben ab. Für die meisten Freelancer mit geringen Ausgaben ist Ryczałt 12 % oder 8,5 % am günstigsten. Bei hohen Ausgaben lohnt sich Skala podatkowa mehr.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Kann ich mein Steuersystem wechseln?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, einmal jährlich durch Antrag bis zum 20. Januar.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Wie viel Steuer zahle ich bei Ryczałt 12 %?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Du zahlst 12 % auf alle Einnahmen ohne Abzug von Ausgaben. Beispiel: Bei 100.000 PLN Einnahmen pro Jahr sind das 12.000 PLN Steuer.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Kann ich bei Ryczałt Ausgaben abziehen?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nein, bei Ryczałt werden keine Ausgaben abgezogen. Du zahlst einen Prozentsatz der Gesamteinnahmen.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Was ist Kwota wolna od podatku?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Das ist der Steuerfreibetrag. 2026 etwa 30.000 PLN. Die ersten 30.000 PLN Einkünfte werden bei Skala podatkowa nicht besteuert.
                  </p>
                </div>
              </div>

              <h3 id="faq-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                ZUS-Fragen
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Wie viel ZUS zahle ich am Anfang?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In den ersten 6 Monaten bist du dank „Ulga na start“ von Sozialbeiträgen befreit. Du zahlst nur die Krankenversicherung (ca. 400–500 PLN/Monat).
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Was ist Mały ZUS Plus?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ein Vergünstigungszeitraum von 24 Monaten nach Ende von „Ulga na start“. Du zahlst Beiträge auf eine reduzierte Bemessungsgrundlage – deutlich weniger als voller ZUS.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Wie viel kostet der volle ZUS?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Volles ZUS 2026 etwa 1.600–2.000 PLN/Monat. Abhängig von Berechnung und Zusatzbeiträgen.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Muss ich ZUS zahlen, wenn ich nichts verdient habe?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, als angemeldeter Unternehmer musst du auch bei null Einnahmen ZUS zahlen. „Ulga na start“ und „Mały ZUS Plus“ mindern die Kosten am Anfang.
                  </p>
                </div>
              </div>

              <h3 id="faq-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                VAT-Fragen
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Wann muss ich mich als Umsatzsteuerpflichtiger anmelden?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Wenn dein Jahresumsatz 200.000 PLN überschreitet.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Was ist VAT-EU?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    VAT-EU ist eine Nummer für die Arbeit mit Kunden in EU-Ländern. du ermöglicht die Anwendung von Reverse Charge und vermeidet doppelte VAT-Zahlung.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Brauchen Freelancer eine Kasse?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In der Regel nein. Die meisten Freelancer nutzen E-Rechnungen über KSeF, die eine Kasse ersetzen.
                  </p>
                </div>
              </div>

              <h3 id="faq-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Buchhaltungsfragen
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Brauche ich KPiR bei Ryczałt?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nein, bei Ryczałt ist KPiR nicht erforderlich. Nur bei Skala podatkowa und Podatek liniowy.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Was ist KSeF?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    KSeF (Krajowy System e-Faktur) ist das nationale E-Rechnungssystem. Es wird schrittweise für alle Unternehmer verpflichtend.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Kann ich die Buchhaltung selbst führen?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, kann aber aufwendig sein, besonders bei Skala oder Liniowy. Bei Ryczałt einfacher, weil KPiR nicht nötig ist.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Was kostet ein Buchhalter?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Abhängig vom Leistungsumfang. Online-Dienste 150–400 PLN/Monat, klassische Büros 300–600 PLN/Monat.
                  </p>
                </div>
              </div>

              <h3 id="faq-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Internationale Einkünfte
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Muss ich Einkünfte von Upwork/Fiverr versteuern?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, alle Einkünfte von internationalen Plattformen müssen in der jährlichen PIT-36-Erklärung angegeben werden.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Wie gebe ich Einkünfte in Dollar an?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Einkünfte werden zum NBP-Kurs am Tag des Zuflusses umgerechnet. Der umgerechnete Betrag wird in der PIT-36-Erklärung eingetragen.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Zahle ich doppelt Steuern?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nein, dank Doppelbesteuerungsabkommen zahlst du nicht doppelt. Die Steuer wird im Land deines Steuerwohnsitzes entrichtet.
                  </p>
                </div>
              </div>

              <h3 id="faq-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Legalisation / Aufenthalt
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Kann ich aufgrund einer JDG eine Aufenthaltserlaubnis bekommen?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, Du kannst eine befristete Aufenthaltserlaubnis wegen Ausübung einer wirtschaftlichen Tätigkeit beantragen. Dafür sind stabile Einkünfte und ein wirtschaftlicher Nutzen für Polen erforderlich.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Wie viel muss ich für eine Aufenthaltserlaubnis verdienen?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In der Regel mindestens 3.000–5.000 PLN pro Monat und mindestens 6–12 Monate nachweisbare Tätigkeit.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Helfen Inkubatoren bei der Legalisation?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Einige Inkubatoren helfen bei der Vorbereitung der Unterlagen für die Aufenthaltserlaubnis. Nicht alle bieten das an – fragen du vorher nach.
                  </p>
                </div>
              </div>

              <h3 id="faq-8" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                B2B-Verträge und Arbeitsverhältnis
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Kann ich für denselben Arbeitgeber arbeiten wie zuvor mit Arbeitsvertrag?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, aber Du kannst ZUS-Vergünstigungen und den Ryczałt-Satz (in bestimmten Kategorien) verlieren, wenn die Leistungen dieselben sind wie früher als Arbeitnehmer. Zwischen Kündigung und Abschluss des B2B-Vertrags müssen mindestens 6 Monate liegen.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Was unterscheidet Selbstständigkeit vom Arbeitsvertrag?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Selbstständigkeit bringt mehr Nettoeinkommen, aber keinen bezahlten Urlaub oder Lohnfortzahlung im Krankheitsfall. Der Arbeitsvertrag bietet Kündigungsschutz und Sozialleistungen, aber weniger Nettoeinkommen.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Kann das Finanzamt meinen B2B-Vertrag als Arbeitsverhältnis einstufen?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, wenn du beim Auftraggeber vor Ort unter dessen direkter Weisung und nach dessen Zeiten arbeiten. Das kann zu Bußgeldern und Wegfall von Vergünstigungen führen.
                  </p>
                </div>
              </div>

              <h3 id="faq-9" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Haftung
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Hafte ich mit meinem Privatvermögen für Geschäftsschulden?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ja, bei einer JDG haften du mit deinem gesamten Privatvermögen: Auto, Wohnung, Guthaben auf Privatkonten. Anders als bei einer Sp. z o.o., wo die Haftung auf das Stammkapital beschränkt ist.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Wie kann ich mein Vermögen schützen?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Mehrere Wege: Berufshaftpflichtversicherung (OC), Gütertrennung mit dem Ehepartner (intercyza) oder Gründung einer Sp. z o.o. statt JDG.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Ist die Berufshaftpflichtversicherung Pflicht?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    du ist nicht verpflichtend, wird aber dringend empfohlen, besonders für IT-Fachleute, Vermarkter und Berater. Die OC deckt Schäden ab, die durch deine Fehler beim Kunden entstehen.
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
                        "name": "Muss ich eine JDG anmelden, wenn ich nur mit ausländischen Auftraggebern arbeite?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Ja, wenn du die Grenze der unangemeldeten Tätigkeit (3.500–3.600 PLN/Monat) überschreiten. Auch bei Auftraggebern im Ausland musst du dein Einkommen in Polen versteuern, wenn du hier steueransässig sind."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Welches Steuersystem ist für Freelancer am besten?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Das hängt von Einkünften und Kosten ab. Für die meisten Freelancer mit geringen Kosten ist Ryczałt 12 % oder 8,5 % am günstigsten. Bei hohen Kosten lohnt sich eher die Skala podatkowa."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Wie viel ZUS zahle ich am Anfang?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "In den ersten 6 Monaten bist du von den Sozialbeiträgen durch \"Ulga na start\" befreit. Du zahlst nur die Krankenversicherung (etwa 400–500 PLN/Monat)."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Wann muss ich mich als VAT-Zahler registrieren?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Du musst sich registrieren, wenn dein Jahresumsatz 200.000 PLN überschreitet."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Brauche ich für Ryczałt eine KPiR?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Nein, bei Ryczałt ist keine KPiR erforderlich. du ist nur bei Skala podatkowa und Podatek liniowy nötig."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Muss ich Einkünfte von Upwork/Fiverr versteuern?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Ja, alle Einkünfte von internationalen Plattformen müssen in der jährlichen PIT-36-Erklärung angegeben werden."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Kann ich aufgrund einer JDG eine Aufenthaltserlaubnis bekommen?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Ja, Du kannst eine befristete Aufenthaltserlaubnis wegen Ausübung einer wirtschaftlichen Tätigkeit beantragen. Dafür sind stabile Einkünfte und ein wirtschaftlicher Nutzen für Polen erforderlich."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Kann ich für denselben Arbeitgeber arbeiten wie zuvor mit Arbeitsvertrag?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Ja, aber Du kannst ZUS-Vergünstigungen und den Ryczałt-Satz (in bestimmten Kategorien) verlieren, wenn die Leistungen dieselben sind wie früher als Arbeitnehmer. Zwischen Kündigung und B2B-Vertrag müssen mindestens 6 Monate liegen."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Was unterscheidet Selbstständigkeit vom Arbeitsvertrag?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Selbstständigkeit bringt mehr Nettoeinkommen, aber keinen bezahlten Urlaub oder Lohnfortzahlung im Krankheitsfall. Der Arbeitsvertrag bietet Kündigungsschutz und Sozialleistungen, aber weniger Nettoeinkommen."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Hafte ich mit meinem Privatvermögen für Geschäftsschulden?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Ja, bei einer JDG haften du mit deinem gesamten Privatvermögen: Auto, Wohnung, Guthaben auf Privatkonten. Anders als bei einer Sp. z o.o., wo die Haftung auf das Stammkapital beschränkt ist."
                        }
                      }
                    ]
                  })
                }}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                  Diese FAQ behandelt die häufigsten Fragen von Freelancern zum Arbeiten in Polen. Bei weiteren Fragen empfehlen wir, einen Buchhalter zu konsultieren oder sich beim Finanzamt offiziell zu informieren.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  Beachte, dass sich die Gesetze ändern können – prüfst du die Aktualität der Angaben stets auf den offiziellen Behördenseiten.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar Navigation - same row as article, sticky on scroll */}
        <aside className="hidden lg:block w-[min(359px,28rem)] flex-shrink-0 self-start sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden border-l border-gray-200 bg-gray-50">
          <nav className="p-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Inhaltsverzeichnis
            </h3>
            <ul className="space-y-0.5">
              {navigationSectionsDe.map((section) => {
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
                          aria-label={isExpanded ? 'Einklappen' : 'Aufklappen'}
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
      <footer className="bg-gray-900 text-white py-10 md:py-12 mobile-shell-edge md:mx-0 px-4 md:px-0">
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
                  href="/de/"
                  className="text-lg font-semibold hover:text-blue-400 transition-colors"
                  aria-label="Freelancer.org.pl - Startseite"
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
                    href="/en/contact/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.contact}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/privacy-policy/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/terms/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Nutzungsbedingungen
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@freelancer.org.pl</li>
                <li>{t.footer.addressLabel}: {t.footer.address}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {DynamicYear()} {t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Nach oben"
        className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}
