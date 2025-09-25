interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string
	alt: string
	fallbackSrc?: string
	className?: string
	priority?: boolean
}

export const OptimizedImage = ({
	src,
	alt,
	fallbackSrc,
	className,
	priority = false,
	...props
}: OptimizedImageProps) => {
	return (
		<img
			src={src}
			alt={alt}
			loading={priority ? 'eager' : 'lazy'}
			className={className}
			onError={(e) => {
				if (fallbackSrc) {
					e.currentTarget.src = fallbackSrc
				}
			}}
			{...props}
		/>
	)
}

// Hook para precargar imágenes
export const useImagePreloader = () => {
	const preloadImage = (src: string): Promise<void> => {
		return new Promise((resolve, reject) => {
			const img = new Image()
			img.onload = () => resolve()
			img.onerror = reject
			img.src = src
		})
	}

	const preloadImages = async (sources: string[]): Promise<void> => {
		try {
			await Promise.all(sources.map(preloadImage))
		} catch (error) {
			console.warn('Error preloading images:', error)
		}
	}

	return { preloadImage, preloadImages }
}
