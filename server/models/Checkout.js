const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Item schema
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




const CheckoutSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    checkout_data: [
        {
            id: { type: String, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
            total: { type: Number, required: true },
            image: { type: String },
            rating: { type: Number }
        }
    ]
});



// // Define the Checkout schema
// const CheckoutSchema = new Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,  // Ensures no duplicate emails
//         // match: /.+\@.+\..+/  // Email format validation
//     },
//     checkout_data: {
//         type: [ItemSchema],  // Array of items (no nested array)
//         required: true
//     },
//     createdAt: { 
//         type: Date, 
//         default: Date.now  // Timestamp for when the order was created
//     }
// });

// Export the Checkout model
module.exports = mongoose.model('Checkout', CheckoutSchema);










// const mongoose = require('mongoose');

// const checkoutSchema = new mongoose.Schema({
//     userId: { type: String, required: true },
//     items: [
//         {
//             id: { type: String, required: true },
//             title: { type: String, required: true },
//             price: { type: Number, required: true },
//             image: { type: String },
//             rating: { type: Number },
//         },
//     ],
//     total: { type: Number, required: true },
//     orderDate: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Checkout', checkoutSchema);
