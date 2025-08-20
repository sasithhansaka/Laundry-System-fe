import axios from "axios";
import React, { useState, useEffect } from "react";

const Sales = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(null); // New state to hold the filtered data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lms-backend-project-ft6t.onrender.com/api/orders/"
        );

        console.log("API Response:", response.data);

        setData(response.data.data); // Accessing the 'data' array from the API response

        // Filter for orders with status 'Pending'
        const completeData = response.data.data.filter(
          (item) => item.orderStatus === "Pending"
        );

        setFilteredData(completeData);

      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-14 p-4">
      <div className="pb-10">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Sales
        </h2>
        <p>
          Discover the perfect solution to elevate your experience crafted with
          quality, innovation, and attention to detail. Our product delivers
          unmatched performance and style, ensuring you get the best value for
          your investment. Dont settle for less choose excellence today
        </p>
      </div>

      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap  md:space-y-0 py-4 ">
        <div className="relative">
          <h2 className="font-sans">Sales Information</h2>
        </div>
      </div>

      <table className="w-full text-md text-left rtl:text-right text-gray-500">
        <thead className="text-sm text-gray-50 uppercase bg-purple-700">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total Income
            </th>
            <th scope="col" className="px-6 py-3">
              Total Weight
            </th>
            <th scope="col" className="px-6 py-3">
              Employee
            </th>
            <th scope="col" className="px-6 py-3">
              Order Date
            </th>
            <th scope="col" className="px-6 py-3">
              Complete Date
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Action
            </th> */}
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((sale) => (
            <tr key={sale.id} className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${sale.id}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`checkbox-table-search-${sale.id}`}
                    className="sr-only"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">{sale.customerName}</td>
              <td className="px-6 py-4">{sale.orderTotal}</td>
              <td className="px-6 py-4">{sale.weight}</td>
              <td className="px-6 py-4">{sale.customerNumber}</td>
              <td className="px-6 py-4">{new Date(sale.orderDate).toLocaleDateString()}</td>
              <td className="px-6 py-4">{new Date(sale.handOverDate).toLocaleDateString()}</td>
              <td className="px-6 py-4">
                {/* <a
                  href="#"
                  className="font-medium text-blue-600 mx-3 hover:underline"
                >
                  Delete
                </a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 my-5"
        aria-label="Table navigation"
      >
        <h3 className="font-sans">{`${filteredData?.length} Records`}</h3>
      </nav>
    </div>
  );
};

export default Sales;
