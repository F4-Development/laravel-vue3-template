#!/bin/bash
set -e

# Подстановка переменных окружения в NGINX конфигурацию
envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Запуск NGINX
exec "$@"
