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
      <h1 className="text-3xl anton-text tracking-wider font-medium bg-clip-text text-transparent bg-gradient-to-t from-purple-300 to-violet-600 md:text-6xl text-center mb-8">
        {" "}
        Skills
      </h1>
    </motion.div>
  );
};

export default SkillText;
