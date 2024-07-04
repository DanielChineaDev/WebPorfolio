"use client";

import { ReactNode, useState } from "react";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import ParticlesBackground from "@/components/ParticlesBackground";

import "@/styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleSectionChange = (sectionIndex: number) => {
    setCurrentSection(sectionIndex);
  };

  return (
    <html lang="en">
      <head>
        <title>José Daniel Chinea Marrero - Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </head>
      <body>
        <Navbar onSectionChange={handleSectionChange} />
        <SocialLinks />
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
};

export default Layout;
