import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiAlertCircle } from "react-icons/fi";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <motion.div
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-primary-blue mb-8 inline-block"
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
        >
          <FiAlertCircle className="w-20 h-20 mx-auto" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-md hover:bg-primary-blue/90 transition-colors"
          >
            <FiHome className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
