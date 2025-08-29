import React from "react";

const salesData = [
  {
    site: "www.website.com",
    date: "25 November 2024",
    id: "310987",
    client: "Chris Wilson",
    reviews: "43 Reviews",
    articleUrl: "www.weblink.com/",
    status: "New Request",
    price: "$150.67 + $20",
    actions: "Submit Link",
  },
  {
    site: "www.website.com",
    date: "25 November 2024",
    id: "310987",
    client: "Chris Wilson",
    reviews: "43 Reviews",
    articleUrl: "www.weblink.com/",
    status: "New Request",
    price: "$150.67 + $20",
    actions: "Submit Feedback",
  },
];

const Sales = () => {
  return (
    <div className="bg-[#f7f6fb] min-h-screen p-6 flex justify-center">
      <div className="bg-white border rounded-xl w-full max-w-6xl shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-red-500 border-b">
              <th className="p-3">YOUR SITE</th>
              <th className="p-3">ORDER DATE/ID</th>
              <th className="p-3">TASKS</th>
              <th className="p-3">CLIENT</th>
              <th className="p-3">ARTICLE URL</th>
              <th className="p-3">STATUS</th>
              <th className="p-3">PRICE</th>
              <th className="p-3 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((row, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center gap-2">
                  <span className="text-red-500">💬</span>
                  {row.site}
                </td>
                <td className="p-3">
                  {row.date}
                  <br />
                  <span className="text-sm text-gray-500">ID: {row.id}</span>
                </td>
                <td className="p-3">
                  <a href="#" className="text-blue-500 underline">
                    View Details
                  </a>
                </td>
                <td className="p-3">
                  {row.client}
                  <br />
                  <span className="text-sm text-gray-500">{row.reviews}</span>
                </td>
                <td className="p-3">
                  <a href="#" className="text-blue-500 underline">
                    {row.articleUrl}
                  </a>
                </td>
                <td className="p-3">{row.status}</td>
                <td className="p-3 font-semibold">{row.price}</td>
                <td className="p-3 flex gap-2">
                  {row.actions === "Submit Feedback" ? (
                    <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
                      Submit Feedback
                    </button>
                  ) : (
                    <>
                      <button className="bg-indigo-600 text-white px-4 py-1 rounded-md">
                        Submit Link
                      </button>
                      <button className="border border-red-500 text-red-500 px-4 py-1 rounded-md">
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
