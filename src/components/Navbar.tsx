/* eslint-disable prettier/prettier */
// src/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full text-white z-50 flex justify-between items-center p-10">
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>DANIEL CHINEA</div>
      <div className={`uppercase tracking-widest text-xl`}>
        <Link href="/about" style={{ margin: '0 3rem' }}>
          About
        </Link>
        <Link href="/portfolio" style={{ margin: '0 3rem' }}>
          Portfolio
        </Link>
        <Link href="/contact" style={{ margin: '0 0 0 3rem' }}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
