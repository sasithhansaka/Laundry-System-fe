const Orders = () => {
    return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg my-14 p-4">

<div className="pb-10">
    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Orders</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus rerum hic nesciunt error at, ipsa laboriosam culpa quasi nemo nisi maiores vero minus. Amet, non enim</p>
</div>

<div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-8">
    
        
        <div className="relative">
            <h2 className="font-sans">Order information</h2>
            <h3 className="font-sans">12 Records/ 2024-04-22</h3>
        </div>

        <div>

            <div className="flex gap-4">
                <button className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">New Order</button>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
                    <span className="sr-only">Action button</span>
                    Filter
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
            </div>

            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">Reward</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Promote</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Activate account</a>
                    </li>
                </ul>
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  ">Delete User</a>
                </div>
            </div>
        </div>

    </div>



    <table className="w-full text-md text-left rtl:text-right text-gray-500">
        <thead className="text-sm text-gray-50 uppercase bg-purple-700">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Customer
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Package
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b  hover:bg-gray-50">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "/>
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Gunadasa Abesooriya
                </th>
                <td className="px-6 py-4">
                    Pending
                </td>
                <td className="px-6 py-4">
                    Package 01
                </td>
                <td className="px-6 py-4">
                    2999.00
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 mx-3  hover:underline">Edit</a>
                    <a href="#" className="font-medium text-blue-600 mx-3 hover:underline">Delete</a>
                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Nimal Pathirage
                </th>
                <td className="px-6 py-4">
                    Completed
                </td>
                <td className="px-6 py-4">
                    Package 02
                </td>
                <td className="px-6 py-4">
                    1999.00
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 mx-3  hover:underline">Edit</a>
                <a href="#" className="font-medium text-blue-600 mx-3 hover:underline">Delete</a>
                </td>
            </tr>
            
        </tbody>
    </table>
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 my-5" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 ">1-10</span> of <span className="font-semibold text-gray-900 ">20</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Previous</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">3</a>
            </li>
            
            <li>
        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
            </li>
        </ul>
    </nav>
</div>

    );
}

export default Orders;