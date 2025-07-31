# 🚀 Швидке розгортання на freelancer.net.pl

## Крок 1: Підготовка архіву

```bash
./deploy.sh
```

Це створить файл `freelancer-net-pl-deploy.tar.gz` (розмір ~14MB)

## Крок 2: Завантаження на сервер

### Варіант A: Автоматичне розгортання (рекомендовано)
```bash
./deploy-ssh.sh user@freelancer.net.pl /home/user/public_html
```

### Варіант B: Ручне завантаження
1. Завантажте `freelancer-net-pl-deploy.tar.gz` на сервер
2. Розархівуйте в папку `public_html`:
```bash
tar -xzf freelancer-net-pl-deploy.tar.gz -C public_html/
```

## Крок 3: Запуск на сервері

```bash
cd public_html/.next/standalone
npm install --production
node server.js
```

## Крок 4: Налаштування PM2 (для постійного запуску)

```bash
npm install -g pm2
pm2 start server.js --name freelancer-net-pl
pm2 save
pm2 startup
```

## Крок 5: SSL сертифікат

```bash
sudo certbot --nginx -d freelancer.net.pl
```

## ✅ Готово!

Сайт буде доступний за адресою: **https://freelancer.net.pl**

---

## 🔧 Налаштування сервера

### Перевірка Node.js
```bash
node --version  # Потрібна версія 18+
```

### Встановлення Node.js (якщо потрібно)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Налаштування .htaccess
Створіть файл `public_html/.htaccess`:
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.freelancer\.net\.pl [NC]
RewriteRule ^(.*)$ https://freelancer.net.pl/$1 [L,R=301]
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 📊 Моніторинг

```bash
# Статус PM2
pm2 status

# Логи
pm2 logs freelancer-net-pl

# Перезапуск
pm2 restart freelancer-net-pl
```

## 🆘 Вирішення проблем

### Помилка "Port already in use"
```bash
pm2 delete freelancer-net-pl
pm2 start server.js --name freelancer-net-pl
```

### Помилка "Permission denied"
```bash
chmod +x server.js
chmod -R 755 .next/
```

### Сайт не завантажується
```bash
# Перевірка процесів
ps aux | grep node

# Перевірка портів
netstat -tlnp | grep :3000

# Перезапуск
pm2 restart freelancer-net-pl
```

## 📞 Підтримка

- **Email:** info@freelancer.net.pl
- **Документація:** `DEPLOYMENT_LITESPEED.md` 