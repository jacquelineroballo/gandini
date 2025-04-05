
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold font-montserrat">
            <span className="text-construction-orange-500">Construc</span>
            <span className="text-construction-blue-600">tora</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="font-montserrat font-medium text-construction-gray-800 hover:text-construction-orange-500 transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <Button className="bg-construction-orange-500 hover:bg-construction-orange-600">
            Cotización Gratis
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-construction-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-gray-200 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="font-montserrat font-medium text-construction-gray-800 hover:text-construction-orange-500 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Button className="bg-construction-orange-500 hover:bg-construction-orange-600 w-full">
              Cotización Gratis
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
