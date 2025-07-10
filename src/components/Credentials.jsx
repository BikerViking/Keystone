import CheckIcon from "./CheckIcon";
import MotionSection from "./MotionSection";
import clsx from "clsx";

// Provide optional className for additional layout control
export default function Credentials({ className = "" }) {
  const credentials = [
    "Licensed & Bonded",
    "Certified Signing Agent",
    "Member of National Notary Association",
  ];

  return (
    <MotionSection
      aria-labelledby="credentials-heading"
      className={clsx(
        "relative bg-black max-w-xl mx-auto p-8 rounded-lg shadow-lg mt-4 sm:mt-8",
        className,
      )}
    >
      <header className="pb-2">
        <h2
          id="credentials-heading"
          className="text-4xl font-serif font-semibold tracking-wide text-silver"
          style={{ lineHeight: 1 }}
        >
          Credentials
        </h2>
        <div className="mt-2 h-px w-full bg-gray-400" />
      </header>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
        <ul className="flex flex-col gap-4 text-left">
          {credentials.map((cred) => (
            <li key={cred} className="flex items-start justify-start">
              <CheckIcon className="mr-2 h-5 w-5 text-silver" aria-hidden="true" />
              <span className="text-platinum">{cred}</span>
            </li>
          ))}
        </ul>
        <img
          src="/nna-badge.png"
          className="mx-auto mt-6 sm:mt-0 sm:ml-8 w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl pointer-events-none select-none"
          alt="NNA Certified Notary Signing Agent 2025 badge"
          draggable={false}
        />
      </div>
    </MotionSection>
  );
}
