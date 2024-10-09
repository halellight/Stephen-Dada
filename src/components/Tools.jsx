import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../images/react.svg";
import Picture2 from "../images/js.svg";
import Picture3 from "../images/tailwind.svg";
import Picture4 from "../images/nod.svg";

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

const Tools = () => {
  const iosClass = isIOS() ? "ios-specific-class" : "";
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Rotations and Opacity Transformations for Images
  const rotate4 = useTransform(scrollYProgress, [0, 1], [-2, 9]);
  const rotate5 = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const rotate6 = useTransform(scrollYProgress, [0, 1], [-2, 4]);
  const rotate7 = useTransform(scrollYProgress, [0, 1], [-2, -5]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const top1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const top2 = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const top3 = useTransform(scrollYProgress, [0, 1], [100, 50]);
  const top4 = useTransform(scrollYProgress, [0, 1], [150, 100]);

  const pictures = [
    {
      src: Picture1,
      rotateZ: rotate4,
      opacity: opacity1,
      top: top1,
    },
    {
      src: Picture2,
      rotateZ: rotate5,
      opacity: opacity2,
      top: top2,
    },
    {
      src: Picture3,
      rotateZ: rotate6,
      opacity: opacity3,
      top: top3,
    },
    {
      src: Picture4,
      rotateZ: rotate7,
      opacity: opacity4,
      top: top4,
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative ">
      <div className="sticky top-0 h-screen bg-[#000000] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full">
          {/* Left Side - Text */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-6">
              <p className="text-[#afa18f] lg:text-[48px] md:text-[30px] text-[20px] font-bold">
                TOOLS
              </p>
            </div>
          </div>
          {/* Right Side - Images */}
          <div className="flex items-center  relative h-full top-80 left-3">
            {pictures.map(({ src, rotateZ, opacity, top }, index) => (
              <motion.div
                key={index}
                style={{ rotateZ, opacity, top }}
                className={`absolute h-[40vh] lg:h-[40vh] md:h-[20vh] w-[20vh] lg:w-[50vh] md:w-[30vh] ${iosClass}`}
              >
                <img
                  src={src}
                  alt={`tool-${index}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
