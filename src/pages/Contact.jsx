function Contact() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <p>Fill out the form below and one of our agents will reach out promptly.</p>
      <form className="space-y-4" action="https://formspree.io/f/maylnpqr" method="POST">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">Name</label>
          <input id="name" name="name" required className="rounded bg-gray-800 p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email</label>
          <input id="email" name="email" type="email" required className="rounded bg-gray-800 p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1">Message</label>
          <textarea id="message" name="message" rows="4" required className="rounded bg-gray-800 p-2" />
        </div>
        <button type="submit" className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-500">Send</button>
      </form>
    </section>
  );
}

export default Contact;
