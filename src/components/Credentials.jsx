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
      <header className="heading-gradient flex flex-nowrap items-center justify-center gap-4">
        {/* Keep underline consistent with other headings */}
        <h2
          id="credentials-heading"
          className="text-3xl font-serif font-semibold tracking-wide text-silver"
        >
          Credentials
        </h2>
        {/* Ensure badge stays beside heading across breakpoints */}
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"
          className="flex-shrink-0 translate-y-[62.5%]"
          width="220"
          height="220"
        />
      </header>

      <ul className="mx-auto w-max flex flex-col gap-4 text-left">
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
