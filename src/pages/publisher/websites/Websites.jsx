import React, { useState } from 'react';
import { Star, CheckCircle, Pause, Edit, Trash2, Shield } from 'lucide-react';

const Websites = () => {
  // Dummy data array (replace with API data when ready)
  const [websites, setWebsites] = useState([
    {
      id: 1,
      name: 'www.website.com',
      reviews: 20,
      rating: 5,
      verified: true,
      status: 'Active',
      prices: {
        article: 170,
        copywriting: 170,
        sensitive: 170
      },
      orders: {
        requested: 1,
        inProgress: 2,
        published: 6
      },
      quality: {
        speed: '7 Days',
        indexing: 'Found',
        availability: 'Yes'
      },
      finances: {
        earned: 10.78,
        expected: 34.98
      }
    },
    {
      id: 2,
      name: 'www.website.com',
      reviews: 20,
      rating: 5,
      verified: true,
      status: 'Active',
      prices: {
        article: 170,
        copywriting: 170,
        sensitive: 170
      },
      orders: {
        requested: 1,
        inProgress: 2,
        published: 6
      },
      quality: {
        speed: '7 Days',
        indexing: 'Found',
        availability: 'Yes'
      },
      finances: {
        earned: 10.78,
        expected: 34.98
      }
    },
    {
      id: 3,
      name: 'www.website.com',
      reviews: 20,
      rating: 5,
      verified: true,
      status: 'Under Review',
      prices: {
        article: 170,
        copywriting: 170,
        sensitive: 170
      },
      orders: {
        requested: 1,
        inProgress: 2,
        published: 6
      },
      quality: {
        speed: '0 Days',
        indexing: 'Not Found',
        availability: 'Yes'
      },
      finances: {
        earned: 0.00,
        expected: 0.00
      }
    },
    {
      id: 4,
      name: 'www.website.com',
      reviews: 20,
      rating: 5,
      verified: true,
      status: 'Active',
      prices: {
        article: 170,
        copywriting: 170,
        sensitive: 170
      },
      orders: {
        requested: 1,
        inProgress: 2,
        published: 6
      },
      quality: {
        speed: '7 Days',
        indexing: 'Found',
        availability: 'Yes'
      },
      finances: {
        earned: 10.78,
        expected: 34.98
      }
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 77;

  // Function to get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Pause': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to get status icon
  const getStatusIcon = (status) => {
    switch(status) {
      case 'Active': return <CheckCircle className="w-4 h-4" />;
      case 'Under Review': return <Shield className="w-4 h-4" />;
      case 'Pause': return <Pause className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  // Function to render stars
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  // Action buttons component
  const ActionButtons = ({ website }) => (
    <div className="flex flex-col gap-2">
      <button className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${getStatusColor(website.status)}`}>
        {getStatusIcon(website.status)}
        {website.status}
      </button>
      <button className="flex items-center gap-2 px-3 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-medium hover:bg-orange-200">
        <Pause className="w-4 h-4" />
        Pause
      </button>
      <button className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium hover:bg-blue-200">
        <Edit className="w-4 h-4" />
        Edit
      </button>
      <button className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-medium hover:bg-red-200">
        <Trash2 className="w-4 h-4" />
        Delete
      </button>
    </div>
  );

  // Pagination component
  const Pagination = () => {
    const pageNumbers = [1, 2, 3, 4, 5];
    
    return (
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
          {pageNumbers.map(num => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-10 h-10 rounded-lg font-medium ${
                currentPage === num 
                  ? 'bg-orange-400 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {num}
            </button>
          ))}
          <span className="text-gray-500 mx-2">...</span>
          <button className="w-10 h-10 rounded-lg font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
            76
          </button>
          <button className="w-10 h-10 rounded-lg font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
            77
          </button>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800">
          Next Page
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Website Cards */}
        <div className="space-y-4">
          {websites.map((website) => (
            <div 
              key={website.id} 
              className={`${
                website.status === 'Under Review' 
                  ? 'bg-orange-400 text-white' 
                  : 'bg-white text-gray-800'
              } rounded-lg p-6 shadow-sm`}
            >
              {/* Header Row */}
              <div className="grid grid-cols-6 gap-6 mb-4">
                <div className="font-semibold text-center">Name</div>
                <div className="font-semibold text-center">Format and Pricing</div>
                <div className="font-semibold text-center">Orders</div>
                <div className="font-semibold text-center">Quality of Work</div>
                <div className="font-semibold text-center">Finances</div>
                <div className="font-semibold text-center">Actions</div>
              </div>

              {/* Content Row */}
              <div className="grid grid-cols-6 gap-6 items-start">
                {/* Name Column */}
                <div className="space-y-2">
                  <div className="font-medium">{website.name}</div>
                  <div className="flex items-center gap-1">
                    {renderStars(website.rating)}
                    <span className="text-sm ml-1">{website.reviews} Reviews</span>
                  </div>
                  {website.verified && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                      <CheckCircle className="w-3 h-3" />
                      verified
                    </div>
                  )}
                  {website.status === 'Under Review' && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-400 text-black rounded-full text-xs">
                      <Shield className="w-3 h-3" />
                      under review
                    </div>
                  )}
                </div>

                {/* Format and Pricing Column */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Article Price</span>
                    <span className={`font-medium ${website.status === 'Under Review' ? 'text-blue-200' : 'text-blue-600'}`}>
                      ${website.prices.article}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Copywriting Price</span>
                    <span className={`font-medium ${website.status === 'Under Review' ? 'text-blue-200' : 'text-blue-600'}`}>
                      ${website.prices.copywriting}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sensitive Topic</span>
                    <span className={`font-medium ${website.status === 'Under Review' ? 'text-blue-200' : 'text-blue-600'}`}>
                      ${website.prices.sensitive}
                    </span>
                  </div>
                </div>

                {/* Orders Column */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Requested</span>
                    <span className="font-medium">{website.orders.requested}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In Progress</span>
                    <span className="font-medium">{website.orders.inProgress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Published</span>
                    <span className="font-medium">{website.orders.published}</span>
                  </div>
                </div>

                {/* Quality Column */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Speed</span>
                    <span className={`font-medium ${
                      website.quality.speed === '0 Days' 
                        ? (website.status === 'Under Review' ? 'text-blue-200' : 'text-blue-600')
                        : (website.status === 'Under Review' ? 'text-red-200' : 'text-red-600')
                    }`}>
                      {website.quality.speed}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Indexing</span>
                    <span className={`font-medium ${
                      website.quality.indexing === 'Found'
                        ? (website.status === 'Under Review' ? 'text-red-200' : 'text-red-600')
                        : (website.status === 'Under Review' ? 'text-blue-200' : 'text-blue-600')
                    }`}>
                      {website.quality.indexing}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability</span>
                    <span className={`font-medium ${
                      website.quality.availability === 'Yes'
                        ? (website.status === 'Under Review' ? 'text-red-200' : 'text-red-600')
                        : (website.status === 'Under Review' ? 'text-blue-200' : 'text-blue-600')
                    }`}>
                      {website.quality.availability}
                    </span>
                  </div>
                </div>

                {/* Finances Column */}
                <div className="space-y-2 text-sm">
                  <div className="text-center">
                    <div>Earned</div>
                    <div className={`font-medium text-lg ${
                      website.status === 'Under Review' ? 'text-blue-200' : 'text-red-600'
                    }`}>
                      ${website.finances.earned}
                    </div>
                  </div>
                  <div className="text-center">
                    <div>Expected</div>
                    <div className={`font-medium text-lg ${
                      website.status === 'Under Review' ? 'text-blue-200' : 'text-red-600'
                    }`}>
                      ${website.finances.expected}
                    </div>
                  </div>
                </div>

                {/* Actions Column */}
                <div>
                  <ActionButtons website={website} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

// API integration ke liye ye function use karein (currently commented)
/*
const fetchWebsites = async () => {
  try {
    const response = await axios.get('/api/websites');
    setWebsites(response.data);
  } catch (error) {
    console.error('Error fetching websites:', error);
  }
};

// Component mount hone par API call karein
useEffect(() => {
  fetchWebsites();
}, []);
*/

export default Websites;