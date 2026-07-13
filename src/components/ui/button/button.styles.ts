import { tv } from 'tailwind-variants';

export const root = tv({
  base: [
    'relative inline-flex isolate items-center justify-center gap-x-2 whitespace-nowrap border cursor-pointer shrink-0 grow-0 rounded-md text-base font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-stroke-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 sm:text-sm',
    'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-md)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11',
    "**:[svg]:-mx-0.5 **:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg:not([class*='opacity-'])]:opacity-80 **:[svg]:size-4.5 sm:**:[svg]:size-4",
  ],
  defaultVariants: {
    size: 'medium',
    soft: false,
    ghost: false,
    link: false,
    outline: false,
    warning: false,
    destructive: false,
  },
  variants: {
    size: {
      xsmall: [
        'h-7 sm:h-6 gap-1 rounded-md px-[calc(--spacing(2)-1px)] text-sm sm:text-xs',
        'before:rounded-[calc(var(--radius-md)-1px)]',
        '**:[svg]:size-4 sm:**:[svg]:size-3.5',
      ],
      small: 'h-8 sm:h-7 gap-1.5 px-[calc(--spacing(2.5)-1px)]',
      medium: 'h-9 sm:h-8 px-[calc(--spacing(3)-1px)]',
      large: 'h-10 sm:h-9 px-[calc(--spacing(3.5)-1px)]',
      xlarge: [
        'h-11 sm:h-10 px-[calc(--spacing(4)-1px)] text-lg sm:text-base',
        '**:[svg]:size-5 sm:**:[svg]:size-4.5',
      ],
    },
    compact: {
      true: '',
    },
    soft: {
      true: 'border-transparent bg-surface-secondary text-foreground-secondary active:bg-surface-secondary/80 hover:bg-surface-secondary/90',
    },
    ghost: {
      true: 'border-transparent text-foreground hover:bg-surface-accent active:bg-surface-accent checked:bg-surface-accent',
    },
    link: {
      true: 'border-transparent underline-offset-4 hover:underline active:underline',
    },
    outline: {
      true: [
        'border-surface-input bg-surface-popover hover:bg-surface-accent/50 active:bg-surface-accent/50 dark:bg-surface-input/32 dark:hover:bg-surface-input/64 dark:active:bg-surface-input/64 not-dark:bg-clip-padding text-foreground shadow-xs/5 active:shadow-none disabled:shadow-none',
        'not-disabled:not-active:before:shadow-[0_1px_--theme(--color-black/4%)] dark:not-disabled:before:shadow-[0_-1px_--theme(--color-white/2%)] dark:not-disabled:not-active:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      ],
    },
    warning: {
      true: [
        'border-surface-input hover:border-surface-destructive/32 active:border-surface-destructive/32 bg-surface-popover dark:bg-surface-input/32 hover:bg-surface-destructive/4 active:bg-surface-destructive/4 not-dark:bg-clip-padding text-foreground-destructive shadow-xs/5 active:shadow-none disabled:shadow-none',
        'not-disabled:not-active:before:shadow-[0_1px_--theme(--color-black/4%)] dark:not-disabled:before:shadow-[0_-1px_--theme(--color-white/2%)] dark:not-disabled:not-active:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      ],
    },
    destructive: {
      true: [
        'not-disabled:inset-shadow-[0_1px_--theme(--color-white/16%)] border-surface-destructive bg-surface-destructive hover:bg-surface-destructive/90 active:bg-surface-destructive/90 text-white shadow-surface-destructive/24 shadow-xs active:inset-shadow-[0_1px_--theme(--color-black/8%)] active:shadow-none disabled:shadow-none',
      ],
    },
  },
  compoundVariants: [
    {
      soft: false,
      ghost: false,
      link: false,
      outline: false,
      warning: false,
      destructive: false,
      className:
        'not-disabled:inset-shadow-[0_1px_--theme(--color-white/16%)] border-surface-primary bg-surface-primary text-foreground-primary shadow-surface-primary/24 shadow-xs active:inset-shadow-[0_1px_--theme(--color-black/8%)] active:shadow-none disabled:shadow-none hover:bg-surface-primary/90',
    },
    {
      compact: true,
      size: 'xsmall',
      className: 'size-7 sm:size-6',
    },
    {
      compact: true,
      size: 'small',
      className: 'size-8 sm:size-7',
    },
    {
      compact: true,
      size: 'medium',
      className: 'size-9 sm:size-8',
    },
    {
      compact: true,
      size: 'large',
      className: ['size-11 sm:size-10', '**:[svg]:size-5 sm:**:[svg]:size-4.5'],
    },
    {
      compact: true,
      size: 'xlarge',
      className: ['size-11 sm:size-10', '**:[svg]:size-5 sm:**:[svg]:size-4.5'],
    },
  ],
});

export const label = tv({
  base: 'truncate',
});
