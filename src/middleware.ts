import createMiddleware from "next-intl/middleware";
import { clerkMiddleware } from "@clerk/nextjs/server";

const locales = ["fa", "en"];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

export default clerkMiddleware((auth, req) => {
  const res = intlMiddleware(req);
  return res;
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
