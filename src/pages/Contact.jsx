import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MotionSection, SEO } from '../components';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [requestAppointment, setRequestAppointment] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    if (requestAppointment) {
      if (!formData.date) {
        newErrors.date = 'Preferred date is required.';
      }
      if (!formData.time) {
        newErrors.time = 'Preferred time is required.';
      }
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    // In the future, form data can be sent to the backend for owner review
    setErrors({});
    setSubmitted(true);
  };

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
      <MotionSection className="container space-y-6 py-20">
        <SEO
          title="Contact Keystone Notary Group | Schedule a Notary"
          description="Request a mobile notary appointment or ask questions through our contact form."
          path="/contact"
        />
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Thank You
        </h1>
        <p className="text-lg text-platinum">Your message has been received. We will be in touch soon.</p>
      </MotionSection>
    );
  }

  return (
    <MotionSection id="contact" className="container space-y-8 py-8">
      <SEO
        title="Contact Keystone Notary Group | Schedule a Notary"
        description="Request a mobile notary appointment or ask questions through our contact form."
        path="/contact"
      />
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="space-y-4">
          <label className="block" htmlFor="name">
            <span className="mb-1 block text-platinum">Full Name</span>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none"
            />
            {errors.name && (
              <p role="alert" className="mt-1 text-sm text-red-500">
                {errors.name}
              </p>
            )}
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
              aria-invalid={!!errors.email}
              className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none"
            />
            {errors.email && (
              <p role="alert" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
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
          <label className="flex items-center gap-2" htmlFor="requestAppointment">
            <input
              id="requestAppointment"
              name="requestAppointment"
              type="checkbox"
              checked={requestAppointment}
              onChange={(e) => {
                const checked = e.target.checked;
                setRequestAppointment(checked);
                if (!checked) {
                  setErrors((prev) => {
                    const { date, time, ...rest } = prev;
                    return rest;
                  });
                }
              }}
              className="h-5 w-5 accent-silver"
            />
            <span className="text-platinum">I am requesting an appointment.</span>
          </label>
          <label className="block" htmlFor="date">
            <span className="mb-1 block text-platinum">Preferred Date</span>
            <input
              id="date"
              name="date"
              type="date"
              disabled={!requestAppointment}
              required={requestAppointment}
              value={formData.date}
              onChange={handleChange}
              aria-invalid={!!errors.date}
              className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {errors.date && (
              <p role="alert" className="mt-1 text-sm text-red-500">
                {errors.date}
              </p>
            )}
          </label>
          <label className="block" htmlFor="time">
            <span className="mb-1 block text-platinum">Preferred Time</span>
            <input
              id="time"
              name="time"
              type="time"
              disabled={!requestAppointment}
              required={requestAppointment}
              value={formData.time}
              onChange={handleChange}
              aria-invalid={!!errors.time}
              className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {errors.time && (
              <p role="alert" className="mt-1 text-sm text-red-500">
                {errors.time}
              </p>
            )}
          </label>
          {!requestAppointment && (
            <p className="text-xs italic text-platinum">
              Enable appointment request above to choose date and time.
            </p>
          )}
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
            aria-invalid={!!errors.message}
            className="w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none"
          />
          {errors.message && (
            <p role="alert" className="mt-1 text-sm text-red-500">
              {errors.message}
            </p>
          )}
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
        subject to confirmation by Keystone Notary Group, LLC.
      </p>
      <p className="text-xs text-platinum">
        Keystone Notary Group, LLC is not a law firm and does not provide legal
        advice or services. Please consult an attorney for legal questions or
        document preparation.
      </p>
    </MotionSection>
  );
}
