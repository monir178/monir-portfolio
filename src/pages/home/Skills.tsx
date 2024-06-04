"use client";
import { Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "@/components/data/SkillDataProvider";
import SkillText from "@/components/data/SkillText";
import { motion } from "framer-motion";

const Skills = () => {
  const skillContents = {
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
    <motion.section
      variants={skillContents}
      initial="hidden"
      animate="animate"
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: "scale(0.9)" }}>
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
