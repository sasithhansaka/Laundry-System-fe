import React, { useState, useEffect } from "react";
import axios from "axios";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lms-backend-project-ft6t.onrender.com/api/configs/"
        );

        console.log("API Response:", response.data);

        // Check if the response has the correct data structure
        if (response.data && response.data.data) {
          setPackages(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-14 p-4">
      <div className="pb-10">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Packages
        </h2>
        <p>
          Choose from our available laundry packages with flexible durations and
          weights to suit your needs.
        </p>
      </div>

      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4">
        <div className="relative">
          <h2 className="font-sans">Laundry Packages Information</h2>
        </div>
      </div>

      <table className="w-full text-md text-left rtl:text-right text-gray-500">
        <thead className="text-sm text-gray-50 uppercase bg-purple-700">
          <tr>
            <th scope="col" className="p-4"></th>
            <th scope="col" className="px-6 py-3">
              Package Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price (LKR)
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Features
            </th>
            <th scope="col" className="px-6 py-3">
              Weight (kg)
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, index) => (
            <tr key={pkg._id || pkg.id || index} className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4"></td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {pkg.packageName}
              </th>
              <td className="px-6 py-4">{pkg.packagePrice ? pkg.packagePrice.toFixed(2) : "N/A"}</td>
              <td className="px-6 py-4">{pkg.packageDescription}</td>
              <td className="px-6 py-4">
                {pkg.packageFeatures && pkg.packageFeatures.join(", ")}
              </td>
              <td className="px-6 py-4">{pkg.packageWeight}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 mx-3 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-blue-600 mx-3 hover:underline"
                >
                  Disable
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 my-5"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing <span className="font-semibold text-gray-900">3</span> of{" "}
          <span className="font-semibold text-gray-900">{packages.length}</span>
        </span>
      </nav>
    </div>
  );
};

export default Packages;
