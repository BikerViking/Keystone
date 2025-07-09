import { render } from '@testing-library/react';
import StructuredData from '../components/StructuredData';

describe('StructuredData component', () => {
  // Ensure JSON-LD script is added to document head
  test('inserts organization and business structured data', () => {
    const { unmount } = render(<StructuredData />);
    const script = document.head.querySelector('script[type="application/ld+json"]');
    expect(script).toBeTruthy();
    if (script) {
      const data = JSON.parse(script.textContent || '{}');
      expect(Array.isArray(data['@graph'])).toBe(true);
      const org = data['@graph'].find((d) => d['@type'] === 'Organization');
      const business = data['@graph'].find((d) => d['@type'] === 'LocalBusiness');
      expect(org).toBeTruthy();
      expect(business.telephone).toBe('(267) 309-9000');
    }
    unmount();
    expect(document.head.querySelector('script[type="application/ld+json"]')).toBeNull();
  });

  test('does not duplicate scripts on re-render', () => {
    const { rerender } = render(<StructuredData />);
    rerender(<StructuredData />);
    const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');
    expect(scripts.length).toBe(1);
  });
});
