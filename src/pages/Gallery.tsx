
import { useState } from 'react';
import Navigation from '@/components/Navigation';
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
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
      alt: 'Restaurant interior with cozy seating',
      category: 'interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      alt: 'Traditional Senegalese dish presentation',
      category: 'food'
    },
    {
      src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop',
      alt: 'Evening ambiance with warm lighting',
      category: 'ambiance'
    },
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      alt: 'Outdoor seating area with ocean view',
      category: 'interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop',
      alt: 'Signature grilled seafood platter',
      category: 'food'
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
      alt: 'Chef preparing traditional dishes',
      category: 'ambiance'
    },
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      alt: 'Dining room with African-inspired decor',
      category: 'interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
      alt: 'Beautifully plated traditional meal',
      category: 'food'
    },
    {
      src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
      alt: 'Sunset dining on the terrace',
      category: 'ambiance'
    },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-sahara-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-terracotta-600 to-sahara-600 text-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-5xl font-playfair font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Take a visual journey through Le Menelik - from our warm interior 
              to our exquisite dishes and vibrant atmosphere.
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
                    ? 'bg-terracotta-600 hover:bg-terracotta-700 text-white' 
                    : 'border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50'
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
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                className="bg-terracotta-600 hover:bg-terracotta-700 text-white"
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
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
