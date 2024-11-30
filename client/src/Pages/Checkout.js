import React from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';
import { Button } from '@mui/material';

const Checkout = () => {
    const { state, dispatch } = useAppContext(); // Accessing basket data from context
    const data = state.basket; // Assuming `basket` contains the cart items
    console.log(data);




    const handleCheckout = async () => {
        // Check for incomplete items
        const incompleteItems = data.some(
            (item) =>
                !item.id || !item.title || !item.price || !item.image || !item.rating
        );

        if (incompleteItems) {
            alert("Some items in the cart are incomplete. Please review your cart.");
            return;
        }

        // Adding quantity and total to each item
        // const orderData = data.map((item)
        const checkoutData = data.map((item) => ({
            ...item,
            quantity: item.quantity || 1, // Default to 1 if no quantity is set
            total: item.price * (item.quantity || 1), // Calculating total price for each item
        }));

        // const userEmail = localStorage.getItem("userEmail");
        const userEmail = localStorage.getItem("userEmail");


        try {
            const response = await axios.post("http://localhost:4000/api/checkout", {
                email: userEmail,  // Send the email here
                checkout_data: checkoutData,  

                // order_data: orderData,
                // email: userEmail,
                // order_date: new Date().toDateString(),
            });

            if (response.status === 200) {
                alert("Order placed successfully!");
                dispatch({ type: 'CLEAR_BASKET' });
            } else {
                alert("Failed to place order. Please try again.");
            }
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("An error occurred while placing the order. Please try again.");
        }
    };

    // Calculate total price of the basket
    const totalPrice = data.reduce((total, item) => {
        return total + item.price * (item.quantity || 1); // Include quantity in total price
    }, 0);

    return (
        <div>
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            <Button variant="contained" color="primary" onClick={handleCheckout}>
                Proceed to Checkout
            </Button>
        </div>
    );
};

export default Checkout;







// import React from 'react';
// import axios from 'axios';
// import { useAppContext } from '../context/AppContext';
// import { Button } from '@mui/material';
// // import jwt_decode from 'jwt-decode'; // Assuming you're using JWT for authentication
// import { jwtDecode } from 'jwt-decode';


// const Checkout = () => {
//     const { state, dispatch } = useAppContext(); // Accessing basket data from context

//     // Function to get logged-in user's email dynamically
//     const getLoggedInUserEmail = () => {
        
//         try {
//             const token = document.cookie
//                 .split('; ')
//                 .find(row => row.startsWith('authToken='))
//                 ?.split('=')[1]; // Retrieve token from cookies
//             if (!token) throw new Error('Auth token not found.');
//             const decoded = jwtDecode(token);
//             return decoded.email; // Extract email from the payload
//         } catch (error) {
//             console.error('Error retrieving logged-in user email:', error);
//             alert('Failed to retrieve user email. Please log in again.');
//             return null;
//         }
//     };

//     const handleCheckout = async () => {
//         try {
//             const email = getLoggedInUserEmail(); // Dynamically get the logged-in user's email
//             if (!email) return; // Stop if email is not retrieved

//             const items = state.basket.map((item) => ({
//                 id: item.id,
//                 title: item.title,
//                 price: item.price,
//                 image: item.image,
//                 rating: item.rating,
//                 quantity: item.quantity || 1, // Default to 1 if no quantity is set
//                 total: item.price * (item.quantity || 1), // Calculating total price for each item
//             }));

//             // Send basket data along with email to backend
//             const response = await axios.post('http://localhost:4000/api/checkout', {
//                 email,
//                 checkout_data: items,
//                 orderHistory: items, // If required to store order history
//             });

//             if (response.status === 200) {
//                 alert('Order placed successfully!');
//                 dispatch({ type: 'CLEAR_BASKET' }); // Clear basket on successful order
//             }
//         } catch (error) {
//             console.error('Error during checkout:', error);
//             alert('Failed to place the order.');
//         }
//     };

//     return (
//         <Button variant="contained" color="primary" onClick={handleCheckout}>
//             Proceed to Checkout
//         </Button>
//     );
// };

// export default Checkout;
















// import React from 'react';
// import axios from 'axios';
// import { useAppContext } from '../context/AppContext';
// import { Button } from '@mui/material';

// const Checkout = () => {
//     const { state, dispatch } = useAppContext(); // Accessing basket data from context

//     const handleCheckout = async () => {
//         try {
//             const userId = 'user123'; // Replace with actual logged-in user ID
//             const total = state.basket.reduce((acc, item) => acc + item.price, 0);
//             // Send basket data to backend
//             const response = await axios.post('http://localhost:4000/api/checkout', {
//                 items: state.basket,
//                 userId,
//                 total,
//             });

//             if (response.status === 200) {
//                 // alert('Order placed successfully!');
//                 // Clear the basket in context
//                 dispatch({ type: 'CLEAR_BASKET' });
//             }
//         } catch (error) {
//             console.error('Error during checkout:', error);
//             alert('Failed to place the order.');
//         }
//     };

//     return (
//         <Button variant="contained" color="primary" onClick={handleCheckout}>
//             Proceed to Checkout
//         </Button>
//     );
// };

// export default Checkout;
