import React from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';
import { Button } from '@mui/material';

const Checkout = () => {
    const { state, dispatch } = useAppContext(); // Accessing basket data from context
    console.log(state.basket);



    const handleCheckout = async () => {
        try {
            const email = 'aftab@gmail.com'; // Replace with actual logged-in user's email
            const items = state.basket.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                rating: item.rating,
                // Assuming quantity is stored in `item.quantity` or set it to a default value
                quantity: item.quantity || 1,  // Default to 1 if no quantity is set
                total: item.price * (item.quantity || 1),  // Calculating total price for each item
            }));
    
            console.log(items); // Debugging items array before sending
    
            // Send basket data to backend
            const response = await axios.post('http://localhost:4000/api/checkout', {
                email,
                items,
                
            });

            console.log(response.data);  // Check response data

    
            if (response.status === 200) {
                alert('Order placed successfully!');
                // Clear the basket in context
                dispatch({ type: 'CLEAR_BASKET' });
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            alert('Failed to place the order.');
        }
    };
    



    // const handleCheckout = async () => {
    //     try {
    //         const email = 'aftab@gmail.com'; // Replace with actual logged-in user's email


    //         const items = state.basket.map((item) => {
    //             console.log(item); // Debugging each item
    //             return {
    //                 id: item.id,
    //                 title: item.title,
    //                 price: item.price,
    //                 image: item.image,
    //                 rating: item.rating,
    //                 total: item.total,
    //             };
    //         });
            
    //         // const items = state.basket.map((item) => ({
    //         //     id: item.id,
    //         //     title: item.title,
    //         //     price: item.price,
    //         //     image: item.image,
    //         //     rating: item.rating,
    //         //     total: item.total, // Assuming quantity is stored as `item.quantity`
    //         // }));


    //         // Send basket data to backend
    //         const response = await axios.post('http://localhost:4000/api/checkout', {
    //             email,
    //             items,
    //         });

    //         if (response.status === 200) {
    //             alert('Order placed successfully!');
    //             // Clear the basket in context
    //             dispatch({ type: 'CLEAR_BASKET' });
    //         }
    //     } catch (error) {
    //         console.error('Error during checkout:', error);
    //         alert('Failed to place the order.');
    //     }
    // };

    return (
        <Button variant="contained" color="primary" onClick={handleCheckout}>
            Proceed to Checkout
        </Button>
    );
};

export default Checkout;








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
