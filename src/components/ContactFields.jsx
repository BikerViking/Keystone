import { inputStyles } from './variants';

export default function ContactFields({
  formData,
  errors,
  onChange,
  requestAppointment,
  setRequestAppointment,
  setErrors,
}) {
  return (
    <fieldset className="flex flex-col gap-4">
      <label className="block" htmlFor="name">
        <span className="mb-1 block text-platinum">Full Name</span>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={onChange}
          aria-invalid={!!errors.name}
          className={inputStyles()}
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
          onChange={onChange}
          aria-invalid={!!errors.email}
          className={inputStyles()}
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
          onChange={onChange}
          className={inputStyles()}
        />
      </label>
      <label className="block" htmlFor="documentCategory">
        <span className="mb-1 block text-platinum">Document Category</span>
        <select
          id="documentCategory"
          name="documentCategory"
          required
          value={formData.documentCategory}
          onChange={onChange}
          aria-invalid={!!errors.documentCategory}
          className={inputStyles()}
        >
          <option value="">Select a category</option>
          <option value="real_estate">Real Estate / Loan</option>
          <option value="personal">Personal Document</option>
          <option value="business">Business Document</option>
          <option value="other">Other</option>
        </select>
        {errors.documentCategory && (
          <p role="alert" className="mt-1 text-sm text-red-500">
            {errors.documentCategory}
          </p>
        )}
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
                const { date, time, appointmentType, ...rest } = prev;
                void date;
                void time;
                void appointmentType;
                return rest;
              });
            }
          }}
          className="h-5 w-5 accent-silver"
        />
        <span className="text-platinum">I am requesting an appointment.</span>
      </label>
      <label className="block" htmlFor="appointmentType">
        <span className="mb-1 block text-platinum">Appointment Type</span>
        <select
          id="appointmentType"
          name="appointmentType"
          disabled={!requestAppointment}
          required={requestAppointment}
          value={formData.appointmentType}
          onChange={onChange}
          aria-invalid={!!errors.appointmentType}
          className={inputStyles({ disabled: !requestAppointment })}
        >
          <option value="">Select type</option>
          <option value="in_person">In-Person</option>
          <option value="remote">Remote/Online</option>
        </select>
        {errors.appointmentType && (
          <p role="alert" className="mt-1 text-sm text-red-500">
            {errors.appointmentType}
          </p>
        )}
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
          onChange={onChange}
          aria-invalid={!!errors.date}
          className={inputStyles({ disabled: !requestAppointment })}
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
          onChange={onChange}
          aria-invalid={!!errors.time}
          className={inputStyles({ disabled: !requestAppointment })}
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
    </fieldset>
  );
}
