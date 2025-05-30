import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Web Designer",
      company: "Creative  Studio",
      location: "Washington",
      period: "2025",
      description:
        "Created user interfaces for web and mobile applications. Conducted user research and testing to improve product usability. Designed wireframes, prototypes, and visual assets for client projects.",
    },
    {
      title: "Web Developer",
      company: "StudioPXL Studio",
      location: "Iran",
      period: "2025",
      description:
        "Developed user interfaces for StudioPXL applications. Implemented responsive designs and interactive UI components. Designed wireframes, prototypes, and visual assets according to te client needs.",
    },
    {
      title: "Frontend Developer",
      company: "Digifunzi",
      location: "Thika, Kenya",
      period: "2022 - 2023",
      description:
        "Developed and maintained client websites using React and Vue.js. Collaborated with designers to implement responsive designs and interactive UI components. Managed a team of junior developers.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30 section-padding">
      <div className="container mx-auto px-3">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">My Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey and the companies I've had the pleasure to
            work with.
          </p>
        </AnimatedSection>

        <div className="timeline-container max-w-4xl mx-auto mt-20">
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              className={`timeline-item ${
                index === experiences.length - 1 ? "pb-0" : ""
              }`}
              delay={index * 0.2}
            >
              <motion.div
                className="bg-card shadow-md rounded-lg p-6 border border-border"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <h4 className="text-lg text-primary-blue mb-1">
                      {exp.company}
                    </h4>

                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={0.6}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-blue/10 text-primary-blue">
            <FiBriefcase className="w-5 h-5" />
            <span className="font-medium">Open to new opportunities</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;
