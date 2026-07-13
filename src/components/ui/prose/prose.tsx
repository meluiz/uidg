import type { HTMLArkProps } from '@ark-ui/react';
import type { VariantProps } from 'tailwind-variants';

import { ark } from '@ark-ui/react';

import { heading, text } from './prose.styles';

/* --------------------------------------------------------------------------------
 * Prose - Heading
 * -------------------------------------------------------------------------------- */

export type HeadingProps = HeadingBaseProps & HTMLArkProps<'h1'>;
export type HeadingBaseProps = VariantProps<typeof heading>;

export const Heading = (props: HeadingProps) => {
  const { align, className, size, weight, ...rest } = props;
  return <ark.h1 className={heading({ align, className, size, weight })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Prose - Text
 * -------------------------------------------------------------------------------- */

export type TextProps = TextBaseProps & HTMLArkProps<'p'>;
export type TextBaseProps = VariantProps<typeof text>;

export const Text = (props: TextProps) => {
  const { align, className, size, weight, ...rest } = props;
  return <ark.p className={text({ align, className, size, weight })} {...rest} />;
};
