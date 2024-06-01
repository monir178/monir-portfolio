import { Vortex } from "@/components/ui/vortex";
import React from "react";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center gap-4  justify-between px-2 md:px-10 py-4 w-full h-full">
        <div>
          <h2 className="text-white text-2xl md:text-6xl font-bold text-left">
            The hell is this?
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            This is chemical burn. It&apos;ll hurt more than you&apos;ve ever
            been burned and you&apos;ll have a scar.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Order now
            </button>
            <button className="px-4 py-2  text-white ">Watch trailer</button>
          </div>
        </div>
        <div>
          <h1>adsfadsjhfh</h1>
        </div>
      </Vortex>
    </div>
  );
}
