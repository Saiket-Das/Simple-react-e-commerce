import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './OrderItems.css'

const OrderItems = (props) => {

    const { product, handleRemoveProduct } = props
    const { name, price, shipping, quantity, img } = product;


    return (
        <div className='order-items'>

            {/* Cart product image container */}
            <div>
                <img src={img} alt="" />
            </div>

            {/* Product details container*/}
            <div className='order-details-container'>
                <div className='order-details' title={name}>
                    <h3>Name: {name.length > 20 ? name.slice(0, 20) + '...' : name}</h3>
                    <p>Price: ${price}</p>
                    <p>Shipping charge: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>

                {/* Delete button  */}
                <div >
                    <button className='delete-btn'><FontAwesomeIcon icon={faTrashAlt} onClick={() => handleRemoveProduct(product)} className='delete-icon'></FontAwesomeIcon></button>
                </div>
            </div>

        </div>

    );
};

export default OrderItems;