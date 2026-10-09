# Ledgerly — Full Vite/Vercel project update

This package contains the Vite project scaffold plus the updated Ledgerly application files.

## What's included
- Existing React + Vite project setup and Vercel configuration.
- Updated `public/ledgerly.html` with Friends Share in the sidebar and mobile More menu link styling fixed.
- `public/friends-share.html` standalone Friends Share prototype.
- Existing salary month handling, reduced animation/smooth scrolling, and dashboard wording fixes from the previous project package.

## Run locally
Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel
- Root directory: project folder containing `package.json`
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Notes and limitations
- The Friends Share screen is available from the Ledgerly sidebar and uses an embedded page whose height is coordinated with the parent view to avoid a nested vertical scrollbar.
- The Friends Share prototype stores data in the current browser only; this package does not add a cloud database or cross-device sync.
- Receipt selection/attachment is not OCR. OCR reuse and automatic creation of a personal transaction for only the user's actual share are not integrated in this prototype.
- Back up your existing project and personal browser data before replacing deployed files. Existing browser data is not included in this ZIP.
