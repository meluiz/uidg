import type { Sitemap, Video } from './types';

import { defineHandler } from 'void';

import { toArray, toIso } from './utils';

const MAX_URLS = 50_000;

const escapeXml = (value: string | number) => {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

const element = (tag: string, value: string | number) => {
  return `<${tag}>${escapeXml(value)}</${tag}>`;
};

const weakEtag = (content: string): string => {
  let hash = 0x811c9dc5;

  for (let i = 0; i < content.length; i++) {
    hash ^= content.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }

  return `W/"${(hash >>> 0).toString(16)}-${content.length}"`;
};

const resolveVideo = (video: Video) => {
  const lines: string[] = ['<video:video>'];

  lines.push(element('video:title', video.title));
  lines.push(element('video:thumbnail_loc', video.thumbnail_loc));
  lines.push(element('video:description', video.description));

  if (video.content_loc) {
    lines.push(element('video:content_loc', video.content_loc));
  }

  if (video.player_loc) {
    lines.push(element('video:player_loc', video.player_loc));
  }

  if (video.duration != null) {
    lines.push(element('video:duration', video.duration));
  }

  if (video.view_count != null) {
    lines.push(element('video:view_count', video.view_count));
  }

  if (video.rating != null) {
    lines.push(element('video:rating', video.rating));
  }

  for (const tag of toArray(video.tag)) {
    lines.push(element('video:tag', tag));
  }

  if (video.expiration_date != null) {
    lines.push(element('video:expiration_date', toIso(video.expiration_date)));
  }

  if (video.publication_date != null) {
    lines.push(element('video:publication_date', toIso(video.publication_date)));
  }

  if (video.family_friendly) {
    lines.push(element('video:family_friendly', video.family_friendly));
  }

  if (video.requires_subscription) {
    lines.push(element('video:requires_subscription', video.requires_subscription));
  }

  if (video.live) {
    lines.push(element('video:live', video.live));
  }

  if (video.restriction) {
    lines.push(
      `<video:restriction relationship="${escapeXml(video.restriction.relationship)}">` +
        `${escapeXml(video.restriction.content)}</video:restriction>`,
    );
  }

  if (video.platform) {
    lines.push(
      `<video:platform relationship="${escapeXml(video.platform.relationship)}">` +
        `${escapeXml(video.platform.content)}</video:platform>`,
    );
  }

  if (video.uploader) {
    const info = video.uploader.info ? ` info="${escapeXml(video.uploader.info)}"` : '';

    lines.push(
      `<video:uploader${info}>${escapeXml(video.uploader.content ?? '')}</video:uploader>`,
    );
  }

  lines.push('</video:video>');

  return lines;
};

export const resolveSitemap = (data: Sitemap) => {
  if (data.length > MAX_URLS) {
    throw new RangeError(
      `Sitemap with ${data.length} URLs exceeds the protocol limit of ${MAX_URLS}. Split it into multiple files and use a sitemap index.`,
    );
  }

  const hasImages = data.some((item) => (item.images?.length ?? 0) > 0);
  const hasVideos = data.some((item) => (item.videos?.length ?? 0) > 0);
  const hasAlternates = data.some(
    (item) => Object.keys(item.alternates?.languages ?? {}).length > 0,
  );

  const namespaces = [
    'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    hasImages && 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
    hasVideos && 'xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"',
    hasAlternates && 'xmlns:xhtml="http://www.w3.org/1999/xhtml"',
  ]
    .filter(Boolean)
    .join(' ');

  const lines: string[] = ['<?xml version="1.0" encoding="UTF-8"?>', `<urlset ${namespaces}>`];

  for (const item of data) {
    lines.push('<url>');
    lines.push(element('loc', item.url));

    if (item.lastModified != null) {
      lines.push(element('lastmod', toIso(item.lastModified)));
    }

    if (item.changeFrequency) {
      lines.push(element('changefreq', item.changeFrequency));
    }

    if (typeof item.priority === 'number') {
      if (item.priority < 0 || item.priority > 1) {
        throw new RangeError(
          `Priority ${item.priority} is out of the 0.0–1.0 range (url: ${item.url})`,
        );
      }

      lines.push(element('priority', item.priority));
    }

    const languages = item.alternates?.languages ?? {};

    for (const [lang, href] of Object.entries(languages)) {
      lines.push(
        `<xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(href ?? '/')}" />`,
      );
    }

    for (const image of item.images ?? []) {
      lines.push('<image:image>', element('image:loc', image), '</image:image>');
    }

    for (const video of item.videos ?? []) {
      const videos = resolveVideo(video);
      lines.push(...videos);
    }

    lines.push('</url>');
  }

  lines.push('</urlset>');

  return `${lines.join('\n')}\n`;
};

export const createSitemapHandler = (data: Sitemap) => {
  const content = resolveSitemap(data);
  const etag = weakEtag(content);

  return defineHandler((context) => {
    if (context.req.header('if-none-match') === etag) {
      return context.body(null, 304, {
        ETag: etag,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
      });
    }

    return context.text(content, 200, {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    });
  });
};
