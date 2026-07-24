import type { VariantProps } from 'tailwind-variants';

import { ark, type HTMLArkProps } from '@ark-ui/react';
import { Link as VoidLink } from '@void/react';

import { ellipsis, item, link, list, page, root, separator } from './breadcrumb.styles';

/* --------------------------------------------------------------------------------
 * Breadcrumb - Root
 * -------------------------------------------------------------------------------- */

export type RootProps = RootBaseProps & HTMLArkProps<'nav'>;
export type RootBaseProps = VariantProps<typeof root>;

export const Root = (props: RootProps) => {
  const { className, ...rest } = props;
  return <ark.nav aria-label="breadcrumb" className={root({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Breadcrumb - List
 * -------------------------------------------------------------------------------- */

export type ListProps = ListBaseProps & HTMLArkProps<'ol'>;
export type ListBaseProps = VariantProps<typeof list>;

export const List = (props: ListProps) => {
  const { className, ...rest } = props;
  return <ark.ol className={list({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Breadcrumb - Item
 * -------------------------------------------------------------------------------- */

export type ItemProps = ItemBaseProps & HTMLArkProps<'li'>;
export type ItemBaseProps = VariantProps<typeof item>;

export const Item = (props: ItemProps) => {
  const { className, ...rest } = props;
  return <ark.li className={item({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Breadcrumb - Link
 * -------------------------------------------------------------------------------- */

export type LinkProps = LinkBaseProps & React.ComponentProps<typeof VoidLink>;
export type LinkBaseProps = VariantProps<typeof link>;

export const Link = (props: LinkProps) => {
  const { className, ...rest } = props;
  return <VoidLink className={link({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Breadcrumb - Page
 * -------------------------------------------------------------------------------- */

export type PageProps = PageBaseProps & HTMLArkProps<'span'>;
export type PageBaseProps = VariantProps<typeof page>;

export const Page = (props: PageProps) => {
  const { className, ...rest } = props;
  return <ark.span aria-current="page" className={page({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Breadcrumb - Separator
 * -------------------------------------------------------------------------------- */

export type SeparatorProps = SeparatorBaseProps & HTMLArkProps<'li'>;
export type SeparatorBaseProps = VariantProps<typeof separator>;

export const Separator = (props: SeparatorProps) => {
  const { className, ...rest } = props;

  return (
    <ark.li
      aria-hidden="true"
      className={separator({ className })}
      role="presentation"
      {...rest}
    />
  );
};

/* --------------------------------------------------------------------------------
 * Breadcrumb - Ellipsis
 * -------------------------------------------------------------------------------- */

export type EllipsisProps = EllipsisBaseProps & HTMLArkProps<'li'>;
export type EllipsisBaseProps = VariantProps<typeof ellipsis>;

export const Ellipsis = (props: EllipsisProps) => {
  const { className, ...rest } = props;

  return (
    <ark.li
      aria-hidden="true"
      className={ellipsis({ className })}
      role="presentation"
      {...rest}
    />
  );
};
