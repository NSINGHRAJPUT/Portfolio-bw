// components/Footer.js

import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-8 bg-black text-white">
      {/* Contact Info */}
      <div className="flex flex-col items-start space-y-2">
        <h2 className="text-lg font-bold">GET IN TOUCH</h2>
        <div className="flex items-center">
          <MdEmail className="mr-2" />
          <a href="mailto:kr12@hotmail.com">kr12@hotmail.com</a>
        </div>
        <div className="flex items-center">
          <MdPhone className="mr-2" />
          <a href="tel:717-555-1234">717-555-1234</a>
        </div>
      </div>

      {/* Contact Button */}
      <button className="button w-32 mt-4 md:mt-0">CONTACT ME</button>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="text-xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-xl">
          <FaFacebook />
        </a>
        <a href="#" className="text-xl">
          <FaTwitter />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-4 md:mt-0">
        <p>Copyright © 2019 KR</p>
      </div>
    </footer>
  );
}
