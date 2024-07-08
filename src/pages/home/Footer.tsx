"use client";

import CopyEmail from "@/components/ui/EmaiCopy";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
const Footer = () => {
  return (
    <footer className="w-full container mx-auto px-4 pt-10 lg:pt-20 pb-20">
      <div className="flex sm:hidden justify-between items-center w-9/12 mb-8 mx-auto">
        <CopyEmail />
      </div>

      <div className="flex justify-between items-center ">
        <div>
          <p className="text-white">@ 2024. All rights reserved.</p>
        </div>
        <div className="hidden md:flex">
          <CopyEmail />
        </div>

        <div className="text-white  text-3xl lg:text-4xl flex justify-between gap-4 inset-0 z-50">
          <Link
            href="https://www.facebook.com/profile.php?id=100012573888621"
            target="_blank">
            <LuFacebook />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=8801786621989"
            target="_blank">
            <FaWhatsapp />
          </Link>
          <Link href="https://www.linkedin.com/in/monir178/" target="_blank">
            <CiLinkedin />
          </Link>
          <Link
            href="https://discordapp.com/users/1234931719946240094"
            target="_blank">
            <FaDiscord />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
