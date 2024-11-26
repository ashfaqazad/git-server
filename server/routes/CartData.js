const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
// const { verifyToken } = require('../middleware/auth'); // Uncomment this if authentication is required

router.post('/cartData', async (req, res) => {
    try {
        const { id, title, rating, price, image, email } = req.body;

        // Find the user's cart by email
        let cart = await Cart.findOne({ email });

        // If no cart exists for the user, create a new one
        if (!cart) {
            cart = new Cart({ email, cart_data: [] });
        }

        // Check if the item already exists in the cart
        const existingItemIndex = cart.cart_data.findIndex(item => item.id.toString() === id);

        if (existingItemIndex >= 0) {
            // Update the quantity (or modify the logic as per your requirements)
            cart.cart_data[existingItemIndex].price += price; // Example: updating price
        } else {
            // Add the new item to the cart
            cart.cart_data.push({ id, title, rating, price, image });
        }

        // Save the cart
        await cart.save();

        res.status(200).json({ message: 'Item added to cart successfully', cart });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
});




module.exports = router;
