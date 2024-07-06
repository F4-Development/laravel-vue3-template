#!/bin/sh

docker-compose exec nginx apt-get update
docker-compose exec nginx apt-get install certbot python3-certbot-nginx -y
docker-compose exec nginx certbot --nginx
