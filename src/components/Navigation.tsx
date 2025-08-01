import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Home, Info, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/personal', label: 'Personal', icon: User },
    { href: '/commercial', label: 'Commercial', icon: Building2 },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="icon-container">
              <Building2 className="h-6 w-6 text-bank-primary" />
            </div>
            <span className="font-bold text-xl text-bank-primary">SecureBank</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center space-x-2 text-sm font-medium transition-all duration-200 hover:text-bank-accent hover:scale-105 ${
                    isActive(link.href) ? 'text-bank-accent' : 'text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <ThemeToggle />
            <Button className="bg-bank-accent text-bank-primary hover:bg-bank-accent/90 shadow-3d hover:shadow-3d-hover transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="glass-card p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="glass-card mx-2 p-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`flex items-center space-x-3 text-sm font-medium transition-all duration-200 hover:text-bank-accent p-2 rounded-xl hover:bg-bank-accent/10 ${
                        isActive(link.href) ? 'text-bank-accent bg-bank-accent/20' : 'text-foreground'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
                <Button className="bg-bank-accent text-bank-primary hover:bg-bank-accent/90 w-fit shadow-3d">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;