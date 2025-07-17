import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MotionSection, SEO } from '../components';
import { sectionSpacing } from '../components/variants';
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
      <MotionSection className={`container space-y-6 ${sectionSpacing}`}>
        <SEO
          title="Contact Keystone Notary Group | Schedule a Notary"
          description="Request a mobile notary appointment or ask questions through our contact form."
          path="/contact"
        />
        <ThankYou />
      </MotionSection>
    );
  }

  return (
    <MotionSection id="contact" className={`container space-y-8 ${sectionSpacing}`}>
      <SEO
        title="Contact Keystone Notary Group | Schedule a Notary"
        description="Request a mobile notary appointment or ask questions through our contact form."
        path="/contact"
      />
      {/* Center the form and limit width to maintain focus and readability */}
      <div className="mx-auto w-full max-w-[600px] px-4">
        <ContactForm onSuccess={() => setSubmitted(true)} />
      </div>
    </MotionSection>
  );
}
