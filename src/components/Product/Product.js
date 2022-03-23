import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'

const Product = (props) => {

    const { handleAddToCart, product } = props
    const { img, name, price, seller, ratings } = product;

    return (
        <div className='product-div'>
            <img src={img} alt="" />

            {/* Prodcut name & price */}
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>

                <div className='seller-rating'>
                    <p className='product-seller'>Manufacture: {seller}</p>
                    <p className='product-rating'>Rating: {ratings}</p>
                </div>


            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;