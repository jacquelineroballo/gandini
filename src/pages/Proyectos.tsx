import { useEffect, useState, useMemo, useCallback } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

// Importar imágenes locales
import renovacionCasaImg from '@/assets/images/projects/renovacion-casa.jpg'
import gallery1 from '@/assets/images/gallery/gallery1.jpg'
import gallery2 from '@/assets/images/gallery/gallery2.jpg'
import gallery3 from '@/assets/images/gallery/gallery3.jpg'

// Importar configuración de imágenes
import { projectImages, galleryImages } from '@/lib/images'

interface Project {
	id: number
	title: string
	location: string
	category: string
	year: string
	client: string
	description: string
	imageUrl: string
	gallery: string[]
}

const Proyectos = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	// Preload all project images
	useEffect(() => {
		const images = [...projects.map((p) => p.imageUrl), ...projects.flatMap((p) => p.gallery)]
		const preloadImage = (src: string) => {
			const img = new Image()
			img.src = src
		}
		images.forEach(preloadImage)
	}, [])

	// Debug log para las imágenes
	useEffect(() => {
		console.log('renovacionCasaImg:', renovacionCasaImg)
		console.log('gallery1:', gallery1)
	}, [])

	// Debug log para las imágenes
	useEffect(() => {
		console.log('renovacionCasaImg:', renovacionCasaImg)
		console.log('gallery1:', gallery1)
	}, [])

	const projects: Project[] = useMemo(
		() => [
			{
				id: 1,
				title: 'Renovación Integral Casa Moderna',
				location: 'Ciudad de México',
				category: 'Renovaciones',
				year: '2023',
				client: 'Familia González',
				description:
					'Renovación completa de una casa de 200 m² incluyendo actualización de instalaciones, remodelación de cocina y baños, y modernización de espacios con diseño contemporáneo.',
				imageUrl: projectImages.renovacionCasa,
				gallery: galleryImages,
			},
			{
				id: 2,
				title: 'Trabajos de Albañilería Especializada',
				location: 'Guadalajara',
				category: 'Albañilería',
				year: '2022',
				client: 'Constructora del Valle',
				description:
					'Trabajos especializados de albañilería incluyendo muros de carga, acabados en piedra natural, y construcción de elementos arquitectónicos decorativos con técnicas tradicionales.',
				imageUrl: projectImages.albanileria,
				gallery: galleryImages,
			},
			{
				id: 3,
				title: 'Remodelación Villa Aurora',
				location: 'Monterrey',
				category: 'Renovaciones',
				year: '2023',
				client: 'Familia Rodríguez',
				description:
					'Renovación integral de una residencia histórica de 450 m², incluyendo restauración de elementos originales, actualización de sistemas y modernización de interiores manteniendo su carácter arquitectónico.',
				imageUrl: projectImages.departamento,
				gallery: galleryImages,
			},
			{
				id: 4,
				title: 'Proyecto de Pintura Decorativa',
				location: 'Ciudad de México',
				category: 'Pintura',
				year: '2022',
				client: 'Hotel Boutique Central',
				description:
					'Proyecto integral de pintura decorativa incluyendo técnicas especiales, murales artísticos y acabados texturizados para crear ambientes únicos y sofisticados.',
				imageUrl: projectImages.pintura,
				gallery: galleryImages,
			},
			{
				id: 5,
				title: 'Consultoría Técnica Especializada',
				location: 'Cancún',
				category: 'Consultoría',
				year: '2023',
				client: 'Desarrollo Inmobiliario Costa',
				description:
					'Servicios de consultoría técnica para proyecto de desarrollo inmobiliario, incluyendo análisis estructural, supervisión de obra y asesoría en normativas de construcción.',
				imageUrl: projectImages.consultoria,
				gallery: galleryImages,
			},
			{
				id: 6,
				title: 'Restauración Edificio Histórico',
				location: 'Puebla',
				category: 'Restauración',
				year: '2021',
				client: 'Instituto Cultural Nacional',
				description:
					'Restauración meticulosa de un edificio del siglo XIX con valor patrimonial, recuperando elementos arquitectónicos originales y adaptando el espacio para su nuevo uso como centro cultural.',
				imageUrl: projectImages.restauracion,
				gallery: galleryImages,
			},
		],
		[]
	)

	const [activeFilter, setActiveFilter] = useState('Todos')
	const filters = useMemo(
		() => ['Todos', 'Renovaciones', 'Albañilería', 'Pintura', 'Consultoría'],
		[]
	)

	const filteredProjects = useMemo(
		() =>
			activeFilter === 'Todos'
				? projects
				: projects.filter((project) => project.category === activeFilter),
		[activeFilter, projects]
	)

	const [selectedProject, setSelectedProject] = useState<Project | null>(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openProjectModal = useCallback((project: Project) => {
		setSelectedProject(project)
		setIsModalOpen(true)
		document.body.style.overflow = 'hidden'
	}, [])

	const closeProjectModal = useCallback(() => {
		setIsModalOpen(false)
		setSelectedProject(null)
		document.body.style.overflow = 'auto'
	}, [])

	return (
		<>
			<Navbar />
			<Hero
				title='Nuestros Proyectos'
				subtitle='Explora nuestra galería de obras destacadas, donde la visión se convierte en realidad a través de la construcción de calidad y el diseño innovador.'
				backgroundImage={renovacionCasaImg}
				buttonText='Contactar Ahora'
				buttonLink='/contacto'
			/>

			<section className='section-padding'>
				<div className='container mx-auto'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block'>
							Proyectos Destacados
							<span className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-teal-500'></span>
						</h2>
						<p className='text-construction-gray-600 max-w-3xl mx-auto'>
							Nuestra cartera de proyectos refleja nuestro compromiso con la excelencia en la
							construcción y la satisfacción de nuestros clientes.
						</p>
					</div>

					<div className='flex flex-wrap justify-center gap-3 mb-10'>
						{filters.map((filter) => (
							<Button
								key={filter}
								variant={activeFilter === filter ? 'default' : 'outline'}
								className={
									activeFilter === filter
										? 'bg-construction-teal-500 hover:bg-construction-teal-600'
										: 'border-construction-gray-300'
								}
								onClick={() => setActiveFilter(filter)}
							>
								{filter}
							</Button>
						))}
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{filteredProjects.map((project) => (
							<div
								key={project.id}
								className='bg-white rounded-lg overflow-hidden shadow-lg hover-scale cursor-pointer'
								onClick={() => openProjectModal(project)}
							>
								<div className='relative h-64 overflow-hidden'>
									<img
										src={project.imageUrl}
										alt={`${project.title} - ${project.category}`}
										className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
										onError={(e) => {
											;(e.target as HTMLImageElement).src = renovacionCasaImg
										}}
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
										<div className='p-6 w-full'>
											<span className='inline-block bg-construction-teal-500 text-white text-sm px-3 py-1 rounded mb-2'>
												{project.category}
											</span>
											<h3 className='text-white text-xl font-bold'>{project.title}</h3>
										</div>
									</div>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-bold mb-2'>{project.title}</h3>
									<div className='flex items-center justify-between'>
										<span className='text-construction-gray-600'>{project.category}</span>
										<span className='text-construction-teal-500 hover:text-construction-teal-600 flex items-center font-medium transition-colors duration-200'>
											Ver Detalles <ArrowRight className='ml-1' size={18} />
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{isModalOpen && selectedProject && (
				<div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70'>
					<div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
						<div className='relative'>
							<img
								src={selectedProject.imageUrl}
								alt={`Vista principal del proyecto ${selectedProject.title}`}
								className='w-full h-64 object-cover'
								onError={(e) => {
									;(e.target as HTMLImageElement).src = renovacionCasaImg
								}}
							/>
							<button
								onClick={closeProjectModal}
								className='absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors'
								aria-label='Cerrar modal'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
						<div className='p-6'>
							<h2 className='text-2xl font-bold mb-2'>{selectedProject.title}</h2>
							<div className='flex flex-wrap gap-4 mb-4'>
								<span className='bg-construction-gray-100 px-3 py-1 rounded-full text-sm'>
									{selectedProject.category}
								</span>
								<span className='bg-construction-gray-100 px-3 py-1 rounded-full text-sm'>
									{selectedProject.location}
								</span>
								<span className='bg-construction-gray-100 px-3 py-1 rounded-full text-sm'>
									{selectedProject.year}
								</span>
							</div>
							<p className='text-construction-gray-600 mb-6'>{selectedProject.description}</p>

							<div className='mb-6'>
								<h3 className='text-lg font-bold mb-3'>Detalles del Proyecto</h3>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<p className='text-sm text-construction-gray-500'>Cliente</p>
										<p className='font-medium'>{selectedProject.client}</p>
									</div>
									<div>
										<p className='text-sm text-construction-gray-500'>Ubicación</p>
										<p className='font-medium'>{selectedProject.location}</p>
									</div>
									<div>
										<p className='text-sm text-construction-gray-500'>Año</p>
										<p className='font-medium'>{selectedProject.year}</p>
									</div>
									<div>
										<p className='text-sm text-construction-gray-500'>Categoría</p>
										<p className='font-medium'>{selectedProject.category}</p>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h3 className='text-lg font-bold mb-3'>Galería</h3>
								<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
									{selectedProject.gallery.map((image, index) => (
										<div key={index} className='h-40 overflow-hidden rounded-lg'>
											<img
												src={image}
												alt={`Galería de imágenes del proyecto ${selectedProject.title} - Imagen ${
													index + 1
												}`}
												className='w-full h-full object-cover'
												onError={(e) => {
													;(e.target as HTMLImageElement).src = gallery1
												}}
											/>
										</div>
									))}
								</div>
							</div>

							<div className='flex justify-center mt-6'>
								<Button
									onClick={closeProjectModal}
									className='bg-teal-500 hover:bg-teal-600 text-white'
								>
									Cerrar
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}

			<section className='py-28 relative overflow-hidden bg-gradient-to-br from-teal-700 to-blue-900'>
				{/* Background elements - Reducidos */}
				<div className='absolute inset-0 overflow-hidden'>
					<motion.div
						className='absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
						animate={{
							scale: [1, 1.1, 1],
							opacity: [0.2, 0.4, 0.2],
						}}
						transition={{
							duration: 12,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
					<motion.div
						className='absolute -top-32 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl'
						animate={{
							scale: [1.1, 1, 1.1],
							opacity: [0.3, 0.5, 0.3],
						}}
						transition={{
							duration: 15,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
					<div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20 dark:bg-[radial-gradient(#2a2a2a_1px,transparent_1px)]' />
				</div>

				{/* Partículas reducidas de 15 a 5 */}
				{[...Array(5)].map((_, i) => (
					<motion.div
						key={i}
						className='absolute w-2 h-2 rounded-full bg-white/20'
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -15, 0],
							opacity: [0.2, 0.6, 0.2],
						}}
						transition={{
							duration: 6 + Math.random() * 2,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: Math.random() * 3,
						}}
					/>
				))}

				<div className='container mx-auto px-4 relative z-10'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<span className='text-teal-300 text-sm font-semibold tracking-wider uppercase mb-2 block'>
							Nuestros Números
						</span>
						<h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block text-white'>
							Nuestros Proyectos Destacados
							<motion.span
								className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-400'
								initial={{ width: 0 }}
								whileInView={{ width: 80 }}
								transition={{ delay: 0.3, duration: 0.6 }}
								viewport={{ once: true }}
							></motion.span>
						</h2>
						<p className='text-white/80 max-w-3xl mx-auto text-lg'>
							Resultados tangibles que demuestran nuestro compromiso con la excelencia en cada
							proyecto.
						</p>
					</motion.div>

					<motion.div
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, staggerChildren: 0.1 }}
						viewport={{ once: true }}
					>
						{/* Tarjetas optimizadas */}
						<motion.div
							className='relative backdrop-blur-sm bg-white/10 rounded-2xl p-8 text-center border border-white/20 overflow-hidden group shadow-xl'
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							whileHover={{
								y: -5,
								scale: 1.02,
								transition: { duration: 0.2 },
							}}
							viewport={{ once: true }}
						>
							<div className='text-5xl font-bold text-teal-300 mb-4'>150+</div>
							<p className='text-lg text-white/90 font-medium'>Proyectos Completados</p>
						</motion.div>

						<motion.div
							className='relative backdrop-blur-sm bg-white/10 rounded-2xl p-8 text-center border border-white/20 overflow-hidden group shadow-xl'
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							whileHover={{
								y: -5,
								scale: 1.02,
								transition: { duration: 0.2 },
							}}
							viewport={{ once: true }}
						>
							<div className='text-5xl font-bold text-teal-300 mb-4'>200K+</div>
							<p className='text-lg text-white/90 font-medium'>Metros Cuadrados Construidos</p>
						</motion.div>

						<motion.div
							className='relative backdrop-blur-sm bg-white/10 rounded-2xl p-8 text-center border border-white/20 overflow-hidden group shadow-xl'
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							whileHover={{
								y: -5,
								scale: 1.02,
								transition: { duration: 0.2 },
							}}
							viewport={{ once: true }}
						>
							<div className='text-5xl font-bold text-teal-300 mb-4'>12</div>
							<p className='text-lg text-white/90 font-medium'>Premios de Arquitectura</p>
						</motion.div>

						<motion.div
							className='relative backdrop-blur-sm bg-white/10 rounded-2xl p-8 text-center border border-white/20 overflow-hidden group shadow-xl'
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							whileHover={{
								y: -5,
								scale: 1.02,
								transition: { duration: 0.2 },
							}}
							viewport={{ once: true }}
						>
							<div className='text-5xl font-bold text-teal-300 mb-4'>98%</div>
							<p className='text-lg text-white/90 font-medium'>Clientes Satisfechos</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<section className='py-24 bg-gradient-to-br from-construction-gray-50 to-white relative overflow-hidden'>
				<div className='absolute top-0 right-0 w-64 h-64 bg-construction-teal-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32'></div>
				<div className='absolute bottom-0 left-0 w-48 h-48 bg-construction-teal-100 rounded-full blur-2xl opacity-40 translate-y-24 -translate-x-24'></div>

				<div className='container mx-auto px-4 relative z-10'>
					<div className='max-w-4xl mx-auto'>
						<header className='text-center mb-12'>
							<div className='inline-flex items-center gap-2 bg-construction-orange-100 text-construction-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
								<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
								Consultas virtuales gratuitas
							</div>

							<h2 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-construction-teal-600 to-construction-blue-600 bg-clip-text text-transparent mb-6'>
								Transformemos tu visión en realidad
							</h2>

							<p className='text-xl text-construction-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto'>
								Nuestro equipo de expertos está listo para llevar tu proyecto al siguiente nivel.
								<strong className='text-construction-gray-800'>
									Realizamos consultorías virtuales gratuitas y cotizaciones personalizadas.
								</strong>
							</p>
						</header>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
							<div className='flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-construction-gray-100'>
								<div className='w-10 h-10 bg-construction-teal-100 rounded-full flex items-center justify-center flex-shrink-0'>
									<svg
										className='w-5 h-5 text-construction-teal-600'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-semibold text-construction-gray-900'>
										Consulta Virtual Gratuita
									</h3>
									<p className='text-sm text-construction-gray-600'>Sin compromiso inicial</p>
								</div>
							</div>

							<div className='flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-construction-gray-100'>
								<div className='w-10 h-10 bg-construction-orange-100 rounded-full flex items-center justify-center flex-shrink-0'>
									<svg
										className='w-5 h-5 text-construction-orange-600'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-semibold text-construction-gray-900'>Respuesta Rápida</h3>
									<p className='text-sm text-construction-gray-600'>Cotización personalizadas</p>
								</div>
							</div>

							<div className='flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-construction-gray-100'>
								<div className='w-10 h-10 bg-construction-teal-100 rounded-full flex items-center justify-center flex-shrink-0'>
									<svg
										className='w-5 h-5 text-construction-teal-600'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-semibold text-construction-gray-900'>Garantía Total</h3>
									<p className='text-sm text-construction-gray-600'>Satisfacción 100%</p>
								</div>
							</div>
						</div>

						{/* Botones de acción */}
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
							<Button
								asChild
								size='lg'
								className='bg-construction-orange-500 hover:bg-construction-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
							>
								<a href='/contacto' className='flex items-center gap-2'>
									<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
										/>
									</svg>
									Solicitar Cotización Gratuita
								</a>
							</Button>

							<Button
								asChild
								variant='outline'
								size='lg'
								className='border-2 border-construction-gray-300 hover:border-construction-gray-400 px-8 py-4 text-lg font-semibold hover:bg-construction-gray-50 transition-all duration-300'
							>
								<a href='/servicios' className='flex items-center gap-2'>
									<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
										/>
									</svg>
									Explorar Servicios
								</a>
							</Button>
						</div>

						{/* Indicadores de confianza */}
						<div className='text-center'>
							<p className='text-sm text-construction-gray-500 mb-4'>
								Únete a más de{' '}
								<strong className='text-construction-gray-700'>150+ clientes satisfechos</strong>
							</p>

							<div className='flex items-center justify-center gap-6 text-xs text-construction-gray-400'>
								<div className='flex items-center gap-1'>
									<svg className='w-4 h-4 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'
										/>
									</svg>
									<span>Sin pagos iniciales</span>
								</div>
								<div className='flex items-center gap-1'>
									<svg className='w-4 h-4 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'
										/>
									</svg>
									<span>Garantía de calidad</span>
								</div>
								<div className='flex items-center gap-1'>
									<svg className='w-4 h-4 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'
										/>
									</svg>
									<span>Profesionales certificados</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Proyectos
