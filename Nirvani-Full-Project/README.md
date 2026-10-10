# Nirvani — Personal Money Tracker

This project serves the Nirvani application directly from the root `index.html`. It does not embed the app in an iframe, so the address should stay at `/` and mobile viewport/navigation behavior is not affected by an extra iframe layer.

## Deploy to Vercel

1. Upload/commit the contents of this folder to the root of your GitHub repository (the `package.json`, `index.html`, `public/`, and `src/` must be at the repository root, not nested inside another folder).
2. In Vercel → Project Settings → Build and Deployment, set Root Directory to `./` (repository root).
3. Framework Preset: Vite; Build Command: `npm run build`; Output Directory: `dist`; Install Command: `npm install`.
4. Push to the production branch and wait for the Production deployment to show Ready.
5. Open https://nirvani.vercel.app/.

`public/ledgerly.html` is retained as a backup/legacy copy. The root `index.html` is now the actual app, so the URL does not need to route through `/ledgerly.html`.

## Run locally

```bash
npm install
npm run dev
```

## Data storage

The app stores entries in the current browser's local storage/IndexedDB. It does not automatically sync data between devices. Use the in-app backup/restore feature to transfer data.


SplitSpace PDF export fix: the Export PDF button is now placed beside Scan / attach bill and Add manually in the Expenses section. It uses the existing report-generation handler.
