import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/HeroSection.module.css";

const HeroSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`flex justify-center items-center`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/home.png"
            alt="Cover Image"
            width={840}
            height={818}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          {animate && (
            <>
              <h1 className={`${styles.title} font-bold`}>Mobile</h1>
              <h2 className={styles.developer}>Developer</h2>
              <h3 className={styles.subtitle}>Sensible to details</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
