import { useState } from 'react';
import { z } from 'zod';
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

  const formSchema = z
    .object({
      name: z.string().trim().min(1, 'Full name is required.'),
      email: z
        .string()
        .trim()
        .min(1, 'Email address is required.')
        .email('Enter a valid email address.'),
      phone: z
        .string()
        .trim()
        .regex(/^$|^\+?[0-9().\s-]{7,}$/i, 'Enter a valid phone number.')
        .optional(),
      documentCategory: z.string().min(1, 'Document category is required.'),
      appointmentType: z.string().optional(),
      date: z.string().optional(),
      time: z.string().optional(),
      message: z.string().trim().min(1, 'Message is required.'),
      requestAppointment: z.boolean(),
    })
    .superRefine((data, ctx) => {
      if (data.requestAppointment) {
        if (!data.appointmentType) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['appointmentType'],
            message: 'Appointment type is required.',
          });
        }
        if (!data.date) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['date'],
            message: 'Preferred date is required.',
          });
        }
        if (!data.time) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['time'],
            message: 'Preferred time is required.',
          });
        }
      }
    });

  const validate = () => {
    const result = formSchema.safeParse({ ...formData, requestAppointment });
    if (!result.success) {
      const newErrors = {};
      for (const issue of result.error.issues) {
        if (issue.path[0]) {
          newErrors[issue.path[0]] = issue.message;
        }
      }
      return newErrors;
    }
    return {};
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const validation = validate();
    if (validation[name]) {
      setErrors((prev) => ({ ...prev, [name]: validation[name] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
        <ContactFields
          formData={formData}
          errors={errors}
          onChange={handleChange}
          onBlur={handleBlur}
          requestAppointment={requestAppointment}
          setRequestAppointment={setRequestAppointment}
          setErrors={setErrors}
        />
        <label className="block" htmlFor="message">
          <span className="mb-1 block text-platinum">Message</span>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={inputStyles()}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="mt-1 text-sm text-red-500">
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
    </>
  );
}
