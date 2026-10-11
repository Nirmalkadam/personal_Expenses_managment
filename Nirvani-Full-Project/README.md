# Nirvani Receipt Scanner Update

This update changes the active scanner files used by the Vite app:

- `public/ledgerly.html` — Nirvani scanner and the embedded SplitSpace scanner
- `public/friends-share.html` — standalone SplitSpace page

Changes include a more reliable selection of labelled decimal amounts and camera inputs that are visually hidden rather than `display:none`, which improves compatibility with mobile browsers' camera/file capture UI.

## Deploy
1. Replace the matching files in your repository while keeping the folder structure.
2. Commit and push to GitHub.
3. Wait for Vercel's deployment to finish successfully.
4. Open the deployed site in a private/incognito tab or clear the site cache before testing.

OCR results still depend on the photo quality and the receipt's labels. Verify extracted values before saving. This ZIP has JavaScript syntax checks but has not been physically tested on your phone camera.


## Recent behavior changes
- Salary slip uploads are processed for extraction, but the original PDF is not saved with salary records.
- Ordinary manual transactions categorized as Salary are also reflected in the Salary slips monthly summaries.
- SplitSpace receipt images are used for reading and are not persisted with saved expenses.
- SplitSpace receipt status displays scanning progress messages.
