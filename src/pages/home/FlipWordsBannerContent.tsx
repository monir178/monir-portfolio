"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { easeIn, motion } from "framer-motion";
import { FileDown } from "lucide-react";

// Banner Texts for FlipWords
export function FlipBannerWords() {
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
      <div className="text-xl lg:text-2xl font-normal text-neutral-600 dark:text-neutral-400 ">
        I&apos;m a dedicated MERN stack developer with expertise in <br />
        <FlipWords words={words} /> <br /> <br /> I also specialize in{" "}
        <span className="text-purple-100"> Next.js and Redux</span> , creating
        modern, scalable web applications. Let&apos;s build something great
        together!
      </div>
      {/* buttons */}
      <div className="my-4 mt-8 flex items-center justify-start gap-4">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <FileDown className="mr-2 " />
            Download Resume
          </span>
        </button>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Hire Me
          </span>
        </button>
      </div>
    </motion.div>
  );
}
