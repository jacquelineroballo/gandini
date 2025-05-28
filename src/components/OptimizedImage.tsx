
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
	src: string
	alt: string
	className?: string
	width?: number
	height?: number
	priority?: boolean
	quality?: number
	sizes?: string
}

const OptimizedImage = ({
	src,
	alt,
	className,
	width = 800,
	height = 600,
	priority = false,
	quality = 80,
	sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [hasError, setHasError] = useState(false)

	// Generate optimized Unsplash URL
	const optimizedSrc = src.includes('unsplash.com')
		? `${src}?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=${quality}`
		: src

	// Generate WebP version for better compression
	const webpSrc = src.includes('unsplash.com')
		? `${src}?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=${quality}&fm=webp`
		: src

	const fallbackImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&crop=center&auto=format&q=80'

	return (
		<div className={cn('relative overflow-hidden', className)}>
			{/* Loading skeleton */}
			{!isLoaded && !hasError && (
				<div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
			)}

			<picture>
				{/* WebP version for modern browsers */}
				<source srcSet={webpSrc} type="image/webp" sizes={sizes} />
				
				{/* Fallback image */}
				<motion.img
					src={hasError ? fallbackImage : optimizedSrc}
					alt={alt}
					className={cn(
						'w-full h-full object-cover transition-opacity duration-300',
						isLoaded ? 'opacity-100' : 'opacity-0'
					)}
					loading={priority ? 'eager' : 'lazy'}
					decoding="async"
					onLoad={() => setIsLoaded(true)}
					onError={() => {
						setHasError(true)
						setIsLoaded(true)
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: isLoaded ? 1 : 0 }}
					transition={{ duration: 0.3 }}
				/>
			</picture>

			{/* Overlay for better text readability when needed */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
		</div>
	)
}

export default OptimizedImage
