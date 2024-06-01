"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const imageAnimate = {
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

const BannerImage = () => {
  return (
    <motion.div variants={imageAnimate} initial="hidden" animate="animate">
      <Image
        src="/assets/bannerImg.png"
        alt="My Photo"
        width={500}
        height={500}
      />
    </motion.div>
  );
};

export default BannerImage;
