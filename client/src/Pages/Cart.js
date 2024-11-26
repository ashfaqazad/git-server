import React from 'react';
import { useAppContext } from '../context/AppContext';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import Checkout from './Checkout';
import { Box, Grid, Typography, Paper } from '@mui/material';

const Cart = () => {
    const { state, dispatch } = useAppContext();

    console.log("Basket State in Cart:", state.basket);

    const handleRemoveFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id } });
    };

    return (
        <Box sx={{ padding: 2, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Grid container spacing={2}>
                {/* Left Section */}
                <Grid item xs={12} md={9}>

                    <Paper
                        elevation={3}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            padding: 0,
                            marginBottom: 2,
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src="/Images/Amazon.webp"
                            alt="Cart Banner"
                            style={{
                                width: '100%',
                                height: '300px', // Maintains aspect ratio
                                display: 'block', // Removes extra spacing caused by inline images
                            }}
                        />
                    </Paper>



                    {/* <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <img
                            src="/Images/Amazon.webp"
                            alt="Cart Banner"
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                    </Paper> */}




                    <Typography variant="h5" gutterBottom>
                        Your Shopping Cart
                    </Typography>
                    {state.basket.length > 0 ? (
                        state.basket.map((item, index) => (
                            <Paper
                                key={item.id || index}
                                elevation={3}
                                sx={{ padding: 2, marginBottom: 2 }}
                            >
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    rating={item.rating}
                                    price={item.price}
                                    actionType="remove"
                                    onRemove={() => handleRemoveFromCart(item.id)}
                                />
                            </Paper>
                        ))
                    ) : (
                        <Typography variant="body1">Your cart is empty.</Typography>
                    )}
                </Grid>

                {/* Right Section */}
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Subtotal />
                    </Paper>
                    <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                        <Checkout />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Cart;












// import React from 'react';
// import { useAppContext } from '../context/AppContext';
// import CheckoutProduct from './CheckoutProduct'; // CheckoutProduct ko display karna hai
// import Subtotal from './Subtotal';
// import Checkout from './Checkout';

// const Cart = () => {
//     const { state, dispatch } = useAppContext();  // Ensure that you're destructuring both 'state' and 'dispatch' from context

//     console.log("Basket State in Cart:", state.basket); // Properly accessing basket from state

//     // Remove product from the cart locally
//     const handleRemoveFromCart = (id) => {
//         dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id } }); // Local state ko update karenge
//     };

//     return (
//         <div className='container-fluid'>
//             <div className='row mt-2 min-vh-100'>
//                 <div className='col-9'>
//                     <img src="/Images/Amazon.webp" className='w-100' style={{ height: '200px' }} alt="" />
//                     <div className='mt-2'>
//                         <h2>Your Shopping Cart</h2>

//                         {state.basket.length > 0 ? (  // Accessing basket from state
//                             state.basket.map((item, index) => (
//                                 <div key={item.id || index } className='mb-4'>
//                                     <CheckoutProduct
//                                         id={item.id}
//                                         title={item.title}
//                                         image={item.image}
//                                         rating={item.rating}
//                                         price={item.price}
//                                         actionType="remove" // Action type ko pass kar rahe hain
//                                         onRemove={() => handleRemoveFromCart(item.id)} // Remove karne ke liye function pass karna hai
//                                     />
//                                 </div>
//                             ))
//                         ) : (
//                             <p>Your cart is empty.</p>
//                         )}
//                     </div>
//                 </div>
//                 <div className='col-3'>
//                     {/* Subtotal Component */}
//                     <Subtotal />
//                     <Checkout />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;

