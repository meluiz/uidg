import { defineHandler } from 'void';

const PATHS = ['/', '/uuid', '/cuid'];

const buildSitemap = (): string => {
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = PATHS.map((path) =>
    [
      '  <url>',
      `    <loc>https://uidg.meluiz.com${path}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>yearly</changefreq>`,
      `    <priority>1</priority>`,
      '  </url>',
    ].join('\n'),
  ).join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
};

export const GET = defineHandler((context) => {
  const sitemap = buildSitemap();

  return context.text(sitemap, 200, {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
  });
});
