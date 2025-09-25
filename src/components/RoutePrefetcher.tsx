import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface Route {
	path: string
	component: () => Promise<any>
}

interface RoutePrefetcherProps {
	routes: Route[]
}

const RoutePrefetcher: FC<RoutePrefetcherProps> = ({ routes }) => {
	const location = useLocation()

	useEffect(() => {
		const prefetchRoutes = async () => {
			const currentPath = location.pathname

			// Obtener rutas probables basadas en la ruta actual
			const probableRoutes = routes.filter((route) => {
				if (currentPath === '/') {
					return true // Prefetch todas las rutas desde home
				}
				// Evitar prefetch de la ruta actual
				return route.path !== currentPath
			})

			// Prefetch de componentes en orden de probabilidad
			for (const route of probableRoutes) {
				try {
					await route.component()
				} catch (error) {
					console.error(`Error prefetching route ${route.path}:`, error)
				}
			}
		}

		// Iniciar prefetch después de un pequeño delay para priorizar la carga inicial
		const timeoutId = setTimeout(prefetchRoutes, 2000)
		return () => clearTimeout(timeoutId)
	}, [location.pathname, routes])

	return null
}

// Configuración de rutas y sus componentes lazy
const routeConfig: Route[] = [
	{
		path: '/servicios',
		component: () => import('../pages/Servicios'),
	},
	{
		path: '/proyectos',
		component: () => import('../pages/Proyectos'),
	},
	{
		path: '/contacto',
		component: () => import('../pages/Contacto'),
	},
]

export { RoutePrefetcher, routeConfig }
