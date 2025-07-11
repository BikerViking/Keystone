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
        'mt-12 section-divider flex w-full flex-col items-center px-4 sm:px-8 text-center',
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8">
        <h2
          id="credentials-heading"
          className="w-full text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver"
        >
          Credentials
        </h2>

        <ul className="mx-auto flex w-max flex-col items-start gap-4">
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
