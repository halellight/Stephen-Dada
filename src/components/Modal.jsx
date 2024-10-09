import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import styles from "./Modal.module.css";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const modalContainerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  useEffect(() => {
    // Move Container
    const xMoveContainer = gsap.quickTo(modalContainerRef.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainerRef.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    // Move cursor
    const xMoveCursor = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    // Move cursor label
    const xMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainerRef}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img src={`${src}`} width={300} height={0} alt="image" />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursorRef}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabelRef}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
