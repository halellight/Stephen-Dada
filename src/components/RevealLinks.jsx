import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slide, scale } from "./anima";
export const RevealLinks = () => {
  const [navopen, setNavOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const handleNav = () => {
    setNavOpen(!navopen);
    setIsActive(!isActive);
  };

  return (
    <motion.section
      className="grid place-content-right gap-8 bg-[#rgb(153, 153, 153)] px-4 py-10 text-[#afa18f]"
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <FlipLink href="#landing">HOME</FlipLink>
      <FlipLink href="#wyfim">ABOUT</FlipLink>
      <FlipLink href="#contact">CONTACT</FlipLink>
      <FlipLink href="#projects">WORK</FlipLink>
    </motion.section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-xl font-black uppercase sm:text-4xl md:text-4xl lg:text-6xl text-[#afa18f]"
      style={{
        lineHeight: 0.75,
        color: "#afa18f",
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
export default RevealLinks;
