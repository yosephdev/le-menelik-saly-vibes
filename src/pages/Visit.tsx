
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Mail, Wifi, Car, CreditCard, Facebook } from 'lucide-react';

const Visit = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Saly, Senegal', 'Near the beach and main town area'],
      action: () => window.open('https://maps.google.com/?q=Saly+Senegal', '_blank')
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+221 70 123 45 67'],
      action: () => window.open('tel:+221701234567')
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Sunday', '11:00 AM - 11:00 PM'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@lemenelik.sn'],
      action: () => window.open('mailto:info@lemenelik.sn')
    }
  ];

  const amenities = [
    { icon: Wifi, title: 'Free Wi-Fi', description: 'Stay connected throughout your meal' },
    { icon: Car, title: 'Parking Available', description: 'Convenient parking for guests' },
    { icon: CreditCard, title: 'Cards Accepted', description: 'Visa, Mastercard, and mobile payments' },
    { icon: Facebook, title: 'Social Media', description: 'Follow us for updates and specials' }
  ];

  return (
    <div className="min-h-screen bg-sahara-50">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section 
        className="pt-24 pb-16 relative min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/28abdb68-883f-4580-9d90-76964618ae65.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container-max section-padding text-white relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-playfair font-bold mb-6 text-shadow">Visit Us</h1>
            <p className="text-xl max-w-2xl mx-auto text-shadow">
              Located in the heart of Saly, just steps from the beach. 
              We're easy to find and even easier to love.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62421.89410633746!2d-17.0899!3d14.7645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173c4b5a6ef59%3A0x92b2f6e0b1e4e4f!2sSaly%2C%20Senegal!5e0!3m2!1sen!2sus!4v1639000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Le Menelik Location in Saly, Senegal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for reservations, inquiries, or just to say hello.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`text-center transition-all duration-300 hover:shadow-lg ${
                  info.action ? 'cursor-pointer hover:scale-105' : ''
                }`}
                onClick={info.action}
              >
                <CardHeader>
                  <div className="bg-terracotta-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-terracotta-600" />
                  </div>
                  <CardTitle className="font-playfair text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white"
              onClick={() => window.open('https://wa.me/221701234567', '_blank')}
            >
              Book via WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50"
              onClick={() => window.open('tel:+221701234567')}
            >
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-ocean-600 text-ocean-600 hover:bg-ocean-50"
              onClick={() => window.open('https://m.me/lemenelik', '_blank')}
            >
              Message on Facebook
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-sahara-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've thought of everything to make your dining experience comfortable and convenient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <amenity.icon className="w-8 h-8 text-terracotta-600" />
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
                How to Find Us
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-terracotta-600">
                    From Dakar Airport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Take the highway south for about 80km (approximately 1 hour drive). 
                    Exit at Saly and follow signs to the beach area. We're located in the 
                    main restaurant district, just a short walk from the beach.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-terracotta-600">
                    Local Transportation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Easily accessible by taxi from anywhere in Saly. If you're staying 
                    at a local hotel, we're within walking distance of most accommodations. 
                    Ask your hotel concierge for directions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Visit;
