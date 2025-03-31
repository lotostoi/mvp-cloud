FROM php:8.2-fpm
# Базовый образ с PHP 8.2 и FastCGI Process Manager для обработки PHP запросов

RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    curl \
    git \
    bash
# Обновление пакетного менеджера и установка базовых утилит:
# - zip/unzip для работы с архивами
# - curl для выполнения HTTP запросов
# - git для работы с системой контроля версий
# - bash для работы с командной оболочкой

RUN docker-php-ext-install pdo pdo_mysql
# Установка расширений PHP для работы с MySQL:
# - pdo: PHP Data Objects - абстрактный слой доступа к БД
# - pdo_mysql: драйвер MySQL для PDO

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
# Копирование исполняемого файла Composer из официального образа
# Composer используется для управления зависимостями PHP

WORKDIR /var/www
# Установка рабочей директории для приложения

COPY . .
# Копирование всех файлов проекта в контейнер

RUN composer install --optimize-autoloader
# Установка зависимостей проекта через Composer
# --optimize-autoloader генерирует оптимизированную карту классов

RUN cp .env.example .env && php artisan key:generate
# Создание файла окружения из примера и генерация ключа приложения
# Ключ используется для шифрования данных

RUN chmod -R 777 storage bootstrap/cache
# Установка прав на запись для директорий хранения данных
# Необходимо для работы кэша, логов и сессий

EXPOSE 9000
# Объявление порта, который будет использоваться для PHP-FPM

CMD ["php-fpm"]
# Запуск PHP-FPM в режиме демона:
# -y указывает путь к конфигурационному файлу
# -R запускает процесс от root пользователя
