"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations, type Language } from "@/lib/translations"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function TermsPage() {
  const language: Language = 'en';
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/en/#jdg', label: 'Register JDG' },
    { href: '/en/#taxation-systems', label: 'Tax systems' },
    { href: '/en/#zus-insurance', label: 'ZUS insurance' },
    { href: '/en/#how-to-start', label: 'How to start' },
  ];

  const content = {
    title: 'Terms of use',
    lastUpdate: 'Last updated:',
    section1: {
      title: '1. General provisions',
      p1: 'These Terms of Use govern your use of the website freelancer.org.pl and all related services.',
      p2: 'By using our site you agree to these terms. If you do not agree with any part of these terms, please do not use our site.'
    },
    section2: {
      title: '2. Description of services',
      p1: 'Our site provides information about accounting services in Poland, in particular:',
      items: [
        'Information on business registration in Poland',
        'Advice on accounting services',
        'Links to partner services (inFakt)',
        'Contact details for further advice'
      ],
      important: 'Important: We do not provide accounting services directly. Our site is an information resource and partner platform.'
    },
    section3: {
      title: '3. Partner links',
      p: 'Our site contains partner links to the inFakt service. This means that:',
      items: [
        'When you follow our links and register with inFakt we may receive a commission',
        'This commission does not affect the price you pay',
        'All inFakt services are provided on their own terms',
        'We are not responsible for the quality of inFakt services',
        'For accounting services please contact inFakt directly'
      ]
    },
    section4: {
      title: '4. Information site',
      p1: 'freelancer.org.pl is an information site that:',
      items: [
        'Provides useful information about accounting services in Poland',
        'Operates as an inFakt partner platform',
        'Does not provide services directly',
        'Helps users make informed choices'
      ],
      p2: 'The site aims to provide quality information about accounting services and help entrepreneurs find suitable solutions.'
    },
    section5: {
      title: '5. Limitation of liability',
      p1: 'Information on our site is provided "as is" without any warranties. We do not guarantee:',
      items: [
        'Accuracy or completeness of the information',
        'Uninterrupted availability of the site',
        'Absence of errors or viruses',
        'Fitness of the information for your particular needs'
      ],
      p2: 'We are not liable for any loss arising from use of our site or the information on it.'
    },
    section6: {
      title: '6. Intellectual property',
      p1: 'All content on our site, including text, images, logos and design, is owned by our site or used with permission.',
      p2: 'You may not:',
      items: [
        'Copy or distribute content without permission',
        'Use our content for commercial purposes',
        'Modify or create derivative works'
      ]
    },
    section7: {
      title: '7. Use of the site',
      p: 'You agree not to use our site for:',
      items: [
        'Breaking laws or third-party rights',
        'Distributing harmful content',
        'Spam or unsolicited messages',
        'Attempting unauthorised access to systems',
        'Disrupting the site'
      ]
    },
    section8: {
      title: '8. Changes to terms',
      p1: 'We reserve the right to change these terms at any time. We will notify you of significant changes via our site.',
      p2: 'Continued use of the site after changes means you accept the new terms.'
    },
    section9: {
      title: '9. Governing law',
      p: 'These terms are governed by Polish law. Any disputes will be resolved in the courts of Poland.'
    },
    section10: {
      title: '10. Contact',
      p1: 'If you have questions about these terms, contact us:',
      note: 'Note: For accounting services please contact the official inFakt website directly.'
    },
    footer: {
      quickLinks: 'Quick links',
      contact: 'Contact',
      privacy: 'Privacy policy',
      terms: 'Terms of use',
      copyright: 'Freelancer.org.pl. All rights reserved.'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-6 w-6 md:h-8 md:w-8 text-blue-600"
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
              href="/en/"
              className="text-base md:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Freelancer.org.pl
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher currentLanguage={language} />
          </nav>
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher currentLanguage={language} />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">{content.title}</h1>
              <p className="text-base md:text-xl text-gray-600 px-4">
                {content.lastUpdate} {new Date().toLocaleDateString('uk-UA')}
              </p>
            </div>

            <Card className="bg-white shadow-lg">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section1.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section1.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section1.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section2.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section2.p1}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section2.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm md:text-base">
                  <strong>Важливо:</strong> {content.section2.important}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section3.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section3.p}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section3.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section4.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  <strong>freelancer.org.pl</strong> - {content.section4.p1}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section4.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm md:text-base">
                  {content.section4.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section5.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section5.p1}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section5.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm md:text-base">
                  {content.section5.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section6.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section6.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section6.p2}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section6.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section7.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">{content.section7.p}</p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section7.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section8.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section8.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section8.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section9.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section9.p}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section10.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">{content.section10.p1}</p>
                <div className="space-y-2">
                  <p className="text-sm md:text-base"><strong>Email:</strong> info@freelancer.org.pl</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Примітка:</strong> {content.section10.note} <a href="https://www.infakt.pl/" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 underline">https://www.infakt.pl/</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <rect x="7" y="7" width="10" height="3"/>
                  <rect x="7" y="14" width="3" height="3"/>
                  <rect x="14" y="14" width="3" height="3"/>
                </svg>
                <Link href="/en/" className="text-lg font-semibold hover:text-blue-400 transition-colors">Freelancer.org.pl</Link>
              </div>
              <p className="text-gray-400 text-xs md:text-sm max-w-2xl">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><Link href="/en/contact/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{t.footer.contact}</Link></li>
                <li><Link href="/en/privacy-policy/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{content.footer.privacy}</Link></li>
                <li><Link href="/en/terms/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{content.footer.terms}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="text-sm md:text-base">Email: info@freelancer.org.pl</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
