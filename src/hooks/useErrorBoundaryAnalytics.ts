import { useEffect } from 'react'

interface ErrorBoundaryAnalyticsProps {
	error: Error
	componentStack: string
}

const useErrorBoundaryAnalytics = ({ error, componentStack }: ErrorBoundaryAnalyticsProps) => {
	useEffect(() => {
		// Aquí puedes integrar con tu servicio de analytics
		const errorDetails = {
			name: error.name,
			message: error.message,
			stack: error.stack,
			componentStack,
			timestamp: new Date().toISOString(),
			url: window.location.href,
			userAgent: navigator.userAgent,
		}

		// Log del error para desarrollo
		if (process.env.NODE_ENV === 'development') {
			console.group('Error Boundary Details')
			console.error('Error:', error)
			console.error('Component Stack:', componentStack)
			console.error('Full Details:', errorDetails)
			console.groupEnd()
		}

		// En producción, enviar a un servicio de monitoreo
		if (process.env.NODE_ENV === 'production') {
			// Ejemplo de envío a un endpoint de error logging
			fetch('/api/error-logging', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(errorDetails),
			}).catch(console.error)
		}
	}, [error, componentStack])
}

export default useErrorBoundaryAnalytics
