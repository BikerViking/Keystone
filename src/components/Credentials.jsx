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
          Center heading to mirror other sections while preserving space for the
          credential badge overlay.
        */}
        <h2
          id="credentials-heading"

          /* Uniform width ensures the decorative underline matches other
             headings. Additional padding keeps text clear of the badge. */
          className="w-full pr-32 text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver"
        >
          Credentials
        </h2>
        {/* display NNA credential badge next to the heading */}
        {/*
          Position badge over the extended underline without shifting the
          heading. Larger size improves readability across breakpoints.
        */}
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"

          /* Enlarged by 20% and nudged left for better visual balance */
          className="absolute right-10 top-1/2 h-[7.2rem] w-auto -translate-y-1/2"
          width="115"
          height="115"
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
