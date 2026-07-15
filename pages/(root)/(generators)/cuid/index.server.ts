import { defineHandler, defineHead } from 'void';

import { cuid } from '@/utils/helpers';

export type CuidPageProps = {
  uidg: string;
  version: string;
};

export const loader = defineHandler<CuidPageProps>(async (context) => {
  const { req } = context;

  const length = req.query('length') ?? req.query('len') ?? req.query('l');

  return {
    version: cuid.version.normalize(),
    uidg: cuid({ length: length ? Number(length) : undefined }),
  };
});

export const head = defineHead<CuidPageProps>(() => ({
  title: 'Collision-resistant Unique Identifier',
  meta: [
    {
      name: 'description',
      content:
        'Generate CUIDs instantly — secure, sortable, URL-safe identifiers for databases and distributed systems.',
    },
    {
      property: 'og:title',
      content: 'Collision-resistant Unique Identifier | uidg',
    },
    {
      name: 'og:description',
      content:
        'Generate CUIDs instantly — secure, sortable, URL-safe identifiers for databases and distributed systems.',
    },
    {
      property: 'og:url',
      content: 'https://uidg.meluiz.com/cuid',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://uidg.meluiz.com/cuid',
    },
  ],
}));
