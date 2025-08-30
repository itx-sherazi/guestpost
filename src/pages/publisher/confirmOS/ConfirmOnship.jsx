import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 navigation hook

const ConfirmOnship = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigate = useNavigate(); // 👈 navigation function

  const steps = [
    'Add your Website',
    'Confirm your Ownership',
    'Description and price',
    'Earn'
  ];

  const verificationMethods = [
    {
      id: 'google-analytics',
      title: 'Google Analytics',
      icon: (
        <div className="flex items-end gap-1">
          <div className="w-2 h-4 bg-orange-400 rounded-sm"></div>
          <div className="w-2 h-6 bg-orange-500 rounded-sm"></div>
          <div className="w-2 h-8 bg-orange-600 rounded-sm"></div>
        </div>
      )
    },
    {
      id: 'html-file',
      title: 'HTML File',
      icon: (
        <div className="w-12 h-12 bg-blue-500 rounded border-2 border-gray-800 flex items-center justify-center relative">
          <div className="text-white text-xs font-bold">HTML</div>
          <div className="absolute top-1 left-1 text-white text-xs">&lt;/&gt;</div>
        </div>
      )
    },
    {
      id: 'other-method',
      title: 'Other Method',
      icon: (
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          <div className="w-6 h-8 bg-yellow-600 rounded-t-full"></div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="text-sm font-medium text-gray-700 mb-2">
                  {step}
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-orange-400 z-10 relative" />
              <div className="flex-1 h-0.5 bg-orange-400" />
              <div className="w-4 h-4 rounded-full bg-orange-400 z-10 relative" />
              <div className="flex-1 h-0.5 bg-gray-300" />
              <div className="w-4 h-4 rounded-full bg-gray-300 z-10 relative" />
              <div className="flex-1 h-0.5 bg-gray-300" />
              <div className="w-4 h-4 rounded-full bg-gray-300 z-10 relative" />
            </div>
          </div>
        </div>

        {/* Verification Methods */}
        <div className="space-y-6 mb-12">
          {verificationMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`flex items-center gap-6 p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedMethod === method.id
                  ? 'border-orange-400 bg-orange-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex-shrink-0">
                {method.icon}
              </div>
              <div className="text-lg font-medium text-gray-700">
                {method.title}
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate('/publisher/DescriptionPrice')} // 👈 next page yahan set karo
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOnship;
