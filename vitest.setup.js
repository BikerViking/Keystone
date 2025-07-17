import '@testing-library/jest-dom';
import { expect } from 'vitest';

expect.extend({});

class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = window.IntersectionObserver || IntersectionObserver;

