import { defineHandler, defineHead } from 'void';

import { uuid } from '@/utils/helpers';

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

export const head = defineHead<UuidPageProps>(() => ({
  title: 'Universally Unique Identifier',
  meta: [
    {
      name: 'description',
      content:
        'Generate random UUID identifiers instantly in your browser. RFC 4122 compliant, free, and private.',
    },
    {
      property: 'og:title',
      content: 'Universally Unique Identifier | uidg',
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
}));
