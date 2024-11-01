import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
//import styles from "./AboutSection.module.scss"; // Assuming you want to use SCSS for additional styling
import { slideUp, opacity } from "./anim.js"; // Custom animations

const AboutSection = () => {
  const description = useRef(null);
  const isInView = useInView(description); // Trigger once when in view

  const firstPhrase =
    "I'm Building features for Ease that empower sellers. Helping brands to stand out in the digital era.";
  const secondPhrase =
    "I design, implement, and push the boundaries, while blending functional and beautiful design to improve the user experience.";

  return (
    <section className="bg-black text-[#afa18f] p-10 min-h-[90vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1065px] mx-auto p-2">
        {/* Left Side - Heading */}
        <div className="text-left">
          <motion.h2
            className="lg:text-5xl font-bold md:text-[36px] text-[22px]"
            variants={slideUp}
            initial="closed"
            animate={isInView ? "open" : "closed"}
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Right Side - Description */}
        <div
          ref={description}
          className="text-gray-400 lg:text-2xl md:text-[24px] text-[20px] "
        >
          {/* First Paragraph with split words */}
          <p className="mb-6">
            Currently a software engineer at{" "}
            <motion.span
              className="font-bold text-[#ffffb9]"
              variants={slideUp}
              animate={isInView ? "open" : "closed"}
            >
              Ease
            </motion.span>
            .
          </p>

          <p className="mb-6">
            {firstPhrase.split(" ").map((word, index) => (
              <span className="inline-block overflow-hidden mr-2" key={index}>
                <motion.span
                  className="inline-block"
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>

          {/* Second Paragraph with split words */}
          <p>
            {secondPhrase.split(" ").map((word, index) => (
              <span className="inline-block overflow-hidden mr-2" key={index}>
                <motion.span
                  className="inline-block"
                  variants={slideUp}
                  custom={index + firstPhrase.split(" ").length} // Offset index to continue stagger
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>

          {/* Last sentence opacity animation */}
          {/* <motion.p
            className="mt-4"
            variants={opacity}
            initial="closed"
            animate={isInView ? "open" : "closed"}
          >
            I design, implement, and push the boundaries, while blending
            functional and beautiful design to improve the user experience.
          </motion.p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
