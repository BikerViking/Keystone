import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SEO from '../components/SEO';

it('updates head tags for a page', () => {
  render(
    <MemoryRouter initialEntries={['/test']}>
      <SEO title="Test Title" description="desc" path="/test" />
    </MemoryRouter>
  );
  expect(document.title).toBe('Test Title');
  const canonical = document.head.querySelector('link[rel="canonical"]');
  expect(canonical).toHaveAttribute('href', 'https://www.keystonenotarygroup.com/test');
  const metaDesc = document.head.querySelector('meta[name="description"]');
  expect(metaDesc).toHaveAttribute('content', 'desc');
  const og = document.head.querySelector('meta[property="og:title"]');
  expect(og).toHaveAttribute('content', 'Test Title');
  const scripts = Array.from(document.head.querySelectorAll('script[type="application/ld+json"]'));
  const hasWebPage = scripts.some((s) => JSON.parse(s.textContent || '{}')['@type'] === 'WebPage');
  const hasBreadcrumb = scripts.some((s) => JSON.parse(s.textContent || '{}')['@type'] === 'BreadcrumbList');
  expect(hasWebPage).toBe(true);
  expect(hasBreadcrumb).toBe(true);
});
