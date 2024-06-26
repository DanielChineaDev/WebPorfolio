// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import NextSection from "@/components/NextSection";
import ProjectsSection from "@/components/ProjectsSection";
import PageIndicator from "@/components/PageIndicator";
import styles from "@/styles/Pages.module.css";

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 4; // Total de secciones/páginas

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.clientHeight > scrollPosition
        ) {
          setCurrentPage(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className={styles.section} style={{ backgroundColor: "#282c34" }}>
        <HeroSection />
      </div>
      <div className={styles.section} style={{ backgroundColor: "#61dafb" }}>
        <NextSection />
      </div>
      <div className={styles.section}>
        <ProjectsSection />
      </div>
      <div className={styles.section} style={{ backgroundColor: "#20232a" }}>
        <h1>Sección 4</h1>
      </div>
      <PageIndicator currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
};

export default HomePage;
