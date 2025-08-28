# Нові Favicon у стилі latwy-start.pl

## 🎨 Що створено

Я створив 3 варіанти favicon у стилі [latwy-start.pl](https://latwy-start.pl/wp-content/uploads/2022/02/cropped-fav-32x32.png):

### 1. **FO** (Freelancer.org.pl) - `/public/favicon.svg`
- Синій фон (#1e40af) з заокругленими кутами
- Білі літери "FO" 
- Стильний, простий дизайн

### 2. **IF** (inFakt) - `/public/favicon-if.svg`
- Синій фон (#1e40af) з заокругленими кутами
- Білі літери "IF"
- Альтернативний варіант для inFakt

### 3. **FR** (Freelancer) - `/public/favicon-fr.svg`
- Синій фон (#1e40af) з заокругленими кутами
- Білі літери "FR"
- Варіант для Freelancer

## 🔄 Як змінити favicon

### Варіант 1: FO (поточний)
```tsx
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

### Варіант 2: IF (inFakt)
```tsx
<link rel="icon" type="image/svg+xml" href="/favicon-if.svg" />
```

### Варіант 3: FR (Freelancer)
```tsx
<link rel="icon" type="image/svg+xml" href="/favicon-fr.svg" />
```

## 📱 Генерація PNG версій

Для генерації PNG файлів використовуйте [favicon.io](https://favicon.io/favicon-converter/):

1. Завантажте потрібний SVG файл
2. Скачайте згенерований пакет
3. Розархівуйте в `/public/`

## ✨ Переваги нового дизайну

- **Простий та зрозумілий** - як у latwy-start.pl
- **Брендовий** - літери вашого сайту
- **Сучасний** - заокруглені кути та чистий дизайн
- **Масштабований** - SVG формат для всіх розмірів
- **Професійний** - синій колір вашого бренду

## 🎯 Рекомендації

**Рекомендую використовувати "FO"** як основний favicon, оскільки:
- F = Freelancer.org.pl
- O = Online бухгалтерія
- Простий та запам'ятовуваний

Відкрийте http://localhost:3000 щоб побачити новий favicon у дії! 🚀
