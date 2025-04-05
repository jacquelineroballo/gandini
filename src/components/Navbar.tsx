
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Inicio", href: "/" },
    { title: "Servicios", href: "/servicios" },
    { title: "Proyectos", href: "/proyectos" },
    { title: "Contacto", href: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.h1 
            className="text-2xl font-bold font-montserrat"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal-500">Construc</span>
            <span className="text-construction-blue-600">tora</span>
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className={`font-montserrat font-medium transition-colors relative ${
                  isActive(link.href) 
                    ? "text-teal-500" 
                    : "text-construction-gray-800 hover:text-teal-500"
                }`}
              >
                {link.title}
                {isActive(link.href) && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-500 rounded-full"
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button className="bg-teal-500 hover:bg-teal-600 shadow-lg btn-glow">
              Cotización Gratis
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-construction-gray-800 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 pt-20 bg-white/95 backdrop-blur-md z-40 flex flex-col"
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`font-montserrat font-medium py-3 text-lg flex items-center justify-between ${
                      isActive(link.href) 
                        ? "text-teal-500" 
                        : "text-construction-gray-800 hover:text-teal-500"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{link.title}</span>
                    <ChevronDown size={16} className="transform rotate-[-90deg]" />
                  </Link>
                  <div className="w-full h-px bg-gray-100"></div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Button className="bg-teal-500 hover:bg-teal-600 w-full py-6 shadow-lg btn-glow">
                  Cotización Gratis
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
