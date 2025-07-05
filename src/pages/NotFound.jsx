import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-center space-y-6 py-16 text-center">
      <h1 className="text-6xl font-serif font-bold">404</h1>
      <p className="text-lg text-gray-300">Page not found.</p>
      <Link to="/" className="rounded bg-primary-600 px-6 py-3 text-white hover:bg-primary-500">
        Back to Home
      </Link>
    </section>
  );
}
