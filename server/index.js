const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
// const path = require('path');

const userRoutes = require('./routes/users'); // Import routes
const shopRoutes = require('./routes/shop'); // Import routes
const cartRoutes = require('./routes/CartData'); // Import routes
const checkoutRoutes = require('./routes/checkout'); // Import routes
// const checkoutDataRoutes = require('./routes/checkoutData'); // Rename for clarity
// const orderRoutes = require('./routes/Orders'); // Update with your actual path





const app = express();
const PORT = process.env.PORT || 4000; // Default port 4000

const cookieParser = require('cookie-parser');


// Middleware
app.use(express.json()); // Parse JSON
app.use(cookieParser());

// app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true,
// }));



const corsOptions = {
  origin: 'http://localhost:3000',  // Aapke frontend ka URL
  credentials: true,  // Allow cookies to be sent
};

app.use(cors(corsOptions));



// MongoDB Connection
const DATABASE = process.env.DATABASE;
mongoose.connect(DATABASE)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process if connection fails
    });

// Routes
app.use('/api', shopRoutes);
app.use('/api', userRoutes);
app.use('/api', cartRoutes)
app.use('/api', checkoutRoutes)
// app.use('/api', checkoutDataRoutes);
// app.use('/api/orders', orderRoutes);





// app.use('/images', express.static(path.join(__dirname, 'public_html/Images/laptop.jpg')));


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
