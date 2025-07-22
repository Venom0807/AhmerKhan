// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "portfolio", label: "Portfolio" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 md:px-20 py-6 flex justify-between items-center text-[#c2926b] transition-all duration-300 ${
        isScrolled ? "bg-[#311e25] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="text-4xl font-bold">AHMER.</div>
      {/* Desktop Nav Links */}
      <ul className="hidden min-[889px]:flex gap-6 text-lg">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white cursor-pointer"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Hamburger Icon */}
      <button
        className="block min-[889px]:hidden focus:outline-none z-50"
        aria-label="Open menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <svg width="32" height="32" fill="none" stroke="#c2926b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="border border-[#c2926b] px-10 py-3 text-sm hover:bg-[#c2926b] hover:text-black transition-all min-[889px]:block hidden cursor-pointer"
      >
        Let’s Talk
      </Link>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#311e25] bg-opacity-95 flex flex-col items-center justify-center gap-8 text-2xl text-[#c2926b] min-[889px]:hidden z-40 transition-all">
          <button
            className="absolute top-8 right-8 text-3xl"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-white transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="border border-[#c2926b] px-10 py-3 text-sm hover:bg-[#c2926b] hover:text-black transition-all cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Let’s Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
