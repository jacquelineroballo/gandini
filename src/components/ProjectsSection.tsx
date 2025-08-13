
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Torre Residencial Montecito",
      category: "Residencial",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      link: "/proyectos/torre-residencial",
    },
    {
      id: 2,
      title: "Centro Comercial Alameda",
      category: "Comercial",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      link: "/proyectos/centro-comercial",
    },
    {
      id: 3,
      title: "Remodelación Villa Aurora",
      category: "Renovación",
      imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      link: "/proyectos/remodelacion-villa",
    },
    {
      id: 4,
      title: "Complejo Corporativo Vértice",
      category: "Comercial",
      imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      link: "/proyectos/complejo-corporativo",
    },
    {
      id: 5,
      title: "Residencia Los Pinos",
      category: "Residencial",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      link: "/proyectos/residencia-pinos",
    },
    {
      id: 6,
      title: "Restauración Edificio Histórico",
      category: "Restauración",
      imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      link: "/proyectos/restauracion-edificio",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Residencial", "Comercial", "Renovación", "Restauración"];

  const filteredProjects = activeFilter === "Todos"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Proyectos Destacados
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-orange-500"></span>
          </h2>
          <p className="text-construction-gray-600 max-w-3xl mx-auto">
            Explora nuestra galería de proyectos exitosos que demuestran nuestra 
            experiencia y compromiso con la calidad y la innovación.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={activeFilter === filter 
                ? "bg-construction-orange-500 hover:bg-construction-orange-600" 
                : "border-construction-gray-300"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link key={project.id} to={project.link} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-construction-gray-100">
                {/* Imagen con overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge de categoría */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-construction-teal-500/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Icono de enlace */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-construction-gray-800 mb-2 group-hover:text-construction-teal-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-construction-gray-600 text-sm">
                    Ver detalles del proyecto
                  </p>
                </div>
                
                {/* Barra de progreso decorativa */}
                <div className="h-1 bg-construction-gray-100">
                  <div className="h-full bg-gradient-to-r from-construction-teal-500 to-construction-blue-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/proyectos">
            <Button className="bg-construction-blue-600 hover:bg-construction-blue-700">
              Ver Todos los Proyectos <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
