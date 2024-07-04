// components/Footer.js

import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-8 bg-black text-white">
      {/* Contact Info */}
      <div className="flex flex-col items-start space-y-2">
        <h2 className="text-lg font-bold">GET IN TOUCH</h2>
        <div className="flex items-center">
          <MdEmail className="mr-2" />
          <Link href="mailto:nsinghrajputx@gmail.com" className=" w-fit">
            nsinghrajputx@gmail.com
          </Link>
        </div>
        <div className="flex items-center">
          <MdPhone className="mr-2" />
          <a href="tel:9752661779">9752661779</a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <Link href="https://github.com/NSINGHRAJPUT?tab=repositories">
          <FaGithub className="text-white text-2xl md:text-3xl mr-2" />
        </Link>

        <Link href="https://www.linkedin.com/in/n-s-r/">
          <FaLinkedinIn className="text-white text-2xl md:text-3xl mr-2" />
        </Link>
      </div>

      {/* Copyright */}
      <div className="mt-4 md:mt-0">
        <p>Copyright © 2024 NSR</p>
      </div>
    </footer>
  );
}
