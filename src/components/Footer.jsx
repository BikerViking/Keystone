export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-charcoal py-8 px-4 text-center text-sm text-platinum"
    >
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
      <p>
        &copy; {new Date().getFullYear()} Keystone Notary Group, LLC. All rights
        reserved.
      </p>
    </footer>
  );
}
