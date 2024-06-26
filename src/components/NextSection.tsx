import React from "react";
import styles from "@/styles/NextSection.module.css";

const NextSection: React.FC = () => {
  return (
    <div className={`section ${styles.nextSection}`}>
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-4xl">Welcome to the Next Section</h2>
      </div>
    </div>
  );
};

export default NextSection;
