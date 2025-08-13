import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase } from 'lucide-react'
import { OptimizedImage } from '@/components/ui/OptimizedImage'

interface HeroProps {
	title: string
	subtitle: string
	backgroundImage?: string
	buttonText?: string
	buttonLink?: string
}

const ModernHero = ({
	title,
	subtitle,
	backgroundImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
	buttonText = 'Saber más',
	buttonLink = '/servicios',
}: HeroProps) => {
	const scrollToContent = () => {
		const contentSection = document.getElementById('content-section')
		if (contentSection) {
			contentSection.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Background Image with Overlay */}
			<div className='absolute inset-0 z-0'>
				<motion.div
					initial={{ scale: 1.1, opacity: 0.5 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.5, ease: 'easeOut' }}
					className='absolute inset-0'
				>
					<OptimizedImage
						src={backgroundImage}
						alt='Construction background'
						className='w-full h-full object-cover object-center'
						priority={true}
						fallbackSrc='https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2832&auto=format&fit=crop'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80' />
				</motion.div>

				{/* Animated patterns */}
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23fff%22 fill-opacity=%220.05%22 fill-rule=%22evenodd%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%223%22/%3E%3Ccircle cx=%2213%22 cy=%2213%22 r=%223%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

				{/* Moving light effect - Optimizado para mejor rendimiento */}
				<motion.div
					className='absolute -top-[30%] -left-[10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px]'
					style={{ willChange: 'transform' }}
					animate={{
						x: [0, 30, 0],
						y: [0, 20, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>

				<motion.div
					className='absolute -bottom-[30%] -right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]'
					style={{ willChange: 'transform' }}
					animate={{
						x: [0, -30, 0],
						y: [0, -20, 0],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
				/>
			</div>

			<div className='container mx-auto px-4 pt-40 pb-20 relative z-10'>
				<div className='max-w-4xl mx-auto text-center'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='relative inline-block mb-6'
					>
						<span className='bg-teal-500 text-white text-sm font-semibold tracking-wider uppercase py-1.5 px-4 rounded-full'>
							Expertos en Construcción
						</span>
						<motion.div
							className='absolute -bottom-1 -right-1 w-full h-full rounded-full bg-teal-500/30'
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 2, repeat: Infinity }}
						/>
					</motion.div>

					<motion.h1
						className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						{title.split(' ').map((word, i) => (
							<motion.span
								key={i}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
								className='inline-block mr-2 mb-2'
							>
								{i % 3 === 0 ? (
									<span className='relative'>
										{word}
										<motion.span
											className='absolute -bottom-1 left-0 w-full h-1 bg-teal-500 rounded'
											initial={{ scaleX: 0, originX: 0 }}
											animate={{ scaleX: 1 }}
											transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
										/>
									</span>
								) : (
									word
								)}
							</motion.span>
						))}
					</motion.h1>

					<motion.p
						className='text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						{subtitle}
					</motion.p>

					<motion.div
						className='flex flex-col sm:flex-row gap-4 justify-center'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.7 }}
					>
						<Link to={buttonLink}>
							<Button
								className='bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg shadow-xl btn-glow relative overflow-hidden group'
								size='lg'
							>
								<span className='relative z-10 flex items-center'>
									{buttonText}
									<motion.span
										animate={{ x: [0, 5, 0] }}
										transition={{ duration: 1.5, repeat: Infinity }}
									>
										<ArrowRight className='ml-2 h-5 w-5' />
									</motion.span>
								</span>
								<span className='absolute inset-0 w-full h-full bg-gradient-to-r from-teal-600 to-teal-500 group-hover:opacity-90 transition-opacity' />
								<motion.span
									className='absolute inset-0 w-full h-full bg-teal-600/50'
									animate={{
										scale: [1, 1.05, 1],
										opacity: [0, 0.3, 0],
									}}
									transition={{ duration: 2, repeat: Infinity }}
								/>
							</Button>
						</Link>

						<Link to='/proyectos'>
							<Button
								variant='outline'
								className='dark:bg-white border-white/70 text-teal-700 hover:bg-white/10 hover:text-white px-8 py-6 text-lg'
							>
								<Briefcase className='mr-2 h-4 w-4' />
								<span>Ver Proyectos</span>
							</Button>
						</Link>
					</motion.div>
				</div>
			</div>

			{/* Angled Divider */}
			<div className='absolute bottom-0 left-0 w-full overflow-hidden rotate-180 top-20'>
				<svg
					className='relative block w-full h-[60px] text-white dark:text-gray-900'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M1200 120L0 16.48V0h1200v120z' fill='currentColor'></path>
				</svg>
			</div>
		</div>
	)
}

export default ModernHero
