
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
    <section className="section-padding bg-gradient-to-br from-construction-blue-700 via-construction-blue-800 to-construction-teal-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-construction-teal-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-construction-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <div className="inline-block">
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-construction-teal-400 to-construction-orange-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className='max-w-5xl mx-auto px-4'>
          <div className='relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20'>
            {/* Quote icon mejorado */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-construction-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="text-white" size={24} />
              </div>
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ease-in-out ${
                  currentTestimonial === index 
                    ? "opacity-100 transform translate-x-0" 
                    : "opacity-0 absolute top-0 left-0 transform translate-x-8"
                }`}
                style={{ display: currentTestimonial === index ? "block" : "none" }}
              >
                <div className='text-xl md:text-2xl mb-8 pt-8 text-white/90 leading-relaxed font-light italic'>
                  "{testimonial.content}"
                </div>
                
                <div className='flex items-center justify-between'>
                  <div className="flex items-center">
                    <div className='w-16 h-16 rounded-2xl overflow-hidden mr-4 ring-4 ring-white/20'>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div>
                      <p className='font-bold text-xl text-white'>{testimonial.name}</p>
                      <p className='text-construction-teal-200 font-medium'>{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-construction-orange-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Indicadores mejorados */}
            <div className='flex justify-center mt-10 gap-3'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentTestimonial === index
                      ? "w-8 h-3 bg-construction-teal-400 shadow-lg"
                      : "w-3 h-3 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
