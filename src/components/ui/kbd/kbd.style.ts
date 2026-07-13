import { tv } from 'tailwind-variants';

export const root = tv({
  base: [
    "pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-sm bg-surface-muted px-1 font-medium font-mono text-foreground-muted text-xs [&_svg:not([class*='size-'])]:size-3]",
  ],
});

export const group = tv({
  base: 'inline-flex items-center gap-x-1',
});
