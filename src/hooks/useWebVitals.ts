import { useEffect, useCallback } from 'react'
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals'

type MetricName = 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB'

interface Metric {
	name: MetricName
	value: number
	id: string
}

const useWebVitals = (onMetric?: (metric: Metric) => void) => {
	const handleMetric = useCallback(
		(metric: { name: string; value: number; id: string }) => {
			if (onMetric) {
				onMetric(metric as Metric)
			}

			// También podemos enviar las métricas a un servicio de analytics
			if (process.env.NODE_ENV === 'production') {
				// Aquí puedes enviar las métricas a tu servicio de analytics
				console.log(`[Web Vitals] ${metric.name}:`, Math.round(metric.value * 100) / 100)
			}
		},
		[onMetric]
	)

	useEffect(() => {
		onCLS(handleMetric)
		onFID(handleMetric)
		onLCP(handleMetric)
		onFCP(handleMetric)
		onTTFB(handleMetric)
	}, [handleMetric])
}

export default useWebVitals
