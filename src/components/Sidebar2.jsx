import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { ChevronRight } from 'lucide-react';

const Sidebar2 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { to: '/dashboard/home', label: 'Dashboard' },
        { to: '/dashboard/faq', label: 'FAQ Service' },
        { to: '/dashboard/orders', label: 'Orders' },
        { to: '/dashboard/packages', label: 'Packages' },
        { to: '/dashboard/reports', label: 'Reports' },
        { to: '/dashboard/sales', label: 'Sales' },
        { to: '/dashboard/settings', label: 'Settings' },
        { to: '/dashboard/users', label: 'Users' },
    ];

    const handleLogout = () => {
        navigate('/signin');
    };

    return (
        <>
            {/* Toggle button for smaller screens */}
            <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar"
                aria-controls="cta-button-sidebar" type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <aside id="cta-button-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#70008C] flex flex-col justify-between">

                    <div>
                        <div className="sidebar-header text-white mb-5 p-4">
                            <h2 className="text-2xl font-bold">LMS</h2>
                            <p className="text-sm">Laundry Management System</p>
                            <hr className="custom-divider my-4" />
                        </div>

                        <ul className="space-y-2 font-medium text-white">
                            {navLinks.map(({ to, label }) => {
                                const isActive = location.pathname === to;
                                return (
                                    <li key={to}>
                                        <Link
                                            to={to}
                                            className={`flex justify-between items-center px-4 py-2 rounded transition-colors duration-200 
                                                ${isActive ? 'bg-purple-700' : 'hover:bg-purple-700'}`}
                                        >
                                            <span>{label}</span>
                                            <ChevronRight className={`w-4 h-4 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Logout Button */}
                    <div className="p-4">
                        <button
                            onClick={handleLogout}
                            className="w-full text-white bg-red-600 hover:bg-red-700 font-medium rounded px-4 py-2 text-center transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar2;
