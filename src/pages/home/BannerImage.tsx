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
    <motion.div
      variants={imageAnimate}
      initial="hidden"
      animate="animate"
      className="w-full flex justify-center">
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg  ">
        <Image
          src="/assets/bannerImg.png"
          alt="My Photo"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default BannerImage;
