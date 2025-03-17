FROM php:8.2-fpm

# Установка необходимых зависимостей
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    curl \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Создание рабочей директории
WORKDIR /var/www

# Копирование файлов приложения
COPY . .

# Установка зависимостей Laravel
RUN composer install --no-dev --optimize-autoloader

# Копирование конфигурации и установка прав
RUN cp .env.example .env && php artisan key:generate
RUN chmod -R 777 storage bootstrap/cache

# Открываем порт 8000
EXPOSE 8000

# Запуск сервера Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
