# 🚀 Безкоштовне розгортання сайту

## Варіант 1: Vercel (рекомендовано)

### Крок 1: Підготовка
```bash
# Встановлення Vercel CLI
npm install -g vercel

# Вхід в акаунт
vercel login
```

### Крок 2: Розгортання
```bash
# Автоматичне розгортання
vercel

# Або з доменом
vercel --prod
```

### Крок 3: Налаштування домену
1. Відкрийте [vercel.com](https://vercel.com)
2. Перейдіть в налаштування проекту
3. Додайте домен `freelancer.net.pl`
4. Налаштуйте DNS записи

**Результат:** `https://freelancer-net-pl.vercel.app` або ваш домен

---

## Варіант 2: Netlify

### Крок 1: Підготовка
```bash
# Встановлення Netlify CLI
npm install -g netlify-cli

# Вхід в акаунт
netlify login
```

### Крок 2: Розгортання
```bash
# Збірка проекту
npm run build

# Розгортання
netlify deploy --prod --dir=.next
```

### Крок 3: Налаштування домену
1. Відкрийте [netlify.com](https://netlify.com)
2. Додайте домен `freelancer.net.pl`
3. Налаштуйте DNS

**Результат:** `https://your-site.netlify.app` або ваш домен

---

## Варіант 3: GitHub Pages

### Крок 1: Налаштування конфігурації
```bash
# Відредагуйте next.config.mjs
# Розкоментуйте рядки для статичного експорту:
# output: 'export',
# trailingSlash: true,
# distDir: 'out',
```

### Крок 2: Збірка
```bash
npm run build
```

### Крок 3: Завантаження на GitHub
```bash
# Створіть репозиторій на GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/freelancer-net-pl.git
git push -u origin main
```

### Крок 4: Налаштування GitHub Pages
1. Перейдіть в Settings → Pages
2. Виберіть Source: Deploy from a branch
3. Виберіть branch: main, folder: /out
4. Збережіть

**Результат:** `https://username.github.io/freelancer-net-pl`

---

## Варіант 4: Cloudflare Pages

### Крок 1: Підготовка
1. Створіть акаунт на [cloudflare.com](https://cloudflare.com)
2. Перейдіть в Pages

### Крок 2: Розгортання
1. Connect to Git
2. Виберіть ваш репозиторій
3. Налаштування:
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node.js version: 18

### Крок 3: Домен
1. Додайте домен `freelancer.net.pl`
2. Налаштуйте DNS записи

**Результат:** `https://your-site.pages.dev` або ваш домен

---

## Варіант 5: Railway

### Крок 1: Підготовка
1. Створіть акаунт на [railway.app](https://railway.app)
2. Встановіть Railway CLI: `npm install -g @railway/cli`

### Крок 2: Розгортання
```bash
# Вхід
railway login

# Розгортання
railway up
```

### Крок 3: Домен
1. В налаштуваннях проекту додайте домен
2. Налаштуйте DNS

**Результат:** `https://your-app.railway.app` або ваш домен

---

## 🎯 Рекомендації

### Для freelancer.net.pl:
1. **Vercel** - найкращий вибір (швидкий, надійний, безкоштовний)
2. **Netlify** - альтернатива Vercel
3. **Cloudflare Pages** - хороша швидкість

### Переваги безкоштовних платформ:
- ✅ Безкоштовний SSL сертифікат
- ✅ Автоматичне розгортання з Git
- ✅ CDN та оптимізація
- ✅ Аналітика та моніторинг
- ✅ Безкоштовний домен (піддомен)

### Налаштування домену:
1. Купіть домен `freelancer.net.pl`
2. Налаштуйте DNS записи:
   - A record: IP адреса платформи
   - CNAME: ваш-сайт.platform.com
3. Дочекайтеся оновлення DNS (до 24 годин)

---

## 📊 Порівняння платформ

| Платформа | Безкоштовний ліміт | Швидкість | Складність | Рекомендація |
|-----------|-------------------|-----------|------------|--------------|
| Vercel | 100GB/міс | ⭐⭐⭐⭐⭐ | ⭐⭐ | ✅ Найкращий |
| Netlify | 100GB/міс | ⭐⭐⭐⭐ | ⭐⭐ | ✅ Хороший |
| Cloudflare | Безліміт | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ Швидкий |
| GitHub Pages | 1GB | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⚠️ Обмежений |
| Railway | $5/міс | ⭐⭐⭐⭐ | ⭐⭐⭐ | 💰 Платний |

---

## 🚀 Швидкий старт з Vercel

```bash
# 1. Встановлення
npm install -g vercel

# 2. Вхід
vercel login

# 3. Розгортання
vercel --prod

# 4. Налаштування домену
vercel domains add freelancer.net.pl
```

**Час розгортання:** 2-5 хвилин
**Вартість:** Безкоштовно
**Результат:** Професійний сайт з SSL та CDN 