import React, { useState } from "react";
import styles from "./Nav.module.scss";
import { motion } from "framer-motion";
import RevealLinks from "./RevealLinks.jsx";
// import { usePathname } from "next/navigation";
import { menuSlide } from "./anima.js";
import Link from "./Lin.jsx";
import Curve from "./Curve.jsx";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            // setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          <RevealLinks />
        </div>
        <div className={styles.footer}>
          <a>X</a>
          <a>Instagram</a>
          <a>Github</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
