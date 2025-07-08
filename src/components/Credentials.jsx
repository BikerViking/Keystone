import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

// Provide optional className for additional layout control
export default function Credentials({ className = '' }) {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    // Top margin and border create clear division from prior section
    <MotionSection
      aria-labelledby="credentials-heading"
      className={`container mt-12 border-t border-deepgray py-8 text-center space-y-6 ${className}`}
    >
      <div className="flex items-center gap-4">
        {/* align divider to left edge like 'Why Choose Us?' heading */}
        <h2
          id="credentials-heading"
          className="w-full text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver"
        >
          Credentials
        </h2>
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"
          className="h-16 w-auto flex-none"
        />
      </div>

      <ul className="mx-auto w-max space-y-4 text-left">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start justify-start">
            <CheckIcon className="mr-2 h-5 w-5 text-silver" aria-hidden="true" />
            <span className="text-platinum">{cred}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
