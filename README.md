# Al-Riadah Automotive Care website

A responsive, Arabic-first static website for حلول الريادة لصيانة السيارات, with an English language toggle and direct links to the client maintenance portal and Nuqati dashboard.

## Preview locally

Open `index.html` in a browser, or run a simple static server from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository for the website.
2. Upload the files in this folder, keeping `assets/workshop-hero.png` beside `index.html`.
3. In repository settings, enable **Pages** and select the main branch/root.
4. Connect the repository or deployed files to your hosting provider and point `al-riadah.sa` after checking the DNS records.

This is a static front-end only. It does not replace the client portal or Nuqati backend; the buttons open those existing services.

## Content and assets

- `index.html`: site content and structure
- `styles.css`: responsive design
- `script.js`: language toggle and mobile navigation
- `assets/workshop-hero.png`: custom generated workshop hero image

Other service photos load from Unsplash and require an internet connection. Replace them with workshop-owned photos before launch if you want the site to show your actual premises and team.
