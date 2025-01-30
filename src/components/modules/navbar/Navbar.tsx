"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex bg-[#0a0a0a] z-50 relative py-4 px-4 border-b justify-between items-center border-white">
      <div className="flex items-center gap-1">
        <Image
          src={"/logo.png"}
          width={1000}
          className="w-16"
          height={1000}
          alt="logo"
        />
        <p className="text-2xl font-bold">Linkify</p>
        <MdOutlineDarkMode className="text-2xl ml-5 cursor-pointer hover:text-red-600 transition-colors" />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="shadow">Login / Register</Button>
        <Button variant="bordered">FA</Button>
      </div>
    </div>
  );
};

export default Navbar;
