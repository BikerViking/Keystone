# TODO.md — Keystone Notary Group, LLC Website

This file outlines features, improvements, and implementation tasks for Codex to assist with. Codex should review this list regularly and complete items when instructed or when appropriate during development.

---

## Priority Features to Add

- [x] Create a full About page with company overview, professionalism, and mission statement.
- [x] Create a full Services page listing all notarial offerings in a well-structured layout.
- [x] Build a styled FAQ page with accessible, collapsible Q&A components.
- [ ] Enhance the Contact form with fields for appointment type and document category.
- [x] Add Open Graph and Twitter Card metadata for SEO and sharing.
- [x] Add a favicon and Apple touch icon to the site.
- [x] Design and implement custom 404 page with router fallback and homepage link.

---

## Functionality Enhancements (Planned)

- [ ] Implement appointment request system with manual approval flow, including scheduling logic to track availability.
- [ ] Add inline form validation and display for success/error messages.
- [ ] Include a confirmation screen or success state for the contact form.
- [ ] Include "Book Appointment" CTA on 404 fallback.

---

## Design and Layout Refinements

- [ ] Ensure proper horizontal and vertical spacing on all mobile breakpoints, especially in landscape.
- [ ] Confirm hamburger menu positioning remains stable at all screen widths.
- [ ] Review background visuals and subtle accents for performance impact on mobile devices.
- [ ] Replace logo with video animation (non-looping) when asset becomes available.
- [ ] Add dark mode splash screens for mobile (Apple devices) to complement existing light-mode images.
- [ ] Add Framer Motion or subtle animation to the 404 page for elegance.

---

## Technical Improvements

- [ ] Add analytics support (Plausible or Google Analytics recommended).
- [ ] Optimize all media and assets for responsive delivery and performance.
- [x] Suppress React Router v7 warnings via `.codex` and `vite.config.mjs`.
- [ ] Perform accessibility review for keyboard navigation, ARIA, and contrast compliance.
- [ ] Configure automatic sitemap and robots.txt generation.
- [ ] Implement client-side routing fallback for deeper links if needed.
- [x] Update README with testing instructions for Vitest.
- [x] Add `test:run` script for non-watch test execution.

---

## Refactoring and Maintenance

- [ ] Clean up or remove unused component files and CSS remnants.
- [x] Remove unused asset files (vite.svg, favicon-96x96.svg, logo.svg).
- [ ] Normalize all file naming conventions (PascalCase for components, kebab-case for assets).
- [ ] Verify route consistency between navigation and actual pages.
- [ ] Add basic unit test coverage or component smoke tests where applicable.
- [x] Create smoke tests for ScrollToTopButton, PhoneIcon, and CheckIcon.

---

## Codex Implementation Notes

- Codex should generate any required files automatically (e.g., AGENTS.md, metadata, tests).
- Codex should always refine and polish all output unless explicitly told not to.
- Site styling must follow a luxury, high-end, minimalist tone with a dark, charcoal, platinum color scheme.
- All features should be responsive, mobile-first, and standards-compliant using stable packages only.
