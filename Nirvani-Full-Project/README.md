# Nirvani – Calendar, Budgets & SplitSpace update

This update fixes the mobile Calendar layout, improves SplitSpace contrast in light theme, and upgrades Budgets & repeats.

## What changed
- Calendar: the month grid and selected-day details stack on phones instead of being squeezed side by side.
- SplitSpace: light theme uses readable light surfaces and dark text for group names and member chips.
- Budgets: explicit Save budgets button, per-category progress, amount remaining/over limit, overall totals, selectable dashboard alert threshold (70/80/90/100%), and a clear-all action that does not delete transactions.
- Repeats: active-rule count, estimated monthly commitment, upcoming scheduled entries, and clearer explanation of automatic posting.

## Deploy
Replace the root `index.html` and `public/ledgerly.html` in the existing repository, keep all other project files/folders unchanged, then commit and wait for Vercel to deploy.

All information remains in this browser's local storage. Dashboard alerts appear when you open Nirvani; this standalone app does not send push notifications while closed.
