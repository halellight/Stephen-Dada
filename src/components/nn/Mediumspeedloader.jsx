"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const slideUp = {
  initial: { y: "100%" },
  exit: {
    y: "-100%",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function MediumSpeedLoader() {
  const [count, setCount] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimension = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  useEffect(() => {
    if (count === 100) return;
    const timer = setTimeout(() => {
      setCount((prevCount) => Math.min(prevCount + 1, 100));
    }, 30); // Medium speed: update every 30ms
    return () => clearTimeout(timer);
  }, [count]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center fixed inset-0 z-50 bg-gray-100">
      {dimension.width > 0 && (
        <>
          <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="flex flex-col items-center z-10"
          >
            <motion.p
              variants={opacity}
              initial="initial"
              animate="enter"
              className="text-6xl md:text-8xl font-bold text-primary flex items-center"
            >
              {count}
              <span className="text-green-500 ml-2">%</span>
            </motion.p>
          </motion.div>
          <svg className="absolute inset-0 w-full h-full">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="#e5e7eb"
            ></motion.path>
          </svg>
          <motion.div
            className="absolute bottom-10 left-0 h-1 bg-green-500"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}
