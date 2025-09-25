import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
	blur?: boolean
}

const OptimizedImage = ({
	src,
	alt,
	className,
	width = 800,
	height = 600,
	priority = false,
	quality = 80,
	sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
	blur = true,
}: OptimizedImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [hasError, setHasError] = useState(false)
	const imageRef = useRef<HTMLImageElement>(null)
	const isInView = useInView(imageRef, { once: true, margin: '50px' })

	// Generate blur hash placeholder
	const blurDataURL = blur
		? `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`
		: undefined

	// Generate optimized Unsplash URL with modern formats
	const optimizedSrc = src.includes('unsplash.com')
		? `${src}?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=${quality}`
		: src

	// Generate AVIF version for best compression
	const avifSrc = src.includes('unsplash.com')
		? `${src}?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=${quality}&fm=avif`
		: src

	// Generate WebP version as fallback
	const webpSrc = src.includes('unsplash.com')
		? `${src}?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=${quality}&fm=webp`
		: src

	const fallbackImage =
		'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&crop=center&auto=format&q=80'

	return (
		<div className={cn('relative overflow-hidden', className)}>
			{/* Loading skeleton with blur effect */}
			{!isLoaded && !hasError && (
				<>
					<div
						className='absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse'
						style={{
							backgroundImage: blur ? `url(${blurDataURL})` : undefined,
							backgroundSize: 'cover',
							filter: blur ? 'blur(20px)' : undefined,
						}}
					/>
					<div className='absolute inset-0 bg-black/10' />
				</>
			)}

			<picture>
				{/* AVIF version for modern browsers */}
				<source
					type='image/avif'
					srcSet={isInView || priority ? avifSrc : undefined}
					sizes={sizes}
				/>
				<source srcSet={webpSrc} type='image/webp' sizes={sizes} />

				{/* Fallback image */}
				<motion.img
					src={hasError ? fallbackImage : optimizedSrc}
					alt={alt}
					className={cn(
						'w-full h-full object-cover transition-opacity duration-300',
						isLoaded ? 'opacity-100' : 'opacity-0'
					)}
					loading={priority ? 'eager' : 'lazy'}
					decoding='async'
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
			<div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
		</div>
	)
}

export default OptimizedImage
