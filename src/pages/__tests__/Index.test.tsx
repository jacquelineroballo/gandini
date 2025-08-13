/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import Index from '../Index';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
  useScroll: () => ({ 
    scrollY: { get: () => 0 },
    scrollYProgress: { get: () => 0 }
  }),
  useTransform: () => 0,
  useInView: () => true,
}));

// Mock components
vi.mock('@/components/ModernHero', () => ({
  default: () => <div data-testid="modern-hero">ModernHero</div>,
}));

vi.mock('@/components/ServicesSection', () => ({
  default: () => <div data-testid="services-section">ServicesSection</div>,
}));

vi.mock('@/components/ProjectsSection', () => ({
  default: () => <div data-testid="projects-section">ProjectsSection</div>,
}));

vi.mock('@/components/TestimonialsSection', () => ({
  default: () => <div data-testid="testimonials-section">TestimonialsSection</div>,
}));

vi.mock('@/components/Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));

vi.mock('@/components/Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

// Mock Button component
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

// Mock Lucide icons
vi.mock('lucide-react', () => ({
  ArrowRight: () => <span>→</span>,
  Award: () => <span>🏆</span>,
  CheckCircle: () => <span>✓</span>,
  Clock: () => <span>🕐</span>,
  Users: () => <span>👥</span>,
  Activity: () => <span>📊</span>,
  Briefcase: () => <span>💼</span>,
  Building: () => <span>🏢</span>,
  Shield: () => <span>🛡️</span>,
  Phone: () => <span>📞</span>,
  Calendar: () => <span>📅</span>,
  Target: () => <span>🎯</span>,
}));

describe('Index Page', () => {
  it('renders all main sections', () => {
    render(<Index />);
    
    expect(screen.getByTestId('modern-hero')).toBeInTheDocument();
    expect(screen.getByTestId('services-section')).toBeInTheDocument();
    expect(screen.getByTestId('projects-section')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials-section')).toBeInTheDocument();
  });

  it('renders navbar and footer', () => {
    render(<Index />);
    
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders why choose us section', () => {
    render(<Index />);
    
    expect(screen.getByText('¿Por qué elegirnos?')).toBeInTheDocument();
    expect(screen.getByText('Experiencia Comprobada')).toBeInTheDocument();
    expect(screen.getByText('Calidad Garantizada')).toBeInTheDocument();
    expect(screen.getByText('Atención Personalizada')).toBeInTheDocument();
  });

  it('renders contact section', () => {
    render(<Index />);
    
    expect(screen.getByText('¿Listo para comenzar tu proyecto?')).toBeInTheDocument();
  });
});