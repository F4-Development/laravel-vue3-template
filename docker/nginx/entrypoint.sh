#!/bin/bash
set -e

# Запускаем nginx в фоновом режиме
nginx -g "daemon off;" &

# Запрашиваем сертификат Let's Encrypt, если его нет
certbot --nginx --non-interactive --agree-tos --email develop@myportfolio.su -d bbb.myportfolio.su

# Настройка cron для автоматического обновления сертификата каждый месяц
echo "0 0 1 * * certbot renew --quiet" | crontab -

# Ожидаем завершения работы nginx (это не должно произойти)
wait
