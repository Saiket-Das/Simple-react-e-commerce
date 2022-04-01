import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hook/useCart';
import useProducts from '../Hook/useProduct';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    // Products data load 
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)


    /*---------- // Use that in another component // ----------

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    // Cart Button Handler 
    // const [cart, setCart] = useState([])

    // useEffect(() => {
    //     const storedCart = getStoreCart()

    //     const savedCart = []
    //     // Get the Object property(ID) from local LOCAL Storage Object 
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id);

    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct)
    //         }
    //     }
    //     setCart(savedCart)
    // }, [products])

    --------- // Use that in another component // --------- */


    const handleAddToCart = (selectedProduct) => {
        // New product push in Cart array 

        const existProduct = cart.find(product => product.id === selectedProduct.id);
        let newCart = []
        if (!existProduct) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            existProduct.quantity = existProduct.quantity + 1;
            newCart = [...rest, existProduct]
        }
        setCart(newCart);

        // Call Local storage Database 
        addToDb(selectedProduct.id);
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
                <Cart cart={cart}>
                    <Link to={'/order'}>
                        < button className='review-btn'> Review Order</button>
                    </Link>
                </Cart>
            </div >
        </div >
    );
};

export default Shop;