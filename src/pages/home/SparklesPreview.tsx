"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Skills from "./Skills";
import Education from "./Education";
import { motion } from "framer-motion";
import Projects from "./Projects";
import { Blogs } from "./Blogs";
import Footer from "./Footer";

export function SparklesPreview() {
  const sparklesContent = {
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
    <div className="relative bg-transparent w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.8}
          maxSize={2}
          particleDensity={100}
          className="w-full h-full"
        />
      </div>
      <motion.div
        variants={sparklesContent}
        initial="hidden"
        animate="animate"
        className=" flex flex-col gap-20 lg:gap-36 container mx-auto px-4">
        <Skills />
        <Education />
        <Projects />
        <Blogs />
      </motion.div>
    </div>
  );
}
