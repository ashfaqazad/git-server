import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Cookies from 'js-cookie'; // For managing authentication token
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons are imported

const Navbar = () => {
    const [authToken, setAuthToken] = useState(Cookies.get('authToken') || null); // Initialize with token if available
    const { state, dispatch } = useAppContext(); // Context for state management
    const basketLength = state.basket ? state.basket.length : 0; // Basket length for cart
    const navigate = useNavigate();

    const token = Cookies.get('authToken');

    // Axios instance
    const instance = axios.create({
        baseURL: 'http://localhost:4000/',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`, // Fixed syntax for template string
        },
    });

    // Handle logout functionality
    const handleLogout = async () => {
        try {
            const response = await instance.get('/api/logout', { withCredentials: true });
            if (response.data.status) {
                console.log(response.data.msg);
                Cookies.remove('authToken'); // Remove token
                setAuthToken(null); // Reset auth state
                dispatch({ type: 'LOGOUT' }); // Clear context state
                navigate('/login'); // Redirect to login
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                {/* Brand */}
                <Link className="navbar-brand text-white fw-bold fst-italic" to="/">
                    eSHOP
                </Link>

                {/* Navbar Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Left Side Links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">
                                Home
                            </Link>
                        </li>
                        {authToken && (
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/orders">
                                    My Orders
                                </Link>
                            </li>
                        )}
                    </ul>



                    {/* Right Side Buttons */}
                    {authToken !== null ? (
                        <>
                            {/* Show Cart and Logout */}
                            <li className="nav-item">
                                <Link className="nav-link text-white d-flex align-items-center" to="/cart">
                                    <i className="bi bi-basket2 me-2"></i>
                                    <span>{basketLength}</span>
                                </Link>
                            </li>
                            <button
                                onClick={handleLogout}
                                className="btn bg-white text-danger mx-1"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Show Login and Signup */}
                            <button
                                onClick={() => navigate('/login')}
                                className="btn bg-white text-success mx-1"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate('/signup')}
                                className="btn bg-white text-success mx-1"
                            >
                                Signup
                            </button>
                        </>
                    )}




                </div>
            </div>
        </nav>
    );
};

export default Navbar;
