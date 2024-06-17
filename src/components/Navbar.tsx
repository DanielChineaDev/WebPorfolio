/* eslint-disable prettier/prettier */
// src/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', alignItems: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>DANIEL CHINEA</div>
      <div>
        <Link href="/about" style={{ margin: '0 1rem' }}>
          About
        </Link>
        <Link href="/portfolio" style={{ margin: '0 1rem' }}>
          Portfolio
        </Link>
        <Link href="/contact" style={{ margin: '0 1rem' }}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
