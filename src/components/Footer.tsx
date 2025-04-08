import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-teal-950 dark:bg-gray-900/95 text-white'>
			<div className='container mx-auto py-10 px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
					{/* Company Info */}
					<div>
						<h3 className='text-2xl font-bold mb-6'>
							<span className='text-teal-500'>Gandini</span>
						</h3>
						<p className='mb-6 text-gray-300'>
							Con más de 30 años de experiencia, construimos el futuro con calidad y
							profesionalismo.
						</p>
					</div>

					{/* Services */}
					<div>
						<h4 className='text-xl text-teal-500 font-bold mb-6'>Servicios</h4>
						<ul className='space-y-3'>
							<li>
								<Link
									to='/servicios'
									className='text-gray-300 hover:text-teal-500 transition-colors'
								>
									Construcción Residencial
								</Link>
							</li>
							<li>
								<Link
									to='/servicios'
									className='text-gray-300 hover:text-teal-500 transition-colors'
								>
									Construcción Comercial
								</Link>
							</li>
							<li>
								<Link
									to='/servicios'
									className='text-gray-300 hover:text-teal-500 transition-colors'
								>
									Renovaciones
								</Link>
							</li>
							<li>
								<Link
									to='/servicios'
									className='text-gray-300 hover:text-teal-500 transition-colors'
								>
									Albañilería Especializada
								</Link>
							</li>
							<li>
								<Link
									to='/servicios'
									className='text-gray-300 hover:text-teal-500 transition-colors'
								>
									Pintura
								</Link>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-xl text-teal-500 font-bold mb-6'>Enlaces Rápidos</h4>
						<ul className='space-y-3'>
							<li>
								<Link to='/' className='text-gray-300 hover:text-teal-500 transition-colors'>
									Inicio
								</Link>
							</li>
							<li>
								<Link
									to='/proyectos'
									className='text-gray-300 hover:text-teal-500 transition-colors'
								>
									Proyectos
								</Link>
							</li>
							<li>
								<Link
									to='/nosotros'
									className='text-gray-300 hover:text-teal-500 transition-colors'
								>
									Sobre Nosotros
								</Link>
							</li>
							<li>
								<Link
									to='/contacto'
									className='text-gray-300 hover:text-teal-500 transition-colors'
								>
									Contacto
								</Link>
							</li>
							<li>
								<Link to='/blog' className='text-gray-300 hover:text-teal-500 transition-colors'>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className='text-xl text-teal-500 font-bold mb-6'>Contactanos</h4>
						<div className='space-y-4'>
							<div className='flex items-start gap-3'>
								<MapPin
									className='text-teal-500 hover:text-white transition-colors mt-1'
									size={20}
								/>
								<span className='text-gray-300'>General San Martín, Buenos Aires, Argentina.</span>
							</div>
							<div className='flex items-center gap-3'>
								<Phone className='text-teal-500 hover:text-white transition-colors' size={20} />
								<span className='text-gray-300'>+54 15 5020 8890</span>
							</div>
							<div className='flex items-center gap-3'>
								<Mail className='text-teal-500 hover:text-white transition-colors' size={20} />
								<span className='text-gray-300'>camigandini@gmail.com</span>
							</div>
							<div className='flex items-start gap-3'>
								<Clock
									className='text-teal-500 hover:text-white transition-colors mt-1'
									size={20}
								/>
								<span className='text-gray-300'>Lun - Vie: 8:00 AM - 5:00 PM</span>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-10'>
					<p className='text-center text-gray-400'>
						<span className='font-semibold'>Gandini {currentYear}</span> © Todos los derechos
						reservados.
					</p>
				</div>

				<div className='mx-auto text-center mt-2'>
					<div className='inline-flex gap-2'>
						<p className='text-gray-400'>Desarrollado por</p>
						<Link
							to='https://www.linkedin.com/in/jacquelineroballo/'
							className='font-semibold text-linear-65 from-purple-500 to-pink-500'
						>
							Jacqueline
						</Link>
						<Heart
							className='text-red-900 hover:text-white transition-colors animate-bounce'
							size={20}
						/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
