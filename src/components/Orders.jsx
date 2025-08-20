import {useState, useEffect} from 'react';

const Orders = () => {
    // State variables
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10);
    const [isEditing, setIsEditing] = useState(false);
    const [editingOrderId, setEditingOrderId] = useState(null);

    // Form data state
    const [formData, setFormData] = useState({
        orderTotal: '',
        orderType: '',
        paymentStatus: '',
        paymentMethod: '',
        customerName: '',
        customerNumber: '',
        customerAddress: '',
        handOverDate: '',
        weight: ''
    });

    // Calculate pagination values
    const totalOrders = orders.length;
    const totalPages = Math.ceil(totalOrders / ordersPerPage);
    const startIndex = (currentPage - 1) * ordersPerPage + 1;
    const endIndex = Math.min(currentPage * ordersPerPage, totalOrders);

    // Clear form function
    const clearForm = () => {
        setFormData({
            orderTotal: '',
            orderType: '',
            paymentStatus: '',
            paymentMethod: '',
            customerName: '',
            customerNumber: '',
            customerAddress: '',
            handOverDate: '',
            weight: ''
        });
        setIsEditing(false);
        setEditingOrderId(null);
    };

    // Handle input changes
    const handleAddUserInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Show alert function
    const showAlert = (message, type = 'success') => {
        alert(message); // You can replace this with a better toast notification library
    };

    // Create order function
    const createOrder = async () => {
        try {
            const orderData = {
                orderTotal: parseFloat(formData.orderTotal),
                paymentStatus: formData.paymentStatus,
                paymentMethod: formData.paymentMethod,
                customerName: formData.customerName,
                customerNumber: parseInt(formData.customerNumber),
                orderType: formData.orderType,
                customerAddress: formData.customerAddress,
                handOverDate: new Date(formData.handOverDate).toISOString(),
                weight: formData.weight
            };

            const response = await fetch('https://lms-backend-project-ft6t.onrender.com/api/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            const result = await response.json();

            if (response.ok && result.status === 'success') {
                showAlert('Order created successfully!', 'success');
                clearForm();
                fetchOrders(); // Refresh the table
            } else {
                showAlert('Failed to create order: ' + (result.message || 'Unknown error'), 'error');
            }
        } catch (error) {
            console.error('Error creating order:', error);
            showAlert('Error creating order: ' + error.message, 'error');
        }
    };

    // Update order function
    const updateOrder = async () => {
        if (!editingOrderId) return;

        // Show confirmation alert
        const confirmed = window.confirm(`Are you sure you want to update order ${editingOrderId}?`);
        if (!confirmed) return;

        try {
            const orderData = {
                orderTotal: parseFloat(formData.orderTotal),
                paymentStatus: formData.paymentStatus,
                paymentMethod: formData.paymentMethod,
                customerName: formData.customerName,
                customerNumber: parseInt(formData.customerNumber),
                orderType: formData.orderType,
                customerAddress: formData.customerAddress,
                handOverDate: new Date(formData.handOverDate).toISOString(),
                weight: formData.weight
            };

            const response = await fetch(`https://lms-backend-project-ft6t.onrender.com/api/orders/${editingOrderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            const result = await response.json();

            if (response.ok) {
                showAlert('Order updated successfully!', 'success');
                clearForm();
                fetchOrders(); // Refresh the table
            } else {
                showAlert('Failed to update order: ' + (result.message || 'Unknown error'), 'error');
            }
        } catch (error) {
            console.error('Error updating order:', error);
            showAlert('Error updating order: ' + error.message, 'error');
        }
    };

    // Fetch orders from API
    const fetchOrders = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://lms-backend-project-ft6t.onrender.com/api/orders/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }

            const result = await response.json();
            if (result.status === 'success') {
                setOrders(result.data);
            } else {
                console.error('Failed to fetch orders:', result.message);
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Format date function
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
    };

    // Handle edit order
    const handleEditOrder = (order) => {
        // Populate form with order data
        setFormData({
            orderTotal: order.orderTotal?.toString() || '',
            orderType: order.orderType || '',
            paymentStatus: order.paymentStatus || '',
            paymentMethod: order.paymentMethod || '',
            customerName: order.customerName || '',
            customerNumber: order.customerNumber?.toString() || '',
            customerAddress: order.customerAddress || '',
            handOverDate: order.handOverDate ? formatDate(order.handOverDate) : '',
            weight: order.weight?.toString() || ''
        });

        setIsEditing(true);
        setEditingOrderId(order._id);
    };

    // Handle delete order
    const handleDeleteOrder = async (orderId) => {
        // Show confirmation alert with order ID
        const confirmed = window.confirm(`Are you sure you want to delete order ${orderId}?`);
        if (!confirmed) return;

        try {
            const response = await fetch(`https://lms-backend-project-ft6t.onrender.com/api/orders/${orderId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                showAlert('Order deleted successfully!', 'success');
                fetchOrders(); // Refresh the table
            } else {
                const result = await response.json();
                showAlert('Failed to delete order: ' + (result.message || 'Unknown error'), 'error');
            }
        } catch (error) {
            console.error('Error deleting order:', error);
            showAlert('Error deleting order: ' + error.message, 'error');
        }
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Basic form validation
        if (!formData.orderTotal || !formData.customerName || !formData.customerNumber ||
            !formData.paymentStatus || !formData.paymentMethod || !formData.orderType) {
            showAlert('Please fill in all required fields', 'error');
            return;
        }

        if (isEditing) {
            updateOrder();
        } else {
            createOrder();
        }
    };

    // Handle cancel edit
    const handleCancelEdit = () => {
        clearForm();
    };

    // Pagination functions
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Use effect to fetch orders on component mount
    useEffect(() => {
        fetchOrders();
    }, []);

    // Get paginated orders
    const getPaginatedOrders = () => {
        const startIndex = (currentPage - 1) * ordersPerPage;
        const endIndex = startIndex + ordersPerPage;
        return orders.slice(startIndex, endIndex);
    };

    return (
        <>
            <div className="relative overflow-x-auto sm:rounded-lg my-14 p-4">
                <div className="pb-10">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Orders</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus rerum hic nesciunt
                        error at, ipsa laboriosam culpa quasi nemo nisi maiores vero minus. Amet, non enim</p>
                </div>

                <div className='flex gap-6'>
                    {/* left section */}
                    <div className='w-2/3'>
                        <table className="w-full text-md text-left rtl:text-right text-gray-500">
                            <thead className="text-sm text-gray-50 uppercase bg-purple-700">
                            <tr>
                                <th scope="col" className="px-2 py-3 w-100">Order ID</th>
                                <th scope="col" className="px-6 py-3">Customer</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Package</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-4 py-3 w-32">Payment Method</th>
                                <th scope="col" className="px-4 py-3 w-40">Customer Address</th>
                                <th scope="col" className="px-6 py-3">Order Date</th>
                                <th scope="col" className="px-6 py-3">Hand Over Date</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {getPaginatedOrders().length > 0 ? (
                                getPaginatedOrders().map((order, index) => (
                                    <tr key={order._id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-3 py-4 text-sm font-medium text-gray-900 w-20">
                                            <div className="break-words">
                                                {order._id || 'N/A'}
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {order.customerName}
                                        </th>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                order.paymentStatus === 'Pending'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : order.paymentStatus === 'Completed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-gray-100 text-gray-800'
                                            }`}>
                                                {order.paymentStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {order.orderType || 'Standard Package'}
                                        </td>
                                        <td className="px-6 py-4">
                                            ${order.orderTotal ? order.orderTotal.toFixed(2) : '0.00'}
                                        </td>
                                        <td className="px-4 py-4 w-32">
                                            <div className="break-words text-sm">
                                                {order.paymentMethod}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 w-40">
                                            <div className="break-words text-sm leading-relaxed">
                                                {order.customerAddress}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {formatDate(order.orderDate)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {formatDate(order.handOverDate)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleEditOrder(order)}
                                                className="font-medium text-blue-600 mx-2 hover:underline"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteOrder(order._id)}
                                                className="font-medium text-red-600 mx-2 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="px-6 py-4 text-center text-gray-500">
                                        {isLoading ? 'Loading orders...' : 'No orders found'}
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>

                        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 my-5"
                             aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                                Showing <span className="font-semibold text-gray-900">{startIndex}-{endIndex}</span> of <span className="font-semibold text-gray-900">{totalOrders}</span>
                            </span>
                            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <button
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <li key={page}>
                                        <button
                                            onClick={() => handlePageChange(page)}
                                            className={`flex items-center justify-center px-3 h-8 leading-tight ${
                                                currentPage === page
                                                    ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                                                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* right section(form) */}
                    <div className="w-1/3 bg-white">
                        <form onSubmit={handleFormSubmit}>
                            <label className="block text-gray-500 mb-1">Order Total *</label>
                            <input
                                type="number"
                                name="orderTotal"
                                className="mb-3 w-full p-2 rounded-md bg-gray-50 border-gray-50 border border-gray-200 p-3 text-gray-900  focus:border-1 focus:border-purple-500"
                                placeholder="Enter order total"
                                value={formData.orderTotal}
                                onChange={handleAddUserInputChange}
                                required
                            />

                            <span className='flex flex-row gap-2'>
                                <span className='w-1/2'>
                                    <label className="block text-gray-500 mb-1">Order Type *</label>
                                    <select
                                        id="orderType"
                                        name="orderType"
                                        value={formData.orderType}
                                        onChange={handleAddUserInputChange}
                                        className="mb-3 w-full p-2 text-gray-900 rounded-md bg-gray-50 border-gray-50 border border-gray-200 p-3 focus:border-1 focus:border-purple-500"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Order Type
                                        </option>
                                        <option value="Package-mini">Package-mini</option>
                                        <option value="Package-large">Package-large</option>
                                    </select>
                                </span>
                                <span className='w-1/2'>
                                    <label className="block text-gray-500 mb-1">Payment Status *</label>
                                    <select
                                        id="paymentStatus"
                                        name="paymentStatus"
                                        value={formData.paymentStatus}
                                        onChange={handleAddUserInputChange}
                                        className="mb-3 w-full p-2 text-gray-900 rounded-md bg-gray-50 border-gray-50 border border-gray-200 p-3 focus:border-1 focus:border-purple-500"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Payment Status
                                        </option>
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </span>
                            </span>

                            <label className="block text-gray-500 mb-1">Payment Method *</label>
                            <select
                                id="paymentMethod"
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleAddUserInputChange}
                                className="mb-3 w-full p-2 text-gray-900 rounded-md bg-gray-50 border-gray-50 border border-gray-200 p-3 focus:border-1 focus:border-purple-500"
                                required
                            >
                                <option value="" disabled>
                                    Select Payment Method
                                </option>
                                <option value="Cash">Cash</option>
                                <option value="Online">Online</option>
                            </select>

                            <label className="block text-gray-500 mb-1">Customer Name *</label>
                            <input
                                type="text"
                                name="customerName"
                                className="mb-3 w-full p-2 rounded-md bg-gray-50 border-gray-50 border border-gray-200 p-3 text-gray-900  focus:border-1 focus:border-purple-500"
                                placeholder="Enter customer name"
                                value={formData.customerName}
                                onChange={handleAddUserInputChange}
                                required
                            />

                            <label className="block text-gray-500 mb-1">Customer Number *</label>
                            <input
                                type="text"
                                name="customerNumber"
                                className="mb-3 w-full p-2 rounded-md bg-gray-50 border-gray-50 border border-gray-200 p-3 text-gray-900  focus:border-1 focus:border-purple-500"
                                placeholder="Enter customer number (numbers only)"
                                value={formData.customerNumber}
                                onChange={handleAddUserInputChange}
                                pattern="[0-9]*"
                                onInput={(e) => {
                                    // Only allow numbers
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                }}
                                required
                            />

                            <label className="block text-gray-500 mb-1">Customer Address</label>
                            <input
                                type="text"
                                name="customerAddress"
                                className="mb-3 w-full p-2 rounded-md bg-gray-50 border-gray-50 border border-gray-200 p-3 text-gray-900  focus:border-1 focus:border-purple-500"
                                placeholder="Enter customer address"
                                value={formData.customerAddress}
                                onChange={handleAddUserInputChange}
                            />

                            <span className='flex flex-row gap-2'>
                                <span className='w-1/2'>
                                    <label className="block text-gray-500 mb-1">Hand Over Date</label>
                                    <input
                                        type="date"
                                        name="handOverDate"
                                        className="mb-3 w-full p-2 rounded-md bg-gray-50 border-gray-50 border border-gray-200 p-3 text-gray-900  focus:border-1 focus:border-purple-500"
                                        value={formData.handOverDate}
                                        onChange={handleAddUserInputChange}
                                        min={new Date().toISOString().split('T')[0]} // Ensures future date
                                    />
                                </span>
                                <span className='w-1/2'>
                                    <label className="block text-gray-500 mb-1">Weight</label>
                                    <input
                                        type="number"
                                        name="weight"
                                        className="mb-3 w-full p-2 rounded-md bg-gray-50 border-gray-50 border border-gray-200 p-3 text-gray-900  focus:border-1 focus:border-purple-500"
                                        placeholder="Enter weight"
                                        value={formData.weight}
                                        onChange={handleAddUserInputChange}
                                    />
                                </span>
                            </span>

                            <div className='w-full flex justify-end gap-6 mt-8'>
                                {!isEditing ? (
                                    <>
                                        <button
                                            type="submit"
                                            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                                        >
                                            Create Order
                                        </button>
                                        <button
                                            type="button"
                                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                            onClick={clearForm}
                                        >
                                            Clear
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            type="submit"
                                            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                                        >
                                            Update Order
                                        </button>
                                        <button
                                            type="button"
                                            className="text-gray-500 bg-white border border-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                            onClick={handleCancelEdit}
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
        </>
    );
}

export default Orders;