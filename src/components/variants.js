import { tv } from 'tailwind-variants';

export const inputStyles = tv({
  base: 'w-full min-h-[2.5rem] rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-lightgray transition-colors duration-200 focus:border-silver focus:outline-none focus:ring-2 focus:ring-silver hover:border-silver',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
});

export const navLinkStyles = tv({
  // Minimal styling keeps links lightweight while providing clear focus states
  base:
    'block rounded px-4 py-2 text-lg font-medium text-lightgray transition-colors duration-200 hover:text-silver focus:outline-none focus:ring focus:ring-silver',
  variants: {
    active: {
      true: 'text-silver underline',
      false: '',
    },
  },
});

// Consistent vertical rhythm for sections across the site
export const sectionSpacing = 'py-16 sm:py-20 md:py-24';
