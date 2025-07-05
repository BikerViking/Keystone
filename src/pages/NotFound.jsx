import { Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';

export default function NotFound() {
  return (
    <MotionSection className="container flex min-h-screen flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-6xl font-serif font-semibold tracking-wide heading-gradient text-silver">404</h1>
      <p className="text-lg text-platinum">Page not found.</p>
      <Link to="/" className="cta-button hover:border-silver hover:text-silver px-6">
        Back to Home
      </Link>
    </MotionSection>
  );
}
