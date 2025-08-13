import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, House, Building, Hammer, Blocks, Palette, Users } from 'lucide-react'

interface Service {
	id: number
	title: string
	description: string
	icon: React.ReactNode
	features: string[]
}

const ServicesSection = () => {
	const services: Service[] = [
		{
			id: 1,
			title: 'Construcción Residencial',
			description:
				'Construimos viviendas de alta calidad con diseños personalizados que se adaptan a tus necesidades y estilo de vida.',
			icon: <House className="w-8 h-8" />,
			features: ['Diseños personalizados', 'Materiales premium', 'Entrega puntual']
		},
		{
			id: 2,
			title: 'Construcción Comercial',
			description:
				'Desarrollamos espacios comerciales eficientes y atractivos que impulsan el éxito de tu negocio.',
			icon: <Building className="w-8 h-8" />,
			features: ['Espacios funcionales', 'Diseño corporativo', 'Optimización de costos']
		},
		{
			id: 3,
			title: 'Renovaciones',
			description:
				'Transformamos espacios existentes para darles nueva vida, funcionalidad y estética moderna.',
			icon: <Hammer className="w-8 h-8" />,
			features: ['Modernización', 'Mejora de valor', 'Mínima interrupción']
		},
		{
			id: 4,
			title: 'Albañilería Especializada',
			description:
				'Trabajos de albañilería con precisión artesanal para proyectos que requieren detalles especiales.',
			icon: <Blocks className="w-8 h-8" />,
			features: ['Técnicas tradicionales', 'Acabados artesanales', 'Durabilidad garantizada']
		},
		{
			id: 5,
			title: 'Pintura',
			description:
				'Combinamos diferentes técnicas y materiales para brindar durabilidad y estética, transformando tus espacios.',
			icon: <Palette className="w-8 h-8" />,
			features: ['Técnicas avanzadas', 'Colores personalizados', 'Acabados profesionales']
		},
		{
			id: 6,
			title: 'Consultoría',
			description:
				'Asesoramiento experto en todas las etapas de tu proyecto constructivo para tomar las mejores decisiones.',
			icon: <Users className="w-8 h-8" />,
			features: ['Análisis técnico', 'Optimización de recursos', 'Seguimiento completo']
		},
	]

	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<section className='section-padding bg-gradient-to-br from-construction-gray-50 to-construction-teal-50/30 relative overflow-hidden'>
			{/* Elementos decorativos de fondo */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-10 w-32 h-32 bg-construction-teal-400/10 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-48 h-48 bg-construction-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
			</div>
			
			<div className='container mx-auto relative z-10'>
				<motion.div 
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="inline-block">
						<h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-construction-teal-600 to-construction-blue-600 bg-clip-text text-transparent'>
							Nuestros Servicios
						</h2>
						<div className="h-1 w-24 bg-gradient-to-r from-construction-teal-500 to-construction-blue-500 mx-auto rounded-full"></div>
					</div>
					<p className='text-construction-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed'>
						Ofrecemos soluciones completas en construcción y albañilería, respaldadas por años de
						experiencia y un equipo altamente calificado.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							className='group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/50 cursor-pointer'
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02 }}
						>
							{/* Efecto de brillo en hover */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
							
							{/* Header con gradiente dinámico */}
							<div className={`h-48 bg-gradient-to-br transition-all duration-500 flex items-center justify-center relative overflow-hidden ${
								hoveredIndex === index 
									? 'from-construction-teal-500 via-construction-teal-600 to-construction-blue-600' 
									: 'from-construction-teal-600 via-construction-teal-700 to-construction-blue-700'
							}`}>
								{/* Patrón de fondo */}
								<div className="absolute inset-0 opacity-10">
									<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
								</div>
								
								{/* Icono del servicio */}
								<div className='relative z-10'>
									<div className={`w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 border border-white/30`}>
										<div className="text-white">
											{service.icon}
										</div>
									</div>
								</div>
								
								{/* Elementos decorativos */}
								<div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full animate-pulse"></div>
								<div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
								
								{/* Número del servicio */}
								<div className="absolute top-4 left-4">
									<span className="text-white/60 text-sm font-bold">0{service.id}</span>
								</div>
							</div>
							
							{/* Contenido */}
							<div className='p-8 relative'>
								<h3 className='text-xl font-bold mb-4 text-construction-gray-800 group-hover:text-construction-teal-600 transition-colors duration-300'>
									{service.title}
								</h3>
								<p className='text-construction-gray-600 leading-relaxed mb-6'>
									{service.description}
								</p>
								
								{/* Features list */}
								<ul className="space-y-2 mb-6">
									{service.features.map((feature, idx) => (
										<li key={idx} className="flex items-center text-sm text-construction-gray-600">
											<div className="w-1.5 h-1.5 bg-construction-teal-500 rounded-full mr-3"></div>
											{feature}
										</li>
									))}
								</ul>
								
								{/* CTA Button */}
								<Link to="/contacto" className="inline-flex items-center text-construction-teal-600 font-semibold group-hover:text-construction-teal-700 transition-colors duration-300 hover:gap-3">
									<span>Más información</span>
									<ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
								</Link>
							</div>
							
							{/* Borde inferior decorativo */}
							<div className={`h-1 bg-gradient-to-r transition-all duration-500 ${
								hoveredIndex === index 
									? 'from-construction-teal-400 to-construction-blue-500' 
									: 'from-construction-teal-500 to-construction-blue-600'
							}`}></div>
						</motion.div>
					))}
				</div>
				
				{/* CTA Section */}
				<motion.div 
					className="text-center mt-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
				>
					<div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 inline-block">
						<h3 className="text-2xl font-bold text-construction-gray-800 mb-4">
							¿No encuentras lo que buscas?
						</h3>
						<p className="text-construction-gray-600 mb-6">
							Contáctanos para servicios personalizados y soluciones a medida
						</p>
						<Link 
							to="/contacto" 
							className="inline-flex items-center bg-gradient-to-r from-construction-teal-500 to-construction-teal-600 hover:from-construction-teal-600 hover:to-construction-teal-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
						>
							Consulta Personalizada
							<ArrowRight className="w-4 h-4 ml-2" />
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default ServicesSection
