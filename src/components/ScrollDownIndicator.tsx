"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/ScrollDownIndicator.module.css";

interface ScrollDownIndicatorProps {
  currentPage: number;
  totalPages: number;
  onScrollClick: () => void;
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({ currentPage, totalPages, onScrollClick }) => {
  const isLastPage = currentPage === totalPages - 1;
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("scroll down");
  const [showArrowTop, setShowArrowTop] = useState(false);
  const [showArrowBottom, setShowArrowBottom] = useState(true);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setText(isLastPage ? "Tap to top" : "scroll down");
      setShowArrowTop(isLastPage);
      setShowArrowBottom(!isLastPage);
      setVisible(true);
    }, 500); // Duración de la animación fadeOut

    return () => clearTimeout(timer);
  }, [isLastPage]);

  return (
    <div
      className={styles.scrollDownContainer}
      onClick={onScrollClick}
      style={{ cursor: isLastPage ? 'pointer' : 'auto' }} // Cambiar el cursor a pointer si es la última página
    >
      {showArrowTop && <div className={`${styles.arrowTop} ${!visible ? styles.fadeOut : styles.fadeIn}`}></div>}
      <div className={`${styles.scrollText} ${!visible ? styles.fadeOut : styles.fadeIn}`}>
        {text}
      </div>
      {showArrowBottom && <div className={`${styles.arrowBottom} ${!visible ? styles.fadeOut : styles.fadeIn}`}></div>}
    </div>
  );
};

export default ScrollDownIndicator;
