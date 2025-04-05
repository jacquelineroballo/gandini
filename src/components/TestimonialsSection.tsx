
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Roberto García",
      role: "Cliente Residencial",
      content:
        "Nuestra nueva casa superó todas nuestras expectativas. El equipo de Constructora fue profesional desde el inicio hasta el final del proyecto, y el resultado es simplemente espectacular.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "María Fernández",
      role: "Gerente de Desarrollo",
      content:
        "Trabajamos con Constructora para nuestro nuevo edificio de oficinas y quedamos impresionados por su atención al detalle y capacidad para entregar el proyecto a tiempo y dentro del presupuesto.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Carlos Mendoza",
      role: "Propietario de Tienda",
      content:
        "La renovación de mi local comercial fue magistral. Entendieron perfectamente mi visión y la hicieron realidad con una calidad excepcional. Definitivamente los recomendaría.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-construction-blue-700">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative inline-block">
            Lo Que Dicen Nuestros Clientes
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-orange-500"></span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12">
            <Quote className="text-construction-orange-500 absolute top-6 left-6" size={42} />
            
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  currentTestimonial === index ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                }`}
                style={{ display: currentTestimonial === index ? "block" : "none" }}
              >
                <div className="text-lg md:text-xl mb-8 pt-8 text-construction-gray-700">
                  "{testimonial.content}"
                </div>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-construction-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index
                      ? "bg-construction-orange-500 w-6"
                      : "bg-construction-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
