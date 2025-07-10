import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MotionSection, SEO } from '../components';

export default function NotFound() {
  const navigate = useNavigate();
  const onSearch = (e) => {
    e.preventDefault();
    const term = e.target.elements.search.value.trim();
    if (term) navigate(`/search?q=${encodeURIComponent(term)}`);
  };
  return (
    <MotionSection className="flex min-h-screen w-full flex-col items-center justify-center gap-6 py-8 px-4 sm:px-8 text-center">
      <SEO
        title="Page Not Found | Keystone Notary Group"
        description="Sorry, the page you are looking for does not exist."
      />
      <motion.img
        src="/logo.svg"
        alt="Keystone Notary Group logo"
        className="mx-auto h-16 w-16 text-silver"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <h1 className="text-6xl font-serif font-semibold tracking-wide heading-gradient text-silver">404</h1>
      <p className="text-lg text-platinum">Sorry, we can’t find that page.</p>
      <nav aria-label="Helpful links" className="flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="https://forms.gle/b1Xg8pYkZABk4wN96"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button px-6"
        >
          Book Appointment
        </a>
        <Link to="/" className="cta-button hover:border-silver hover:text-silver px-6">
          Return Home
        </Link>
      </nav>
      <form onSubmit={onSearch} className="mt-4 flex w-full max-w-xs gap-2">
        <label htmlFor="search" className="sr-only">
          Search site
        </label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search..."
          className="flex-1 rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button type="submit" className="cta-button px-4">
          Go
        </button>
      </form>
      <p className="mt-4 text-xs italic text-platinum">
        All bookings are reviewed and confirmed before they are finalized.
      </p>
    </MotionSection>
  );
}
