
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Clock, Wifi, Star, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Just a short walk from the beach and main town area"
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "Stay connected while you dine"
    },
    {
      icon: Star,
      title: "Authentic Experience",
      description: "Genuine flavors that delight locals and tourists"
    }
  ];

  const featuredDishes = [
    {
      name: "Thieboudienne",
      description: "Traditional Senegalese rice and fish dish",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      name: "Grilled Sea Bass",
      description: "Fresh catch from the Atlantic, grilled to perfection",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      name: "Mafe",
      description: "Rich peanut stew with tender meat and vegetables",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      text: "The most authentic dining experience in Saly! The atmosphere is warm and the food is exceptional.",
      rating: 5
    },
    {
      name: "James Wilson",
      text: "Perfect location near the beach. Great food, friendly staff, and the ambiance is just perfect.",
      rating: 5
    },
    {
      name: "Fatou Ndiaye",
      text: "As a local, I can say this is where you get the real taste of Senegal. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop")'
          }}
        />
        <div className="gradient-overlay" />
        
        <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-shadow">
            Le Menelik
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow font-light">
            Authentic Dining Experience in the Heart of Saly
          </p>
          <p className="text-lg mb-12 text-shadow max-w-2xl mx-auto">
            Discover the warmth of Senegalese hospitality, just steps from the beach. 
            Where tradition meets exceptional cuisine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 text-lg font-medium"
              onClick={() => window.open('https://wa.me/221701234567', '_blank')}
            >
              Book Your Table
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-terracotta-600 px-8 py-3 text-lg font-medium"
              asChild
            >
              <NavLink to="/menu">View Menu</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              Why Choose Le Menelik?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of authentic Senegalese cuisine, warm hospitality, 
              and an unbeatable location in Saly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-terracotta-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="w-8 h-8 text-terracotta-600" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="section-padding bg-sahara-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              Signature Dishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Taste the authentic flavors of Senegal with our carefully crafted signature dishes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white"
              asChild
            >
              <NavLink to="/menu">Explore Full Menu</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it – hear from our happy customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-terracotta-600">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="section-padding bg-terracotta-600 text-white">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold mb-2">Location</h3>
              <p>Saly, Senegal<br />Near the beach</p>
            </div>
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold mb-2">Phone</h3>
              <a href="tel:+221701234567" className="hover:underline">
                +221 70 123 45 67
              </a>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold mb-2">Hours</h3>
              <p>Daily<br />11:00 AM - 11:00 PM</p>
            </div>
            <div>
              <Facebook className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold mb-2">Follow Us</h3>
              <a 
                href="https://facebook.com/lemenelik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                800+ Likes
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
