# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio site for Rohin Nanavati, deployed via GitHub Pages at `Roh15.github.io`. No build step, no framework, no package manager — pure HTML/CSS/JS served directly from the repo root.

## Development

Open any HTML file in a browser to preview locally. There is no dev server, build process, or linting setup.

To deploy: commit and push to `main`. GitHub Pages auto-deploys within ~1-2 minutes.

## Architecture

Four standalone HTML pages, each self-contained with the same nav/footer structure:
- `index.html` — Hero, about cards, quick-links
- `resume.html` — Summary, skills grid, timeline (work/education), certs
- `projects.html` — Filterable project cards
- `blog.html` — Expandable thread cards

All pages share one stylesheet (`css/style.css`) and one JS file (`js/main.js`). The JS initializes page-specific components via `DOMContentLoaded` — functions that find no matching elements are no-ops, so the single file works across all pages.

## CSS Design System

CSS custom properties in `:root` drive the entire visual system. Key variables:
- `--primary: #6366f1` (indigo), `--secondary: #ec4899` (pink), `--accent: #10b981` (green)
- `--bg-dark: #0f0f23`, `--bg-card: #1a1a2e`
- `--font-main: 'Space Grotesk'`, `--font-mono: 'JetBrains Mono'`

When adding new components, use these variables rather than hardcoding colors.

## Content Patterns

**Project cards** (`projects.html`): `<article class="project-card" data-category="cv">` — `data-category` must match a `data-filter` value on a `.project-filters .filter-btn` for filtering to work.

**Thread cards** (`blog.html`): `<article class="thread-card" data-category="..." id="thread-...">` with nested `.thread-posts` (hidden by default, toggled via `.thread-toggle` button adding `.expanded` class).

**Timeline items** (`resume.html`): `.timeline-item > .timeline-marker + .timeline-content > .timeline-header + ul.timeline-details + .timeline-tags`

**Tag color classes**: `tag-healthcare`, `tag-dl`, `tag-cv`, `tag-sports`, `tag-nlp`, `tag-analytics`, `tag-research`, `tag-interpretability`, `tag-neuro`, `tag-fun`, `tag-rl`

## Navigation

The active nav link is set by adding `class="active"` directly in each page's HTML — there is no JS-driven active state.

## Resume PDF

The PDF is `Resume20251216.pdf` in the repo root. Update the filename and the `href` in `resume.html` when replacing it.
