import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
	Briefcase,
	Phone,
	ChevronDown,
	MenuIcon,
	X,
	Home,
	Settings,
	FileText,
	Activity,
	CheckCircle,
	HelpCircle,
	Clock,
	Award,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const location = useLocation()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navLinks = [
		{ title: 'Inicio', href: '/', icon: Home },
		{ title: 'Servicios', href: '/servicios', icon: Settings },
		{ title: 'Proyectos', href: '/proyectos', icon: Briefcase },
		{ title: 'Contacto', href: '/contacto', icon: Phone },
	]

	const isActive = (path: string) => location.pathname === path

	// Animations
	const navVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	}

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-500 ${
				isScrolled
					? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2'
					: 'bg-transparent py-5'
			}`}
		>
			<div className='container mx-auto px-4'>
				<motion.div
					className='flex justify-between items-center'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Link to='/' className='flex items-center'>
						<motion.div
							className='relative overflow-hidden group'
							whileHover={{ scale: 1.05 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<motion.h1
								className='text-2xl font-bold font-montserrat relative z-10'
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
							>
								<motion.span
									className='text-teal-500 relative inline-block mx-2'
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.2 },
									}}
								>
									Gandini
									<motion.span
										className='absolute bottom-0 left-0 w-full h-[3px] bg-teal-500 rounded-full'
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{ delay: 0.5, duration: 0.5 }}
									/>
								</motion.span>
							</motion.h1>
							<motion.div
								className='absolute -bottom-2 -right-2 w-12 h-12 bg-teal-500/10 rounded-full z-0'
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.7, 0.3, 0.7],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>
						</motion.div>
					</Link>

					{/* Desktop Navigation */}
					<motion.nav
						className='hidden lg:flex items-center gap-1'
						variants={navVariants}
						initial='hidden'
						animate='visible'
					>
						<NavigationMenu className='z-10'>
							<NavigationMenuList>
								{navLinks.map((link, index) => (
									<NavigationMenuItem key={link.title}>
										<Link to={link.href}>
											<NavigationMenuLink
												className={cn(
													'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-white text-sm font-medium transition-colors hover:bg-teal-500/10 hover:text-teal-500 focus:bg-teal-500/10 focus:text-teal-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
													isActive(link.href)
														? 'bg-teal-500/10 text-teal-500 font-semibold'
														: 'text-gray-700 dark:text-gray-200'
												)}
											>
												<motion.div variants={itemVariants} className='flex items-center gap-1.5'>
													<link.icon className='w-4 h-4' />
													<span>{link.title}</span>
												</motion.div>
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								))}

								{/* Servicios Dropdown */}
								<NavigationMenuItem>
									<NavigationMenuTrigger
										className={cn(
											'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-teal-500/10 hover:text-teal-500 focus:bg-teal-500/10 focus:text-teal-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
											isActive('/servicios-detalle')
												? 'bg-teal-500/10 text-teal-500'
												: 'text-gray-700 dark:text-gray-200'
										)}
									>
										<motion.div variants={itemVariants} className='flex items-center gap-1.5'>
											<FileText className='w-4 h-4' />
											<span>Especialidades</span>
										</motion.div>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
											{[
												{
													title: 'Construcción Residencial',
													description:
														'Casas y edificios residenciales con los más altos estándares',
													icon: Home,
												},
												{
													title: 'Proyectos Comerciales',
													description: 'Oficinas, locales y espacios comerciales modernos',
													icon: Briefcase,
												},
												{
													title: 'Renovaciones',
													description: 'Transformamos espacios existentes con un nuevo diseño',
													icon: Activity,
												},
												{
													title: 'Consultoría',
													description: 'Asesoría experta para tu próximo proyecto de construcción',
													icon: HelpCircle,
												},
											].map((service) => (
												<li key={service.title}>
													<NavigationMenuLink asChild>
														<a
															href='#'
															className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-500/10 hover:text-teal-500'
														>
															<div className='flex items-center gap-2 mb-1 text-sm font-medium leading-none'>
																<service.icon className='h-4 w-4' />
																<span>{service.title}</span>
															</div>
															<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
																{service.description}
															</p>
														</a>
													</NavigationMenuLink>
												</li>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<motion.div variants={itemVariants} className='ml-4' whileHover={{ scale: 1.05 }}>
							<Button className='bg-teal-500 hover:bg-teal-600 text-white shadow-lg btn-glow'>
								<Phone className='mr-2 h-4 w-4' /> Cotización Gratis
							</Button>
						</motion.div>
					</motion.nav>

					{/* Mobile Menu */}
					<div className='lg:hidden'>
						<Drawer>
							<DrawerTrigger asChild>
								<Button
									variant='outline'
									size='icon'
									className='h-9 w-9 border-teal-500/20 hover:bg-teal-500/10 hover:text-teal-500'
								>
									<MenuIcon className='h-5 w-5' />
								</Button>
							</DrawerTrigger>
							<DrawerContent className='bg-white dark:bg-gray-900 max-h-[85vh]'>
								<DrawerHeader>
									<DrawerTitle className='flex items-center justify-center'>
										<span className='text-teal-500'>Gandini</span>
									</DrawerTitle>
									<DrawerDescription className='text-center'>Navegación</DrawerDescription>
								</DrawerHeader>
								<div className='px-4 py-2 space-y-2'>
									{navLinks.map((link) => (
										<DrawerClose asChild key={link.title}>
											<Link
												to={link.href}
												className={cn(
													'flex items-center gap-3 w-full p-3 rounded-md transition-all',
													isActive(link.href)
														? 'bg-teal-500/10 text-teal-500 font-medium'
														: 'hover:bg-teal-500/10 hover:text-teal-500'
												)}
											>
												<link.icon className='h-5 w-5' />
												<span>{link.title}</span>
												{isActive(link.href) && (
													<motion.span
														className='ml-auto'
														initial={{ scale: 0 }}
														animate={{ scale: 1 }}
														transition={{ duration: 0.3 }}
													>
														<CheckCircle className='h-4 w-4 text-teal-500' />
													</motion.span>
												)}
											</Link>
										</DrawerClose>
									))}

									<div className='py-2'>
										<p className='text-sm font-medium text-muted-foreground mb-2 pl-2'>
											Especialidades
										</p>
										{[
											{ title: 'Construcción Residencial', icon: Home },
											{ title: 'Proyectos Comerciales', icon: Briefcase },
											{ title: 'Renovaciones', icon: Activity },
											{ title: 'Consultoría', icon: HelpCircle },
										].map((service, idx) => (
											<DrawerClose asChild key={service.title}>
												<a
													href='#'
													className='flex items-center gap-3 w-full p-2 px-4 rounded-md hover:bg-teal-500/5 transition-colors text-sm'
												>
													<service.icon className='h-4 w-4 text-teal-500/70' />
													<span>{service.title}</span>
												</a>
											</DrawerClose>
										))}
									</div>
								</div>
								<DrawerFooter>
									<DrawerClose asChild>
										<Button className='bg-teal-500 hover:bg-teal-600 w-full shadow-lg'>
											<Phone className='mr-2 h-4 w-4' /> Solicitar Cotización
										</Button>
									</DrawerClose>
								</DrawerFooter>
							</DrawerContent>
						</Drawer>
					</div>
				</motion.div>
			</div>
		</header>
	)
}

export default Navbar
