# Nirvani mobile scanner and SplitSpace form fixes

This update addresses two mobile issues:

- Camera photos are resized to a maximum 2200–2400 px edge before OCR, reducing memory use for high-resolution phone-camera images. Gallery images use the same path.
- The SplitSpace add-bill modal has a mobile-height limit and scrollable area that ends above Nirvani's fixed bottom navigation, keeping Save bill reachable.

## Deploy
Replace the repository root `index.html` and `public/ledgerly.html` with the included versions, keep the remaining project files and paths unchanged, commit, and wait for Vercel deployment.

Note: OCR still depends on loading Tesseract.js from the internet. Some unsupported formats (for example, certain HEIC images in browsers that cannot decode them) may need to be converted to JPG.
