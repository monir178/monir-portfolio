import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const links = [
  { name: "About", target: "about" },
  { name: "Skills", target: "skills" },
  { name: "Projects", target: "projects" },
  { name: "Blogs", target: "blogs" },
  { name: "Contact", target: "contact" },
];

const Navbar = () => {
  return <FloatingNav navItems={links} />;
};

export default Navbar;
