// const express = require('express');
// const router = express.Router();
// const Checkout = require('../models/Checkout'); // Checkout model ko import karen
// const jwt = require('jsonwebtoken');

// // Token verification middleware
// const verifyToken = (req, res, next) => {
//     const token = req.cookies.authToken; // Cookie se token retrieve karein
//     if (!token) {
//         return res.status(401).json({ error: "Auth token not found" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET); // Token ko verify karein
//         req.user = decoded; // Decoded user info ko request mein attach karein
//         next(); // Agla middleware ya route handler ko call karein
//     } catch (err) {
//         return res.status(403).json({ error: "Invalid token" });
//     }
// };

// // Checkout route
// router.post('/checkout', verifyToken, async (req, res) => {
//     console.log('Received data:', req.body);

//     const { checkout_data, orderHistory } = req.body;
//     const email = req.user.email; // Token se email retrieve karein

//     // Check if required fields are missing
//     if (!email || !checkout_data || !orderHistory) {
//         return res.status(400).json({ error: 'Email, checkout data, and order history are required.' });
//     }

//     try {
//         // Create a new checkout document
//         const newCheckout = new Checkout({
//             email: email,
//             checkout_data: checkout_data,
//             orderHistory: orderHistory,
//         });

//         // Save the checkout data to MongoDB
//         await newCheckout.save();

//         res.status(200).json({ message: 'Order placed successfully!' });
//     } catch (error) {
//         console.error('Error during checkout:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // My Order Data route
// router.post('/myOrderData', verifyToken, async (req, res) => {
//     try {
//         const email = req.user.email; // Token se email retrieve karein

//         if (!email) {
//             return res.status(400).json({ error: 'Email is required' });
//         }

//         // Email ke basis par user orders fetch karein
//         const userOrders = await Checkout.find({ email });

//         res.status(200).json({ orderdata: userOrders });
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).json({ error: 'Failed to fetch orders' });
//     }
// });

// module.exports = router;














const express = require('express');
const router = express.Router();
const Checkout = require('../models/Checkout');  // Checkout model ko import karna




router.post('/checkout', async (req, res) => {
    console.log('Received data:', req.body);

    const { email, checkout_data } = req.body;

    // Check if required fields are missing
    if (!email || !checkout_data) { // Extra `||` hata diya
        return res.status(400).json({ error: 'Email and checkout data are required.' });
    }

    try {
        // Create a new checkout document
        const newCheckout = new Checkout({
            email: email,
            
            checkout_data: checkout_data,
            


        });

        // Save the checkout data to MongoDB
        await newCheckout.save();

        res.status(200).json({ message: 'Order placed successfully!' });
    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});







router.post('/myOrderData', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const userOrders = await Checkout.find({ email }); // Email ke basis par orders fetch karein
        res.status(200).json({ orderdata: userOrders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

module.exports = router;



// // // POST /myOrderData - Retrieve a user's order data
// // router.post('/myOrderData', async (req, res) => {
// //     console.log('Route hit for /api/myOrderData'); // Check if route is hit
// //     console.log('Request Body:', req.body); // Log incoming request body

// //     try {
// //         const { email } = req.body;
// //         console.log('Request Body:', req.body);

// //         // Validation: Ensure email is provided
// //         if (!email) {
// //             return res.status(400).json({ error: 'Email is required.' });
// //         }

// //         // Find the user's order data by email
// //         const userOrder = await Checkout.findOne({ email });

// //         if (!userOrder) {
// //             return res.status(404).json({ error: 'Order not found.' });
// //         }

// //         res.status(200).json({ orderData: userOrder });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Failed to retrieve the order.' });
// //     }
// // });


// module.exports = router;
















// // const express = require('express');
// // const router = express.Router();

// // router.post('/checkout', async (req, res) => {
// //     try {
// //         const { email, items } = req.body;

// //         if (!email || !items) {
// //             return res.status(400).json({ error: 'Email and items are required' });
// //         }

// //         // Save to database or process the checkout
// //         console.log('Checkout data:', { email, items });

// //         return res.status(200).json({ message: 'Checkout successful!' });
// //     } catch (error) {
// //         console.error('Error during checkout:', error.message);
// //         return res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // });







// // // POST /myOrderData - Retrieve a user's order data
// // router.post('/myOrderData', async (req, res) => {
// //     try {
// //         const { email } = req.body;

// //         // Validation: Ensure email is provided
// //         if (!email) {
// //             return res.status(400).json({ error: 'Email is required.' });
// //         }

// //         // Find the user's order data by email
// //         const userOrder = await Checkout.findOne({ email });

// //         if (!userOrder) {
// //             return res.status(404).json({ error: 'Order not found.' });
// //         }

// //         res.status(200).json({ orderData: userOrder });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Failed to retrieve the order.' });
// //     }
// // });


// // module.exports = router;
