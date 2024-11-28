import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.post('http://localhost:4000/api/myOrderData', { email: 'aftab@gmail.com' });
                console.log('Response Data:', response.data);
                setOrders(response.data.orderdata || []);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>My Orders</h2>
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    <div key={order._id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                        <h3>Order {index + 1}</h3>
                        <h4>Email: {order.email}</h4>
                        <h4>Checkout Data:</h4>
                        {order.checkout_data.map((item) => (
                            <div key={item.id} style={{ marginBottom: '10px' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                                <p>Title: {item.title}</p>
                                <p>Price: Rs. {item.price}</p>
                                <p>Rating: {item.rating}</p>
                                <p>Total: Rs. {item.total}</p>
                            </div>
                        ))}
                        <h4>Order History:</h4>
                        {order.orderHistory.map((item) => (
                            <div key={item.id} style={{ marginBottom: '10px' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                                <p>Title: {item.title}</p>
                                <p>Price: Rs. {item.price}</p>
                                <p>Rating: {item.rating}</p>
                                <p>Total: Rs. {item.total}</p>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default MyOrders;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Typography, Card, CardContent, CircularProgress } from '@mui/material';

// const MyOrders = () => {
//     const [orders, setOrders] = useState([]); // Orders data
//     const [loading, setLoading] = useState(true); // Loading state

//     useEffect(() => {
//         const fetchOrders = async () => {
//             const email = localStorage.getItem('userEmail'); // User email localStorage se fetch karein
            

//             if (!email) {
//                 console.error('No user email found in localStorage');
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const response = await axios.post('http://localhost:4000/api/myOrderData', { email });
//                 console.log('Response Data:', response.data);

//                 setOrders(response.data.orderdata || []); // Backend se received data set karein
//             } catch (error) {
//                 console.error('Failed to fetch orders:', error);
//             } finally {
//                 setLoading(false); // Loading state ko false karein
//             }
//         };

//         fetchOrders();
//     }, []);

//     if (loading) {
//         return (
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                 <CircularProgress />
//                 <Typography sx={{ marginLeft: 2 }}>Loading your orders...</Typography>
//             </Box>
//         );
//     }

//     return (
//     <Box sx={{ padding: 3 }}>
//         <Typography variant="h4" gutterBottom>
//             My Orders
//         </Typography>
//         {Array.isArray(orders) && orders.length > 0 ? (
//             orders
//                 .slice(0)
//                 .reverse()
//                 .map((order, index) => (
//                     <Box key={index} sx={{ marginBottom: 3 }}>
//                         {Array.isArray(order) && order.map((item, idx) =>
//                             item.name ? (
//                                 <Card key={idx} sx={{ marginBottom: 2 }}>
//                                     <CardContent>
//                                         {item.Order_date && (
//                                             <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
//                                                 Order Date: {item.Order_date}
//                                             </Typography>
//                                         )}
//                                         <Typography variant="h6">{item.title}</Typography>
//                                         <Typography>Image: {item.image}</Typography>
//                                         <Typography>Rating: {item.rating}</Typography>
//                                         <Typography>Price: Rs. {item.price}</Typography>
//                                     </CardContent>
//                                 </Card>
//                             ) : null
//                         )}
//                     </Box>
//                 ))
//         ) : (
//             <Typography>No orders found.</Typography>
//         )}
//     </Box>
//     );
// };

// export default MyOrders;


