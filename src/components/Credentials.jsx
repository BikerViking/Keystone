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
        'mt-12 flex w-full flex-col items-center gap-6 border-t border-deepgray py-8 px-4 sm:px-8 text-center',
        className,
      )}
    >
      <div className="mx-auto max-w-2xl">
      <h2
        id="credentials-heading"
        className="text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver"
      >
        Credentials
      </h2>

      <ul className="flex flex-col gap-4 text-left">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start">
            <CheckIcon className="mr-2 h-5 w-5 text-silver" aria-hidden="true" />
            <span className="text-platinum">{cred}</span>
          </li>
        ))}
      </ul>
      </div>
    </MotionSection>
  );
}
