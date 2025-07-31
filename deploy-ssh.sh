#!/bin/bash

# Скрипт для автоматичного розгортання через SSH
# Використання: ./deploy-ssh.sh user@server.com /path/to/public_html

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

# Перевірка параметрів
if [ $# -lt 2 ]; then
    error "Використання: $0 user@server.com /path/to/public_html"
    echo ""
    echo "Приклад:"
    echo "  $0 user@freelancer.net.pl /home/user/public_html"
    echo "  $0 root@server.com /var/www/html"
    exit 1
fi

SSH_HOST=$1
REMOTE_PATH=$2
ARCHIVE_NAME="freelancer-net-pl-deploy.tar.gz"

log "🚀 Початок автоматичного розгортання на $SSH_HOST"

# Перевірка наявності архіву
if [ ! -f "$ARCHIVE_NAME" ]; then
    error "Архів $ARCHIVE_NAME не знайдено. Спочатку запустіть ./deploy.sh"
    exit 1
fi

# Перевірка з'єднання з сервером
log "🔍 Перевірка з'єднання з сервером..."
if ! ssh -o ConnectTimeout=10 -o BatchMode=yes "$SSH_HOST" "echo 'Connection successful'" 2>/dev/null; then
    error "Не вдалося підключитися до сервера $SSH_HOST"
    echo "Переконайтеся, що:"
    echo "1. SSH ключі налаштовані"
    echo "2. Сервер доступний"
    echo "3. Користувач має права доступу"
    exit 1
fi

log "✅ З'єднання з сервером встановлено"

# Завантаження архіву на сервер
log "📤 Завантаження архіву на сервер..."
scp "$ARCHIVE_NAME" "$SSH_HOST:/tmp/"

if [ $? -ne 0 ]; then
    error "Помилка завантаження архіву"
    exit 1
fi

log "✅ Архів завантажено на сервер"

# Виконання команд на сервері
log "🔧 Розгортання на сервері..."

ssh "$SSH_HOST" << EOF
    set -e
    
    echo "🧹 Очищення попередньої версії..."
    rm -rf $REMOTE_PATH/.next
    rm -rf $REMOTE_PATH/public
    
    echo "📦 Розархівування файлів..."
    tar -xzf /tmp/$ARCHIVE_NAME -C $REMOTE_PATH/
    
    echo "📁 Встановлення залежностей..."
    cd $REMOTE_PATH/.next/standalone
    npm install --production --no-audit --no-fund
    
    echo "🔄 Перезапуск додатку..."
    if command -v pm2 &> /dev/null; then
        pm2 restart freelancer-net-pl || pm2 start server.js --name freelancer-net-pl
        pm2 save
    else
        echo "⚠️  PM2 не встановлений. Запуск через node..."
        pkill -f "node.*server.js" || true
        nohup node server.js > app.log 2>&1 &
    fi
    
    echo "🧹 Очищення тимчасових файлів..."
    rm -f /tmp/$ARCHIVE_NAME
    
    echo "✅ Розгортання завершено!"
EOF

if [ $? -ne 0 ]; then
    error "Помилка розгортання на сервері"
    exit 1
fi

log "✅ Розгортання завершено успішно!"

# Перевірка статусу
log "🔍 Перевірка статусу додатку..."
ssh "$SSH_HOST" << EOF
    if command -v pm2 &> /dev/null; then
        echo "📊 Статус PM2:"
        pm2 status
    else
        echo "📊 Процеси Node.js:"
        ps aux | grep "node.*server.js" | grep -v grep
    fi
    
    echo "📋 Логи додатку (останні 10 рядків):"
    if [ -f "$REMOTE_PATH/.next/standalone/app.log" ]; then
        tail -10 $REMOTE_PATH/.next/standalone/app.log
    else
        echo "Логи не знайдено"
    fi
EOF

echo ""
log "🎉 Розгортання завершено!"
log "🌐 Сайт доступний за адресою: https://freelancer.net.pl"
log "📧 Для підтримки: info@freelancer.org.pl" 