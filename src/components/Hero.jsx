import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden hero-gradient"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-green/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg font-medium text-white/80 mb-4">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Lawrence Murage
              </h1>
              <div className="text-xl md:text-2xl text-white/90 font-medium mb-6 h-8">
                <ReactTyped
                  strings={[
                    "Frontend Developer",
                    "UX Designer",
                    "Creative Thinker",
                    "Problem Solver",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  backDelay={2000}
                  loop
                />
              </div>
              <p className="text-white text-lg mb-8 max-w-lg">
                I create beautiful, functional, and responsive web experiences
                focused on user experience and business goals.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  className="px-8 py-3 rounded-full bg-white text-primary-blue font-medium flex items-center gap-2 transition-all hover:gap-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <FiArrowRight />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  className="px-8 py-3 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white/10 flex items-center gap-2 transition-all hover:gap-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Resume
                  <FiDownload />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                <img
                  src="ll.jpg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-green flex items-center justify-center">
                  <span className="text-white font-bold">10+</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-1">
            <div className="w-2 h-2 rounded-full bg-white animate-bounce-slow"></div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
