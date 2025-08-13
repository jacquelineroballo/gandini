
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-construction-blue-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contáctanos</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Estamos aquí para responder tus preguntas y ayudarte con tu próximo proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-construction-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-construction-teal-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Dirección</h3>
              <p className="text-construction-gray-600">
                Av. Principal #123,<br />
                Ciudad de México, México
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-construction-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-construction-teal-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Teléfono</h3>
              <p className="text-construction-gray-600">
                +52 55 1234 5678<br />
                +52 55 8765 4321
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-construction-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-construction-teal-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-construction-gray-600">
                info@constructora.com<br />
                ventas@constructora.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-construction-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-construction-teal-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Horario</h3>
              <p className="text-construction-gray-600">
                Lun - Vie: 8:00 AM - 6:00 PM<br />
                Sábados: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-construction-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 relative">
                Envíanos un Mensaje
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-construction-teal-500"></span>
              </h2>
              <p className="text-construction-gray-600 mb-8">
                Completa el formulario a continuación y nos pondremos en contacto contigo
                lo más pronto posible para discutir tu proyecto.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 relative">
                Nuestra Ubicación
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-construction-teal-500"></span>
              </h2>
              <p className="text-construction-gray-600 mb-8">
                Visita nuestras oficinas para conocer más sobre nuestros servicios y ver ejemplos de nuestro trabajo.
              </p>
              
              <div className="h-[400px] bg-construction-gray-300 rounded-lg overflow-hidden">
                {/* Map placeholder - In a real project, you would integrate Google Maps or a similar service */}
                <div className="w-full h-full flex items-center justify-center bg-construction-gray-300 border">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-3 text-construction-teal-500" />
                    <p className="text-xl font-bold">Mapa de Ubicación</p>
                    <p className="text-construction-gray-600">Aquí iría un mapa interactivo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Preguntas Frecuentes
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-teal-500"></span>
            </h2>
            <p className="text-construction-gray-600 max-w-3xl mx-auto">
              Respuestas a las dudas más comunes sobre nuestros servicios.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-construction-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">¿Cuánto tiempo toma completar un proyecto típico?</h3>
                <p className="text-construction-gray-600">
                  El tiempo de ejecución depende de la complejidad y tamaño del proyecto. 
                  Un proyecto residencial pequeño puede tomar de 3 a 6 meses, mientras que proyectos más grandes
                  pueden llevar un año o más. Durante la consulta inicial, te proporcionaremos un cronograma detallado.
                </p>
              </div>
              
              <div className="bg-construction-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">¿Ofrecen garantía por sus trabajos?</h3>
                <p className="text-construction-gray-600">
                  Sí, todos nuestros trabajos incluyen garantía. Dependiendo del tipo de proyecto, 
                  ofrecemos garantías de 1 a 10 años que cubren tanto materiales como mano de obra.
                </p>
              </div>
              
              <div className="bg-construction-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">¿Trabajan en proyectos fuera de la ciudad?</h3>
                <p className="text-construction-gray-600">
                  Sí, operamos en toda la región y también podemos considerar proyectos nacionales
                  dependiendo de su escala. Contáctanos para discutir las posibilidades para tu ubicación específica.
                </p>
              </div>
              
              <div className="bg-construction-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">¿Cómo se determina el costo de un proyecto?</h3>
                <p className="text-construction-gray-600">
                  El costo se calcula en base a varios factores como el tamaño del proyecto, materiales seleccionados,
                  complejidad del diseño y plazos de entrega. Ofrecemos presupuestos detallados y transparentes después
                  de la consulta inicial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contacto;
