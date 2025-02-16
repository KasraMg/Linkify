"use client";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { LiaTelegramPlane } from "react-icons/lia";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@heroui/button";
import { useClerk } from "@clerk/nextjs";
export default function Home() {
  const [media, setMedia] = useState("Instagram");
  const [link, setLink] = useState("");
  const locale = useLocale();

  const t = useTranslations("HomePage");

  return (
    <div className="relative h-full min-h-screen w-full">
      <Image
        alt="Prev"
        src={media === "Instagram" ? "/image 3.png" : "/image 4.png"}
        className={`absolute -top-2/4 right-0 w-full`}
        width={1000}
        height={1000}
      />
      <div className="relative z-50 flex items-center justify-center gap-4 pt-28">
        <Image
          src={
            media === "Instagram" ? "/instaSelect.png" : "/instaNotSelect.png"
          }
          alt="Prev"
          onClick={() => setMedia("Instagram")}
          className={`z-50 h-[68px] w-[74px] cursor-pointer`}
          unoptimized
          style={{ filter: media === "Instagram" ? "none" : "invert(1)" }}
          width={1000}
          height={1000}
        />

        <Image
          src={
            media === "Youtube" ? "/youtubeSelect.png" : "/youtubeNotSelect.png"
          }
          alt="Next"
          onClick={() => setMedia("Youtube")}
          className="z-50 h-[80px] w-[80px] cursor-pointer object-contain"
          width={1000}
          style={{ filter: media === "Youtube" ? "none" : "invert(1)" }}
          unoptimized
          height={1000}
        />
      </div>
      <div className="relative z-50 text-center">
        <p className="mt-10 text-2xl font-bold">{t("title")}</p>

        <div dir={locale === 'en' ? 'ltr' : 'rtl'} className="relative mx-auto mt-5 flex w-max gap-2">
          <input
            type="text"
            value={link}
            onChange={(event) => setLink(event.target.value)}
            placeholder={`${media === "Instagram" ? t("instagramPlaceHolder") : t("youtubePlaceHolder")}`}
            className={`${locale === 'fa' ? "pl-8" : "pr-8"} w-[300px] rounded-md bg-[#D9D3D8] p-2 text-black outline-0 transition-transform-colors-opacity placeholder:text-black dark:bg-[#3f3f46] dark:text-white placeholder:dark:text-white`}
          />
          {link ? (
            <IoMdClose
              onClick={() => setLink("")}
              className={`${locale === 'fa' ? "left-24" : "right-28"} absolute top-2.5 cursor-pointer text-xl text-black dark:text-white`}
            />
          ) : (
            <IoCopyOutline className={`${locale === 'fa' ? "left-24" : "right-28"} absolute top-2.5 cursor-pointer text-xl text-black dark:text-white`} />
          )}

          <Button variant="solid" className="rounded-md">
            {t("download")}
          </Button>
        </div>
        <span className="mt-5 block text-sm">{t("description")}</span>
      </div>
      <div className="relative z-50 mt-10 flex items-center justify-center gap-4 text-xl">
        <Link target="_blank" href={"https://github.com/KasraMg/Linkify"}>
          <FiGithub />
        </Link>
        <Link target="_blank" href={"https://t.me/MrShahiin"}>
          <LiaTelegramPlane />
        </Link>
      </div>
    </div>
  );
}
