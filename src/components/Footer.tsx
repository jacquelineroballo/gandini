
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-construction-gray-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-construction-orange-500">Construc</span>
              <span className="text-construction-blue-500">tora</span>
            </h3>
            <p className="mb-6 text-construction-gray-300">
              Con más de 15 años de experiencia, construimos el futuro con calidad y profesionalismo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-construction-gray-800 p-2 rounded-full hover:bg-construction-orange-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-construction-gray-800 p-2 rounded-full hover:bg-construction-orange-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-construction-gray-800 p-2 rounded-full hover:bg-construction-orange-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-construction-gray-800 p-2 rounded-full hover:bg-construction-orange-500 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Construcción Residencial
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Construcción Comercial
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Renovaciones
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Albañilería Especializada
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Diseño Arquitectónico
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-construction-gray-300 hover:text-construction-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contáctanos</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-construction-orange-500 mt-1" size={20} />
                <span className="text-construction-gray-300">
                  Av. Principal #123, Ciudad de México, México
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-construction-orange-500" size={20} />
                <span className="text-construction-gray-300">+52 55 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-construction-orange-500" size={20} />
                <span className="text-construction-gray-300">info@constructora.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-construction-orange-500 mt-1" size={20} />
                <span className="text-construction-gray-300">
                  Lun - Vie: 8:00 AM - 6:00 PM<br />
                  Sábados: 9:00 AM - 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-construction-gray-800 mt-10 pt-8">
          <p className="text-center text-construction-gray-400">
            © {currentYear} Constructora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
