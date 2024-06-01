// floating-navbar.tsx
"use client";
import { Link as ScrollLink } from "react-scroll";

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
  return (
    <div
      className={`flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-purple-500 rounded-full bg-purple-300 bg-opacity-10 backdrop-blur-lg shadow-lg z-[5000] px-12  py-3 items-center justify-center space-x-4  ${className}`}>
      {navItems.map((navItem: any, idx: number) => (
        <ScrollLink
          key={`link=${idx}`}
          to={navItem.target}
          smooth={true}
          offset={-100}
          duration={500}
          className="relative items-center flex space-x-1 text-purple-100 hover:text-purple-400 transition-all cursor-pointer text-xl">
          <span>{navItem.name}</span>
        </ScrollLink>
      ))}
    </div>
  );
};
