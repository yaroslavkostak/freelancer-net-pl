# Розгортання на LiteSpeed сервері (freelancer.net.pl)

## 1. Підготовка проекту

### Збірка проекту:
```bash
npm run build
```

### Результат збірки:
- Створиться папка `.next/standalone/`
- Всі файли будуть готові для розгортання

## 2. Завантаження файлів на сервер

### Структура файлів для завантаження:
```
public_html/
├── .next/
│   ├── standalone/
│   │   ├── .next/
│   │   ├── node_modules/
│   │   ├── package.json
│   │   └── server.js
│   └── static/
├── public/
│   ├── images/
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .htaccess
└── package.json
```

## 3. Налаштування LiteSpeed сервера

### Створення .htaccess файлу:
```apache
# Налаштування для Next.js на LiteSpeed
RewriteEngine On

# Редірект з www на без www
RewriteCond %{HTTP_HOST} ^www\.freelancer\.net\.pl [NC]
RewriteRule ^(.*)$ https://freelancer.net.pl/$1 [L,R=301]

# Редірект з HTTP на HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Обробка Next.js маршрутів
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.php?/$1 [L]

# Кешування статичних файлів
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Gzip стиснення
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Безпека
<IfModule mod_headers.c>
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
```

## 4. Налаштування Node.js на сервері

### Встановлення Node.js (якщо потрібно):
```bash
# Перевірка версії Node.js
node --version

# Якщо потрібно встановити Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Запуск додатку:
```bash
# Перехід в папку з додатком
cd public_html/.next/standalone

# Встановлення залежностей
npm install --production

# Запуск додатку
node server.js
```

## 5. Налаштування PM2 (рекомендовано)

### Встановлення PM2:
```bash
npm install -g pm2
```

### Створення ecosystem.config.js:
```javascript
module.exports = {
  apps: [{
    name: 'freelancer-net-pl',
    script: './server.js',
    cwd: '/path/to/public_html/.next/standalone',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### Запуск з PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 6. Налаштування проксі (якщо потрібно)

### Конфігурація Nginx/Apache для проксі:
```nginx
server {
    listen 80;
    server_name freelancer.net.pl www.freelancer.net.pl;
    return 301 https://freelancer.net.pl$request_uri;
}

server {
    listen 443 ssl http2;
    server_name freelancer.net.pl;

    ssl_certificate /path/to/ssl/certificate.crt;
    ssl_certificate_key /path/to/ssl/private.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location /_next/static {
        alias /path/to/public_html/.next/static;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /public {
        alias /path/to/public_html/public;
        expires 1y;
        add_header Cache-Control "public";
    }
}
```

## 7. Перевірка розгортання

### Тестування:
1. Відкрийте https://freelancer.net.pl
2. Перевірте всі сторінки:
   - Головна: https://freelancer.net.pl
   - Контакти: https://freelancer.net.pl/contact
   - Політика: https://freelancer.net.pl/privacy-policy
   - Умови: https://freelancer.net.pl/terms
3. Перевірте редіректи:
   - www.freelancer.net.pl → freelancer.net.pl
   - http://freelancer.net.pl → https://freelancer.net.pl

### Логи:
```bash
# Перегляд логів PM2
pm2 logs freelancer-net-pl

# Перегляд логів сервера
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

## 8. SSL сертифікат

### Let's Encrypt (безкоштовно):
```bash
# Встановлення Certbot
sudo apt-get install certbot python3-certbot-nginx

# Отримання сертифіката
sudo certbot --nginx -d freelancer.net.pl -d www.freelancer.net.pl

# Автоматичне оновлення
sudo crontab -e
# Додати: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 9. Моніторинг

### Налаштування моніторингу:
```bash
# Статус PM2
pm2 status

# Використання ресурсів
pm2 monit

# Перезапуск додатку
pm2 restart freelancer-net-pl
```

## 10. Резервне копіювання

### Автоматичне резервне копіювання:
```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup/freelancer-net-pl"
SOURCE_DIR="/path/to/public_html"

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/backup_$DATE.tar.gz $SOURCE_DIR

# Видалення старих резервних копій (старше 30 днів)
find $BACKUP_DIR -name "backup_*.tar.gz" -mtime +30 -delete
```

Додати в crontab:
```bash
0 2 * * * /path/to/backup.sh
``` 