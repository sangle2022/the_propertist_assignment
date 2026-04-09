# 🏡 The Propertist — Property Listings

A responsive property listing web app built using **React**, **TypeScript**, **Tailwind CSS**, and **React Router**.

This project simulates a modern real-estate platform with features like search, filters, skeleton loading, and a property details page — all powered by local JSON data (no backend required).

---

## 🚀 Live Demo

👉 https://the-propertist-made-by-suraj.netlify.app/


---

## 🚀 Features

* 🔍 Search properties by location (with debounce)
* 🏷️ Filter by BHK and Buy/Rent toggle
* 🏠 Property cards with image, price, and details
* 📄 Property details page (`/property/:id`)
* ⚡ Skeleton loading for better UX
* 📱 Fully responsive design

---

## 📦 Tech Stack

* React 19
* TypeScript
* Tailwind CSS 3
* React Router 7
* Create React App (`react-scripts` 5)

---

## 🛠️ Prerequisites

Make sure you have installed:

* **Node.js** (v18 or higher)
* **npm** (v9 or higher)

Check versions:

```bash
node -v
npm -v
```

---

## ⚙️ Setup

1. **Go to the project folder**

```bash
cd properties-listing
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

The app opens at http://localhost:3000
The page reloads when you edit source files.

---

## 🏗️ Production Build

Create an optimized build in the `build` folder:

```bash
npm run build
```

Serve the build folder with any static host (for example serve):

```bash
npx serve -s build
```

---

## 📜 Available Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm start`     | Run app in development mode     |
| `npm run build` | Create production build         |
| `npm test`      | Run tests in watch mode         |
| `npm run eject` | Eject CRA config (irreversible) |

---

## 📁 Project Structure

```
src/
  components/    Reusable UI components
  pages/         Home & Property Details
  hooks/         Custom hooks (debounce, data, animation)
  data/          Mock JSON data
  types/         TypeScript types
  routes/        App routing
  utils/         Helper functions
  context/       Global state (property provider)
```

---

## 🗂️ Data Source

All property data is stored locally:

```
src/data/properties.json
```

You can edit or extend this file to update listings.

---

## ⚠️ Troubleshooting

### Port already in use

```bash
PORT=3001 npm start
```

(Windows PowerShell)

```bash
$env:PORT=3001
npm start
```

---

### Dependency issues

```bash
rm -rf node_modules package-lock.json
npm install
```
