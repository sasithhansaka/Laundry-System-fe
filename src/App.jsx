import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route index                element={<Home />}/>

                    <Route path="/"             element={<Home />} />
                    <Route path="/about"        element={<About />} />
                    <Route path="/contact"      element={<Contact />} />
                    <Route path="/signin"       element={<SignIn />} />
                    <Route path="/signup"       element={<SignUp />} />

                    <Route path="/dashboard"    element={<Dashboard/>}/>

                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
