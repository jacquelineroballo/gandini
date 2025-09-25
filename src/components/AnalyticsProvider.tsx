import { FC, useEffect } from 'react'
import useWebVitals from '@/hooks/useWebVitals'

interface AnalyticsProviderProps {
	children: React.ReactNode
}

const AnalyticsProvider: FC<AnalyticsProviderProps> = ({ children }) => {
	// Monitorear Web Vitals
	useWebVitals((metric) => {
		// En producción, enviar métricas a tu servicio de analytics
		if (process.env.NODE_ENV === 'production') {
			console.log(`[Web Vitals] ${metric.name}:`, metric.value)
		}
	})

	// Monitorear navegación
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			if (process.env.NODE_ENV === 'production') {
				// Aquí puedes integrar con tu servicio de analytics
				console.log(`[Navigation] Page view: ${url}`)
			}
		}

		// Observar cambios en la URL
		const observer = new MutationObserver(() => {
			handleRouteChange(window.location.pathname)
		})

		observer.observe(document.querySelector('#root')!, {
			childList: true,
			subtree: true,
		})

		return () => observer.disconnect()
	}, [])

	return <>{children}</>
}

export default AnalyticsProvider
