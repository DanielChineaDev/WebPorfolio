"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/ProjectsSection.module.css";

interface Project {
  title: string;
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "STUDIO",
    link: "https://github.com/usuario/proyecto1",
    color: "#5A92F2",
  },
  {
    title: "WEB",
    link: "https://github.com/usuario/proyecto2",
    color: "#3D5B3F",
  },
  {
    title: "DESIGN",
    link: "https://github.com/usuario/proyecto3",
    color: "#E44B6E",
  },
  {
    title: "DEVELOPING",
    link: "https://github.com/usuario/proyecto4",
    color: "#F5A052",
  },
  {
    title: "TOOLS",
    link: "https://github.com/usuario/proyecto5",
    color: "#53B67E",
  },
  {
    title: "INTERACTIVE",
    link: "https://github.com/usuario/proyecto6",
    color: "#C281F4",
  },
];

const ProjectsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.projectGrid} ref={ref}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} animate__animated ${inView ? "animate__fadeInUp" : ""}`}
              style={{ backgroundColor: project.color }}
            >
              <h3>{project.title}</h3>
{/*               <a href={project.link} target="_blank" rel="noopener noreferrer">
                GitHub
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
