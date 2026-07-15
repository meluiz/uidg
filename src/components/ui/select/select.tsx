import type { VariantProps } from 'tailwind-variants';

import { type CollectionItem, type HTMLArkProps, Select } from '@ark-ui/react';

import {
  clearTrigger,
  content,
  control,
  indicator,
  item,
  itemGroup,
  itemGroupLabel,
  itemIndicator,
  itemText,
  label,
  root,
  trigger,
  valueText,
} from './select.styles';

/* --------------------------------------------------------------------------------
 * Select - RootProvider
 * -------------------------------------------------------------------------------- */

export type RootProviderProps<T extends CollectionItem> = RootProviderBaseProps<T> &
  HTMLArkProps<'div'>;
export type RootProviderBaseProps<T extends CollectionItem> = Select.RootProviderBaseProps<T> &
  VariantProps<typeof root>;

export const RootProvider = <T extends CollectionItem>(props: RootProviderProps<T>) => {
  const { className, ...rest } = props;
  return <Select.RootProvider className={root({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - Root
 * -------------------------------------------------------------------------------- */

export type RootProps<T extends CollectionItem> = RootBaseProps<T> & HTMLArkProps<'div'>;
export type RootBaseProps<T extends CollectionItem> = Select.RootBaseProps<T> &
  VariantProps<typeof root>;

export const Root = <T extends CollectionItem>(props: RootProps<T>) => {
  const { className, ...rest } = props;
  return <Select.Root className={root({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - Label
 * -------------------------------------------------------------------------------- */

export type LabelProps = LabelBaseProps & HTMLArkProps<'label'>;
export type LabelBaseProps = Select.LabelBaseProps & VariantProps<typeof label>;

export const Label = (props: LabelProps) => {
  const { className, ...rest } = props;
  return <Select.Label className={label({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - Control
 * -------------------------------------------------------------------------------- */

export type ControlProps = ControlBaseProps & HTMLArkProps<'div'>;
export type ControlBaseProps = Select.ControlBaseProps & VariantProps<typeof control>;

export const Control = (props: ControlProps) => {
  const { className, size, ...rest } = props;
  return <Select.Control className={control({ className, size })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - Trigger
 * -------------------------------------------------------------------------------- */

export type TriggerProps = TriggerBaseProps & HTMLArkProps<'button'>;
export type TriggerBaseProps = Select.TriggerBaseProps & VariantProps<typeof trigger>;

export const Trigger = (props: TriggerProps) => {
  const { className, ...rest } = props;
  return <Select.Trigger className={trigger({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - ValueText
 * -------------------------------------------------------------------------------- */

export type ValueTextProps = ValueTextBaseProps & HTMLArkProps<'span'>;
export type ValueTextBaseProps = Select.ValueTextBaseProps & VariantProps<typeof valueText>;

export const ValueText = (props: ValueTextProps) => {
  const { className, ...rest } = props;
  return <Select.ValueText className={valueText({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - Indicator
 * -------------------------------------------------------------------------------- */

export type IndicatorProps = IndicatorBaseProps & HTMLArkProps<'div'>;
export type IndicatorBaseProps = Select.IndicatorBaseProps & VariantProps<typeof indicator>;

export const Indicator = (props: IndicatorProps) => {
  const { className, ...rest } = props;
  return <Select.Indicator className={indicator({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - ClearTrigger
 * -------------------------------------------------------------------------------- */

export type ClearTriggerProps = ClearTriggerBaseProps & HTMLArkProps<'button'>;
export type ClearTriggerBaseProps = Select.ClearTriggerBaseProps &
  VariantProps<typeof clearTrigger>;

export const ClearTrigger = (props: ClearTriggerProps) => {
  const { className, ...rest } = props;
  return <Select.ClearTrigger className={clearTrigger({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - Content
 * -------------------------------------------------------------------------------- */

export type ContentProps = ContentBaseProps & HTMLArkProps<'span'>;
export type ContentBaseProps = Select.ContentBaseProps & VariantProps<typeof content>;

export const Content = (props: ContentProps) => {
  const { className, ...rest } = props;
  return <Select.Content className={content({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - Item
 * -------------------------------------------------------------------------------- */

export type ItemProps = ItemBaseProps & HTMLArkProps<'div'>;
export type ItemBaseProps = Select.ItemBaseProps & VariantProps<typeof item>;

export const Item = (props: ItemProps) => {
  const { className, ...rest } = props;
  return <Select.Item className={item({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - ItemText
 * -------------------------------------------------------------------------------- */

export type ItemTextProps = ItemTextBaseProps & HTMLArkProps<'div'>;
export type ItemTextBaseProps = Select.ItemTextBaseProps & VariantProps<typeof itemText>;

export const ItemText = (props: ItemTextProps) => {
  const { className, ...rest } = props;
  return <Select.ItemText className={itemText({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - ItemIndicator
 * -------------------------------------------------------------------------------- */

export type ItemIndicatorProps = ItemIndicatorBaseProps & HTMLArkProps<'div'>;
export type ItemIndicatorBaseProps = Select.ItemIndicatorBaseProps &
  VariantProps<typeof itemIndicator>;

export const ItemIndicator = (props: ItemIndicatorProps) => {
  const { className, ...rest } = props;
  return <Select.ItemIndicator className={itemIndicator({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - ItemGroup
 * -------------------------------------------------------------------------------- */

export type ItemGroupProps = ItemGroupBaseProps & HTMLArkProps<'span'>;
export type ItemGroupBaseProps = Select.ItemGroupBaseProps & VariantProps<typeof itemGroup>;

export const ItemGroup = (props: ContentProps) => {
  const { className, ...rest } = props;
  return <Select.ItemGroup className={itemGroup({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - ItemGroupLabel
 * -------------------------------------------------------------------------------- */

export type ItemGroupLabelProps = ItemGroupLabelBaseProps & HTMLArkProps<'div'>;
export type ItemGroupLabelBaseProps = Select.ItemGroupLabelBaseProps &
  VariantProps<typeof itemGroupLabel>;

export const ItemGroupLabel = (props: ContentProps) => {
  const { className, ...rest } = props;
  return <Select.ItemGroupLabel className={itemGroupLabel({ className })} {...rest} />;
};

/* --------------------------------------------------------------------------------
 * Select - Exports
 * -------------------------------------------------------------------------------- */

export type PositionerProps = Select.PositionerProps;
export type PositionerBaseProps = Select.PositionerBaseProps;
export const Positioner = Select.Positioner;

export type HiddenSelectProps = Select.HiddenSelectProps;
export type HiddenSelectBaseProps = Select.HiddenSelectBaseProps;
export const HiddenSelect = Select.HiddenSelect;

export type ContextProps<T extends CollectionItem> = Select.ContextProps<T>;
export const Context = Select.Context;

export type {
  UseSelectContext,
  UseSelectItemContext,
  UseSelectProps,
  UseSelectReturn,
  useSelect,
  useSelectContext,
  useSelectItemContext,
} from '@ark-ui/react';
