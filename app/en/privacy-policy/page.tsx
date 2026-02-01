"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations, type Language } from "@/lib/translations"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function PrivacyPolicyPage() {
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
    title: 'Privacy policy',
    lastUpdate: 'Last updated:',
    section1: {
      title: '1. General information',
      p1: 'This Privacy Policy describes how we collect, use and protect your personal information when you use our website freelancer.org.pl.',
      p2: 'We are committed to protecting your privacy and ensuring secure use of our site in accordance with EU Regulation 2016/679 (GDPR) and other applicable data protection laws.'
    },
    section2: {
      title: '2. About our site',
      p1: 'freelancer.org.pl is an information site providing useful information about accounting services in Poland. Our site is a partner platform of the inFakt service.',
      p2: 'The site provides detailed information about inFakt services, including:',
      items: [
        'Description of inFakt services',
        'Registration and usage instructions',
        'User reviews',
        'Comparison with other services',
        'Useful articles and tips'
      ],
      p3: 'The site acts as an information resource and inFakt partner platform, giving users easy access to information about accounting services in Poland.'
    },
    section3: {
      title: '3. What information we collect',
      h31: '3.1 Information you provide:',
      items1: [
        'Name and contact details (email, phone)',
        'Information about your business and enquiries',
        'Messages you send via the contact form'
      ],
      h32: '3.2 Information collected automatically:',
      items2: [
        'IP address and browser technical information',
        'Site usage (pages, time spent)',
        'Cookies and similar technologies',
        'Data on clicks via partner links'
      ]
    },
    section4: {
      title: '4. How we use your information',
      p: 'We use the information collected to:',
      items: [
        'Respond to your enquiries and provide advice',
        'Improve our site and services',
        'Send information about our services (with your consent)',
        'Track effectiveness of the partner programme',
        'Comply with legal obligations',
        'Protect our rights and security'
      ]
    },
    section5: {
      title: '5. Partner links and tracking',
      p1: 'Our site contains partner links to the inFakt service. When you follow these links and register with inFakt we may receive a commission, which does not affect the price you pay.',
      p2: 'We track the effectiveness of the partner programme for analytics and improvement, but we do not pass your personal data to third parties.'
    },
    section6: {
      title: '6. Cookies and tracking',
      p1: 'Our site uses cookies to improve your experience. Cookies are small text files stored on your device.',
      h3: 'Types of cookies we use:',
      items: [
        'Essential cookies: for basic site operation',
        'Analytics cookies: to analyse site usage',
        'Functional cookies: to remember your settings',
        'Partner cookies: to track partner links'
      ],
      p2: 'You can manage cookie settings in your browser or decline their use.'
    },
    section7: {
      title: '7. Sharing information',
      p: 'We do not sell, exchange or transfer your personal information to third parties except:',
      items: [
        'When necessary to provide services (e.g. to inFakt partners)',
        'When required by law',
        'With your explicit consent',
        'To protect our rights and security',
        'For partner programme tracking (without passing personal data)'
      ]
    },
    section8: {
      title: '8. Data security',
      p1: 'We implement appropriate technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure or destruction.',
      p2: 'No method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.'
    },
    section9: {
      title: '9. Your rights',
      p: 'Under GDPR you have the right to:',
      items: [
        'Access your personal data',
        'Correct inaccurate data',
        'Delete your data',
        'Restrict processing',
        'Data portability',
        'Withdraw consent',
        'Complain to a supervisory authority'
      ]
    },
    section10: {
      title: '10. Changes to this policy',
      p1: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via our site or email.',
      p2: 'We recommend checking this page regularly for the current version.'
    },
    section11: {
      title: '11. Contact',
      p1: 'If you have questions about this Privacy Policy or the processing of your data, contact us:',
      note: 'Note: For accounting services please contact inFakt directly via the details on the Contact page.'
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
                  <strong>freelancer.org.pl</strong> - {content.section2.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section2.p2}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section2.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm md:text-base">
                  {content.section2.p3}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section3.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{content.section3.h31}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                    {content.section3.items1.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{content.section3.h32}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                    {content.section3.items2.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section4.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">{content.section4.p}</p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section4.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
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
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{content.section6.h3}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                    {content.section6.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm md:text-base">
                  {content.section6.p2}
                </p>
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
                <p className="text-sm md:text-base">{content.section9.p}</p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2 md:ml-4">
                  {content.section9.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section10.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">
                  {content.section10.p1}
                </p>
                <p className="text-sm md:text-base">
                  {content.section10.p2}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg mt-4 md:mt-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{content.section11.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                <p className="text-sm md:text-base">{content.section11.p1}</p>
                <div className="space-y-2">
                  <p className="text-sm md:text-base"><strong>Email:</strong> info@freelancer.org.pl</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Примітка:</strong> {content.section11.note}
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
                <li className="text-sm md:text-base">{t.footer.addressLabel}: {t.footer.address}</li>
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
