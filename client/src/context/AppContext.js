// src/context/AppContext.js
import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
   
    basket: [],
    user: null,  // User will be null initially until login
};


// const initialState = {
//     basket: [
//         {
//             id: 1,
//             title: "Sample Product",
//             image: "https://via.placeholder.com/150",
//             rating: 4,
//             price: 100,
//         },
//     ],
//     user: null,
// };


export const total = (basket) => {
    return basket.reduce((amount, item) => amount + item.price, 0);
};


const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload],
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload.id),
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                basket: [],
            };
            case 'CLEAR_BASKET': // Add this case
            return {
                ...state,
                basket: [],
            };

        default:
            return state;
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use app context
export const useAppContext = () => {
    return useContext(AppContext);
};
