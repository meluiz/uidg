export type NavigationItem = {
  label: string;
  href: string;
  shortcut: string;
};

export const navigation: NavigationItem[] = [
  {
    label: 'uuid',
    shortcut: 'u',
    href: '/uuid',
  },
  {
    label: 'cuid',
    shortcut: 'c',
    href: '/cuid',
  },
];
