import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';
import clsx from 'clsx';

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
      className={clsx(
        'container mt-12 border-t border-deepgray py-8 text-center flex flex-col gap-6',
        className,
      )}
    >
      <h2
        id="credentials-heading"
        className="text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver"
      >
        Credentials
      </h2>

      {/* Badge sits beside the credentials list on desktop and below on mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-col gap-4 text-left">
          {credentials.map((cred) => (
            <li key={cred} className="flex items-start">
              <CheckIcon className="mr-2 h-5 w-5 text-silver" aria-hidden="true" />
              <span className="text-platinum">{cred}</span>
            </li>
          ))}
        </ul>
        <img
          src="/nna-badge.png"
          alt="NNA Certified Notary Signing Agent 2025 badge"
          className="w-[220px] h-[220px] mx-auto mt-6 sm:mt-0 sm:ml-8 drop-shadow-xl pointer-events-none select-none"
          draggable={false}
        />
      </div>
    </MotionSection>
  );
}
