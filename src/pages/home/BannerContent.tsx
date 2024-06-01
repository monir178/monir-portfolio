import React from "react";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipBannerWords } from "./FlipWordsBannerContent";
import BannerImage from "./BannerImage";

// Banner Content Container
export const BannerContent = () => {
  return (
    <div className="container mx-auto px-4 w-full">
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
      text: "Hey!",
      className: "text-2xl lg:text-3xl",
    },
    {
      text: "I'm",
      className: "text-2xl lg:text-3xl",
    },
  ];
  return (
    <div className="text-xl font-normal text-neutral-600 dark:text-neutral-400  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
function TypeWriterEffectTwo() {
  const words = [
    {
      text: "Moniruzzaman ",
      className: "text-purple-500 dark:text-purple-500 text-2xl lg:text-5xl",
    },
    {
      text: "Monir",
      className: "text-purple-500 dark:text-purple-500 text-2xl lg:text-5xl",
    },
  ];
  return (
    <div className="text-xl font-normal text-neutral-600 uppercase dark:text-neutral-400 ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
