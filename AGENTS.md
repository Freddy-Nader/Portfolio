# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website with a simple file structure designed for deployment on Vercel.

## Project Structure

- `/css/` - Stylesheets
- `/js/` - JavaScript files
- `/img/` - Images and media assets
- `/pages/` - Additional HTML pages (about, contact, etc.)
- `index.html` - Main landing page
- `vercel.json.example` - Vercel deployment configuration template

## Deployment

The project uses Vercel for hosting with URL rewriting configured via `vercel.json`. The example configuration shows:
- Clean URLs without .html extensions (e.g., `/about` instead of `/about.html`)
- Automatic routing for nested paths

To deploy:
1. Copy `vercel.json.example` to `vercel.json` (or create custom routing as needed)
2. Deploy via Vercel CLI (`vercel`) or connect the repository to Vercel dashboard

## Development

This is a static HTML site with no build process. To develop:
- Open `index.html` directly in a browser, or
- Use a local development server: `python -m http.server 8000` or `npx serve`

## Important Notes

- All configuration changes should be made to `.env.example` files, never to `.env` directly (per global CLAUDE.md)
- The site uses clean URL routing, so pages should be created as `.html` files but accessed without the extension

## User Preferences

- **Keep it simple**: Always keep all code in this project as simple as possible. Avoid overengineering or unnecessary complexity.
