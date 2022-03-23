import React from 'react';

const Cart = ({ cart }) => {

    // const { cart } = props.cart
    return (
        <div>
            {/* Cart Container */}
            <h2>Order Summary</h2>
            <hr />
            <div className='cart-container-elements'>
                <p>Selected item: {cart.length}</p>
                <p> Total price: { }</p>
            </div>

        </div>
    );
};

export default Cart;