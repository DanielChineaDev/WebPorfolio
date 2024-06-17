/* eslint-disable prettier/prettier */
// src/components/HeroSection.tsx
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <div>
        <Image
          src="/images/home1.jpg"
          alt="Profile Picture"
          width={1920}
          height={1080}
          style={{ borderRadius: '50%' }}
        />
        <h1 style={{ fontSize: '4rem', margin: '1rem 0' }}>MOBILE DEVELOPER</h1>
        <p style={{ fontSize: '1.5rem' }}>Sensible to details</p>
      </div>
    </div>
  );
};

export default HeroSection;
