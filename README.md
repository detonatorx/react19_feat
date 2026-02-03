# React 19 Features Demo

Демонстрация новых возможностей React 19:

## Возможности

### 1. use() Hook для Data Fetching

- Асинхронная загрузка данных непосредственно в компонентах
- Suspense-интеграция для управления состояниями загрузки
- Обработка ошибок через Error Boundaries

### 2. Server Actions & Forms

- Новый подход к работе с формами
- Встроенная обработка асинхронных действий
- Автоматическое управление состоянием формы (pending, success, error)

### 3. Automatic Batching Improvements

- Улучшенная группировка обновлений состояния
- Оптимизация рендеринга во всех сценариях
- Демонстрация разницы с React 18

## Запуск проекта

```bash
npm install
npm run dev
```

Откройте браузер на `http://localhost:5173`

## Структура проекта

```
src/
  ├── components/
  │   ├── UseHookDemo/         # Демо use() hook
  │   ├── ServerActionsDemo/   # Демо Server Actions
  │   └── BatchingDemo/        # Демо Automatic Batching
  ├── api/                     # Имитация серверных API
  ├── App.tsx                  # Главный компонент
  └── main.tsx                 # Точка входа
```

## Компоненты и преимущества

### App

- Файл: [src/App.tsx](src/App.tsx)
- Что делает: собирает демо-блоки в одном интерфейсе.
- Преимущества:
    - Единая точка для демонстрации всех фич.
    - Простой порядок секций, удобно расширять.

### ErrorBoundary

- Файл: [src/components/ErrorBoundary.tsx](src/components/ErrorBoundary.tsx)
- Что делает: перехватывает ошибки рендера и показывает безопасный UI.
- Преимущества:
    - Защищает демо с `use()` и Suspense от падения всего приложения.
    - Позволяет повторить попытку без перезагрузки страницы.

### UseHookDemo

- Файл: [src/components/UseHookDemo/UseHookDemo.tsx](src/components/UseHookDemo/UseHookDemo.tsx)
- Что делает: демонстрирует `use()` с Promise и работу Suspense.
- Преимущества:
    - Нет `useEffect` и ручного управления загрузкой.
    - Читабельное разделение загрузки пользователей и постов.

#### UsersList

- Файл: [src/components/UseHookDemo/UsersList.tsx](src/components/UseHookDemo/UsersList.tsx)
- Что делает: читает список пользователей через `use(promise)` и рендерит карточки.
- Преимущества:
    - Данные доступны синхронно после resolve.
    - Простая логика выбора пользователя.

#### PostsList

- Файл: [src/components/UseHookDemo/PostsList.tsx](src/components/UseHookDemo/PostsList.tsx)
- Что делает: показывает посты выбранного пользователя через `use(promise)`.
- Преимущества:
    - Нативная интеграция с Suspense.
    - Минимум состояния и эффектов.

### ServerActionsDemo

- Файл: [src/components/ServerActionsDemo/ServerActionsDemo.tsx](src/components/ServerActionsDemo/ServerActionsDemo.tsx)
- Что делает: демонстрирует работу форм с async действиями.
- Преимущества:
    - Показаны два кейса: контактная форма и todo-лист.
    - Единый UX для pending/success/error.

#### ContactForm

- Файл: [src/components/ServerActionsDemo/ContactForm.tsx](src/components/ServerActionsDemo/ContactForm.tsx)
- Что делает: отправляет форму с использованием `useTransition`.
- Преимущества:
    - Явное управление pending-состоянием.
    - Обработка ошибок и успешных ответов.

#### TodoForm

- Файл: [src/components/ServerActionsDemo/TodoForm.tsx](src/components/ServerActionsDemo/TodoForm.tsx)
- Что делает: добавляет и управляет списком задач.
- Преимущества:
    - Быстрая обратная связь UI.
    - Простая обработка FormData.

### BatchingDemo

- Файл: [src/components/BatchingDemo/BatchingDemo.tsx](src/components/BatchingDemo/BatchingDemo.tsx)
- Что делает: показывает автоматическое объединение обновлений в React 19.
- Преимущества:
    - Демонстрация batching в sync/async сценариях.
    - Наглядное сравнение количества рендеров.

## API-слой (имитация)

### api.ts

- Файл: [src/api/api.ts](src/api/api.ts)
- Что делает: запрашивает пользователей и посты (JSONPlaceholder).
- Преимущества:
    - Простая имитация реального data fetching.
    - Контролируемые задержки для демонстрации Suspense.

### serverActions.ts

- Файл: [src/api/serverActions.ts](src/api/serverActions.ts)
- Что делает: имитирует серверные actions (отправка формы, создание задачи).
- Преимущества:
    - Позволяет показать async-флоу без реального бэкенда.
    - Легко заменить на настоящие Server Actions.
