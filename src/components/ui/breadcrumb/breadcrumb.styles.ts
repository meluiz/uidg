import { tv } from 'tailwind-variants';

export const root = tv({
  base: [],
});

export const list = tv({
  base: [
    'flex flex-wrap items-center gap-1.5 wrap-break-word text-base text-foreground-muted sm:gap-2 sm:text-sm',
  ],
});

export const item = tv({
  base: ['inline-flex items-center gap-1.5'],
});

export const link = tv({
  base: ['transition-colors hover:text-foreground'],
});

export const page = tv({
  base: ['font-normal text-foreground'],
});

export const separator = tv({
  base: [
    'flex items-center opacity-80',
    "*:[svg:not([class*='size-'])]:size-3.5 sm:*:[svg:not([class*='size-'])]:size-3 *:[svg]:pointer-events-none *:[svg]:shrink-0",
  ],
});

export const ellipsis = tv({
  base: [
    'flex items-center opacity-80',
    "*:[svg:not([class*='size-'])]:size-4.5 sm:*:[svg:not([class*='size-'])]:size-4 *:[svg]:pointer-events-none *:[svg]:shrink-0",
  ],
});
