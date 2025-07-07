import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Updates document head metadata for SEO and social sharing.
 * Also injects WebPage and BreadcrumbList JSON-LD structured data.
 */
export default function SEO({ title, description, path = '' }) {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = 'https://www.keystonenotarygroup.com';
    const url = baseUrl + (path || location.pathname);
    const image = `${baseUrl}/logo.svg`;

    const upsertMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(property ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const upsertLink = (rel, href) => {
      let tag = document.head.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', href);
    };

    document.title = title;
    upsertMeta('description', description);
    upsertMeta('og:title', title, true);
    upsertMeta('og:description', description, true);
    upsertMeta('og:type', 'website', true);
    upsertMeta('og:url', url, true);
    upsertMeta('og:image', image, true);
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:image', image);
    upsertLink('canonical', url);

    const pageData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      url,
      isPartOf: { '@id': baseUrl + '/#website' },
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: title, item: url },
      ],
    };

    const scripts = [pageData, breadcrumb].map((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((s) => document.head.removeChild(s));
    };
  }, [title, description, path, location.pathname]);

  return null;
}
