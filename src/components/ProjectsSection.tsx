import { useState, memo } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { OptimizedImage } from '@/components/ui/OptimizedImage'

// Importaciones de imágenes locales
import renovacionCasaImg from '@/assets/images/projects/renovacion-casa.jpg'
import albanileriaImg from '@/assets/images/projects/albanileria.jpg'
import departamentoImg from '@/assets/images/projects/departamento.jpg'
import pinturaImg from '@/assets/images/projects/pintura.jpg'
import consultoriaImg from '@/assets/images/projects/consultoria.jpg'
import restauracionImg from '@/assets/images/projects/restauracion.jpg'

const ProjectsSection = () => {
	console.log('ProjectsSection rendering') // Add this debug log

	const projects = [
		{
			id: 1,
			title: 'Renovación Integral Casa Moderna',
			category: 'Renovaciones',
			imageUrl: renovacionCasaImg,
			link: '/proyectos/renovacion-casa-moderna',
		},
		{
			id: 2,
			title: 'Trabajos de Albañilería Especializada',
			category: 'Albañilería',
			imageUrl: albanileriaImg,
			link: '/proyectos/albanileria-especializada',
		},
		{
			id: 3,
			title: 'Remodelación Departamento',
			category: 'Renovaciones',
			imageUrl: departamentoImg,
			link: '/proyectos/remodelacion-departamento',
		},
		{
			id: 4,
			title: 'Proyecto de Pintura Decorativa',
			category: 'Pintura',
			imageUrl: pinturaImg,
			link: '/proyectos/pintura-decorativa',
		},
		{
			id: 5,
			title: 'Consultoría Técnica Especializada',
			category: 'Consultoría',
			imageUrl: consultoriaImg,
			link: '/proyectos/consultoria-tecnica',
		},
		{
			id: 6,
			title: 'Restauración Edificio Histórico',
			category: 'Restauración',
			imageUrl: restauracionImg,
			link: '/proyectos/restauracion-edificio',
		},
	]

	const [activeFilter, setActiveFilter] = useState('Todos')
	const filters = ['Todos', 'Renovaciones', 'Albañilería', 'Pintura', 'Consultoría']

	const filteredProjects =
		activeFilter === 'Todos'
			? projects
			: projects.filter((project) => project.category === activeFilter)

	return (
		<section className='section-padding' aria-labelledby='projects-heading'>
			<div className='container mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-construction-teal-600 to-construction-blue-600 bg-clip-text text-transparent'>
						Proyectos destacados
					</h2>
					<div className='h-1 w-24 bg-gradient-to-r from-construction-teal-500 to-construction-blue-500 mx-auto rounded-full mb-3'></div>
					<p className='text-gray-600 max-w-3xl mx-auto'>
						Explorá nuestra galería de proyectos exitosos que demuestran nuestra experiencia y
						compromiso con la calidad y la innovación.
					</p>
				</div>

				<div className='flex flex-wrap justify-center gap-3 mb-10' role='tablist'>
					{filters.map((filter) => (
						<Button
							key={filter}
							variant={activeFilter === filter ? 'default' : 'outline'}
							className={
								activeFilter === filter ? 'bg-teal-500 hover:bg-teal-600' : 'border-gray-300'
							}
							onClick={() => setActiveFilter(filter)}
							role='tab'
							aria-selected={activeFilter === filter}
						>
							{filter}
						</Button>
					))}
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredProjects.map((project) => (
						<Link key={project.id} to={project.link} className='group block'>
							<div className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-construction-gray-100'>
								{/* Imagen con overlay */}
								<div className='relative h-64 overflow-hidden'>
									<OptimizedImage
										src={project.imageUrl}
										alt={project.title}
										className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
									/>
									{/* Overlay con gradiente */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

									{/* Badge de categoría */}
									<div className='absolute top-4 left-4'>
										<span className='px-3 py-1 bg-construction-teal-500/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20'>
											{project.category}
										</span>
									</div>

									{/* Icono de enlace */}
									<div className='absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
										<svg
											className='w-5 h-5 text-white'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
											/>
										</svg>
									</div>
								</div>

								{/* Contenido */}
								<div className='p-6'>
									<h3 className='text-xl font-bold text-construction-gray-800 mb-2 group-hover:text-construction-teal-600 transition-colors duration-300'>
										{project.title}
									</h3>
									<p className='text-construction-gray-600 text-sm'>Ver detalles del proyecto</p>
								</div>

								{/* Barra de progreso decorativa */}
								<div className='h-1 bg-construction-gray-100'>
									<div className='h-full bg-gradient-to-r from-construction-teal-500 to-construction-blue-500 w-0 group-hover:w-full transition-all duration-700 ease-out'></div>
								</div>
							</div>
						</Link>
					))}
				</div>

				<div className='text-center mt-12'>
					<Link to='/proyectos'>
						<Button className='bg-teal-600 hover:bg-teal-700'>
							Ver Todos los Proyectos <ArrowRight className='ml-2' size={18} />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default memo(ProjectsSection)
