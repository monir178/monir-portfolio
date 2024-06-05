import React from "react";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

import BannerImage from "./BannerImage";
import FlipBannerWords from "./FlipWordsBannerContent";

// Banner Content Container
const BannerContent = () => {
  return (
    <div className="container mx-auto px-4 w-full pt-20">
      <div className="flex flex-col md:flex-row justify-between items-center  gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <div>
            <TypeWriterEffect />
            <TypeWriterEffectTwo />
          </div>
          <FlipBannerWords />
        </div>
        <div className="flex-1 flex justify-end">
          <BannerImage />
        </div>
      </div>
    </div>
  );
};

// TypeWriter effect for welcome
function TypeWriterEffect() {
  const words = [
    {
      text: "Hi!",
      className: "text-2xl lg:text-3xl text-purple-200 dark:text-purple-200",
    },
    {
      text: "I'm,",
      className: "text-2xl lg:text-3xl dark:text-purple-200 text-purple-200",
    },
  ];
  return (
    <div className="text-xl font-normal text-purple-200 dark:text-purple-200  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
function TypeWriterEffectTwo() {
  const words = [
    {
      text: "Moniruzzaman ",
      className: "dark:text-purple-300 text-purple-300 text-2xl lg:text-5xl",
    },
    {
      text: "Monir",
      className: "text-purple-200 dark:text-purple-200 text-2xl lg:text-5xl",
    },
  ];
  return (
    <div className="text-xl font-normal text-purple-200 uppercase dark:text-purple-200 ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export default BannerContent;
