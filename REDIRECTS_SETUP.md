# Налаштування 301 редіректів для freelancer.org.pl

## Що було зроблено

1. **Прибрано фото бухгалтерів** - видалено секцію "Рекомендовані бухгалтери" з головної сторінки
2. **Оновлено адресу** - змінено адресу inFakt з `31-153 Kraków, ul. Szlak 49` на `31-445 Kraków, ul. płk. pil. Stefana Łaszkiewicza 2` у всіх файлах
3. **Створено файли для 301 редіректів** для різних платформ

## Файли для 301 редіректів

### 1. .htaccess (для Apache серверів)
Файл `public/.htaccess` містить всі необхідні редіректи для Apache серверів.

### 2. _redirects (для Netlify)
Файл `public/_redirects` містить редіректи для Netlify.

### 3. vercel.json (для Vercel)
Файл `vercel.json` містить редіректи для Vercel.

### 4. netlify.toml (для Netlify)
Файл `netlify.toml` оновлено з додатковими редіректами.

### 5. middleware.ts (для Next.js)
Файл `middleware.ts` оновлено з додатковими редіректами для Next.js.

## Як розгорнути

### Для Apache серверів:
1. Скопіюйте файл `public/.htaccess` в корінь вашого сайту
2. Переконайтеся, що mod_rewrite увімкнено на сервері

### Для Netlify:
1. Завантажте файли на Netlify
2. Файл `public/_redirects` автоматично буде використано
3. Файл `netlify.toml` також буде автоматично застосовано

### Для Vercel:
1. Завантажте код на Vercel
2. Файл `vercel.json` автоматично буде використано

### Для Next.js:
1. Файл `middleware.ts` автоматично буде використано при розгортанні

## Перевірка редіректів

Після розгортання перевірте, чи працюють редіректи:

1. Відкрийте старий URL (наприклад, `https://freelancer.org.pl/kontakty`)
2. Переконайтеся, що вас перенаправляє на новий URL (`https://freelancer.org.pl/contact`)
3. Перевірте статус код 301 у Developer Tools (Network tab)

## Додаткові налаштування

### DNS редіректи для старих доменів:
Для редіректів з `buh-online.pl` та `freelancer.net.pl` потрібно налаштувати DNS або серверні редіректи на рівні хостингу.

### SSL сертифікати:
Переконайтеся, що всі домени мають дійсні SSL сертифікати для коректної роботи HTTPS редіректів.

## Структура редіректів

### Основні сторінки:
- `/kontakty` → `/contact`
- `/polityka-konfidencjalnosti` → `/privacy-policy`
- `/umovy-vykorystannya` → `/terms`
- `/terms-of-use` → `/terms`
- `/privacy` → `/privacy-policy`
- `/contacts` → `/contact`

### Додаткові сторінки:
- `/kontakt` → `/contact`
- `/polityka` → `/privacy-policy`
- `/umovy` → `/terms`
- `/regulamin` → `/terms`
- `/o-nas` → `/`
- `/about` → `/`
- `/uslugi` → `/`
- `/services` → `/`
- `/cennik` → `/`
- `/pricing` → `/`
- `/artykuly` → `/blog`
- `/articles` → `/blog`
- `/kalkulator` → `/tax-calculator`
- `/calculator` → `/tax-calculator`
- `/podatki` → `/tax-calculator`
- `/taxes` → `/tax-calculator`

### Файли:
- Всі `.html`, `.php`, `.tsx` файли перенаправляються на відповідні сторінки

## Важливі примітки

1. **301 редіректи** - це постійні редіректи, які передають SEO вагу
2. **Перевірте пошукові системи** - після налаштування редіректів перевірте Google Search Console та інші інструменти
3. **Моніторинг** - слідкуйте за помилками 404 та іншими проблемами після налаштування
4. **Тестування** - перевірте всі редіректи перед публікацією на продакшен
