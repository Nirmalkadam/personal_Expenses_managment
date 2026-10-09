# Ledgerly — React + Vite

Ledgerly is hosted through a React + Vite entry point while preserving the original Ledgerly HTML application in `public/ledgerly.html`. This keeps the existing visual design and workflows intact while applying targeted fixes.

## Fixes in this version

- Salary month detection prefers a labelled salary/pay period in PDF text, then a month/date in the filename, then a generic month/year in the PDF text. Verify the proposed month and credit date before saving.
- Removed smooth-scroll behavior that can make mouse-wheel scrolling feel delayed.
- Disabled continuous animation of large blurred background orbs to reduce scroll/render work.
- Dashboard labels distinguish **Net this period** from the **Recorded balance**. The balance is recorded income minus recorded expenses; it cannot know about cash spending that was never entered.

## Requirements

- Node.js 18+ (20 LTS recommended)
- npm

## Run locally

Open a terminal in the folder containing `package.json`:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Build output is written to `dist/`.

## Deploy to Vercel

1. Push the entire project folder to GitHub.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Root directory: the folder containing `package.json`.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

## Salary month detection notes

Ledgerly attempts to find a labelled salary period in the PDF. If the PDF only contains a credit date and no salary-period label, it uses a date/month in the filename where possible and then falls back to a month/year found in PDF text. OCR and PDF text quality vary, so always verify the proposed salary month and credit date in the confirmation dialog. If the month is ambiguous, choose the correct month manually before saving.

## Important: correct previously misfiled salaries

This version fixes new uploads. Existing records already saved in the browser are not silently changed because their actual salary period and credit date need to be verified. Open **Salary slips**, edit the affected record, correct **Salary month** and **Credited on**, and save. Since the salary transaction is linked to that salary record, Ledgerly updates its linked transaction too.

## Data and privacy

The original app stores entries in this browser. It does not provide a cloud-synced backend. Back up your data regularly using Settings → Full backup. PDF/OCR libraries may be loaded from public CDNs when those features are used.
