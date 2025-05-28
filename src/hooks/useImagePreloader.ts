
import { useEffect, useState } from 'react'

interface UseImagePreloaderProps {
  images: string[]
  priority?: boolean
}

export const useImagePreloader = ({ images, priority = false }: UseImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!images.length) {
      setIsLoading(false)
      return
    }

    const preloadImage = (src: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]))
          resolve(src)
        }
        
        img.onerror = () => reject(`Failed to load ${src}`)
        
        // Optimize image URL for faster loading
        if (src.includes('unsplash.com')) {
          img.src = `${src}?w=800&h=600&fit=crop&crop=center&auto=format&q=75&fm=webp`
        } else {
          img.src = src
        }

        // Set loading attribute based on priority
        if (!priority) {
          img.loading = 'lazy'
        }
      })
    }

    const loadImages = async () => {
      try {
        const promises = images.map(preloadImage)
        
        // Update progress as images load
        promises.forEach((promise, index) => {
          promise.then(() => {
            setProgress(((index + 1) / images.length) * 100)
          }).catch(console.error)
        })

        await Promise.allSettled(promises)
      } catch (error) {
        console.error('Error preloading images:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadImages()
  }, [images, priority])

  return {
    loadedImages,
    isLoading,
    progress,
    isImageLoaded: (src: string) => loadedImages.has(src)
  }
}
