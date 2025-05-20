import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = {
      access_key: "1beeec7e-d791-4d74-8462-3bf159a93b28",
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible.",
          duration: 5000,
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Submission failed!", {
          description: result.message || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Error sending message", {
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      content: "lawrence@254elitesafaris.co.ke",
      link: "mailto:lawrence@254elitesafaris.co.ke",
    },
    {
      icon: FiPhone,
      title: "Phone",
      content: "+254 (795) 684 016",
      link: "tel:+254795684016",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <AnimatedSection className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex p-6 bg-card rounded-xl border border-border hover:border-primary-blue transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </motion.a>
              ))}

              <div className="p-6 bg-card rounded-xl border border-border mt-6">
                <h3 className="font-medium mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {[
                    {
                      name: "linkedin",
                      url: "https://www.linkedin.com/in/lawrence-murage-5a4bb4232",
                    },
                    {
                      name: "github",
                      url: "https://github.com/muthii-lawrence",
                    },
                    {
                      name: "instagram",
                      url: "https://www.instagram.com/murage_lao",
                    },
                    {
                      name: "twitter",
                      url: "https://x.com/murage_lao",
                    },
                  ].map((platform) => (
                    <motion.a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Connect on ${platform.name}`}
                    >
                      <i className={`fab fa-${platform.name}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="checkbox" name="botcheck" className="hidden" />
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Full Names"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="input-field resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-white ${
                  loading
                    ? "bg-primary-blue/70"
                    : "bg-primary-blue hover:bg-primary-blue/90"
                } transition-colors w-full justify-center`}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? "Sending..." : "Send Message"}
                <FiSend
                  className={`w-4 h-4 ${loading ? "animate-bounce" : ""}`}
                />
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
