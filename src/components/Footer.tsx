import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Heart, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Button } from './ui/button'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-gradient-to-br from-construction-gray-900 via-construction-gray-800 to-construction-gray-900 text-white relative overflow-hidden'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute inset-0' style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					backgroundSize: '60px 60px'
				}} />
			</div>

			<div className='container mx-auto relative z-10'>
				{/* Main Footer Content */}
				<div className='py-16 px-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
						{/* Company Info */}
						<div className='lg:col-span-1'>
							<div className='mb-6'>
								<h3 className='text-3xl font-bold mb-4'>
									<span className='text-teal-500'>Gandini</span>
								</h3>
								<div className='w-12 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mb-4'></div>
							</div>
							<p className='text-gray-300 leading-relaxed mb-6 text-sm lg:text-base'>
								Con más de 30 años de experiencia, construimos el futuro con calidad, 
								profesionalismo e innovación en cada proyecto.
							</p>
							
							{/* Social Media */}
							<div className='flex gap-3'>
								{[
									{ icon: Facebook, href: '#', label: 'Facebook' },
									{ icon: Instagram, href: '#', label: 'Instagram' },
									{ icon: Linkedin, href: '#', label: 'LinkedIn' },
									{ icon: Twitter, href: '#', label: 'Twitter' }
								].map((social) => (
									<a
										key={social.label}
										href={social.href}
										aria-label={social.label}
										className='w-10 h-10 bg-construction-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg'
									>
										<social.icon size={18} className='text-gray-300 hover:text-white' />
									</a>
								))}
							</div>
						</div>

						{/* Services */}
						<div>
							<h4 className='text-lg font-bold mb-6 text-teal-500'>Nuestros Servicios</h4>
							<ul className='space-y-3'>
								{[
									'Construcción Residencial',
									'Construcción Comercial',
									'Renovaciones Integrales',
									'Albañilería Especializada',
									'Pintura y Acabados',
									'Consultoría Técnica'
								].map((service) => (
									<li key={service}>
										<Link
											to='/servicios'
											className='text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm lg:text-base flex items-center group'
										>
											<span className='w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200'></span>
											{service}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className='text-lg font-bold mb-6 text-teal-500'>Enlaces Rápidos</h4>
							<ul className='space-y-3'>
								{[
									{ name: 'Inicio', path: '/' },
									{ name: 'Proyectos', path: '/proyectos' },
									{ name: 'Sobre Nosotros', path: '/nosotros' },
									{ name: 'Contacto', path: '/contacto' },
									{ name: 'Blog', path: '/blog' },
									{ name: 'Testimonios', path: '/testimonios' }
								].map((link) => (
									<li key={link.name}>
										<Link 
											to={link.path} 
											className='text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm lg:text-base flex items-center group'
										>
											<span className='w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200'></span>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h4 className='text-lg font-bold mb-6 text-teal-500'>Información de Contacto</h4>
							<div className='space-y-4'>
								<div className='flex items-start gap-3 group'>
									<div className='w-10 h-10 bg-construction-gray-700 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-200'>
										<MapPin size={18} className='text-teal-400 group-hover:text-white' />
									</div>
									<div>
										<p className='text-gray-300 text-sm lg:text-base leading-relaxed'>
											General San Martín,<br />Buenos Aires, Argentina
										</p>
									</div>
								</div>

								<div className='flex items-center gap-3 group'>
									<div className='w-10 h-10 bg-construction-gray-700 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-200'>
										<Phone size={18} className='text-teal-400 group-hover:text-white' />
									</div>
									<a href='tel:+5415502088890' className='text-gray-300 hover:text-teal-400 transition-colors text-sm lg:text-base'>
										+54 15 5020 8890
									</a>
								</div>

								<div className='flex items-center gap-3 group'>
									<div className='w-10 h-10 bg-construction-gray-700 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-200'>
										<Mail size={18} className='text-teal-400 group-hover:text-white' />
									</div>
									<a href='mailto:camigandini@gmail.com' className='text-gray-300 hover:text-teal-400 transition-colors text-sm lg:text-base'>
										camigandini@gmail.com
									</a>
								</div>

								<div className='flex items-start gap-3 group'>
									<div className='w-10 h-10 bg-construction-gray-700 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-200'>
										<Clock size={18} className='text-teal-400 group-hover:text-white' />
									</div>
									<div>
										<p className='text-gray-300 text-sm lg:text-base leading-relaxed'>
											Lun - Vie: 8:00 AM - 5:00 PM<br />
											<span className='text-gray-400 text-xs'>Sáb: Solo emergencias</span>
										</p>
									</div>
								</div>
							</div>

							{/* CTA Button */}
							<div className='mt-6'>
								<Link to='/contacto'>
									<Button className='w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg'>
										Solicitar Cotización
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-construction-gray-700'>
					<div className='py-6 px-4'>
						<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
							<div className='flex flex-col md:flex-row items-center gap-4 text-center md:text-left'>
								<p className='text-gray-400 text-sm'>
									© {currentYear} <span className='font-semibold text-teal-400'>Gandini</span>. Todos los derechos reservados.
								</p>
								<div className='flex gap-4 text-xs text-gray-500'>
									<Link to='/privacidad' className='hover:text-teal-400 transition-colors'>Política de Privacidad</Link>
									<Link to='/terminos' className='hover:text-teal-400 transition-colors'>Términos de Uso</Link>
								</div>
							</div>

							<div className='flex items-center gap-2 text-sm text-gray-400'>
								<span>Desarrollado con</span>
								<Heart size={16} className='text-red-500 animate-pulse' />
								<span>por</span>
								<a
									href='https://www.linkedin.com/in/jacquelineroballo/'
									target='_blank'
									rel='noopener noreferrer'
									className='font-semibold text-teal-400 hover:text-teal-300 transition-colors'
								>
									Jacqueline
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
