import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "254 Elite Safaris",
      category: "web",
      tags: ["React", "Tailwind CSS", "Web3Forms"],
      image: "sf.jpg",
      description:
        "A responsive travel booking website for 254 Elite Safaris, featuring airport transfers, safari packages, and contact forms integrated with Web3Forms.",
      demoLink: "https://254elitesafaris.co.ke", // Replace with your actual domain if different
      caseStudyLink: "/projects/254-elite-safaris",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "frontend",
      tags: ["React", "Redux", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description:
        "A modern e-commerce platform with a responsive design, cart functionality, and payment integration.",
      demoLink: "#",

      caseStudyLink: "/projects/ecommerce-platform",
    },
    {
      id: 3,
      title: "Task Management App",
      category: "fullstack",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description:
        "A productivity tool for teams to manage projects, tasks, and deadlines with real-time updates.",
      demoLink: "#",

      caseStudyLink: "/projects/task-management",
    },
    {
      id: 4,
      title: "Ecovert initiative",
      category: "frontend",
      tags: ["React", "Tailwind CSS", "Sustainability"],
      image: "/ec1.jpg",
      description:
        "A sustainability-focused platform for Ecovert, showcasing eco-friendly Advertising solutions using aluminum and carton instead of plastic bottles.",
      demoLink: "#",

      caseStudyLink: "/projects/ecovert-Initiative",
    },
    {
      id: 5,
      title: "Healthcare Mobile App",
      category: "mobile",
      tags: ["React Native", "Firebase", "Expo"],
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description:
        "A healthcare app that helps users track medications, appointments, and health metrics.",
      demoLink: "#",

      caseStudyLink: "/projects/healthcare-app",
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      category: "fullstack",
      tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description:
        "A complete reservation system for restaurants with table management and customer notifications.",
      demoLink: "#",

      caseStudyLink: "/projects/restaurant-booking",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "mobile", label: "Mobile" },
    { value: "design", label: "Design" },
  ];

  return (
    <section id="projects" className="py-24 bg-background section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore my recent work and creative solutions to real-world
            challenges.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center mb-12" delay={0.2}>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category.value)}
                className={`px-5 py-2 rounded-full transition-all ${
                  filter === category.value
                    ? "bg-primary-blue text-white"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={index * 0.1}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="project-card bg-card rounded-xl overflow-hidden border border-border h-full flex flex-col"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white/90 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 rounded bg-secondary hover:bg-secondary/80 text-sm transition-colors"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 rounded bg-secondary hover:bg-secondary/80 text-sm transition-colors"
                        >
                          <FiGithub className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}

                      <a
                        href={project.caseStudyLink}
                        className="flex items-center gap-1 px-3 py-1 rounded bg-primary-blue text-white hover:bg-primary-blue/90 text-sm ml-auto transition-colors"
                      >
                        <FiCode className="w-4 h-4" />
                        <span>Case Study</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
