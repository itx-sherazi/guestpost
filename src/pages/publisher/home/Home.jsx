import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const steps = [
    { name: 'Add your Website', active: true },
    { name: 'Confirm your Ownership', active: false },
    { name: 'Description and price', active: false },
    { name: 'Earn', active: false }
  ];

  const handleSubmit = () => {
    if (!url) {
      alert("Please enter your website URL before continuing.");
      return;
    }
    // ✅ navigate to next page
    navigate("/publisher/confirmOwnership", { state: { websiteUrl: url } });

  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="text-sm font-medium text-gray-700 mb-2">
                  {step.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-orange-400 z-10 relative" />
              <div className="flex-1 h-0.5 bg-gray-300" />
              <div className="w-4 h-4 rounded-full bg-gray-300 z-10 relative" />
              <div className="flex-1 h-0.5 bg-gray-300" />
              <div className="w-4 h-4 rounded-full bg-gray-300 z-10 relative" />
              <div className="flex-1 h-0.5 bg-gray-300" />
              <div className="w-4 h-4 rounded-full bg-gray-300 z-10 relative" />
            </div>
          </div>
        </div>

        {/* URL Input Section */}
        <div className="text-center mb-12">
          <label className="block text-gray-700 font-medium mb-4">
            URL to your Website
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-96 px-4 py-3 border-2 border-red-300 rounded-lg focus:border-red-400 focus:outline-none"
            placeholder="Enter your website URL"
          />
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Information Section */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-xl font-medium text-red-400 mb-8">
            Information for website owners
          </h2>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'requirements'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Requirements for websites
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'benefits'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Contlink Benefits
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'requirements' && (
            <div className="text-gray-700 space-y-6">
              <p>Website traffic is the primary criterion for moderation.</p>
              <p>If your website has a genuine audience, we'd be happy to welcome it to our platform.</p>
              <p>Websites can be added by their owners or official representatives.</p>
              <p>Detailed instructions for verifying ownership are provided in the 'Verify Rights' step.</p>
              <div className="mt-8">
                <p className="font-medium mb-4">
                  When moderating submissions, we consider additional factors, including:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>Authority and trustworthiness</li>
                  <li>Niche relevance</li>
                  <li>Audience engagement</li>
                  <li>Design quality</li>
                  <li>Content structure and layout</li>
                  <li>Security measures</li>
                  <li>And more</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="text-gray-700 space-y-6">
              <p>
                Joining Contlink provides numerous benefits for website owners looking to monetize their traffic and connect with quality advertisers.
              </p>
              <p>
                Our platform offers competitive rates, reliable payments, and comprehensive analytics to help you maximize your earning potential.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
