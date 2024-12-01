import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
// Named Export
import Login from './Pages/Login'; // Sahi import
// import Orders from './Pages/Orders';
import Footer from './Pages/Footer';
import MyOrders from './Pages/MyOrders';
// import SocialIcons from './Components/SocialIcons';
// import { useAppContext } from './context/AppContext';

// import Checkout from './Pages/Checkout';
// import Footer from './Pages/Footer';

const App = ()=> {


  const [searchQuery, setSearchQuery] = useState('');

  // Update the search query
  const handleSearch = (query) => {
      setSearchQuery(query);
  };



  return (
    <Router>
            <Navbar onSearch={handleSearch} />
            {/* <SocialIcons /> */}
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/my-orders" element={<MyOrders />} />
        {/* <Route path="/my-orders" element={<MyOrders userId={state.user?.id} />} /> */}

        {/* <Route path="/my-orders" element={<MyOrders userId={userId} />} /> */}
        {/* <Route path="/my-orders" element={<MyOrders />} /> */}
         <Route path="/cart" element={<Cart />} /> 
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

