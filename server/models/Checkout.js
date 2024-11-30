const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Item schema
const ItemSchema = new Schema({
    id: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    image: { 
        type: String, 
        default: null  // Default value if image is not provided
    },
    rating: { 
        type: Number, 
        min: 0, 
        max: 5,  // Rating should be between 0 and 5
        default: null 
    },
    total: { 
        type: Number, 
        required: true 
    },
}, { _id: false });

// Checkout Schema (Using ItemSchema for checkout_data)
const CheckoutSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    checkout_data: [ItemSchema],  // Using ItemSchema here for items
    
     // Default empty array for orderHistory
});

const Checkout = mongoose.model('Checkout', CheckoutSchema);

module.exports = Checkout;







// const mongoose = require('mongoose');
// const { Schema } = mongoose;

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
//     price: { 
//         type: Number, 
//         required: true 
//     },
//     image: { 
//         type: String, 
//         default: null  // Default value if image is not provided
//     },
//     rating: { 
//         type: Number, 
//         min: 0, 
//         max: 5,  // Rating should be between 0 and 5
//         default: null 
//     },
//     total: { 
//         type: Number, 
//         required: true 
//     },
// });

// // Checkout Schema (Using ItemSchema for checkout_data)
// const CheckoutSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true
//     },
//     checkout_data: [ItemSchema]  // Using ItemSchema here for items
// });

// const Checkout = mongoose.model('Checkout', CheckoutSchema);  // Corrected model name

// module.exports = Checkout;
