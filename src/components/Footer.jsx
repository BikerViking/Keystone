function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 p-4 text-sm md:flex-row">
        <p>&copy; {new Date().getFullYear()} Keystone Notary Group. All rights reserved.</p>
        <p>
          <a href="/" className="hover:text-teal-300">Home</a>
          <span className="mx-2">|</span>
          <a href="/contact" className="hover:text-teal-300">Contact</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
