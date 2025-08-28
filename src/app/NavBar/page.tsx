"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTheme } from "../ThemeProvider/ThemeProvider";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-md px-4 py-3 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "shadow-lg dark:shadow-gray-800/30" : ""
    }`}>
      {/* الشعار */}
      <div className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
        <span className="bg-[#6B76DD] text-white p-1 rounded mr-2">A</span>
        Alaa Soudy
      </div>

      {/* قائمة الروابط للأجهزة الكبيرة */}
      <div className="hidden md:flex items-center space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-2 py-1 transition-colors duration-300 ${
              pathname === link.href 
                ? "text-[#6B76DD] font-medium" 
                : "text-gray-700 dark:text-gray-300 hover:text-[#6B76DD] dark:hover:text-[#6B76DD]"
            }`}
          >
            {link.name}
            {pathname === link.href && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#6B76DD]"></span>
            )}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center">
        {/* زر تبديل الوضع الداكن */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* زر القائمة للأجهزة الصغيرة */}
      <button
        className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* القائمة المنبثقة للأجهزة الصغيرة */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                  pathname === link.href
                    ? "bg-[#6B76DD] text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-full px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? (
                  <>
                    <FaSun className="mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <FaMoon className="mr-2" /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}