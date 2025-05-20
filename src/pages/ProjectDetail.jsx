import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import AnimatedSection from "../components/AnimatedSection";
import { projects } from "../data/projects";
import { useToast } from "@/components/ui/use-toast";

const ProjectDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Find the project that matches the ID from the URL
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);

    // If project is not found, show error toast
    if (!project) {
      toast({
        title: "Project not found",
        description: "The requested project could not be found.",
        variant: "destructive",
      });
    }
  }, [id, project, toast]);

  // If project not found, show a simple message
  if (!project) {
    return (
      <div className="bg-background min-h-screen pt-24 flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue/90 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  // Sections to render
  const sections = [
    {
      title: "Project Overview",
      content: project.description,
      delay: 0.1,
    },
    {
      title: "Challenges",
      content: project.challenges,
      delay: 0.2,
    },
    {
      title: "Solutions & Approach",
      content: project.solutions,
      delay: 0.3,
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-green text-white py-20">
        <div className="container mx-auto px-6">
          <Link
            to={{ pathname: "/", hash: "#projects" }}
            className="flex items-center gap-2 text-red-300"
          >
            <IoMdArrowRoundBack className="text-white" />
            Back to Portfolio
          </Link>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/20 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Featured Image */}
          <AnimatedSection className="mb-16">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {sections.map((section, index) => (
                <AnimatedSection
                  key={index}
                  className="mb-12"
                  delay={section.delay}
                >
                  <h2 className="text-2xl font-semibold mb-4">
                    {section.title}
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    {section.content.split("\n").map((paragraph, i) => (
                      <p key={i} className="mb-4 text-muted-foreground">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </AnimatedSection>
              ))}

              {/* Project Gallery */}
              <AnimatedSection className="mb-12" delay={0.4}>
                <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <motion.div
                      key={index}
                      className="rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={img}
                        alt={`${project.title} gallery ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection className="sticky top-24" delay={0.5}>
                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-medium mb-4">
                    Project Information
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Client
                      </span>
                      <p className="font-medium">{project.client}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Year
                      </span>
                      <p className="font-medium">{project.year}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Role
                      </span>
                      <p className="font-medium">{project.role}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue/90 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />

                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">
                    Need a similar project?
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    I'm available for freelance projects. Let's work together to
                    create something amazing.
                  </p>
                  <Link
                    to="/#contact"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue/90 transition-colors"
                  >
                    Contact Me
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
