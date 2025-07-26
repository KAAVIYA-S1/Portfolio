import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Code } from "lucide-react";

export const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:kaaviyasubash2@gmail.com",
      icon: <Mail size={20} />,
      color: "from-red-500 to-pink-500",
    },
    {
      name: "GitHub",
      url: "https://github.com/KAAVIYA-S1",
      icon: <Github size={20} />,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kaaviyasubash27",
      icon: <Linkedin size={20} />,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "SkillRack",
      url: "http://www.skillrack.com/profile/474916/4424ddeac4ddb78178f559691163a987c1d27d2b",
      icon: <Code size={20} />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="heading-secondary mb-6">Let's Connect!</h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "120px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-primary mx-auto mb-8"
            />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can work together
              to create something amazing. I'm always excited about new opportunities
              and interesting projects.
            </p>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <motion.a
              href="mailto:kaaviyasubash2@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon inline-flex items-center space-x-3 px-12 py-4 rounded-full font-poppins font-semibold text-white text-lg"
            >
              <Mail size={24} />
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>

          {/* My Profiles (Social + SkillRack) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="heading-accent mb-8">My Profiles</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-transform`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

