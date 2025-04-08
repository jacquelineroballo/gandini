import { useEffect, useRef } from 'react'
import ModernHero from '@/components/ModernHero'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
	ArrowRight,
	Award,
	CheckCircle,
	Clock,
	Users,
	Activity,
	Briefcase,
	Building,
	Shield,
	Phone,
	Calendar,
	Target,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0)

		// Add scroll reveal effect
		const handleScroll = () => {
			const reveals = document.querySelectorAll('.reveal')

			for (let i = 0; i < reveals.length; i++) {
				const windowHeight = window.innerHeight
				const elementTop = reveals[i].getBoundingClientRect().top
				const elementVisible = 150

				if (elementTop < windowHeight - elementVisible) {
					reveals[i].classList.add('active')
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Trigger on load

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Parallax scrolling effect
	const { scrollY } = useScroll()
	const y1 = useTransform(scrollY, [0, 500], [0, -100])
	const y2 = useTransform(scrollY, [0, 500], [0, -50])

	// Track element visibility for animations
	const whyUsRef = useRef(null)
	const ctaRef = useRef(null)
	const countersRef = useRef(null)
	const isWhyUsVisible = useInView(whyUsRef, { once: true, amount: 0.3 })
	const isCtaVisible = useInView(ctaRef, { once: true, amount: 0.3 })
	const isCountersVisible = useInView(countersRef, { once: true, amount: 0.3 })

	// Counter animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	}

	return (
		<>
			<Navbar />
			<ModernHero
				title='Construimos el Futuro con Calidad y Precisión'
				subtitle='Soluciones integrales en construcción y albañilería para proyectos residenciales y comerciales con los más altos estándares de calidad.'
				backgroundImage='https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2832&auto=format&fit=crop'
				buttonText='Nuestros Servicios'
				buttonLink='/servicios'
			/>

			{/* Why Choose Us */}
			<section
				id='content-section'
				className='section-padding relative overflow-hidden bg-white dark:bg-gray-900'
			>
				{/* Background elements */}
				<div className='absolute inset-0 overflow-hidden'>
					<motion.div
						style={{ y: y2 }}
						className='absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
					/>
					<div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20 dark:bg-[radial-gradient(#2a2a2a_1px,transparent_1px)]' />
				</div>

				<div className='container mx-auto relative' ref={whyUsRef}>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						animate={isWhyUsVisible ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
					>
						<span className='text-teal-500 text-sm font-semibold tracking-wider uppercase mb-2 block'>
							Por qué elegirnos
						</span>
						<h2 className='text-3xl md:text-4xl font-bold mb-4 relative inline-block dark:text-white'>
							Excelencia en Cada Proyecto
							<motion.span
								className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500'
								initial={{ width: 0 }}
								animate={isWhyUsVisible ? { width: 80 } : {}}
								transition={{ delay: 0.4, duration: 0.8 }}
							></motion.span>
						</h2>
						<p className='text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg'>
							Con más de 30 años de experiencia en el sector, ofrecemos soluciones constructivas de
							alta calidad con un enfoque centrado en el cliente.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<motion.div
							className='bg-white dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group'
							initial={{ opacity: 0, y: 50 }}
							animate={isWhyUsVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.1 }}
							whileHover={{
								y: -5,
								boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
							}}
						>
							<div className='absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							<div className='w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-inner'>
								<Award className='text-teal-500' size={32} />
								<motion.div
									className='absolute inset-0 rounded-xl bg-teal-500/10'
									animate={{
										scale: [1, 1.5, 1],
										opacity: [0.5, 0, 0.5],
									}}
								/>
							</div>
							<h3 className='text-xl font-bold mb-3 dark:text-white'>Calidad Superior</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								Utilizamos materiales de primera calidad y las mejores técnicas constructivas para
								garantizar resultados duraderos.
							</p>
						</motion.div>

						<motion.div
							className='bg-white dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group'
							initial={{ opacity: 0, y: 50 }}
							animate={isWhyUsVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.2 }}
							whileHover={{
								y: -5,
								boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
							}}
						>
							<div className='absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							<div className='w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-inner'>
								<Users className='text-teal-500' size={32} />
								<motion.div
									className='absolute inset-0 rounded-xl bg-teal-500/10'
									animate={{
										scale: [1, 1.5, 1],
										opacity: [0.5, 0, 0.5],
									}}
								/>
							</div>
							<h3 className='text-xl font-bold mb-3 dark:text-white'>Equipo Profesional</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								Nos dedicamos a mantenernos a la vanguardia a través de constante capacitación,
								asegurándonos de ofrecer soluciones innovadoras y de calidad.
							</p>
						</motion.div>

						<motion.div
							className='bg-white dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group'
							initial={{ opacity: 0, y: 50 }}
							animate={isWhyUsVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.3 }}
							whileHover={{
								y: -5,
								boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
							}}
						>
							<div className='absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							<div className='w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-inner'>
								<Clock className='text-teal-500' size={32} />
								<motion.div
									className='absolute inset-0 rounded-xl bg-teal-500/10'
									animate={{
										scale: [1, 1.5, 1],
										opacity: [0.5, 0, 0.5],
									}}
								/>
							</div>
							<h3 className='text-xl font-bold mb-3 dark:text-white'>Entregas a Tiempo</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								Cumplimos rigurosamente con los plazos establecidos, respetando el cronograma
								acordado con nuestros clientes.
							</p>
						</motion.div>

						<motion.div
							className='bg-white dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group'
							initial={{ opacity: 0, y: 50 }}
							animate={isWhyUsVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.4 }}
							whileHover={{
								y: -5,
								boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
							}}
						>
							<div className='absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							<div className='w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-inner'>
								<CheckCircle className='text-teal-500' size={32} />
								<motion.div
									className='absolute inset-0 rounded-xl bg-teal-500/10'
									animate={{
										scale: [1, 1.5, 1],
										opacity: [0.5, 0, 0.5],
									}}
								/>
							</div>
							<h3 className='text-xl font-bold mb-3 dark:text-white'>Innovación</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								Implementamos las últimas herramientas del mercado. Garantizando soluciones
								eficientes, adaptadas a las necesidades de nuestros clientes.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				viewport={{ once: true }}
			>
				<ServicesSection />
			</motion.div>

			{/* CTA Section */}
			<section
				className='py-28 bg-gradient-to-br from-teal-700 to-blue-900 relative overflow-hidden'
				ref={ctaRef}
			>
				{/* Animated pattern overlay */}
				<div className='absolute inset-0'>
					<motion.div
						className='absolute inset-0 opacity-20'
						animate={{
							backgroundPosition: ['0% 0%', '100% 100%'],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'linear',
						}}
						style={{
							backgroundImage:
								'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
							backgroundSize: '30px 30px',
						}}
					/>
				</div>

				<div
					className='absolute inset-0 bg-fixed opacity-20'
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1974&auto=format&fit=crop')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				></div>

				{/* Animated particles */}
				{[...Array(12)].map((_, i) => (
					<motion.div
						key={i}
						className='absolute w-2 h-2 rounded-full bg-white/30'
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -15, 0],
							opacity: [0.3, 0.8, 0.3],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: Math.random() * 2,
						}}
					/>
				))}

				<div className='container mx-auto px-4 relative z-10'>
					<motion.div
						className='max-w-3xl mx-auto text-center text-white'
						initial={{ opacity: 0, y: 30 }}
						animate={isCtaVisible ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
					>
						<motion.h2
							className='text-3xl md:text-5xl font-bold mb-6 leading-tight'
							initial={{ opacity: 0, y: 20 }}
							animate={isCtaVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							¿Listo para comenzar tu proyecto?
						</motion.h2>

						<motion.p
							className='text-xl mb-10 text-white/90'
							initial={{ opacity: 0 }}
							animate={isCtaVisible ? { opacity: 1 } : {}}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Contactanos hoy para una consulta gratuita y descubramos cómo llevar tu visión al
							siguiente nivel. ¡El futuro de tus proyectos empieza aquí!
						</motion.p>

						<motion.div
							className='flex flex-col sm:flex-row gap-6 justify-center'
							initial={{ opacity: 0, y: 20 }}
							animate={isCtaVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Link to='/contacto'>
								<Button className='border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-teal-700 px-8 py-6 text-lg backdrop-blur-sm'>
									<Phone className='mr-2 h-4 w-4' />
									<span>Solicitar Cotización</span>
								</Button>
							</Link>
							<Link to='/proyectos'>
								<Button
									variant='outline'
									className='border-white/70 text-teal-700 hover:bg-white/10 hover:text-white px-8 py-6 text-lg'
								>
									<Briefcase className='mr-2 h-4 w-4' />
									<span>Ver Proyectos</span>
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>

				{/* <div className='absolute bottom-10 left-0 w-full overflow-hidden'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
						<path fill='#ffffff' fill-opacity='1' d='M0,224L1440,64L1440,320L0,320Z'></path>
					</svg>
				</div> */}
			</section>

			{/* <ProjectsSection /> 
			<TestimonialsSection />*/}

			{/* Counter Section */}
			<section
				className='section-padding bg-white text-teal-700 overflow-hidden relative'
				ref={countersRef}
			>
				{/* Background pattern */}
				<div className='absolute inset-0 opacity-10'>
					<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.4%22%3E%3Cpath opacity=%22.5%22 d=%22M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
				</div>

				<div className='container mx-auto relative'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						animate={isCountersVisible ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
					>
						<span className='text-teal-400 text-sm font-semibold tracking-wider uppercase mb-2 block'>
							Nuestros logros
						</span>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Números que hablan por sí solos</h2>
					</motion.div>

					<motion.div
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center'
						variants={containerVariants}
						initial='hidden'
						animate={isCountersVisible ? 'visible' : 'hidden'}
					>
						<motion.div variants={itemVariants} className='p-6 relative'>
							<div className='absolute inset-0 bg-white/5 rounded-xl -z-10'></div>
							<motion.div
								className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/10 rounded-xl -z-10'
								animate={{
									boxShadow: [
										'0 0 0 0 rgba(20,184,166,0)',
										'0 0 0 10px rgba(20,184,166,0.1)',
										'0 0 0 0 rgba(20,184,166,0)',
									],
								}}
								transition={{ duration: 3, repeat: Infinity }}
							></motion.div>
							<motion.div
								className='text-5xl font-bold text-teal-400 mb-2 flex items-center justify-center gap-2'
								initial={{ opacity: 0.3 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, yoyo: Infinity }}
							>
								<Briefcase className='w-8 h-8 text-teal-700' />
								<motion.span
									initial={{ opacity: 0, scale: 0.5 }}
									animate={
										isCountersVisible
											? { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } }
											: {}
									}
								>
									+500
								</motion.span>
							</motion.div>
							<p className='text-lg text-teal-700'>Proyectos Completados</p>
						</motion.div>

						<motion.div variants={itemVariants} className='p-6 relative'>
							<div className='absolute inset-0 bg-white/5 rounded-xl -z-10'></div>
							<motion.div
								className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/10 rounded-xl -z-10'
								animate={{
									boxShadow: [
										'0 0 0 0 rgba(20,184,166,0)',
										'0 0 0 10px rgba(20,184,166,0.1)',
										'0 0 0 0 rgba(20,184,166,0)',
									],
								}}
								transition={{ duration: 3, repeat: Infinity, delay: 1 }}
							></motion.div>
							<motion.div
								className='text-5xl font-bold text-teal-400 mb-2 flex items-center justify-center gap-2'
								initial={{ opacity: 0.3 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, yoyo: Infinity, delay: 0.3 }}
							>
								<Calendar className='w-8 h-8 text-teal-700' />
								<motion.span
									initial={{ opacity: 0, scale: 0.5 }}
									animate={
										isCountersVisible
											? { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.7 } }
											: {}
									}
								>
									+30
								</motion.span>
							</motion.div>
							<p className='text-lg text-teal-700'>Años de Experiencia</p>
						</motion.div>

						<motion.div variants={itemVariants} className='p-6 relative'>
							<div className='absolute inset-0 bg-white/5 rounded-xl -z-10'></div>
							<motion.div
								className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/10 rounded-xl -z-10'
								animate={{
									boxShadow: [
										'0 0 0 0 rgba(20,184,166,0)',
										'0 0 0 10px rgba(20,184,166,0.1)',
										'0 0 0 0 rgba(20,184,166,0)',
									],
								}}
								transition={{ duration: 3, repeat: Infinity, delay: 2 }}
							></motion.div>
							<motion.div
								className='text-5xl font-bold text-teal-400 mb-2 flex items-center justify-center gap-2'
								initial={{ opacity: 0.3 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, yoyo: Infinity, delay: 0.6 }}
							>
								<Users className='w-8 h-8 text-teal-700' />
								<motion.span
									initial={{ opacity: 0, scale: 0.5 }}
									animate={
										isCountersVisible
											? { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.9 } }
											: {}
									}
								>
									99 %
								</motion.span>
							</motion.div>
							<p className='text-lg text-teal-700'>Clientes Satisfechos</p>
						</motion.div>

						<motion.div variants={itemVariants} className='p-6 relative'>
							<div className='absolute inset-0 bg-white/5 rounded-xl -z-10'></div>
							<motion.div
								className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/10 rounded-xl -z-10'
								animate={{
									boxShadow: [
										'0 0 0 0 rgba(20,184,166,0)',
										'0 0 0 10px rgba(20,184,166,0.1)',
										'0 0 0 0 rgba(20,184,166,0)',
									],
								}}
								transition={{ duration: 3, repeat: Infinity, delay: 3 }}
							></motion.div>
							<motion.div
								className='text-5xl font-bold text-teal-400 mb-2 flex items-center justify-center gap-2'
								initial={{ opacity: 0.3 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, yoyo: Infinity, delay: 0.9 }}
							>
								<Target className='w-8 h-8 text-teal-700' />
								<motion.span
									initial={{ opacity: 0, scale: 0.5 }}
									animate={
										isCountersVisible
											? { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1.1 } }
											: {}
									}
								>
									100%
								</motion.span>
							</motion.div>
							<p className='text-lg text-teal-700'>Mejores Precios</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Home
