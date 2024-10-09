import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import styles from "./About.module.scss";
import { slideUp, opacity } from "../anim.js";

// const About = () => {
//   const phrase =
//     "Building features for Ease that empower sellers. Helping brands to stand out in the digital era.";
//   const description = useRef(null);
//   const isInView = useInView(description); // Trigger once when in view

//   return (
//     <div ref={description} className={styles.description}>
//       <div className={styles.body}>
//         <p>
//           {phrase.split(" ").map((word, index) => (
//             <span className={styles.mask} key={index}>
//               <motion.span
//                 variants={slideUp}
//                 custom={index}
//                 animate={isInView ? "open" : "closed"}
//               >
//                 {word}
//               </motion.span>
//             </span>
//           ))}
//         </p>
//         <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
//           Currently a software engineer at Ease
//         </motion.p>
//         {/* <div data-scroll data-scroll-speed={0.1}>
//           <div className={styles.button}>
//             <p>About me</p>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default About;

const About = () => {
  return (
    <section className="py-12">
      {/* Portfolio Title */}
      <h1 className="text-6xl font-bold text-center mb-12">PORTFOLIO</h1>

      {/* Project Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Night Mode Card */}
        <div className="relative bg-black">
          <img
            src="night-mode.jpg"
            alt="Night Mode"
            className="object-cover w-full h-80"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">NIGHT MODE</h2>
            <p className="text-sm text-gray-400">Twilight Edition</p>
            <button className="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded">
              View
            </button>
          </div>
        </div>

        {/* Day Mode Card */}
        <div className="relative bg-black">
          <img
            src="day-mode.jpg"
            alt="Day Mode"
            className="object-cover w-full h-80"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">DAY MODE</h2>
            <p className="text-sm text-gray-400">Bright Edition</p>
            <button className="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded">
              View
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
