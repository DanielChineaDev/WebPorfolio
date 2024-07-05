import React from "react";
import Image from "next/image";
import styles from "@/styles/ContactSection.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactCard}>
        <div className={styles.left}>
          <Image
            src="/images/snazzy-image.png"
            alt="Cover Image"
            width={840}
            height={818}
            className={styles.image}
          />
          {/*           <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.8367332644925!2d-16.254611484876637!3d28.463628982477327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cc96a2d5d893%3A0x8d3b2c5c15edfd8a!2sSanta%20Cruz%20de%20Tenerife%2C%20Spain!5e0!3m2!1sen!2sus!4v1626794622749!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div> */}
        </div>
        <div className={styles.right}>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contacto@josedanielchinea.com">
              contacto@josedanielchinea.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/danielchinea"
              target="_blank"
              rel="noopener noreferrer"
            >
              danielchinea
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/danielchinea"
              target="_blank"
              rel="noopener noreferrer"
            >
              danielchinea
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
