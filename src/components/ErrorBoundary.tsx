import { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useErrorBoundaryAnalytics from '@/hooks/useErrorBoundaryAnalytics'

interface Props {
	children: ReactNode
	fallback?: ReactNode
}

interface State {
	hasError: boolean
	error?: Error
	errorInfo?: ErrorInfo
}

export class ErrorBoundary extends Component<Props, State> {
	public override state: State = {
		hasError: false,
	}

	public static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error }
	}

	public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({ errorInfo })
		useErrorBoundaryAnalytics({ error, componentStack: errorInfo.componentStack || '' })
	}

	private handleRetry = () => {
		this.setState({ hasError: false, error: undefined, errorInfo: undefined })
	}

	private handleReload = () => {
		window.location.reload()
	}

	public override render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback
			}

			return (
				<div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4'>
					<div className='max-w-md w-full text-center'>
						<div className='mb-6'>
							<AlertTriangle className='mx-auto h-16 w-16 text-red-500' />
						</div>

						<h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
							¡Oops! Algo salió mal
						</h1>

						<p className='text-gray-600 dark:text-gray-300 mb-8'>
							Ha ocurrido un error inesperado. Puedes intentar recargar la página o volver al
							inicio.
						</p>

						<div className='space-y-3'>
							<Button onClick={this.handleRetry} className='w-full bg-teal-500 hover:bg-teal-600'>
								<RefreshCw className='mr-2 h-4 w-4' />
								Intentar de nuevo
							</Button>

							<Button variant='outline' onClick={this.handleReload} className='w-full'>
								Recargar página
							</Button>

							<Button
								variant='ghost'
								onClick={() => (window.location.href = '/')}
								className='w-full'
							>
								Ir al inicio
							</Button>
						</div>

						{process.env.NODE_ENV === 'development' && this.state.error && (
							<details className='mt-8 text-left'>
								<summary className='cursor-pointer text-sm text-gray-500 hover:text-gray-700'>
									Detalles del error (solo en desarrollo)
								</summary>
								<pre className='mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto'>
									{this.state.error.toString()}
									{this.state.errorInfo?.componentStack}
								</pre>
							</details>
						)}
					</div>
				</div>
			)
		}

		return this.props.children
	}
}
