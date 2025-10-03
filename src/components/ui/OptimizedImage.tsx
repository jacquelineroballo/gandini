interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string
	alt: string
	className?: string
	priority?: boolean
}

export const OptimizedImage = ({
	src,
	alt,
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
			{...props}
		/>
	)
}
