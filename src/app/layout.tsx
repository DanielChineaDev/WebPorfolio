// src/app/layout.tsx
"use client";


import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import ParticlesBackground from "@/components/ParticlesBackground";

import "@/styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>José Daniel Chinea Marrero - Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </head>
      <body>
        <Navbar />
        <SocialLinks />
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
};

export default Layout;
