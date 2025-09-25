import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ROUTE_PATTERNS = {
	home: ['/servicios', '/proyectos', '/contacto'],
	servicios: ['/proyectos', '/contacto'],
	proyectos: ['/servicios', '/contacto'],
	contacto: ['/servicios', '/proyectos'],
}

type RouteKey = keyof typeof ROUTE_PATTERNS

const useRoutePrefetch = () => {
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const currentPath =
			location.pathname === '/' ? 'home' : (location.pathname.slice(1) as RouteKey)
		const routesToPrefetch = ROUTE_PATTERNS[currentPath] || []

		// Prefetch probable routes
		routesToPrefetch.forEach((route) => {
			const link = document.createElement('link')
			link.rel = 'prefetch'
			link.as = 'document'
			link.href = route
			document.head.appendChild(link)

			// Opcional: Pre-cargar el componente
			navigate(route, { replace: false, state: { prefetch: true } })
		})

		// Cleanup
		return () => {
			document.querySelectorAll('link[rel="prefetch"]').forEach((link) => {
				link.remove()
			})
		}
	}, [location.pathname, navigate])
}

export default useRoutePrefetch
