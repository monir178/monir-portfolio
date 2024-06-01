import { AuroraBackground } from "@/components/ui/aurobackground";
import React from "react";
import { BannerContent } from "./BannerContent";

const Banner = () => {
  return (
    <div id="home" className="relative flex flex-col h-full w-full">
      <AuroraBackground>
        <BannerContent />
      </AuroraBackground>
    </div>
  );
};

export default Banner;
