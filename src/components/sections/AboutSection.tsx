import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Rocket } from "lucide-react";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const timelineItems = [
    {
      year: "2023-2027",
      title: "Bachelor's in Computer Science",
      description: "Prefinal year Computer Science Engineering Student, Rajalakshmi Institute of Technology",
      icon: <Code2 size={20} />,
    },
    {
      year: "2023",
      title: "Higher Secondary Education",
      description: "Obtained Higher Secondary qualification with emphasis on Science and Mathematics, State Board.",
      icon: <Palette size={20} />,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-secondary mb-4">About Me</h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "120px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-secondary mx-auto"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div variants={itemVariants}>
              <div className="glass-dark p-8 rounded-2xl">
                <h3 className="heading-accent mb-6">Hello! I'm Kaaviya</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate web developer with a strong commitment to crafting seamless and engaging digital experiences. I focus on building clean, user-centric interfaces and bringing creative ideas to life through thoughtful development.

With an interest in cross-platform development, I also work on FLUTTER, creating consistent and high-quality experiences across both web and mobile platforms. I value clean architecture, intuitive design, and performance-driven solutions.

Driven by curiosity and a growth mindset, I’m always striving to improve and deliver meaningful projects.
                </p>
                
              </div>
            </motion.div>
            {/* Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="heading-accent mb-8">My Journey</h3>
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                    className="card-neon p-6 rounded-xl"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="font-poppins font-semibold text-lg mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};