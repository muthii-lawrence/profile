import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { FiCode, FiLayout, FiDatabase, FiTool } from "react-icons/fi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FiCode,
      iconColor: "text-primary-blue",
      bgColor: "bg-primary-blue/10",
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React", level: 92 },
        { name: "Vue.js", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "SASS/SCSS", level: 88 },
      ],
    },
    {
      title: "Design",
      icon: FiLayout,
      iconColor: "text-primary-green",
      bgColor: "bg-primary-green/10",
      skills: [
        { name: "Figma", level: 90 },
        { name: "UI/UX Design", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Sketch", level: 75 },
        { name: "Responsive Design", level: 95 },
        { name: "Design Systems", level: 88 },
      ],
    },
    {
      title: "Backend",
      icon: FiDatabase,
      iconColor: "text-secondary-blue",
      bgColor: "bg-secondary-blue/10",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 78 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      icon: FiTool,
      iconColor: "text-secondary-green",
      bgColor: "bg-secondary-green/10",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Webpack", level: 78 },
        { name: "Jest/RTL", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Docker", level: 65 },
        { name: "Agile/Scrum", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="mt-4 text-lg font-bold text-muted-foreground">
            My technical expertise and the technologies I work with.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.2}>
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mr-4`}
                  >
                    <category.icon
                      className={`w-6 h-6 ${category.iconColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-blue to-primary-green"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center" delay={0.6}>
          <h3 className="text-xl font-semibold mb-6">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "TypeScript",
              "Three.js",
              "React Native",
              "AWS",
              "TensorFlow.js",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-muted rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
