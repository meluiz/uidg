import { defineHandler, defineHead } from 'void';

export const loader = defineHandler((c) => {
  c.set('notFound', true);
  return {};
});

export const head = defineHead(() => ({
  title: 'This page could not be found',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
}));
