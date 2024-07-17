// components/Footer.js

import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-8 bg-black text-white">
      {/* Contact Info */}
      <div className="flex flex-col items-start space-y-2">
        <h2 className="text-lg font-bold">GET IN TOUCH</h2>
        <div className="flex items-center">
          <MdEmail className="mr-2" />
          <a href="mailto:nsinghrajputx@gmail.com" className="text-white">
            nsinghrajputx@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <MdPhone className="mr-2" />
          <a href="tel:9752661779" className="text-white">
            9752661779
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <Link
          href="https://github.com/NSINGHRAJPUT?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white text-2xl md:text-3xl mr-2" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/n-s-r/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-white text-2xl md:text-3xl mr-2" />
        </Link>
      </div>

      {/* Copyright */}
      <div className="mt-4 md:mt-0">
        <p className="text-white">Copyright © 2024 NSR</p>
      </div>
    </footer>
  );
};

export default Footer;
