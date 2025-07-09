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
      <header className="flex justify-start">
        <div
          className="relative flex flex-row items-center w-full"
          style={{ minHeight: '7rem' }}
        >
          {/* Decorative line fully behind heading and badge */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gray-400 z-0" />
          {/* Heading */}
          <h2
            id="credentials-heading"
            className="relative z-10 text-4xl font-serif font-semibold tracking-wide text-silver bg-black pr-4"
            style={{ lineHeight: 1 }}
          >
            Credentials
          </h2>
          {/* Badge */}
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="relative z-10 w-32 h-32 -my-8 ml-2 drop-shadow-xl pointer-events-none select-none bg-black"
            style={{ objectFit: 'contain' }}
            draggable={false}
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
            <span className="text-platinum">{cred}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );}