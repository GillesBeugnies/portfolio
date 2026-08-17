# Gilles Beugnies — Portfolio (Next.js)

Portfolio site built with Next.js (App Router). Ready to deploy for free on Vercel.

## Structure

- `app/page.js` — the page, composed from the sections below
- `app/layout.js` — root layout, fonts, page metadata
- `app/globals.css` — all styling
- `app/data.js` — your project + skills content (edit this to update text without touching components)
- `app/components/` — `Nav`, `Waypoint` (the scroll-progress dot), `Reveal` (scroll-in animation), `ProjectCard`
- `public/images/` — put real screenshots here

## Run locally

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Before you publish

1. Add real screenshots to `public/images/` (e.g. `sportkompas.jpg`), then in `app/data.js` set
   `image: "/images/sportkompas.jpg"` for that project (currently `null`, which shows a placeholder).
2. Add your hero photo to `public/images/` (e.g. `me.jpg`), then in `app/page.js` swap the
   `<div className="hero__photo placeholder-img">...</div>` block for:
   ```jsx
   <div className="hero__photo">
     <Image src="/images/me.jpg" alt="Gilles Beugnies" width={520} height={693} />
   </div>
   ```
   (don't forget `import Image from "next/image";` at the top of `page.js`)
3. In `app/page.js`, replace the placeholder contact links with your real email, GitHub, and LinkedIn.

## Deploy to Vercel (free)

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial Next.js portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com and sign in with your GitHub account.
3. Click **Add New → Project**, pick your `portfolio` repo, and click **Import**.
4. Vercel auto-detects Next.js — leave the defaults and click **Deploy**.
5. After ~1 minute you'll get a live URL like `portfolio-yourusername.vercel.app`.
6. Every push to `main` auto-redeploys. You can add a custom domain later for free under
   Project → Settings → Domains.

No extra config needed — `next build` / `next start` are handled by Vercel automatically.
