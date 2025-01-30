"use client";
import { Button } from "@heroui/button";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { LiaTelegramPlane } from "react-icons/lia";

export default function Home() {
  const [media, setMedia] = useState("instagram");
  const [link, setLink] = useState("");
  return (
    <div className="relative h-full min-h-screen w-full">
      <Image
        alt="Prev"
        src={media === "instagram" ? "/image 3.png" : "/image 4.png"}
        className={`absolute -top-2/4 right-0 w-full`}
        width={1000}
        height={1000}
      />
      <div className="flex items-center justify-center gap-4 pt-28 z-50 relative">
        <Image
          src={
            media === "instagram" ? "/instaSelect.png" : "/instaNotSelect.png"
          }
          alt="Prev"
          onClick={() => setMedia("instagram")}
          className={`z-50 h-[68px] w-[74px] cursor-pointer`}
          unoptimized
          style={{ filter: media === "instagram" ? "none" : "invert(1)" }}
          width={1000}
          height={1000}
        />

        <Image
          src={
            media === "youtube" ? "/youtubeSelect.png" : "/youtubeNotSelect.png"
          }
          alt="Next"
          onClick={() => setMedia("youtube")}
          className="z-50 h-[80px] w-[80px] cursor-pointer object-contain"
          width={1000}
          style={{ filter: media === "youtube" ? "none" : "invert(1)" }}
          unoptimized
          height={1000}
        />
      </div>

      <div className="text-center z-50 relative">
        <p className="mt-10 text-2xl font-bold">
          Instagram-Youtube Video Download
        </p>

        <div className="relative mx-auto mt-5 flex w-max gap-2">
          <input
            type="text"
            value={link}
            onChange={(event) => setLink(event.target.value)}
            placeholder="Paste Url Instagram"
            className="w-[300px] rounded-md p-2 pr-8 text-black outline-0"
          />
          {link ? (
            <IoMdClose
              onClick={() => setLink("")}
              className="absolute right-28 top-2.5 cursor-pointer text-xl text-black"
            />
          ) : (
            <IoCopyOutline className="absolute right-28 top-2.5 cursor-pointer text-xl text-black" />
          )}

          <Button variant="solid" className="rounded-md">
            Download
          </Button>
        </div>
        <span className="mt-5 block text-sm">
          First, click on the icon of the platform you want and then write the
          link in the input.
        </span>
      </div>

      <div className="flex items-center justify-center gap-4 text-xl mt-10 z-50 relative">
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
