import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  FiLayout,
  FiSmartphone,
  FiCode,
  FiServer,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: FiLayout,
      title: "UI/UX Design",
      description:
        "Creating intuitive, accessible, and visually appealing interfaces that enhance user experience.",
      color: "bg-secondary-blue/20",
      iconColor: "text-secondary-blue",
    },
    {
      icon: FiCode,
      title: "Frontend Development",
      description:
        "Building responsive and interactive websites using modern frameworks like React and Vue.",
      color: "bg-primary-blue/20",
      iconColor: "text-primary-blue",
    },
    {
      icon: FiServer,
      title: "Backend Integration",
      description:
        "Connecting your frontend applications to robust backend services and APIs.",
      color: "bg-primary-green/20",
      iconColor: "text-primary-green",
    },
    {
      icon: FiSmartphone,
      title: "Responsive Design",
      description:
        "Ensuring your website looks and functions perfectly on all devices and screen sizes.",
      color: "bg-secondary-green/20",
      iconColor: "text-secondary-green",
    },
    {
      icon: FiTrendingUp,
      title: "Performance Optimization",
      description:
        "Improving website speed and performance for better user experience and SEO rankings.",
      color: "bg-secondary-blue/20",
      iconColor: "text-secondary-blue",
    },
    {
      icon: FiShield,
      title: "Web Accessibility",
      description:
        "Making web applications accessible to everyone, including people with disabilities.",
      color: "bg-primary-blue/20",
      iconColor: "text-primary-blue",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30 section-padding">
      <div className="container mx-auto px-3">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">My Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Specialized solutions to help your business thrive in the digital
            landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="service-card h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={0.6}>
          <div className="bg-card border border-border p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Need a custom service?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing unique projects or specific
              requirements. Let's create something amazing together!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-md hover:bg-primary-blue/90 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
