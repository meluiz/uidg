import type { HTMLArkProps } from '@ark-ui/react';
import type { VariantProps } from 'tailwind-variants';

import { ark } from '@ark-ui/react';

import { group, root } from './kbd.style';

/* --------------------------------------------------------------------------------
 * Kbd - Root
 * -------------------------------------------------------------------------------- */

export type RootProps = RootBaseProps & HTMLArkProps<'kbd'>;
export type RootBaseProps = VariantProps<typeof root>;

export const Root = (props: RootProps) => {
  const { className, ...rest } = props;
  return <ark.kbd className={root({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Kbd - Group
 * -------------------------------------------------------------------------------- */

export type GroupProps = GroupBaseProps & HTMLArkProps<'kbd'>;
export type GroupBaseProps = VariantProps<typeof group>;

export const Group = (props: GroupProps) => {
  const { className, ...rest } = props;
  return <ark.kbd className={group({ className })} {...rest} />;
};
