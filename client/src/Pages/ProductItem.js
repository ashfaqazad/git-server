import React from "react";
import { useAppContext } from "../context/AppContext";
import { Stack, Card, CardContent, CardMedia, Typography, Button, Box, Grid } from "@mui/material";

const ProductItem = ({ id, title, image, rating, price, imgStyle, actionType }) => {
  const { state, dispatch } = useAppContext();

  // Add to Basket Functionality
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { id, title, image, rating, price, imgStyle },
    });
  };

  // Remove from Basket Functionality
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: { id },
    });
  };

  return (

    // <Grid container spacing={3}

    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     mb: 3, // Space between cards
    //   }}
    // >

    <Stack
      spacing={3}
      direction="row"
      sx={{
        justifyContent: "center", // Horizontally center items
        alignItems: "center", // Vertically center items
        // height: "100vh", // Example to vertically center in viewport
        mb: 3,
      }}
    >
      <Card
        sx={{
          width: "100%", // Ensure card takes full width within the grid cell
          maxWidth: 345, // Maximum width of the card
          height: 600, // Fixed height for all cards
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={image}
          sx={{
            width: "100%", // Ensures the image takes full width of the card
            height: { xs: "500px", sm: "350px" }, // Responsive height for different screen sizes
            objectFit: "cover", // Adjusts image to cover the space properly
            ...imgStyle,
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Rs. {price}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 1,
              flexWrap: "wrap",
            }}
          >
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </Box>

          {/* Conditional Button Rendering */}
          {actionType === "add" ? (
            <Button
              variant="contained"
              color="warning"
              fullWidth
              onClick={addToBasket}
              sx={{ mt: 1 }}
            >
              Add Product
            </Button>
          ) : (
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={removeFromBasket}
              sx={{ mt: 1 }}
            >
              Remove Product
            </Button>
          )}
        </CardContent>
      </Card>
      </Stack>
    // </Grid>
  );
};

export default ProductItem;








// import React from 'react';
// import { useAppContext } from '../context/AppContext';
// import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

// const ProductItem = ({ id, title, image, rating, price, imgStyle, actionType }) => {
//     const { state, dispatch } = useAppContext();

//     // Add to Basket Functionality
//     const addToBasket = () => {
//         dispatch({
//             type: 'ADD_TO_BASKET',
//             payload: { id, title, image, rating, price, imgStyle },
//         });
//     };

//     // Remove from Basket Functionality
//     const removeFromBasket = () => {
//         dispatch({
//             type: 'REMOVE_FROM_BASKET',
//             payload: { id },
//         });
//     };

//     return (
//         <Card sx={{ maxWidth: 345, boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//             <CardMedia
//                 component="img"
//                 alt={title}
//                 image={image}
//                 sx={{ width: '250px', height: '250px', objectFit: 'contain', ...imgStyle }}
//             />
//             <CardContent sx={{ textAlign: 'center' }}>
//                 <Typography variant="h6" component="h4">{title}</Typography>
//                 <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Rs. {price}</Typography>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
//                     {Array(rating).fill().map((_, i) => (
//                         <span key={i}>⭐</span>
//                     ))}
//                 </Box>

//                 {/* Conditional Button Rendering */}
//                 {actionType === "add" ? (
//                     <Button variant="contained" color="warning" onClick={addToBasket}>
//                         Add Product
//                     </Button>
//                 ) : (
//                     <Button variant="contained" color="error" onClick={removeFromBasket}>
//                         Remove Product
//                     </Button>
//                 )}
//             </CardContent>
//         </Card>
//     );
// };

// export default ProductItem;
