# ALIEVA LAW - сайт адвоката

Готовый проект сайта для адвоката Алиевой Эльмиры Ханоглановны.
Проект подготовлен под деплой на Vercel.

## Стек

- Vite
- React
- Tailwind CSS
- Vercel-ready configuration

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Деплой через Vercel

### Вариант 1 - через GitHub

1. Создайте новый репозиторий на GitHub.
2. Загрузите в него содержимое этой папки.
3. Откройте Vercel.
4. Нажмите Add New Project.
5. Выберите GitHub-репозиторий.
6. Framework Preset: Vite.
7. Build Command: `npm run build`.
8. Output Directory: `dist`.
9. Install Command: `npm install`.
10. Нажмите Deploy.

### Вариант 2 - через Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## Настройки проекта для Vercel

В проекте уже есть файл `vercel.json`:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Что заменить перед публикацией

В файле `src/data/siteData.js` замените:

- телефон
- email
- ссылку WhatsApp
- ссылку Telegram
- адрес офиса

Также можно заполнить `.env` по примеру `.env.example`.

## Что дальше делать в GitHub

- подключить реальные фото адвоката;
- сделать рабочую отправку заявок;
- подключить Telegram-уведомления;
- подключить CRM;
- добавить Яндекс Метрику и Google Analytics;
- расширить SEO-страницы;
- подключить домен в Vercel.
