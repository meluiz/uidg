import { defineHandler, defineHead } from 'void';

import { nanoid } from '@/utils/helpers';
import { createSoftwareApplication } from '@/utils/metadata';

export type NanoidPageProps = {
  uidg: string;
};

export const loader = defineHandler<NanoidPageProps>(async (context) => {
  const { req } = context;

  const length = req.query('length') ?? req.query('len') ?? req.query('l');

  return {
    uidg: nanoid({ length: length ? Number(length) : undefined }),
  };
});

export const head = defineHead<NanoidPageProps>((context) => {
  return createSoftwareApplication(context, {
    title: 'Nano ID Generator — Short URL-Friendly Random IDs',
    meta: [
      {
        name: 'description',
        content: 'A tiny, secure, URL-friendly, unique string ID generator for JavaScript.',
      },
      {
        property: 'og:title',
        content: 'Nano ID Generator — Short URL-Friendly Random IDs | uidg',
      },
      {
        property: 'og:description',
        content: 'A tiny, secure, URL-friendly, unique string ID generator for JavaScript.',
      },
      {
        property: 'og:url',
        content: 'https://uidg.meluiz.com/nanoid',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://uidg.meluiz.com/nanoid',
      },
    ],
  });
});
