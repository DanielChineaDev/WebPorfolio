/* eslint-disable prettier/prettier */
// src/components/SocialLinks.tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '2.5rem', zIndex: 3 }}>
      <a href="https://github.com/DanielChineaDev" style={{ display: 'block', margin: '1rem 0' }}>
        <FaGithub size="2rem" color="#fff" />
      </a>
      <a href="https://www.linkedin.com/in/josedanielchinea/" style={{ display: 'block', margin: '1rem 0' }}>
        <FaLinkedin size="2rem" color="#fff" />
      </a>
    </div>
  );
};

export default SocialLinks;
