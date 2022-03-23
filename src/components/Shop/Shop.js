import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    // Cart Button Handler 
    const [cart, setCart] = useState([])


    const handleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }



    return (
        <div className='shop-container'>

            {/* Product Container */}
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>


            {/* Cart Container */}
            <div className="cart-container">
                <h2>Order Summary</h2>
                <hr />
                <div className='cart-container-elements'>
                    <p>Selected item: {cart.length}</p>
                </div>

            </div>
        </div>
    );
};

export default Shop;