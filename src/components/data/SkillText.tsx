"use client";
import { motion } from "framer-motion";

const SkillText = () => {
  const SkillText = {
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
    <motion.div variants={SkillText} initial="hidden" animate="animate">
      <h1 className="bg-gradient-to-br from-purple-400 to-purple-100 bg-clip-text text-center text-4xl font-medium tracking-widest uppercase text-transparent md:text-5xl lg:text-7xl mb-8">
        {" "}
        Skills
      </h1>
    </motion.div>
  );
};

export default SkillText;
