import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);

  // Dummy data - replace with API call later
  const dummyPromotions = [
    {
      id: 1,
      title: 'Black Friday Sale',
      image: '/api/placeholder/300/300',
      hasContent: true
    },
    {
      id: 2,
      title: 'Promotion 2',
      image: '/api/placeholder/300/300',
      hasContent: false
    },
    {
      id: 3,
      title: 'Promotion 3',
      image: '/api/placeholder/300/300',
      hasContent: false
    }
  ];

  useEffect(() => {
    // Future API call - currently using dummy data
    fetchPromotions();
  }, []);

  const fetchPromotions = async () => {
    try {
      // Future API call - uncomment when backend is ready:
      // const response = await fetch('/api/promotions');
      // const data = await response.json();
      // setPromotions(data);
      
      // Using dummy data for now
      setPromotions(dummyPromotions);
    } catch (error) {
      console.error('Error fetching promotions:', error);
      // Fallback to dummy data
      setPromotions(dummyPromotions);
    }
  };

  const handleAvailNow = async (id) => {
    try {
      // Future API call - uncomment when backend is ready:
      // const response = await fetch(`/api/promotions/${id}/avail`, { method: 'POST' });
      // if (response.ok) { console.log('Promotion availed successfully'); }
      
      console.log(`Availing promotion ${id}`);
    } catch (error) {
      console.error('Error availing promotion:', error);
    }
  };

  const handleSeeAllPromotions = () => {
    // Navigate to all promotions page
    console.log('Navigating to all promotions page');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-orange-500 mb-3">Recent Promotions</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Here you will find all the promotions that Contlink gets exclusively for you. Discounts and offers in SEO tools, marketing, contents, writing...
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="flex justify-center items-center gap-6 mb-12">{promotions.map((promotion, index) => (
            <div key={promotion.id} className="flex-shrink-0">
              {/* Ticket-shaped Card */}
              <div className="relative bg-white rounded-2xl border-3 border-blue-600 shadow-lg overflow-hidden w-64 h-80">{/* Card Content */}
                <div className="p-4 h-full flex flex-col items-center justify-center">{index === 0 ? (
                    // First card with Black Friday content
                    <div className="flex flex-col items-center justify-center space-y-4">
                      {/* Black Friday Tag */}
                      <div className="bg-black text-white px-6 py-8 rounded-lg transform -rotate-3 shadow-xl relative">
                        <div className="text-center">
                          <div className="text-xl font-bold mb-1">BLACK</div>
                          <div className="text-xl font-bold mb-1">FRIDAY</div>
                          <div className="text-lg font-bold text-red-500">Sale</div>
                        </div>
                        {/* Hanging string */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gray-800"></div>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      </div>
                      
                      {/* Avail Now Button */}
                      <button
                        onClick={() => handleAvailNow(promotion.id)}
                        className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        Avail Now
                      </button>
                    </div>
                  ) : index === 1 ? (
                    // Second card 
                    <div className="flex flex-col items-center justify-center space-y-4">
                      {/* Promotion content area */}
                      <div className="flex flex-col items-center justify-center flex-1">
                        <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-300 mb-3">
                          <div className="text-center">
                            <div className="text-2xl mb-1">🎯</div>
                            <span className="text-purple-500 font-medium text-sm">Promotion 2</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Avail Now Button */}
                      <button
                        onClick={() => handleAvailNow(promotion.id)}
                        className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        Avail Now
                      </button>
                    </div>
                  ) : (
                    // Third card
                    <div className="flex flex-col items-center justify-center space-y-4">
                      {/* Promotion content area */}
                      <div className="flex flex-col items-center justify-center flex-1">
                        <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-green-300 mb-3">
                          <div className="text-center">
                            <div className="text-2xl mb-1">🎁</div>
                            <span className="text-green-500 font-medium text-sm">Promotion 3</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Avail Now Button */}
                      <button
                        onClick={() => handleAvailNow(promotion.id)}
                        className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        Avail Now
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Top cutout */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-50 rounded-full border-3 border-blue-600"></div>
                
                {/* Bottom cutout */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-50 rounded-full border-3 border-blue-600"></div>
                
                {/* Left side cutouts */}
                <div className="absolute left-0 top-1/4 w-3 h-3 bg-gray-50 rounded-full transform -translate-x-1.5"></div>
                <div className="absolute left-0 top-2/4 w-3 h-3 bg-gray-50 rounded-full transform -translate-x-1.5"></div>
                <div className="absolute left-0 top-3/4 w-3 h-3 bg-gray-50 rounded-full transform -translate-x-1.5"></div>
                
                {/* Right side cutouts */}
                <div className="absolute right-0 top-1/4 w-3 h-3 bg-gray-50 rounded-full transform translate-x-1.5"></div>
                <div className="absolute right-0 top-2/4 w-3 h-3 bg-gray-50 rounded-full transform translate-x-1.5"></div>
                <div className="absolute right-0 top-3/4 w-3 h-3 bg-gray-50 rounded-full transform translate-x-1.5"></div>
              </div>
            </div>
          ))}</div>

        {/* See All Promotions */}
        <div className="flex justify-center">
          <button
            onClick={handleSeeAllPromotions}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors duration-200"
          >
            <span>See All Promotions</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;