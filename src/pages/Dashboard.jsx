import {useState} from 'react';
import './Dashboard.css';
import Sidebar from '../components/Sidebar';
import Sidebar2 from '../components/Sidebar2';
import DashboardContent from "../components/DashboardContent.jsx";
import FaqService from "../components/FaqService"
import Orders from "../components/Orders.jsx";
import Packages from "../components/Packages.jsx";
import Reports  from "../components/Reports.jsx";
import Sales from "../components/Sales.jsx";
import Settings from "../components/Settings.jsx";
import Users from '../components/Users.jsx';

const Dashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState('DashboardContent');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'DashboardContent':
                return <DashboardContent />;
            case 'FaqService':
                return <FaqService />;
            case 'Orders':
                return <Orders />;
            case 'Packages':
                return <Packages />;
            case 'Reports':
                return <Reports />;
            case 'Sales':
                return <Sales />;
            case 'Settings':
                return <Settings />;
            case 'Users':
                return <Users />;
            default:
                return <DashboardContent />;
        }
    };
    return (
        <div>
            {/*<Sidebar setSelectedComponent={setSelectedComponent} />*/}
            <Sidebar2 setSelectedComponent={setSelectedComponent} />
            <div className="dashboard">
                <div className="dashboard-header">
                    <div className="searchbar">
                    <input type="text" placeholder="Search here……"/>
                    </div>
                    <div className="profile-picture-div">
                    <div className="profile-picture"></div>
                    </div>
                </div>
                <hr className="dashboard-divider"/>
                {/*Changing section*/}
                {renderComponent()}
            </div>
        </div>
    );
};

export default Dashboard;
