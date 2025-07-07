import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container space-y-6">
      <h2 className="text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver">
        Credentials
      </h2>
      <div className="overflow-hidden">
        <figure className="mx-auto mb-4 w-20 md:float-right md:mb-0 md:mr-4 md:w-24">
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="w-full"
          />
        </figure>
        <ul className="space-y-4">
          {credentials.map((cred) => (
            <li key={cred} className="flex items-start">
              <CheckIcon className="mr-2 h-5 w-5 text-silver" />
              <span className="text-platinum">{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}
