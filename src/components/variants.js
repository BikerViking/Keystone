import { tv } from 'tailwind-variants';

export const inputStyles = tv({
  base: 'w-full rounded border border-platinum bg-deepgray px-3 py-2 text-white placeholder-platinum focus:border-silver focus:outline-none focus:ring-2 focus:ring-silver transition-colors duration-200',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
});

export const navLinkStyles = tv({
  base: 'block rounded border border-transparent bg-deepgray px-3 py-2 text-lg font-medium transition-colors duration-200 hover:bg-charcoal hover:border-silver hover:text-silver hover:shadow focus:outline-none focus:ring focus:ring-silver',
  variants: {
    active: {
      true: 'text-silver shadow-inner',
      false: 'text-platinum',
    },
  },
});
