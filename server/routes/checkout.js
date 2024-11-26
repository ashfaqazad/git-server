const express = require('express');
const router = express.Router();

router.post('/checkout', async (req, res) => {
    try {
        const { email, items } = req.body;

        if (!email || !items) {
            return res.status(400).json({ error: 'Email and items are required' });
        }

        // Save to database or process the checkout
        console.log('Checkout data:', { email, items });

        return res.status(200).json({ message: 'Checkout successful!' });
    } catch (error) {
        console.error('Error during checkout:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;








// const express = require('express');
// const router = express.Router();
// const Checkout = require('../models/Checkout'); // Import the Checkout Schema




// router.post("/checkout", async (req, res) => {
//     try {
//         const { email, items } = req.body;
//         console.log("Received data:", req.body);

//         if (!email || !items || items.length === 0) {
//             console.error("Validation error: Missing required fields");
//             return res.status(400).json({ message: "Invalid data sent" });
//         }

//         // Your database logic here
//         res.status(201).json({ message: "Checkout successful!" });
//     } catch (error) {
//         console.error("Error in /checkout route:", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });


// // router.post('/checkout', async (req, res) => {
// //     console.log('Received data:', req.body);

// //     try {
// //         const { email, items } = req.body; // destructure incoming data
// //         if (!email || !items || items.length === 0) {
// //             return res.status(400).json({ message: 'Invalid data sent' });

// //         }

// //         // Map `items` to match schema
// //         const checkoutData = items.map(item => ({
// //             id: item.id,
// //             title: item.title,
// //             price: item.price,
// //             quantity: item.quantity,
// //             total: item.total,
// //             image: item.image,
// //             rating: item.rating
// //         }));

// //         // Save to DB
// //         const checkout = new CheckoutModel({
// //             email: email,
// //             checkout_data: checkoutData // use mapped data
// //         });
// //         await checkout.save();

// //         res.status(201).json({ message: 'Checkout successful!' });
// //     } catch (error) {
// //         console.error('Checkout Error:', error.message);
// //         res.status(500).json({ message: 'Server error occurred during checkout' });
// //     }
// // });

// // // POST /checkout - Save a user's order data
// // router.post('/checkout', async (req, res) => {
// //     try {
// //         const { email, items } = req.body;
// //         console.log(req.body); // Check incoming data


// //         // Validation: Ensure required fields are provided
// //         if (!email || !items || !Array.isArray(items) || items.length === 0) {
// //             return res.status(400).json({ error: 'Email and items are required.' });
// //         }

// //         // Add the current date to the items array
// //         const orderData = [{ Order_date: new Date() }, ...items];

// //         // Check if the user's email already exists in the database
// //         let existingCheckout = await Checkout.findOne({ email }).exec();

// //         if (!existingCheckout) {
// //             // If email does not exist, create a new checkout entry
// //             const newCheckout = new Checkout({
// //                 email,
// //                 checkout_data: [orderData]
// //             });
// //             await newCheckout.save();
// //             res.status(200).json({ message: 'Order placed successfully!' });
// //         } else {
// //             // If email exists, update the existing checkout entry
// //             await Checkout.findOneAndUpdate(
// //                 { email },
// //                 { $push: { checkout_data: orderData } },
// //                 { new: true, upsert: true }  // Ensure updated data is returned
// //             );
// //             res.status(200).json({ message: 'Order updated successfully!' });
// //         }
// //     } 
    
// //     // catch (error) {
// //     //     console.error('Checkout Error:', error.message);
// //     //     console.error(error);
// //     //     res.status(500).json({ error: 'Failed to place the order.' });
// //     // }
// //     catch (error) {
// //         console.error('Error during checkout:', error.message);
// //         res.status(500).json({ error: 'Failed to place the order.', details: error.message });
// //     }
    

// // });



// // POST /myOrderData - Retrieve a user's order data
// router.post('/myOrderData', async (req, res) => {
//     try {
//         const { email } = req.body;

//         // Validation: Ensure email is provided
//         if (!email) {
//             return res.status(400).json({ error: 'Email is required.' });
//         }

//         // Find the user's order data by email
//         const userOrder = await Checkout.findOne({ email });

//         if (!userOrder) {
//             return res.status(404).json({ error: 'Order not found.' });
//         }

//         res.status(200).json({ orderData: userOrder });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to retrieve the order.' });
//     }
// });

// module.exports = router;












// // // routes/checkout.js
// // const express = require('express');
// // const router = express.Router();
// // const Checkout = require('../models/Checkout'); // Checkout Schema

// // router.post('/checkout', async (req, res) => {
// //     try {
// //         const { items, userId, total } = req.body;

// //         // Save the order to the database
// //         const order = new Checkout({
// //             userId,
// //             items, // All basket items
// //             total,
// //             orderDate: new Date(),
// //         });
// //         await order.save();

// //         res.status(200).json({ message: 'Order placed successfully!' });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Failed to place the order.' });
// //     }
// // });




// // // POST /api/myOrderData
// // router.post('/myOrderData', async (req, res) => {
// //     try {
// //         let eId = await Order.findOne({ 'email': req.body.email });
// //         if (!eId) {
// //             return res.status(404).send("Order not found.");
// //         }
// //         res.json({ orderData: eId });
// //     } catch (error) {
// //         res.status(500).send("Error: " + error.message);
// //     }
// // });



// // module.exports = router;




