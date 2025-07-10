# Keystone Notary Group Website

A professional notary website built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/). The project includes SEO metadata, automated sitemap generation, and PWA support through a web manifest and install icons. Favicons and Apple splash screens are integrated for a polished mobile experience.

The "Ask a Notary" chat widget provides quick answers and is fully accessible with keyboard navigation and high‑contrast styling.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Tests

Run tests in watch mode during development:

```bash
npm test
```

For CI pipelines or one-off runs, use the script below to avoid hanging watch mode:

```bash
npm run test:run
```

## Static Hosting

The repository includes routing fallbacks for popular static hosts. After building, deploy the `dist` directory.

- **Netlify**: `/public/_redirects` ensures all routes serve `index.html`.
- **Vercel**: `vercel.json` rewrites paths to `index.html`.
- **Other hosts**: `404.html` mirrors `index.html` so client-side routes work on refresh.
