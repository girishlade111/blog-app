# blog-app

A clean, modern blog front-end built with vanilla HTML, CSS, and JavaScript. It features a Material-style app bar, an animated search bar with label effects, and a responsive card-based blog layout — all client-side, with no framework or build step required.

## Features

- **Modern blog layout** — card-based post grid with a clean header and footer.
- **Animated search bar** — floating-label search input for filtering posts.
- **Contact modal** — a "Contact Us" button that opens a contact dialog.
- **Responsive design** — adapts to desktop and mobile viewports.
- **Zero dependencies** — pure HTML/CSS/JS, no framework, no build step, no backend.

## Tech Stack

- HTML5
- CSS3 (Google Fonts — Roboto)
- Vanilla JavaScript (client-side only)

## Quick Start

No install or build needed. Serve the folder with any static server, or just open `index.html` in a browser:

```bash
# using Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project Structure

```
.
├── index.html      # Entry page (redirects to code.html)
├── code.html       # Main blog page
├── code.css        # Blog styles (served as style.css)
├── code.js         # Blog interactivity (served as script.js)
├── style.css       # Same styles under the filename code.html references
└── script.js       # Same JS under the filename code.html references
```

> Note: `code.html` references `style.css` and `script.js`, which are copies of `code.css` / `code.js` so the page loads correctly.

## Deploy

Static site — deploy anywhere static hosting is supported (e.g. GitHub Pages):

1. Push this repo to GitHub.
2. Enable **GitHub Pages** for the default branch (`/` path) via the repo's Pages API or Settings.
3. The site is live at `https://<owner>.github.io/blog-app/`.

---

Built by Girish Lade · https://ladestack.in
