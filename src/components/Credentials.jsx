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
      <div className="flex items-center justify-between border-b border-gray-600 pb-1">
        <h2 className="text-3xl font-serif font-semibold tracking-wide text-silver">
          Credentials
        </h2>
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"
          className="w-20 sm:w-24 md:w-28 lg:w-32 -mb-6 mr-2 lg:mr-4"
        />
      </div>
      <ul className="space-y-4">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start">
            <CheckIcon className="mr-2 h-5 w-5 text-silver" />
            <span className="text-platinum">{cred}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
