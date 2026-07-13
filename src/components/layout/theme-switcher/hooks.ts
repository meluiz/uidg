import type { ToggleGroup } from '@ark-ui/react';

import { useShared } from '@void/react';
import Cookies from 'js-cookie';
import React from 'react';

import { type ResolvedTheme, THEME_COOKIE, THEME_OPTIONS, type Theme } from '@/utils/theme';

const isValidTheme = (value: string): value is Theme => {
  return (THEME_OPTIONS as readonly string[]).includes(value);
};

const getSystemTheme = (): ResolvedTheme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (resolved: ResolvedTheme) => {
  const doc = document.documentElement;

  doc.classList.remove('dark', 'light');
  doc.classList.add(resolved);

  doc.style.colorScheme = resolved;
};

export const useThemeSwitcher = () => {
  const { theme } = useShared();

  const [value, setValue] = React.useState<Theme>(theme.value);

  const onValueChange = (details: ToggleGroup.ValueChangeDetails) => {
    const [next] = details.value;

    if (!next || !isValidTheme(next)) {
      return;
    }

    setValue(next);
    applyTheme(next === 'system' ? getSystemTheme() : next);

    if (next === 'system') {
      Cookies.remove(THEME_COOKIE, { path: '/' });
    } else {
      Cookies.set(THEME_COOKIE, next, {
        expires: 365,
        path: '/',
        sameSite: 'Lax',
      });
    }
  };

  React.useEffect(() => {
    if (value !== 'system') {
      return;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const sync = () => {
      applyTheme(media.matches ? 'dark' : 'light');
    };

    media.addEventListener('change', sync);

    sync();
    return () => {
      media.removeEventListener('change', sync);
    };
  }, [value]);

  return {
    value,
    onValueChange,
    options: theme.options,
  };
};
