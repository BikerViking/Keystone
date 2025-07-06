# Vite + React + Tailwind CSS

A minimal starter project using [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [Tailwind CSS](https://tailwindcss.com/).

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

## Static Hosting

This project is configured for seamless deployment on most static hosts. The repo includes routing fallbacks for Netlify and Vercel and a `404.html` for platforms that rely on a dedicated 404 file.

- **Netlify**: the `/public/_redirects` file ensures all routes serve `index.html`.
- **Vercel**: `vercel.json` rewrites incoming paths to `index.html`.
- **Other hosts**: `404.html` mirrors `index.html` so client-side routes function on refresh or direct navigation.

After running `npm run build`, deploy the generated `dist` directory.

