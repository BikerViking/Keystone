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
        "relative bg-black max-w-xl mx-auto p-8 rounded-lg shadow-lg",
        className,
      )}
    >
        <header className="flex justify-start w-full">
          <div
            className="relative flex flex-row items-center w-full"
            style={{ minHeight: '7rem' }}
          >
            {/* Decorative line runs fully behind both heading and badge */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gray-400 z-0" />
            <h2
              id="credentials-heading"
              className="relative z-10 text-4xl font-serif font-semibold tracking-wide text-silver"
              style={{ lineHeight: 1 }}
            >
              Credentials
            </h2>
          </div>
        </header>

      <ul className="mx-auto w-max flex flex-col gap-4 text-left">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start justify-start">
            <CheckIcon
              className="mr-2 h-5 w-5 text-silver"
              aria-hidden="true"
            />
            <span className="text-platinum">{cred}</span>
          </li>
        ))}
      </ul>
      <img
        src="/nna-badge.png"
        className="absolute -bottom-8 -right-8 w-32 h-32 drop-shadow-xl pointer-events-none select-none"
        style={{ zIndex: 10 }}
        alt="NNA Certified Notary Signing Agent 2025 badge"
        draggable={false}
      />
    </MotionSection>
  );
}
