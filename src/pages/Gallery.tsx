
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Photos' },
    { id: 'interior', name: 'Interior' },
    { id: 'food', name: 'Food' },
    { id: 'ambiance', name: 'Ambiance' },
  ];

  const galleryImages = [
    {
      src: '/images/dining-atmosphere.jpg',
      alt: 'Authentic African dining atmosphere with traditional woven baskets and warm lighting',
      category: 'interior'
    },
    {
      src: '/images/thieboudienne-signature.jpg',
      alt: 'Traditional Senegalese Thieboudienne with fresh fish and aromatic rice',
      category: 'food'
    },
    {
      src: '/images/restaurant-interior.jpg',
      alt: 'Restaurant interior showcasing traditional Senegalese decor and service area',
      category: 'interior'
    },
    {
      src: '/images/happy-guests.jpg',
      alt: 'Delighted guests enjoying authentic Senegalese cuisine in our warm atmosphere',
      category: 'ambiance'
    },
    {
      src: '/images/coffee-ceremony.jpg',
      alt: 'Traditional Senegalese coffee ceremony with authentic ceramics and presentation',
      category: 'food'
    },
    {
      src: '/images/traditional-decor.jpg',
      alt: 'Indoor dining area featuring authentic African artifacts and cultural elements',
      category: 'interior'
    },
    {
      src: '/images/restaurant-entrance.jpg',
      alt: 'Welcoming entrance to Le Menelik with traditional Senegalese branding',
      category: 'ambiance'
    },
    {
      src: '/images/evening-ambiance.jpg',
      alt: 'Magical evening dining atmosphere with traditional lighting and warm hospitality',
      category: 'ambiance'
    },
    {
      src: '/images/hero-beachside-dining.jpg',
      alt: 'Stunning beachside evening dining experience with fire pit and ocean views',
      category: 'ambiance'
    },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-sahara-50">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section 
        className="pt-24 pb-16 relative min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/images/dining-atmosphere.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container-max section-padding text-white relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-playfair font-bold mb-8 text-shadow-lg">Photo Gallery</h1>
            <p className="text-2xl max-w-3xl mx-auto text-shadow leading-relaxed">
              Take a visual journey through Le Menelik - from our warm, authentic interior 
              to our exquisite traditional dishes and vibrant cultural atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding">
        <div className="container-max">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium ${
                  activeFilter === filter.id 
                    ? 'btn-terracotta' 
                    : 'btn-outline-terracotta'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-800">
                Experience It Yourself
              </h3>
              <p className="text-gray-600 mb-6">
                Pictures can only capture so much. Come and experience the warmth, 
                flavors, and atmosphere of Le Menelik in person.
              </p>
              <Button 
                size="lg" 
                className="btn-terracotta px-8 py-3 text-lg"
                onClick={() => window.open('https://wa.me/221701234567', '_blank')}
              >
                Book Your Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 bg-black/50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
