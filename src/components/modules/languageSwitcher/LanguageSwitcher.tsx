"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@heroui/button";
import { useLocale } from "next-intl";
import { Suspense } from "react";

export default function LanguageSwitcher() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LanguageSwitcherContent />
    </Suspense>
  );
}

function LanguageSwitcherContent() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const removeLocaleFromPathname = (pathname: string, locale: string) => {
    return pathname.startsWith(`/${locale}`) ? pathname.replace(`/${locale}`, "") : pathname;
  };

  const switchLanguage = (newLocale: "en" | "fa") => {
    const newPathname = removeLocaleFromPathname(pathname, locale);
    router.push(`/${newLocale}${newPathname}`);
  };

  return (
    <Button
      onClick={() => switchLanguage(locale === "en" ? "fa" : "en")}
      className="dark:text-white"
      variant="bordered"
    >
      {locale === "en" ? "فارسی" : "English"}
    </Button>
  );
}