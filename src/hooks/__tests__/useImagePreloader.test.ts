/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useImagePreloader } from '../useImagePreloader'

// Mock global Image
const mockImage = {
	onload: null as any,
	onerror: null as any,
	src: '',
}

beforeEach(() => {
	vi.clearAllMocks()
	global.Image = vi.fn(() => mockImage) as any
})

describe('useImagePreloader', () => {
	it('preloads images successfully', async () => {
		const images = ['/image1.jpg', '/image2.jpg']

		const { result } = renderHook(() => useImagePreloader(images))

		expect(result.current.isLoading).toBe(true)
		expect(result.current.loadedImages).toEqual([])
		expect(result.current.error).toBe(null)

		// Simulate successful image loads
		setTimeout(() => {
			if (mockImage.onload) mockImage.onload()
		}, 0)

		setTimeout(() => {
			if (mockImage.onload) mockImage.onload()
		}, 10)

		await waitFor(
			() => {
				expect(result.current.isLoading).toBe(false)
			},
			{ timeout: 1000 }
		)

		expect(result.current.loadedImages).toHaveLength(2)
		expect(result.current.error).toBe(null)
	})

	it('handles image load errors', async () => {
		const images = ['/invalid-image.jpg']

		const { result } = renderHook(() => useImagePreloader(images))

		expect(result.current.isLoading).toBe(true)

		// Simulate image load error
		setTimeout(() => {
			if (mockImage.onerror) mockImage.onerror()
		}, 0)

		await waitFor(
			() => {
				expect(result.current.isLoading).toBe(false)
			},
			{ timeout: 1000 }
		)

		expect(result.current.loadedImages).toHaveLength(0)
		expect(result.current.error).toBe('No images could be loaded')
	})

	it('handles empty image array', () => {
		const { result } = renderHook(() => useImagePreloader([]))

		expect(result.current.isLoading).toBe(false)
		expect(result.current.loadedImages).toEqual([])
		expect(result.current.error).toBe(null)
	})

	it('handles mixed success and failure', async () => {
		const images = ['/valid-image.jpg', '/invalid-image.jpg']

		const { result } = renderHook(() => useImagePreloader(images))

		expect(result.current.isLoading).toBe(true)

		// Simulate one success and one failure
		setTimeout(() => {
			if (mockImage.onload) mockImage.onload()
		}, 0)

		setTimeout(() => {
			if (mockImage.onerror) mockImage.onerror()
		}, 10)

		await waitFor(
			() => {
				expect(result.current.isLoading).toBe(false)
			},
			{ timeout: 1000 }
		)

		expect(result.current.loadedImages).toHaveLength(1)
		expect(result.current.error).toBe(null)
	})
})
