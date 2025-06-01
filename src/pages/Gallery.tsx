
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
      src: '/lovable-uploads/22821db7-741c-4f09-ab49-1198c9ee266a.png',
      alt: 'Authentic African dining atmosphere with woven baskets',
      category: 'interior'
    },
    {
      src: '/lovable-uploads/4347dc9f-353c-47d6-91c0-8efb233311d2.png',
      alt: 'Traditional Senegalese meal with injera and various dishes',
      category: 'food'
    },
    {
      src: '/lovable-uploads/e1fe9bee-1c82-45b3-93ae-a3ba12a0c06d.png',
      alt: 'Restaurant interior showing the service area and traditional decor',
      category: 'interior'
    },
    {
      src: '/lovable-uploads/84d67811-d3b0-49a0-b27e-dce4b71446f7.png',
      alt: 'Happy guests enjoying authentic meals in traditional setting',
      category: 'ambiance'
    },
    {
      src: '/lovable-uploads/63de527d-73ac-4887-b8ea-0718ed48d006.png',
      alt: 'Traditional coffee service with authentic ceramics',
      category: 'food'
    },
    {
      src: '/lovable-uploads/2eeb5872-08b0-4f7a-ac91-27e4b180bdcd.png',
      alt: 'Indoor dining area with traditional African artifacts',
      category: 'interior'
    },
    {
      src: '/lovable-uploads/35537ba2-60a1-4448-bea4-a50501a1732d.png',
      alt: 'Restaurant entrance sign showing Le Menelik branding',
      category: 'ambiance'
    },
    {
      src: '/lovable-uploads/a933be83-706f-4445-ae61-9f28cb6f587a.png',
      alt: 'Evening dining atmosphere with traditional lighting',
      category: 'ambiance'
    },
    {
      src: '/lovable-uploads/28abdb68-883f-4580-9d90-76964618ae65.png',
      alt: 'Beautiful beachside evening dining with fire pit',
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

      <Footer />
    </div>
  );
};

export default Gallery;
