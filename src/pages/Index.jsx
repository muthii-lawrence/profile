import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ThemeContext } from "../components/ThemeProvider";

const Index = () => {
  const { darkMode, setDarkMode } = React.useContext(ThemeContext);
  const location = useLocation();

  // 🔽 Scroll to the hash section (e.g. #projects) if it exists
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Lawrence Murage | Professional Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio website showcasing frontend development and design projects."
        />
        <meta
          name="keywords"
          content="frontend developer, UI/UX designer, react developer, web developer portfolio"
        />
      </Helmet>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Experience />
      {/* Add an id here */}
      <div id="projects">
        <Projects />
      </div>
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
