
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Clock, Wifi, Star, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    setIsVisible(true);
    // Get language from navigation if available
    const nav = document.querySelector('nav');
    if (nav) {
      const langButton = nav.querySelector('[data-language]');
      if (langButton) {
        setLanguage(langButton.getAttribute('data-language') || 'en');
      }
    }
  }, []);

  const content = {
    en: {
      title: "Le Menelik",
      subtitle: "Authentic Dining Experience in the Heart of Saly",
      description: "Discover the warmth of Senegalese hospitality, just steps from the beach. Where tradition meets exceptional cuisine.",
      bookTable: "Book Your Table",
      viewMenu: "View Menu",
      whyChoose: "Why Choose Le Menelik?",
      whyDesc: "Experience the perfect blend of authentic Senegalese cuisine, warm hospitality, and an unbeatable location in Saly.",
      highlights: [
        {
          title: "Prime Location",
          description: "Just a short walk from the beach and main town area"
        },
        {
          title: "Free Wi-Fi",
          description: "Stay connected while you dine"
        },
        {
          title: "Authentic Experience",
          description: "Genuine flavors that delight locals and tourists"
        }
      ],
      signatureDishes: "Signature Dishes",
      signatureDesc: "Taste the authentic flavors of Senegal with our carefully crafted signature dishes.",
      exploreMenu: "Explore Full Menu",
      testimonials: "What Our Guests Say",
      testimonialsDesc: "Don't just take our word for it – hear from our happy customers.",
      location: "Location",
      phone: "Phone",
      hours: "Hours",
      followUs: "Follow Us"
    },
    fr: {
      title: "Le Menelik",
      subtitle: "Expérience Culinaire Authentique au Cœur de Saly",
      description: "Découvrez la chaleur de l'hospitalité sénégalaise, à quelques pas de la plage. Où la tradition rencontre une cuisine exceptionnelle.",
      bookTable: "Réserver une Table",
      viewMenu: "Voir le Menu",
      whyChoose: "Pourquoi Choisir Le Menelik ?",
      whyDesc: "Vivez le mélange parfait de cuisine sénégalaise authentique, d'hospitalité chaleureuse et d'un emplacement imbattable à Saly.",
      highlights: [
        {
          title: "Emplacement de Choix",
          description: "À quelques pas de la plage et du centre-ville"
        },
        {
          title: "Wi-Fi Gratuit",
          description: "Restez connecté pendant que vous dînez"
        },
        {
          title: "Expérience Authentique",
          description: "Saveurs authentiques qui ravissent locaux et touristes"
        }
      ],
      signatureDishes: "Plats Signature",
      signatureDesc: "Goûtez aux saveurs authentiques du Sénégal avec nos plats signature soigneusement préparés.",
      exploreMenu: "Explorer le Menu Complet",
      testimonials: "Ce que Disent nos Clients",
      testimonialsDesc: "Ne nous croyez pas sur parole – écoutez nos clients satisfaits.",
      location: "Localisation",
      phone: "Téléphone",
      hours: "Horaires",
      followUs: "Suivez-nous"
    }
  };

  const featuredDishes = [
    {
      name: "Thieboudienne",
      description: {
        en: "Traditional Senegalese rice and fish dish",
        fr: "Plat traditionnel sénégalais de riz et poisson"
      },
      image: "/lovable-uploads/4347dc9f-353c-47d6-91c0-8efb233311d2.png"
    },
    {
      name: "Traditional Coffee",
      description: {
        en: "Authentic coffee service with traditional ceramics",
        fr: "Service de café authentique avec céramiques traditionnelles"
      },
      image: "/lovable-uploads/63de527d-73ac-4887-b8ea-0718ed48d006.png"
    },
    {
      name: "Authentic Atmosphere",
      description: {
        en: "Dine in our traditional African-inspired setting",
        fr: "Dînez dans notre cadre traditionnel d'inspiration africaine"
      },
      image: "/lovable-uploads/22821db7-741c-4f09-ab49-1198c9ee266a.png"
    }
  ];

  const testimonials = {
    en: [
      {
        name: "Marie Dubois",
        text: "Truly superb and authentic dining experience. The atmosphere is warm and the food is exceptional.",
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
    ],
    fr: [
      {
        name: "Marie Dubois",
        text: "Expérience culinaire vraiment superbe et authentique. L'atmosphère est chaleureuse et la nourriture exceptionnelle.",
        rating: 5
      },
      {
        name: "James Wilson",
        text: "Emplacement parfait près de la plage. Excellente nourriture, personnel amical, et l'ambiance est parfaite.",
        rating: 5
      },
      {
        name: "Fatou Ndiaye",
        text: "En tant que locale, je peux dire que c'est ici qu'on trouve le vrai goût du Sénégal. Hautement recommandé !",
        rating: 5
      }
    ]
  };

  const currentContent = content[language];
  const currentTestimonials = testimonials[language];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/lovable-uploads/28abdb68-883f-4580-9d90-76964618ae65.png")'
          }}
        />
        <div className="gradient-overlay" />
        
        <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-shadow">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow font-light">
            {currentContent.subtitle}
          </p>
          <p className="text-lg mb-12 text-shadow max-w-2xl mx-auto">
            {currentContent.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-primary px-8 py-3 text-lg"
              onClick={() => window.open('https://wa.me/221701234567', '_blank')}
            >
              {currentContent.bookTable}
            </Button>
            <Button 
              size="lg" 
              className="btn-outline-light px-8 py-3 text-lg"
              asChild
            >
              <NavLink to="/menu">{currentContent.viewMenu}</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              {currentContent.whyChoose}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.whyDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.highlights.map((highlight, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-terracotta-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {index === 0 && <MapPin className="w-8 h-8 text-terracotta-600" />}
                  {index === 1 && <Wifi className="w-8 h-8 text-terracotta-600" />}
                  {index === 2 && <Star className="w-8 h-8 text-terracotta-600" />}
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
              {currentContent.signatureDishes}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.signatureDesc}
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
                  <p className="text-gray-600">{dish.description[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="btn-primary"
              asChild
            >
              <NavLink to="/menu">{currentContent.exploreMenu}</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              {currentContent.testimonials}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.testimonialsDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
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
              <h3 className="font-playfair font-semibold mb-2">{currentContent.location}</h3>
              <p>Saly, Senegal<br />{language === 'en' ? 'Near the beach' : 'Près de la plage'}</p>
            </div>
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold mb-2">{currentContent.phone}</h3>
              <a href="tel:+221701234567" className="hover:underline">
                +221 70 123 45 67
              </a>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold mb-2">{currentContent.hours}</h3>
              <p>{language === 'en' ? 'Daily' : 'Tous les jours'}<br />11:00 AM - 11:00 PM</p>
            </div>
            <div>
              <Facebook className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold mb-2">{currentContent.followUs}</h3>
              <a 
                href="https://facebook.com/lemenelik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                850+ {language === 'en' ? 'Likes' : 'J\'aime'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
