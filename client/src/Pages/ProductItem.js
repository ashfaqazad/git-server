import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const ProductItem = ({ id, title, image, rating, price, imgStyle, actionType }) => {
    const { state, dispatch } = useAppContext();

    // Add to Basket Functionality
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: { id, title, image, rating, price, imgStyle },
        });
    };

    // Remove from Basket Functionality
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: { id },
        });
    };

    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <CardMedia
                component="img"
                alt={title}
                image={image}
                sx={{ width: '250px', height: '250px', objectFit: 'contain', ...imgStyle }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="h4">{title}</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Rs. {price}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                    {Array(rating).fill().map((_, i) => (
                        <span key={i}>⭐</span>
                    ))}
                </Box>

                {/* Conditional Button Rendering */}
                {actionType === "add" ? (
                    <Button variant="contained" color="warning" onClick={addToBasket}>
                        Add Product
                    </Button>
                ) : (
                    <Button variant="contained" color="error" onClick={removeFromBasket}>
                        Remove Product
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default ProductItem;
