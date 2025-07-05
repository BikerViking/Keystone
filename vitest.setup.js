import '@testing-library/jest-dom';

// Polyfill IntersectionObserver used by framer-motion
class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = window.IntersectionObserver || IntersectionObserver;
