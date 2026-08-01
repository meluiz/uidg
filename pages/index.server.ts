import { defineHead } from 'void';
import { env } from 'void/env';

import { createSoftwareApplication, resolveWebSite } from '@/utils/metadata';

const DESCRIPTION =
  'Free online generator for UUID (v1–v7), ULID, Nano ID and CUID2. Instant, browser-side, no signup and no tracking.';

export const head = defineHead((context) => {
  const descriptor = createSoftwareApplication(
    context,
    {
      meta: [{ property: 'og:url', content: env.APP_URL }],
    },
    {
      name: 'uidg',
      url: env.APP_URL,
      description: DESCRIPTION,
      featureList: [
        'UUID generator (v1, v3, v4, v5, v6, v7)',
        'CUID2 generator',
        'Nano ID generator',
        'ULID generator',
      ],
    },
  );

  return {
    ...descriptor,
    script: [
      ...(descriptor.script ?? []),
      {
        type: 'application/ld+json',
        innerHTML: resolveWebSite({ name: 'uidg', url: env.APP_URL, description: DESCRIPTION }),
      },
    ],
  };
});
