# PulseLaunch Marketing Site

Landing page React + TypeScript (Vite) dengan data dummy untuk hero, fitur, metrik, testimoni, pricing, dan FAQ. Semua styling ada di `src/index.css`; konten dummy ada di `src/data.ts`.

## Jalankan

- `npm install` — install dependensi
- `npm run dev` — mulai dev server (lihat URL yang dicetak di terminal)
- `npm run build` — build produksi ke folder `dist`
- `npm run preview` — pratinjau build produksi
- `npm run lint` — linting

## Struktur utama

- `src/App.tsx` — layout landing page
- `src/data.ts` — dummy content untuk tiap section
- `src/index.css` — tema dan layout global

## Catatan

- Dev server berjalan di port acak jika 5173 sudah dipakai (lihat log saat start).
    # PulseLaunch Marketing Site

    React + TypeScript + Vite single-page marketing site with dummy data (hero, features, metrics, testimonials, pricing, FAQ, CTA). Styling is custom CSS (no UI library).

    ## Scripts

    - `npm run dev` — start dev server
    - `npm run build` — type-check then build
    - `npm run preview` — serve production build locally
    - `npm run lint` — run ESLint

    ## Structure

    - `src/data.ts` — dummy content for the sections
    - `src/App.tsx` — page layout composed from dummy data
    - `src/index.css` — global styles and layout

    ## Running locally

    1) Install deps: `npm install`
    2) Dev server: `npm run dev` then open the shown URL
    3) Production build preview: `npm run build && npm run preview`

    ## Notes

    - All copy is placeholder/dummy; adjust for your brand
    - No external assets required beyond Vite defaults
