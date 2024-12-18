"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";

import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileNavigation from "./MobileNavigation";

import { LINKS } from "@/data/links";

const sidebarAnimationVariants = {
  open: { x: -1300, opacity: 0 },
  closed: {
    x: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav
      aria-label="header-navigation"
      className="flex items-center justify-between py-6"
    >
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul role="list" className="flex items-center gap-6">
          {LINKS.map((link, index) => (
            <NavLink key={link.id} link={link} index={index} />
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <div className="p-2 cursor-pointer" onClick={toggleMenu}>
          <FaBars size={24} className="text-grey hover:text-grey-dark" />
        </div>

        <motion.div
          variants={sidebarAnimationVariants}
          animate={menuOpen ? "open" : "closed"}
        >
          {menuOpen && <MobileNavigation onClose={toggleMenu} />}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
