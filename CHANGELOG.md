# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
- Added mobile notary services section and centered "Book Now" button on Services page.
- Replaced hamburger navigation with full-screen overlay menu.
- Fixed hamburger menu not opening in landscape orientation.

## [1.0.15] - 2025-07-15

### Added

- Reduced-motion variants for key animations to respect user preferences.
- Chat widget now displays a pulsing typing indicator.

## [1.0.14] - 2025-07-14

### Changed

- Reverted bundled Playfair Display font and returned to system fonts for
  improved reliability.

## [1.0.13] - 2025-07-13

### Added

- Mobile navigation slides in from the right with blurred backdrop.

## [1.0.12] - 2025-07-12

### Changed

- Removed fee schedule link from navigation and footer; accessible only via FAQ.
- Updated FAQ rates entry and redesigned price list page.

## [1.0.11] - 2025-07-11

### Changed

- Added accent color and parallax hero animation.
- Refreshed service cards with icons and responsive grid.
- Segmented About content with mission and service area list.
- Modernized fee schedule using responsive cards.
- Improved FAQ accordion with chevron icon and contact link.
- Upgraded 404 page with animated logo and search field.
- Navigation now includes persistent "Book Now" button and scroll shadow.
- Footer features quick links and social placeholders.
- Chat widget shows typing indicator and feedback buttons.
- Credentials list now centered with additional spacing.

### Added

- Accessible "Ask a Notary" chat widget with focus trap, overlay close, and FAQ suggestions.
- Hero section now displays company logo on parchment with responsive sizing.
- Redesigned chat widget with rounded glassy styling and smoother animations.

- Reverted to "Audit and secure code base for HTTPS" patch state.
- Extended decorative underline for section headings and positioned
  NNA badge over the Credentials line.
- Adjusted Credentials underline alignment and enlarged badge for
  consistent appearance.
- Updated dependencies to latest minor versions and fixed MotionSection
  formatting.
- Shifted NNA badge closer to the heading and increased size by 20%.
- Aligned badge center with the decorative underline for cleaner spacing.
- Price list page with full fee schedule accessible at `/prices`.
- FAQ updated with link to the price list.
- Enlarged NNA badge by an additional 12% for improved visibility.- Restored NNA badge enlargement after rollback.
- Ensured NNA badge uses responsive positioning to maintain placement across screen sizes.
- Moved decorative underline to the `header` element so it spans both the heading and badge.
- Shifted badge downward so its center aligns with the underline.
- Enlarged NNA badge by 25% while keeping it centered on the underline.
- Replaced NNA badge image with a 220x220 asset to remove scaling.
- Positioned final-size NNA badge absolutely so it no longer shifts surrounding layout.
- Removed background and padding on Credentials heading and badge, keeping line visible behind both elements.
- Reverted Credentials layout to stable version with 220x220 NNA badge.

### Changed

- Polished hero layout and tagline color for consistent branding.
- Enhanced navigation link transitions and focus visibility.
- Refined chat widget sizing and input focus styling.
- Removed obsolete development TODO comment.
- Added focus rings to CTA buttons and mobile menu trigger for improved keyboard accessibility.
- Hero overlay now uses a rich gradient and includes a scroll-down indicator.
- Service cards gain hover shadows for a tactile feel.
- New skip link improves keyboard navigation across the site.
- CTA buttons animate on hover for better engagement.

## [1.0.2] - YYYY-MM-DD

### Changed

- Standardized full-width containers and centered content.
- Expanded card widths and removed leftover margins.
- Ensured divider lines span each section without gaps.
- Standardized divider styling and color for consistency.

## [1.0.1] - YYYY-MM-DD

### Changed

- Removed NNA badge image and updated credentials list layout.
- Added clickable phone and email links to the footer.

## [1.0.0] - YYYY-MM-DD

### Added

- Initial project setup.
- Core components and layouts.
