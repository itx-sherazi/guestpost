import React from 'react';
import FAQ from './FAQ';

const Home = () => {
  const requestData = [
    {
      orderId: '78689',
      website: 'weblink.com',
      dueDate: '20 Dec 2024',
      price: '$100',
      bonus: null,
      expired: 'Expired 14 hours'
    },
    {
      orderId: '78689',
      website: 'weblink.com',
      dueDate: '21 Dec 2024',
      price: '$150',
      bonus: '+$20',
      expired: 'Expired 14 hours'
    },
    {
      orderId: '78689',
      website: 'weblink.com',
      dueDate: '22 Dec 2024',
      price: '$130',
      bonus: null,
      expired: 'Expired 14 hours'
    },
    {
      orderId: '78689',
      website: 'weblink.com',
      dueDate: '23 Dec 2024',
      price: '$190',
      bonus: '+$30',
      expired: 'Expired 14 hours'
    }
  ];

  const RequestCard = ({ title, bgColor, data, showExpired = false }) => (
    <div className={`${bgColor} rounded-xl p-4 w-full max-w-xl shadow-2xl`}>
      <h2 className="text-base font-semibold text-[#4955a3] mb-4">
        {title}
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-5 gap-2 pb-2 border-b  mb-3">
        <div className="text-sm font-medium text-gray-700">Order ID</div>
        <div className="text-sm font-medium text-gray-700">Website</div>
        <div className="text-sm font-medium text-gray-700">Due Date</div>
        <div className="text-sm font-medium text-gray-700">Price</div>
        <div></div>
      </div>

      {/* Table Rows */}
      <div className="space-y-4">
        {data.map((request, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 py-2 border-b border-gray-200 last:border-b-0">
            <div className="text-gray-700 text-sm">
              {request.orderId}
            </div>
            <div className="text-gray-700 text-sm">
              {request.website}
            </div>
            <div className="text-gray-700 text-sm">
              <div>{request.dueDate}</div>
              {showExpired && (
                <div className="text-red-500 text-xs mt-1">{request.expired}</div>
              )}
            </div>
            <div className="text-gray-700 text-sm flex items-center gap-1">
              <span>{request.price}</span>
              {request.bonus && (
                <span className="text-[#4955a3] text-xs">
                  {request.bonus}
                </span>
              )}
            </div>
            <div className="flex justify-end">
              <button className="text-[#4955a3] hover:text-[#4955a3] text-sm underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-6">
        <button className="text-orange-400 hover:text-orange-500 font-medium flex items-center gap-2 text-sm">
          See more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f3f3f9] p-4">
      <div className="max-w-6xl mx-auto">
        {/* First Row - 2 Cards */}
        <div className="flex gap-6 mb-6">
          <RequestCard 
            title="Order Requests" 
            bgColor="bg-white border border-gray-200" 
            data={requestData}
            showExpired={true}
          />
          <RequestCard 
            title="Approved Requests" 
            bgColor="bg-white border border-gray-200" 
            data={requestData}
            showExpired={true}
          />
        </div>

        {/* Second Row - 2 Cards */}
        <div className="flex gap-6 mb-6">
          <RequestCard 
            title="Completed Requests" 
            bgColor="bg-white border border-gray-200" 
            data={requestData}
          />
          <RequestCard 
            title="Improvement Requests" 
            bgColor="bg-white border border-gray-200" 
            data={requestData}
          />
        </div>

        {/* Third Row - 1 Card Centered */}
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <RequestCard 
              title="Rejected Requests" 
              bgColor="bg-white border border-gray-200" 
              data={requestData}
            />
          </div>
        </div>
      </div>
      <FAQ/>
    </div>
  );
};

export default Home;