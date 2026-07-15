import type { Robots } from './types';

import { defineHandler } from 'void';

import { toArray, weakEtag } from './utils';

const sanitize = (value: string | number) => {
  return String(value)
    .replace(/[\r\n]+/g, ' ')
    .trim();
};

const line = (key: string, value: string | number) => {
  return `${key}: ${sanitize(value)}`;
};

export const resolveRobots = (data: Robots) => {
  const lines: string[] = [];

  const rules = toArray(data.rules);

  for (const rule of rules) {
    const userAgent = toArray(rule.userAgent || ['*']);

    for (const agent of userAgent) {
      lines.push(line('User-Agent', agent));
    }

    let hasDirective = false;

    for (const item of toArray(rule.allow)) {
      lines.push(line('Allow', item));
      hasDirective = true;
    }

    for (const item of toArray(rule.disallow)) {
      lines.push(line('Disallow', item));
      hasDirective = true;
    }

    if (rule.crawlDelay != null) {
      if (!Number.isFinite(rule.crawlDelay) || rule.crawlDelay < 0) {
        throw new TypeError(`Invalid crawlDelay: ${rule.crawlDelay}. Use a number >= 0.`);
      }

      lines.push(line('Crawl-delay', rule.crawlDelay));
      hasDirective = true;
    }

    if (rule.other) {
      for (const [key, value] of Object.entries(rule.other)) {
        for (const v of toArray(value)) {
          lines.push(line(sanitize(key), v));
          hasDirective = true;
        }
      }
    }

    if (!hasDirective) {
      lines.push('Disallow:');
    }

    lines.push('');
  }

  if (data.host) {
    lines.push(line('Host', data.host));
  }

  for (const item of toArray(data.sitemap)) {
    lines.push(line('Sitemap', item));
  }

  return `${lines.join('\n').replace(/\n+$/, '')}\n`;
};

export const createRobotsHandler = (data: Robots) => {
  const content = resolveRobots(data);
  const etag = weakEtag(content);

  return defineHandler((context) => {
    if (context.req.header('if-none-match') === etag) {
      return context.body(null, 304, {
        ETag: etag,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
      });
    }

    return context.text(content, 200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    });
  });
};
