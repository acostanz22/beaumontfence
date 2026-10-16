import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (import.meta.env.PROD) return next();
  const { pathname } = context.url;
  if (pathname.endsWith(".html")) {
    const stripped = pathname.slice(0, -5);
    return context.rewrite(stripped === "" || stripped === "/index" ? "/" : stripped);
  }
  return next();
});
