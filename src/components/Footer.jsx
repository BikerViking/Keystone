// Capture the year once to avoid recalculating on every render
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="footer-gradient bg-charcoal py-8 px-4 text-center text-sm text-lightgray"
    >
      <nav aria-label="Footer" className="mb-4 flex justify-center gap-4">
        <a href="/about" aria-label="Footer link to About" className="hover:text-silver">About</a>
        <a href="/services" aria-label="Footer link to Services" className="hover:text-silver">Services</a>
        <a href="/contact" aria-label="Footer link to Contact" className="hover:text-silver">Contact</a>
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
        <a
          href="https://twitter.com"
          aria-label="Twitter"
          className="text-lightgray transition-colors hover:text-silver"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M8 19c7.732 0 11.946-6.415 11.946-11.986 0-.18 0-.357-.012-.534A8.55 8.55 0 0022 4.308a8.19 8.19 0 01-2.357.65A4.1 4.1 0 0021.448 3.4a8.238 8.238 0 01-2.605.998A4.093 4.093 0 0015.448 3c-2.266 0-4.103 1.847-4.103 4.123 0 .322.036.636.106.936A11.623 11.623 0 013 4.784a4.128 4.128 0 00-.555 2.074c0 1.43.721 2.693 1.817 3.432a4.07 4.07 0 01-1.858-.514v.052c0 2.002 1.417 3.673 3.297 4.053a4.083 4.083 0 01-1.853.07c.523 1.646 2.041 2.845 3.838 2.877A8.208 8.208 0 012 17.558 11.616 11.616 0 008 19z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          className="text-lightgray transition-colors hover:text-silver"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M15 2h4a1 1 0 011 1v4a1 1 0 01-1 1h-2c-.55 0-1 .45-1 1v2h3a1 1 0 011 1v4a1 1 0 01-1 1h-3v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6H8a1 1 0 01-1-1v-4a1 1 0 011-1h3V9c0-2.761 2.239-5 5-5z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          aria-label="LinkedIn"
          className="text-lightgray transition-colors hover:text-silver"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M4.98 3.5c0 1.381-1.105 2.5-2.48 2.5A2.49 2.49 0 010 3.5C0 2.119 1.105 1 2.5 1S5 2.119 5 3.5zm.02 4.5H0V21h5V8zM8 8h4.75v1.945h.065c.663-1.258 2.286-2.445 4.705-2.445C21.507 7.5 23 9.715 23 13.167V21h-5v-6.667c0-1.588-.56-2.671-1.96-2.671-1.07 0-1.707.722-1.99 1.421-.102.249-.127.596-.127.942V21H9V8z"
              fill="currentColor"
            />
          </svg>
        </a>
      </p>
      <p>&copy; {CURRENT_YEAR} Keystone Notary Group, LLC. All rights reserved.</p>
    </footer>
  );
}
