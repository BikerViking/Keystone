import { useEffect, useRef } from 'react';

export default function ThankYou() {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <>
      <h1
        ref={headingRef}
        tabIndex="-1"
        className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver"
      >
        Thank You
      </h1>
      <p className="text-lg text-lightgray">
        Your message has been received. We will be in touch soon.
      </p>
    </>
  );
}
