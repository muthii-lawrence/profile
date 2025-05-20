import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-bold text-primary-blue"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lawrence.Dev
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`relative font-medium hover:text-primary-blue transition-colors ${
                activeSection === link.href.substring(1)
                  ? "text-primary-blue"
                  : "text-foreground"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary-blue"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </motion.div>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-muted transition-colors mr-2 md:mr-0"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <FiSun className="w-5 h-5" />
          ) : (
            <FiMoon className="w-5 h-5" />
          )}
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4 bg-background/95 backdrop-blur-md">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`block py-2 text-lg ${
                activeSection === link.href.substring(1)
                  ? "text-primary-blue font-medium"
                  : "text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
