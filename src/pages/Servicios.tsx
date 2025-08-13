import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Servicios = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const servicesList = [
		{
			id: 1,
			title: 'Construcción Residencial',
			description:
				'Diseñamos y construimos casas y edificios residenciales que combinan estética, funcionalidad y eficiencia energética, adaptándonos a tu estilo de vida y necesidades específicas.',
			features: [
				'Casas unifamiliares personalizadas',
				'Edificios multifamiliares',
				'Condominios y desarrollos residenciales',
				'Ampliaciones y remodelaciones',
				'Acabados de lujo',
			],
			image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
		},
		{
			id: 2,
			title: 'Construcción Comercial',
			description:
				'Desarrollamos espacios comerciales innovadores que potencian tu negocio, con diseños funcionales que maximizan la productividad y crean experiencias memorables para clientes y empleados.',
			features: [
				'Locales comerciales',
				'Oficinas corporativas',
				'Restaurantes y hoteles',
				'Centros comerciales',
				'Espacios industriales',
			],
			image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e',
		},
		{
			id: 3,
			title: 'Renovaciones',
			description:
				'Transformamos espacios existentes para darles nueva vida, mejorando su funcionalidad, estética y valor, mientras respetamos la estructura original y minimizamos las molestias durante el proceso.',
			features: [
				'Remodelaciones integrales',
				'Actualizaciones de cocinas y baños',
				'Conversión de espacios',
				'Mejoras de eficiencia energética',
				'Renovaciones históricas',
			],
			image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
		},
		{
			id: 4,
			title: 'Albañilería Especializada',
			description:
				'Ofrecemos trabajos de albañilería de alta precisión con técnicas tradicionales y modernas para crear estructuras duraderas y elementos decorativos únicos que realcen la belleza de tu proyecto.',
			features: [
				'Muros de piedra y ladrillo',
				'Acabados texturizados',
				'Elementos decorativos personalizados',
				'Pavimentos y solados',
				'Trabajos en concreto ornamental',
			],
			image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
		},
		{
			id: 5,
			title: 'Diseño Arquitectónico',
			description:
				'Nuestro equipo de arquitectos diseña espacios que combinan belleza, funcionalidad y sostenibilidad, creando proyectos únicos que reflejan tu visión y responden al entorno.',
			features: [
				'Diseño integral de proyectos',
				'Visualización 3D y planos detallados',
				'Arquitectura sostenible',
				'Optimización del espacio',
				'Consultoría arquitectónica',
			],
			image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
		},
	]

	return (
		<>
			<Navbar />
			<Hero
				title='Nuestros Servicios'
				subtitle='Soluciones constructivas integrales para proyectos de cualquier escala, respaldadas por profesionales expertos y tecnología avanzada.'
				backgroundImage='https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace'
				buttonText='Contactar Ahora'
				buttonLink='/contacto'
				
			/>

			<section className='section-padding'>
				<div className='container mx-auto'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block'>
							Servicios Profesionales
							<span className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-orange-500'></span>
						</h2>
						<p className='text-construction-gray-600 max-w-3xl mx-auto'>
							Ofrecemos una amplia gama de servicios de construcción y albañilería para satisfacer
							las necesidades específicas de cada proyecto.
						</p>
					</div>

					<div className='space-y-24'>
						{servicesList.map((service, index) => (
							<div
								key={service.id}
								className={`flex flex-col ${
									index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
								} gap-8 lg:gap-16 items-center`}
							>
								<div className='w-full lg:w-1/2 overflow-hidden rounded-lg'>
									<img
										src={service.image}
										alt={service.title}
										className='w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500'
									/>
								</div>
								<div className='w-full lg:w-1/2'>
									<h3 className='text-2xl md:text-3xl font-bold mb-4'>{service.title}</h3>
									<p className='text-construction-gray-600 mb-6'>{service.description}</p>
									<ul className='space-y-3 mb-8'>
										{service.features.map((feature, idx) => (
											<li key={idx} className='flex items-start'>
												<CheckCircle className='text-construction-teal-500 mr-3 mt-1' size={20} />
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<Link to='/contacto'>
										<Button className='bg-construction-teal-500 hover:bg-construction-teal-600 flex items-center'>
											Consultar Ahora <ArrowRight className='ml-2' size={18} />
										</Button>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className='section-padding bg-construction-gray-100'>
				<div className='container mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block'>
							Nuestro Proceso
							<span className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-construction-teal-500'></span>
						</h2>
						<p className='text-construction-gray-600 max-w-3xl mx-auto'>
							Una metodología clara y eficiente que garantiza el éxito en cada etapa del proyecto.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='relative'>
							<div className='bg-white p-8 rounded-lg shadow-lg text-center h-full hover-scale'>
								<div className='w-12 h-12 bg-construction-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
									1
								</div>
								<h3 className='text-xl font-bold mb-3'>Consulta Inicial</h3>
								<p className='text-construction-gray-600'>
									Comprendemos tus necesidades, objetivos y visión para el proyecto.
								</p>
							</div>
							<div className='hidden lg:block absolute top-1/2 left-full w-full h-1 bg-construction-gray-300 -z-10 transform -translate-y-1/2'></div>
						</div>

						<div className='relative'>
							<div className='bg-white p-8 rounded-lg shadow-lg text-center h-full hover-scale'>
								<div className='w-12 h-12 bg-construction-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
									2
								</div>
								<h3 className='text-xl font-bold mb-3'>Planificación y Diseño</h3>
								<p className='text-construction-gray-600'>
									Desarrollamos planos detallados y establecemos el cronograma y presupuesto.
								</p>
							</div>
							<div className='hidden lg:block absolute top-1/2 left-full w-full h-1 bg-construction-gray-300 -z-10 transform -translate-y-1/2'></div>
						</div>

						<div className='relative'>
							<div className='bg-white p-8 rounded-lg shadow-lg text-center h-full hover-scale'>
								<div className='w-12 h-12 bg-construction-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
									3
								</div>
								<h3 className='text-xl font-bold mb-3'>Construcción</h3>
								<p className='text-construction-gray-600'>
									Ejecutamos el proyecto con equipos especializados y supervisión constante.
								</p>
							</div>
							<div className='hidden lg:block absolute top-1/2 left-full w-full h-1 bg-construction-gray-300 -z-10 transform -translate-y-1/2'></div>
						</div>

						<div>
							<div className='bg-white p-8 rounded-lg shadow-lg text-center h-full hover-scale'>
								<div className='w-12 h-12 bg-construction-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
									4
								</div>
								<h3 className='text-xl font-bold mb-3'>Entrega Final</h3>
								<p className='text-construction-gray-600'>
									Revisamos todos los detalles y te entregamos un proyecto de calidad.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-construction-blue-700 relative'>
				<div
					className='absolute inset-0 bg-fixed opacity-20'
					style={{
						backgroundImage: "url('https://images.unsplash.com/photo-1431576901776-e539bd916ba2')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				></div>
				<div className='container mx-auto px-4 relative z-10'>
					<div className='max-w-3xl mx-auto text-center text-white'>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>¿Tienes un proyecto en mente?</h2>
						<p className='text-xl mb-8'>
							Nuestro equipo está listo para ayudarte a hacerlo realidad. Contáctanos para una
							consulta personalizada.
						</p>
						<Link to='/contacto'>
							<Button className='bg-construction-orange-500 hover:bg-construction-orange-600 text-white px-8 py-6 text-lg'>
								Solicitar Cotización Gratuita <ArrowRight className='ml-2' size={18} />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Servicios
