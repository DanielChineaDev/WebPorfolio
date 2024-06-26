"use client";

import React from "react";
import styles from "@/styles/PageIndicator.module.css";

interface PageIndicatorProps {
  currentPage: number;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage }) => {
  return (
    <div className={styles.pageIndicator}>
      <span>0{currentPage}</span>
    </div>
  );
};

export default PageIndicator;
