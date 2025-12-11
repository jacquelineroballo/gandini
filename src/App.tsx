import { Suspense } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import AnalyticsProvider from '@/components/AnalyticsProvider'
import { RoutePrefetcher, routeConfig } from '@/components/RoutePrefetcher'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { PageSkeleton } from '@/components/ui/PageSkeleton'

// Importaciones directas de páginas
import Index from './pages/Index'
import Servicios from './pages/Servicios'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

// Configuración optimizada de React Query
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000, // 5 minutos
			gcTime: 15 * 60 * 1000, // 15 minutos
			retry: (failureCount, error: unknown) => {
				if ((error as { status?: number })?.status === 404) return false
				return failureCount < 3
			},
			refetchOnWindowFocus: false,
			refetchOnReconnect: 'always',
		},
		mutations: {
			retry: 1,
			networkMode: 'offlineFirst',
		},
	},
})

const App = () => {
	return (
		<ErrorBoundary>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<TooltipProvider>
						<Toaster />
						<Sonner />
						<AnalyticsProvider>
							<BrowserRouter>
								<RoutePrefetcher routes={routeConfig} />
								<Suspense fallback={<PageSkeleton />}>
									<Routes>
										<Route path='/' element={<Index />} />
										<Route path='/servicios' element={<Servicios />} />
										<Route path='/proyectos' element={<Proyectos />} />
										<Route path='/contacto' element={<Contacto />} />
										<Route path='*' element={<NotFound />} />
									</Routes>
								</Suspense>
							</BrowserRouter>
						</AnalyticsProvider>
					</TooltipProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</ErrorBoundary>
	)
}

export default App
