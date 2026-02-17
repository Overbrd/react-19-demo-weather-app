# 🌤️ React 19 Demo Weather App

A clean, lightweight weather dashboard built with **React 19 + Vite**, designed as a modern front‑end showcase.  
This demo fetches real‑time weather data (temperature and wind speed) from the Open‑Meteo API and displays it using a simple, intuitive UI.

Live Demo: **https://react-19-demo-weather-app-mlind.netlify.app**

---

## 🚀 Features

- ⚡ **React 19 + Vite** for ultra‑fast development and builds  
- 🌎 **Real‑time weather data** from Open‑Meteo (no API key required)  
- 📍 **City selector** with 25 U.S. cities  
- 🎨 Clean, minimalist UI  
- 📱 Fully responsive layout  
- 🔄 Automatic updates when selecting a new city  
- 🌐 Deployed on **Netlify** with continuous deployment from GitHub  

---

## 🧱 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI components & state management |
| **Vite** | Fast dev server & build tool |
| **Open‑Meteo API** | Weather data (no key required) |
| **Netlify** | Hosting & CI/CD |
| **CSS** | Lightweight styling |

---

## 📁 Project Structure

src/  
components/  
CitySelector.jsx  
WeatherCard.jsx  
hooks/  
useWeather.js  
styles.css  
App.jsx  
main.jsx  


---

## 🏙️ Supported Cities

The app includes 25 U.S. cities, including:

- Atlanta  
- Austin  
- Charlotte  
- Chicago  
- Dallas  
- Denver  
- Houston  
- Knoxville  
- Los Angeles  
- Miami *(default)*  
- New York  
- San Diego  
- San Francisco  
- Seattle  
- …and more  

All coordinates are stored locally in `useWeather.js`.

---

## 🔧 Installation & Setup

Clone the repo:

```bash
git clone https://github.com/YOUR_USERNAME/react-19-demo-weather-app.git
cd react-19-demo-weather-app

Install dependencies:  

npm install  

Run the dev server:  

npm run dev  

Build for production:  

npm run build  

Preview production build:  

npm run preview

License  
This project is open‑source and available under the MIT License.  

Author  
Matthew C. Lind  
Front‑End Developer • React Specialist  
Portfolio: https://matthewlind.com  

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
