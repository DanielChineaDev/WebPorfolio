"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/PageIndicator.module.css";

interface PageIndicatorProps {
  currentPage: number;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage }) => {
  const [displayedPage, setDisplayedPage] = useState(currentPage);
  const [fadeClass, setFadeClass] = useState(styles.fadeIn);

  useEffect(() => {
    setFadeClass(styles.fadeOut);
    const timer = setTimeout(() => {
      setDisplayedPage(currentPage);
      setFadeClass(styles.fadeIn);
    }, 500); // Duración de la animación fadeOut

    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className={`${styles.pageIndicator}`}>
      <span>0</span>
      <span className={`${fadeClass}`}>{displayedPage}</span>
    </div>
  );
};

export default PageIndicator;
