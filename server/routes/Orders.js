// // routes/orderRoutes.js
// const express = require('express');
// const router = express.Router();
// const Order = require('../models/newOrderSchema'); // Order model

// // POST /api/myOrderData
// router.post('/myOrderData', async (req, res) => {
//     const { email } = req.body;

//     if (!email) {
//         return res.status(400).json({ message: 'Email is required to fetch orders.' });
//     }

//     try {
//         // Find orders by email
//         const userOrders = await Order.findOne({ email }).select('order_data -_id'); // Fetch only order_data field
//         if (!userOrders || !userOrders.order_data.length) {
//             return res.status(404).json({ message: 'No orders found for this email.' });
//         }

//         res.status(200).json({ orderData: userOrders });
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).json({ message: 'Failed to fetch orders.' });
//     }
// });

// // Export the router
// module.exports = router;













// // const express = require('express');
// // const router = express.Router();
// // const Order = require('../models/newOrderSchema'); // Order model

// // // GET /api/orders/my-orders/:userId
// // router.get('/my-orders/:userId', async (req, res) => {
// //     const { userId } = req.params;

// //     try {
// //         const orders = await Order.find({ userId }).sort({ createdAt: -1 }); // Sort by latest orders
// //         if (!orders || orders.length === 0) {
// //             return res.status(404).json({ message: 'No orders found for this user' });
// //         }
// //         res.status(200).json(orders);
// //     } catch (error) {
// //         console.error('Error fetching orders:', error);
// //         res.status(500).json({ message: 'Failed to fetch orders' });
// //     }
// // });

// // module.exports = router;








// // // // routes/orderRoutes.js
// // // const express = require('express');
// // // const router = express.Router();
// // // const Order = require('../models/newOrderSchema'); // Order model

// // // // Get orders for a specific user
// // // router.get('/my-orders/:userId', async (req, res) => {
// // //     const { userId } = req.params;

// // //     try {
// // //         const orders = await Order.find({ userId }); // Find orders by user ID
// // //         res.status(200).json(orders);
// // //     } catch (error) {
// // //         res.status(500).json({ error: 'Failed to fetch orders' });
// // //     }
// // // });

// // // module.exports = router;
