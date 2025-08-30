import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const DescriptionPricePage = () => {
  const [formData, setFormData] = useState({
    websiteName: '',
    country: 'United States of America',
    language: 'Spanish',
    maxAmount: '4',
    imagesPerPost: '2',
    linksAdmitted: 'Follow',
    publishTime: '5 Days',
    categories: [],
    keywords: '',
    sensitiveTopics: 'Casino',
    sponsorshipNotification: 'Always',
    homePagePublish: false,
    relatedCategories: false,
    normalPrice: '30',
    sensitiveTopicPrice: '30',
    copywritingPrice: '30',
    discount: '30'
  });

  const [copywritingEnabled, setCopywritingEnabled] = useState(false);
  const [sensitiveTopicEnabled, setSensitiveTopicEnabled] = useState(true);
 const navigate = useNavigate(); 
  const categories = [
    'Activism and NGOs',
    'Activism and NGOs',
    'Activism and NGOs',
    'Activism and NGOs',
    'Activism and NGOs',
    'Activism and NGOs',
    'Activism and NGOs',
    'Activism and NGOs',
    'Activism and NGOs'
  ];

  const handleCategoryChange = (category, checked) => {
    if (checked) {
      if (formData.categories.length < 3) {
        setFormData({
          ...formData,
          categories: [...formData.categories, category]
        });
      }
    } else {
      setFormData({
        ...formData,
        categories: formData.categories.filter(c => c !== category)
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
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
              <div className="w-5 h-5 rounded-full bg-orange-400 z-10 relative" />
              <div className="flex-1 h-1 bg-orange-400" />
              <div className="w-5 h-5 rounded-full bg-orange-400 z-10 relative" />
              <div className="flex-1 h-1 bg-orange-400" />
              <div className="w-5 h-5 rounded-full bg-orange-400 z-10 relative" />
              <div className="flex-1 h-1 bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-gray-300 z-10 relative" />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg p-8">
          {/* Website Name */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Website Name *
            </label>
            <textarea
              value={formData.websiteName}
              onChange={(e) => handleInputChange('websiteName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none resize-none h-24"
              placeholder="Website description..."
            />
          </div>

          {/* Row 1: Country and Language */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your main audience is from (country): *
              </label>
              <div className="relative">
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none appearance-none"
                >
                  <option>United States of America</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Language *
              </label>
              <div className="relative">
                <select
                  value={formData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none appearance-none"
                >
                  <option>Spanish</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Row 2: Max Amount and Images */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Maximum Amount of link per post: *
              </label>
              <div className="relative">
                <select
                  value={formData.maxAmount}
                  onChange={(e) => handleInputChange('maxAmount', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none appearance-none"
                >
                  <option>4</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                How many images per post? *
              </label>
              <div className="relative">
                <select
                  value={formData.imagesPerPost}
                  onChange={(e) => handleInputChange('imagesPerPost', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none appearance-none"
                >
                  <option>2</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Row 3: Links Admitted and Publish Time */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Type of links admitted: *
              </label>
              <div className="relative">
                <select
                  value={formData.linksAdmitted}
                  onChange={(e) => handleInputChange('linksAdmitted', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none appearance-none"
                >
                  <option>Follow</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Publish Time:
              </label>
              <div className="relative">
                <select
                  value={formData.publishTime}
                  onChange={(e) => handleInputChange('publishTime', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none appearance-none"
                >
                  <option>5 Days</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Select your website categories (maximum 3) *
            </label>
            <div className="grid grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.categories.includes(category)}
                    onChange={(e) => handleCategoryChange(category, e.target.checked)}
                    disabled={!formData.categories.includes(category) && formData.categories.length >= 3}
                    className="w-4 h-4 text-orange-400 rounded focus:ring-orange-400"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Add Keywords (Add up to 5)
            </label>
            <textarea
              value={formData.keywords}
              onChange={(e) => handleInputChange('keywords', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none resize-none h-24"
              placeholder=""
            />
          </div>

          {/* Row 4: Sensitive Topics and Sponsorship */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Sensitive topics you do not accept *
              </label>
              <div className="relative">
                <select
                  value={formData.sensitiveTopics}
                  onChange={(e) => handleInputChange('sensitiveTopics', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none appearance-none"
                >
                  <option>Casino</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Sponsorship notification *
              </label>
              <div className="relative">
                <select
                  value={formData.sponsorshipNotification}
                  onChange={(e) => handleInputChange('sponsorshipNotification', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none appearance-none"
                >
                  <option>Always</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.homePagePublish}
                  onChange={(e) => handleInputChange('homePagePublish', e.target.checked)}
                  className="w-4 h-4 text-orange-400 rounded focus:ring-orange-400"
                />
                <span className="text-sm text-gray-700">Do you publish on the home of your website?</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.relatedCategories}
                  onChange={(e) => handleInputChange('relatedCategories', e.target.checked)}
                  className="w-4 h-4 text-orange-400 rounded focus:ring-orange-400"
                />
                <span className="text-sm text-gray-700">Do you publish in related categories?</span>
              </label>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Normal Price *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={formData.normalPrice}
                  onChange={(e) => handleInputChange('normalPrice', e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-gray-700 font-medium">
                  Sensitive Topic Price (Optional)
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sensitiveTopicEnabled}
                    onChange={(e) => setSensitiveTopicEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-400"></div>
                </label>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={formData.sensitiveTopicPrice}
                  onChange={(e) => handleInputChange('sensitiveTopicPrice', e.target.value)}
                  disabled={!sensitiveTopicEnabled}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none disabled:bg-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-gray-700 font-medium">
                  Copywriting Price
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={copywritingEnabled}
                    onChange={(e) => setCopywritingEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-400"></div>
                </label>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={formData.copywritingPrice}
                  onChange={(e) => handleInputChange('copywritingPrice', e.target.value)}
                  disabled={!copywritingEnabled}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none disabled:bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                I am ready to give a discount on publishing
              </label>
              <div className="flex">
                <input
                  type="number"
                  value={formData.discount}
                  onChange={(e) => handleInputChange('discount', e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:border-orange-400 focus:outline-none"
                />
                <div className="px-4 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg flex items-center">
                  %
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
           <button 
            onClick={() => navigate('/publisher/earn')} // 👈 jis route pe jana hai wo daal do
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            Save Changes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPricePage;