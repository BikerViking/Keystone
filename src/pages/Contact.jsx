import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MotionSection, SEO } from '../components';
import ContactForm from '../components/ContactForm';
import ThankYou from '../components/ThankYou';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  if (submitted) {
    return (
      <MotionSection className="flex w-full flex-col gap-6 py-20 px-4 sm:px-8">
        <SEO
          title="Contact Keystone Notary Group | Schedule a Notary"
          description="Request a mobile notary appointment or ask questions through our contact form."
          path="/contact"
        />
        <div className="mx-auto w-full max-w-3xl">
          <ThankYou />
        </div>
      </MotionSection>
    );
  }

  return (
    <MotionSection id="contact" className="flex w-full flex-col gap-8 py-8 px-4 sm:px-8">
      <SEO
        title="Contact Keystone Notary Group | Schedule a Notary"
        description="Request a mobile notary appointment or ask questions through our contact form."
        path="/contact"
      />
      <div className="mx-auto w-full max-w-3xl">
        <ContactForm onSuccess={() => setSubmitted(true)} />
      </div>
    </MotionSection>
  );
}
