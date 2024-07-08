// floating-navbar.tsx
"use client";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    target: string;
  }[];
  className?: string;
}) => {
  const navAnimate = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={navAnimate}
      initial="hidden"
      animate="visible"
      className={`flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-purple-500 rounded-full bg-purple-300 bg-opacity-10 backdrop-blur-lg shadow-lg z-[1000] px-4 md:px-12  py-2 lg:py-3 items-center justify-center space-x-4  ${className}`}>
      {navItems.map((navItem: any, idx: number) => (
        <ScrollLink
          key={`link=${idx}`}
          to={navItem.target}
          smooth={true}
          offset={-100}
          duration={500}
          className="relative items-center flex space-x-1 text-purple-400 hover:text-purple-600 transition-all cursor-pointer text-base md:text-xl">
          <span>{navItem.name}</span>
        </ScrollLink>
      ))}
    </motion.div>
  );
};
