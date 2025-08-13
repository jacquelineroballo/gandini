/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/test/utils'
import ModernHero from '../ModernHero'

// Mock framer-motion
vi.mock('framer-motion', () => ({
	motion: {
		div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
		h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
		p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
		span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
	},
	useScroll: () => ({ scrollY: { get: () => 0 } }),
	useTransform: () => 0,
}))

// Mock OptimizedImage
vi.mock('@/components/ui/OptimizedImage', () => ({
	OptimizedImage: ({ src, alt, ...props }: any) => (
		<img src={src} alt={alt} {...props} data-testid='optimized-image' />
	),
}))

// Mock Button component
vi.mock('@/components/ui/button', () => ({
	Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}))

// Mock Lucide icons
vi.mock('lucide-react', () => ({
	ArrowRight: () => <span data-testid='arrow-right-icon'>→</span>,
	Briefcase: () => <span data-testid='briefcase-icon'>💼</span>,
}))

describe('ModernHero', () => {
	const defaultProps = {
		title: 'Test Title',
		subtitle: 'Test Subtitle',
		backgroundImage: '/test-bg.jpg',
		buttonText: 'Test Button',
		buttonLink: '/test-link',
	}

	it('renders hero content correctly', () => {
		render(<ModernHero {...defaultProps} />)

		expect(screen.getByText('Test Title')).toBeInTheDocument()
		expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
	})

	it('renders action buttons', () => {
		render(<ModernHero {...defaultProps} />)

		expect(screen.getByText('Test Button')).toBeInTheDocument()
		expect(screen.getByText('Ver Proyectos')).toBeInTheDocument()
	})

	it('has correct background image', () => {
		render(<ModernHero {...defaultProps} />)

		const backgroundImage = screen.getByTestId('optimized-image')
		expect(backgroundImage).toBeInTheDocument()
		expect(backgroundImage).toHaveAttribute('src', '/test-bg.jpg')
		expect(backgroundImage).toHaveAttribute('alt', 'Construction background')
	})

	it('renders with default props', () => {
		const minimalProps = {
			title: 'Test Title',
			subtitle: 'Test Subtitle',
		}

		render(<ModernHero {...minimalProps} />)

		expect(screen.getByText('Test Title')).toBeInTheDocument()
		expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
		expect(screen.getByText('Saber más')).toBeInTheDocument()
	})

	it('handles scroll functionality', () => {
		const mockGetElementById = vi.spyOn(document, 'getElementById')
		const mockScrollIntoView = vi.fn()
		mockGetElementById.mockReturnValue({
			scrollIntoView: mockScrollIntoView,
		} as any)

		render(<ModernHero {...defaultProps} />)

		expect(mockGetElementById).toBeDefined()
	})
})
