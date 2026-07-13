import z from 'zod';

export type Theme = z.infer<typeof ThemeScheme>;
export type ResolvedTheme = z.infer<typeof ResolvedScheme>;

export type ThemeState = {
  value: Theme;
  options: readonly Theme[];
  system: ResolvedTheme;
  resolved: ResolvedTheme;
};

export const ThemeEnum = z.enum(['system', 'light', 'dark']);
export const ResolvedEnum = z.enum(['dark', 'light']);

export const ThemeScheme = ThemeEnum.catch('system');
export const ResolvedScheme = ResolvedEnum.catch('light');

export const THEME_COOKIE = 'ch-prefers-color-scheme';
export const THEME_OPTIONS = ThemeEnum.options;

export const CLIENT_HINT = 'sec-ch-prefers-color-scheme';
export const CLIENT_HINT_RESPONSE = 'Sec-CH-Prefers-Color-Scheme';

export const resolveTheme = (cookie: string | undefined, clientHint: string | undefined) => {
  const value = ThemeScheme.parse(cookie);
  const system = ResolvedScheme.parse(clientHint);

  return {
    value,
    system,
    options: ThemeEnum.options,
    resolved: value === 'system' ? system : value,
  };
};
