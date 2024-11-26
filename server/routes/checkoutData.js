// // routes/checkout.js
// const express = require('express');
// const router = express.Router();
// const NewOrder = require('../models/newOrderSchema'); // Importing the correct model

// // POST route for placing orders
// router.post('/checkoutData', async (req, res) => {
//     const { userId, basket } = req.body;

//     // Calculate total price
//     const total = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);

//     try {
//         // Create a new order document using NewOrder model
//         const newOrder = new NewOrder({
//             userId,
//             items: basket,
//             total,
//         });

//         await newOrder.save(); // Save the new order in the database
//         res.status(201).json({ message: 'Order placed successfully!' });
//     } catch (error) {
//         console.error('Error placing order:', error); // Log any error
//         res.status(500).json({ error: 'Failed to place order' });
//     }
// });

// module.exports = router;
