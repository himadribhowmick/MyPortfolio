import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = ['Home', 'About Me', 'Services', 'Projects', 'Testimonials', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll to section with offset
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        
        {/* Logo */}
        <a href="#home">
          <img
            key={theme}
            src={theme === "dark" ? "/images/logo.png" : "/images/logo.png"}
            alt="Logo"
            className="w-25 h-25 md:w-25 md:h-25 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((n) => (
            <button
              key={n}
              onClick={() => handleScroll(n.toLowerCase().replace(/\s+/g, ''))}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
            >
              {n}
            </button>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/images/cv.pdf"
            className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-500 hover:text-white transition-colors duration-200"
          >
            Download CV
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-200 transition-colors duration-200"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 border-t dark:border-gray-700 transition-colors duration-300">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((n) => (
              <button
                key={n}
                onClick={() => handleScroll(n.toLowerCase().replace(/\s+/g, ''))}
                className="py-2 text-base text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
              >
                {n}
              </button>
            ))}
            <a
              href="/images/cv.pdf"
              className="block mt-2 py-2 px-3 rounded bg-orange-500 text-white text-center hover:bg-orange-600 transition-colors duration-200"
            >
              Download CV
            </a>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mt-3 py-2 px-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200 w-full text-center"
            >
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
