import { defineHandler } from 'void';

export const GET = defineHandler((context) => {
  const robots = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /not-found',
    '',
    `Sitemap: https://uidg.meluiz.com/sitemap.xml`,
  ].join('\n');

  return context.text(robots, 200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
  });
});
