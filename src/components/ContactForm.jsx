import { useState, useRef } from 'react';
import ContactFields from './ContactFields';
import { inputStyles } from './variants';

export default function ContactForm({ onSuccess }) {
  const [requestAppointment, setRequestAppointment] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    documentCategory: '',
    appointmentType: '',
    date: '',
    time: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const fieldRefs = useRef({
    name: null,
    email: null,
    documentCategory: null,
    appointmentType: null,
    date: null,
    time: null,
    message: null,
  });

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
    if (!formData.documentCategory) {
      newErrors.documentCategory = 'Document category is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    if (requestAppointment) {
      if (!formData.appointmentType) {
        newErrors.appointmentType = 'Appointment type is required.';
      }
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
      const first = Object.keys(validation)[0];
      fieldRefs.current[first]?.focus();
      return;
    }
    setErrors({});
    onSuccess();
  };

  return (
    <>
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        <ContactFields
          formData={formData}
          errors={errors}
          onChange={handleChange}
          requestAppointment={requestAppointment}
          setRequestAppointment={setRequestAppointment}
          setErrors={setErrors}
          fieldRefs={fieldRefs}
        />
        <label className="block" htmlFor="message">
          <span className="mb-1 block text-lightgray">Message</span>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            ref={(el) => (fieldRefs.current.message = el)}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            className={inputStyles()}
          />
          {errors.message && (
            <p role="alert" className="mt-1 text-sm text-silver">
              {errors.message}
            </p>
          )}
        </label>
        <button
          type="submit"
          className="cta-button mx-auto block px-6 py-2 text-base hover:border-silver hover:text-silver"
        >
          Send Message
        </button>
      </form>
      <p className="mt-6 text-center text-sm italic text-lightgray">
        Submitting this form does not guarantee an appointment. All requests are
        subject to confirmation by Keystone Notary Group, LLC.
      </p>
      <p className="mt-2 text-center text-xs text-lightgray">
        Keystone Notary Group, LLC is not a law firm and does not provide legal
        advice or services. Please consult an attorney for legal questions or
        document preparation.
      </p>
    </>
  );
}
