
import { useEffect } from "react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, CheckCircle, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        title="Construimos el Futuro con Calidad y Precisión"
        subtitle="Soluciones integrales en construcción y albañilería para proyectos residenciales y comerciales con los más altos estándares de calidad."
        backgroundImage="https://images.unsplash.com/photo-1486718448742-163732cd1544"
        buttonText="Nuestros Servicios"
        buttonLink="/servicios"
      />

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              ¿Por Qué Elegirnos?
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-orange-500"></span>
            </h2>
            <p className="text-construction-gray-600 max-w-3xl mx-auto">
              Con más de 15 años de experiencia en el sector, ofrecemos soluciones
              constructivas de alta calidad con un enfoque centrado en el cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-scale">
              <div className="w-16 h-16 bg-construction-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-construction-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Calidad Superior</h3>
              <p className="text-construction-gray-600">
                Utilizamos materiales de primera calidad y las mejores técnicas constructivas para garantizar resultados duraderos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-scale">
              <div className="w-16 h-16 bg-construction-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-construction-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Equipo Profesional</h3>
              <p className="text-construction-gray-600">
                Contamos con un equipo de arquitectos, ingenieros y técnicos con amplia experiencia y capacitación continua.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-scale">
              <div className="w-16 h-16 bg-construction-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-construction-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Entregas a Tiempo</h3>
              <p className="text-construction-gray-600">
                Cumplimos rigurosamente con los plazos establecidos, respetando el cronograma acordado con nuestros clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-scale">
              <div className="w-16 h-16 bg-construction-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-construction-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Servicio Garantizado</h3>
              <p className="text-construction-gray-600">
                Ofrecemos garantía en todos nuestros trabajos, asegurando la satisfacción total de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/nosotros">
              <Button variant="outline" className="border-construction-orange-500 text-construction-orange-500 hover:bg-construction-orange-500 hover:text-white">
                Conocer Más Sobre Nosotros <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* CTA Section */}
      <section className="py-20 bg-construction-blue-700 relative">
        <div className="absolute inset-0 bg-fixed opacity-20" 
             style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1431576901776-e539bd916ba2')",
                backgroundSize: "cover",
                backgroundPosition: "center"
             }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
            <p className="text-xl mb-8">
              Contáctanos hoy mismo para una consulta gratuita y 
              descubre cómo podemos hacer realidad tu visión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button className="bg-construction-orange-500 hover:bg-construction-orange-600 text-white px-8 py-6 text-lg">
                  Solicitar Cotización
                </Button>
              </Link>
              <Link to="/proyectos">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Ver Proyectos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <TestimonialsSection />

      {/* Counter Section */}
      <section className="section-padding bg-construction-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold text-construction-orange-500 mb-2">150+</div>
              <p className="text-lg">Proyectos Completados</p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold text-construction-orange-500 mb-2">15+</div>
              <p className="text-lg">Años de Experiencia</p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold text-construction-orange-500 mb-2">50+</div>
              <p className="text-lg">Profesionales Expertos</p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-5xl font-bold text-construction-orange-500 mb-2">98%</div>
              <p className="text-lg">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
