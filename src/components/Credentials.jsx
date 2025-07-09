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
    // Top margin and border create clear division from prior section
    <MotionSection
      aria-labelledby="credentials-heading"
      className={clsx(
        "container mt-12 border-t border-deepgray py-8 text-center flex flex-col gap-6",
        className,
      )}
    >
      <header className="flex justify-center">
        {/* Wrapper preserves underline width while isolating badge from layout */}
        <div className="heading-gradient relative inline-block">
          <h2
            id="credentials-heading"
            className="text-3xl font-serif font-semibold tracking-wide text-silver"
          >
            Credentials
          </h2>
          {/* Badge overlays the heading exactly as in reference image */}
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="absolute right-4 top-1/2 translate-y-[62.5%] flex-shrink-0 pointer-events-none select-none"
          />
        </div>
      </header>
      <ul className="mx-auto w-max flex flex-col gap-4 text-left">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start justify-start">
            <CheckIcon
              className="mr-2 h-5 w-5 text-silver"
              aria-hidden="true"
            />
            <span className="text-platinum">{cred}</span>          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
