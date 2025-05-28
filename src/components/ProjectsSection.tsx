
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

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
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      link: "/proyectos/torre-residencial",
    },
    {
      id: 2,
      title: "Centro Comercial Alameda",
      category: "Comercial",
      imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      link: "/proyectos/centro-comercial",
    },
    {
      id: 3,
      title: "Remodelación Villa Aurora",
      category: "Renovación",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      link: "/proyectos/remodelacion-villa",
    },
    {
      id: 4,
      title: "Complejo Corporativo Vértice",
      category: "Comercial",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      link: "/proyectos/complejo-corporativo",
    },
    {
      id: 5,
      title: "Residencia Los Pinos",
      category: "Residencial",
      imageUrl: "https://images.unsplash.com/photo-1448630360428-65456885c650",
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
    <section className="section-padding" aria-labelledby="projects-heading">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Proyectos Destacados
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500"></span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explora nuestra galería de proyectos exitosos que demuestran nuestra 
            experiencia y compromiso con la calidad y la innovación.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist">
          {filters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={activeFilter === filter 
                ? "bg-teal-500 hover:bg-teal-600" 
                : "border-gray-300"}
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Link key={project.id} to={project.link} className="group">
              <article className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage
                    src={project.imageUrl}
                    alt={`Proyecto ${project.title} - ${project.category}`}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={300}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <span className="inline-block bg-teal-500 text-white text-sm px-3 py-1 rounded mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{project.category}</span>
                    <span className="text-teal-500 group-hover:text-teal-600 flex items-center font-medium">
                      Ver Detalles <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/proyectos">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Ver Todos los Proyectos <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
