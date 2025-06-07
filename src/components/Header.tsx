
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-snit-teal-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91-9640005999</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>hr@snitsolutions.in</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>100% Placement Support • Industry Expert Trainers</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/681a072b-4ed9-46f5-b4c5-0b093134a1b9.png" 
              alt="SNIT Solutions Logo" 
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-2xl font-bold text-snit-teal-600">SNIT Solutions</h1>
              <p className="text-sm text-gray-600">Best IT Training Institute</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-snit-teal-600 transition-colors">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-snit-teal-600 transition-colors">Courses</a>
            <a href="#about" className="text-gray-700 hover:text-snit-teal-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-snit-teal-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-snit-teal-600 transition-colors">Contact</a>
            <Button className="bg-snit-orange-500 hover:bg-snit-orange-600 text-white">
              Enroll Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-snit-teal-600 transition-colors">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-snit-teal-600 transition-colors">Courses</a>
              <a href="#about" className="text-gray-700 hover:text-snit-teal-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-snit-teal-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-snit-teal-600 transition-colors">Contact</a>
              <Button className="bg-snit-orange-500 hover:bg-snit-orange-600 text-white w-fit">
                Enroll Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
