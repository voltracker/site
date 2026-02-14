# Project

Personal portfolio and landing page built with Astro. Blog content authored in markdown (Obsidian vault). Deployed as a static site to GitHub Pages via GitHub Actions.

# Tech Stack

- **Framework**: Astro (static output)
- **Content**: Markdown files using Astro content collections
- **Styling**: TBD (Tailwind CSS preferred)
- **Deployment**: GitHub Pages + GitHub Actions

# Commands

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally

# Architecture

```
src/
  content/       # Markdown content (blog posts, projects)
    blog/        # Blog posts as .md files
    projects/    # Project case studies as .md files
  layouts/       # Astro layout components
  pages/         # Route pages (index, blog, projects, about)
  components/    # Reusable UI components
  styles/        # Global styles
public/          # Static assets (images, fonts, favicons)
```

# Content Conventions

- Blog posts use standard markdown with YAML frontmatter (title, date, description, tags, draft)
- Content may use Obsidian-style wikilinks `[[like this]]` — these should be converted or stripped during build
- Images referenced in posts live in `public/images/blog/`
- Draft posts (`draft: true` in frontmatter) should not appear in production builds

# Code Style

- Astro components use `.astro` extension
- Prefer Astro components over framework components unless interactivity is required
- Use TypeScript for content collection schemas and utility functions
- Semantic HTML throughout — use `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>` appropriately
- Mobile-first responsive design

# Deployment

- GitHub Actions workflow builds on push to `main` and deploys to GitHub Pages
- Astro config must set `site` to the production domain and `output` to `'static'`
- Custom domain configured via CNAME file in `public/`

# Key Decisions

- No client-side JavaScript unless explicitly needed for a specific interactive feature
- RSS feed at `/rss.xml` for blog posts
- Sitemap generation enabled via `@astrojs/sitemap`
- Accessible: target WCAG 2.1 AA compliance
