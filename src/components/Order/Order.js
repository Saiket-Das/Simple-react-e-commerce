import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hook/useCart';
import useProducts from '../Hook/useProduct';
import OrderItems from '../OrderItems/OrderItems';

import './Order.css'


const Order = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();


    // Remove Button Event Handler 
    const handleRemoveProduct = (selectedProduct) => {
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        setCart(rest)

        // Remove from Local Storage
        removeFromDb(selectedProduct.id)
    }


    return (
        <div className='shop-container'>

            {/* Product Container in Order page  */}
            <div className="order-items-container">
                {
                    cart.map(product =>
                        <OrderItems
                            key={product.id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></OrderItems>)
                }

            </div>

            {/* Cart Container in Order page  */}
            <div className="cart-container">

                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipment')} className='review-btn'>Proceed Shipping </button>
                </Cart>
            </div>

        </div>
    );
};

export default Order;