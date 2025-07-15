import { MotionSection, SEO } from '../components';

export default function Prices() {
  return (
    <MotionSection className="w-full py-8 px-4 sm:px-8">
      <SEO
        title="Keystone Notary Group, LLC – Fee Schedule"
        description="Official price list for all services."
        path="/prices"
      />
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Keystone Notary Group, LLC – Fee Schedule
        </h1>
        <section aria-labelledby="standard-fees-heading">
          <h2 id="standard-fees-heading" className="mb-2 text-2xl font-semibold text-silver">
            Standard Notary Fees
          </h2>
          <ul className="list-disc pl-5 text-lightgray space-y-1">
            <li>Notarial Act (per signature/seal): $5</li>
            <li>Oath or Affirmation: $5</li>
            <li>Document/Copy Certification: $5</li>
          </ul>
        </section>
        <section aria-labelledby="travel-fees-heading">
          <h2 id="travel-fees-heading" className="mb-2 text-2xl font-semibold text-silver">
            Mobile/Travel Fees
          </h2>
          <ul className="list-disc pl-5 text-lightgray space-y-1">
            <li>Up to 10 miles: $35</li>
            <li>11–20 miles: $45</li>
            <li>21–30 miles: $55</li>
            <li>Over 30 miles: Quoted case-by-case</li>
          </ul>
        </section>
        <section aria-labelledby="surcharges-heading">
          <h2 id="surcharges-heading" className="mb-2 text-2xl font-semibold text-silver">
            Surcharges
          </h2>
          <ul className="list-disc pl-5 text-lightgray space-y-1">
            <li>After-hours (after 6pm or weekends): +$35</li>
            <li>Late night/major holiday: +$60</li>
            <li>Emergency/rush (within 2 hours): +$100</li>
            <li>Additional wait time (per 30 min after first 30): +$25</li>
          </ul>
        </section>
        <section aria-labelledby="specialized-heading">
          <h2 id="specialized-heading" className="mb-2 text-2xl font-semibold text-silver">
            Specialized Services
          </h2>
          <ul className="list-disc pl-5 text-lightgray space-y-1">
            <li>Loan signing / Real estate closing (buyer/seller/refi): $125–$175 (varies by package, call for quote)</li>
            <li>Complex signings: Quoted</li>
            <li>Deed-only appointment: $85</li>
          </ul>
        </section>
        <section aria-labelledby="notes-heading">
          <h2 id="notes-heading" className="mb-2 text-2xl font-semibold text-silver">Notes</h2>
          <ul className="list-disc pl-5 text-lightgray space-y-1">
            <li>All appointments must be confirmed.</li>
            <li>Payment accepted: Cash, check, card, or Venmo.</li>
            <li>Valid, unexpired government-issued photo ID is required.</li>
            <li>We do NOT provide legal advice.</li>
          </ul>
        </section>
      </div>
    </MotionSection>
  );
}
