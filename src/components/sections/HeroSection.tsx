import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ThreeScene } from "../ThreeScene";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export const HeroSection = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20" />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 md:px-6 lg:px-8 relative z-30"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-35 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="text-left space-y-6 lg:pl-16 xl:pl-24">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Kaaviya
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 1, duration: 1 }}
              className="h-1 bg-gradient-to-r from-primary to-cyan-500"
            />

            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Web Developer & Flutter Enthusiast
            </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-[52rem] lg:pr-32 xl:pr-48">
               Crafting immersive digital experiences with modern technologies,
               bringing ideas to life through code and creativity.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary px-8 py-3 rounded-full text-white font-semibold shadow-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Right Side - Enlarged Glowing Avatar */}
          <motion.div
             variants={itemVariants}
             className="flex justify-center lg:justify-end lg:pr-20"
            >

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="relative z-50 -ml-24"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse z-40 w-[300px] h-[300px]" />
              <Avatar className="w-[280px] h-[280px] border-4 border-primary/50 shadow-xl shadow-primary/30 relative z-50">
                <AvatarImage
                  src="/kaavs.jpg"
                  alt="Kaaviya's profile picture"
                  className="object-cover w-full h-full rounded-full"
                />
                <AvatarFallback className="text-4xl font-bold bg-primary text-white flex items-center justify-center">
                  K
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.button
          onClick={scrollToNextSection}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary hover:text-cyan-400 transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};
