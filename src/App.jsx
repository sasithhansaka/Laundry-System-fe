import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import DashboardContent from './components/DashboardContent';
import FaqService from './components/FaqService';
import Orders from './components/Orders';
import Packages from './components/Packages';
import Reports from './components/Reports';
import Sales from './components/Sales';
import Settings from './components/Settings';
import Users from './components/Users';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Dashboard with nested routes */}
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<DashboardContent />} />
                    <Route path="home" element={<DashboardContent />} />
                    <Route path="faq" element={<FaqService />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="sales" element={<Sales />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
