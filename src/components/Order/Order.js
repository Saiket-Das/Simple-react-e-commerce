import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hook/useCart';
import OrderItems from '../OrderItems/OrderItems';
import PageTitle from '../Page Title/PageTitle';

import './Order.css'


const Order = () => {

    // const [products, setProducts] = useProducts();
    // const [cart, setCart] = useCart(products);

    // const navigate = useNavigate();


    // // Remove Button Event Handler 
    // const handleRemoveProduct = (selectedProduct) => {
    //     const rest = cart.filter(product => product._id !== selectedProduct._id);
    //     setCart(rest)

    //     // Remove from Local Storage
    //     removeFromDb(selectedProduct._id)
    // }

    const [cart, setCart] = useCart();
    const navigate = useNavigate();
    const handleRemoveProduct = selectedProduct => {
        const rest = cart.filter(pd => pd._id !== selectedProduct._id);
        setCart(rest);
        removeFromDb(selectedProduct._id);
    }


    return (
        <div className='shop-container'>
            {/* Page TItle  */}
            <PageTitle title='Order'></PageTitle>


            {/* Product Container in Order page  */}
            <div className="order-items-container">
                {
                    cart.map(product =>
                        <OrderItems
                            key={product._id}
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