"use client";

import React from "react";
import styles from "@/styles/Pages.module.css";

interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({
  currentPage,
  totalPages,
}) => {
  return (
    <div className={styles.pageIndicator}>
      <span>{currentPage}</span>/<span>{totalPages}</span>
    </div>
  );
};

export default PageIndicator;
