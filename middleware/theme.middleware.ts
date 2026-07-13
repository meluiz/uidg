import { getCookie } from 'hono/cookie';
import { defineMiddleware } from 'void';

import { CLIENT_HINT, CLIENT_HINT_RESPONSE, resolveTheme, THEME_COOKIE } from '@/utils/theme';

const ASSET_REGEX = /\.[a-z0-9]+$/i;

const isPageRequest = (method: string, path: string) => {
  if (method !== 'GET' && method !== 'HEAD') {
    return false;
  }

  if (path.startsWith('/api')) {
    return false;
  }

  if (path.startsWith('/__void')) {
    return false;
  }

  if (ASSET_REGEX.test(path)) {
    return false;
  }

  return true;
};

export default defineMiddleware(async (context, next) => {
  if (!isPageRequest(context.req.method, context.req.path)) {
    return next();
  }

  const theme = resolveTheme(
    getCookie(context as any, THEME_COOKIE),
    context.req.header(CLIENT_HINT),
  );

  context.set('headDefaults', {
    htmlAttrs: {
      class: theme.resolved,
      style: `color-scheme: ${theme.resolved};`,
    },
  });

  context.set('shared', { theme });

  await next();

  if (!context.isRewritten()) {
    context.header('Accept-CH', CLIENT_HINT_RESPONSE);

    if (theme.value === 'system') {
      context.header('Critical-CH', CLIENT_HINT_RESPONSE);
    }

    context.header('Vary', CLIENT_HINT_RESPONSE, { append: true });
    context.header('Vary', 'Cookie', { append: true });
  }
});
