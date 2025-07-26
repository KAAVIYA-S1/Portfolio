import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";

export const CertificationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      date: "2025",
      color: "from-orange-500 to-red-500",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_LSTeJeR2Ft8hiC3qp_1752723579307_completion_certificate.pdf"
    },
    {
      name: "Cybersecurity Analyst Job Simulation",
      issuer: "Tata",
      date: "2025",
      color: "from-pink-500 to-pink-500",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_LSTeJeR2Ft8hiC3qp_1752066710101_completion_certificate.pdf"
    },
    {
      name: "Technology Apparenticeship Job Simulation",
      issuer: "Accenture UK",
      date: "2025",
      color: "from-yellow-500 to-yellow-500",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/EzKFRQ2oEA87PPjsL_ovyvuqqNRQKBjNxbj_LSTeJeR2Ft8hiC3qp_1752090127056_completion_certificate.pdf"
    },
    {
      name: "Python Programming Course",
      issuer: "SkillRack",
      date: "2025",
      color: "from-blue-500 to-cyan-500",
      link: "https://www.skillrack.com/cert/579674/JCU"
    },
    {
      name: "Java",
      issuer: "Sololearn",
      date: "2024",
      color: "from-purple-500 to-pink-500",
      link: "https://www.sololearn.com/certificates/CC-BEY7ZF1U"
    },
    {
      name: "Vector Search Fundamentals",
      issuer: "MongoDB",
      date: "2025",
      color: "from-red-500 to-red-500",
      link: "https://www.sololearn.com/certificates/CC-BEY7ZF1U"
    },
    {
      name: "C++",
      issuer: "Sololearn",
      date: "2024",
      color: "from-green-500 to-teal-500",
      link: "https://www.sololearn.com/certificates/CC-N31JMTWG"
    },
    {
      name: "Computer Communications and Networks",
      issuer: "Saylor Academy",
      date: "2025",
      color: "from-orange-500 to-orange-500",
      link: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1750083820/3341698604KS.pdf"
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
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
            <h2 className="heading-secondary mb-4">Certifications</h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "150px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-primary mx-auto"
            />
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-neon p-6 rounded-xl cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center`}>
                    <Award size={24} className="text-white" />
                  </div>
                  <motion.a
                    href={cert.link}
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>

                <h3 className="font-poppins font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-medium text-accent">{cert.issuer}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${cert.color} mt-4 origin-left`}
                />
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="font-poppins font-semibold text-lg mb-3 text-primary">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in staying current with the latest technologies and best practices.
                These certifications represent my commitment to professional growth and
                expertise in new technologies, modern development frameworks, and database management.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};