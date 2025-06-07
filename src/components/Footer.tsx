
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/681a072b-4ed9-46f5-b4c5-0b093134a1b9.png" 
                alt="SNIT Solutions Logo" 
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-xl font-bold text-white">SNIT Solutions</h3>
                <p className="text-sm text-gray-400">Best IT Training Institute</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming careers through industry-focused IT training with 100% placement support. 
              Learn from experts and build your future in technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-snit-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-snit-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-snit-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-snit-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-snit-teal-400 transition-colors">Home</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-snit-teal-400 transition-colors">Courses</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-snit-teal-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-snit-teal-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-snit-teal-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-snit-teal-400 transition-colors">Placements</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Popular Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-snit-orange-400 transition-colors">Microsoft Azure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-snit-orange-400 transition-colors">AWS DevOps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-snit-orange-400 transition-colors">CCNA Networking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-snit-orange-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-snit-orange-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-300 hover:text-snit-orange-400 transition-colors">Databricks</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-snit-teal-400" />
                <span className="text-gray-300">+91-9640005999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-snit-teal-400" />
                <span className="text-gray-300">hr@snitsolutions.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-snit-teal-400 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white">Dilsukhnagar</p>
                  <p>Vaishnavi Nest, Indira Nagar Rd</p>
                  <p className="font-medium text-white mt-2">Ameerpet</p>
                  <p>Nagasai Nivas, Prime Hospital Lane</p>
                  <p className="font-medium text-white mt-2">Madhapur</p>
                  <p>Above Lenskart, Arunodaya Colony</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SNIT Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
