import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Play } from "lucide-react";

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      title: "3D Portfolio Website",
      description: "Interactive 3D portfolio built with Three.js and React. Includes particle systems, 3D animations, and immersive user experience.",
      tech: ["React", "Three.js", "Framer Motion", "GLSL"],
      github: "#",
      live: "#",
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "#",
      live: "#",
      color: "from-green-500 to-teal-500",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics with beautiful visualizations.",
      tech: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      github: "#",
      live: "#",
      color: "from-orange-500 to-red-500",
      featured: false
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing capabilities, built using Python and modern AI frameworks.",
      tech: ["Python", "OpenAI", "Flask", "React"],
      github: "#",
      live: "#",
      color: "from-indigo-500 to-purple-500",
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "Comprehensive real estate platform with property listings, virtual tours, and advanced search functionality.",
      tech: ["Next.js", "MongoDB", "Cloudinary", "Mapbox"],
      github: "#",
      live: "#",
      color: "from-teal-500 to-blue-500",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Featured Projects</h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "180px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-accent mx-auto"
            />
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-neon p-8 rounded-xl group cursor-pointer perspective-1000"
              >
                <div className="relative">
                  <div className={`w-full h-48 bg-gradient-to-r ${project.color} rounded-lg mb-6 flex items-center justify-center`}>
                    <Play size={48} className="text-white opacity-75 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="font-poppins font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="heading-accent text-center mb-8">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card-neon p-6 rounded-xl group cursor-pointer"
                >
                  <div className={`w-full h-32 bg-gradient-to-r ${project.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <Play size={24} className="text-white opacity-75" />
                  </div>

                  <h4 className="font-poppins font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-muted-foreground text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
