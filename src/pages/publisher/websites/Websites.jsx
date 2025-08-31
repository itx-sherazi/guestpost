import React from 'react';
import { Heart, Pause, Edit, Trash2, CheckCircle } from 'lucide-react';

const Websites = () => {
  const freelancers = [
    {
      id: 1,
      website: "www.website.com",
      reviews: "20 Reviews",
      verified: true,
      services: [
        { name: "Article Price", price: "$170" },
        { name: "Copywriting Price", price: "$170" },
        { name: "Sensitive Topic", price: "$170" }
      ],
      orders: [
        { status: "Requested", count: 1 },
        { status: "In Progress", count: 2 },
        { status: "Published", count: 6 }
      ],
      quality: [
        { metric: "Speed", value: "7 Days", color: "text-orange-500" },
        { metric: "Indexing", value: "Found", color: "text-orange-500" },
        { metric: "Availability", value: "Yes", color: "text-[#df6e52]" }
      ],
      finances: {
        earned: "$10.78",
        expected: "$34.98"
      },
      status: "active",
      statusIcon: "heart"
    },
    {
      id: 2,
      website: "www.website.com",
      reviews: "20 Reviews",
      verified: true,
      services: [
        { name: "Article Price", price: "$170" },
        { name: "Copywriting Price", price: "$170" },
        { name: "Sensitive Topic", price: "$170" }
      ],
      orders: [
        { status: "Requested", count: 1 },
        { status: "In Progress", count: 2 },
        { status: "Published", count: 6 }
      ],
      quality: [
        { metric: "Speed", value: "7 Days", color: "text-orange-500" },
        { metric: "Indexing", value: "Found", color: "text-orange-500" },
        { metric: "Availability", value: "Yes", color: "text-[#df6e52]" }
      ],
      finances: {
        earned: "$10.78",
        expected: "$34.98"
      },
      status: "active",
      statusIcon: "heart"
    },
    {
      id: 3,
      website: "www.website.com",
      reviews: "20 Reviews",
      verified: true,
      services: [
        { name: "Article Price", price: "$170" },
        { name: "Copywriting Price", price: "$170" },
        { name: "Sensitive Topic", price: "$170" }
      ],
      orders: [
        { status: "Requested", count: 1 },
        { status: "In Progress", count: 2 },
        { status: "Published", count: 6 }
      ],
      quality: [
        { metric: "Speed", value: "0 Days", color: "text-blue-500" },
        { metric: "Indexing", value: "Not Found", color: "text-blue-500" },
        { metric: "Availability", value: "Yes", color: "text-[#df6e52]" }
      ],
      finances: {
        earned: "$0.00",
        expected: "$0.00"
      },
      status: "under-review",
      statusIcon: "check"
    },
    {
      id: 4,
      website: "www.website.com",
      reviews: "20 Reviews",
      verified: true,
      services: [
        { name: "Article Price", price: "$170" },
        { name: "Copywriting Price", price: "$170" },
        { name: "Sensitive Topic", price: "$170" }
      ],
      orders: [
        { status: "Requested", count: 1 },
        { status: "In Progress", count: 2 },
        { status: "Published", count: 6 }
      ],
      quality: [
        { metric: "Speed", value: "7 Days", color: "text-orange-500" },
        { metric: "Indexing", value: "Found", color: "text-[#df6e52]" },
        { metric: "Availability", value: "Yes", color: "text-[#df6e52]" }
      ],
      finances: {
        earned: "$10.78",
        expected: "$34.98"
      },
      status: "active",
      statusIcon: "heart"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-white";
      case "under-review":
        return "bg-[#df6e52]";
      default:
        return "bg-white";
    }
  };

  const getActionButtons = (status) => {
    if (status === "under-review") {
      return [
        { icon: <CheckCircle size={16} />, text: "Under Review", bg: "bg-yellow-500" },
        { icon: <Pause size={16} />, text: "Pause", bg: "bg-[#4955a3]" },
        { icon: <Edit size={16} />, text: "Edit", bg: "bg-[#4955a3]" },
        { icon: <Trash2 size={16} />, text: "Delete", bg: "bg-[#4955a3]" }
      ];
    } else {
      return [
        { icon: <Heart size={16} />, text: "Active", bg: "bg-[#df6e52]" },
        { icon: <Pause size={16} />, text: "Pause", bg: "bg-[#df6e52]" },
        { icon: <Edit size={16} />, text: "Edit", bg: "bg-[#df6e52]" },
        { icon: <Trash2 size={16} />, text: "Delete", bg: "bg-[#df6e52]" }
      ];
    }
  };

  return (
    <div className="p-6 bg-[#f3f3f9] min-h-screen">
      {/* Header */}
      <div className="bg-[#df6e52] text-white rounded-lg mb-4">
        <div className="grid grid-cols-6 gap-4 px-6 py-4 text-sm font-medium">
          <div>Name</div>
          <div>Format and Pricing</div>
          <div>Orders</div>
          <div>Quality of Work</div>
          <div>Finances</div>
          <div>Actions</div>
        </div>
      </div>

      {/* Table Content */}
      <div className="space-y-4">
        {freelancers.map((freelancer) => (
          <div 
            key={freelancer.id} 
            className={`grid grid-cols-6 gap-4 px-6 py-6 rounded-lg ${getStatusColor(freelancer.status)} shadow mb-4`}
          >
            {/* Name Column */}
            <div className="space-y-2">
              <div className="font-medium text-gray-800">{freelancer.website}</div>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                <span className="text-sm text-gray-600">{freelancer.reviews}</span>
              </div>
              <div className="flex items-center space-x-2 ">
                <div className="w-4 h-4 bg-[#df6e52] rounded-full flex items-center justify-center">
                  <CheckCircle size={12} className="text-white" />
                </div>
                <span className="text-sm text-gray-400">verified</span>
              </div>
            </div>

            {/* Format and Pricing Column */}
            <div className="space-y-2">
              {freelancer.services.map((service, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{service.name}</span>
                  <span className="text-sm font-medium text-[#4955a3]">{service.price}</span>
                </div>
              ))}
            </div>

            {/* Orders Column */}
            <div className="space-y-2">
              {freelancer.orders.map((order, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{order.status}</span>
                  <span className="text-sm font-medium">{order.count}</span>
                </div>
              ))}
            </div>

            {/* Quality of Work Column */}
            <div className="space-y-2">
              {freelancer.quality.map((quality, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{quality.metric}</span>
                  <span className={`text-sm font-medium ${quality.color}`}>{quality.value}</span>
                </div>
              ))}
            </div>

            {/* Finances Column */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Earned</span>
                <span className="text-sm font-medium text-gray-800">{freelancer.finances.earned}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Expected</span>
                <span className="text-sm font-medium text-gray-500">{freelancer.finances.expected}</span>
              </div>
            </div>

            {/* Actions Column */}
            <div className="space-y-2">
              {getActionButtons(freelancer.status).map((action, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className={`${action.bg} text-white p-2 rounded flex items-center justify-center`}>
                    {action.icon}
                  </div>
                  <span className={`text-sm font-medium ${freelancer.status === 'under-review' ? 'text-white' : 'text-gray-700'}`}>
                    {action.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-6">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded text-sm font-medium ${page === 1 ? 'bg-[#df6e52] text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              {page}
            </button>
          ))}
          <span className="text-gray-400 px-2">...</span>
          {[76, 77].map((page) => (
            <button
              key={page}
              className="w-8 h-8 rounded text-sm font-medium bg-[#df6e52] text-white"
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Next Page Link */}
      <div className="flex justify-center mt-4">
        <button className="text-[#4955a3] text-sm font-medium flex items-center space-x-1">
          <span>Next Page</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Websites;
