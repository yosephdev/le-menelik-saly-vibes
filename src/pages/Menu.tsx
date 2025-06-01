
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍽️' },
    { id: 'seafood', name: 'Fresh Seafood', icon: '🐟' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Beverages', icon: '🥤' },
  ];

  const menuItems = {
    starters: [
      { name: 'Accara', price: '2,500 CFA', description: 'Traditional black-eyed pea fritters with spicy dip' },
      { name: 'Pastels', price: '3,000 CFA', description: 'Crispy fish-filled pastries, a Senegalese favorite' },
      { name: 'Fataya', price: '2,800 CFA', description: 'Meat or vegetable-filled savory pastries' },
      { name: 'Yassa Salad', price: '3,500 CFA', description: 'Fresh mixed greens with yassa-style onion dressing' },
    ],
    mains: [
      { name: 'Thieboudienne', price: '4,500 CFA', description: 'The national dish: jollof rice with fish and vegetables' },
      { name: 'Yassa Poulet', price: '4,200 CFA', description: 'Marinated chicken with caramelized onions and mustard sauce' },
      { name: 'Mafe', price: '4,000 CFA', description: 'Rich peanut stew with beef or lamb and vegetables' },
      { name: 'Ceebu Jen', price: '4,500 CFA', description: 'Red rice with fish, vegetables, and traditional spices' },
      { name: 'Domoda', price: '3,800 CFA', description: 'Groundnut curry with meat and sweet potatoes' },
    ],
    seafood: [
      { name: 'Grilled Red Snapper', price: '6,000 CFA', description: 'Fresh Atlantic catch grilled with herbs and spices' },
      { name: 'Capitaine à la Braise', price: '5,500 CFA', description: 'Grilled captain fish with traditional seasonings' },
      { name: 'Shrimp Curry', price: '5,800 CFA', description: 'Fresh shrimp in coconut curry sauce' },
      { name: 'Seafood Platter', price: '8,500 CFA', description: 'Mixed grilled seafood with rice and vegetables' },
    ],
    desserts: [
      { name: 'Thiakry', price: '2,000 CFA', description: 'Traditional millet couscous dessert with vanilla and raisins' },
      { name: 'Sombi', price: '1,800 CFA', description: 'Coconut rice pudding with cinnamon' },
      { name: 'Fresh Fruit Salad', price: '2,200 CFA', description: 'Seasonal tropical fruits with mint' },
      { name: 'Ngalakh', price: '2,500 CFA', description: 'Peanut and millet dessert with baobab fruit' },
    ],
    drinks: [
      { name: 'Bissap', price: '1,500 CFA', description: 'Refreshing hibiscus flower juice' },
      { name: 'Ginger Juice', price: '1,500 CFA', description: 'Fresh ginger drink with mint and lime' },
      { name: 'Baobab Juice', price: '1,800 CFA', description: 'Traditional baobab fruit drink' },
      { name: 'Flag Beer', price: '2,000 CFA', description: 'Local Senegalese beer' },
      { name: 'Gazelle Beer', price: '2,000 CFA', description: 'Premium Senegalese lager' },
      { name: 'Fresh Coconut Water', price: '1,200 CFA', description: 'Straight from the coconut' },
    ],
  };

  return (
    <div className="min-h-screen bg-sahara-50">
      <Navigation />
      
      {/* Hero Section with authentic food image */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/lovable-uploads/4347dc9f-353c-47d6-91c0-8efb233311d2.png")'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-max section-padding relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-playfair font-bold mb-6">Our Menu</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the authentic flavors of Senegal with our carefully crafted dishes, 
              made from the finest local ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="container-max">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium ${
                  activeCategory === category.id 
                    ? 'bg-terracotta-600 hover:bg-terracotta-700 text-white' 
                    : 'border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span className="font-playfair text-xl text-gray-800">{item.name}</span>
                    <span className="text-terracotta-600 font-bold text-lg">{item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-800">
                Ready to Experience Le Menelik?
              </h3>
              <p className="text-gray-600 mb-6">
                Book your table now and let us take you on a culinary journey through Senegal.
              </p>
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
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
