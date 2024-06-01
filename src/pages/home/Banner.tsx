import { AuroraBackground } from "@/components/ui/aurobackground";
import { BannerLamp } from "@/components/ui/lamp";
import React from "react";

const Banner = () => {
  return (
    <AuroraBackground className="">
      <div className="flex justify-between gap-4">
        <div>
          <h2 className="text-white">Okay</h2>
        </div>
        <div>
          <h1>text</h1>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Banner;
