export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-charcoal py-8 px-4 text-center text-sm text-platinum"
    >
      <nav aria-label="Footer" className="mb-4 flex justify-center gap-4">
        <a href="/about" aria-label="Footer link to About" className="hover:text-silver">About</a>
        <a href="/services" aria-label="Footer link to Services" className="hover:text-silver">Services</a>
        <a href="/prices" aria-label="Footer link to Prices" className="hover:text-silver">Prices</a>
      </nav>
      <p className="mb-2">
        <a href="tel:2673099000" className="hover:text-silver">
          (267) 309-9000
        </a>
        <span className="mx-2">|</span>
        <a
          href="mailto:info@keystonenotarygroup.com"
          className="hover:text-silver"
        >
          info@keystonenotarygroup.com
        </a>
      </p>
      <p className="mb-2 flex justify-center gap-3">
        {/* Social icon placeholders */}
        <span aria-hidden="true" className="h-5 w-5 rounded-full bg-deepgray" />
        <span aria-hidden="true" className="h-5 w-5 rounded-full bg-deepgray" />
        <span aria-hidden="true" className="h-5 w-5 rounded-full bg-deepgray" />
      </p>
      <p>&copy; {new Date().getFullYear()} Keystone Notary Group, LLC. All rights reserved.</p>
    </footer>
  );
}
