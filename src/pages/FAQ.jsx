import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MotionSection, SEO } from '../components';
import clsx from 'clsx';

const faqs = [
  {
    q: 'What types of documents can you notarize?',
    a: 'We can notarize a wide variety of documents including affidavits, powers of attorney, real estate documents, healthcare directives, and more. If you’re unsure, contact us to confirm.',
  },
  {
    q: 'Do I need to bring identification?',
    a: 'Yes. Pennsylvania law requires a valid government-issued photo ID for all signers.',
  },
  {
    q: 'Can I schedule a same-day or emergency appointment?',
    a: 'Yes, we offer after-hours and emergency notary services depending on availability. Additional fees may apply.',
  },
  {
    q: 'Are you certified and insured?',
    a: 'Yes. Keystone Notary Group, LLC is NNA Certified and carries full Errors & Omissions insurance coverage. You can trust that our agents follow best practices and strict industry standards.',
  },
  {
    q: 'Do you provide legal advice or prepare documents?',
    a: 'No. Keystone Notary Group, LLC is not a law firm and does not provide legal advice or legal document preparation. Please consult an attorney for legal guidance.',
  },
  {
    q: 'Where do you offer mobile notary services?',
    a: 'We serve the Greater Philadelphia area, including Bucks, Montgomery, Chester, Delaware, and Philadelphia counties. Travel beyond this area may be arranged upon request.',
  },
  {
    q: 'Where can I see your current rates?',
    a: (
      <>
        Our current price list can be viewed{' '}
        <Link to="/prices" className="underline hover:text-silver">
          here
        </Link>
        .
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <MotionSection className="w-full py-8 px-4 sm:px-8">
      <SEO
        title="Notary FAQs | Keystone Notary Group"
        description="Answers to common questions about our mobile notary services and scheduling."
        path="/faq"
      />
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-8">
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-purewhite">
          Frequently Asked Questions
        </h1>
        <ul className="flex flex-col gap-4">
        {faqs.map(({ q, a }, idx) => {
          const isOpen = openIndex === idx;
          return (
            <li key={q} className="overflow-hidden rounded border border-platinum">
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                id={`faq-header-${idx}`}
                className="flex w-full items-center justify-between bg-deepgray px-4 py-4 text-left text-platinum transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver"
              >
                <span className="font-medium">{q}</span>
                <svg
                  className={clsx(
                    'h-5 w-5 transform transition-transform',
                    isOpen ? 'rotate-180 text-silver' : 'text-platinum',
                  )}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 8l4 4 4-4" />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-header-${idx}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="px-4 pb-4 pt-2 text-platinum"
                  >
                    <p>{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
        </ul>
        <p className="mt-4 text-platinum">
          Still have questions?{' '}
          <Link to="/contact" className="underline hover:text-silver">
            Contact us
          </Link>
          .
        </p>
      </div>
    </MotionSection>
  );
}
