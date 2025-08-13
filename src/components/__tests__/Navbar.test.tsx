/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import Navbar from '../Navbar';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  },
  AnimatePresence: ({ children }: any) => <div>{children}</div>,
}));

// Mock NavigationMenu components
vi.mock('@/components/ui/navigation-menu', () => ({
  NavigationMenu: ({ children }: any) => <div role="navigation">{children}</div>,
  NavigationMenuContent: ({ children }: any) => <div>{children}</div>,
  NavigationMenuItem: ({ children }: any) => <div>{children}</div>,
  NavigationMenuLink: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  NavigationMenuList: ({ children }: any) => <ul>{children}</ul>,
  NavigationMenuTrigger: ({ children }: any) => <button>{children}</button>,
}));

// Mock Drawer components
vi.mock('@/components/ui/drawer', () => ({
  Drawer: ({ children }: any) => <div>{children}</div>,
  DrawerClose: ({ children }: any) => <button>{children}</button>,
  DrawerContent: ({ children }: any) => <div>{children}</div>,
  DrawerDescription: ({ children }: any) => <div>{children}</div>,
  DrawerFooter: ({ children }: any) => <div>{children}</div>,
  DrawerHeader: ({ children }: any) => <div>{children}</div>,
  DrawerTitle: ({ children }: any) => <h2>{children}</h2>,
  DrawerTrigger: ({ children }: any) => <button>{children}</button>,
}));

// Mock Button component
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

// Mock Lucide icons
vi.mock('lucide-react', () => ({
  Briefcase: () => <span>💼</span>,
  Phone: () => <span>📞</span>,
  ChevronDown: () => <span>⌄</span>,
  MenuIcon: () => <span>☰</span>,
  X: () => <span>✕</span>,
  Home: () => <span>🏠</span>,
  Settings: () => <span>⚙️</span>,
  FileText: () => <span>📄</span>,
  Activity: () => <span>📊</span>,
  CheckCircle: () => <span>✓</span>,
  HelpCircle: () => <span>❓</span>,
  Clock: () => <span>🕐</span>,
  Award: () => <span>🏆</span>,
}));

// Mock use-mobile hook
vi.mock('@/hooks/use-mobile', () => ({
  useMobile: () => false,
}));

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('shows mobile menu button', () => {
    render(<Navbar />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('has correct navigation structure', () => {
    render(<Navbar />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('renders company logo/name', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Gandini')).toBeInTheDocument();
  });

  it('renders specialties dropdown', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Especialidades')).toBeInTheDocument();
  });
});