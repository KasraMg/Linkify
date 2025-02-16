"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { Button } from "@heroui/button";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Navbar");
  const locale = useLocale();

  return (
    <div dir={locale === 'fa' ? "rtl" : 'ltr'} className="relative z-[999] flex items-center justify-between border-b border-[#0a0a0a] bg-[#00000008] px-4 py-2 dark:border-white">
      <div className="flex items-center gap-1">
        <Image
          src={"/logo.png"}
          width={1000}
          className="w-16"
          height={1000}
          alt="logo"
        />
        <p className="text-2xl font-bold">{t("title")}</p>

        {theme !== "dark" ? (
          <MdOutlineDarkMode
            onClick={() => setTheme("dark")}
            className={`${locale === 'fa' ? 'mr-5' : 'ml-5'} cursor-pointer text-2xl transition-colors hover:text-red-600`}
          />
        ) : (
          <CiLight
            onClick={() => setTheme("light")}
            className={`${locale === 'fa' ? 'mr-5' : 'ml-5'} cursor-pointer text-2xl transition-colors hover:text-red-600`}
          />
        )}
      </div>
      <div className="flex items-center gap-2">
        <SignedIn>
          <UserButton showName />
        </SignedIn>

        <SignedOut>
          <Button variant="ghost">
            <SignInButton mode="modal" >
            {locale === 'fa' ? 'ورود' : 'Login'}
            </SignInButton>
            {` / `}
            <SignUpButton mode="modal">
            {locale === 'fa' ? 'ثبت نام' : 'Register'}

            </SignUpButton>
          </Button>
        </SignedOut>

        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
