import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdEdit, MdDelete, MdPauseCircle } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";

const Websites = () => {
  const [data] = useState([
    {
      id: 1,
      website: "www.website.com",
      reviews: 20,
      stars: 5,
      status: "active",
      verified: true,
      articlePrice: 170,
      copyPrice: 170,
      sensitivePrice: 170,
      requested: 1,
      inProgress: 2,
      published: 6,
      speed: "7 Days",
      indexing: "Found",
      availability: "Yes",
      earned: 10.78,
      expected: 34.98,
    },
    {
      id: 2,
      website: "www.sample.com",
      reviews: 12,
      stars: 4,
      status: "pause",
      verified: false,
      articlePrice: 140,
      copyPrice: 120,
      sensitivePrice: 100,
      requested: 2,
      inProgress: 1,
      published: 3,
      speed: "10 Days",
      indexing: "Not Found",
      availability: "No",
      earned: 5.3,
      expected: 14.5,
    },
    // Extra dummy data for pagination demo
    {
      id: 3,
      website: "www.demo.com",
      reviews: 9,
      stars: 3,
      status: "active",
      verified: true,
      articlePrice: 100,
      copyPrice: 90,
      sensitivePrice: 85,
      requested: 1,
      inProgress: 1,
      published: 1,
      speed: "5 Days",
      indexing: "Found",
      availability: "Yes",
      earned: 8.5,
      expected: 20.1,
    },
    {
      id: 4,
      website: "www.next.com",
      reviews: 15,
      stars: 4,
      status: "active",
      verified: false,
      articlePrice: 200,
      copyPrice: 180,
      sensitivePrice: 160,
      requested: 3,
      inProgress: 1,
      published: 2,
      speed: "12 Days",
      indexing: "Not Found",
      availability: "No",
      earned: 15.2,
      expected: 25.3,
    },
  ]);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;

  // slice data for pagination
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="p-6  min-h-screen">
      {/* Table Header */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="grid grid-cols-6 bg-orange-500 text-white font-semibold p-3 rounded-lg shadow">
            <th className="text-left">Name</th>
            <th className="text-left">Format & Pricing</th>
            <th className="text-left">Orders</th>
            <th className="text-left">Quality</th>
            <th className="text-left">Finances</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>

        <tbody className="space-y-4 block">
          {currentRows.map((item) => (
            <tr
              key={item.id}
              className="grid grid-cols-6 gap-3 bg-white rounded-lg shadow-md p-4 mb-4"
            >
              {/* Name */}
              <td className="flex flex-col space-y-2">
                <h2 className="font-semibold">{item.website}</h2>
                <div className="flex items-center space-x-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600">
                    {item.reviews} Reviews
                  </span>
                </div>
                {item.verified && (
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded w-fit">
                    Verified
                  </span>
                )}
              </td>

              {/* Format & Pricing */}
              <td className="flex flex-col space-y-1 text-sm">
                <p>
                  <span className="font-medium">Article:</span>{" "}
                  <span className="text-blue-700">${item.articlePrice}</span>
                </p>
                <p>
                  <span className="font-medium">Copywriting:</span>{" "}
                  <span className="text-blue-700">${item.copyPrice}</span>
                </p>
                <p>
                  <span className="font-medium">Sensitive:</span>{" "}
                  <span className="text-blue-700">${item.sensitivePrice}</span>
                </p>
              </td>

              {/* Orders */}
              <td className="flex flex-col space-y-1 text-sm">
                <p>Requested: {item.requested}</p>
                <p>In Progress: {item.inProgress}</p>
                <p>Published: {item.published}</p>
              </td>

              {/* Quality */}
              <td className="flex flex-col space-y-1 text-sm">
                <p className="text-red-500">Speed: {item.speed}</p>
                <p
                  className={`${
                    item.indexing === "Found"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  Indexing: {item.indexing}
                </p>
                <p>Availability: {item.availability}</p>
              </td>

              {/* Finances */}
              <td className="flex flex-col space-y-1 text-sm">
                <p className="text-red-500">Earned: ${item.earned.toFixed(2)}</p>
                <p className="text-red-500">
                  Expected: ${item.expected.toFixed(2)}
                </p>
              </td>

              {/* Actions */}
              <td className="flex flex-col space-y-2">
                <button className="flex items-center space-x-2 text-sm">
                  <span className="bg-orange-500 text-white p-2 rounded">
                    <BsShieldFillCheck />
                  </span>
                  <span>Active</span>
                </button>
                <button className="flex items-center space-x-2 text-sm">
                  <span className="bg-orange-500 text-white p-2 rounded">
                    <MdPauseCircle />
                  </span>
                  <span>Pause</span>
                </button>
                <button className="flex items-center space-x-2 text-sm">
                  <span className="bg-orange-500 text-white p-2 rounded">
                    <MdEdit />
                  </span>
                  <span>Edit</span>
                </button>
                <button className="flex items-center space-x-2 text-sm">
                  <span className="bg-orange-500 text-white p-2 rounded">
                    <MdDelete />
                  </span>
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white"
          }`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Websites;
