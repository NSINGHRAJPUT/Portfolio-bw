"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex shadow-md items-center justify-between p-4">
      {/* Logo */}
      <div className="heading">
        <Link href="/">C M</Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-4 nav-link">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>

        <Link href="#contact">Contact</Link>
      </nav>

      {/* Hire Button */}
      <div className="hidden md:flex justify-center mt-4">
        <FaGithub className="text-black text-2xl md:text-3xl mr-2" />
        <FaTwitter className="text-black text-2xl md:text-3xl mr-2" />
        <FaLinkedin className="text-black text-2xl md:text-3xl mr-2" />
      </div>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          ☰
        </button>
        {isOpen && (
          <div className="absolute flex flex-col top-16 right-4 bg-white shadow-lg p-4 space-y-2">
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/faq" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <button className="button">Hire Me</button>
          </div>
        )}
      </div>
    </header>
  );
}
