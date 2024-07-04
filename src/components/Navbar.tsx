"use client";
import React from "react";
import Image from "next/image";

interface NavbarProps {
  onSectionChange: (sectionIndex: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSectionChange }) => {
  return (
    <nav className="fixed top-0 left-0 w-full text-white z-50 flex justify-between items-center p-10">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/logotipo.png"
          alt="Logo"
          width={40}
          height={40}
        />
        <span
          onClick={() => onSectionChange(0)}
          style={{ marginLeft: "1rem", fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer" }}
        >
          DANIEL CHINEA
        </span>
      </div>
      <div className="uppercase tracking-widest text-xl">
        <span
          onClick={() => onSectionChange(1)}
          style={{ margin: "0 1rem", cursor: "pointer" }}
        >
          About me
        </span>
        <span
          onClick={() => onSectionChange(2)}
          style={{ margin: "0 3rem", cursor: "pointer" }}
        >
          Projects
        </span>
        <span
          onClick={() => onSectionChange(3)}
          style={{ margin: "0 3rem 0 0", cursor: "pointer" }}
        >
          Contact
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
