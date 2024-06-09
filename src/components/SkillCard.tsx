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
      <div>
        <Image src={imageUrl} alt={skill.name} width={100} height={100} />
      </div>
    </motion.div>
  );
};

export default SkillCard;
