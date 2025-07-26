import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "Python", level: 95, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { name: "Dart", level: 92, color: "bg-gradient-to-r from-green-500 to-green-700" },
    { name: "SQL", level: 93, color: "bg-gradient-to-r from-yellow-500 to-green-500" },
    { name: "HTML", level: 90, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "CSS", level: 94, color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { name: "JavaScript", level: 85, color: "bg-gradient-to-r from-green-600 to-green-800" },
  ];

  const tools = [
    "React", "Vue.js", "Angular", "Next.js", "Express.js", "Django", 
    "PostgreSQL", "Redis", "AWS", "Azure", "Git", "Figma"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-20 relative">
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
            <h2 className="heading-secondary mb-4">Skills & Expertise</h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "150px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-accent mx-auto"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Progress Bars */}
            <motion.div variants={itemVariants}>
              <h3 className="heading-accent mb-8">Technical Proficiency</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="glass-dark p-4 rounded-xl"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-poppins font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 1 + index * 0.1, duration: 1 }}
                        className={`h-full progress-neon rounded-full ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div variants={itemVariants}>
              <h3 className="heading-accent mb-8">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                    }}
                    className="card-neon p-4 rounded-xl text-center cursor-pointer float"
                  >
                    <div className="text-sm font-poppins font-medium">{tool}</div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="mt-8 glass p-6 rounded-xl"
              >
                <h4 className="font-poppins font-semibold text-lg mb-3 text-primary">
                  What Sets Me Apart
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Web development with modern frameworks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>3D graphics and interactive web experiences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Performance optimization and scalable architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                    <span>Building seamless cross-platform apps using Flutter and Dart</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};