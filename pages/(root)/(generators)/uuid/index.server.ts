import { defineHandler, defineHead } from 'void';

import { uuid } from '@/utils/helpers';
import { createSoftwareApplication } from '@/utils/metadata';

export type UuidPageProps = {
  uidg: string;
  version: string;
};

export const loader = defineHandler<UuidPageProps>(async (context) => {
  const { req } = context;

  const version = uuid.version.normalize(req.query('v') ?? req.query('version'));

  const uidg = uuid({
    version: req.query('v') ?? req.query('version'),
    name: req.query('name') ?? '',
    namespace: req.query('namespace') ?? undefined,
  });

  return { uidg, version };
});

export const head = defineHead<UuidPageProps>((context) => {
  return createSoftwareApplication(context, {
    title: 'UUID Generator — Random UUID v1, v3, v4, v5, v6 & v7 Online',
    meta: [
      {
        name: 'description',
        content:
          'Generate random UUID identifiers instantly in your browser. RFC 9562 compliant, free, and private.',
      },
      {
        property: 'og:title',
        content: 'UUID Generator — Random UUID v1, v3, v4, v5, v6 & v7 Online',
      },
      {
        name: 'og:description',
        content:
          'Generate random UUID identifiers instantly in your browser. RFC 9562 compliant, free, and private.',
      },
      {
        property: 'og:url',
        content: 'https://uidg.meluiz.com/uuid',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://uidg.meluiz.com/uuid',
      },
    ],
  });
});
