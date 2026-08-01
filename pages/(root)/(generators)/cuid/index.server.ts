import { defineHandler, defineHead } from 'void';

import { cuid } from '@/utils/helpers';
import { createSoftwareApplication } from '@/utils/metadata';

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

export const head = defineHead<CuidPageProps>((context) => {
  return createSoftwareApplication(context, {
    title: 'CUID2 Generator — Collision-resistant Unique IDs Online',
    meta: [
      {
        name: 'description',
        content:
          'Generate CUID2s instantly — secure, collision-resistant, URL-safe identifiers for databases and distributed systems. Free and private.',
      },
      {
        property: 'og:title',
        content: 'CUID2 Generator — Collision-resistant Unique IDs Online | uidg',
      },
      {
        property: 'og:description',
        content:
          'Generate CUID2s instantly — secure, collision-resistant, URL-safe identifiers for databases and distributed systems. Free and private.',
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
  });
});
