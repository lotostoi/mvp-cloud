# Используем официальное Node-изображение с пользователем node
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --unsafe-perm=true

# Копируем весь код проекта
COPY . .


# Меняем владельца всех файлов в /app на пользователя node
RUN chown -R node:node /app

# Переключаемся на пользователя node
USER node

# Открываем порт
EXPOSE 5173

# Запускаем сервер разработки
CMD ["npm", "run", "dev", "--", "--host"]
