import { useState, useEffect } from "react";

const Packages = () => {
  // State variables
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [packagesPerPage] = useState(10);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPackageId, setEditingPackageId] = useState(null);

  // Form data
  const [formData, setFormData] = useState({
    packageName: "",
    packageDescription: "",
    packagePrice: "",
    packageFeatures: "",
    packageWeight: "",
    packageChargePerKg: "",
    packageDeliveryTime: "",
  });

  // Pagination
  const totalPackages = packages.length;
  const totalPages = Math.ceil(totalPackages / packagesPerPage);
  const startIndex = (currentPage - 1) * packagesPerPage + 1;
  const endIndex = Math.min(currentPage * packagesPerPage, totalPackages);

  // Clear form
  const clearForm = () => {
    setFormData({
      packageName: "",
      packageDescription: "",
      packagePrice: "",
      packageFeatures: "",
      packageWeight: "",
      packageChargePerKg: "",
      packageDeliveryTime: "",
    });
    setIsEditing(false);
    setEditingPackageId(null);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Alert
  const showAlert = (message, type = "success") => {
    alert(message);
  };

  // Create package
  const createPackage = async () => {
    try {
      const packageData = {
        packageName: formData.packageName,
        packageDescription: formData.packageDescription,
        packagePrice: parseFloat(formData.packagePrice),
        packageFeatures: formData.packageFeatures
          .split(",")
          .map((f) => f.trim()), // convert comma-separated input to array
        packageWeight: parseFloat(formData.packageWeight),
        packageChargePerKg: parseFloat(formData.packageChargePerKg),
        packageDeliveryTime: parseInt(formData.packageDeliveryTime),
      };

      const response = await fetch(
        "https://lms-backend-project-ft6t.onrender.com/api/configs/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(packageData),
        }
      );

      const result = await response.json();

      if (response.ok && result.status === "success") {
        showAlert("Package created successfully!");
        clearForm();
        fetchPackages();
      } else {
        showAlert("Failed to create package: " + (result.message || "Error"));
      }
    } catch (error) {
      console.error(error);
      showAlert("Error creating package: " + error.message, "error");
    }
  };

  // Update package
  const updatePackage = async () => {
    if (!editingPackageId) return;
    const confirmed = window.confirm(
      `Are you sure you want to update package ${editingPackageId}?`
    );
    if (!confirmed) return;

    try {
      const packageData = {
        packageName: formData.packageName,
        packageDescription: formData.packageDescription,
        packagePrice: parseFloat(formData.packagePrice),
        packageFeatures: formData.packageFeatures
          .split(",")
          .map((f) => f.trim()),
        packageWeight: parseFloat(formData.packageWeight),
        packageChargePerKg: parseFloat(formData.packageChargePerKg),
        packageDeliveryTime: parseInt(formData.packageDeliveryTime),
      };

      const response = await fetch(
        `https://lms-backend-project-ft6t.onrender.com/api/configs/${editingPackageId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(packageData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        showAlert("Package updated successfully!");
        clearForm();
        fetchPackages();
      } else {
        showAlert("Failed to update package: " + (result.message || "Error"));
      }
    } catch (error) {
      console.error(error);
      showAlert("Error updating package: " + error.message, "error");
    }
  };

  // Delete package
  const handleDeletePackage = async (packageId) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete package ${packageId}?`
    );
    if (!confirmed) return;

    try {
      const response = await fetch(
        `https://lms-backend-project-ft6t.onrender.com/api/configs/${packageId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        showAlert("Package deleted successfully!");
        fetchPackages();
      } else {
        const result = await response.json();
        showAlert("Failed to delete package: " + (result.message || "Error"));
      }
    } catch (error) {
      console.error(error);
      showAlert("Error deleting package: " + error.message, "error");
    }
  };

  // Edit package
  const handleEditPackage = (pkg) => {
    setFormData({
      packageName: pkg.packageName || "",
      packageDescription: pkg.packageDescription || "",
      packagePrice: pkg.packagePrice?.toString() || "",
      packageFeatures: pkg.packageFeatures?.join(", ") || "",
      packageWeight: pkg.packageWeight?.toString() || "",
      packageChargePerKg: pkg.packageChargePerKg?.toString() || "",
      packageDeliveryTime: pkg.packageDeliveryTime?.toString() || "",
    });
    setIsEditing(true);
    setEditingPackageId(pkg._id);
  };

  // Submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.packageName ||
      !formData.packagePrice ||
      !formData.packageDescription
    ) {
      showAlert("Please fill in all required fields", "error");
      return;
    }
    if (isEditing) {
      updatePackage();
    } else {
      createPackage();
    }
  };

  // Fetch packages
  const fetchPackages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://lms-backend-project-ft6t.onrender.com/api/configs/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch packages");

      const result = await response.json();
      if (result.status === "success") {
        setPackages(result.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  // Paginated packages
  const getPaginatedPackages = () => {
    const startIndex = (currentPage - 1) * packagesPerPage;
    const endIndex = startIndex + packagesPerPage;
    return packages.slice(startIndex, endIndex);
  };

  return (
    <div className="relative overflow-x-auto sm:rounded-lg my-14 p-4">
      <div className="pb-10">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Packages
        </h2>
        <p>
          Manage your laundry service packages including features, pricing, and
          delivery times.
        </p>
      </div>

      <div className="flex gap-6">
        {/* Table Section */}
        <div className="w-2/3">
          <table className="w-full text-md text-left rtl:text-right text-gray-500">
            <thead className="text-sm text-gray-50 uppercase bg-purple-700">
              <tr>
                <th className="px-2 py-3">Package Name</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Features</th>
                <th className="px-6 py-3">Weight</th>
                <th className="px-6 py-3">Charge/Kg</th>
                <th className="px-6 py-3">Delivery Time (Days)</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {getPaginatedPackages().length > 0 ? (
                getPaginatedPackages().map((pkg) => (
                  <tr
                    key={pkg._id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-3 py-4 font-medium text-gray-900">
                      {pkg.packageName}
                    </td>
                    <td className="px-6 py-4">{pkg.packageDescription}</td>
                    <td className="px-6 py-4">${pkg.packagePrice}</td>
                    <td className="px-6 py-4 text-sm">
                      <ul className="list-disc ml-4">
                        {pkg.packageFeatures?.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4">{pkg.packageWeight} kg</td>
                    <td className="px-6 py-4">${pkg.packageChargePerKg}</td>
                    <td className="px-6 py-4">{pkg.packageDeliveryTime}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleEditPackage(pkg)}
                        className="font-medium text-blue-600 mx-2 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeletePackage(pkg._id)}
                        className="font-medium text-red-600 mx-2 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    {isLoading ? "Loading packages..." : "No packages found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Form Section */}
        <div className="w-1/3 bg-white">
          <form onSubmit={handleFormSubmit}>
            <label className="block text-gray-500 mb-1">Package Name *</label>
            <input
              type="text"
              name="packageName"
              className="mb-3 w-full p-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-purple-500"
              placeholder="Enter package name"
              value={formData.packageName}
              onChange={handleInputChange}
              required
            />

            <label className="block text-gray-500 mb-1">Description *</label>
            <textarea
              name="packageDescription"
              rows="3"
              className="mb-3 w-full p-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-purple-500"
              placeholder="Enter package description"
              value={formData.packageDescription}
              onChange={handleInputChange}
              required
            />

            <label className="block text-gray-500 mb-1">Price *</label>
            <input
              type="number"
              name="packagePrice"
              className="mb-3 w-full p-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-purple-500"
              placeholder="Enter price"
              value={formData.packagePrice}
              onChange={handleInputChange}
              required
            />

            <label className="block text-gray-500 mb-1">Features (comma separated)</label>
            <input
              type="text"
              name="packageFeatures"
              className="mb-3 w-full p-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-purple-500"
              placeholder="Wash & dry, Folding service"
              value={formData.packageFeatures}
              onChange={handleInputChange}
            />

            <label className="block text-gray-500 mb-1">Weight (kg)</label>
            <input
              type="number"
              name="packageWeight"
              className="mb-3 w-full p-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-purple-500"
              placeholder="10"
              value={formData.packageWeight}
              onChange={handleInputChange}
            />

            <label className="block text-gray-500 mb-1">Charge per Kg</label>
            <input
              type="number"
              name="packageChargePerKg"
              className="mb-3 w-full p-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-purple-500"
              placeholder="1.5"
              value={formData.packageChargePerKg}
              onChange={handleInputChange}
            />

            <label className="block text-gray-500 mb-1">Delivery Time (Days)</label>
            <input
              type="number"
              name="packageDeliveryTime"
              className="mb-3 w-full p-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-purple-500"
              placeholder="2"
              value={formData.packageDeliveryTime}
              onChange={handleInputChange}
            />

            <div className="w-full flex justify-end gap-6 mt-8">
              {!isEditing ? (
                <>
                  <button
                    type="submit"
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Create Package
                  </button>
                  <button
                    type="button"
                    className="py-2.5 px-5 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                    onClick={clearForm}
                  >
                    Clear
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Update Package
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 bg-white border border-gray-400 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
                    onClick={clearForm}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Packages;
