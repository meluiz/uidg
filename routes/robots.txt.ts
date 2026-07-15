import { env } from 'void/env';

import { createRobotsHandler } from '@/utils/metadata';

export const GET = createRobotsHandler({
  host: env.APP_URL,
  sitemap: `${env.APP_URL}/sitemap.xml`,
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: '/not-found',
  },
});
