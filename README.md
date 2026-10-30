# Siddharth Gupta – portfolio (React + Tailwind)

The same portfolio as the live page, as an editable React project styled with Tailwind CSS. Built with Vite.

## Run it on your computer

You need Node.js 18 or newer (nodejs.org).

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). The page reloads as you save changes.

To make the finished site:

```bash
npm run build
```

This creates a `dist` folder containing the complete website.

## Where to edit things

| I want to change… | Edit this |
| --- | --- |
| Any text, project, skill, problem, service, or my email | `src/data.js` |
| LinkedIn and GitHub links, phone number | `LINKS` and `PHONE` in `src/data.js` (an empty value hides it) |
| The downloadable resume | replace `public/Siddharth_Gupta_Resume.pdf` with your new file (keep the same name) |
| Add testimonials | `QUOTES` in `src/data.js` (the section appears automatically) |
| Add a project result or "what it's for" line | the project's `result` or `purpose` field in `src/data.js` |
| Colors, light and dark | the `:root` and `.dark` blocks at the top of `src/index.css` |
| Fonts | the Google Fonts link in `index.html` and `fontFamily` in `tailwind.config.js` |
| Layout and look of a section | the matching file in `src/components/` (Tailwind classes) |
| Background pictures (dot grid, glows, floating chips, section drawings) | `src/components/Background.jsx`, `Motifs.jsx`, the `CHIPS` list in `StackArt.jsx`, and the "Background pictures" block in `src/index.css` |

`src/data.js` is written for editing: each list has a comment explaining its fields.

## Publish on GitHub Pages

**Option A: automatic (recommended).** Push this project to a GitHub repository, then in the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**. Every push to `main` then builds and publishes the site, using `.github/workflows/deploy.yml`.

**Option B: manual.** Run `npm run build`, then upload the *contents* of the `dist` folder (not the folder itself) to your `username.github.io` repository and serve it from the main branch.

## How it is built

- `src/components/` has one file per section: Hero, Delivery, Problems, Work, Services, Skills, Testimonials, Contact.
- Tailwind colors (`bg-surface`, `text-muted`, `border-line`, `bg-accent`) read CSS variables, so light and dark mode switch by changing the variables.
- A few things Tailwind does not express well, such as the animated SVG illustration and the plus/minus on the services accordion, are plain CSS in `src/index.css`.
- No images are loaded. Icons are drawn in code (`src/components/Icon.jsx`).

## Search (SEO)

- **Your site address** appears in `index.html` (canonical, social tags, structured data), `public/robots.txt` and `public/sitemap.xml`. It is currently `https://siddharthguptaa.github.io/`. If your real address is different, replace it in those four places.
- `public/og-image.png` is the picture shown when the link is shared on LinkedIn or WhatsApp.
- The `<noscript>` block in `index.html` repeats your key text for crawlers that do not run JavaScript. If you change content in `src/data.js`, update it there too.
- After the site is live, add it in Google Search Console, submit `sitemap.xml`, and request indexing.
