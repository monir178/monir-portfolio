"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Skills from "./Skills";

export function SparklesPreview() {
  return (
    <div className="relative bg-transparent w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.8}
          maxSize={2}
          particleDensity={100}
          className="w-full h-full"
        />
      </div>
      <div className="">
        <Skills />
      </div>
    </div>
  );
}
