import { tv } from 'tailwind-variants';

const extend = tv({
  defaultVariants: {
    size: 'xl',
    weight: 'normal',
  },
  variants: {
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      black: 'font-black',
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
  },
});

export const heading = tv({
  extend,
  base: 'block font-mono text-balance text-foreground',
  defaultVariants: {
    size: '2xlarge',
    weight: 'bold',
  },
  variants: {
    size: {
      base: 'text-sm md:text-base',
      large: 'text-base md:text-lg',
      xlarge: 'text-lg md:text-xl',
      '2xlarge': 'text-xl md:text-2xl',
      '3xlarge': 'text-2xl md:text-3xl',
      '4xlarge': 'text-3xl md:text-4xl',
      '5xlarge': 'text-5xl md:text-5xl',
      '6xlarge': 'text-5xl md:text-6xl',
      '7xlarge': 'text-6xl md:text-7xl',
      '8xlarge': 'text-7xl md:text-8xl',
      '9xlarge': 'text-8xl md:text-9xl',
    },
  },
});

export const text = tv({
  extend,
  base: [
    '*:[a]:underline *:[a]:text-foreground *:[strong]:font-medium *:[strong]:text-foreground',
    'text-pretty text-foreground-muted',
  ],
  defaultVariants: {
    size: 'base',
    weight: 'normal',
  },
  variants: {
    size: {
      xsmall: 'text-xs',
      small: 'text-xs md:text-sm',
      base: 'text-sm md:text-base',
      large: 'text-base md:text-lg',
      xlarge: 'text-lg md:text-xl',
    },
  },
});
