import { ToggleGroup } from '@ark-ui/react';
import {
  IconMonitorOutline12,
  IconMoonStarsOutline12,
  IconSunOutline12,
} from 'nucleo-ui-outline-12';
import { match } from 'ts-pattern';

import { Button } from '@/components/ui';

import { useThemeSwitcher } from './hooks';

export type ThemeSwitcherProps = {
  size?: Button.RootBaseProps['size'];
};

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { size = 'xsmall' } = props;

  const { value, options, onValueChange } = useThemeSwitcher();

  return (
    <ToggleGroup.Root
      className="isolate flex w-fit gap-x-px overflow-hidden rounded-full border border-surface-input disabled:opacity-50"
      value={[value]}
      aria-label="Select a display theme"
      deselectable={false}
      multiple={false}
      onValueChange={onValueChange}
    >
      {options.map((theme) => (
        <ToggleGroup.Item key={`theme-switcher:${theme}:item`} value={theme} asChild>
          <Button.Root
            className="rounded-full opacity-64 ring ring-transparent duration-0 checked:pointer-events-none checked:opacity-100 checked:ring-surface-input hover:opacity-72"
            size={size}
            ghost
            compact
            aria-label={theme}
          >
            {match(theme)
              .with('system', () => <IconMonitorOutline12 />)
              .with('light', () => <IconSunOutline12 />)
              .with('dark', () => <IconMoonStarsOutline12 />)
              .exhaustive()}
          </Button.Root>
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
};
