"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TSkill } from "@/components/Skills";

const SkillCard = ({ skill }: { skill: TSkill }) => {
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

  const imageUrl = skill.img;
  return (
    <motion.div variants={skillContents} initial="hidden" animate="animate">
      <div className="flex justify-center items-center">
        <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
          <Image
            src={imageUrl}
            alt={skill.name}
            width={75} // Set the largest width required
            height={75} // Set the largest height required
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
