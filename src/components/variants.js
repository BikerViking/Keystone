import { tv } from 'tailwind-variants';

export const inputStyles = tv({
  base: 'w-full rounded border border-platinum bg-offwhite px-3 py-2 text-charcoal placeholder-platinum focus:border-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal transition-colors duration-200',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
});

export const navLinkStyles = tv({
  // Minimal styling keeps links lightweight while providing clear focus states
  base:
    'block rounded px-4 py-2 text-lg font-medium text-charcoal transition-colors duration-200 hover:text-accentDark focus:outline-none focus:ring focus:ring-silver',
  variants: {
    active: {
      true: 'underline text-accentDark',
      false: '',
    },
  },
});
