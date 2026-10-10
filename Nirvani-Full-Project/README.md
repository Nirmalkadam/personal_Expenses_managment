# Nirvani — Personal Money Tracker

Complete Vite + React + Vercel project source. The main tracker and integrated SplitSpace group-bill feature are in `public/ledgerly.html`. The entry app loads that file through `src/App.jsx`.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown in the terminal.

## Production build
```bash
npm run build
npm run preview
```

## Deploy on Vercel
- Set the project root to this folder (the folder containing `package.json`).
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Notes
- The app's current data storage is browser local storage; it does not automatically synchronize data between devices.
- Keep a backup of your existing project before replacing files.
- The integrated app source is `public/ledgerly.html`; its filename remains unchanged because the app loads it at `/ledgerly.html`.
