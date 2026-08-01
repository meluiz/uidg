import { env } from 'void/env';

import { createSitemapHandler } from '@/utils/metadata';

export const GET = createSitemapHandler([
  {
    url: env.APP_URL,
    changeFrequency: 'yearly',
    lastModified: new Date().toISOString().split('T')[0],
    priority: 1,
  },
  {
    url: `${env.APP_URL}/uuid`,
    changeFrequency: 'yearly',
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.8,
  },
  {
    url: `${env.APP_URL}/cuid`,
    changeFrequency: 'yearly',
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.8,
  },
  {
    url: `${env.APP_URL}/nanoid`,
    changeFrequency: 'yearly',
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.8,
  },
  {
    url: `${env.APP_URL}/ulid`,
    changeFrequency: 'yearly',
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.8,
  },
]);
