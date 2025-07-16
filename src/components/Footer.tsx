
import { MapPin, Phone, Clock, Mail, Facebook, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-terracotta-400">Le Menelik</h3>
            <p className="text-gray-300">
              Authentic Senegalese cuisine in the heart of Saly. Experience the warmth of our hospitality 
              and the richness of our traditional flavors.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-terracotta-400"
                onClick={() => window.open('https://facebook.com/lemenelik', '_blank')}
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-terracotta-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-terracotta-400" />
                <span className="text-gray-300">Saly, Senegal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-terracotta-400" />
                <a href="tel:+221701234567" className="text-gray-300 hover:text-terracotta-400">
                  +221 70 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-terracotta-400" />
                <a href="mailto:info@lemenelik.sn" className="text-gray-300 hover:text-terracotta-400">
                  info@lemenelik.sn
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-terracotta-400">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-terracotta-400" />
                <div className="text-gray-300">
                  <p>Monday - Sunday</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-terracotta-400">Quick Actions</h4>
            <div className="space-y-3">
              <Button 
                className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white"
                onClick={() => window.open('https://wa.me/221701234567', '_blank')}
              >
                Book via WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="w-full border-terracotta-400 text-terracotta-400 hover:bg-terracotta-400 hover:text-white"
                onClick={() => window.open('tel:+221701234567')}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Le Menelik. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-terracotta-400" />
              <span>in Saly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
