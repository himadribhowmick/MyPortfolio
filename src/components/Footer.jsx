import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
           {/* Logo  */}
        <a href="#home">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="w-25 h-25 md:w-25 md:h-25 object-contain" 
          />
        </a>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-700 dark:text-gray-300 text-sm">
          <a href="#home" className="hover:text-orange-500 dark:hover:text-orange-400">Home</a>
          <a href="#aboutme" className="hover:text-orange-500 dark:hover:text-orange-400">About Me</a>
          <a href="#services" className="hover:text-orange-500 dark:hover:text-orange-400">Services</a>
          <a href="#projects" className="hover:text-orange-500 dark:hover:text-orange-400">Projects</a>
          <a href="#testimonials" className="hover:text-orange-500 dark:hover:text-orange-400">Testimonials</a>
          <a href="#contact" className="hover:text-orange-500 dark:hover:text-orange-400">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-700 dark:text-gray-300 text-lg">
          <a href="https://www.facebook.com/himadrihimuofficialpage/" className="hover:text-orange-500 dark:hover:text-orange-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-orange-500 dark:hover:text-orange-400"><FaTwitter /></a>
          <a href="https://www.instagram.com/himadri_himu55/" className="hover:text-orange-500 dark:hover:text-orange-400"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/himadri-bhowmick-89b7b525b/" className="hover:text-orange-500 dark:hover:text-orange-400"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-gray-700 dark:bg-gray-800 text-gray-200 dark:text-gray-300 text-center py-4 text-sm transition-colors duration-300">
        © 2023 <span className="text-orange-500 font-semibold">Mumair</span> All Rights Reserved, Inc.
      </div>
    </footer>
  );
}
