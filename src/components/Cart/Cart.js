import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    // console.log(cart)
    console.log(cart)


    //  Calculation 
    let quantity = 0;
    let total = 0;
    let shippingCharge = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping;
    }
    const tax = parseFloat((total * 0.10).toFixed(2));
    const grandTotalAmount = (total + shippingCharge + tax);



    /* Cart Container */
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <hr />

            <div className='cart-container-elements'>
                <p>Selected item: {quantity}</p>
                <p> Total price: ${total}</p>
                <p> Shipping charge: ${shippingCharge}</p>
                <p> Tax: ${tax}</p>
                <h3>Grand Total: ${parseFloat(grandTotalAmount).toFixed(2)}</h3>
                {props.children}
            </div>

        </div>
    );
};

export default Cart;