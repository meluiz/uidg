import { defineHead } from 'void';

export const head = defineHead(() => ({
  title: 'This page could not be found',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
}));
