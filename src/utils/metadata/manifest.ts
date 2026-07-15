import type { Manifest } from './types';

import { defineHandler } from 'void';

import { weakEtag } from './utils/etag';

export const resolveManifest = (data: Manifest): string => {
  return JSON.stringify(data, null, 2);
};

export const createManifestHandler = (data: Manifest) => {
  const content = resolveManifest(data);
  const etag = weakEtag(content);

  return defineHandler((context) => {
    if (context.req.header('if-none-match') === etag) {
      return context.body(null, 304, {
        ETag: etag,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
      });
    }

    return context.text(content, 200, {
      ETag: etag,
      'Content-Type': 'application/manifest+json; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    });
  });
};
