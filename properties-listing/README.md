# The Propertist — Property Listings

A responsive property listing experience built with **React**, **TypeScript**, **Tailwind CSS**, and **React Router**. Data comes from a local JSON file (no backend). The UI is inspired by modern real-estate platforms: hero search with suggestions, filters, skeleton loading, and a property details page.

## Prerequisites

- **Node.js** 18.x or newer (LTS recommended)
- **npm** 9+ (ships with Node)

Check versions:

```bash
node -v
npm -v
```

## Setup

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

   The app opens at [http://localhost:3000](http://localhost:3000). The page reloads when you edit source files.

## Production build

Create an optimized build in the `build` folder:

```bash
npm run build
```

Serve the `build` folder with any static host (for example [serve](https://github.com/vercel/serve)):

```bash
npx serve -s build
```

## Available scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm start`    | Run the app in development mode (port 3000)      |
| `npm run build`| Production build to `build/`                     |
| `npm test`     | Run tests in interactive watch mode              |
| `npm run eject`| Eject from Create React App (irreversible)       |

## Tech stack

- React 19, TypeScript
- Tailwind CSS 3
- React Router 7
- Create React App (`react-scripts` 5)

## Project layout

```text
src/
  components/   common, layout, property
  pages/          Home, property details
  hooks/          useDebounce, useScrollAnimation, useProperties
  data/           Mock properties JSON
  types/          Shared TypeScript types
  routes/         Router configuration
  utils/          e.g. filterProperties
  context/        Property data provider (simulated load delay)
```

Mock listings live in `src/data/properties.json`. Adjust or extend that file to change what appears in search, filters, and detail routes (`/property/:id`).

## Troubleshooting

- **Port 3000 in use:** Set `PORT=3001` (macOS/Linux) or `$env:PORT=3001` (PowerShell) before `npm start`, or stop the other process using the port.
- **Install errors:** Delete `node_modules` and `package-lock.json`, then run `npm install` again.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). For advanced CRA topics, see the [CRA documentation](https://facebook.github.io/create-react-app/docs/getting-started).
