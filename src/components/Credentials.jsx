import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';
import { sectionSpacing } from './variants';
import clsx from 'clsx';

// Provide optional className for additional layout control
const credentials = [
  'Commissioned Notary Public',
  'NNA Certified Notary Signing Agent',
  'Bonded & Insured',
];

// Reusable credentials block styled like other sections
export default function Credentials({ className = '' }) {

  return (
    <MotionSection
      aria-labelledby="credentials-heading"
      className={clsx('w-full px-4 sm:px-8 text-center', sectionSpacing, className)}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6">
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
              <span className="text-lightgray">{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}
