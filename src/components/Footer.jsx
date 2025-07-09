export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-charcoal py-8 px-4 text-center text-sm text-platinum"
    >
      <p>
        &copy; {new Date().getFullYear()} Keystone Notary Group, LLC. All rights
        reserved.
      </p>
    </footer>
  );
}
