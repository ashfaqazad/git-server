const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Item schema
const ItemSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId, // Linking to another collection
        ref: 'eShop', // Reference to another collection, e.g., 'Product'
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

// Define the Cart schema
const CartSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    cart_data: {
        type: [ItemSchema],  // Direct array of items
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically add timestamp for order creation
    }
});

module.exports = mongoose.model('Cart', CartSchema);





// const mongoose = require('mongoose');  // Import mongoose
// const { Schema } = mongoose;  // Extract Schema from mongoose

// // Define the Item schema
// const ItemSchema = new Schema({
//     id: {
//         type: String,
//         required: true
//     },
//     title: {
//         type: String,
//         required: true
//     },
//     rating: {
//         type: Number,
//         min: 0,
//         max: 5
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     }
// });

// // Define the Order schema
// const OrderSchema = new Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     order_data: {
//         type: [[ItemSchema]],  // Array of arrays of items
//         required: true
//     }
// });

// module.exports = mongoose.model('Order', OrderSchema); // Export the Order model
