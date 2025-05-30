import React from "react";
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-12 pb-3 px-4">
      <div className="container mx-auto px-0">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary-blue mb-2">
              Lawrence
            </h3>
            <p className="text-muted-foreground max-w-md">
              Creating beautiful, functional web experiences with modern
              technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {[
                { icon: FiGithub, href: "https://github.com/muthii-lawrence" },
                {
                  icon: FiLinkedin,
                  href: "https://www.linkedin.com/in/lawrence-murage-5a4bb4232/",
                },
                { icon: FiTwitter, href: "https://x.com/murage_lao" },
                {
                  icon: FiInstagram,
                  href: "https://www.instagram.com/murage_lao",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#hero"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
            >
              Back to top{" "}
              <FiArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </motion.a>
          </div>
        </div>

        <div className="pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Lawrence Murage. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
