import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    // Products data load 
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    // Cart Button Handler 
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        // New product push in Cart array 
        const newCart = [...cart, product]
        console.log(newCart);
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


            {/* Cart Container --- Cart.js*/}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;