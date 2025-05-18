import './Dashboard.css';
import Sidebar2 from '../components/Sidebar2';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Sidebar2 />
            <div className="dashboard">
                <div className="dashboard-header">
                    <input
                        type="text"
                        placeholder="Search here……"
                        style={{
                            borderRadius: '50px',
                            outline: 'none',             // Remove default outline
                            boxShadow: 'none',           // Remove box-shadow (blue glow) on focus
                            border: '2px solid #70008C', // Example purple border
                            fontSize: '16px',
                            width: '80%',
                            padding: '12px 16px',
                        }}
                        onFocus={e => {
                            e.target.style.outline = 'none';
                            e.target.style.boxShadow = 'none';
                        }}
                        onBlur={e => {
                            e.target.style.outline = 'none';
                            e.target.style.boxShadow = 'none';
                        }}
                    />


                    {/* <div className="profile-picture-div">
                        <div className="profile-picture"></div>
                    </div> */}
                </div>

                {/* Renders the nested route here */}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
