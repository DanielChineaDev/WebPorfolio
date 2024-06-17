/* eslint-disable prettier/prettier */
// src/components/SocialLinks.tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem' }}>
      <a href="https://github.com" style={{ display: 'block', margin: '1rem 0' }}>
        <FaGithub size="1.5rem" color="#fff" />
      </a>
      <a href="https://linkedin.com" style={{ display: 'block', margin: '1rem 0' }}>
        <FaLinkedin size="1.5rem" color="#fff" />
      </a>
    </div>
  );
};

export default SocialLinks;
