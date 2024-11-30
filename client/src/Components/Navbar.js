import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAppContext } from '../context/AppContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer, List, ListItem, ListItemText, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const { state, dispatch } = useAppContext();
    const basketLength = state.basket ? state.basket.length : 0; 
    const navigate = useNavigate();
    const authToken = Cookies.get('token');
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };

    const handleDrawerNavigation = (path) => {
        navigate(path);
        setDrawerOpen(false);
    };

    const handleLogout = () => {
        Cookies.remove('token');
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            cursor: 'pointer',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        }}
                        onClick={() => navigate('/')}
                    >
                        eSHOP
                    </Typography>

                    {/* Desktop Links */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        {/* Left Section */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button 
                                color="inherit" 
                                onClick={() => navigate('/')}
                                sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            >
                                Home
                            </Button>
                            {authToken && (
                                <Button 
                                    color="inherit" 
                                    onClick={() => navigate('/my-orders')}
                                    sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
                                >
                                    My Orders
                                </Button>
                            )}
                        </Box>

                        {/* Search Bar */}
                        <Box sx={{ flexGrow: 1, mx: 2 }}>
                            <TextField
                                fullWidth
                                placeholder="Search here..."
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                            />
                        </Box>

                        {/* Right Section */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {authToken ? (
                                <>
                                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                                    <IconButton color="inherit" onClick={() => navigate('/cart')}>
                                        <Badge badgeContent={basketLength} color="secondary">
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </>
                            ) : (
                                <>
                                    <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                                    <Button color="inherit" onClick={() => navigate('/signup')}>Signup</Button>
                                </>
                            )}
                        </Box>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer Menu */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
            >
                <List>
                    <ListItem button onClick={() => handleDrawerNavigation('/')}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    {authToken && (
                        <ListItem button onClick={() => handleDrawerNavigation('/my-orders')}>
                            <ListItemText primary="My Orders" />
                        </ListItem>
                    )}
                    {authToken ? (
                        <>
                            <ListItem button onClick={handleLogout}>
                                <ListItemText primary="Logout" />
                            </ListItem>
                            <ListItem button onClick={() => handleDrawerNavigation('/cart')}>
                                <ListItemText primary={`Cart (${basketLength})`} />
                            </ListItem>
                        </>
                    ) : (
                        <>
                            <ListItem button onClick={() => handleDrawerNavigation('/login')}>
                                <ListItemText primary="Login" />
                            </ListItem>
                            <ListItem button onClick={() => handleDrawerNavigation('/signup')}>
                                <ListItemText primary="Signup" />
                            </ListItem>
                        </>
                    )}
                </List>
            </Drawer>
        </Box>
    );
};

export default Navbar;













// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import { useAppContext } from '../context/AppContext';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Badge from '@mui/material/Badge';
// // import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import { Drawer, List, ListItem, ListItemText } from '@mui/material'; // Drawer and List components for mobile menu

// const Navbar = () => {
//     const { state, dispatch } = useAppContext();
//     const basketLength = state.basket ? state.basket.length : 0; // Handle undefined basket case
//     const navigate = useNavigate();
//     const authToken = Cookies.get('token');

//     const handleLogout = () => {
//         Cookies.remove('token');
//         dispatch({ type: 'LOGOUT' });
//         navigate('/');
//     };

//     // State for mobile menu
//     const [drawerOpen, setDrawerOpen] = React.useState(false); // Mobile drawer state

//     const toggleDrawer = (open) => {
//         setDrawerOpen(open);
//     };

//     const handleDrawerNavigation = (path) => {
//         navigate(path);
//         setDrawerOpen(false); // Close drawer after navigating
//     };

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static" color='secondary'>
//                 <Toolbar>
//                     {/* Logo */}
//                     <Typography
//     variant="h6"
//     component="div"
//     sx={{
//         flexGrow: 1,         // Flex grow for taking space
//         cursor: 'pointer',   // Pointer for hover effect
//         fontSize: '2rem',    // Equivalent to fs-1
//         fontWeight: 'bold',  // Equivalent to fw-bold
//         fontStyle: 'italic', // Equivalent to fst-italic
//     }}
//     onClick={() => navigate('/')}
// >
//     eSHOP
// </Typography>


// {/* Desktop Links */}

        
// <Box
//     sx={{
//         display: 'flex',
//         justifyContent: 'space-between', // Separate left and right sections
//         alignItems: 'center',           // Center vertically
//         width: '100%',
//     }}
// >
//     {/* Left Section */}
//     <Box
//         sx={{
//             display: { xs: 'none', md: 'flex' },
//             justifyContent: 'flex-start',
//             alignItems: 'center',
//         }}
//     >
// <Button 
//     color="inherit" 
//     onClick={() => navigate('/')}
//     sx={{ 
//         fontWeight: 'bold', // For bold text
//         fontStyle: 'italic', // Equivalent to fst-italic

//     }}
// >
//     Home
// </Button>
// {authToken && (
//     <Button 
//         color="inherit" 
//         onClick={() => navigate('/my-orders')}
//         sx={{ 
//             fontWeight: 'bold', // For bold text
//             fontStyle: 'italic', // Equivalent to fst-italic

//         }}
//     >
//         My Orders
//     </Button>
// )}

//     </Box>

//     {/* Right Section */}
//     <Box
//         sx={{
//             display: { xs: 'none', md: 'flex' },
//             justifyContent: 'flex-end',
//             alignItems: 'center',
//         }}
//     >
//         {authToken ? (
//             <>
//                 <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: '1rem' }}>Logout</Button>
//                 <IconButton color="inherit" onClick={() => navigate('/cart')}>
//                     <Badge badgeContent={basketLength} color="secondary">
//                         <ShoppingCartIcon />
//                     </Badge>
//                 </IconButton>
//             </>
//         ) : (
//             <>
//                 <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
//                 <Button color="inherit" onClick={() => navigate('/signup')}>Signup</Button>
//             </>
//         )}
//     </Box>
// </Box>

//                     {/* Mobile Menu Icon */}
//                     <IconButton
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ display: { xs: 'flex', md: 'none' } }}
//                         onClick={() => toggleDrawer(true)}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                 </Toolbar>
//             </AppBar>

//             {/* Mobile Drawer Menu */}
//             <Drawer
//                 anchor="left"
//                 open={drawerOpen}
//                 onClose={() => toggleDrawer(false)}
//             >
//                 <List>
//                     <ListItem button onClick={() => handleDrawerNavigation('/')}>
//                         <ListItemText primary="Home" />
//                     </ListItem>
//                     {authToken && (
//                         <ListItem button onClick={() => handleDrawerNavigation('/my-orders')}>
//                             <ListItemText primary="My Orders" />
//                         </ListItem>
//                     )}
//                     {authToken ? (
//                         <>
//                             <ListItem button onClick={handleLogout}>
//                                 <ListItemText primary="Logout" />
//                             </ListItem>
//                             <ListItem button onClick={() => handleDrawerNavigation('/cart')}>
//                                 <ListItemText primary={`Cart (${basketLength})`} />
//                             </ListItem>
//                         </>
//                     ) : (
//                         <>
//                             <ListItem button onClick={() => handleDrawerNavigation('/login')}>
//                                 <ListItemText primary="Login" />
//                             </ListItem>
//                             <ListItem button onClick={() => handleDrawerNavigation('/signup')}>
//                                 <ListItemText primary="Signup" />
//                             </ListItem>
//                         </>
//                     )}
//                 </List>
//             </Drawer>
//         </Box>
//     );
// };

// export default Navbar;















// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import Cookies from 'js-cookie';
// // // import axios from 'axios';
// // import { useAppContext } from '../context/AppContext';
// // import 'bootstrap-icons/font/bootstrap-icons.css';

// // const Navbar = () => {


// //     const { state, dispatch } = useAppContext();
// //     const basketLength = state.basket ? state.basket.length : 0; // Handle undefined basket case

// //     const navigate = useNavigate();


// //     const handleLogout = () => {
// //         Cookies.remove('token');

// //         dispatch({ type: 'LOGOUT' });

// //         navigate('/Login');
// //     };

// //     const authToken = Cookies.get('token');


// //     return (
// //         <nav className="navbar navbar-expand-lg bg-dark">
// //             <div className="container-fluid">
// //                 <Link className="navbar-brand text-white fs-1 fw-bold fst-italic" to="/">
// //                     eSHOP
// //                 </Link>
// //                 <button
// //                     className="navbar-toggler"
// //                     type="button"
// //                     data-bs-toggle="collapse"
// //                     data-bs-target="#navbarSupportedContent"
// //                     aria-controls="navbarSupportedContent"
// //                     aria-expanded="false"
// //                     aria-label="Toggle navigation"
// //                 >
// //                     <span className="navbar-toggler-icon"></span>
// //                 </button>
// //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //                         <li className="nav-item">
// //                             <Link className="nav-link text-white" to="/"
// //                                 style={{ textDecoration: 'none', fontSize: '1.2rem' }}
// //                             >
// //                                 Home
// //                             </Link>
// //                         </li>
// //                         {authToken && (
// //                             <li className="nav-item">
// //                                 <Link className="nav-link text-white" to="/orders"
// //                                     style={{ textDecoration: 'none', fontSize: '1.2rem' }}
// //                                 >
// //                                     My Orders
// //                                 </Link>
// //                             </li>
// //                         )}
// //                     </ul>


// //                     {/* Search Bar */}
// //                     {/* <div
// //                         className="input-group w-50 d-flex ustify-content-between"
                        
// //                     >
// //                         <input
// //                             type="text"
// //                             className="form-control"
// //                             placeholder="Search here..."
// //                             aria-label="Recipient's username"
// //                         />
// //                         <span className="input-group-text bg-warning">
// //                             <i className="bi bi-search"></i>
// //                         </span>
// //                     </div> */}



// //                     <ul className="navbar-nav mb-2 mb-lg-0">
// //                         {authToken ? (
// //                             <>
// //                                 <button
// //                                     onClick={handleLogout}
// //                                     className="btn bg-white text-danger mx-1"
// //                                 >
// //                                     Logout
// //                                 </button>



// //                                 <li className="nav-item">
// //                                     <Link className="nav-link text-white d-flex align-items-center" to="/cart">
// //                                         <i className="bi bi-basket2 me-2"></i>
// //                                         <span>{basketLength}</span>

// //                                     </Link>
// //                                 </li>
// //                             </>
// //                         ) : (
// //                             <>
// //                                 <button
// //                                     onClick={() => navigate('/login')}
// //                                     className="btn bg-white text-success mx-1"
// //                                 >
// //                                     Login
// //                                 </button>
// //                                 <button
// //                                     onClick={() => navigate('/signup')}
// //                                     className="btn bg-white text-success mx-1"
// //                                 >
// //                                     Signup
// //                                 </button>
// //                             </>
// //                         )}
// //                     </ul>
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // };

// // export default Navbar;





// // // import React, { useEffect, useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { useAppContext } from '../context/AppContext';
// // // import Cookies from 'js-cookie';
// // // import axios from 'axios';
// // // import 'bootstrap-icons/font/bootstrap-icons.css';

// // // const Navbar = () => {
// // //     const [authToken, setAuthToken] = useState(Cookies.get('authToken') || null); // Initialize with token if available
// // //     const { state } = useAppContext(); // Context for state management
// // //     const basketLength = state?.basket?.length || 0; // Basket length for cart
// // //     const navigate = useNavigate();

// // //     // Fetch token on mount
// // //     useEffect(() => {
// // //         const token = Cookies.get('authToken');
// // //         setAuthToken(token);
// // //     }, []); // Run only once

// // //     // Handle logout functionality
// // //     const handleLogout = async () => {
// // //         try {
// // //             const response = await axios.post('http://localhost:4000/api/logout', {}, { withCredentials: true });
// // //             if (response.data.status === 'success') {
// // //                 console.log(response.data.message); // Debugging
// // //                 Cookies.remove('authToken'); // Remove token
// // //                 setAuthToken(null); // Update state
// // //                 navigate('/login'); // Redirect to login page
// // //             }
// // //         } catch (error) {
// // //             console.error('Error during logout:', error);
// // //         }
// // //     };

// // //     return (
// // //         <nav className="navbar navbar-expand-lg bg-dark">
// // //             <div className="container-fluid">
// // //                 {/* Brand */}
// // //                 <Link className="navbar-brand text-white fw-bold fst-italic" to="/">
// // //                     eSHOP
// // //                 </Link>

// // //                 {/* Navbar Toggle */}
// // //                 <button
// // //                     className="navbar-toggler"
// // //                     type="button"
// // //                     data-bs-toggle="collapse"
// // //                     data-bs-target="#navbarSupportedContent"
// // //                     aria-controls="navbarSupportedContent"
// // //                     aria-expanded="false"
// // //                     aria-label="Toggle navigation"
// // //                 >
// // //                     <span className="navbar-toggler-icon"></span>
// // //                 </button>

// // //                 {/* Navbar Content */}
// // //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
// // //                     {/* Left Side Links */}
// // //                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// // //                         <li className="nav-item">
// // //                             <Link className="nav-link text-white" to="/">
// // //                                 Home
// // //                             </Link>
// // //                         </li>
// // //                         {authToken && (
// // //                             <li className="nav-item">
// // //                                 <Link className="nav-link text-white" to="/orders">
// // //                                     My Orders
// // //                                 </Link>
// // //                             </li>
// // //                         )}
// // //                     </ul>

// // //                     {/* Right Side Buttons */}
// // //                     <ul className="navbar-nav mb-2 mb-lg-0">
// // //                         {authToken !== null ? (
// // //                             <>
// // //                                 {/* Show Cart */}
// // //                                 <li className="nav-item">
// // //                                     <Link className="nav-link text-white d-flex align-items-center" to="/cart">
// // //                                         <i className="bi bi-basket2 me-2"></i>
// // //                                         <span>{basketLength}</span>
// // //                                     </Link>
// // //                                 </li>
// // //                                 {/* Logout Button */}
// // //                                 <li className="nav-item">
// // //                                     <button
// // //                                         onClick={handleLogout}
// // //                                         className="btn bg-white text-danger mx-1"
// // //                                     >
// // //                                         Logout
// // //                                     </button>
// // //                                 </li>
// // //                             </>
// // //                         ) : (
// // //                             <>
// // //                                 {/* Show Login and Signup */}
// // //                                 <li className="nav-item">
// // //                                     <button
// // //                                         onClick={() => navigate('/login')}
// // //                                         className="btn bg-white text-success mx-1"
// // //                                     >
// // //                                         Login
// // //                                     </button>
// // //                                 </li>
// // //                                 <li className="nav-item">
// // //                                     <button
// // //                                         onClick={() => navigate('/signup')}
// // //                                         className="btn bg-white text-success mx-1"
// // //                                     >
// // //                                         Signup
// // //                                     </button>
// // //                                 </li>
// // //                             </>
// // //                         )}
// // //                     </ul>
// // //                 </div>
// // //             </div>
// // //         </nav>
// // //     );
// // // };

// // // export default Navbar;
