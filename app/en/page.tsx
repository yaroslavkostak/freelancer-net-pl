'use client';

import { useEffect, useMemo, useState } from 'react';
import Script from 'next/script';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DynamicYear } from "@/components/dynamic-year";
import { LanguageSwitcher } from "@/components/language-switcher";
import { translations, type Language } from "@/lib/translations";
import { CheckCircle, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import { navigationSectionsEn, getAllNavIds } from "@/lib/navigation";

export default function HomePage() {
  const language: Language = 'en';
  const t = translations['en'];
  const [activeSection, setActiveSection] = useState('introduction');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);

  const allNavIds = useMemo(() => getAllNavIds(navigationSectionsEn), []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'en';
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
              Register JDG
            </button>
            <button
              onClick={() => scrollToSection('taxation-systems')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Tax systems
            </button>
            <button
              onClick={() => scrollToSection('zus-insurance')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              ZUS insurance
            </button>
            <button
              onClick={() => scrollToSection('how-to-start')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              How to start
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
                How to start working?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1 - Check your right to work</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    You need a valid residence status: PESEL (e.g. for Ukrainians), temporary residence card, or another permit.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2 - Choose your activity form</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Unregistered activity (income up to about 3,500-3,600 PLN/month) or JDG for higher income.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3 - Register your business</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Register JDG online via CEIDG with Profil Zaufany. The process takes about 15 minutes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 4 - Choose your tax system</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Lump sum (ryczałt): 12% for most services or 8.5% for liberal professions. Simpler than full cost accounting.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 5 - Set up accounting</h3>
                  <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                    Choose an accounting platform or accountant for income and reporting.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
                  alt="Freelancer in Poland"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of working with inFakt</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                With inFakt (around 200 PLN/month) they help you set up your business and everything you need for free. You focus on work; inFakt handles accounting and reporting. Popular among freelancers from India, Ukraine and other countries.
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
              All about freelancing in Poland in 2026
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Many people from India, Ukraine and other countries come to Poland and want to work legally and earn money online. <strong>Self-employment can be a legal basis for residence in Poland</strong>. It is important to know how everything works. This guide brings together detailed information on all aspects of freelancing in Poland for internationals.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Polish law does not use a separate term for &quot;freelancer&quot;. Freelancing is treated as <strong>self-employed economic activity</strong>. That means a freelancer is an <em>entrepreneur with the same rights and obligations</em>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Polish law recognises several forms of self-employed activity. Each has its own rules, requirements and limits. The right choice depends on your income level, type of work and personal situation.
              </p>

              <h3 id="introduction-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Why has Poland become a hub for international freelancers?
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Poland offers a favourable environment for freelancers from abroad. EU membership, a growing economy and an open labour market make it attractive for professionals from India, Ukraine and other countries.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Poland&apos;s economy is growing. In the EU it ranks sixth by GDP; unemployment keeps falling. Demand for IT specialists, designers, marketers and other professionals is high. That creates many opportunities for international freelancers.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Poland is among the top 20 economies in the world by GDP. Many foreigners, including from India and Ukraine, have moved to Poland to work and contribute to this growth. International freelancers are an important part of the Polish labour market.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Sources:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.worldbank.org/en/country/poland" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">World Bank - Poland</a> - official data on Poland&apos;s economy and GDP</li>
                  <li>- <a href="https://stat.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Główny Urząd Statystyczny</a> - Polish statistics office, economy and labour market data</li>
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - Office for Foreigners, information for non-EU nationals</li>
                </ul>
              </div>

              <h3 id="introduction-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Freelancing statistics in Poland
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                According to statistics, over <strong>2 million freelancers</strong> work in Poland - about <strong>12-15% of the workforce</strong>. This number keeps growing, including after the arrival of many foreign professionals.
              </p>

              <h3 id="introduction-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Most in-demand professions and average rates
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The freelance market in Poland is growing and demand for different professions changes. Here are typical professions and approximate monthly rates in 2026 (in PLN):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>IT specialists and developers</strong> - from <strong>8,000 to 25,000 PLN</strong> per month (depending on experience and tech stack)</li>
                <li><strong>Web and UI/UX designers</strong> - from <strong>5,000 to 15,000 PLN</strong> per month</li>
                <li><strong>Graphic designers</strong> - from <strong>4,000 to 12,000 PLN</strong> per month</li>
                <li><strong>Marketers and SMM specialists</strong> - from <strong>4,500 to 14,000 PLN</strong> per month</li>
                <li><strong>Copywriters and content managers</strong> - from <strong>3,500 to 10,000 PLN</strong> per month</li>
                <li><strong>Translators</strong> - from <strong>4,000 to 12,000 PLN</strong> per month (depending on language and field)</li>
                <li><strong>Tutors and online teachers</strong> - from <strong>3,000 to 8,000 PLN</strong> per month</li>
                <li><strong>Accountants and financial consultants</strong> - from <strong>5,000 to 15,000 PLN</strong> per month</li>
                <li><strong>Photographers and videographers</strong> - from <strong>4,000 to 12,000 PLN</strong> per month</li>
                <li><strong>Architects and engineers</strong> - from <strong>6,000 to 18,000 PLN</strong> per month</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>These figures are indicative and depend on experience, portfolio, project complexity and client language.</em>
              </p>

              <h3 id="introduction-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Freelance platforms
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Many platforms help freelancers find work. Here are some of the most popular:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Upwork</strong> - one of the largest global platforms with a wide range of projects</li>
                <li><strong>Fiverr</strong> - popular for selling services in fixed packages</li>
                <li><strong>Freelancer.com</strong> - international platform with contests and projects</li>
                <li><strong>Toptal</strong> - for top freelancers with high requirements</li>
                <li><strong>PeoplePerHour</strong> - popular in Europe for various professions</li>
                <li><strong>99designs</strong> - for designers</li>
                <li><strong>Guru</strong> - focus on long-term relationships</li>
                <li><strong>Behance</strong> - portfolio and client discovery</li>
                <li><strong>LinkedIn</strong> - professional network for clients and projects</li>
                <li><strong>NoFluffJobs</strong> - popular in Poland for IT</li>
                <li><strong>JustJoinIT</strong> - Polish platform for tech specialists</li>
              </ul>

              <h3 id="introduction-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Average hourly rates
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Hourly rates vary by region, experience and profession. Approximate averages:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Poland</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>IT specialists: <strong>80-200 PLN/hour</strong></li>
                  <li>Designers: <strong>60-150 PLN/hour</strong></li>
                  <li>Marketers: <strong>50-120 PLN/hour</strong></li>
                  <li>Translators: <strong>40-100 PLN/hour</strong></li>
                  <li>Copywriters: <strong>40-90 PLN/hour</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Europe</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>IT specialists: <strong>30-80 EUR/hour</strong></li>
                  <li>Designers: <strong>25-60 EUR/hour</strong></li>
                  <li>Marketers: <strong>20-50 EUR/hour</strong></li>
                  <li>Translators: <strong>20-45 EUR/hour</strong></li>
                  <li>Copywriters: <strong>18-40 EUR/hour</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">USA / Canada</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                  <li>IT specialists: <strong>40-120 USD/hour</strong></li>
                  <li>Designers: <strong>30-80 USD/hour</strong></li>
                  <li>Marketers: <strong>25-70 USD/hour</strong></li>
                  <li>Translators: <strong>20-50 USD/hour</strong></li>
                  <li>Copywriters: <strong>20-45 USD/hour</strong></li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Rates depend on experience, project complexity, client language, platform reputation and your skills.</em>
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Poland&apos;s tax system is relatively simple and transparent. Several tax regimes are available depending on income and type of activity, which helps optimise your tax burden.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Minimum share capital is 1,200 EUR or 5,000 PLN, and it does not have to be in the bank. The full social package includes free healthcare and education. EU membership allows you to do business with all EU countries.
              </p>

            </div>
          </section>

          {/* Legal Status Section */}
          <section id="legal-status" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Legal residence and freelancing in Poland
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                It is very important to know that working as a freelancer in Poland without a proper legal residence status is against the law. 
                Breaking the rules can lead to <strong>fines of up to 5,000 PLN, deportation and a ban on entering the Schengen area for up to 5 years</strong>. 
                Proper documents are the basis for a successful freelance career in Poland - whether you are from India, Ukraine or another country.
              </p>

              <h3 id="legal-status-1" className="text-2xl font-semibold text-gray-900 mb-4">
                PESEL and residence status in 2026
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>PESEL</strong> is a Polish identification number. For many foreigners (e.g. Ukrainians under special rules, or others with residence permits) it gives access to basic services and is required for business.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                With a PESEL number you can register a JDG and run a business. PESEL is needed for all business-related formalities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                How you get PESEL depends on your nationality and residence basis. For some nationalities it is free and can be applied for at a city or municipal office (<em>Urząd miasta</em> or <em>Urząd gminy</em>). 
                Processing often takes <strong>1 to 3 working days</strong> after you submit the documents.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Sources:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - official information on residence and PESEL</li>
                  <li>- <a href="https://www.gov.pl/web/gov/cudzoziemcy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Portal for foreigners</a> - find your nearest office and procedures</li>
                </ul>
              </div>

              <h3 id="legal-status-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Right to run a business for non-EU citizens
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>If you have a valid residence permit or right to stay in Poland, you can usually run a business on similar terms to Poles</strong>. 
                For most activities you do not need extra permits or licences beyond registration. Rules depend on your nationality and type of stay (e.g. work permit, Blue Card, temporary residence, etc.).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To register a <strong>JDG</strong> you need a <strong>valid passport, PESEL and an address in Poland</strong>. <em>You do not need to wait for a residence card</em>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For citizens of Ukraine this is set out in the <strong>EU-Ukraine Association Agreement</strong>, which gives Ukrainian citizens equal rights with EU citizens to run a business. 
                For other nationalities, rules depend on your residence status. You can choose any form of activity, from unregistered to a full company.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Important:</strong> some activities still require special permits or licences. 
                For example, <em>medical practice, legal services or financial services</em> have extra requirements. 
                Before starting, check whether your type of business needs special permits.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Sources:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://biznes.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - official portal for entrepreneurs, registration and activity types</li>
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - information on foreigners&apos; rights to run a business in Poland</li>
                  <li>- <a href="https://ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG</a> - central register and JDG registration information</li>
                </ul>
              </div>

              <h3 id="legal-status-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Temporary residence card (Karta czasowego pobytu) on business grounds
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                After registering a <strong>JDG and running activity for 6 months</strong> you can apply for a temporary residence card. 
                The card gives you the right to stay and work legally in Poland.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To get a temporary residence card (<strong>Karta pobytu</strong>) you must show stable business income (<strong>usually at least 5,000-6,000 PLN per month</strong>, in line with average Polish salary), 
                payment of taxes and <strong>ZUS contributions (for the last 3-6 months of activity)</strong>. The card is issued for <strong>1 to 3 years</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Getting a residence card on business grounds requires a set of documents, including <strong>proof of income, tax and ZUS payments, and the usefulness of your business to the Polish economy</strong>. 
                Processing usually takes <strong>1 to 3 months</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                A temporary residence card gives you <strong>full rights to stay and work in Poland</strong> 
                and to travel freely in the <strong>Schengen area</strong>. 
                <em>After 5 years of legal stay</em> you can apply for a permanent residence card.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Sources:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - official information on temporary residence cards and required documents</li>
                  <li>- <a href="https://www.gov.pl/web/gov/cudzoziemcy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MOS</a> - portal for foreigners, online application</li>
                </ul>
              </div>

              <h3 id="legal-status-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                EU Blue Card for highly qualified IT freelancers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The Blue Card is a special permit for highly qualified specialists. 
                It suits IT freelancers with high qualifications and income.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To get a Blue Card you need higher education or 5 years of professional experience, 
                and salary not below the set minimum. The Blue Card allows you to work and run a business.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The minimum salary for the <strong>Blue Card</strong> in 2026 is <strong>150% of the average salary in Poland</strong>, 
                roughly <strong>9,000-10,000 PLN gross per month</strong>. 
                For IT specialists this is often easy to meet, as the market offers high rates.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>The Blue Card offers a faster path to permanent residence</strong> - after <strong>33 months of work</strong> (or <strong>21 months with knowledge of Polish</strong>) 
                you can apply for a permanent residence card. This is especially useful for freelancers planning to work in Poland long term.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Sources:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc/niebieska-karta" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC - Blue Card</a> - official information and requirements</li>
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - general information on residence permits</li>
                </ul>
              </div>

              <h3 id="legal-status-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Working on a visa or visa-free
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Citizens of many countries (e.g. Ukraine, EU, visa-exempt nationals) can stay in Poland <strong>for up to 90 days without a visa</strong> (depending on nationality). 
                For running a business, a proper residence status is still better.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>JDG registration is possible even during visa-free stay</strong> in some cases, 
                but for long-term work you need a residence card.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Important:</strong> visa-free stay is only for short periods. 
                If you plan to work as a freelancer for more than 90 days, <strong>you must obtain a temporary residence card</strong>. 
                Breaking stay rules can lead to a ban on entering the Schengen area.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you already have a temporary residence card or a valid <strong>PESEL</strong> (e.g. PESEL UKR for Ukrainians), registering a JDG and starting work is straightforward. 
                You can complete the formalities online via the <strong>CEIDG</strong> portal.
              </p>

              <div className="mt-6 mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Step-by-step example: from arrival to starting work</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Arrival and PESEL (1-3 days)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Go to the city or municipal office (Urząd miasta/gminy), apply for PESEL. Free of charge, issued within 1-3 working days (procedure depends on nationality).
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Rent and address</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Find accommodation and register your address. If the landlord does not allow it, use a virtual office (60-100 PLN/month).
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">JDG registration with inFakt (15 min - 1 day)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      inFakt can help you register your JDG online via CEIDG free of charge. After registration you receive NIP and REGON.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Work and building income (6 months)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Start working; inFakt handles accounting. Build stable income of at least the Polish minimum wage (around 6,000 PLN per month) over 3-6 months.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">Residence card (after 6 months)</h5>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      After 6 months, gather documents on income and tax payments for 3-6 months. Submit your application to UDSC. Processing takes 1-3 months.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">
                  <strong>Sources:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-none">
                  <li>- <a href="https://www.gov.pl/web/udsc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UDSC</a> - information on stay rules and visa-free regime</li>
                  <li>- <a href="https://ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG</a> - JDG registration online</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Unregistered Activity Section */}
          <section id="unregistered-activity" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Unregistered activity (Działalność nierejestrowana)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This section covers the most favourable format for beginners. It is ideal for testing your niche without risk or paperwork.
              </p>

              <h3 id="unregistered-activity-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                What is unregistered activity?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                It is a special legal regime for small-scale business. You work legally but do not register a company in <strong>CEIDG</strong>. It suits those whose income is still low - <strong>up to about 3,500-3,600 PLN per month</strong> (around 800-900 EUR).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                It is activity of a natural person that is not formal entrepreneurship. You provide services or sell goods as a private individual.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You can issue receipts (<em>rachunki</em>) or even invoices (<em>faktury</em>). Clients can include these costs in their accounts. That makes you a full player on the market.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Important: unregistered activity is not a basis for a temporary residence card</strong>. 
                To get a residence card on business grounds you need registered activity (<strong>JDG</strong>) with stable income for <strong>at least 6 months</strong>. 
                Unregistered activity is good for starting and testing the market, but for long-term stay in Poland it is better to register a JDG.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>What residence status can you have while doing unregistered activity?</strong> You can do unregistered activity while in Poland on <strong>visa-free stay (up to 90 days)</strong> or with <strong>PESEL</strong> (e.g. PESEL UKR for Ukrainians). You can also do it if you have a <strong>temporary residence card</strong> obtained on another basis (e.g. employment or studies).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>How long can unregistered activity last?</strong> In theory it can last indefinitely as long as you do not exceed the monthly income limit (3,500-3,600 PLN). In practice most freelancers switch to <strong>JDG</strong> within <strong>3-6 months</strong> when income stabilises or grows. If you plan to work longer than 6 months or your income regularly exceeds the limit, you must register a JDG.
              </p>

              <h3 id="unregistered-activity-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Income limit in 2026
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The main condition is that your monthly income must not exceed a set amount. That amount is <strong>75% of the gross minimum wage in Poland</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                From 1 January 2026 the minimum wage increased, so your limit is now about <strong>3,500-3,600 PLN per month</strong> (check the exact figure at the time). <em>If you exceed this limit by even 1 PLN, you must register a JDG within 7 days</em>.
              </p>

              <h3 id="unregistered-activity-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Who can use this form?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This model is available to foreigners who are legally in Poland (e.g. Ukrainians, others with PESEL or residence). <strong>The main requirement</strong> is that you must not have run your own <strong>JDG</strong> in Poland in the <strong>last 60 months</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                It is ideal for <em>copywriters, designers, tutors, marketers, translators, content managers and other professionals</em> at the start. You simply start working without visiting any offices.
              </p>

              <h3 id="unregistered-activity-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                List of obligations - simplified register
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>You do not need an accountant</em>. The only record you must keep is <strong>Ewidencja sprzedaży</strong> (simplified sales register).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You simply record the date, amount and who you provided the service to. This is so the tax office can check that you have not exceeded the monthly income limit.
              </p>

              <h3 id="unregistered-activity-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Insurance (ZUS)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This is the biggest advantage of unregistered activity. You <strong>do not pay mandatory social contributions (ZUS)</strong> as an entrepreneur. You save about <strong>1,600-2,000 PLN per month</strong> compared with JDG.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Note: if you provide services under <strong>Umowa zlecenie</strong>, the client may be required to pay contributions for you. This is worth agreeing with the client in advance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Important:</strong> without paying <strong>ZUS</strong> you do not have the right to free healthcare in Poland (except emergencies) and you do not build a pension.
              </p>

              <h3 id="unregistered-activity-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Tax reporting (PIT-36)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Income from unregistered activity is not taxed monthly. You report it only once a year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You enter total income and your expenses in the annual PIT-36 return. You pay tax only on net profit at the general scale (usually 12%).
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Official portal for entrepreneurs with conditions, limits and register rules.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Tax office website with forms and reporting instructions.</li>
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Social insurance website with contribution details.</li>
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
                Registering a <strong>JDG</strong> (<em>Jednoosobowa Działalność Gospodarcza</em> - sole proprietorship, similar to a sole trader or self-employed status in other countries) is a step to full professional independence. You get a tax number <strong>NIP</strong> (<em>Numer Identyfikacji Podatkowej</em>), become a proper business partner and can work with any company worldwide.
              </p>

              <h3 id="jdg-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Step-by-step registration via CEIDG
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Business registration in Poland is free</strong> and done online via <strong>CEIDG</strong> (<em>Centralna Ewidencja i Informacja o Działalności Gospodarczej</em> - Central Register of Business Activity). Registration is on the <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> portal. You need <strong>Profil Zaufany</strong> (Trusted Profile - a free e-signature for government services that lets you sign documents online and use state services). You can create Profil Zaufany at <a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">gov.pl</a>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You fill in form <strong>CEIDG-1</strong>, which at the same time registers you with the tax office, statistics office and <strong>ZUS</strong>. The system will assign you <strong>REGON</strong> and <strong>NIP</strong> if you do not have them yet.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://aplikacja.ceidg.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEIDG (Aplikacja.ceidg.gov.pl)</a> - Single state register for registering, changing or closing a business.</p>
              </div>

              <h3 id="jdg-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Choosing activity codes (PKD)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>PKD</strong> (<em>Polska Klasyfikacja Działalności</em> - Polish Classification of Activities) defines what your business does. It is mandatory when registering a JDG. You choose one main code and any number of additional codes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Common PKD codes for freelancers:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>62.01.Z</strong> - Software-related activity (programmers, developers, IT)</li>
                <li><strong>62.02.Z</strong> - IT consultancy (IT consultants, sysadmins)</li>
                <li><strong>63.11.Z</strong> - Data processing, hosting (web developers, DevOps)</li>
                <li><strong>63.12.Z</strong> - Web portals (web designers, marketers)</li>
                <li><strong>73.11.Z</strong> - Advertising agencies (marketers, copywriters)</li>
                <li><strong>74.10.Z</strong> - Design (graphic designers, UI/UX)</li>
                <li><strong>74.20.Z</strong> - Photography (photographers, videographers)</li>
                <li><strong>74.30.Z</strong> - Translation services</li>
                <li><strong>85.59.A</strong> - Other education (tutors, online teachers)</li>
                <li><strong>90.03.Z</strong> - Artistic creation (artists, illustrators)</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Full guide on choosing and changing PKD codes</li>
                </ul>
              </div>

              <h3 id="jdg-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Start date and place of registration
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You can set the registration date as &quot;today&quot; or a future date. <strong>Important: you cannot backdate</strong> unless you were doing unregistered activity before.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For address you can use your own home (if the landlord agrees) or a <strong>Wirtualne biuro</strong> (virtual office). A virtual office in Krakow or Warsaw is a legal way to have a business address for <strong>60-100 PLN per month</strong>.
              </p>

              <h3 id="jdg-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                ZUS registration - ZZA and ZUA forms
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                After submitting to <strong>CEIDG you have 7 days</strong> to send the relevant forms to <strong>ZUS</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZZA</strong> - if you register only for health insurance (e.g. you are also employed elsewhere).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUA</strong> - if you register for full social insurance (pension, disability, etc.).
              </p>

              <h3 id="jdg-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Bank account - personal or business?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                By law, a JDG does not always need a separate business account (if you are not a VAT payer). In practice most banks require you to separate personal and business funds.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Where to open an account for JDG?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For freelancers at the start, <strong>PKO Bank Polski</strong> is often the best option. This bank does not require a temporary residence card to open an account - a valid <strong>PESEL</strong> (e.g. PESEL UKR for Ukrainians) and passport are enough. You can open an account online or in a branch.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>mBank</strong> also offers accounts for entrepreneurs but usually requires a <strong>temporary residence card</strong>. So if you have just registered a JDG and do not yet have a residence card, PKO Bank Polski is often easier.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Other popular banks for entrepreneurs: <strong>Santander</strong>, <strong>ING Bank Śląski</strong>, <strong>Alior Bank</strong>. Check each bank&apos;s current conditions and requirements as they can change.
              </p>

              <h3 id="jdg-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Financial and asset liability
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Liability with all assets</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Unlike a <strong>limited liability company (Spółka z o.o.)</strong>, a <strong>JDG</strong> entrepreneur is liable for business debts with <strong>all their personal assets</strong>. This includes <em>car, flat and funds in private accounts</em>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you cannot pay business debts (<strong>taxes, ZUS, debts to clients</strong>), creditors can pursue your personal assets.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>How to protect yourself</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You can protect assets in several ways. Professional liability insurance (OC) is especially important for IT and marketers. A prenuptial or separation-of-property agreement (intercyza) protects a spouse&apos;s assets from your business debts. Creating an LLC instead of a JDG is possible but more complex and costly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Important to understand</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Running your own business means both income and full risk with your capital. It is important to run the business properly and meet all obligations to avoid problems.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - details on full-asset liability</li>
                  <li>• <a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - official portal for entrepreneurs, information on professional liability insurance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Business Incubators Section */}
          <section id="business-incubators" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Freelancing through business incubators
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Working through business incubators is often mentioned as a scheme and carries serious risks</strong>. This section describes a model that lets a freelancer work without legally being an entrepreneur, but it is important to understand all risks and liability.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                A business incubator is an organisation that provides its legal entity to issue invoices to your clients. You become a &quot;subject&quot; inside the incubator, and it acts as an intermediary between you and your client. This is especially popular among foreigners who want to delegate bureaucracy, but it has important nuances.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Main risk - no ZUS contributions</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                When you work through an incubator, you do not pay <strong>ZUS</strong> as an entrepreneur because legally you are not one. That means you <strong>do not build pension</strong> and <strong>have no right to free healthcare</strong> in Poland (except emergencies). If you plan to work in Poland long term, this can become a serious problem.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Liability and risks</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                When working through an incubator, you depend on its financial stability. If the incubator has tax problems or closes, your income can be affected. You also have no direct control over your finances. Money first goes to the incubator&apos;s account and is only then paid to you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Tax risks</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The tax office may check whether your work through an incubator is <em>sham</em>. If you actually work like an entrepreneur (find clients yourself, control the work process, work on your own equipment) but formally work through an incubator, it may be treated as an attempt to avoid ZUS and taxes. This can lead to <strong>fines and an obligation to pay all unpaid contributions</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>When it may be justified</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Working through an incubator may only make sense for <strong>short-term projects</strong> (3-6 months) when you are not yet sure you want to work in Poland long term. It can also suit those who already have another source of insurance (e.g. employed under an employment contract with ZUS paid by the employer).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Alternative - JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For most freelancers <strong>JDG is a safer and more transparent option</strong>. You have full control over your finances, build pension, have access to healthcare and do not depend on a third party. Although JDG requires paying ZUS, it is an investment in your future and the legality of your activity.
              </p>

              <h3 id="business-incubators-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                How the &quot;Freelance as a Service&quot; model works
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You sign a contract with the incubator (usually civil-law). When you do work for a client, the incubator issues an invoice in its name.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Money goes to the incubator&apos;s account; they deduct taxes and their fee and pay you the rest as salary. You receive &quot;net&quot; money without having to register a JDG in CEIDG.
              </p>
              <h3 id="business-incubators-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Benefits for foreigners (with caution)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Theoretically it can be convenient if you do not speak Polish well enough to deal with the tax office. The incubator handles accounting, reporting and legal support.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                However <strong>it is important to understand</strong> that you depend on the incubator and its competence. If the incubator makes accounting mistakes or does not pay taxes on time, <strong>liability may fall on you</strong>. You also have no direct access to your finances - everything goes through the incubator.
              </p>
              <h3 id="business-incubators-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Cost analysis - subscription vs taxes
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Instead of complex ZUS calculations, you pay a fixed monthly fee for mentoring and administration. In 2026 this is usually <strong>300 to 600 PLN per month</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This model may seem cheaper than JDG at the start because your costs do not depend on turnover. You only pay for the service when you have active contracts.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                But remember you do not build pension and have no right to free healthcare. You also depend on the incubator&apos;s stability and finances. If the incubator has problems, your income and access to funds can be affected.
              </p>
              <h3 id="business-incubators-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Liability in business incubators
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                When working through an incubator you are not legally liable for the incubator&apos;s activity. However you depend on its financial stability and correct conduct. If the incubator makes accounting errors or does not pay taxes on time, your income and reputation can be affected.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                It is important to understand that you have no direct control over your finances. Money first goes to the incubator&apos;s account and is only then paid to you. If the incubator has financial problems or closes, you may lose access to your funds.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The tax office may check whether your work through an incubator is sham. If you actually work as an entrepreneur but formally work through an incubator, it may be treated as an attempt to avoid <strong>ZUS</strong> and taxes. This can lead to fines and an obligation to pay all unpaid contributions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Unlike <strong>JDG</strong>, where you have full control over your finances and liability, when working through an incubator you delegate that control to a third party. This creates additional risks to consider when choosing your work model.
              </p>

              <h3 id="business-incubators-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Residence permits and legalisation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Many incubators in Poland specialise in helping foreigners with legalisation. They prepare a package of documents for a temporary residence permit on the basis of work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Since you are officially employed by the incubator, the procedure for obtaining a residence permit becomes standard and clear for the Voivodeship Office (Urząd) inspector.
              </p>

              <h3 id="business-incubators-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Limitations of the model
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Incubators are not for everyone. They are ideal for IT, design and marketing. They are unlikely to suit trade in goods where you need warehousing and import licences.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You are also limited by the incubator&apos;s internal rules on expenses. For example, deducting fuel or office rent through an incubator is harder than in your own <strong>JDG</strong>.
              </p>

              <h3 id="business-incubators-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Benefits for foreigners without language or accounting knowledge
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Business incubators are a good fit for foreigners who do not speak Polish. All communication with authorities and the tax office goes through the incubator.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You do not need to understand Polish law or do accounting. The incubator does it for you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Support is often available in English or Ukrainian. This makes it much easier to start working in Poland.
              </p>

              <h3 id="business-incubators-8" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Cost analysis - monthly subscription vs JDG taxes
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Business incubators charge a monthly fee (usually 200-500 PLN) plus a percentage of income. This can be more expensive than registering a JDG yourself.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                But if you factor in time spent on accounting and dealing with authorities, an incubator can be more cost-effective for busy freelancers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For beginners an incubator is often the better choice, as it lets you focus on work instead of formalities.
              </p>

              <h3 id="business-incubators-9" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Legalisation (residence permit) through an incubator
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Working through an incubator can be a basis for obtaining a temporary residence permit. But it depends on the specific incubator and contract terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Some incubators help with residence permit procedures, others do not. It is better to clarify this before signing a contract.
              </p>

              <h3 id="business-incubators-10" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Limits on types of activity within an incubator
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Business incubators often limit the types of activity. They usually work with IT, design, marketing and consulting.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                If your activity does not fit the incubator format, it is better to register a <strong>JDG</strong> yourself.
              </p>
            </div>
          </section>

          {/* Civil Contracts Section */}
          <section id="civil-contracts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Civil-law contracts (B2C)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you do not want to register a business or join an incubator, you can work on one-off contracts. In Poland these are called &quot;Umowy cywilnoprawne&quot;. They are a legal way to get paid for a specific result or for time worked.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This section describes the simplest way to receive payment without creating any structure. It is the classic option for freelancers working directly with Polish companies.
              </p>

              <h3 id="civil-contracts-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa o dzieło: Specifics for creative professions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This is a &quot;contract for specific work&quot; or contract for a result. Developers, designers and marketers often use it because it allows significant tax savings.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The main advantage is no ZUS contributions. You only pay income tax (PIT). If you transfer copyright to your code or text, you can apply the 50% cost of obtaining income (KUP), which halves the tax.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640160093" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kodeks Cywilny (KC)</a> - Civil Code, Articles 627-646 govern Umowa o dzieło.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Official guidance on lawful tax reduction when working with copyright.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa zlecenie: Payment for process
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This is a &quot;contract of mandate&quot;. You agree to perform certain tasks within a given time. Tax burden is higher here because you must pay pension and health insurance contributions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For students under 26 this contract is a &quot;golden&quot; option. They receive the full &quot;gross&quot; amount in hand without paying any tax or contributions.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640160093" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kodeks Cywilny (KC)</a> - Civil Code, Articles 734-751 govern Umowa zlecenie.</li>
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Rules on social insurance and which contracts require contributions.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Comparing &quot;gross&quot; and &quot;net&quot; for freelancers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                It is important to understand the difference when discussing price with a client. Companies usually quote the &quot;gross&quot; amount (before tax).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For example, with Umowa o dzieło you receive about 88% of the amount in hand. With Umowa zlecenie (if you are not a student) it is about 70-75%. Always clarify whether the price includes the cost of tax deductions.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Official information on cost of obtaining income and gross/net calculation.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Taxing income from abroad
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you live in Poland (tax resident - you become one officially after 180 days in the country) and work for a client in the USA or Ukraine under a contract, you must declare this income yourself.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You do not need to register a company, but once a year you must file a PIT-36 return. Poland has double taxation treaties with many countries, so you do not pay tax twice.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Official information on filing PIT-36.</li>
                  <li>• <a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Double taxation treaties.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Umowa zlecenie: tax rules and social contributions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Umowa zlecenie (contract of mandate) is a contract for services. It suits consultants, translators and trainers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Under this contract copyright is not transferred. You remain the owner of the work result.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Tax is also withheld at source (18%). There may be additional ZUS contributions if the contract is your main source of income.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Social insurance rules for Umowa zlecenie.</li>
                </ul>
              </div>

              <h3 id="civil-contracts-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Gross vs net for freelancers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                When working on civil-law contracts it is important to understand the difference between gross and net.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Gross is the amount before tax. Net is the amount after tax that you receive in hand.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If the contract states gross, 18% tax is withheld from that amount. If it states net, the client adds tax on top.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                It is better to always agree which amount is meant to avoid misunderstandings.
              </p>

              <h3 id="civil-contracts-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Taxing income from abroad under these contracts
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you work with clients abroad on civil-law contracts, taxation depends on the client&apos;s country.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For EU clients the Reverse Charge mechanism often applies. The client pays tax in their country, not you.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                For clients outside the EU, income may be exempt from Polish tax. But you still need to declare it in your tax return.
              </p>
            </div>
          </section>

          {/* Laws and Regulations Section */}
          <section id="laws-regulations" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Laws, regulations and government oversight
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Working &quot;above board&quot; in Poland means not only paying taxes but also knowing your rights. Polish law clearly distinguishes where private help ends and business begins.
              </p>

              <h3 id="laws-regulations-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Entrepreneurs Act (Ustawa o przedsiębiorcach)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This is the &quot;constitution&quot; for every freelancer with a JDG. The Act clearly defines entrepreneurial activity as something you do systematically, in your own name and for profit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The main rule: the state must support the entrepreneur. The law implements the principle &quot;what is not forbidden is permitted&quot;. It also protects you from unfounded inspections.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180000646" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ustawa - Prawo przedsiębiorców</a> - Fundamental law on entrepreneurs.</p>
              </div>

              <h3 id="laws-regulations-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Tax Code (Ordynacja podatkowa)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This is the set of rules on how tax is calculated and paid. For a freelancer it is important to know the concept of &quot;tax residence&quot;.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you stay in Poland for more than 183 days in a year or your &quot;centre of vital interests&quot; (family, home) is here, you become a Polish tax resident. That means you must report all your income to the Polish tax office (Urząd Skarbowy), including income from Upwork or clients in Ukraine.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19971370926" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ordynacja podatkowa</a> - Tax Code with rules on your relationship with the tax office; official text and updates in the ISAP system.</p>
              </div>

              <h3 id="laws-regulations-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Freelancer rights during inspections (KAS)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The tax authority (<strong>Krajowa Administracja Skarbowa</strong> or <strong>KAS</strong>) may inspect your activity. However, by law they must notify you in advance (usually <strong>7 days</strong>).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                A freelancer has the right to be present during the inspection and to give explanations. It is important to keep all invoices and receipts for <strong>5 years</strong>, as that is the limitation period for tax matters in Poland.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Information on rights during KAS inspections and document retention periods.</p>
              </div>

              <h3 id="laws-regulations-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Personal data protection (RODO / GDPR)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you collect email addresses for newsletters, maintain a client database or have a site with a contact form, you are subject to <strong>RODO</strong> (the EU <strong>GDPR</strong> regulation).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You must inform clients how you use their data. For a typical freelancer this means having a <strong>Privacy Policy</strong> on your site and handling client documents carefully.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm">UODO (Urząd Ochrony Danych Osobowych) - Official site on RODO and advice on protecting client data.</p>
              </div>

              <h3 id="laws-regulations-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Official guidance on remote work
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                In 2023-2026 the Polish government significantly updated the Labour Code and rules on remote work. Although freelancers are not employees, these rules affect how you contract with large Polish firms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Employers now have clear instructions on how to legally pay for services of remote contractors working from home or coworking spaces.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gov.pl</a> - Official guidance on remote work and the Labour Code.</p>
              </div>
            </div>
          </section>

          {/* Taxation Systems Section */}
          <section id="taxation-systems" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              In-depth look at taxation systems
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Choosing a taxation system is the main decision that affects how much money stays in your pocket. In 2026 Poland has three main options for JDG.
              </p>

              <h3 id="taxation-systems-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Skala podatkowa (General system 12% / 32%)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This is the default system. You pay <strong>12%</strong> on net profit if you earn up to <strong>120,000 PLN per year</strong>. Above that, the rate rises to <strong>32%</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The main benefit is <strong>Kwota wolna od podatku</strong> (tax-free allowance). You pay no income tax on the first <strong>30,000 PLN</strong> of income. You can also deduct business expenses (<em>laptop, software, rent</em>) from income before calculating tax.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm">Podatki.gov.pl: Wybór formy opodatkowania - Ministry guide comparing Ryczałt, Skala and Liniowy.</p>
              </div>

              <h3 id="taxation-systems-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Podatek liniowy (Flat tax 19%)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Here the rate is always fixed at <strong>19%</strong>, whether you earn 50,000 or 500,000 PLN. You can also deduct expenses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This system is only beneficial when your income consistently exceeds <strong>120,000-150,000 PLN per year</strong>. There is no tax-free allowance, so for low income it is disadvantageous.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Information on the 19% flat tax.</p>
              </div>

              <h3 id="taxation-systems-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ryczałt (Lump sum, tax on turnover)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>The most popular system among freelancers</strong>. You pay a percentage of the full amount you receive from the client. Expenses (rent, equipment) cannot be deducted.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Rates for freelancing in 2026</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>12%</strong> applies to <em>IT specialists and programmers</em>. <strong>14%</strong> applies to <em>architects and engineers</em>. <strong>8.5%</strong> applies to <em>marketing, copywriting and most service activities</em>. <strong>15%</strong> applies to <em>advertising agencies and some types of intermediation</em>.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm">Kalkulator B2B 2026 - Income calculator to compare different taxation systems.</p>
              </div>

              <h3 id="taxation-systems-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Ryczałt: detailed breakdown of rates
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ryczałt has different rates for different professions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>8.5%</strong> - for liberal professions (<em>doctors, lawyers, architects</em>)</li>
                <li><strong>12%</strong> - for most services (<em>IT, design, marketing</em>)</li>
                <li><strong>15%</strong> - for some types of activity</li>
                <li><strong>17%</strong> - for income over <strong>200,000 PLN per year</strong></li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The rate depends on your <strong>PKD</strong> code and type of activity. <strong>It is important to choose the right code to get the lowest rate</strong>.
              </p>

              <h3 id="taxation-systems-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                How to choose the most beneficial system in 2026
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For most freelancers <strong>ryczałt (12%)</strong> is the best choice. It is simple and does not require complex cost accounting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Skala podatkowa</strong> is more beneficial if expenses are more than <strong>30% of income</strong>. But you need to collect and keep all receipts.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Podatek liniowy</strong> is more beneficial for very high income (over <strong>300,000 PLN</strong>). But for most freelancers it is not suitable.
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
                  <strong>Important:</strong> On ryczałt you do not pay ZUS on profit. You only pay minimum contributions (~1,700 PLN/month), regardless of income. This makes ryczałt very attractive for high-earning freelancers.
                </p>
              </div>
            </div>
          </section>

          {/* ZUS Insurance Section */}
          <section id="zus-insurance" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Social insurance and ZUS
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For many foreigners <strong>ZUS</strong> is something new. In Poland it is the basis of the social contract between the citizen and the state: you pay the state monthly and it guarantees you healthcare, pension and social support.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>What ZUS is and why it matters in Europe</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUS</strong> (Zakład Ubezpieczeń Społecznych) is the state insurance institution that collects contributions from employees and entrepreneurs. This money funds three main things: <strong>pension insurance</strong> (for when you retire), <strong>health insurance</strong> (access to public healthcare) and <strong>disability and sickness insurance</strong> (sick pay, support if you lose capacity to work).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                In Europe this system has worked for decades. It ensures that even if you lose your job or fall ill, the state does not leave you without support. When you pay contributions you invest in the stability of the country you live in, and the state invests in you.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>How much to pay and for what</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                As a JDG entrepreneur you pay contributions every month, even if you earned nothing. In 2026 full <strong>ZUS</strong> is about <strong>1,600-2,000 PLN per month</strong>. This amount consists of several parts: pension insurance (about 19% of the base), health insurance (9% of the base), disability and accident insurance (about 1.5%).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>How contribution amounts grow and why</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The amount of <strong>ZUS</strong> contributions depends on the minimum wage in Poland. Every year the government raises the minimum wage (in 2026 it is about 4,300-4,500 PLN gross), and contributions are calculated from that. The higher the minimum wage, the more you pay. But it also means your future pension will be higher and healthcare better.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>What health insurance gives you</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                When you pay <strong>Składka zdrowotna</strong> (health contribution), you get access to <strong>public healthcare</strong> in Poland. This includes: free visits to a GP (family doctor), free specialist consultations (often with waiting lists, so you can pay for a quicker private visit), free tests and examinations with a doctor&apos;s referral, free hospitalisation and surgery, free medicines for children under 18 and discounts on medicines for adults.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>For family and children</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you pay <strong>ZUS</strong>, your family (spouse and children) are also entitled to public healthcare. Children under 18 get free medicines, free vaccinations and check-ups. Your spouse can use healthcare if they do not work or have no own insurance.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>What is free and what is paid</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Free:</strong> GP visits, specialist consultations with referral, tests and examinations with referral, hospitalisation, surgery, medicines for children under 18, emergency care. <strong>Paid:</strong> specialist consultations without referral (private clinics), some cosmetic procedures, dentistry (partly; basic services may be free), medicines for adults (30-50% discount), quick diagnostic tests without waiting.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Pensions - the basics</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Pension amount depends on how many years you paid contributions and your income. The minimum pension in Poland in 2026 is about <strong>1,200-1,400 PLN</strong>. Average pension about <strong>2,500-3,000 PLN</strong>. Maximum pension can reach <strong>5,000-6,000 PLN</strong> or more if you paid high contributions for many years. To get a full pension you need to pay contributions for <strong>at least 20-25 years</strong> (women) or <strong>25-30 years</strong> (men).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>ZUS</strong> is the state insurance institution. Even if you earned nothing in a month, as an entrepreneur you must pay contributions. But there are reliefs for newcomers.
              </p>

              <h3 id="zus-insurance-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                &quot;Ulga na start&quot; relief
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For the <strong>first 6 full months</strong> after registering your JDG you are exempt from social contributions. You only pay health insurance (<strong>Składka zdrowotna</strong>). This saves a lot at the start while you look for clients.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm">ZUS: Ulga na start - Official rules for the first 6 months of business.</p>
              </div>

              <h3 id="zus-insurance-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Mały ZUS Plus
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                After &quot;Ulga na start&quot; ends you can switch to a preferential period of <strong>24 months</strong>. You pay contributions calculated on a reduced base (minimum wage). This is still much less than full ZUS paid by established entrepreneurs.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Information on Mały ZUS Plus and preferential periods.</p>
              </div>

              <h3 id="zus-insurance-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Standard contributions and &quot;Chorobowe&quot;
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Full <strong>ZUS</strong> in 2026 is a significant amount (about <strong>1,600-2,000 PLN</strong> depending on calculation). You can also voluntarily pay sickness contribution (<strong>Chorobowe</strong>). This entitles you to sick pay, which is important for a self-employed freelancer.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZUS.pl</a> - Information on standard contributions and voluntary Chorobowe insurance.</p>
              </div>
            </div>
          </section>

          {/* VAT Section */}
          <section id="vat" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              VAT in a freelancer&apos;s life
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>VAT</strong> is value added tax. Most freelancers try to avoid it at first, but sometimes it becomes mandatory.
              </p>

              <h3 id="vat-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                200,000 PLN limit
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You are exempt from <strong>VAT</strong> until your annual turnover exceeds <strong>200,000 PLN</strong>. Once you approach that amount you must register as a VAT payer (form <strong>VAT-R</strong>).
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Information on the 200,000 PLN limit and VAT-R registration.</p>
              </div>

              <h3 id="vat-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                VAT-EU registration
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you plan to work with clients in other EU countries (e.g. do work for a German company), you need to obtain a <strong>VAT-EU</strong> number. This lets you issue invoices without VAT because the client pays tax in their country (<strong>Reverse Charge</strong>).
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://www.podatki.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Podatki.gov.pl</a> - Information on VAT-EU registration and the Reverse Charge mechanism.</p>
              </div>
            </div>
          </section>

          {/* Accounting and Finance Section */}
          <section id="accounting-finance" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Accounting and financial hygiene
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This section helps you organise your daily freelancer routine so the tax office has no extra questions. We move on to practical financial management and process automation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Running a business in Poland requires discipline with documents. Every expense must be backed by an invoice and every income recorded in the relevant registers.
              </p>

              <h3 id="accounting-finance-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Keeping KPiR (Income and expense ledger)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you chose the general system or flat tax, your main document is <strong>KPiR</strong>. It is a detailed journal where you record every zloty earned and every business expense.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For those on <strong>Ryczałt</strong> it is simpler. You only keep an income register (<strong>Ewidencja przychodów</strong>). Expenses do not matter because they do not affect the amount of tax.
              </p>

              <h3 id="accounting-finance-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                KSeF system in 2026
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                In <strong>2026</strong> Poland introduces the mandatory National e-Invoice System (<strong>KSeF</strong>). That means you can no longer simply send a PDF to the client.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Invoices must be generated in the official format via a dedicated platform. This lets the tax office see all transactions in real time. For a freelancer it means less paperwork but requires using modern software.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm">KSeF: Official information - Everything on mandatory e-invoices.</p>
              </div>

              <h3 id="accounting-finance-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Expenses that reduce tax
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If your taxation system allows deducting expenses, you can save a lot. Deductible expenses include laptop, monitor, peripherals, office rent or part of housing costs (if the business is registered there), professional training and courses, phone and internet.
              </p>

              <h3 id="accounting-finance-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Where to find an accountant?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                A freelancer in Poland does not have to employ an accountant. Most use a <strong>Biuro rachunkowe</strong> (accounting office). Cost for JDG is typically <strong>200-450 PLN per month</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                An alternative is online accounting (e.g. inFakt or wFirma). It is cheaper and you enter data yourself while the system generates returns.
              </p>

              <h3 id="accounting-finance-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                E-invoicing and KSeF in 2026
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                KSeF (Krajowy System e-Faktur) is the national electronic invoice system. From 2026 it becomes mandatory for many entrepreneurs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The system automatically sends invoices to the tax office. You do not need to submit them separately.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Most accounting software (including inFakt) is integrated with KSeF. Invoices are sent automatically through the system.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                To use KSeF you need to register in the system and set up the software. An accountant can help with setup.
              </p>

              <h3 id="accounting-finance-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Tax-reducing expenses - rent, equipment, training, car
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Under skala podatkowa or podatek liniowy you can deduct expenses that reduce tax. This includes office rent, equipment, training and car costs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                It is important to keep all receipts and invoices for expenses. Without documents you cannot deduct expenses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Equipment costs can be deducted at once or depreciated over several years. Training costs count if they are related to your activity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Car costs are deductible in part, depending on how much is used for business and how much for personal use.
              </p>

              <h3 id="accounting-finance-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Professional help - Biuro rachunkowe vs online services
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Biuro rachunkowe (accounting office) is the traditional way to do accounting. You meet the accountant in person and they handle all documents.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Online services (like inFakt) let you do accounting yourself with accountant support. It is more convenient and often cheaper.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For most freelancers online services are a better fit. They let you control your finances and get advice quickly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                A traditional office is better for complex cases or if you do not want to deal with accounting at all. But it is more expensive.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We recommend starting with the inFakt online service. It has English and Ukrainian and support from accountants who speak these languages.
              </p>
            </div>
          </section>

          {/* Technical and Legal Aspects Section */}
          <section id="technical-legal" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Additional technical and legal aspects
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Modern freelancing relies on digital tools. Without them, dealing with Polish authorities would be slow and difficult.
              </p>

              <h3 id="technical-legal-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Profil Zaufany and mObywatel
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                These are your digital keys. Profil Zaufany (Trusted Profile) lets you sign official documents, file returns and change data in the CEIDG register online.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The mObywatel app is your passport and driving licence on your phone. It is also integrated with business services, so you can quickly confirm your identity when opening bank accounts.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm">mObywatel.gov.pl - How Poland&apos;s main digital app works.</p>
              </div>

              <h3 id="technical-legal-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Qualified electronic signature (Podpis kwalifikowany)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For some complex contracts (especially international) ordinary Profil Zaufany may not be enough. A qualified signature has the same legal effect as a handwritten one. It is a paid service but essential for freelancers working with large corporations.
              </p>

              <h3 id="technical-legal-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Working with foreign platforms (Upwork, Fiverr)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you earn income through intermediary platforms, remember currency rules. You must convert USD or EUR received into Polish zloty at the National Bank of Poland (NBP) rate for the day before the payment date.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm">NBP: Exchange rate table - For correct calculation of tax on foreign income.</p>
              </div>
            </div>
          </section>

          {/* Conclusions Section */}
          <section id="conclusions" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusions - strategy for successful freelancing in Poland
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Freelancing in Poland in 2026 is a transparent and predictable system. The main thing is not to fear legalisation and to choose the right taxation form.
              </p>

              <h3 id="conclusions-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Your start-up checklist
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>1. Get PESEL or check your legal status</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The first step is to make sure you are legally resident in Poland. PESEL (e.g. PESEL UKR for Ukrainians) or a residence card gives you the right to run a business.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>2. Create Profil Zaufany</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Profil Zaufany is your digital key to all government services. Without it you cannot register a business online.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>3. Choose your form - Unregistered activity or JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Choose the form of activity depending on your income. Unregistered activity suits income up to about 3,500-3,600 PLN per month. JDG suits higher income or if you want full entrepreneur status.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>4. Choose PKD codes and tax system (Ryczałt or Skala)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The right PKD code and taxation system can save you thousands of zlotys. Use calculators or consult an accountant.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>5. Register and start issuing your first invoices</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                After registration you can start working and issuing invoices. Do not forget to register with ZUS within 7 days of getting your NIP.
              </p>

              <h3 id="conclusions-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Strategy for successful freelancing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Planning</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Plan your finances in advance. Factor in all costs such as taxes, ZUS and accounting. This helps avoid unpleasant surprises.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Choosing the right system</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Choosing the right taxation system is critical. Use calculators or ask an accountant for advice.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Keeping records</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Keep records from day one. This helps avoid problems during inspections and to calculate tax correctly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Professional help</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Do not hesitate to get professional help. An accountant or consultant can save you a lot of time and money.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Compliance</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Comply with all laws and rules. This helps avoid fines and problems with authorities.
              </p>
            </div>
          </section>

          {/* Employment vs Self-Employed Section */}
          <section id="employment-vs-selfemployed" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Self-employment vs Umowa o pracę - which is better?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This is a key question for many freelancers. Official sources often stress the difference in &quot;social package&quot;. It is important to understand all pros and cons of both options.
              </p>

              <h3 id="employment-vs-selfemployed-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Holidays and sick leave
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>On JDG</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                On JDG you do not have paid holiday (20-26 days) as under an employment contract. You only earn when you work. If you do not work, you do not get paid.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You can take holiday but it will be unpaid. You will not be paid for days you do not work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>On Umowa o pracę</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                On an employment contract you are entitled to paid holiday (20-26 days per year). You also have the right to paid sick leave.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                That means even when you are not working due to illness or holiday, you still receive your salary.
              </p>

              <h3 id="employment-vs-selfemployed-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Job security
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Terminating an employment contract</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Terminating an employment contract takes time (from 2 weeks to 3 months depending on length of service). The employer cannot simply dismiss you without reason.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If the employer wants to dismiss you, they must follow procedure and pay severance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Terminating a B2B contract</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                A B2B contract can be terminated immediately if the agreement says so. Usually contracts have a notice period (e.g. 14 days), but it depends on the contract terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                That means the client can end the cooperation without extra cost if the contract allows it.
              </p>

              <h3 id="employment-vs-selfemployed-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Take-home pay
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Main argument for self-employment</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The main argument for self-employment is a much higher &quot;net&quot; amount for the same employer cost.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Example calculation</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If the employer is willing to spend 10,000 PLN per month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>On Umowa o pracę</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Employer cost is 10,000 PLN (gross). Your net income is about 7,000 PLN (after tax and ZUS).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>On JDG (Ryczałt 12%)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Employer cost is 10,000 PLN (gross). Your net income is about 8,800 PLN (after 12% tax).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The difference is about 1,800 PLN per month or 21,600 PLN per year.
              </p>
            </div>
          </section>

          {/* Legal Liability Section */}
          <section id="legal-liability" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Freelancer legal liability - full-asset risk
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This section is often skipped but is critical for your safety. Understanding liability helps you protect your assets and avoid serious problems.
              </p>

              <h3 id="legal-liability-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Full-asset liability
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Unlike an LLC (Spółka z o.o.)</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Unlike an LLC (Spółka z o.o.), a JDG entrepreneur is liable for business debts with all their personal assets. This includes car, flat and funds in private accounts.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                That means if you cannot pay business debts, creditors can pursue your personal assets.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>How to protect yourself</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                You can protect assets in several ways. Professional liability insurance (OC) is especially important for IT and marketers. Creating an LLC instead of a JDG is possible but more complex. A prenuptial or separation-of-property agreement (intercyza) also helps.
              </p>

              <h3 id="legal-liability-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Professional liability insurance (OC)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>What OC is</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Professional liability insurance (OC) covers client losses caused by your mistakes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>When it matters</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                OC is especially important for IT specialists (code errors can cause serious damage), marketers (wrong actions can harm a client&apos;s site), consultants (wrong advice can lead to losses) and designers (copyright infringement).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Cost of OC</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Cost depends on type of activity and coverage amount. Usually 500-2,000 PLN per year.
              </p>
            </div>
          </section>

          {/* B2B Contracts Section */}
          <section id="b2b-contracts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              B2B contract specifics (Business-to-Business)
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Freelancers often confuse a service contract with an employment contract. It is important to understand the difference to avoid problems with the tax office and to structure the relationship with the client correctly.
              </p>

              <h3 id="b2b-contracts-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Signs of employment relationship
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>When the tax office may reclassify your B2B contract</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The tax office may reclassify your B2B contract as an employment contract if you work at the client&apos;s office under their direct supervision and on a schedule they set.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Signs of employment relationship</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Signs of employment include working at the client&apos;s office, fixed hours (e.g. 9:00-17:00), supervision by the client, using the client&apos;s equipment, fixed monthly pay and having no other clients.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Consequences of reclassification</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If the tax office reclassifies your contract, the client may face fines, you may lose ZUS reliefs, have tax problems and lose the right to Ryczałt (for certain categories).
              </p>

              <h3 id="b2b-contracts-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Working for a former employer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Can I work for the same employer I previously had an employment contract with?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Yes, but you may lose some ZUS reliefs and the Ryczałt tax rate (for certain categories) if the services are the same as those you provided as an employee.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Conditions</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                At least 6 months must pass between leaving the job and signing the B2B contract. The services should not be identical to those you provided as an employee. You should work for other clients at the same time.
              </p>
            </div>
          </section>

          {/* Reporting Requirements Section */}
          <section id="reporting-requirements" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Reporting requirements and official inspections
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Knowing exactly what authorities check helps you prepare for inspections and avoid problems.
              </p>

              <h3 id="reporting-requirements-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Statistics registration (REGON)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Although it is automatic</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Although it is automatic, it is important to understand that your business is classified for statistical reporting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>What REGON is</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                REGON (Rejestr Gospodarki Narodowej) is the national economy register. It is used for statistical reporting and business classification.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                REGON is assigned automatically when you register in CEIDG. You do not need to do anything else.
              </p>

              <h3 id="reporting-requirements-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                ZUS inspections
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Social insurance may inspect</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Social insurance may check whether your self-employment is sham (e.g. if you left a company and signed a B2B contract with the same company the next day).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Consequences of sham self-employment</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                In that case you may lose the right to &quot;Ulga na start&quot;, get a ZUS fine and lose the right to Ryczałt (for certain categories).
              </p>

              <h3 id="reporting-requirements-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Tax office inspections
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>What the tax office checks</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The tax office may check your invoices, bank statements, client contracts, income and expense records and correctness of tax calculation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>Your rights during an inspection</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                During an inspection you have the right to know the reason for the inspection, to have a lawyer, to have an interpreter (if you do not speak Polish) and to receive copies of all documents.
              </p>
            </div>
          </section>

          {/* How to Start as Freelancer Section */}
          <section id="how-to-start" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to become a freelancer - tips for beginners
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Starting a freelancing career can seem difficult, but with the right strategy and preparation you can quickly become a successful independent professional.
              </p>

              <h3 id="how-to-start-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                How to choose your profession and direction?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The first step to successful freelancing is an <strong>honest assessment of your skills and interests</strong>. Ask yourself:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li>What do I do well?</li>
                <li>What do I enjoy doing?</li>
                <li>Which skills can I improve quickly?</li>
                <li>Which market has demand for my services?</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                If you are not sure, start with <strong>simplest professions</strong>: copywriting, translations, data entry, image editing. This lets you gain experience and see what suits you.
              </p>

              <h3 id="how-to-start-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Who to start as? Professions for beginners
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Here are professions that suit freelancing beginners:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Copywriter</strong> - if you write well, you can start with simple texts for websites and social media</li>
                <li><strong>Translator</strong> - if you speak two languages fluently, translation is steady income</li>
                <li><strong>Virtual assistant</strong> - admin support, email handling, scheduling</li>
                <li><strong>Graphic designer</strong> - if you have basic skills in Photoshop or Figma</li>
                <li><strong>Data entry</strong> - simple work that does not require special skills</li>
                <li><strong>Online tutor</strong> - if you are an expert in a field, you can teach others</li>
                <li><strong>SMM manager</strong> - managing social media for businesses</li>
              </ul>

              <h3 id="how-to-start-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Where to look - platforms and ways to find clients
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Several ways to find your first clients:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Freelance platforms</strong> (Upwork, Fiverr, Freelancer.com) - good for beginners but high competition</li>
                <li><strong>Social networks</strong> (LinkedIn, Facebook groups, Telegram channels) - you can find clients directly</li>
                <li><strong>Polish platforms</strong> (NoFluffJobs, JustJoinIT) - for IT specialists</li>
                <li><strong>Personal network</strong> - tell friends and contacts about your services</li>
                <li><strong>Own website or portfolio</strong> - create a profile on Behance, Dribbble or your own site</li>
              </ul>

              <h3 id="how-to-start-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Learning - courses and resources
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                For a successful start in freelancing it is important to keep improving your skills. Here are different types of learning resources:
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Free courses and resources
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>YouTube</strong> - free tutorials on any topic</li>
                <li><strong>Coursera</strong> - free courses from universities (certificate for a fee)</li>
                <li><strong>edX</strong> - free courses from leading universities</li>
                <li><strong>Khan Academy</strong> - free education on many subjects</li>
                <li><strong>Codecademy</strong> - free programming courses</li>
                <li><strong>Udemy</strong> - often has free courses during promotions</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Paid courses (mid-range)
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Udemy</strong> - courses from <strong>50 to 200 PLN</strong>, often with discounts</li>
                <li><strong>Skillshare</strong> - subscription from <strong>100 PLN/month</strong>, unlimited access</li>
                <li><strong>Pluralsight</strong> - subscription from <strong>150 PLN/month</strong>, focus on technical skills</li>
                <li><strong>LinkedIn Learning</strong> - subscription from <strong>120 PLN/month</strong></li>
                <li><strong>Domestika</strong> - design and creative courses from <strong>80 to 300 PLN</strong></li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Premium courses and bootcamps
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Coding bootcamps</strong> - from <strong>5,000 to 20,000 PLN</strong>, intensive programmes with job guarantee</li>
                <li><strong>Professional certifications</strong> (Google, Microsoft, Adobe) - from <strong>500 to 2,000 PLN</strong></li>
                <li><strong>Online schools</strong> (Thinkful, General Assembly) - from <strong>10,000 to 30,000 PLN</strong></li>
                <li><strong>One-to-one mentoring</strong> - from <strong>200 to 500 PLN/hour</strong></li>
              </ul>

              <h3 id="how-to-start-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Course languages - availability table
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Language</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Free courses</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Paid courses</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Premium courses</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3"><strong>English</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Very many (Coursera, edX, YouTube)</td>
                      <td className="border border-gray-300 px-4 py-3">Largest choice (Udemy, Skillshare)</td>
                      <td className="border border-gray-300 px-4 py-3">All premium platforms</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3"><strong>Polish</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Limited choice (YouTube, free webinars)</td>
                      <td className="border border-gray-300 px-4 py-3">Medium choice (Udemy, Polish platforms)</td>
                      <td className="border border-gray-300 px-4 py-3">Polish bootcamps and schools</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3"><strong>Ukrainian</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Limited choice (YouTube, Prometheus)</td>
                      <td className="border border-gray-300 px-4 py-3">Small choice (Ukrainian platforms)</td>
                      <td className="border border-gray-300 px-4 py-3">Ukrainian online schools</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3"><strong>German</strong></td>
                      <td className="border border-gray-300 px-4 py-3">Medium choice (German universities)</td>
                      <td className="border border-gray-300 px-4 py-3">Good choice (German platforms)</td>
                      <td className="border border-gray-300 px-4 py-3">German bootcamps</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 id="how-to-start-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Practical tips for starting
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-lg">
                <li><strong>Start small</strong> - do not be afraid to take small projects to build experience and reviews</li>
                <li><strong>Build a portfolio</strong> - even without commercial projects, create a few pieces to show your skills</li>
                <li><strong>Set realistic rates</strong> - at the start it is better to work at lower rates to gain experience</li>
                <li><strong>Keep learning</strong> - the market changes, so it is important to update your skills</li>
                <li><strong>Be professional</strong> - always meet deadlines, communicate politely, keep your promises</li>
                <li><strong>Keep all your work</strong> - it will become part of your portfolio</li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <p className="text-gray-700 font-semibold mb-2">Official sources</p>
                <p className="text-gray-700 text-sm"><a href="https://www.biznes.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biznes.gov.pl</a> - Information on entrepreneurship support and training programmes for entrepreneurs.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              FAQ - Questions and answers
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                This section contains answers to the most common freelancer questions about working in Poland. All answers are in plain language and based on current 2026 legislation.
              </p>

              <h3 id="faq-1" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Basic registration questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Do I need to register a JDG if I only work with foreign clients?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, if you exceed the unregistered activity limit (3,500-3,600 PLN per month). Even if clients are abroad, you must still declare income in Poland if you are a tax resident.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    How long does JDG registration take?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Registration via CEIDG takes 7-10 working days. But preparing documents and setup can take extra time.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Can I register a JDG remotely?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, registration is online via CEIDG. You only need Profil Zaufany to sign the application.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Do I need a virtual office for registration?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    No, a virtual office is not mandatory. You can use your home address. But a virtual office is convenient if you do not want your home address in the public register.
                  </p>
                </div>
              </div>

              <h3 id="faq-2" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Taxation questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Which taxation system is best for a freelancer?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It depends on your income and expenses. For most freelancers with low expenses Ryczałt 12% or 8.5% is best. For those with significant expenses Skala podatkowa is more beneficial.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Can I change my taxation system?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, you can change it once a year by submitting an application by 20 January.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    How much tax do I pay on Ryczałt 12%?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You pay 12% of all income without deducting expenses. For example, if your income is 100,000 PLN per year, tax will be 12,000 PLN.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Can I deduct expenses on Ryczałt?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    No, on Ryczałt expenses are not deducted. You pay a percentage of total income.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    What is Kwota wolna od podatku?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It is the tax-free allowance. In 2026 it is about 30,000 PLN. That means the first 30,000 PLN of your income is not taxed under Skala podatkowa.
                  </p>
                </div>
              </div>

              <h3 id="faq-3" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                ZUS questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    How much ZUS do I pay at the start?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For the first 6 months you are exempt from social contributions thanks to &quot;Ulga na start&quot;. You only pay health insurance (about 400-500 PLN per month).
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    What is Mały ZUS Plus?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It is a preferential period of 24 months after &quot;Ulga na start&quot; ends. You pay contributions on a reduced base, which is much less than full ZUS.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    How much does full ZUS cost?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Full ZUS in 2026 is about 1,600-2,000 PLN per month. It depends on calculation and additional contributions.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Do I have to pay ZUS if I earned nothing?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, if you are registered as an entrepreneur you must pay ZUS even with no income. But &quot;Ulga na start&quot; and &quot;Mały ZUS Plus&quot; help reduce costs at the start.
                  </p>
                </div>
              </div>

              <h3 id="faq-4" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                VAT questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    When must I register as a VAT payer?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You must register when your annual turnover exceeds 200,000 PLN.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    What is VAT-EU?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    VAT-EU is a number for working with clients in EU countries. It lets you use the Reverse Charge mechanism and avoid paying VAT twice.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Do freelancers need a cash register?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Usually no. Most freelancers use electronic invoices via KSeF, which replaces a cash register.
                  </p>
                </div>
              </div>

              <h3 id="faq-5" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Accounting questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Do I need KPiR for Ryczałt?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    No, for Ryczałt KPiR is not required. It is only needed for Skala podatkowa and Podatek liniowy.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    What is KSeF?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    KSeF (Krajowy System e-Faktur) is the national electronic invoice system. It is gradually becoming mandatory for all entrepreneurs.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Can I do accounting myself?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, but it can be complex, especially on Skala or Liniowy. For Ryczałt it is simpler because KPiR is not required.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    How much does an accountant cost?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Cost depends on the type of service. Online services cost 150-400 PLN per month, traditional offices 300-600 PLN per month.
                  </p>
                </div>
              </div>

              <h3 id="faq-6" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                International income questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Do I need to declare income from Upwork/Fiverr?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, all income from international platforms must be declared in your annual PIT-36 return.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    How do I declare income in dollars?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Income is converted at the NBP rate on the date of receipt. The converted amount is entered in the PIT-36 return.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Do I pay tax twice?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    No, thanks to double taxation treaties you do not pay tax twice. Tax is paid in the country where you are a tax resident.
                  </p>
                </div>
              </div>

              <h3 id="faq-7" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Legalisation / residence questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Can I get a residence permit on the basis of JDG?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, you can apply for a temporary residence permit on the basis of running a business. You need stable income and benefit to the Polish economy.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    How much do I need to earn for a residence permit?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Usually you need income of at least 3,000-5,000 PLN per month and at least 6-12 months of activity.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Do incubators help with legalisation?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Some incubators help prepare documents for a residence permit. But not all offer this service, so it is better to ask in advance.
                  </p>
                </div>
              </div>

              <h3 id="faq-8" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                B2B contracts and employment relationship questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Can I work for the same employer I previously had an employment contract with?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, but you may lose some ZUS reliefs and the Ryczałt tax rate (for certain categories) if the services are the same as those you provided as an employee. At least 6 months must pass between leaving the job and signing the B2B contract.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    How does self-employment differ from an employment contract?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Self-employment gives more take-home pay but no paid holiday or sick leave. An employment contract gives job security and a social package but less take-home pay.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Can the tax office reclassify my B2B contract as employment?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, if you work at the client&apos;s office under their direct supervision and on a schedule they set. This can lead to fines and loss of reliefs.
                  </p>
                </div>
              </div>

              <h3 id="faq-9" className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Liability questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Am I liable for business debts with my personal assets?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yes, on JDG you are liable for business debts with all your personal assets: car, flat, funds in private accounts. Unlike an LLC, where liability is limited to share capital.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    How can I protect my assets?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Several ways: professional liability insurance (OC), separation of property with spouse (intercyza), or creating an LLC instead of a JDG.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Is professional liability insurance required?
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It is not mandatory but strongly recommended, especially for IT specialists, marketers and consultants. OC covers client losses caused by your mistakes.
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
                        "name": "Do I need to register a JDG if I only work with foreign clients?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes, if you exceed the unregistered activity limit (3,500-3,600 PLN per month). Even if clients are abroad, you must still declare income in Poland if you are a tax resident."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Which taxation system is best for a freelancer?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "It depends on your income and expenses. For most freelancers with low expenses Ryczałt 12% or 8.5% is best. For those with significant expenses Skala podatkowa is more beneficial."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How much ZUS do I pay at the start?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "For the first 6 months you are exempt from social contributions thanks to \"Ulga na start\". You only pay health insurance (about 400-500 PLN per month)."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "When must I register as a VAT payer?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "You must register when your annual turnover exceeds 200,000 PLN."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Do I need KPiR for Ryczałt?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "No, for Ryczałt KPiR is not required. It is only needed for Skala podatkowa and Podatek liniowy."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Do I need to declare income from Upwork/Fiverr?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes, all income from international platforms must be declared in your annual PIT-36 return."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Can I get a residence permit on the basis of JDG?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes, you can apply for a temporary residence permit on the basis of running a business. You need stable income and benefit to the Polish economy."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Can I work for the same employer I previously had an employment contract with?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes, but you may lose some ZUS reliefs and the Ryczałt tax rate (for certain categories) if the services are the same as those you provided as an employee. At least 6 months must pass between leaving the job and signing the B2B contract."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How does self-employment differ from an employment contract?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Self-employment gives more take-home pay but no paid holiday or sick leave. An employment contract gives job security and a social package but less take-home pay."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Am I liable for business debts with my personal assets?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes, on JDG you are liable for business debts with all your personal assets: car, flat, funds in private accounts. Unlike an LLC, where liability is limited to share capital."
                        }
                      }
                    ]
                  })
                }}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                  This FAQ covers the most common freelancer questions about working in Poland. If you have more questions, we recommend consulting an accountant or getting official guidance from the tax office.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  Remember that legislation can change, so always check that information is up to date on official government sites.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar Navigation - same row as article, sticky on scroll */}
        <aside className="hidden lg:block w-[min(359px,28rem)] flex-shrink-0 self-start sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden border-l border-gray-200 bg-gray-50">
          <nav className="p-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Table of contents
            </h3>
            <ul className="space-y-0.5">
              {navigationSectionsEn.map((section) => {
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
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
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
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/terms/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of use
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

      {/* Scroll to top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}
