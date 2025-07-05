import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-center space-y-6 py-16 text-center">
      <h1 className="text-6xl font-serif font-semibold tracking-wide heading-gradient">404</h1>
      <p className="text-lg text-platinum">Page not found.</p>
      <Link to="/" className="rounded border border-platinum bg-[#1a1a1a] px-6 py-3 text-white transition hover:text-silver hover:border-silver hover:shadow-lg">
        Back to Home
      </Link>
    </section>
  );
}
