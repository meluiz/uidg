import { defineHandler, defineHead } from 'void';

import { ulid } from '@/utils/helpers';
import { createSoftwareApplication } from '@/utils/metadata';

export type UlidPageProps = {
  uidg: string;
};

export const loader = defineHandler<UlidPageProps>(async (context) => {
  const { req } = context;

  const time = req.query('time') ?? req.query('t');

  return {
    uidg: ulid({ time: time ? Number(time) : undefined }),
  };
});

export const head = defineHead<UlidPageProps>((context) => {
  return createSoftwareApplication(context, {
    title: 'ULID Generator — Sortable Unique IDs, Free & Online',
    meta: [
      {
        name: 'description',
        content: 'A universally unique, lexicographically sortable identifier.',
      },
      {
        property: 'og:title',
        content: 'ULID Generator — Sortable Unique IDs, Free & Online | uidg',
      },
      {
        property: 'og:description',
        content: 'A universally unique, lexicographically sortable identifier.',
      },
      {
        property: 'og:url',
        content: 'https://uidg.meluiz.com/ulid',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://uidg.meluiz.com/ulid',
      },
    ],
  });
});
