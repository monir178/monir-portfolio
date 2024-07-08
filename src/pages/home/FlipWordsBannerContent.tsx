"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { easeIn, motion } from "framer-motion";
import { FileDown } from "lucide-react";

// Banner Texts for FlipWords
const FlipBannerWords = () => {
  const words = ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"];

  const flipContainer = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={flipContainer}
      initial="hidden"
      animate="animate"
      className="text-left">
      <div className="text-lg lg:text-xl font-normal text-neutral-200 dark:text-neutral-200 ">
        I&apos;m a dedicated MERN stack developer with expertise in <br />
        <FlipWords words={words} /> <br /> <br /> I also specialize in{" "}
        <span className="text-purple-100"> Next.js and Redux</span> , creating
        modern, scalable web applications. I have experience working on a
        variety of projects, from e-commerce platforms to interactive web
        applications, always keeping up with the latest industry trends and best
        practices. I am committed to continuous learning and improvement,
        constantly exploring new technologies to expand my skill set. Let&apos;s
        build something great together!
      </div>
      {/* buttons */}
      <div className="my-4 mt-8 flex items-center justify-start gap-4">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <a
              href="/assets/resume.pdf"
              download="resume"
              className="flex items-center">
              <FileDown className="mr-2 " />
              Download Resume
            </a>
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default FlipBannerWords;
