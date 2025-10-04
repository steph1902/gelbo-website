# Gelbo — Company Profile

This repository contains static HTML/CSS assets for the Gelbo company profile and website templates.

Contents:

- `gelbo design assets/` — design files and a few static HTML pages.
- `gelbo website structure templates/` — main template `index.html` (tailwind-based).

How to preview locally:

1. Open `gelbo website structure templates/index.html` in your browser, or run a simple static server:

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000/gelbo\ website\ structure\ templates/index.html
```

How to deploy to GitHub:

1. Create a new repository on GitHub (private or public).
2. Run the git commands below from the repository root to push your local files.

```bash
git init
git add .
git commit -m "Initial commit: add gelbo website templates"
# create repo on GitHub and add remote, for example:
# git remote add origin git@github.com:<your-username>/<repo-name>.git
# git push -u origin main
```

Optional: Use GitHub Pages to host this static site. See README for details.
