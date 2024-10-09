"use client";
import styles from "./Pan.module.css";
import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import img from "../images/1.jpeg";
import img2 from "../images/2.png";
import img3 from "../images/3.jpeg";
import img4 from "../images/7.png";
const projects = [
  {
    title: "Ease",
    src: img,
    color: "#000000",
  },
  {
    title: "BUSA App",
    src: img2,
    color: "#8C8C8C",
  },
  {
    title: "Silencio",
    src: img3,
    color: "#EFE8D3",
  },
  {
    title: "MohGas",
    src: img4,
    color: "#706D63",
  },
];

const Pan = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.My}>MY WORK</div>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
};
export default Pan;
