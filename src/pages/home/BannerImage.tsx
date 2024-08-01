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
      duration: 3,
      ease: "easeInOut",
      type: "tween",
    },
  },
};

const BannerImage = () => {
  return (
    <motion.div
      variants={imageAnimate}
      initial="hidden"
      animate="animate"
      className="relative ">
      <div className="flex justify-center">
        <div className="absolute w-full max-w-xs sm:max-w-md md:max-w-lg mix-blend-lighten ">
          <Image
            src="/assets/bannerImg.png"
            alt="My Photo"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* Circle with shadow */}
      <motion.svg
        className=" w-[200px] md:w-[400px] xl:w-[400px] h-[200px] md:h-[400px] xl:h-[400]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg">
        {/* Shadow circle */}
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#c084fc"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "blur(15px)" }}
          initial={{ strokeDasharray: "10 50 10 50" }}
          animate={{
            strokeDasharray: ["10 50 10 50"],
            rotate: [0, 360],
            scale: [1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Main dashed circle */}
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#c084fc"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "50 100 50 100" }}
          animate={{
            strokeDasharray: [
              "50 100 50 100",
              "100 50 100 50",
              "50 100 50 100",
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default BannerImage;
