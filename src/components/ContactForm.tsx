
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-construction-gray-700 mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-construction-gray-300 focus:outline-none focus:ring-2 focus:ring-construction-orange-500 transition"
            placeholder="Tu nombre"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-construction-gray-700 mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-construction-gray-300 focus:outline-none focus:ring-2 focus:ring-construction-orange-500 transition"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-construction-gray-700 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-construction-gray-300 focus:outline-none focus:ring-2 focus:ring-construction-orange-500 transition"
            placeholder="Tu teléfono"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-construction-gray-700 mb-1">
            Servicio de Interés
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-construction-gray-300 focus:outline-none focus:ring-2 focus:ring-construction-orange-500 transition"
          >
            <option value="">Selecciona un servicio</option>
            <option value="residencial">Construcción Residencial</option>
            <option value="comercial">Construcción Comercial</option>
            <option value="renovacion">Renovaciones</option>
            <option value="albanileria">Albañilería Especializada</option>
            <option value="diseno">Diseño Arquitectónico</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-construction-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-construction-gray-300 focus:outline-none focus:ring-2 focus:ring-construction-orange-500 transition"
          placeholder="Cuéntanos sobre tu proyecto..."
        ></textarea>
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-construction-orange-500 hover:bg-construction-orange-600 w-full py-6"
      >
        {isSubmitting ? (
          <>Enviando...</>
        ) : (
          <>
            Enviar Mensaje <Send className="ml-2" size={18} />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
