'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import type { Language } from '@/lib/translations';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange?: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLanguage }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const languages: { code: Language; label: string; path: string }[] = [
    { code: 'pl', label: 'PL', path: '/' },
    { code: 'uk', label: 'UKR', path: '/ukr/' },
    { code: 'en', label: 'EN', path: '/en/' },
  ];

  const currentLabel = languages.find(l => l.code === currentLanguage)?.label || 'PL';

  const handleLanguageChange = (lang: Language) => {
    const targetLang = languages.find(l => l.code === lang);
    if (targetLang) {
      // Remove language prefix from current pathname; ensure trailing slash
      let cleanPath = pathname.replace(/^\/(ukr|en)\/?/, '/');
      if (cleanPath === '') cleanPath = '/';
      if (cleanPath !== '/' && !cleanPath.endsWith('/')) cleanPath += '/';

      if (lang === 'uk') {
        router.push(cleanPath === '/' ? '/ukr/' : `/ukr${cleanPath}`);
      } else if (lang === 'en') {
        router.push(cleanPath === '/' ? '/en/' : `/en${cleanPath}`);
      } else {
        router.push(cleanPath);
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-gray-50">
          <span className="font-medium text-sm">{currentLabel}</span>
          <ChevronDown className="h-3 w-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[100px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`cursor-pointer text-sm ${
              currentLanguage === lang.code 
                ? 'bg-gray-50 font-medium text-gray-900' 
                : 'text-gray-600'
            }`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
