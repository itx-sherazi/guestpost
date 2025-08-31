import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Addwebsite = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

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
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className="text-lg font-medium text-gray-700 mb-2">Add your Website</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium text-gray-700 mb-2">Confirm your Ownership</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium text-gray-700 mb-2">Description and price</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium text-gray-700 mb-2">Earn</div>
            </div>
          </div>
          
          <div className="relative">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-gray-300 z-10 relative" />
              <div className="flex-1 h-1 bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-gray-300 z-10 relative" />
              <div className="flex-1 h-1 bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-gray-300 z-10 relative" />
              <div className="flex-1 h-1 bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-gray-300 z-10 relative" />
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
            className="w-96 px-4 py-3 border-2 border-[#E86B4D] rounded-lg focus:border-[#E86B4D] focus:outline-none"
            placeholder="Enter your website URL"
          />
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="bg-[#E86B4D] hover:bg-[#E86B4D] text-white px-8 py-3 rounded-lg font-medium transition-colors"
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
                  ? 'bg-[#4955a3] text-white'
                  : 'bg-gray-100 text-[#4955a3] hover:bg-gray-200'
              }`}
            >
              Requirements for websites
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'benefits'
                  ? 'bg-[#4955a3] text-white'
                  : 'bg-gray-100 text-[#4955a3] hover:bg-gray-200'
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

export default Addwebsite;
