"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import NextSection from "@/components/NextSection";
import ProjectsSection from "@/components/ProjectsSection";
import PageIndicator from "@/components/PageIndicator";
import styles from "@/styles/page.module.css";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4; // Total de secciones/páginas
  let isThrottled = false;

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isThrottled) return;

      if (event.deltaY > 0 || event.deltaX > 0) {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
      } else {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
      }

      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 800); // Aumenta el tiempo de throttling para evitar cambios rápidos
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [totalPages]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.section} ${currentPage === 0 ? styles.visible : styles.hidden} ${styles.section0}`}
      >
        <HeroSection />
      </div>
      <div
        className={`${styles.section} ${currentPage === 1 ? styles.visible : styles.hidden} ${styles.section1}`}
      >
        <NextSection />
      </div>
      <div
        className={`${styles.section} ${currentPage === 2 ? styles.visible : styles.hidden} ${styles.section2}`}
      >
        <ProjectsSection />
      </div>
      <div
        className={`${styles.section} ${currentPage === 3 ? styles.visible : styles.hidden} ${styles.section3}`}
      >
        <h1>Sección 4</h1>
      </div>
      <PageIndicator currentPage={currentPage + 1} />
    </div>
  );
};

export default Home;
