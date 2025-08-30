import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmOnship = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigate = useNavigate();

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
      ),
      description: (
        <div className="mt-4 p-6  ">
          
          <p className="text-gray-600 mb-2">Check website ownership in 10 seconds.</p>
          <p className="text-gray-600 mb-2">
            Collaborator displays the size of the site's audience, traffic sources (search, referral, direct and social) and the distribution of the audience by region.
          </p>
          <p className="text-gray-600 mb-4">
            We do not display or use any more data, nor do we pass it on to third parties.
          </p>
         <button
  onClick={() => navigate('/publisher/DescriptionPrice')}
  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
>
  Confirm your Ownership
</button>
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
  ),
  description: (
    <div className="mt-4 p-6 ">
      <h3 className="text-lg font-semibold text-blue-600 mb-2">Verify</h3>
      <p className="text-gray-600 mb-2">
        Download the verification file and upload it to the root of your site. 
        Alternatively, create a file in the root with the following name:
      </p>
      <p className="text-gray-800 font-mono mb-2">
        5mCs72__g8PazdWlgaqbSxmV43F9SB.html
      </p>
      <p className="text-gray-600 mb-2">
        Make sure the file opens at this location:
      </p>
      <p className="text-gray-800 font-mono mb-4">
        https://pngwing.com/5mCs72.html
      </p>
      <p className="text-gray-600">
        We do not display or use any more data, nor do we pass it on to third parties.
      </p>
    </div>
  )
}
,
   {
  id: 'other-method',
  title: 'Other Method',
  icon: (
    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
      <div className="w-6 h-8 bg-yellow-600 rounded-t-full"></div>
    </div>
  ),
  description: (
    <div className="mt-4 p-6">
      <h3 className="text-lg font-semibold text-red-500 mb-2">Other Method</h3>

      <p className="text-gray-800 font-medium mb-2">Difficult to confirm?</p>
      <p className="text-gray-600 mb-2">
        I cannot confirm ownership or representation of the site.
        <br />But I’m ready to do it later with the help of a collaborator.
      </p>

      <label className="block text-gray-700 font-medium mt-4 mb-2">
        Specify the reason: <span className="text-red-500">*</span>
      </label>
      <textarea
        className="w-full border border-red-400 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        rows="4"
        placeholder="Explain why you can’t verify your ownership"
      ></textarea>
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
              <div className="flex-1 h-1 bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-gray-300 z-10 relative" />
              <div className="flex-1 h-1 bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-gray-300 z-10 relative" />
            </div>
          </div>
        </div>

        {/* Verification Methods */}
        <div className="space-y-6 mb-12">
          {verificationMethods.map((method) => (
            <div key={method.id}>
              <div
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

              {/* Agar select hua hai to description dikhao */}
              {selectedMethod === method.id && method.description && (
                <div className="ml-12 mt-4">{method.description}</div>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate('/publisher/DescriptionPrice')}
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
