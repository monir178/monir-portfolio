"use client";

import CopyEmail from "@/components/ui/EmaiCopy";
import Link from "next/link";

import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
const Footer = () => {
  return (
    <footer
      className="w-full container mx-auto px-4 pt-10 lg:pt-20 pb-20"
      id="contact">
      <div className="flex sm:hidden justify-between items-center w-1/2 mb-4 mx-auto">
        <CopyEmail />
      </div>

      <div className="flex justify-between items-center ">
        <div>
          <p className="text-white">@ 2024. All rights reserved.</p>
        </div>
        <div className="hidden md:flex">
          <CopyEmail />
        </div>

        <div className="text-white  text-3xl lg:text-4xl flex justify-between gap-4">
          <Link
            href="https://www.facebook.com/profile.php?id=100012573888621"
            target="_blank">
            <LuFacebook />
          </Link>
          <Link
            href="https://www.linkedin.com/in/moniruzzaman-monir-52a282245/"
            target="_blank">
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
