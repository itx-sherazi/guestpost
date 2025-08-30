import React from 'react';

const wallet = () => {
  const steps = [
    'Add your Website',
    'Confirm your Ownership',
    'Description and price',
    'Earn'
  ];

  const transactions = [
    { date: '12/10/24', concept: 'PayPal', amount: '$100', credit: '$100', status: 'Completed', statusColor: 'green' },
    { date: '12/10/24', concept: 'PayPal', amount: '$100', credit: '$100', status: 'Pending', statusColor: 'yellow' },
    { date: '12/10/24', concept: 'PayPal', amount: '$100', credit: '$100', status: 'Cancelled', statusColor: 'red' },
    { date: '12/10/24', concept: 'PayPal', amount: '$100', credit: '$100', status: 'Completed', statusColor: 'green' },
    { date: '12/10/24', concept: 'PayPal', amount: '$100', credit: '$100', status: 'Pending', statusColor: 'yellow' },
    { date: '12/10/24', concept: 'PayPal', amount: '$100', credit: '$100', status: 'Cancelled', statusColor: 'red' },
    { date: '12/10/24', concept: 'PayPal', amount: '$100', credit: '$100', status: 'Completed', statusColor: 'green' },
    { date: '12/10/24', concept: 'PayPal', amount: '$100', credit: '$100', status: 'Pending', statusColor: 'yellow' },
    { date: '12/10/24', concept: 'PayPal', amount: '$100', credit: '$100', status: 'Cancelled', statusColor: 'red' }
  ];

  const getStatusBadge = (status, color) => {
    const colorClasses = {
      green: 'bg-green-100 text-green-700 border border-green-200',
      yellow: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
      red: 'bg-red-100 text-red-700 border border-red-200'
    };

    const dotColors = {
      green: 'bg-green-400',
      yellow: 'bg-yellow-400',
      red: 'bg-red-400'
    };

    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${colorClasses[color]}`}>
        <span className={`w-2 h-2 rounded-full ${dotColors[color]}`}></span>
        {status}
      </span>
    );
  };

  const BillIcon = () => (
    <div className="w-8 h-8 bg-gray-100 border border-gray-300 rounded flex items-center justify-center">
      <div className="text-xs text-gray-600">📄</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
      {/* Centered container */}
      <div className="w-full max-w-7xl">
        
        {/* Pending Clearance Cards */}
        <div className="flex gap-4 mb-8 w-full">
          {[1, 2, 3].map((card) => (
            <div key={card} className="flex-1 bg-white border-2 border-orange-300 rounded-lg p-4 text-center">
              <div className="text-blue-600 text-sm font-medium mb-4">
                Pending Clearance
              </div>
              <div className="border-b border-gray-200 mb-4"></div>
              <div className="text-orange-400 text-2xl font-bold">
                $116.56
              </div>
            </div>
          ))}
        </div>

        {/* Credit Movements Table */}
        <div className="bg-white border-2 border-orange-300 rounded-lg overflow-hidden w-full">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-medium text-orange-400">
              Credit Movements
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-orange-400">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-orange-400">Concept</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-orange-400">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-orange-400">Credit</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-orange-400">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-orange-400">Bill</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.concept}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.credit}</td>
                    <td className="px-6 py-4">
                      {getStatusBadge(transaction.status, transaction.statusColor)}
                    </td>
                    <td className="px-6 py-4">
                      <BillIcon />
                    </td>
                  </tr>
                ))}
                <tr className="border-b-2 border-orange-300 bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-blue-600" colSpan="2">Total Amount</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-700">$820</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-700">$300</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wallet;
