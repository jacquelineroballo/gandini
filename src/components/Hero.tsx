
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
}: HeroProps) => {
  const titleWords = title.split(" ");

  return (
    <div
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated patterns overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 rounded-full bg-teal-500/30 blur-3xl"
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
            animate={{
              x: [0, -40, 40, 0],
              y: [0, 40, -40, 0],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {titleWords.map((word, i) => (
            <motion.span 
              key={i}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: i * 0.15
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="overflow-hidden max-w-3xl mx-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link to={buttonLink}>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2 group shadow-[0_0_15px_rgba(20,184,166,0.5)] btn-glow">
              {buttonText}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 1.5
        }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
          animate={{ 
            boxShadow: ["0 0 0 0 rgba(255,255,255,0)", "0 0 0 8px rgba(255,255,255,0.1)", "0 0 0 0 rgba(255,255,255,0)"] 
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-2 bg-white/60 rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.6, 1] 
            }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
