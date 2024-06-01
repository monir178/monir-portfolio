import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const links = [
  { name: "Home", target: "home" },
  { name: "Skills", target: "skills" },
  { name: "Projects", target: "projects" },
  { name: "Blogs", target: "blogs" },
  { name: "Contact", target: "contact" },
];

const Navbar = () => {
  return <FloatingNav navItems={links} />;
};

export default Navbar;
