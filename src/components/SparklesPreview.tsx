import { SparklesCore } from "@/components/ui/sparkles";
import Skills from "../pages/home/Skills";
import Education from "../pages/home/Education";

import Projects from "./Projects";

import Blogs from "../pages/home/Blogs";

const SparklesPreview = () => {
  return (
    <div className="relative bg-transparent w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.8}
          particleDensity={100}
          className="w-full h-full"
        />
      </div>

      <div className=" flex flex-col gap-20 lg:gap-36 container mx-auto px-4">
        <Skills />
        <Education />
        <Projects />
        <Blogs />
      </div>
    </div>
  );
};

export default SparklesPreview;
