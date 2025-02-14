import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const locales = ["en", "fa"];

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const locale = (await cookieStore).get("NEXT_LOCALE")?.value || "en";

  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: require(`../../messages/${locale}.json`),
  };
});


