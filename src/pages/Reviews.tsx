
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Facebook, Heart } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Marie Dubois',
      location: 'France',
      rating: 5,
      date: 'March 2024',
      text: 'The most authentic dining experience in Saly! The thieboudienne was absolutely perfect, and the staff made us feel like family. The atmosphere is warm and inviting, and being so close to the beach makes it even more special.',
      highlight: 'Authentic flavors'
    },
    {
      name: 'James Wilson',
      location: 'USA',
      rating: 5,
      date: 'February 2024',
      text: 'Perfect location near the beach with incredible food. The grilled fish was fresh and perfectly seasoned. The service was excellent, and the free Wi-Fi was a nice touch for sharing photos instantly!',
      highlight: 'Perfect location'
    },
    {
      name: 'Fatou Ndiaye',
      location: 'Dakar, Senegal',
      rating: 5,
      date: 'March 2024',
      text: 'As a Senegalese person, I can confidently say this is where you get the real taste of our cuisine. The mafe was just like my grandmother used to make. This place preserves our culinary traditions beautifully.',
      highlight: 'Authentic Senegalese'
    },
    {
      name: 'Carlos Rodriguez',
      location: 'Spain',
      rating: 5,
      date: 'January 2024',
      text: 'We had dinner here three times during our week in Saly! Each meal was outstanding. The yassa poulet was our favorite, and the cocktails were refreshing after a day at the beach.',
      highlight: 'Returned multiple times'
    },
    {
      name: 'Sophie Laurent',
      location: 'Belgium',
      rating: 5,
      date: 'February 2024',
      text: 'The ambiance is absolutely magical, especially in the evening. The Afro-chic decor creates such a warm atmosphere. Food was exceptional, and the staff went above and beyond to accommodate our dietary needs.',
      highlight: 'Magical ambiance'
    },
    {
      name: 'Amadou Diallo',
      location: 'Saly, Senegal',
      rating: 5,
      date: 'March 2024',
      text: 'Best restaurant in Saly, hands down! I bring all my visiting friends here, and they\'re always impressed. The seafood platter is incredible, and the prices are very reasonable for the quality.',
      highlight: 'Local favorite'
    },
    {
      name: 'Emma Thompson',
      location: 'UK',
      rating: 5,
      date: 'January 2024',
      text: 'Stumbled upon Le Menelik during our honeymoon and it became our special place. The romantic setting, delicious food, and warm hospitality made our evenings perfect. Highly recommend for couples!',
      highlight: 'Romantic setting'
    },
    {
      name: 'Mohamed Hassan',
      location: 'Morocco',
      rating: 5,
      date: 'February 2024',
      text: 'The flavors here are incredible! As someone who appreciates African cuisine, I was blown away by the depth and authenticity. The thiakry dessert was the perfect ending to a perfect meal.',
      highlight: 'Incredible flavors'
    }
  ];

  const stats = [
    { number: '800+', label: 'Facebook Likes' },
    { number: '4.8/5', label: 'Average Rating' },
    { number: '200+', label: 'Happy Reviews' },
    { number: '3 Years', label: 'Serving Excellence' }
  ];

  return (
    <div className="min-h-screen bg-sahara-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-terracotta-600 to-sahara-600 text-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-5xl font-playfair font-bold mb-6">What Our Guests Say</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Don't just take our word for it - read what our happy customers 
              have to say about their experience at Le Menelik.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-playfair font-bold text-terracotta-600">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  <div className="bg-terracotta-100 text-terracotta-600 text-xs font-medium px-3 py-1 rounded-full w-fit mb-3">
                    {review.highlight}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 mb-4 flex-grow italic">
                    "{review.text}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-800">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                    <div className="text-xs text-gray-400">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow us on social media and become part of the Le Menelik family.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-terracotta-600 to-sahara-600 rounded-lg p-8 text-white mb-8">
              <Facebook className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold mb-2">
                800+ Likes on Facebook
              </h3>
              <p className="mb-6">
                Join our growing community of food lovers and stay updated with our latest dishes, 
                special offers, and events.
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-terracotta-600"
                onClick={() => window.open('https://facebook.com/lemenelik', '_blank')}
              >
                Follow Us on Facebook
              </Button>
            </div>

            <div className="bg-sahara-100 rounded-lg p-6">
              <Heart className="w-8 h-8 text-terracotta-600 mx-auto mb-3" />
              <h4 className="text-xl font-playfair font-semibold mb-2">
                Share Your Experience
              </h4>
              <p className="text-gray-600 mb-4">
                Had a great time at Le Menelik? We'd love to hear about it! 
                Leave us a review and help others discover our restaurant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50"
                  onClick={() => window.open('https://facebook.com/lemenelik/reviews', '_blank')}
                >
                  Review on Facebook
                </Button>
                <Button 
                  variant="outline"
                  className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50"
                  onClick={() => window.open('https://wa.me/221701234567?text=I%20had%20a%20great%20experience%20at%20Le%20Menelik!', '_blank')}
                >
                  Share via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-terracotta-600 to-sahara-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Ready to Create Your Own Memory?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied customers who have made Le Menelik 
            their favorite dining destination in Saly.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-terracotta-600 px-8 py-3 text-lg"
            onClick={() => window.open('https://wa.me/221701234567', '_blank')}
          >
            Book Your Table Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
