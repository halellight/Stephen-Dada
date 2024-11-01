import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView

// Animation variants
const slideUp = {
  closed: { y: 100, opacity: 0 },
  open: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 0.6 },
  }),
};

const Random = () => {
  const services = [
    {
      title: "Frontend",
      description:
        "Turn concepts into captivating interactive experiences. Mastery of languages and JS frameworks to craft modern, responsive interfaces.",
    },
    {
      title: "Web Integration",
      description:
        "Transition designs from paper to pixel with precision. Build aesthetic, user-friendly, and cross-compatible websites using the latest integration techniques.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref); // Trigger once when in view

  return (
    <section className="bg-black text-gray-100 min-h-screen flex flex-col justify-between py-16 px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Title with Animation */}
        <motion.h1
          className="text-[24px] lg:text-[48px] text-[#afa18f] font-bold lg:mb-24 mb-10 md:mb-18"
          variants={slideUp}
          initial="closed"
          animate={isInView ? "open" : "closed"}
          custom={0}
        >
          WHAT I DO..
        </motion.h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border-t border-gray-700 pt-4"
              variants={slideUp}
              initial="closed"
              animate={isInView ? "open" : "closed"}
              custom={index + 0.7} // Stagger animation
            >
              <motion.h2
                className="lg:text-2xl text-[20px] font-semibold text-[#ffffb9]"
                variants={slideUp}
                custom={index + 0.7}
              >
                {service.title}
              </motion.h2>
              <motion.p
                className="text-gray-400 mt-6 lg:text-2xl text-[18px]"
                variants={slideUp}
                custom={index + 1.5}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Random;
