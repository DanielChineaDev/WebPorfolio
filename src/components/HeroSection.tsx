import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import styles from "@/styles/HeroSection.module.css";

const HeroSection: React.FC = () => {
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
          <h1 className={`${styles.title} font-bold`}>
            <Typewriter
              words={["Mobile"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <h2 className={styles.developer}>
            <Typewriter
              words={["Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </h2>
          <h3 className={styles.subtitle}>
            <Typewriter
              words={["Sensible to details"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={7000}
            />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
