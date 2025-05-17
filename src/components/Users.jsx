import { useState } from 'react';

function Users() {


const userData = [
        {
            id: 1,
            salesCount: 24,
            date: '2024-08-16',
            totalIncome: '2999.00',
            totalWeight: '100kg',
            branch: 'Colombo',
            employee: 'Nimal'
        },
        {
            id: 2,
            salesCount: 18,
            date: '2024-08-16',
            totalIncome: '1999.00',
            totalWeight: '75kg',
            branch: 'Kandy',
            employee: 'Kamal Gunarathne'
        },
        {
            id: 3,
            salesCount: 30,
            date: '2024-08-16',
            totalIncome: '3499.00',
            totalWeight: '120kg',
            branch: 'Galle',
            employee: 'Sunil Perera'
        },
        {
            id: 4,
            salesCount: 12,
            date: '2024-08-16',
            totalIncome: '1599.00',
            totalWeight: '50kg',
            branch: 'Kandy',
            employee: 'Sanduni Silva'
        },
        {
            id: 5,
            salesCount: 22,
            date: '2024-08-16',
            totalIncome: '2799.00',
            totalWeight: '90kg',
            branch: 'Galle',
            employee: 'Ruwan Wickramasinghe'
        },
        {
            id: 6,
            salesCount: 28,
            date: '2024-08-16',
            totalIncome: '3199.00',
            totalWeight: '110kg',
            branch: 'Colombo',
            employee: 'Amal Jayawardena'
        },
        {
            id: 7,
            salesCount: 16,
            date: '2024-08-16',
            totalIncome: '1899.00',
            totalWeight: '65kg',
            branch: 'Colombo',
            employee: 'Tharindu Bandara'
        },
        {
            id: 8,
            salesCount: 20,
            date: '2024-08-16',
            totalIncome: '2499.00',
            totalWeight: '80kg',
            branch: 'Kandy',
            employee: 'Roshan Fernando'
        },
        {
            id: 9,
            salesCount: 14,
            date: '2024-08-16',
            totalIncome: '1699.00',
            totalWeight: '55kg',
            branch: 'Galle',
            employee: 'Nirosha Wijesinghe'
        },
        {
            id: 10,
            salesCount: 25,
            date: '2024-08-16',
            totalIncome: '2899.00',
            totalWeight: '95kg',
            branch: 'Colombo',
            employee: 'Chathura Maduranga'
        },
        {
            id: 11,
            salesCount: 27,
            date: '2024-08-16',
            totalIncome: '3099.00',
            totalWeight: '105kg',
            branch: 'Galle',
            employee: 'Mahesh Kumara'
        },
        {
            id: 12,
            salesCount: 13,
            date: '2024-08-16',
            totalIncome: '1499.00',
            totalWeight: '45kg',
            branch: 'Kandy',
            employee: 'Shanika Perera'
        }
        
    ];

    const [branchFilter, setBranchFilter] = useState('All');

    const handleBranchFilterChange = (e) => {
        setBranchFilter(e.target.value);
    };

    const filteredSalesData = branchFilter === 'All' ? userData : userData.filter(sale => sale.branch === branchFilter);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-14 p-4">
            <div className="pb-10">
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Users</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus rerum hic nesciunt error at, ipsa laboriosam culpa quasi nemo nisi maiores vero minus. Amet, non enim</p>
            </div>

            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-8">
                <div className="relative">
                    <h2 className="font-sans">User Information</h2>
                    <h3 className="font-sans">{`${filteredSalesData.length} Records`}</h3>
                </div>

                <div className="flex gap-4">
                    <button className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5" type="button">New Sale</button>
                    <select value={branchFilter} onChange={handleBranchFilterChange} className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5">
                        <option value="All">All Branches</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Galle">Galle</option>
                    </select>
                </div>
            </div>

            <table className="w-full text-md text-left rtl:text-right text-gray-500">
                <thead className="text-sm text-gray-50 uppercase bg-purple-700">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">#No</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Role</th>
                        <th scope="col" className="px-6 py-3">Contact</th>
                        <th scope="col" className="px-6 py-3">Branch</th>
                        <th scope="col" className="px-6 py-3">Employee</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSalesData.map(sale => (
                        <tr key={sale.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id={`checkbox-table-search-${sale.id}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                                    <label htmlFor={`checkbox-table-search-${sale.id}`} className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{sale.salesCount}</th>
                            <td className="px-6 py-4">{sale.date}</td>
                            <td className="px-6 py-4">{sale.totalIncome}</td>
                            <td className="px-6 py-4">{sale.totalWeight}</td>
                            <td className="px-6 py-4">{sale.branch}</td>
                            <td className="px-6 py-4">{sale.employee}</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 mx-3 hover:underline">Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 my-5" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">20</span>
                </span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default Users