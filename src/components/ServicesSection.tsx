
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Construcción Residencial",
      description:
        "Construimos viviendas de alta calidad con diseños personalizados que se adaptan a tus necesidades y estilo de vida.",
      icon: "/icons/house.svg",
      link: "/servicios/construccion-residencial",
    },
    {
      id: 2,
      title: "Construcción Comercial",
      description:
        "Desarrollamos espacios comerciales eficientes y atractivos que impulsan el éxito de tu negocio.",
      icon: "/icons/building.svg",
      link: "/servicios/construccion-comercial",
    },
    {
      id: 3,
      title: "Renovaciones",
      description:
        "Transformamos espacios existentes para darles nueva vida, funcionalidad y estética moderna.",
      icon: "/icons/renovation.svg",
      link: "/servicios/renovaciones",
    },
    {
      id: 4,
      title: "Albañilería Especializada",
      description:
        "Trabajos de albañilería con precisión artesanal para proyectos que requieren detalles especiales.",
      icon: "/icons/masonry.svg",
      link: "/servicios/albanileria-especializada",
    },
    {
      id: 5,
      title: "Diseño Arquitectónico",
      description:
        "Diseños arquitectónicos innovadores que combinan estética, funcionalidad y eficiencia energética.",
      icon: "/icons/architecture.svg",
      link: "/servicios/diseno-arquitectonico",
    },
    {
      id: 6,
      title: "Consultoría",
      description:
        "Asesoramiento experto en todas las etapas de tu proyecto constructivo para tomar las mejores decisiones.",
      icon: "/icons/consulting.svg",
      link: "/servicios/consultoria",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-construction-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Nuestros Servicios
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-orange-500"></span>
          </h2>
          <p className="text-construction-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas en construcción y albañilería, respaldadas por años de experiencia y un equipo altamente calificado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-40 bg-construction-blue-600 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  {/* Instead of SVG icons, we'll use text placeholders */}
                  <span className="text-4xl font-bold text-construction-orange-500">
                    {service.id}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-construction-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-construction-orange-500 hover:text-construction-orange-600 font-medium"
                >
                  <span>Saber más</span>
                  <ArrowRight size={18} className={`ml-2 transition-transform duration-300 ${
                    hoveredIndex === index ? 'transform translate-x-1' : ''
                  }`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
