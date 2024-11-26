// src/components/MyOrders.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, CircularProgress } from '@mui/material';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            const email = localStorage.getItem('userEmail'); // User email localStorage se fetch karo
            if (!email) {
                console.error('No user email found in localStorage');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.post('http://localhost:4000/api/myOrderData', { email });
                setOrders(response.data.orderData.order_data || []);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
                <Typography sx={{ marginLeft: 2 }}>Loading your orders...</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                My Orders
            </Typography>
            {orders.length === 0 ? (
                <Typography>No orders found.</Typography>
            ) : (
                orders
                    .slice(0)
                    .reverse()
                    .map((order, index) => (
                        <Box key={index} sx={{ marginBottom: 3 }}>
                            {order.map((item, idx) =>
                                item.name ? (
                                    <Card key={idx} sx={{ marginBottom: 2 }}>
                                        <CardContent>
                                            {item.Order_date && (
                                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                                    Order Date: {item.Order_date}
                                                </Typography>
                                            )}
                                            <Typography variant="h6">{item.title}</Typography>
                                            <Typography>Image: {item.image}</Typography>
                                            <Typography>Rating: {item.rating}</Typography>
                                            <Typography>Price: Rs. {item.price}</Typography>
                                        </CardContent>
                                    </Card>
                                ) : null
                            )}
                        </Box>
                    ))
            )}
        </Box>
    );
};

export default MyOrders;










// // src/components/MyOrders.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Typography, Card, CardContent } from '@mui/material';

// const MyOrders = ({ userId }) => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get(`/api/orders/my-orders/${userId}`);
//                 setOrders(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch orders:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, [userId]);

//     if (loading) return <Typography>Loading your orders...</Typography>;

//     return (
//         <Box sx={{ padding: 2 }}>
//             <Typography variant="h4" gutterBottom>
//                 My Orders
//             </Typography>
//             {orders.length === 0 ? (
//                 <Typography>No orders found</Typography>
//             ) : (
//                 orders.map(order => (
//                     <Card key={order._id} sx={{ marginBottom: 2 }}>
//                         <CardContent>
//                             <Typography variant="h6">Order ID: {order._id}</Typography>
//                             <Typography>Date: {new Date(order.createdAt).toLocaleDateString()}</Typography>
//                             <Typography>Total Amount: Rs. {order.total}</Typography>
//                             <Typography>Items:</Typography>
//                             <ul>
//                                 {order.items.map(item => (
//                                     <li key={item.id}>
//                                         {item.title} - Rs. {item.price} x {item.quantity}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </CardContent>
//                     </Card>
//                 ))
//             )}
//         </Box>
//     );
// };

// export default MyOrders;
