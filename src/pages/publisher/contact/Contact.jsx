import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: 'Mark Allison',
    companyName: '',
    email: 'example@email.com',
    phoneNumber: '+1 (230) 456 0972',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {/* 🔹 bg-gray-100 instead of bg-white */}
      <div className="w-full max-w-6xl bg-gray-100 rounded-2xl shadow-xl">
        <div className="px-6 py-12 md:py-16">
          <form onSubmit={handleSubmit}>
            
            {/* First row: Full Name and Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#df6e52] rounded-md focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#df6e52] rounded-md focus:outline-none focus:border-black"
                />
              </div>
            </div>

            {/* Second row: Email and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#df6e52] rounded-md focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#df6e52] rounded-md focus:outline-none focus:border-black"
                  required
                />
              </div>
            </div>

            {/* Third row: Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Type your message here......"
                className="w-full px-4 py-2 border border-[#df6e52] rounded-md focus:outline-none focus:border-black"
              ></textarea>
            </div>

            {/* Submit button centered */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#df6e52] text-white font-medium rounded-md hover:bg-[#df6e52] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300 w-full md:w-auto md:px-12"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
