import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import RevealLinks from "./RevealLinks";
import styles from "./style.module.scss";
import { slideUp, opacity } from "./anima.js";
import Nav from "./Nav.jsx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  // const buttonRef = useRef(null);

  // const handleNav = () => {
  //   setNav(!nav);
  //   setIsActive(!isActive);
  // };
  // const closeNav = () => {
  //   setNav(false);
  //   setIsActive(false);
  // };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full p-1 bg-[#000000] text-[#afa18f] flex justify-between items-center  z-50">
      <div className="max-w-[1240px] mx-auto p-4 flex justify-between items-center gap-[100px] md:gap-[200px] lg:gap-[450px]">
        <div className="flex items-center cursor-pointer">
          <a href="landing" className="text-m md:text-l font-bold">
            DADA STEPHEN
          </a>
        </div>

        <div className="md:flex items-center space-x-4">
          {/* <span className="p-2 text-gray-500 text-[10px] md:text-lg lg:text-xl ">
            [ABJ]
            <motion.span
              animate={{ opacity: [1, 0.65, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#00A699] font-bold text-[10px] md:text-lg lg:text-xl"
            >
              {formattedTime}
            </motion.span>
          </span> */}
        </div>
        <>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>

          <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </>
        {/* <div
          onClick={handleNav}
          ref={buttonRef}
          className="block z-50 cursor-pointer  items-center"
        >
          <div
            className={`relative w-6 h-0.5 bg-[#afa18f] transition-transform duration-300 ${
              isActive ? "rotate-45 translate-y-1" : ""
            }`}
          ></div>
          <div
            className={`relative w-4 h-0.5 bg-[#afa18f] my-1 transition-transform duration-300 ${
              isActive ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`relative w-6 h-0.5 bg-[#afa18f] transition-transform duration-300 ${
              isActive ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;