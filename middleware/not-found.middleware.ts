// middleware/00.not-found-status.ts
import { defineMiddleware } from 'void';

export default defineMiddleware(async (context, next) => {
  await next();

  console.log(context.get('notFound'));

  if (context.get('notFound') && context.res.status === 200) {
    context.res = new Response(context.res.body, {
      status: 404,
      headers: context.res.headers,
    });
  }
});
