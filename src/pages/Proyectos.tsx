
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  year: string;
  client: string;
  description: string;
  imageUrl: string;
  gallery: string[];
}

const Proyectos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Torre Residencial Montecito",
      location: "Ciudad de México",
      category: "Residencial",
      year: "2023",
      client: "Grupo Inmobiliario Altura",
      description:
        "Desarrollo de una torre residencial de lujo de 15 pisos con 45 apartamentos, áreas comunes, gimnasio, piscina y jardines. Un proyecto que combina elegancia, confort y sostenibilidad.",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      gallery: [
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      ],
    },
    {
      id: 2,
      title: "Centro Comercial Alameda",
      location: "Guadalajara",
      category: "Comercial",
      year: "2022",
      client: "Inversiones Retail",
      description:
        "Construcción de un centro comercial de 25,000 m² con más de 70 locales, food court, cines y estacionamiento subterráneo. Un espacio dinámico y moderno que se ha convertido en referente en la zona.",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      gallery: [
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      ],
    },
    {
      id: 3,
      title: "Remodelación Villa Aurora",
      location: "Monterrey",
      category: "Renovación",
      year: "2023",
      client: "Familia Rodríguez",
      description:
        "Renovación integral de una residencia histórica de 450 m², incluyendo restauración de elementos originales, actualización de sistemas y modernización de interiores manteniendo su carácter arquitectónico.",
      imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      gallery: [
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      ],
    },
    {
      id: 4,
      title: "Complejo Corporativo Vértice",
      location: "Ciudad de México",
      category: "Comercial",
      year: "2022",
      client: "Corporación Empresarial",
      description:
        "Edificio de oficinas corporativas de 12 pisos con certificación LEED, incorporando tecnologías inteligentes, eficiencia energética y espacios de trabajo flexibles adaptados a las nuevas formas de trabajar.",
      imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      gallery: [
        "https://images.unsplash.com/photo-1486718448742-163732cd1544",
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      ],
    },
    {
      id: 5,
      title: "Residencia Los Pinos",
      location: "Cancún",
      category: "Residencial",
      year: "2023",
      client: "Familia Martínez",
      description:
        "Diseño y construcción de una residencia de playa de 380 m² que integra espacios abiertos, amplios ventanales y materiales locales para crear una conexión armónica con el entorno natural.",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      gallery: [
        "https://images.unsplash.com/photo-1486718448742-163732cd1544",
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      ],
    },
    {
      id: 6,
      title: "Restauración Edificio Histórico",
      location: "Puebla",
      category: "Restauración",
      year: "2021",
      client: "Instituto Cultural Nacional",
      description:
        "Restauración meticulosa de un edificio del siglo XIX con valor patrimonial, recuperando elementos arquitectónicos originales y adaptando el espacio para su nuevo uso como centro cultural.",
      imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      gallery: [
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      ],
    },
  ];

  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Residencial", "Comercial", "Renovación", "Restauración"];

  const filteredProjects = activeFilter === "Todos"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar />
      <Hero
        title="Nuestros Proyectos"
        subtitle="Explora nuestra galería de obras destacadas, donde la visión se convierte en realidad a través de la construcción de calidad y el diseño innovador."
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
        buttonText="Contactar Ahora"
        buttonLink="/contacto"
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Proyectos Destacados
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-orange-500"></span>
            </h2>
            <p className="text-construction-gray-600 max-w-3xl mx-auto">
              Nuestra cartera de proyectos refleja nuestro compromiso con la excelencia en la construcción
              y la satisfacción de nuestros clientes.
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
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <span className="inline-block bg-construction-orange-500 text-white text-sm px-3 py-1 rounded mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-construction-gray-600">{project.category}</span>
                    <span className="text-construction-orange-500 hover:text-construction-orange-600 flex items-center font-medium">
                      Ver Detalles <ArrowRight className="ml-1" size={18} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-construction-gray-100 px-3 py-1 rounded-full text-sm">
                  {selectedProject.category}
                </span>
                <span className="bg-construction-gray-100 px-3 py-1 rounded-full text-sm">
                  {selectedProject.location}
                </span>
                <span className="bg-construction-gray-100 px-3 py-1 rounded-full text-sm">
                  {selectedProject.year}
                </span>
              </div>
              <p className="text-construction-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Detalles del Proyecto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-construction-gray-500">Cliente</p>
                    <p className="font-medium">{selectedProject.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-construction-gray-500">Ubicación</p>
                    <p className="font-medium">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-construction-gray-500">Año</p>
                    <p className="font-medium">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-construction-gray-500">Categoría</p>
                    <p className="font-medium">{selectedProject.category}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Galería</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.gallery.map((image, index) => (
                    <div key={index} className="h-40 overflow-hidden rounded-lg">
                      <img src={image} alt={`Galería ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <Button 
                  onClick={closeProjectModal}
                  className="bg-construction-orange-500 hover:bg-construction-orange-600"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-construction-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Nuestro Impacto en Números
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-orange-500"></span>
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Resultados tangibles que demuestran nuestro compromiso con la excelencia en cada proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold text-construction-orange-500 mb-2">150+</div>
              <p className="text-lg">Proyectos Completados</p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold text-construction-orange-500 mb-2">200K+</div>
              <p className="text-lg">Metros Cuadrados Construidos</p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold text-construction-orange-500 mb-2">12</div>
              <p className="text-lg">Premios de Arquitectura</p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-5xl font-bold text-construction-orange-500 mb-2">98%</div>
              <p className="text-lg">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
            <p className="text-xl text-construction-gray-600 mb-8">
              Nuestro equipo está listo para ayudarte a hacer realidad tu visión. 
              Contáctanos hoy mismo para una consulta sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-construction-orange-500 hover:bg-construction-orange-600 text-white px-8 py-6 text-lg">
                <a href="/contacto">Solicitar Cotización</a>
              </Button>
              <Button variant="outline" className="border-construction-gray-300 px-8 py-6 text-lg">
                <a href="/servicios">Ver Servicios</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Proyectos;
