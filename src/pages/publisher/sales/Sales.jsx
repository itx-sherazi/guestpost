import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
// import axios from 'axios'; // Uncomment when API is ready

const Sales = () => {
  const [salesData, setSalesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Order Status');

  // Dummy data - replace with API call later
  const dummyData = [
    {
      id: 1,
      site: 'www.website.com',
      orderDate: '25 November 2024',
      orderId: '310987',
      client: 'Chris Wilson',
      reviews: 43,
      articleUrl: 'www.weblink.com/',
      status: 'New Request',
      price: 150.67,
      bonus: 20
    },
    {
      id: 2,
      site: 'www.website.com',
      orderDate: '25 November 2024',
      orderId: '310987',
      client: 'Chris Wilson',
      reviews: 43,
      articleUrl: 'www.weblink.com/',
      status: 'New Request',
      price: 150.67,
      bonus: 20
    },
    {
      id: 3,
      site: 'www.website.com',
      orderDate: '25 November 2024',
      orderId: '310987',
      client: 'Chris Wilson',
      reviews: 43,
      articleUrl: 'www.weblink.com/',
      status: 'New Request',
      price: 150.67,
      bonus: 20
    },
    {
      id: 4,
      site: 'www.website.com',
      orderDate: '25 November 2024',
      orderId: '310987',
      client: 'Chris Wilson',
      reviews: 43,
      articleUrl: 'www.weblink.com/',
      status: 'New Request',
      price: 150.67,
      bonus: 20
    },
    {
      id: 5,
      site: 'www.website.com',
      orderDate: '25 November 2024',
      orderId: '310987',
      client: 'Chris Wilson',
      reviews: 43,
      articleUrl: 'www.weblink.com/',
      status: 'Completed',
      price: 150.67,
      bonus: 20
    },
    {
      id: 6,
      site: 'www.website.com',
      orderDate: '25 November 2024',
      orderId: '310987',
      client: 'Chris Wilson',
      reviews: 43,
      articleUrl: 'www.weblink.com/',
      status: 'New Request',
      price: 150.67,
      bonus: 20
    },
    {
      id: 7,
      site: 'www.website.com',
      orderDate: '25 November 2024',
      orderId: '310987',
      client: 'Chris Wilson',
      reviews: 43,
      articleUrl: 'www.weblink.com/',
      status: 'New Request',
      price: 150.67,
      bonus: 20
    }
  ];

  useEffect(() => {
    // Future API call - currently using dummy data
    fetchSalesData();
  }, []);

  const fetchSalesData = async () => {
    try {
      // Uncomment when API is ready
      // const response = await axios.get('/api/sales');
      // setSalesData(response.data);
      
      // Using dummy data for now
      setSalesData(dummyData);
    } catch (error) {
      console.error('Error fetching sales data:', error);
      // Fallback to dummy data
      setSalesData(dummyData);
    }
  };

  const handleSubmitLink = async (id) => {
    try {
      // Uncomment when API is ready
      // await axios.post(`/api/sales/${id}/submit`);
      console.log(`Submitting link for order ${id}`);
      // Refresh data after submission
      // fetchSalesData();
    } catch (error) {
      console.error('Error submitting link:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      // Uncomment when API is ready
      // await axios.post(`/api/sales/${id}/reject`);
      console.log(`Rejecting order ${id}`);
      // Refresh data after rejection
      // fetchSalesData();
    } catch (error) {
      console.error('Error rejecting order:', error);
    }
  };

  const handleSubmitFeedback = async (id) => {
    try {
      // Uncomment when API is ready
      // await axios.post(`/api/sales/${id}/feedback`);
      console.log(`Submitting feedback for order ${id}`);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const getActionButton = (item) => {
    if (item.status === 'Completed') {
      return (
        <button
          onClick={() => handleSubmitFeedback(item.id)}
          className="px-4 py-1.5 text-sm border border-[#df6e52] text-red-500 rounded-md hover:bg-red-50 transition-colors font-medium"
        >
          Submit Feedback
        </button>
      );
    }
    return (
      <button
        onClick={() => handleSubmitLink(item.id)}
        className="px-4 py-1.5 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
      >
        Submit Link
      </button>
    );
  };

  const filteredData = salesData.filter(item =>
    item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.orderId.includes(searchTerm) ||
    item.site.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white border=[#df6e52] ">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-10 py-2.5 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
          </div>
          
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            >
              <option>Order Status</option>
              <option>New Request</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Under Review</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-orange-500 uppercase tracking-wider">
              <div className="col-span-2">YOUR SITE</div>
              <div className="col-span-2">ORDER DATE/ID</div>
              <div className="col-span-1">TASKS</div>
              <div className="col-span-2">CLIENT</div>
              <div className="col-span-2">ARTICLE URL</div>
              <div className="col-span-1">STATUS</div>
              <div className="col-span-1">PRICE</div>
              <div className="col-span-1"></div>
            </div>
          </div>

          {/* Table Rows */}
          {filteredData.map((item, index) => (
            <div key={item.id} className={`border-b border-gray-100 px-6 py-4 hover:bg-gray-25 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Site */}
                <div className="col-span-2 flex items-center">
                  <div className="w-8 h-6 bg-red-400 rounded-sm flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-3 h-2 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-sm text-gray-900 truncate">{item.site}</span>
                </div>

                {/* Order Date/ID */}
                <div className="col-span-2">
                  <div className="text-sm text-gray-900">{item.orderDate}</div>
                  <div className="text-sm text-gray-500">ID: {item.orderId}</div>
                </div>

                {/* Tasks */}
                <div className="col-span-1">
                  <button className="text-sm text-blue-600 hover:text-blue-800 underline">
                    View Details
                  </button>
                </div>

                {/* Client */}
                <div className="col-span-2">
                  <div className="text-sm text-gray-900 font-medium">{item.client}</div>
                  <div className="text-sm text-gray-500">{item.reviews} Reviews</div>
                </div>

                {/* Article URL */}
                <div className="col-span-2">
                  <span className="text-sm text-gray-900 truncate block">{item.articleUrl}</span>
                </div>

                {/* Status */}
                <div className="col-span-1">
                  <span className="text-sm font-medium text-gray-900">{item.status}</span>
                </div>

                {/* Price */}
                <div className="col-span-1">
                  <div className="text-sm text-gray-900 font-semibold">${item.price}</div>
                  <div className="text-sm text-green-600">+ ${item.bonus}</div>
                </div>

                {/* Actions */}
                <div className="col-span-1 flex flex-col space-y-2">
                  {getActionButton(item)}
                  <button
                    onClick={() => handleReject(item.id)}
                    className="px-4 py-1.5 text-sm border border-gray-300 text-gray-600 rounded-md hover:bg-gray-50 transition-colors font-medium"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No sales data found
          </div>
        )}
      </div>
    </div>
  );
};

export default Sales;