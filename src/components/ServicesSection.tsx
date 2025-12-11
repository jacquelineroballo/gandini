import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Hammer, Blocks, Palette, Users } from 'lucide-react'

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
			title: 'Renovaciones',
			description:
				'Transformamos espacios para darles nueva vida, funcionalidad y estética moderna.',
			icon: <Hammer className='w-8 h-8' />,
			features: ['Modernización', 'Mejora de valor'],
		},
		{
			id: 2,
			title: 'Albañilería',
			description:
				'Trabajos de albañilería con precisión para proyectos que requieren detalles especiales.',
			icon: <Blocks className='w-8 h-8' />,
			features: ['Mantenimiento', 'Reparaciones de toda índole'],
		},
		{
			id: 3,
			title: 'Pintura',
			description:
				'Combinamos diferentes técnicas y materiales para brindar durabilidad y estética.',
			icon: <Palette className='w-8 h-8' />,
			features: ['Atención al detalle', 'Acabados profesionales'],
		},
		{
			id: 4,
			title: 'Consultoría',
			description:
				'Asesoramiento experto en todas las etapas de tu proyecto para tomar decisiones.',
			icon: <Users className='w-8 h-8' />,
			features: ['Análisis técnico', 'Optimización de recursos'],
		},
	]

	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<section className='section-padding bg-gradient-to-br from-construction-gray-50 to-construction-teal-50/30 relative overflow-hidden'>
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-20 left-10 w-32 h-32 bg-construction-teal-400/5 rounded-full blur-xl'></div>
				<div className='absolute bottom-20 right-10 w-48 h-48 bg-construction-blue-400/5 rounded-full blur-xl'></div>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl'></div>
			</div>

			<div className='container mx-auto relative z-10'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div className='inline-block'>
						<h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-construction-teal-600 to-construction-blue-600 bg-clip-text text-transparent'>
							Nuestros Servicios
						</h2>
						<div className='h-1 w-24 bg-gradient-to-r from-construction-teal-500 to-construction-blue-500 mx-auto rounded-full'></div>
					</div>
					<p className='text-construction-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed'>
						Ofrecemos soluciones completas en construcción, albañilería, pintura, mantenimiento y
						consultoría respaldadas por años de experiencia.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
					{services.map((service, index) => (
					<motion.div
							key={service.id}
							className='group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-150 hover:-translate-y-1 border border-white/50 cursor-pointer flex flex-col'
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.01 }}
						>
							<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out'></div>

							<div
								className={`h-32 bg-gradient-to-br transition-colors duration-150 flex items-center justify-center relative overflow-hidden ${
									hoveredIndex === index
										? 'from-construction-teal-500 via-construction-teal-600 to-construction-blue-600'
										: 'from-construction-teal-600 via-construction-teal-700 to-construction-blue-700'
								}`}
							>
								<div className='relative z-10'>
									<div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center transition-all duration-150 group-hover:scale-105 border border-white/30'>
										<div className='text-white scale-75'>{service.icon}</div>
									</div>
								</div>

								<div className='absolute top-3 right-3 w-4 h-4 border border-white/20 rounded-full'></div>
								<div className='absolute bottom-3 left-3 w-2 h-2 bg-white/10 rounded-full'></div>

								<div className='absolute top-3 left-3'>
									<span className='text-white/60 text-xs font-bold'>0{service.id}</span>
								</div>
							</div>
							<div className='p-4 relative flex-1 flex flex-col'>
								<h3 className='text-lg font-bold mb-2 text-construction-gray-800 group-hover:text-construction-teal-600 transition-colors duration-150'>
									{service.title}
								</h3>
								<p className='text-construction-gray-600 leading-relaxed mb-3 text-sm line-clamp-3'>
									{service.description}
								</p>
								<ul className='space-y-1 mb-3'>
									{service.features.slice(0, 2).map((feature, idx) => (
										<li key={idx} className='flex items-center text-xs text-construction-gray-600'>
											<div className='w-1 h-1 bg-construction-teal-500 rounded-full mr-2'></div>
											{feature}
										</li>
									))}
								</ul>
								<div className='mt-auto'>
									<Link
										to='/contacto'
										className='inline-flex items-center text-construction-teal-600 font-semibold group-hover:text-construction-teal-700 transition-all duration-150 text-sm'
									>
										<span>Más info</span>
										<ArrowRight className='w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-150' />
									</Link>
								</div>
							</div>

							<div
								className={`h-1 bg-gradient-to-r transition-colors duration-150 mt-auto ${
									hoveredIndex === index
										? 'from-construction-teal-400 to-construction-blue-500'
										: 'from-construction-teal-500 to-construction-blue-600'
								}`}
							></div>
						</motion.div>
					))}
				</div>

				<motion.div
					className='text-center mt-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<div className='bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/50 inline-block'>
						<h3 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-construction-teal-600 to-construction-blue-600 bg-clip-text text-transparent mb-6'>
							Contactanos para servicios personalizados y soluciones a medida.
						</h3>
						<Link
							to='/contacto'
							className={
								'inline-flex items-center bg-gradient-to-r from-construction-teal-500 to-construction-blue-600 ' +
								'hover:from-construction-teal-600 hover:to-construction-teal-700 text-white font-semibold ' +
								'py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200'
							}
						>
							ESCRIBINOS
							<ArrowRight className='w-4 h-4 ml-2' />
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default ServicesSection
