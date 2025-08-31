import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // For Twitter/X

const Footer = () => {
  return (
    <footer className="bg-[#f3f3f9] border-t">
      <div className="container mx-auto px-6 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-200 transition"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-200 transition"
          >
            <FaXTwitter size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-200 transition"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-200 transition"
          >
            <FaYoutube size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-200 transition"
          >
            <FaFacebookF size={16} />
          </a>
        </div>

        {/* Right Side - Links */}
        <div className="flex space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:underline">
            Legal Notice
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center  text-sm text-gray-700 ">
        Copyright 2024 © Contlink, All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
