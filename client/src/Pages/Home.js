import React, { useEffect, useState } from 'react';
import ProductItem from '../Pages/ProductItem';
import axios from 'axios';
import { Grid, Box, Typography } from '@mui/material';

const Home = ({ searchQuery }) => {
    const [eShop, setEshop] = useState([]);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/eshop");
            if (response.data && Array.isArray(response.data.eShop)) {
                setEshop(response.data.eShop);
            } else {
                throw new Error("Invalid data structure");
            }
        } catch (error) {
            setError("Failed to fetch products.");
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // Filter products based on search query
    const filteredProducts = eShop.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return (
        <div>

             {/* Hero Image */}
             <Box sx={{ width: '100%' }}>
                 <img
                    src="/Images/E-image2.webp"
                     alt="eCommerce"
                     style={{ width: "100%", height: "400px" }}
                 />
             </Box>



            <Box sx={{ my: 5 }}>
                <Grid container spacing={4}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <Grid item xs={12} md={6} lg={4} key={item._id}>
                                <ProductItem
                                    id={item._id}
                                    title={item.title}
                                    image={item.image}
                                    rating={item.rating}
                                    price={item.price}
                                    actionType="add"
                                />
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h6">No products found</Typography>
                    )}
                </Grid>
            </Box>
        </div>
    );
};

export default Home;

























// import React, { useEffect, useState } from 'react';
// import ProductItem from '../Pages/ProductItem';
// import axios from 'axios';
// import { Grid, Box, Typography } from '@mui/material';

// const Home = () => {
//     const [eShop, setEshop] = useState([]); // State for fetched data
//     const [error, setError] = useState(null); // For error state

//     // Fetch data from MongoDB Atlas
//     const loadData = async () => {
//         try {
//             const response = await axios.get("http://localhost:4000/api/eshop");
//             console.log('Response from backend:', response.data); // Log for debugging

//             // Check response structure
//             if (response.data && Array.isArray(response.data.eShop)) {
//                 setEshop(response.data.eShop); // Set fetched products
//             } else {
//                 throw new Error("Invalid data structure");
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             setError("Failed to fetch products.");
//         }
//     };

//     // Load data when component mounts
//     useEffect(() => {
//         loadData();
//     }, []);

//     if (error) {
//         return <Typography variant="h6" color="error">{error}</Typography>;
//     }

//     return (
//         <div>
//             {/* Hero Image */}
//             <Box sx={{ width: '100%' }}>
//                 <img
//                     src="/Images/E-image2.webp"
//                     alt="eCommerce"
//                     style={{ width: "100%", height: "400px" }}
//                 />
//             </Box>

//             {/* Product List */}
//             <Box sx={{ my: 5 }}>
//                 <Grid container spacing={4}>
//                     {eShop.length > 0 ? (
//                         eShop.map((item) => (
//                             <Grid item xs={12} md={6} lg={4} key={item._id}>
//                                 <ProductItem
//                                     id={item._id}
//                                     title={item.title}
//                                     image={item.image}
//                                     rating={item.rating}
//                                     price={item.price}
//                                     actionType="add" // Add Product functionality
//                                 />
//                             </Grid>
//                         ))
//                     ) : (
//                         <Typography variant="h6">No products available</Typography>
//                     )}
//                 </Grid>
//             </Box>
//         </div>
//     );
// };

// export default Home;




// import React, { useEffect, useState } from 'react';
// import ProductItem from '../Pages/ProductItem';
// import axios from 'axios';

// const Home = () => {
//     const [eShop, setEshop] = useState([]); // State for fetched data
//     // const [loading, setLoading] = useState(true); // For loading state
//     const [error, setError] = useState(null); // For error state

//     // Fetch data from MongoDB Atlas
//     const loadData = async () => {
//         try {
//             const response = await axios.get("http://localhost:4000/api/eshop");
//             console.log('Response from backend:', response.data); // Log for debugging

//             // Check response structure
//             if (response.data && Array.isArray(response.data.eShop)) {
//                 setEshop(response.data.eShop); // Set fetched products
//             } else {
//                 throw new Error("Invalid data structure");
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             setError("Failed to fetch products.");
//         } 
        
//         // finally {
//         //     setLoading(false); // Stop loading
//         // }
//     };

//     // Load data when component mounts
//     useEffect(() => {
//         loadData();
//     }, []);

//     // if (loading) {
//     //     return <p>Loading...</p>;
//     // }

//     if (error) {
//         return <p>{error}</p>;
//     }

//     return (
//         <div>
//             {/* Hero Image */}
//             <div className='w-100'>
//                 <img
//                     src="/Images/E-image2.webp"
//                     alt="eCommerce"
//                     style={{ width: "100%", height: "400px" }}
//                 />
//             </div>

//             {/* Product List */}
//             <div className='container my-5'>
//                 <div className='row'>
//                     {eShop.length > 0 ? (
//                         eShop.map((item) => (
//                             <div key={item._id} className='col-12 col-md-6 col-lg-4 mb-4'>
//                                 <ProductItem
//                                     id={item._id}
//                                     title={item.title}
//                                     image={item.image}
//                                     rating={item.rating}
//                                     price={item.price}
//                                 />
//                             </div>
//                         ))
//                     ) : (
//                         <p>No products available</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
