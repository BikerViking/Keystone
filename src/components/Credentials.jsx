import MotionSection from './MotionSection';
import CheckIcon from './CheckIcon';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="px-4 py-12 flex justify-center">
      <div className="w-full max-w-xl bg-[#111827] p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-silver whitespace-nowrap">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="w-20 sm:w-24 md:w-28"
          />
        </div>
        <ul className="space-y-4 text-platinum text-left text-lg sm:text-xl">
          {credentials.map((cred) => (
            <li key={cred} className="flex items-start">
              <CheckIcon className="h-5 w-5 mr-2 text-silver" />
              <span>{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}