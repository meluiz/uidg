import { tv } from 'tailwind-variants';

export const root = tv({
  base: ['flex flex-col items-start gap-2'],
});

export const label = tv({
  base: [
    'inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4',
  ],
});

export const control = tv({
  base: [
    'relative inline-flex w-full rounded-lg border border-input bg-surface not-dark:bg-clip-padding text-base text-foreground shadow-xs/5 ring-stroke-ring/24 transition-shadow has-focus-visible:has-aria-invalid:border-surface-destructive/64 has-focus-visible:has-aria-invalid:ring-surface-destructive/16 has-aria-invalid:border-surface-destructive/36 has-focus-visible:border-stroke-ring has-autofill:bg-foreground/4 has-disabled:opacity-64 has-[:disabled,:focus-visible,[aria-invalid]]:shadow-none has-focus-visible:ring-[3px] sm:text-sm dark:bg-surface-input/32 dark:has-autofill:bg-foreground/8 dark:has-aria-invalid:ring-surface-destructive/24 dark:not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]',
    'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)]',
  ],
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      xsmall: [
        '*:data-[part=trigger]:h-7 *:data-[part=trigger]:px-[calc(--spacing(2.5)-1px)] *:data-[part=trigger]:leading-7 sm:*:data-[part=trigger]:h-6 sm:*:data-[part=trigger]:leading-6',
      ],
      small: [
        '*:data-[part=trigger]:h-7.5 *:data-[part=trigger]:px-[calc(--spacing(2.5)-1px)] *:data-[part=trigger]:leading-7.5 sm:*:data-[part=trigger]:h-6.5 sm:*:data-[part=trigger]:leading-6.5',
      ],
      medium: [
        '*:data-[part=trigger]:h-8.5 *:data-[part=trigger]:leading-8.5 sm:*:data-[part=trigger]:h-7.5 sm:*:data-[part=trigger]:leading-7.5',
      ],
      large: [
        '*:data-[part=trigger]:h-9.5 *:data-[part=trigger]:leading-9.5 sm:*:data-[part=trigger]:h-8.5 sm:*:data-[part=trigger]:leading-8.5',
      ],
    },
  },
});

export const trigger = tv({
  base: [
    'w-full min-w-0 inline-flex rounded-inherit px-[calc(--spacing(3)-1px)] outline-hidden [transition:background-color_5000000s_ease-in-out_0s] text-left',
  ],
});

export const valueText = tv({
  base: ['flex-1 truncate in-placeholder-shown:text-foreground-muted/72'],
});

export const indicator = tv({
  base: [
    'flex items-center justify-center',
    '*:[svg]:-me-1 *:[svg]:size-3.5 *:[svg]:opacity-80 sm:*:[svg]:size-3',
  ],
  defaultVariants: {
    animate: false,
  },
  variants: {
    animate: {
      true: [
        'in-open:*:[svg]:rotate-180 *:[svg]:duration-200 *:[svg]:ease-out-quint motion-safe:*:[svg]:transition-transform',
      ],
    },
  },
});

export const clearTrigger = tv({
  base: [
    'flex items-center justify-center',
    '*:[svg]:-me-1 *:[svg]:size-3.5 *:[svg]:opacity-80 sm:*:[svg]:size-3',
  ],
});

export const positioner = tv({
  base: ['z-10'],
});

export const content = tv({
  base: [
    'flex flex-col origin-(--transform-origin) text-foreground relative h-full max-h-(--available-height) overflow-y-auto p-1 min-w-(--anchor-width) rounded-lg border bg-surface-popover not-dark:bg-clip-padding shadow-lg/5',
    'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
    'ease-out-quint open:animate-in open:fade-in-0 open:duration-200 closed:animate-out closed:fade-out-0 closed:duration-150 motion-safe:open:zoom-in-95 motion-safe:closed:zoom-out-95',
  ],
});

export const item = tv({
  base: [
    'grid min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1 ps-2 pe-4 text-base outline-hidden disabled:pointer-events-none data-highlighted:bg-surface-accent data-highlighted:text-foreground-accent disabled:opacity-64 sm:min-h-7 sm:text-sm',
    "*:[svg:not([class*='size-'])]:size-3.5 sm:*:[svg:not([class*='size-'])]:size-3 *:[svg]:pointer-events-none *:[svg]:shrink-0",
  ],
});

export const itemText = tv({
  base: ['col-start-2 min-w-0 '],
});

export const itemIndicator = tv({
  base: ['col-start-1'],
});

export const itemGroup = tv({
  base: ['select-group'],
});

export const itemGroupLabel = tv({
  base: ['px-2 py-1.5 font-medium text-foreground-muted text-xs'],
});
