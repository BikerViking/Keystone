import { useEffect } from 'react';

/**
 * Inserts JSON-LD structured data for search engines.
 * This runs client-side only and cleans up on unmount.
 */
export default function StructuredData() {
  useEffect(() => {
    const baseUrl = 'https://www.keystonenotarygroup.com';
    const data = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${baseUrl}/#organization`,
          name: 'Keystone Notary Group, LLC',
          url: baseUrl,
          logo: `${baseUrl}/logo.svg`,
          telephone: '(267) 309-9000',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Philadelphia',
            addressRegion: 'PA',
            addressCountry: 'US',
          },
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${baseUrl}/#business`,
          name: 'Keystone Notary Group, LLC',
          url: baseUrl,
          image: `${baseUrl}/logo.svg`,
          telephone: '(267) 309-9000',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Philadelphia',
            addressRegion: 'PA',
            addressCountry: 'US',
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          url: baseUrl,
          name: 'Keystone Notary Group, LLC',
          publisher: { '@id': `${baseUrl}/#organization` },
        },
      ],
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
