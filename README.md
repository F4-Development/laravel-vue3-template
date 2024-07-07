<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Deployment
### Copy the environment configuration file:
```bash
cp .env.example .env
```
### Edit the .env file and set the URL (NGINX_HOST variable) without http:// or https://
```bash
nano .env
```
### Build and start the Docker containers
```bash
docker-compose up -d --build
```
### Install PHP dependencies
```bash
docker-compose exec app composer install
``` 
### Adjust storage permissions
```bash
docker-compose exec app chown -R www-data:www-data storage
```
```bash
docker-compose exec app chmod 775 -R storage
```
### Generate an application key
```bash
docker-compose exec app php artisan key:generate
```
### Install Node.js dependencies and build the frontend
```bash
docker-compose exec app npm install
```
```bash
docker-compose exec app npm run build
```
### Install SSL (if needed)
```bash
docker-compose exec nginx certbot --nginx
```

## Usage
Project - `http(s)://your_domain.com`\
Adminer - `http://your_domain.com:9090`\
Mailpit - `http://your_domain.com:8025`
### Build frontend
```bash
docker-compose exec app npm run build
```
### Execute commands (Composer/Artisan/etc.)
```bash
docker-compose exec app [command]
```

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
