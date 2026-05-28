import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const clearLegacyRuntimeCaches = async () => {
	if ('caches' in window) {
		const cacheNames = await caches.keys()
		await Promise.all(
			cacheNames
				.filter((cacheName) => cacheName.startsWith('gandini-cache'))
				.map((cacheName) => caches.delete(cacheName))
		)
	}
}

if ('serviceWorker' in navigator) {
	if (import.meta.env.PROD) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/sw.js').catch(console.error)
		})
	} else {
		void navigator.serviceWorker
			.getRegistrations()
			.then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
			.then(clearLegacyRuntimeCaches)
			.catch(console.error)
	}
}

createRoot(document.getElementById('root')!).render(<App />)
