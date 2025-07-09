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
      <header className="relative flex justify-center">
        {/*
          Shift heading slightly left so the "C" aligns with the list
          checkmarks while keeping the badge spacing consistent.
        */}
        <h2
          id="credentials-heading"
          /*
            Slightly increased negative margin ensures the "C" of
            Credentials lines up with the leading check marks below
            while maintaining badge spacing across breakpoints.
          */
          className="-ml-8 w-full pr-24 text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver"
        >
          Credentials
        </h2>
        {/* display NNA credential badge next to the heading */}
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"
          className="absolute right-0 top-1/2 h-20 w-auto -translate-y-1/2"
          width="80"
          height="80"
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
