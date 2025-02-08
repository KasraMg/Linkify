"use client";

import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { 
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
 

  return (
    <div className="relative z-[999] flex items-center justify-between border-b border-[#0a0a0a] bg-[#00000008] dark:border-white  px-4 py-2">
      <div className="flex items-center gap-1">
        <Image
          src={"/logo.png"}
          width={1000}
          className="w-16"
          height={1000}
          alt="logo"
        />
        <p className="text-2xl font-bold">Linkify</p>

        {theme !== "dark" ? (
          <MdOutlineDarkMode
            onClick={() => setTheme("dark")}
            className="ml-5 cursor-pointer text-2xl transition-colors hover:text-red-600"
          />
        ) : (
          <CiLight
            onClick={() => setTheme("light")}
            className="ml-5 cursor-pointer text-2xl transition-colors hover:text-red-600"
          />
        )}
      </div>
      <div className="flex items-center gap-2">

      <SignedIn>
              <UserButton showName/>
            </SignedIn>
            <SignedOut>
            <Link href={'/sign-in'}><Button variant="shadow">Login / Register</Button></Link>

            </SignedOut>
        <Button className="dark:text-white" variant="bordered">FA</Button>
      </div>
    </div>
  );
};

export default Navbar;
