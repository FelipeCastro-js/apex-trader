<div align="center">

# 🚀 ApexTrader

### Terminal profesional de análisis de criptomonedas en tiempo real

Análisis avanzado del mercado, gráficos interactivos, datos en vivo y seguimiento de activos digitales desde una única plataforma.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge)
![WebSockets](https://img.shields.io/badge/WebSockets-Real_Time-success?style=for-the-badge)
![CoinGecko API](https://img.shields.io/badge/CoinGecko_API-Live_Data-green?style=for-the-badge)

</div>

---

## 📖 Descripción

**ApexTrader** es una plataforma moderna de análisis de criptomonedas desarrollada con **Next.js**, diseñada para ofrecer una experiencia similar a una terminal profesional de trading.

La aplicación consume datos en tiempo real mediante **WebSockets** y la **CoinGecko API**, permitiendo visualizar el comportamiento del mercado sin necesidad de recargar la página.

Su arquitectura está optimizada para ofrecer una interfaz rápida, escalable y totalmente responsiva.

---

# ✨ Características

## 📊 Dashboard en tiempo real

- Mercado global actualizado
- Capitalización del mercado
- Volumen de negociación
- Tokens en tendencia
- Ranking de criptomonedas
- Explorador completo de activos

---

## 📈 Análisis avanzado de activos

Cada criptomoneda cuenta con una vista detallada que incluye:

- 📉 Gráficos de velas (Candlestick)
- 📊 Historial de precios
- 💹 Variación porcentual
- 📈 Evolución del volumen
- 💰 Información del mercado
- 🏆 Ranking y métricas principales

---

## ⚡ Actualizaciones en tiempo real

Gracias al uso de **WebSockets**, ApexTrader recibe información prácticamente al instante.

Entre ellas:

- Actualización de precios
- Operaciones del mercado
- Cambios en capitalización
- Movimiento de tokens
- Trades en tiempo real

Todo esto sin refrescar la aplicación.

---

## 🌍 Conversor de divisas

Permite conocer el valor de cualquier criptomoneda en múltiples monedas del mundo (por el momento solo esta en USD)

---

## 🔍 Búsqueda global

Inspirado en herramientas como Raycast y Spotlight.

Con **Ctrl + K** es posible:

- Buscar criptomonedas
- Navegar rápidamente entre páginas
- Acceder a cualquier activo en segundos

---

# 🖥️ Vista general

```
Dashboard
│
├── Mercado Global
├── Tokens en Tendencia
├── Ranking de Criptomonedas
├── Estadísticas
└── Explorador
        │
        ▼
Detalle del activo
        │
        ├── Candlestick Chart
        ├── Historial
        ├── Datos del Mercado
        ├── Información General
        └── Actualizaciones Live
```

---

# 🛠️ Tecnologías utilizadas

| Tecnología | Descripción |
|------------|-------------|
| Next.js App Router | Framework React moderno |
| TypeScript | Tipado estático |
| Tailwind CSS | Sistema de estilos |
| shadcn/ui | Componentes UI |
| CoinGecko API | Información del mercado |
| WebSockets | Streaming en tiempo real |

---

# ⚙️ Arquitectura

```
                 CoinGecko API
                        │
        ┌───────────────┴───────────────┐
        │                               │
   REST API                     WebSocket Stream
        │                               │
        └───────────────┬───────────────┘
                        │
                 Server Components
                        │
                Next.js App Router
                        │
          ┌─────────────┴─────────────┐
          │                           │
     Client Components          Server Actions
          │                           │
          └─────────────┬─────────────┘
                        │
                    ApexTrader UI
```

---

# 🚀 Instalación

## Clonar repositorio

```bash
git clone https://github.com/usuario/apextrader.git
```

```bash
cd apextrader
```

## Instalar dependencias

```bash
npm install
```

o

```bash
pnpm install
```

## Variables de entorno

Crear un archivo

```env
.env.local
```

Agregar las credenciales necesarias.

```env
NEXT_PUBLIC_COINGECKO_API_KEY=YOUR_API_KEY
```

---

## Ejecutar

```bash
npm run dev
```

Abrir

```
http://localhost:3000
```

---

# 📂 Estructura del proyecto

```
src
│
├── app
│
├── components
│   ├── charts
│   ├── dashboard
│   ├── markets
│   ├── ui
│   └── shared
│
├── hooks
│
├── services
│
├── lib
│
├── types
│
├── utils
│
└── styles
```

---

# 🎯 Principales funcionalidades

- ✅ Dashboard del mercado
- ✅ Explorador de criptomonedas
- ✅ Datos globales
- ✅ Tokens en tendencia
- ✅ Gráficos interactivos
- ✅ Conversor de divisas
- ✅ Buscador global
- ✅ Streaming en tiempo real
- ✅ Diseño responsive
- ✅ Tema moderno
- ✅ Componentes reutilizables
- ✅ Arquitectura escalable

---

# 📊 Rendimiento

✔️ Server Components

✔️ App Router

✔️ Streaming UI

✔️ Lazy Loading

✔️ Optimización de imágenes

✔️ Renderizado híbrido

✔️ Código modular

✔️ Componentes reutilizables

---

# 📱 Responsive Design

Compatible con:

- 💻 Desktop
- 💼 Laptop
- 📱 Mobile
- 📲 Tablet

---


# 🤝 Contribuciones

¡Las contribuciones son lo que hace que la comunidad open source sea un lugar increíble para aprender, inspirar y crear! Cualquier contribución que hagas será muy apreciada.

1. Fork del proyecto
2. Crear una rama

```bash
git checkout -b feature/nueva-funcionalidad
```

3. Commit

```bash
git commit -m "feat: nueva funcionalidad"
```

4. Push

```bash
git push origin feature/nueva-funcionalidad
```

5. Crear un Pull Request

---

# 📄 Licencia

Este proyecto está distribuido bajo la licencia MIT.

---

<div align="center">

## ⭐ Si te gusta este proyecto, no olvides darle una estrella al repositorio.

**Desarrollado con ❤️ usando Next.js, TypeScript y tecnologías modernas.**

</div>