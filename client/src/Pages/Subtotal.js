import React from 'react'
import { useAppContext } from '../context/AppContext';
import { total } from '../context/AppContext';
// import Checkout from '../../../server/models/Checkout';


const Subtotal = () => {
    const { basket, dispatch} = useAppContext().state;


    return (
        <>
            <div>
                <p>Subtotal ({basket.legnth} items): <strong>${total(basket)}</strong></p>
                <input type="checkbox" /> This is contains gift
                {/* <Checkout /> */}
                {/* <button className='btn btn-warning rounded-0 mt-2'>Proceed to Checkout</button> */}
            </div>
        </>
    )
}

export default Subtotal