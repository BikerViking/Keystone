import { useEffect } from 'react';

/**
 * Inserts JSON-LD structured data for search engines.
 * This runs client-side only and cleans up on unmount.
 */
export default function StructuredData() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Keystone Notary Group, LLC",
      url: "https://www.keystonenotarygroup.com",
      // Keystone's public business line
      telephone: "(267) 309-9000",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Philadelphia",
        addressRegion: "PA",
        addressCountry: "US",
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
