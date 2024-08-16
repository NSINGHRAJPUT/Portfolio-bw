"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex shadow-md items-center justify-between p-4">
      {/* Logo */}
      <div className="heading">
        <Link href="/">
          <Image src={logo} width={60} height={60} alt="logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-4 nav-link">
        <Link href="#home" className="hover:text-yellow-500">
          Home
        </Link>
        <Link href="#about" className="hover:text-yellow-500">
          About
        </Link>
        <Link href="#projects" className="hover:text-yellow-500">
          Projects
        </Link>
        <Link href="#skills" className="hover:text-yellow-500">
          Skills
        </Link>
        <Link href="#contact" className="hover:text-yellow-500">
          Contact
        </Link>
      </nav>

      {/* Social Media Icons */}
      <div className="hidden md:flex justify-center items-center">
        <Link
          href="https://github.com/NSINGHRAJPUT?tab=repositories"
          target="_blank"
        >
          <FaGithub
            className="text-black hover:text-yellow-500 text-2xl md:text-3xl mr-2"
            aria-label="GitHub Profile"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/n-s-r/" target="_blank">
          <FaLinkedin
            className="text-black hover:text-yellow-500 text-2xl md:text-3xl mr-2"
            aria-label="LinkedIn Profile"
          />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        {isOpen && (
          <div className="absolute flex flex-col top-16 right-4 bg-white shadow-lg p-4 space-y-2">
            <Link href="#home" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link
              href="mailto:nsinghrajputx@gmail.com"
              className="button-opposite w-fit"
              target="_blank"
            >
              HIRE ME
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
