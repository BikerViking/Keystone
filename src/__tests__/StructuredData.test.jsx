import { render } from '@testing-library/react';
import StructuredData from '../components/StructuredData';

// Ensure JSON-LD script is added to document head
it('inserts local business structured data', () => {
  const { unmount } = render(<StructuredData />);
  const script = document.head.querySelector('script[type="application/ld+json"]');
  expect(script).toBeTruthy();
  if (script) {
    const data = JSON.parse(script.textContent || '{}');
    expect(data['@type']).toBe('LocalBusiness');
    // Ensure the correct phone number is rendered
    expect(data.telephone).toBe('(267) 309-9000');
  }
  unmount();
  expect(document.head.querySelector('script[type="application/ld+json"]')).toBeNull();
});
