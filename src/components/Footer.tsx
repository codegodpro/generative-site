import { Building2, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-bank-primary text-bank-light-text">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-bank-accent" />
              <span className="font-bold text-xl text-white">SecureBank</span>
            </div>
            <p className="text-sm">
              Your trusted financial partner for over 50 years. Building secure futures through innovative banking solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-bank-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-bank-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-bank-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-bank-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="/personal" className="hover:text-bank-accent transition-colors">Personal Banking</a>
              <a href="/commercial" className="hover:text-bank-accent transition-colors">Commercial Banking</a>
              <a href="/about" className="hover:text-bank-accent transition-colors">About Us</a>
              <a href="/contact" className="hover:text-bank-accent transition-colors">Contact</a>
              <a href="#" className="hover:text-bank-accent transition-colors">Careers</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-bank-accent" />
                <span>1-800-SECURE-1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-bank-accent" />
                <span>support@securebank.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-bank-accent mt-0.5" />
                <span>123 Financial District<br />New York, NY 10005</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Stay Updated</h3>
            <p className="text-sm">Subscribe to our newsletter for the latest banking news and offers.</p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-bank-light-text/10 border-bank-light-text/20 text-white placeholder:text-bank-light-text/60"
              />
              <Button className="bg-bank-accent text-bank-primary hover:bg-bank-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-bank-light-text/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 SecureBank. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-bank-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-bank-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-bank-accent transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;