#!/bin/bash

# Скрипт для швидкого розгортання на Vercel
echo "🚀 Розгортання на Vercel..."

# Кольори для виводу
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Перевірка наявності Vercel CLI
if ! command -v vercel &> /dev/null; then
    log "📦 Встановлення Vercel CLI..."
    npm install -g vercel
    
    if [ $? -ne 0 ]; then
        error "Помилка встановлення Vercel CLI"
        exit 1
    fi
fi

log "✅ Vercel CLI встановлено"

# Перевірка авторизації
if ! vercel whoami &> /dev/null; then
    log "🔐 Авторизація в Vercel..."
    vercel login
    
    if [ $? -ne 0 ]; then
        error "Помилка авторизації в Vercel"
        exit 1
    fi
fi

log "✅ Авторизовано в Vercel"

# Збірка проекту
log "🔨 Збірка проекту..."
npm run build

if [ $? -ne 0 ]; then
    error "Помилка збірки проекту"
    exit 1
fi

log "✅ Проект зібрано"

# Розгортання
log "🚀 Розгортання на Vercel..."
vercel --prod

if [ $? -ne 0 ]; then
    error "Помилка розгортання"
    exit 1
fi

log "✅ Розгортання завершено!"

echo ""
log "🎉 Сайт успішно розгорнуто на Vercel!"
log "🌐 URL: https://freelancer-net-pl.vercel.app"
log "📧 Для підтримки: info@freelancer.net.pl"
echo ""
log "📋 Наступні кроки:"
echo "1. Налаштуйте домен freelancer.net.pl в панелі Vercel"
echo "2. Оновіть DNS записи у вашого провайдера доменів"
echo "3. Дочекайтеся оновлення DNS (до 24 годин)"
echo ""
log "📖 Детальні інструкції: DEPLOYMENT_FREE.md" 