#!/bin/bash

# Скрипт для розгортання на freelancer.net.pl
echo "🚀 Початок розгортання freelancer.net.pl..."

# Кольори для виводу
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Функція для логування
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Перевірка наявності Node.js
if ! command -v node &> /dev/null; then
    error "Node.js не встановлений. Встановіть Node.js 18+"
    exit 1
fi

# Перевірка версії Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    error "Потрібна Node.js версія 18+. Поточна версія: $(node -v)"
    exit 1
fi

log "Node.js версія: $(node -v)"

# Очищення попередніх збірок
log "🧹 Очищення попередніх збірок..."
rm -rf .next
rm -rf out

# Встановлення залежностей
log "📦 Встановлення залежностей..."
npm install

if [ $? -ne 0 ]; then
    error "Помилка встановлення залежностей"
    exit 1
fi

# Збірка проекту
log "🔨 Збірка проекту..."
npm run build

if [ $? -ne 0 ]; then
    error "Помилка збірки проекту"
    exit 1
fi

# Перевірка наявності збірки
if [ ! -d ".next/standalone" ]; then
    error "Папка .next/standalone не знайдена"
    exit 1
fi

log "✅ Збірка завершена успішно!"

# Створення архіву для завантаження
log "📦 Створення архіву для завантаження..."
tar -czf freelancer-net-pl-deploy.tar.gz \
    .next/standalone \
    .next/static \
    public \
    package.json

if [ $? -ne 0 ]; then
    error "Помилка створення архіву"
    exit 1
fi

log "✅ Архів створено: freelancer-net-pl-deploy.tar.gz"

# Інструкції для розгортання
echo ""
log "📋 Інструкції для розгортання на сервері:"
echo ""
echo "1. Завантажте файл 'freelancer-net-pl-deploy.tar.gz' на сервер"
echo "2. Розархівуйте файли в папку public_html:"
echo "   tar -xzf freelancer-net-pl-deploy.tar.gz -C public_html/"
echo ""
echo "3. Встановіть залежності на сервері:"
echo "   cd public_html/.next/standalone"
echo "   npm install --production"
echo ""
echo "4. Запустіть додаток:"
echo "   node server.js"
echo ""
echo "5. Для постійного запуску використовуйте PM2:"
echo "   npm install -g pm2"
echo "   pm2 start server.js --name freelancer-net-pl"
echo "   pm2 save"
echo "   pm2 startup"
echo ""
echo "6. Налаштуйте SSL сертифікат (Let's Encrypt):"
echo "   sudo certbot --nginx -d freelancer.net.pl"
echo ""

# Перевірка розміру архіву
ARCHIVE_SIZE=$(du -h freelancer-net-pl-deploy.tar.gz | cut -f1)
log "📊 Розмір архіву: $ARCHIVE_SIZE"

# Перевірка вмісту архіву
log "📋 Вміст архіву:"
tar -tzf freelancer-net-pl-deploy.tar.gz | head -20

echo ""
log "🎉 Підготовка до розгортання завершена!"
log "Детальні інструкції знаходяться в файлі DEPLOYMENT_LITESPEED.md" 