# Ledgerly – personal money tracker

A private, no-backend expense tracker. Open `index.html` or host it on Vercel.

## Deploy on Vercel (2 minutes)
**Option A – drag and drop:** run `npx vercel` inside this folder and accept the defaults.
**Option B – Git:** push this folder to GitHub → vercel.com → *Add New Project* → import it → *Deploy* (no build command, no output directory).

> Camera scanning needs HTTPS – Vercel provides it automatically.

## How your data is stored
- Entries, budgets, settings → browser `localStorage`
- Salary PDFs and scanned bills → browser `IndexedDB`
- Nothing is sent to any server. PDF reading and OCR run in your browser (the pdf.js and Tesseract libraries and the English OCR data are downloaded from public CDNs the first time you use them, then cached).

Because data lives per browser, the phone and laptop each have their own copy. Move data between them with **Settings → Full backup / Restore backup**. Back up regularly: clearing browser data deletes everything.

## Using it
| Want to… | Do this |
|---|---|
| Add a credit/debit | **+** button (or press **N**) |
| Track by day / month / year | Dashboard → Day · Month · Year switch |
| See money on dates | Calendar (month grid or year view) |
| Add salary from a PDF | Salary slips → drop the PDF → check values → Save |
| Update / replace / delete a slip | Edit or bin icon on the month card |
| Scan a bill | Scanner → Take photo / Upload → check → Save |
| Import a bank statement scan | Scanner → tick lines → Import selected |
| Auto-post rent, SIP, subscriptions | Budgets & repeats → Add |

## Accuracy notes
- Money is stored as whole paise/cents, so totals never drift.
- PDF and OCR reading is best-effort. You always review the values before saving.
- Salary deductions are shown on the salary page; only the net amount is posted as a credit.
