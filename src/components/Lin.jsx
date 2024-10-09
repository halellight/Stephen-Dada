import styles from "./Link.module.scss";

import { motion } from "framer-motion";
import { slide, scale } from "./anima";
import RevealLinks from "./RevealLinks";

const Lin = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      {/* <RevealLinks /> */}
      {/* <Link href={href}>{title}</Link> */}
    </motion.div>
  );
};
export default Lin;
