import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";
import { FiUser, FiAward, FiCoffee, FiDownload } from "react-icons/fi";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const skills = [
    { name: "React JS", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "Tailwind CSS", percentage: 95 },
    { name: "UI/UX Design", percentage: 80 },
    { name: "Node.js", percentage: 75 },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-background section-padding"
      ref={ref}
    >
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get to know more about me, my experience, and what drives my passion
            for creating amazing digital experiences.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <AnimatedSection className="lg:w-2/5 order-2 lg:order-1">
            <div className="mb-10">
              <h3 className="text-2xl font-medium mb-4">Who I Am</h3>
              <p className="mb-4 text-muted-foreground">
                I'm a passionate frontend developer and designer with over vast
                knowledge a great experience in creating beautiful and functional
                user interfaces. I specialize in React JS and modern web
                technologies, with a strong focus on creating responsive and
                user-friendly experiences.
              </p>
              <p className="mb-4 text-muted-foreground">
                My approach combines creative design thinking with technical
                expertise to deliver digital products that not only look great
                but also provide exceptional user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-card rounded-lg border border-border shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mb-4">
                  <FiAward className="w-6 h-6 text-primary-blue" />
                </div>
                <h4 className="font-medium">Experience</h4>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center mb-4">
                  <FiUser className="w-6 h-6 text-primary-green" />
                </div>
                <h4 className="font-medium">Clients</h4>
                <p className="text-muted-foreground">20+ Worldwide</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-secondary-blue/20 rounded-full flex items-center justify-center mb-4">
                  <FiCoffee className="w-6 h-6 text-secondary-blue" />
                </div>
                <h4 className="font-medium">Projects</h4>
                <p className="text-muted-foreground">30+ Completed</p>
              </div>
            </div>

            <h3 className="text-2xl font-medium mb-4">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="mb-2 flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={controls}
                      variants={{
                        visible: {
                          width: `${skill.percentage}%`,
                          transition: { duration: 1, delay: 0.2 + index * 0.1 },
                        },
                      }}
                    ></motion.div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-10">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume <FiDownload />
              </motion.a>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:w-3/5 order-1 lg:order-2" delay={0.2}>
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="ll.jpg"
                  alt="Professional portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary-green rounded-lg z-0"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
