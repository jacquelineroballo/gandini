import { useState, useEffect } from 'react'

interface UseImagePreloaderReturn {
	isLoading: boolean
	loadedImages: string[]
	error: string | null
}

export const useImagePreloader = (images: string[]): UseImagePreloaderReturn => {
	const [isLoading, setIsLoading] = useState(true)
	const [loadedImages, setLoadedImages] = useState<string[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (images.length === 0) {
			setIsLoading(false)
			return
		}

		setIsLoading(true)
		setLoadedImages([])
		setError(null)

		const loadImage = (src: string): Promise<string> => {
			return new Promise((resolve, reject) => {
				const img = new Image()
				img.onload = () => resolve(src)
				img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
				img.src = src
			})
		}

		const loadAllImages = async () => {
			try {
				const results = await Promise.allSettled(images.map((src) => loadImage(src)))

				const successful = results
					.filter(
						(result): result is PromiseFulfilledResult<string> => result.status === 'fulfilled'
					)
					.map((result) => result.value)

				setLoadedImages(successful)

				if (successful.length === 0) {
					setError('No images could be loaded')
				}
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setIsLoading(false)
			}
		}

		loadAllImages()
	}, [images])

	return { isLoading, loadedImages, error }
}
