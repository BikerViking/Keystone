import { useState } from 'react';
import { MotionSection } from '../components';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    datetime: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In the future, form data can be sent to the backend for owner review
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <MotionSection className="container space-y-6 py-20">
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Thank You
        </h1>
        <p className="text-lg text-platinum">Your message has been received. We will be in touch soon.</p>
      </MotionSection>
    );
  }

  return (
    <MotionSection id="contact" className="container space-y-8 py-8">
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block" htmlFor="name">
            <span className="mb-1 block text-platinum">Full Name</span>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none"
            />
          </label>
          <label className="block" htmlFor="email">
            <span className="mb-1 block text-platinum">Email Address</span>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none"
            />
          </label>
          <label className="block" htmlFor="phone">
            <span className="mb-1 block text-platinum">Phone Number</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none"
            />
          </label>
          <label className="block" htmlFor="datetime">
            <span className="mb-1 block text-platinum">Preferred Appointment Date/Time</span>
            <input
              id="datetime"
              name="datetime"
              type="datetime-local"
              value={formData.datetime}
              onChange={handleChange}
              className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none"
            />
          </label>
        </div>
        <label className="block" htmlFor="message">
          <span className="mb-1 block text-platinum">Message</span>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="cta-button hover:border-silver hover:text-silver"
        >
          Send Message
        </button>
      </form>
      <p className="text-sm italic text-platinum">
        Submitting this form does not guarantee an appointment. All requests are
        subject to confirmation by Keystone Notary Group.
      </p>
      <p className="text-xs text-platinum">
        Keystone Notary Group, LLC is not a law firm and does not provide legal
        advice or services. Please consult an attorney for legal questions or
        document preparation.
      </p>
    </MotionSection>
  );
}
