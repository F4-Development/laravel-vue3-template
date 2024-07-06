FROM nginx:latest

# Установка необходимых пакетов (certbot, python3-certbot-nginx, etc.)
RUN apt-get update && apt-get install -y \
    certbot \
    python3-certbot-nginx \
    cron \
    openssl \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Установка утилиты для работы с .env файлами
RUN curl -sS https://webinstall.dev/dotenv | bash

# Копируем скрипт для создания и обновления Let's Encrypt сертификата
COPY ./docker/nginx/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Порты, которые будут открыты
EXPOSE 80
EXPOSE 443

# Входная точка для запуска контейнера
ENTRYPOINT ["/entrypoint.sh"]

# Команда по умолчанию для nginx
CMD ["nginx", "-g", "daemon off;"]
